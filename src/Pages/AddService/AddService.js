import React from "react";
import { useState } from "react";

const AddService = () => {
    const [addService, setAddService] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const image = e.target.image.value;

        const result = {name, price, rating, description, image}
        console.log(result)

        fetch('https://learn-code-server-lovat.vercel.app/add-review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Service Added Successfully')
            }
        })
    }




  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="bg-white text-black p-3 text-2xl rounded-md mb-4">
        <h1>Add Service</h1>
      </div>
      <div className="border-2 rounded-lg p-6">
        <form onSubmit={handleSubmit} className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <label className="input-group">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Title of service"
              className="input input-bordered"
            />
          </label>
          <label className="label">
            <span className="label-text">Service Price</span>
          </label>
          <label className="input-group">
            <span>Price</span>
            <input
              type="text"
              name="price"
              placeholder="Price of service"
              className="input input-bordered"
            />
          </label>
          <label className="label">
            <span className="label-text">Service Rating</span>
          </label>
          <label className="input-group">
            <span>Rating</span>
            <input
              type="text"
              name="rating"
              placeholder="Price of rating"
              className="input input-bordered"
            />
          </label>
          <label className="label">
            <span className="label-text">Service Description</span>
          </label>
          <label className="input-group">
            <span>Description</span>
            <input
              type="text"
              name="description"
              placeholder="Description of service"
              className="input input-bordered"
            />
          </label>
          <label className="label">
            <span className="label-text">Service Image</span>
          </label>
          <label className="input-group">
            <span>ImageURL</span>
            <input
              type="text"
              name="image"
              placeholder="ImageURL of service"
              className="input input-bordered"
            />
          </label>
          <div className="flex items-center justify-center mt-5">
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
