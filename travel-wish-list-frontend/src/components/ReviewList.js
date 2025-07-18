import React from "react";
import { reviews } from '../data/reviews';


const ReviewList = () => {
  return (
    <div>
      <h2>Reviews</h2>
      <div className="grid">
        {reviews.map((rev) => (
          <div className="card" key={rev.id}>
            <h4>{rev.author}</h4>
            <p>{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
