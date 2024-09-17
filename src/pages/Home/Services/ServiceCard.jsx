import { FaArrowRightLong } from "react-icons/fa6";
const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-[416px]">
        <figure className="px-6 pt-6">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <p className="text-[#FF3811]">Price: ${price}</p>
          <div className="card-actions justify-end">
           <button className="text-[hsl(10,100%,53%)] btn btn-circle bg-white border-white">
            <FaArrowRightLong/>
           </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
