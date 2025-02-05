import { IoStar, IoStarOutline } from "react-icons/io5";
import Rating from "react-rating";
import { Link } from "react-router-dom";

function GameCard({ review }) {
  const { _id, title, rating, thumbnail, genre } = review;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img className=" w-full" src={thumbnail} alt="Game image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title} </h2>
        <p className="font-bold  bg-blue-500 w-fit p-2 text-white rounded-md">
          {genre}
        </p>
        <div className="flex items-center gap-2">
          <span className="font-bold ">Rating {rating}/5</span>
          <Rating
            readonly
            initialRating={rating}
            emptySymbol={<IoStarOutline size={20} color="gold" />}
            fullSymbol={<IoStar size={20} color="gold" />}
          />
        </div>
        <div className="card-actions justify-end">
          <Link to={`/review/${_id}`} className="btn btn-success text-white">
            Explore Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
