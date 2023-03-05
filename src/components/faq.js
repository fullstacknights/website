import React, { useState, useCallback } from "react";

import Question from "./question";
import * as styles from "./faq.module.css";

function FAQList({ list }) {
  const [opened, setOpened] = useState();
  const toggleOpened = useCallback(
    id => {
      if (id === opened) {
        setOpened();
      } else {
        setOpened(id);
      }
    },
    [opened]
  );

  return (
    <ul className={styles.container}>
      {list.map((item, index) => (
        <Question
          key={index}
          id={index}
          isOpened={opened === index}
          question={item.question}
          answer={item.answer}
          onClick={toggleOpened}
        />
      ))}
    </ul>
  );
}

export default FAQList;
