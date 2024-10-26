import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const Home = () => {
  const navigate = useNavigate();
  const isLogged = useSelector(selectIsLoggedIn);

  return !isLogged ? (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Welcome to "Magical Dream-list" creator
          </h1>
          <p className="py-6">
            This platform is designed for dreamers and visionaries who wish to
            capture and express their magical dreams—goals and fantasies that
            inspire and motivate. Whether you're aspiring to travel the world,
            start a new venture, or simply embrace your creativity, this space
            allows you to document your dreams and share them with others.
            Embrace the journey of self-discovery and let your imagination soar
            as you create your personal dream list!
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/dreamList")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  ) : (
    <p>asd</p>
  );
};

export default Home;
