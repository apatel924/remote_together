
import React from 'react';

export function LocationDetails_Reviews() {
  const fromDB = [
    {
      user_id: "Bob",
      review_comment: 'They had lots of comfortable seating and the wifi was fast!',
      review_rating: 4
    },
    {
      user_id: "Oliver",
      review_comment: 'no sitting area',
      review_rating: 2
    },
    {
      user_id: "Monica",
      review_comment: 'quiet area with many outlets',
      review_rating: 5
    }
  ]
  
  const newReviews = fromDB.map((review) => {
    return (
      <div>
        <li>
          <p>{review.user_id}</p>
          <p>{review.review_comment}</p>
          <p>{review.review_rating}</p>
        </li>
      </div>
    )
  })
  return (
  <div>
    {newReviews}
    'asdfjkhasdkfjs'
    WHERE ARE YOU??? 
  </div>
  )
}
