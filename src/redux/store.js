import { configureStore } from "@reduxjs/toolkit";
import ExamSliceReducer from "./examDetails/ExamSlice";
export const store = configureStore({
  reducer: {
    exam: ExamSliceReducer,
  },
});
