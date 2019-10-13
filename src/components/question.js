import React from "react";
import PropTypes from "prop-types";

import { Card } from "../components/index";
import Chevron from "../assets/chevron.svg";
import styles from "./question.module.css";

function Question({ isOpened, question, answer, id, onClick }) {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full mb-4 ${styles.container} ${
        isOpened ? styles.containerOpened : ""
      }`}
    >
      <Card className={`p-4 text-left ${isOpened ? "shadow-lg" : ""}`}>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">{question}</p>
          <img
            className={`${styles.chevron} ${
              isOpened ? styles.chevronOpened : ""
            }`}
            src={Chevron}
            alt="Chevron"
          />
        </div>
        {isOpened ? <p className="text-rg mt-2">{answer}</p> : null}
      </Card>
    </button>
  );
}

Question.propTypes = {
  isOpened: PropTypes.bool
};

Question.defaultValues = {
  isOpened: false
};

export default Question;
