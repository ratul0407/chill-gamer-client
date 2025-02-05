import GameCard from "./GameCard";

function RatedGames({ data }) {
  return (
    <div>
      <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {data?.map((review) => {
          return <GameCard key={review._id} review={review} />;
        })}
      </div>
    </div>
  );
}

export default RatedGames;
