import React from "react";
import { useTranslation } from "react-i18next";

function LumaEvents() {
  const { t } = useTranslation();

  return (
    <section className="mb-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-h3 font-extrabold mb-6">
          {t("upcoming-event.upcoming-events")}
        </h3>
        <iframe
          title="Fullstack Nights events on Luma"
          src="https://luma.com/embed/calendar/cal-xorZLhCJO1uKH5s/events"
          width="600"
          height="450"
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
          className="w-full max-w-full mx-auto"
          style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
        />
      </div>
    </section>
  );
}

export default LumaEvents;
