import React, { useState } from "react";
import Hero from "./Hero";
import { useLoaderData } from "react-router-dom";
import Chefitem from "./Chefitem";
import Loading from "../loader/Loading";


const Home = () => {
  const chefData = useLoaderData();

  return (
    <>
      <Hero />
      <h1 className="container text-center text-3xl md:text-5xl font-bold text-yellow-700 mt-9 underline italic">
        Our Chef's
      </h1>
      <div
        className={`container ${
          Array.isArray(chefData)
            ? chefData.length != 0
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10 md:mb-24 mt-8"
              : "grid-cols-1"
            : "grid-cols-1"
        } `}
      >
        {Array.isArray(chefData) ? (
          chefData.length != 0 ? (
            chefData.map((item) => <Chefitem key={item.chefId} item={item} />)
          ) : (
            <Loading />
          )
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Home;
