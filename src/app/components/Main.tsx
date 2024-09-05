"use client";
import { useEffect, useState } from "react";
import { fetchJoke } from "../api/joke/jokeService";

export const Main = () => {
  const [joke, setJoke] = useState("");


  const getJokeForComponent = async () => {
    try {
      const result = await fetchJoke();
      setJoke(result.quote);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    getJokeForComponent();
  }, []);

  return (
    <div className="bg-black flex flex-col min-h-screen ">
      {/* Hero Section */}
      <section className="relative flex-grow overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute inset-0">
          <iframe
            src="https://www.youtube.com/embed/6bpmbREJkr8?autoplay=1&loop=1&playlist=6bpmbREJkr8&start=23&mute=1&controls=0&rel=0"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="YouTube Background Video"
            style={{ pointerEvents: "none", objectFit: "cover" }}
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold my-8">
            Welcome to Chuck Norris Jokes!
          </h1>
          <p className="text-lg mb-8">
            Get ready to laugh with some of the best jokes about Chuck Norris.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <div
        className=" bg-black flex flex-col items-center justify-center  py-10 rounded-lg shadow-lg transition-transform transform  duration-300"
        id="joke"
      >
        <h1 className="text-3xl font-bold text-white mb-2 animate-bounce">
          Chuck Norris Joke 🤠
        </h1>
        <p className="mt-4 text-white text-lg text-center shadow-md p-4 bg-gray-800 rounded-lg">
          {joke}
        </p>
        <button
          onClick={getJokeForComponent}
          className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 shadow-md"
        >
          Get a New Joke 🎉
        </button>
      </div>
    </div>
  );
};
