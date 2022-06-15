import Image from "next/image";
import React from "react";

export const ExamData = () => {
  return (
    <div className="mt-24 bg-gray-400 p-4 rounded-md flex justify-start items-center cursor-pointer">
      <Image
        src={
          "https://img.freepik.com/free-photo/exams-test-student-high-school-university-student-holding-pencil-testing-exam-answer-sheet_4236-1316.jpg"
        }
        alt="placeholder"
        width={200}
        height={150}
        className="object-cover"
      />

      <div className="m-4">
        <h4>Title</h4>
        <h6>Year</h6>
        <p>Details1</p>
      </div>
    </div>
  );
};
