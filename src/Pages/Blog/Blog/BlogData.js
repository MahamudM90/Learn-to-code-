import React from 'react';

const BlogData = ({blog}) => {
    
    return (
        <div className="card w-96 bg-white text-primary-content">
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <p>
             {blog.description}
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
     
    );
};

export default BlogData;