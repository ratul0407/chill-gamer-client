import { useContext, useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import Rating from "react-rating";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

function Review() {
  const { user, loading } = useContext(AuthContext);

  const navigate = useNavigate();
  const data = useLoaderData();
  const [added, setAdded] = useState(false);

  const { thumbnail, title, review, rating, year, name, email, genre } = data;
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  const watchlistData = {
    thumbnail,
    title,
    review,
    rating,
    year,
    name,
    email,
    genre,
    userEmail: user?.email,
    userName: user?.displayName,
  };

  const handleAddToWatchList = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    fetch("https://chill-game-server-nu.vercel.app/api/watchlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchlistData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setAdded(true);
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Game successfully added to your watchlist",
          });
        }
      });
  };

  return (
    <div className="grid place-content-center py-20">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="w-full" src={thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <span className="font-bold bg-blue-500 text-white w-fit p-2 rounded-lg">
            {genre}
          </span>
          <div>
            <p>{email}</p>
            <p className="font-medium text-gray-700">Review by : {name}</p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{review}</p>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">Rating: {rating}/5</span>
            <Rating
              initialRating={rating}
              readonly
              fullSymbol={<IoStar size={20} color="gold" />}
              emptySymbol={<IoStarOutline size={20} color="gold" />}
            />
          </div>

          <div className="card-actions justify-end">
            <button
              disabled={added}
              className="btn btn-primary dark:text-white"
              onClick={handleAddToWatchList}
            >
              Add To Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
