import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectExam } from "../redux/examDetails/ExamSlice";
import { getExam } from "../redux/examDetails/ExamSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useState } from "react";
import lStorage from "local-storage";

const UserDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExam());
  }, [dispatch]);

  const {
    exam: { list },
  } = useSelector(selectExam);

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userGender, setUserGender] = useState();

  const storeUserInfoOnLocalStorage = () => {
    lStorage.set("userName", userName);
    lStorage.set("userAge", userAge);
    lStorage.set("userGender", userGender);
  };

  return (
    <div>
      <div className="relative">
        <Image
          src={list?.image || "/public/vercel.svg"}
          alt="placeholder"
          width={1300}
          height={250}
          className="object-cover"
        />
        <h1 className="absolute bottom-2 p-2 text-white font-bold text-3xl">
          {list?.title}
        </h1>
      </div>

      <div className="p-8">
        <p className="text-xl  font-medium">{list?.detail1}</p>
        <p className="text-xl mb-4 font-medium">{list?.detail2}</p>
        <p className="text-lg font-medium">
          <span className="text-base font-normal">Last Date:</span>{" "}
          {new Date(list?.exam_date).toDateString()}
        </p>
        <p className="text-lg font-medium">
          <span className="text-base font-normal">Eligibility:</span>{" "}
          {list?.Eligibility}
        </p>
      </div>

      <form>
        <div className="flex flex-col px-16 py-6">
          <h1 className="text-xl font-semibold mb-4">Enter Details :</h1>
          <input
            className="border w-1/3 px-4 py-2 mb-4"
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="border w-1/3 px-4 py-2 mb-4"
            type="number"
            placeholder="Age"
            value={userAge}
            onChange={(e) => setUserAge(e.target.value)}
          />
          <select
            className="border w-1/3 px-4 py-2 mb-4"
            value={userGender}
            onChange={(e) => setUserGender(e.target.value)}
          >
            <option disabled selected value>
              -- select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <Link href="/user/bookSeats">
            <button
              disabled={!userName || !userAge || !userGender}
              className="bg-green-400 w-1/5 p-2 rounded-md mt-2 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
              onClick={storeUserInfoOnLocalStorage}
            >
              Select Seat
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
