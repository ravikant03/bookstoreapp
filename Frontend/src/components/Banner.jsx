
import { Link } from "react-router-dom";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row gap-8 my-10 pt-20">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-6 md:mt-24">
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Build and manage your{" "}
              <span className="text-pink-500">book collection</span>
            </h1>
            <p className="text-sm md:text-lg leading-7">
              BookStore helps you store book details, add image links, write clear descriptions,
              and manage your collection with simple CRUD operations.
            </p>
          </div>
          <Link to="/books" className="btn mt-6 btn-secondary w-full sm:w-fit">
            Get Started
          </Link>
        </div>
        <div className="order-1 w-full mt-6 md:mt-20 md:w-1/2">
          <img
            src={banner}
            className="w-full max-w-[550px] mx-auto md:h-[460px] object-contain"
            alt="Books and learning illustration"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
