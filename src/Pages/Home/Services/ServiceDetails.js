import React, { useContext} from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const { _id, title, description, img, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.name.value}`;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const review = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      message,
    }

    fetch('https://learn-code-server-lovat.vercel.app/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged) {
        alert('Review Successfully Done')
        form.reset();
      }
    })
    .catch(er=> console.log(er))
  }
  return (
    <div className="py-5">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body text-white">
          <h2 className="text-center text-4xl mb-5">{title}</h2>
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                src={img}
                className="rounded-lg- w-3/4 mx-auto"
                alt="Album"
              />
            </PhotoView>
          </PhotoProvider>
          <h4 className="text-center bold">Price: ${price}</h4>
          <p className="mt-5">{description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <h4 className="text-center py-5 font-bold">Add Your Review</h4>
   {
    user?.email ?
    <>
    <form onSubmit={handleReview}>
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          className="input input-bordered  w-full mb-5 "
          required
        />
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          className="input input-bordered  w-full mb-5 "
          required
        />
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Your message"
          required
        ></textarea>
        <div className="flex justify-center py-5">
          <button className="btn"> submit </button>
        </div>
      </form>
    </>
    :
    <>
         <div className="flex justify-center py-5">
       <Link to='/login'>
       <button className="btn"> LogIN </button>
       </Link>
        </div> 
    </>
   }
      
    </div>
  );
};

export default ServiceDetails;
