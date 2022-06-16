import React from "react";
import Link from "next/link";
import { useState } from "react";
import lStorage from "local-storage";
import { useEffect } from "react";

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

const BookSeats = () => {
  const seats1 = [];
  const seats2 = [];
  const gender =
    lStorage.get("userData")[lStorage.get("userData")?.length - 1].userGender;
  const age =
    lStorage.get("userData")[lStorage.get("userData")?.length - 1].userAge;
  const selectedSeats = lStorage.get("Seat");

  const [selectedSeat, setSelectedSeat] = useState();

  useEffect(() => {
    const gray = "rgb(156,163,175)";

    selectedSeats?.map((seat) => {
      const box = document.getElementById(seat);
      box.style.backgroundColor = gray;
    });
  }, []);

  for (let j = 0; j < verticalSeats.length; j++) {
    for (let i = 0; i < horizontalSeats.length; i++) {
      let currElement2 = <></>;

      const isAgeGreaterThan30 = age >= 30 && j >= 7;
      const isAgeLessThan20 = age <= 20 && (i == 0 || i == 6);
      const isgenderFemale = gender == "Female" && i == 2;

      if (isgenderFemale || isAgeLessThan20 || isAgeGreaterThan30) {
        currElement2 = (
          <span
            className=" w-6 h-6 cursor-pointer my-2  flex justify-center items-center bg-gray-400"
            id={`${i + 1}${verticalSeats[j]}`}
          ></span>
        );
      } else {
        currElement2 = (
          <span
            className="w-6 h-6 cursor-pointer my-2  flex justify-center items-center bg-green-300 "
            id={`${i + 1}${verticalSeats[j]}`}
          ></span>
        );
      }

      seats1.push(
        <div key={i + "" + j} className="">
          {j == 0 && <span className="mb-12 ">{i + 1}</span>}
          {currElement2}
          {i == 0 && (
            <span className="-ml-7 absolute -mt-8">{verticalSeats[j]}</span>
          )}
        </div>
      );
    }
  }

  for (let j = 0; j < verticalSeats.length; j++) {
    for (let i = 0; i < secondSetOfSeats.length; i++) {
      let currElement = <></>;

      const isAgeGreaterThan30 = age >= 30 && j >= 7;
      const isAgeLessThan20 = age <= 20 && i == 2;
      const isgenderFemale = gender == "Female" && i == 0;

      if (isgenderFemale || isAgeLessThan20 || isAgeGreaterThan30) {
        currElement = (
          <span
            className=" w-6 h-6 cursor-pointer my-2  flex justify-center items-center bg-gray-400"
            id={`${i + 4}${verticalSeats[j]}`}
          ></span>
        );
      } else {
        currElement = (
          <span
            className=" w-6 h-6 cursor-pointer my-2  flex justify-center items-center bg-green-300 "
            id={`${i + 4}${verticalSeats[j]}`}
          ></span>
        );
      }

      seats2.push(
        <div key={i + "" + j} className="">
          {j == 0 && <span className="mb-12 ml-4">{i + 4}</span>}
          {currElement}
        </div>
      );
    }
  }

  const [prevCol, setPrevCol] = useState();

  const handleSelectedSeat = (e) => {
    const gray = "rgb(156,163,175)";
    const eligibleGreenColor = "rgb(134,239,172)";
    const col = document.getElementById(e.target.id);

    if (col?.id) {
      if (gender == "Female") {
        const isSeatOnAisle =
          col.id.slice(-2, -1) == 3 || col.id.slice(-2, -1) == 4;

        if (isSeatOnAisle)
          return alert(
            "Females cant select aisle seats. Please choose any other seat!"
          );
      }

      if (age <= 20) {
        const isUserAgeLessThan20 =
          col.id.slice(-2, -1) == 1 || col.id.slice(-2, -1) == 6;

        if (isUserAgeLessThan20)
          return alert(
            "Users aged less than or equal to 20 cannot select seats on column 1 and 6. Please choose any other seat!"
          );
      }

      if (age >= 30) {
        const isUserAgeGreaterThan30 =
          col.id.slice(-1) == "H" ||
          col.id.slice(-1) == "I" ||
          col.id.slice(-1) == "J" ||
          col.id.slice(-1) == "K" ||
          col.id.slice(-1) == "L" ||
          col.id.slice(-1) == "M";
        if (isUserAgeGreaterThan30)
          return alert(
            "Users aged greater than or equal to 30 cannot select seats on last 6 rows. Please choose any other seat!"
          );
      }

      if (selectedSeats?.includes(col.id))
        return alert(
          "Seat already selected by other user. Please choose another seat!"
        );

      if (col?.style) {
        if (col?.style.backgroundColor == gray) {
          col.style.backgroundColor = eligibleGreenColor;
        } else {
          if (prevCol?.style)
            prevCol.style.backgroundColor = eligibleGreenColor;
          col.style.backgroundColor = gray;
        }
      }
      setSelectedSeat(col?.id);
      setPrevCol(col);
    }
  };

  const handleSubmit = () => {
    if (lStorage.get("Seat"))
      lStorage.set("Seat", [...lStorage.get("Seat"), selectedSeat]);
    else lStorage.set("Seat", [selectedSeat]);
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
        <button
          onClick={handleSubmit}
          className="bg-green-400 w-1/5 p-2 rounded-md mt-2 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </Link>
    </div>
  );
};

export default BookSeats;
