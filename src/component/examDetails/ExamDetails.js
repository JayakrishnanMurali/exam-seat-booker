import React from "react";
import { ExamData } from "./examData/ExamData";
import { RegisteredUsers } from "./registeredUsers/RegisteredUsers";

export const ExamDetails = () => {
  return (
    <div className="col-span-4 py-4 px-24 flex flex-col">
      <ExamData />
      <RegisteredUsers />
    </div>
  );
};
