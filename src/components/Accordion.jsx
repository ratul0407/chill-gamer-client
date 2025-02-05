function Accordion() {
  return (
    <div className="space-y-12">
      <h3 className="font-bold text-3xl">Common Questions Asked</h3>
      <div className="lg:max-w-xl mx-auto space-y-4">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is Chill Gamer?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Chill Gamer is a platform where gamers can explore and share
              reviews for a wide range of video games. It’s designed to help you
              make informed decisions about your next gaming adventure by
              hearing directly from the community.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How do I write a review?
          </div>
          <div className="collapse-content">
            <p>
              To write a review, simply create an account or log in, find the
              game you want to review, and click the “Write a Review” button.
              Share your honest thoughts, rate the game, and help others
              discover great titles!
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I trust the reviews on Chill Gamer?
          </div>
          <div className="collapse-content">
            <p>
              We strive to maintain a trustworthy community. Reviews are written
              by users, and our moderation team ensures that the content is
              genuine and respectful.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Are the reviews free to access?
          </div>
          <div className="collapse-content">
            <p>
              Yes! All reviews on Chill Gamer are completely free to browse.
              Whether you’re checking out new releases or looking up classic
              games, you can access user opinions at no cost.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What types of games are covered on Chill Gamer?
          </div>
          <div className="collapse-content">
            <p>
              We cover a wide variety of games, including PC, console, mobile,
              and indie titles. From action-packed adventures to relaxing
              simulation games, you’ll find reviews for every genre.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I recommend games to be added?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely! If you can’t find a game on our site, you can use the
              “Recommend a Game” feature, and we’ll do our best to add it to the
              platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
