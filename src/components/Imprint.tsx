import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Imprint = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "DE" ? (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h2>Hinweis: Dies ist eine persönliche Portfolio-Website. Alle Inhalte dienen nur zu Informationszwecken.,</h2>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h2> Note: This is a personal portfolio website. All content is for informational purposes only.,
</h2>
        </article>
      )}
    </React.Fragment>
  );
};

export default Imprint;
