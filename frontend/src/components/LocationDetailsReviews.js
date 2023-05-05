import { React, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { TextField } from "@mui/material";
import { AuthContext } from "../providers/authProvider";
import "./Buttons.css";
import { AiOutlineLike, AiOutlineDislike, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";


export function LocationDetailsReviews() {
  const { auth, user } = useContext(AuthContext);
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(0);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  useEffect(() => {
    const getSingleLocationData = () => {
      axios
        .get("../api/review")
        .then((response) => {
          console.log("response", response);
          const reviewsWithLikes = response.data.review.map((review) => ({
            ...review,
            like: Number(0),
            dislike: Number(0),
            likeActive: false,
            dislikeActive: false,
          }));
          console.log("reviewsWithLikes", reviewsWithLikes);
          setReviews(reviewsWithLikes);
        })
        .catch((error) => {
          console.error("error getting reviews", error);
        });
    };
    getSingleLocationData();
  }, []);

  function likes() {
    if (likeActive) {
      setLikeActive(false);
      setLike(like - 1);
    } else {
      setLikeActive(true);
      setLike(like + 1);
      //  if(dislikeActive) {
      //   setDislikeActive(false)
      //    setLike(like+1)
      // setDislike(dislike-1)
      //  }
    }
  }

  function dislikes() {
    if (dislikeActive) {
      setDislikeActive(false);
      setDislike(dislike - 1);
    } else {
      setDislikeActive(true);
      setDislike(dislike + 1);
      //  if(likeActive){
      //   setLikeActive(false)
      //   setDislike(dislike+1)
      // setLike(like-1)
    }
    //}
  }




  const addReviewHandler = async (e) => {
    e.preventDefault();

    let review = {
      review_rating: rating,
      review_comment: description,
      username: user,
    };
    setRating("");
    setDescription("");

    axios.post(`/api/review`, review).then((result) => {

      const lastReview = result.data;
      setReviews((prev) => [lastReview, ...prev]);
    });
  };

  const deleteReviewHandler = (index) => {
    if (user === reviews[0].username) {
      console.log("inside conditional");

      let newReview = reviews; // Create a new variable called newReview and assign it the value of the reviews array. This creates a copy of the original reviews array.
      newReview.splice(index, 1); // Use the splice method to remove one element from the newReview array at the specified index. The 1 indicates the number of elements to be removed.
      setReviews([...newReview]); // Call the setReviews function to update the state with the new newReview array. The spread syntax [...newReview] is used to create a new array with the same elements as newReview, effectively making a shallow copy of newReview to trigger a state update.
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-center font-bold mb-3 text-lg">Add Review</h2>

      <hr />
      <form onSubmit={addReviewHandler}>
        <div>
          <div className="pb-4">
            <TextField
              className="flex justify-center m-10"
              sx={{ width: 400 }}
              color="primary"
              variant="outlined"
              type="search"
              label="Add rating"
              size="large"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        </div>

        <div>
          <TextField
            className="flex justify-center m-10"
            sx={{ width: 400 }}
            color="primary"
            variant="outlined"
            type="search"
            label="Share details of your experience"
            size="large"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button
            className="flex flex-row items-center justify-center mx-28 mt-4 w-40 h-14 bg-slate-100 hover:bg-slate-200 rounded-xl
transition-all duration-300 ease-linear"
            variant="primary"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      <br />
      <h5 className="font-bold italic text-lg">Location Reviews</h5>
      <hr />

      {reviews.length > 0 ? (
        reviews.map((review, index) => {
          return (
            <div
              className="break-words flex flex-col mb-6 mt-4 w-[40rem] mx-10 text-lg border-2 border-slate-200 rounded-md ring-2 ring-slate-200 hover:ring-8"
              key={index}
            >
              <li className="MapList_div-styling flex flex-col gap-4">
                <p>
                  {" "}
                  <span className="font-bold">Username:</span> {review.username}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Rating:</span>{" "}
                  {review.review_rating}
                </p>
                <p>
                  <span className="font-bold">Comment:</span>{" "}
                  {review.review_comment}
                </p>

                <div className="flex flex-row justify-between gap-8 items-center">
                  <div>

                    {auth && user === review.username && (
                      <>
                        <button className="gap-4" onClick={() => deleteReviewHandler(index)}>
                          <AiOutlineDelete size={24} />
                        </button>

                        <button>
                          <AiOutlineEdit size={24} /></button>
                      </>
                    )}
                  </div>
                  <div>
                    <button onClick={() => likes()}> <AiOutlineLike size={24} /></button> {like}
                    <button onClick={() => dislikes()}> <AiOutlineDislike size={24} /> </button> {dislike}

                  </div>
                </div>
              </li>

            </div>
          );
        })
      ) : (
        <p> No reviews for this location </p>
      )}
    </div>
  );
}
