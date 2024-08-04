import React from "react";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { GenerateSurvey } from "./generateSurvey";

const generateImage = (url) =>
  `<div style='width: 100%; display: flex; justify-content: center;'><img src='${url}' style='max-width: 300px; width: 100%;border-radius: 16px;' /></div>`;

const json = {
  title: "Poznej knihu #1",
  description: "Kvízní úlomky - Interaktivní kvízová platforma",
  showQuestionNumbers: false,
  showProgressBar: "aboveHeader",
  pages: [
    {
      elements: [
        {
          type: "html",
          html: generateImage("/poznej-knihu-1/q1.png")
        },
        {
          type: "radiogroup",
          name: "answer1",
          title: "Jak se jmenuje kniha na obrázku?",
          choices: [
            "Roztěkaná mysl",
            "Daydream",
            "Na ledě",
            "Ledové království"
          ],
          correctAnswer: "Na ledě",
          enableIf: "{answer1} empty"
        }
      ]
    },
    {
      elements: [
        {
          type: "html",
          html: generateImage("/poznej-knihu-1/q2.png")
        },
        {
          type: "radiogroup",
          name: "answer2",
          title: "Jak se jmenuje kniha na obrázku?",
          choices: ["Oflajňák", "Horská cesta", "Malý princ", "Myko"],
          correctAnswer: "Oflajňák",
          enableIf: "{answer2} empty"
        }
      ]
    },
    {
      elements: [
        {
          type: "html",
          html: generateImage("/poznej-knihu-1/q3.png")
        },
        {
          type: "radiogroup",
          name: "answer3",
          title: "Jak se jmenuje kniha na obrázku?",
          choices: ["Vzorové dny", "Den", "Vila v Itálii", "Já jsem"],
          correctAnswer: "Den",
          enableIf: "{answer3} empty"
        }
      ]
    },
    {
      elements: [
        {
          type: "html",
          html: generateImage("/poznej-knihu-1/q4.png")
        },
        {
          type: "radiogroup",
          name: "answer4",
          title: "Jak se jmenuje kniha na obrázku?",
          choices: ["Reckless", "Ztracenné", "Fearless", "Šikmý kostel"],
          correctAnswer: "Reckless",
          enableIf: "{answer4} empty"
        }
      ]
    },
    {
      elements: [
        {
          type: "html",
          html: generateImage("/poznej-knihu-1/q5.png")
        },
        {
          type: "radiogroup",
          name: "answer5",
          title: "Jak se jmenuje kniha na obrázku?",
          choices: [
            "Harry Potter",
            "Čtvrté křídlo",
            "Pohledem k obloze",
            "Železný plamen"
          ],
          correctAnswer: "Železný plamen",
          enableIf: "{answer5} empty"
        }
      ]
    }
  ]
};

function PoznejKnihu1() {
  const survey = GenerateSurvey(json, false, true);

  survey.onComplete.add(() => {
    const percentage = Math.ceil(
      (survey.correctAnswers / survey.questionCount) * 100
    );

    let mark = "";
    if (percentage > 90) {
      mark = "A (výborný)";
    } else if (percentage > 80) {
      mark = "B (velmi dobrý)";
    } else if (percentage > 72) {
      mark = "C (dobrý)";
    } else if (percentage > 65) {
      mark = "D (uspokojivý)";
    } else if (percentage > 59) {
      mark = "E (dostatečný)";
    } else {
      mark = "F (nedostatečný)";
    }

    survey.completedHtml = `
      <h6 style='margin-bottom: 0px;'>Hotovo! Tvoje známka:</h6>
      <h3 style='margin-top: 16px; color: white'>${mark}</h3>
      
      <a href='/'>Zpět na úvodní stránku</a>
    `;
  });

  return <Survey model={survey} />;
}

export default PoznejKnihu1;
