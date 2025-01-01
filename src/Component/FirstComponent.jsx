import React from "react";

export default function FirstComponent() {
  return (
    <div className="flex mt-4 justify-center items-center flex-col mb-10">
      <div className="w-[80%] flex justify-center items-center flex-col">
        <div className="mb-4 bg-purple-200 px-3 py-2 rounded-full">
          <p className="flex gap-4 items-center">
            <span className="bg-purple-100 px-2 py-1 rounded-2xl">
              {" "}
              New Feature
            </span>
            <span>Check out the team dashboard ➡️</span>
          </p>
        </div>
        <h1 className="text-6xl font-medium mb-5">
          Beautiful analytics to grow smart
        </h1>
        <p className="w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          voluptatibus! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Quam, aspernatur ad eius praesentium, optio nihil ducimus nisi
          modi laborum consectetur, ipsum odio delectus! Quidem at quos sint
          expedita. Odit, accusamus.
        </p>
        <div className="flex gap-5 mt-5">
          <button className=" px-4 py-2 rounded-md border-2 border-gray-400">
            ▶️ Demo
          </button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md">
            Signup
          </button>
        </div>
        <img src="./image/Img5.png" alt="images" className="mt-4" />
      </div>
    </div>
  );
}
