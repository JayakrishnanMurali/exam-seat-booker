import React from "react";
import Link from "next/link";

const horizontalSeats = ["1", "2", "3"];
const verticalSeats = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
];

const secondSetOfSeats = ["4", "5", "6"];

const bookSeats = () => {
  const seats1 = [];
  const seats2 = [];

  for (let j = 0; j < verticalSeats.length; j++) {
    for (let i = 0; i < horizontalSeats.length; i++) {
      seats1.push(
        <div className="w-6 h-6 cursor-pointer my-2 mx-0 flex justify-center items-center bg-slate-500 ">
          [{verticalSeats[j]} {horizontalSeats[i]}]
        </div>
      );
    }
  }

  for (let j = 0; j < verticalSeats.length; j++) {
    for (let i = 0; i < secondSetOfSeats.length; i++) {
      seats2.push(
        <div className="w-6 h-6 cursor-pointer my-2 mx-0 flex justify-center items-center bg-slate-500 ">
          [{verticalSeats[j]} {secondSetOfSeats[i]}]
        </div>
      );
    }
  }

  return (
    <div className="p-6 ">
      <h1>Select Seats</h1>

      <div className="flex">
        <div className="w-1/12 mr-12 grid grid-cols-3">{seats1}</div>
        <div className="w-1/12 grid grid-cols-3">{seats2}</div>
      </div>

      <Link href="/">
        <button className="bg-green-400 w-1/5 p-2 rounded-md mt-2 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
          Submit
        </button>
      </Link>
    </div>
  );
};

export default bookSeats;
