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
        <div key={i + "" + j} className="">
          {j == 0 && <span className="mb-12 ">{i + 1}</span>}
          <span
            className="w-6 h-6 cursor-pointer my-2  flex justify-center items-center bg-slate-500 "
            id={`${i + 1}${verticalSeats[j]}`}
          ></span>
          {i == 0 && (
            <span className="-ml-7 absolute -mt-8">{verticalSeats[j]}</span>
          )}
        </div>
      );
    }
  }

  for (let j = 0; j < verticalSeats.length; j++) {
    for (let i = 0; i < secondSetOfSeats.length; i++) {
      seats2.push(
        <div key={i + "" + j} className="">
          {j == 0 && <span className="mb-12 ml-4">{i + 4}</span>}

          <span
            className=" w-6 h-6 cursor-pointer my-2  flex justify-center items-center bg-slate-500 "
            id={`${i + 4}${verticalSeats[j]}`}
          ></span>
        </div>
      );
    }
  }

  const handleSelectedSeat = (e) => {
    // console.log(e.target.innerText, "check");
    const col = document.getElementById(e.target.id);
    if (col?.classList?.contains("opacity-0"))
      col?.classList?.remove("opacity-0");
    console.log(col);
    if (col?.style) col.style.backgroundColor = "green";
  };

  return (
    <div className="p-12">
      <h1 className="text-2xl font-semibold mb-8">Select Seats</h1>

      <div className="flex mb-4">
        <div
          className="w-1/12 mr-12 grid grid-cols-3"
          onClick={handleSelectedSeat}
        >
          {seats1}
        </div>
        <div className="w-1/12 grid grid-cols-3" onClick={handleSelectedSeat}>
          {seats2}
        </div>
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
