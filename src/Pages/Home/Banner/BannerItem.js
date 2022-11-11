import React from "react";
import "./BannerItem.css";
import {Link } from "react-router-dom";

const BannerItem = ({ slide }) => {
  const { image, id, title, description, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img
          src={image}
          alt=""
          className="w-full rounded-br-lg rounded-bl-lg"
        />
      </div>
      <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/2">
        <h1 className="text-6xl font-bold w-36 text-white">
          {title}
        </h1>
        <p className="my-4">{description}</p>

        <div>
          <Link to="/blog"><button className="btn btn-primary  text-white mr-5" data-theme="lofi">Explore Our Blogs</button></Link>
        </div>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4"></div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
