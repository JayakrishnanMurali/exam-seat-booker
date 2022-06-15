import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getExam } from "../../redux/examDetails/ExamSlice";
import { ExamData } from "./examData/ExamData";
import { RegisteredUsers } from "./registeredUsers/RegisteredUsers";

export const ExamDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExam());
  }, [dispatch]);

  return (
    <div className="col-span-4 py-4 px-24 flex flex-col">
      <ExamData />
      <RegisteredUsers />
    </div>
  );
};
