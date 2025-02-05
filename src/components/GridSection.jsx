import wukongImg from "../assets/Black-Myth-Wukong.png";
import forzaImg from "../assets/forza-hot-wheels.jpg";
import redDeadImg from "../assets/red-dead.jpg";
function GridSection() {
  return (
    <div className="space-y-10">
      <h3 className="font-bold text-3xl">Elevate Your Gaming Experience</h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <img className="" src={wukongImg} />
        <div className="space-y-4">
          <p className="text-lg font-semibold">
            See what the pro gamers are playing!
          </p>
          <p className="font-medium ">
            "Step into the world of pro gamers and explore the titles that
            dominate their screens. From action-packed adventures to competitive
            showdowns, find out what’s trending in the gaming community. Dive
            into reviews, ratings, and insights from the best in the game. Ready
            to level up your gaming experience?"
          </p>
        </div>
      </div>
      <div
        className="
      flex md:flex-row flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-4">
          <p className="font-bold text-lg">
            Get all the user reviews before buying a game
          </p>
          <p className="font-medium">
            "Don’t spend your hard-earned money without knowing what’s truly
            worth it. Explore honest and detailed reviews from gamers just like
            you. From the latest blockbusters to hidden indie gems, uncover
            what’s hot and what’s not. Your next great gaming experience starts
            here!"
          </p>
        </div>
        <img className="" src={forzaImg} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img src={redDeadImg} />
        <div className="space-y-4">
          <p className="font-bold text-lg">
            Learn about new games that are out just now!
          </p>
          <p className="font-medium">
            "Stay ahead in the gaming world with updates on the latest releases.
            Discover fresh titles making waves, read reviews from early players,
            and find your next favorite game. Whether you're into action,
            strategy, or storytelling, there's always something new to explore!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default GridSection;
