
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #13",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer120",
        "title": "Ve kterém roce jsi přečetla knihu 'Gump - Pes, který naučil lidi žít'?",
        "choices": [
          "2023",
          "2021",
          "2022",
          "2020"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer120} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer121",
        "title": "Kdo napsal knihu knihu 'Gump - Pes, který naučil lidi žít'?",
        "choices": [
          "Zhao, Xiran Jay",
          "Tung, Debbie",
          "Rožek, Filip",
          "Rina, Lin"
        ],
        "correctAnswer": "Rožek, Filip",
        "enableIf": "{answer121} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer122",
        "title": "Ve kterém roce jsi přečetla knihu 'Vražda v Orient-expresu'?",
        "choices": [
          "2024",
          "2022",
          "2023",
          "2020"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer122} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer123",
        "title": "Kdo napsal knihu knihu 'Vražda v Orient-expresu'?",
        "choices": [
          "Campbell, Jen",
          "Caplin, Julie",
          "Townsend, Jessica",
          "Christie, Agatha"
        ],
        "correctAnswer": "Christie, Agatha",
        "enableIf": "{answer123} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer124",
        "title": "Ve kterém roce jsi přečetla knihu 'Petr a Lucie'?",
        "choices": [
          "2024",
          "2023",
          "2021",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer124} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer125",
        "title": "Kdo napsal knihu knihu 'Petr a Lucie'?",
        "choices": [
          "Gogol, Nikolai",
          "Dalcher, Christina",
          "Lehečková, Hana",
          "Rolland, Romain"
        ],
        "correctAnswer": "Rolland, Romain",
        "enableIf": "{answer125} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer126",
        "title": "Ve kterém roce jsi přečetla knihu 'Pygmalion'?",
        "choices": [
          "2022",
          "2023",
          "2021",
          "2020"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer126} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer127",
        "title": "Kdo napsal knihu knihu 'Pygmalion'?",
        "choices": [
          "Shaw, George Bernard",
          "Dyk, Viktor",
          "Shakespeare, William",
          "Prince Harry"
        ],
        "correctAnswer": "Shaw, George Bernard",
        "enableIf": "{answer127} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer128",
        "title": "Ve kterém roce jsi přečetla knihu 'Krev elfů (Zaklínač, #3)'?",
        "choices": [
          "2020",
          "2021",
          "2023",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer128} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer129",
        "title": "Kdo napsal knihu knihu 'Krev elfů (Zaklínač, #3)'?",
        "choices": [
          "Rolland, Romain",
          "Sapkowski, Andrzej",
          "Strnadová, Anna",
          "Orwell, George"
        ],
        "correctAnswer": "Sapkowski, Andrzej",
        "enableIf": "{answer129} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene13() {
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
        
        export default Proctene13;
        