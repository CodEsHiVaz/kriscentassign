import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../redux1/action";
// import { getQuestions } from "../../Redux/ExamSlice";

const Questions = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(getAll());
  }, []);
  console.log("Questions ~ questions", questions);

  return (
    <div>
      {questions &&
        questions.map((elem) => (
          <div key={elem.id || elem._id}>{elem.question}</div>
        ))}
    </div>
  );
};

export default Questions;
