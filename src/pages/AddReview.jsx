import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

function AddReview() {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("Casual");
  const [yearError, setYearError] = useState("");

  const handleSelectOption = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleRating = (e) => {
    const rating = e.target.value;
    if (rating > 5) {
      e.target.value = 5;
    }
    if (rating <= 0) {
      e.target.value = 1;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setYearError("");
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const review = form.review.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genre = selectedOption;
    const name = form.name.value;
    const email = form.email.value;
    const curYear = new Date().getFullYear();
    if (year > curYear) {
      setYearError("Please add a valid year!");
      return;
    }

    const gameReview = {
      thumbnail,
      title,
      review,
      rating,
      year,
      genre,
      name,
      email,
    };
    fetch("https://chill-game-server-nu.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(gameReview),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        form.reset();
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Review Added Successfully!",
        });
      });
  };
  return (
    <div className="mt-12 md:max-w-xl lg:max-w-2xl md:mx-auto shadow-2xl rounded-xl md:py-12 px-8 font-medium">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6"
      >
        {/* Thumbnail */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbnail</span>
          </label>
          <input
            type="text"
            name="thumbnail"
            placeholder="Enter thumbnail url"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Game Title */}
        <div className="form-control">
          <label htmlFor="" className="label">
            <span className="label-text">Game Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter Game title"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Game Review */}
        <div className="form-control sm:col-span-2">
          <label className="label">
            <span className="label-text">Game Review</span>
          </label>
          <textarea
            name="review"
            className="textarea textarea-bordered resize-y min-h-24"
            placeholder="A detailed review of the game"
          ></textarea>
        </div>

        {/* Rating */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            onChange={(e) => handleRating(e)}
            type="number"
            min={1}
            max={5}
            placeholder="Rate between 1-5"
            name="rating"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Publishing Year */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Publishing Year</span>
          </label>
          <input
            name="year"
            type="number"
            placeholder="Enter publishing year"
            className="input input-bordered w-full"
            required
          />
          <span className="label-text-alt text-red-500">{yearError}</span>
        </div>

        {/* Genre */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Genre</span>
          </label>
          <select
            onChange={handleSelectOption}
            defaultValue="Casual"
            className="select select-bordered"
          >
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Sports">Sports</option>
            <option value="Racing">Racing</option>
            <option value="Survival">Survival</option>
            <option value="Strategy">Strategy</option>
            <option value="Casual">Casual</option>
          </select>
        </div>
        {/* User Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            readOnly
            value={user.displayName}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* User Email */}
        <div className="form-control sm:col-span-2">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            readOnly
            value={user.email}
            className="focus:outline-none input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4 sm:col-span-2 form-control">
          <button className="btn btn-success text-white">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
