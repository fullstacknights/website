import React from "react";

import styles from "./timeline.module.css";

function Timeline({ events }) {
  return (
    <div className={styles.container}>
      {events.map((event, index) => (
        <div
          key={index}
          className={`${styles.timeline} ${event.subheader ? "pb-10" : "pb-6"}`}
        >
          <p className="text-sm text-right mr-4">{event.dateTime}</p>
          <div
            className={`${
              event.subheader
                ? styles.eventContainer
                : styles.eventContainerNoSubheader
            } ml-11`}
          >
            {event.subheader ? (
              <p className="text-rg mb-2">{event.subheader}</p>
            ) : null}
            <p className="text-lg">{event.header}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
