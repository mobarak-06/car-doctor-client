import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const uri = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, [uri,]);

  const handleDelete = (id) => {
    const proceed = confirm('Are You Sure You Want To Delete');
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert('Deleted Successfully !')
          const remaining = bookings.filter(booking => booking._id !== id)
          setBookings(remaining);
        }
      })
    }
  }

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if (data.modifiedCount > 0) {
        // update confirm

        const remaining = bookings.filter(booking => booking._id !== id);
        const updated = bookings.find(booking => booking._id === id);
        updated.status = 'confirm'
        const newBookings = [updated, ...remaining] ;
        setBookings(newBookings);
      }
      

    })
  }
  return (
    <div>
      <h2 className="text-5xl">Your Booking: {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <th>
                  <button onClick={() => handleDelete(booking._id)} className="btn btn-sm hover:bg-red-500 hover:border-red-500 btn-circle btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="avatar">
                    <div className="mask rounded h-24 w-24">
                      <img
                        src={booking.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{booking.service}</td>
                <td>${booking.price}</td>
                <td>{booking.date}</td>
                <th>
                 {
                  booking.status ? <span className="font-bold text-accent">Confirmed</span> :  <button onClick={() => handleBookingConfirm(booking._id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                 }
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
