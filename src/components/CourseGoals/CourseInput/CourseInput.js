import React, { useState } from "react";

import Button from "../../UI/Button/Button";
// React Module css
import style from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValue, setValue] = useState(true);
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setValue(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValue(false);
      return;
    }
    setEnteredValue("");
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${style["form-control"]} ${!isValue && style.invalid}`}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
