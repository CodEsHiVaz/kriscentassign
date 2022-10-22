// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   value: 0,
//   questions: [],
// };
// export const addQuestion = createAsyncThunk(
//   "exam/addQuestion",
//   async (payload) => {
//     // const response = await fetch("http://localhost:8080/questions", {
//     //   method: "POST",
//     //   headers: { "Content-type": "application/json" },
//     //   body: JSON.stringify(payload),
//     // });
//     // console.log(payload);
//     // return response.data;

//     let res = await axios.post(
//       "http://localhost:8080/questions",
//       JSON.stringify(payload)
//     );
//     try {
//       // return res.data;

//       console.log("res.data", res.data);
//     } catch (error) {}
//   }
// );

// export const ExamSlice = createSlice({
//   name: "exam",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
//   extraReducers(builder) {
//     builder.addCase(addQuestion.pending, (state, action) => {});
//     builder.addCase(addQuestion.fulfilled, (state, action) => {
//       // state.questions = [...state.questions, action.payload];
//       // console.log("builder.addCase ~  state.questions", state.questions);
//     });
//     builder.addCase(addQuestion.rejected, (state, action) => {
//       console.log("rejected");
//     });
//   },
// });

// export const { increment, decrement, incrementByAmount } = ExamSlice.actions;

// export default ExamSlice.reducer;

// // ------------------------------------------------------------------------------------------------------------------------------

// // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //   value: 0,
// //   questions: [],
// // };
// // export const addQuestion = createAsyncThunk(
// //   "exam/addQuestion",
// //   async (payload) => {
// //     try {
// //       const response = await fetch("http://localhost:8080/questions", {
// //         method: "POST",
// //         headers: { "Content-type": "application/json" },
// //         body: JSON.stringify(payload),
// //       });
// //       console.log("response.data", response);
// //       return response.data;
// //     } catch (error) {}
// //   }
// // );
// // export const getQuestions = createAsyncThunk("exam/getQuestions", async () => {
// //   const response = await fetch("http://localhost:8080/questions");

// //   console.log("response.data", response);
// //   return response.data;
// // });

// // export const ExamSlice = createSlice({
// //   name: "counter",
// //   initialState,
// //   reducers: {},
// //   extraReducers(builder) {
// //     builder.addCase(addQuestion.pending, (state, action) => {});
// //     builder.addCase(addQuestion.fulfilled, (state, action) => {
// //       state.questions.push(action.payload);
// //     });
// //     builder.addCase(addQuestion.rejected, (state, action) => {});
// //     builder.addCase(getQuestions.pending, (state, action) => {});
// //     builder.addCase(getQuestions.fulfilled, (state, action) => {
// //       state.questions = action.payload;
// //     });
// //     builder.addCase(getQuestions.rejected, (state, action) => {});
// //   },
// // });

// // export const {} = ExamSlice.actions;

// // export default ExamSlice.reducer;
