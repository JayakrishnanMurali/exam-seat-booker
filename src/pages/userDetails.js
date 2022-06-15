import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectExam } from "../redux/examDetails/ExamSlice";
import { getExam } from "../redux/examDetails/ExamSlice";

import { useDispatch } from "react-redux";

const UserDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExam());
  }, [dispatch]);

  const {
    exam: { list },
  } = useSelector(selectExam);

  return (
    <div>
      <h1>s</h1>
    </div>
  );
};

export default UserDetails;
