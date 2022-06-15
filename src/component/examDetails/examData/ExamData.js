import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectExam } from "../../../redux/examDetails/ExamSlice";

export const ExamData = () => {
  const {
    exam: { list },
  } = useSelector(selectExam);

  return (
    <Link href="/userDetails">
      <div className="mt-24 shadow-lg bg-gray-400 p-4 rounded-md flex justify-start items-center cursor-pointer">
        <Image
          src={list?.image || "/public/vercel.svg"}
          alt="placeholder"
          width={200}
          height={150}
          className="object-cover"
        />

        <div className="m-4">
          <h4 className="text-3xl font-medium text-white mb-4">
            {list?.title}
          </h4>
          <h6 className="text-lg font-normal text-white">{list?.year}</h6>
          <p className="text-lg text-white font-normal">{list?.detail1}</p>
        </div>
      </div>
    </Link>
  );
};
