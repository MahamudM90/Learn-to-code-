import React, { useEffect, useState } from "react";
import Limit from "../../Home/Home/Limit";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://learn-code-server-lovat.vercel.app/serviceslimit")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner></Banner>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-6 my-5">
          {services.map((service) => (
            <Limit key={service._id} service={service}></Limit>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center py-5">
          <Link to='/services' className="btn">See More </Link>
      </div>
    </div>
  );
};

export default Home;
