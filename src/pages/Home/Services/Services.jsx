import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useState(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServices(data)
        })
    }, [])
  return (
    <div className="mt-4">
      <div className="text-center space-y-5">
        <h4 className="text-2xl text-[#FF3811] font-bold">Service</h4>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {
            services.map(service => <ServiceCard key={service._id} service={service}/>)
        }
      </div>
      <div className="flex justify-center items-center mt-12">
      <button className="btn bg-white text-[#FF3811] border-2 border-[#FF3811] hover:bg-[#FF3811] hover:text-white font-bold hover:border-[#FF3811] ">More Services</button>
      </div>
    </div>
  );
};

export default Services;
