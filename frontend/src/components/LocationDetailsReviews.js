
import { React, useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { FormControl, Button } from '@mui/material';
import { AuthContext } from '../providers/authProvider'
import './Buttons.css'
import { counterContext } from '../providers/CounterProvider';




export function LocationDetailsReviews() {

  const { auth, user } = useContext(AuthContext)
  const { id } = useParams()
  // const history = useHistory()

  // review rating  description
  const [reviews, setReviews] = useState([])
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState('')
  const [editId, setEditId] = useState(0);
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  const [likeActive, setLikeActive] = useState(false)
  const [dislikeActive, setDislikeActive] = useState(false)
  console.log('state reviews', reviews);



  // console.log('user from locations', user)
  // useEffect(() => {

  //   const getSingleLocationData = async () => {
  //     const { review } = await axios.get(`/api/review}`)
  //     console.log(review)
  //     setReviews(review)
  //   }
  //   getSingleLocationData()

  // }, [id])

  //BEFORE ASHISH CHANGE
  // useEffect(() => {

  //   const getSingleLocationData = () => {
  //     axios.get('/api/review')

  //       .then((response) => {
  //         // console.log(response.data.review)
  //         setReviews(response.data.review)
  //       })
  //   }

  //   getSingleLocationData()

  // }, [])

  useEffect(() => {
    const getSingleLocationData = () => {
      axios.get('api/review')
        .then((response) => {
          console.log('response', response);
          const reviewsWithLikes = response.data.review.map(review => ({
            ...review,
            like: Number(0),
            dislike: Number(0),
            likeActive: false,
            dislikeActive: false,
          }));

          setReviews(reviewsWithLikes);
        })
        .catch((error) => {
          console.error("error getting reviews", error);
        });
    };
    getSingleLocationData();
  }, []);

  function likes(review) {
    if (review.likeActive) {
      review.likeActive = false;
      review.like--;
      // so we access the object, check if user has interacted with it or not then change it
    } else {
      review.likeActive = true;
      review.like++;
      // need to make it so the user is able to un-dislike a review as well since that would be incrementing it back up
      if (review.dislikeActive) {
        review.dislikeActive = false;
        review.dislike--;
      }
    }
  }

  //dislikes would be opposite?
  function dislikes(review) {
    if (review.dislikeActive) {
      review.dislikeActive = false;
      review.dislike--;
    } else {
      review.dislikeActive = true;
      review.dislike++;
      if (review.likeActive) {
        review.likeActive = false;
        review.like--;
      }
    }
  }

  // need function for likes and dislikes
  // likes needs to take review as the parameter then increment it
  // dislikes needs to do the opposite
  // need to keep track of current user's interaction with the like and dislike so they cant just spam click the likes and dislikes
  // boolean?
  // need this function to only run once with useeffect []?
  // roadmap:
  // need to store likes and dislikes separately for each review, adding getSingleLocationData with likes dislikes, two booleans (likeActive, dislikeActive)
  // update the likes and dislikes functions which can take reviews as object?
  // need to render it after (probably edit the button function in the reviews map statement)
  // exe render the reviews.map with likes(reviews)?
  // the likes and dislike how to change these to save... so i want to change the properties of the review object
  // need to make sure the likeActive and dislikeActive are working with the likes and then increment the likes and dislikes?



  // BEFORE ASHISH CHANGES
  //   function likes() {
  //     if (likeActive) {
  //       setLikeActive(false)
  //       setLike(like-1)
  //     }else{
  //     setLikeActive(true)
  //    setLike(like+1)
  //   //  if(dislikeActive) {
  //    //   setDislikeActive(false)
  //   //    setLike(like+1)
  //      // setDislike(dislike-1)
  //   //  }
  //   }
  // }


  // function dislikes() {
  //   if(dislikeActive) {
  //     setDislikeActive(false)
  //     setDislike(dislike-1)
  //   }else{
  //     setDislikeActive(true)
  //     setDislike(dislike+1)
  //   //  if(likeActive){
  //    //   setLikeActive(false)
  //    //   setDislike(dislike+1)
  //      // setLike(like-1)
  //     }
  //   //}
  // }

  //////////////////////////////////////////

  // to add review
  // there is a bug when adding a non number into the review_rating will send back a unresolved promise crashing the site
  const addReviewHandler = async (e) => {

    e.preventDefault()
    // console.log('this function hits');
    let review = {
      review_rating: rating,
      review_comment: description,
      username: user,
    }
    // let reviewJSON = JSON.stringify(review);
    // console.log('review', review);
    axios.post(`/api/review`, review)
      .then((result) => {
        //const reversed = result.reverse();
        //console.log('reversed:', reversed);
        // console.log('response', result);
        const lastReview = result.data;
        setReviews(prev => [
          lastReview, ...prev
        ])
      });
  }

  // Function to handle delete review
  //  const deleteReviewHandler = async (reviewId, username) => {
  //   // Send DELETE request to the API endpoint with the reviewId and username
  //   axios.delete(`/api/review/${reviewId}/${username}`)
  //     .then(() => {
  //       // Update the reviews state to remove the deleted review
  //       setReviews(prevReviews => prevReviews.filter(review => !(review.username === reviewId && review.username === username)));
  //     })
  //     .catch(error => {
  //       // Handle error if needed
  //       console.error('Failed to delete review:', error);
  //     });
  // }

  //delete review
  // const deleteReviewHandler = (index) => {
  //   let newReview = reviews;
  //   newReview.splice(index, 1);
  //   setReviews([...newReview]);
  // }
  //need to implement logic so it only allows them to delete their own review


  const deleteReviewHandler = (index) => { // Declare a function called deleteReviewHandler that takes an index parameter as input
    console.log('reviews.username', reviews[0].username)
    console.log('reviews.id', reviews[0].id)
    console.log('user', user)
    if (user === reviews[0].username) {
      console.log('inside conditional')
      // console.log('user', user);
      // console.log('review', review);
      // console.log('review.username', review.username);
      // console.log('review.username.user', review.username.user); 
      let newReview = reviews; // Create a new variable called newReview and assign it the value of the reviews array. This creates a copy of the original reviews array.
      newReview.splice(index, 1); // Use the splice method to remove one element from the newReview array at the specified index. The 1 indicates the number of elements to be removed.
      setReviews([...newReview]); // Call the setReviews function to update the state with the new newReview array. The spread syntax [...newReview] is used to create a new array with the same elements as newReview, effectively making a shallow copy of newReview to trigger a state update.
    }
  }




  //edit review
  const editReviewHandler = (index) => {
    let editReview = reviews.find((i) => i.index === index);
    setReviews(editReview.review);
    setEditId(index);
  }

  // BEFORE ASHISH CHANGES
  //   function likes() {
  //     if (likeActive) {
  //       setLikeActive(false)
  //       setLike(like-1)
  //     }else{
  //     setLikeActive(true)
  //    setLike(like+1)
  //   //  if(dislikeActive) {
  //    //   setDislikeActive(false)
  //   //    setLike(like+1)
  //      // setDislike(dislike-1)
  //   //  }
  //   }
  // }


  // function dislikes() {
  //   if(dislikeActive) {
  //     setDislikeActive(false)
  //     setDislike(dislike-1)
  //   }else{
  //     setDislikeActive(true)
  //     setDislike(dislike+1)
  //   //  if(likeActive){
  //    //   setLikeActive(false)
  //    //   setDislike(dislike+1)
  //      // setLike(like-1)
  //     }
  //   //}
  // }



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
                <p>Username: {review.username}</p>
                <p>Rating: {review.review_rating}</p>
                <p>Comment: {review.review_comment}</p>
                {/* Add delete button */}
                {/* {auth && user === reviews[0].username ? <button onClick={() => deleteReviewHandler(index)}> Delete Review</button> 
               : null } */}
                {/* Add edit button */}
                {/* <button onClick={() => editReviewHandler}> Edit Review</button>
                <button onClick={likes}> Like{like}</button>
                <button onClick={dislikes}> Dislike{dislike}</button> */}
                {auth && user === review.username && (
                  <>
                    <button onClick={() => deleteReviewHandler(index)}>
                      Delete Review
                    </button>
                    <button onClick={() => editReviewHandler(index)}>
                      Edit Review
                    </button>
                  </>
                )}
                <button onClick={likes(review)}> Like{review.like}</button>
                <button onClick={dislikes(review)}> Dislike{review.dislike}</button>
              </li>
              {/* {console.log('likes', like)}
            {console.log('review json', review)} */}
            </div>
            // <p key={review.id}>Username:{review.username} <br /> Rating: {review.review_rating} <br /> {review.review_comment} <br /> </p>
          )
        })
      ) : (<p> No reviews for this location </p>)}
    </div>
  )
}