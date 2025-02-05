import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function MyReviews() {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://chill-game-server-nu.vercel.app/reviews/${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user.email]); // Make sure to add user.email as a dependency

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Send DELETE request to the server
        fetch(`https://chill-game-server-nu.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });

              setReviews((prevReviews) =>
                prevReviews.filter((review) => review._id !== id)
              );
            }
          })
          .catch((err) => {
            console.error("Error deleting review:", err);
            Swal.fire({
              title: "Error!",
              text: "There was an issue deleting the review.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="py-12 lg:px-10">
      <h3 className="font-bold text-3xl">My Reviews</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Genre</th>
              <th>Publishing Year</th>
            </tr>
          </thead>
          <tbody>
            {/* render reviews */}
            {reviews.map((review, index) => (
              <tr key={review._id} className="font-medium">
                <th>{index + 1}</th>
                <td>{review.title}</td>
                <td>{review.genre}</td>
                <td>{review.year}</td>
                <td className="space-x-2">
                  <Link
                    to={`/updateReview/${review._id}`}
                    className="btn btn-xs btn-warning"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyReviews;
