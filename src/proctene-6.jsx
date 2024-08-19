
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #6",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer62",
        "title": "Ve kterém roce jsi přečetla knihu 'Saturnin'?",
        "choices": [
          "2022",
          "2024",
          "2021",
          "2023"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer62} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer71",
        "title": "Kdo napsal knihu knihu 'Co mě naučil tučňák'?",
        "choices": [
          "Dalcher, Christina",
          "Sapkowski, Andrzej",
          "Zhao, Xiran Jay",
          "Michell, Tom"
        ],
        "correctAnswer": "Michell, Tom",
        "enableIf": "{answer71} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer42",
        "title": "Ve kterém roce jsi přečetla knihu 'Pěšky mezi buddhisty a komunisty'?",
        "choices": [
          "2024",
          "2023",
          "2022",
          "2021"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer42} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer84",
        "title": "Ve kterém roce jsi přečetla knihu 'Hobit'?",
        "choices": [
          "2022",
          "2023",
          "2024",
          "2020"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer84} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer72",
        "title": "Ve kterém roce jsi přečetla knihu 'Mráz (Detektiv Martin Servaz, #1)'?",
        "choices": [
          "2024",
          "2021",
          "2020",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer72} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer78",
        "title": "Ve kterém roce jsi přečetla knihu 'Smrt krásných srnců'?",
        "choices": [
          "2020",
          "2022",
          "2023",
          "2024"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer78} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer195",
        "title": "Kdo napsal knihu knihu 'Střet králů (Píseň ledu a ohně, #2)'?",
        "choices": [
          "Shakespeare, William",
          "Riordan, Rick",
          "Martin, George R.R.",
          "Fitzgerald, F. Scott"
        ],
        "correctAnswer": "Martin, George R.R.",
        "enableIf": "{answer195} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer201",
        "title": "Kdo napsal knihu knihu 'Lakomec'?",
        "choices": [
          "Goldoni, Carlo",
          "Jirotka, Zdeněk",
          "Špitálníková, Nina",
          "Molière"
        ],
        "correctAnswer": "Molière",
        "enableIf": "{answer201} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer156",
        "title": "Ve kterém roce jsi přečetla knihu 'Trhlina'?",
        "choices": [
          "2020",
          "2023",
          "2021",
          "2022"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer156} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer12",
        "title": "Ve kterém roce jsi přečetla knihu 'Legendy & latéčka (Legendy & latéčka, #1)'?",
        "choices": [
          "2020",
          "2023",
          "2022",
          "2024"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer12} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene6() {
          const survey = GenerateSurvey(json, false, true);
        
          survey.onComplete.add(() => {
            let totalCorrect = 0;
            let total = 0;
            survey.pages.forEach(page => {
              page.questions.forEach(question => {
                if (question.correctAnswer === question.value) {
                  totalCorrect++;
                }
                total++;
              });
            });
        
            const percentage = Math.ceil(
              (totalCorrect / total) * 100
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
        
        export default Proctene6;
        