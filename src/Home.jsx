import React from "react";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { surveyLocalization } from "survey-core";
import { useNavigate } from "react-router-dom";
import { GenerateSurvey } from "./generateSurvey";

const json = {
  title: "Kvízní úlomky",
  description:
    "Interaktivní kvízová platforma pro otestování znalosti o knižních dílech, jejich autorech a dějích.",
  showQuestionNumbers: false,
  pages: [
    {
      elements: [
        {
          type: "radiogroup",
          name: "quiz",
          title: "Zvol si kvíz",
          isRequired: true,
          choices: [
            {
              value: "/poznej-knihu-1",
              text:
                "Poznej knihu #1 <span style='opacity: 0.4;'>(ze dne 4.9.2024)</span>"
            }
          ]
        },
        {
          type: "html",
          html:
            "<p style='text-align: center;font-style: italic;'>více již brzy!</p>"
        }
      ]
    }
  ]
};

function HomeComponent() {
  const navigate = useNavigate();

  const survey = GenerateSurvey(json, true);

  survey.onComplete.add(() => {
    const answer = survey.getQuestionByName("quiz");
    navigate(answer.value);
  });
  return <Survey model={survey} />;
}

export default HomeComponent;
