import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getExam = createAsyncThunk("exam/getExam", async () => {
  return fetch(
    "https://3a178515-5a1f-4da4-b47b-b9e825f92625.mock.pstmn.io/getExam/"
  ).then((res) => res.json());
});

export const ExamSlice = createSlice({
  name: "exam",
  initialState: { list: {}, status: "loading" },
  extraReducers: {
    [getExam.pending]: (state, action) => {
      state.status = "loading";
    },
    [getExam.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [getExam.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectExam = (state) => state;

export default ExamSlice.reducer;
