import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
const ServiceData = ({s}) => {
    const {_id, title, img, rating, price, description } = s;
    return (
        <div>
              <div className="card w-96 bg-white text-primary-content shadow-xl">
          <figure className="px-10 pt-10">
          <PhotoProvider>
            <PhotoView src={img}>
            <img
              src={img}
              alt="Shoes"
              className="rounded-lg w-50 h-60"
            />
              </PhotoView>
             </PhotoProvider>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <h5>Price: ${price}</h5>
            <h4>Rating:  {rating}</h4>
            <p>{description.slice(0, 100)}...</p>
            <div className="card-actions">
              <Link to={`/services/${_id}`}>
              <button className="btn btn-secondary">learn more</button>
              </Link>
            </div>
          </div>
        </div>
       
        </div>
    );
};

export default ServiceData;