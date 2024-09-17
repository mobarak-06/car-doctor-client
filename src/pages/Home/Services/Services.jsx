import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useState(() => {
        fetch('service.json')
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            services.map(service => <ServiceCard key={service._id} service={service}/>)
        }
      </div>
    </div>
  );
};

export default Services;
