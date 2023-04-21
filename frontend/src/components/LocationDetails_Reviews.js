
import { React, useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { FormControl, Button } from '@mui/material';

export function LocationDetails_Reviews() {

  const { id } = useParams()
  // const history = useHistory()

  // review rating  description
  const [reviews, setReviews] = useState([])
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState('')

  // useEffect(() => {

  //   const getSingleLocationData = async () => {
  //     const { review } = await axios.get(`/api/review}`)
  //     console.log(review)
  //     setReviews(review)
  //   }
  //   getSingleLocationData()

  // }, [id])

  useEffect(() => {

    const getSingleLocationData = () => {
      axios.get('/api/review')

        .then((response) => {
          console.log(response.data.review)
          setReviews(response.data.review)
        })
    }

    getSingleLocationData()

  }, [])



  // to add review

  const addReviewHandler = async (e) => {

    e.preventDefault()

    let review = {
      // place_id: id,
      review_rating: rating,
      review_comment: description,
      username: 'username'
    }

    await axios.post(`/api/review`, review)

    //  history.push('/')
  }

  /*  const fromDB = [
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
    ] */

  /*const newReviews = fromDB.map((review,index) => {
    return (
      <div className="div_mapList-locations">
        <li className="MapList_div-styling" key={index}>
          <p>{review.user_id}</p>
          <p>{review.review_comment}</p>
          <p>{review.review_rating} stars</p>
          <p>posted 1 week ago</p>
        </li>
        
      </div> 
    )
  })*/
  return (
    <div>
      <h2 className='text-center'>Add Review</h2>
      <hr />

      <form onSubmit={addReviewHandler}>
        <div >
          <label>Rating</label>
          <textarea
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            type="number"
          >
          </textarea>

        </div>



        <div >
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
          </textarea>

        </div>


        <button variant="primary" type="submit">
          Add Review
        </button>
      </form>

      <br />

      <h5>Location Reviews</h5>
      <hr />

      {reviews.length > 0 ? (
        reviews.map((review, index) => {
          console.log('review', review)
          console.log('review.rating', review.review_rating)
          return (

            <div className="div_mapList-locations">
            <li className="MapList_div-styling" key={index}>
              <p>Username:{review.username}</p>
              <p>Rating: {review.review_rating}</p>
              <p>Comment: {review.review_comment}</p>
            </li>
            
          </div> 
            // <p key={review.id}>Username:{review.username} <br /> Rating: {review.review_rating} <br /> {review.review_comment} <br /> </p>
          )
        })
      ) : (<p> No reviews for this location </p>)}

    </div>
  )
}