import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

function WatchList() {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  const myWatchlist = data.filter((item) => item.userEmail === user.email);
  const uniqueGames = myWatchlist.filter(
    (value, index, arr) =>
      index ===
      arr.findIndex(
        (t) => t.title === value.title // Compare based on name (title)
      )
  );
  const [watchlist, setWatchlist] = useState(uniqueGames);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Publishing Year</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {watchlist?.map((item, index) => {
              return (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.genre}</td>
                  <td>{item.year}</td>
                  <td>{item.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WatchList;
