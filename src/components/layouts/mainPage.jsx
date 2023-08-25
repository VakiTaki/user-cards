import React from "react";
import MainSlider from "../mainSlider";
import { useParams, Outlet } from "react-router-dom";

function MainPage() {
  const { id } = useParams();
  console.log(id);
  return id ? (
    <Outlet />
  ) : (
    <section className="flex flex-col justify-between gap-2 items-center my-20">
      <h1 className=" uppercase text-3xl text-gray-900 ">Наша команда</h1>
      <div className=" w-1/3 h-1 bg-black bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className=" w-full lg:w-1/2  py-2 px-2">
        <MainSlider />
      </div>
    </section>
  );
}

export default MainPage;