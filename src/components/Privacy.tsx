import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "DE" ? (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h2>Das Design dieser Website basiert auf einer Vorlage von Alpay Celik. Zur Personalisierung wurden einige Anpassungen vorgenommen. Alle Rechte am ursprünglichen Design und Code liegen beim ursprünglichen Autor.&shy;erkl&auml;rung</h2>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h2>This website's design is based on a template created by Alpay Celik. Some adaptations have been made to personalize it. All rights to the original design and code belong to the original author.</h2>
        </article>
      )}
    </React.Fragment>
  );
};

export default Privacy;
