import { useEffect, useState } from "react";
import { PiNumberThree } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";

function Reviews() {
  const data = useLoaderData();
  const [reviews, setReviews] = useState(data);

  const handleRatingSort = () => {
    fetch("https://chill-game-server-nu.vercel.app/api/ratings")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  };
  const handleYearSort = () => {
    fetch("https://chill-game-server-nu.vercel.app/api/year")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  };

  const handleGenreSort = (e) => {
    fetch(`https://chill-game-server-nu.vercel.app/api/genre/${e.target.value}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  };

  return (
    <div className="py-12 lg:px-10">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-3xl">All Reviews</h3>

        <div>
          {/* sort */}
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 btn-primary">
              Sort
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <button
                  onClick={handleRatingSort}
                  className="btn  btn-sm justify-start font-medium btn-ghost"
                >
                  Sort By Rating
                </button>
              </li>
              <li>
                <button
                  onClick={handleYearSort}
                  className="btn btn-sm text-left btn-ghost font-medium justify-start"
                >
                  Sort By Year Published
                </button>
              </li>
            </ul>
          </div>
          {/* filter */}
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 btn-primary">
              Filter
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <select
                onChange={(e) => handleGenreSort(e)}
                defaultValue="Casual"
                className="select "
              >
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="Sports">Sports</option>
                <option value="Racing">Racing</option>
                <option value="Simulation">Simulation</option>
                <option value="Strategy">Strategy</option>
                <option value="Casual">Casual</option>
              </select>
            </ul>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Genre</th>
              <th>Publishing Year</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {reviews?.map((review, index) => {
              return (
                <tr key={review._id} className="font-medium">
                  <th>{++index}</th>
                  <td>{review.title}</td>
                  <td>{review.genre}</td>
                  <td>{review.year}</td>
                  <td>{review.rating}</td>
                  <td>
                    <Link
                      to={`/review/${review._id}`}
                      className="btn btn-sm btn-success text-white"
                    >
                      Explore details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reviews;
