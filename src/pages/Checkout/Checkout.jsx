import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
  const services = useLoaderData();
  console.log(services);
  const { title, _id, price, img } = services;
  const {user} = useContext(AuthContext)

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const amount = form.amount.value;
    const order = {
      customerName: name,
      img,
      email,
      date,
      service: title,
      service_id: _id,
      price,
      amount
    }
    console.log(order);

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.insertedId) {
        alert('Booking Successfully')
      }
    })


  }

  return (
    <div>
      <h2 className="text-3xl text-center">Book service: {title}</h2>
      <form onSubmit={handleBookService}>
        <div className="md:flex gap-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input
              type="text"
              placeholder=" Name"
              defaultValue={user?.displayName}
              className="input input-bordered w-3/4 md:w-full"
              name="name"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered w-3/4 md:w-full"
              name="date"
              required
            />
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered w-3/4 md:w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={`$${price}`}
              name="amount"
              className="input input-bordered w-3/4 md:w-full"
              required
            />
          </div>
        </div>
        <input
          className="btn mt-6 w-3/4 md:w-full text-white bg-[#FF3811]"
          type="submit"
          value="Order Confirm"
        />
      </form>
    </div>
  );
};

export default Checkout;
