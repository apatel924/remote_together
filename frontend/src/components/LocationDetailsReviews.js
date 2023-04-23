
import { React, useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { FormControl, Button } from '@mui/material';
import { AuthContext } from '../providers/authProvider'



export function LocationDetailsReviews() {

  const { auth, user } = useContext(AuthContext)
  const { id } = useParams()
  // const history = useHistory()

  // review rating  description
  const [reviews, setReviews] = useState([])
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState('')

  // console.log('user from locations', user)
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
  // there is a bug when adding a non number into the review_rating will send back a unresolved promise crashing the site
  const addReviewHandler = async (e) => {

    e.preventDefault()
    console.log('this function hits');
    let review = {
      review_rating: rating,
      review_comment: description,
      username: user,
    }
    // let reviewJSON = JSON.stringify(review);
    console.log('review', review);
    axios.post(`/api/review`, review)
      .then((result) => {
        //const reversed = result.reverse();
        //console.log('reversed:', reversed);
        console.log('response', result);
        const lastReview = result.data;
        setReviews(prev => [
          lastReview, ...prev
        ])
      });
  }


  return (
    <div>
      <h2 className='text-center'>Add Review</h2>
      <hr />
      <form onSubmit={addReviewHandler}>
        <div >
          <label>Rating</label>
          <textarea
            value={rating}
            id={'rating'}
            onChange={(e) => setRating(e.target.value)}
            type="number"
          >
          </textarea>
        </div>

        <div >
          <label>Description</label>
          <textarea
            value={description}
            id={'description'}
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
          return (
            <div className="div_mapList-locations" key={index}>
              <li className="MapList_div-styling">
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
