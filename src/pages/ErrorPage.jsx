import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function ErrorPage() {
  const [animationData, setAnimationData] = useState(null);
  useEffect(() => {
    fetch("/error-animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto py-12 space-y-12">
      <h3 className="font-bold text-3xl">Couldn't Find The Page.........</h3>
      <div className="text-xl flex items-center gap-3 ">
        <FaArrowLeft />
        <Link to="/">Go back to Home page</Link>
      </div>
      <Lottie className="w-full h-[50vh]" animationData={animationData} />
    </div>
  );
}

export default ErrorPage;
