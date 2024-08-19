
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #9",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer150",
        "title": "Ve kterém roce jsi přečetla knihu 'Dcera ztracených bohů'?",
        "choices": [
          "2020",
          "2024",
          "2021",
          "2023"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer150} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer96",
        "title": "Ve kterém roce jsi přečetla knihu 'Alchymista (Tajemství nesmrtelného Nicholase Flamela, #1)'?",
        "choices": [
          "2023",
          "2024",
          "2021",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer96} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer15",
        "title": "Kdo napsal knihu knihu '…stačilo jen říct Jáchymov'?",
        "choices": [
          "Schwab, Victoria",
          "Komrsková, Alžběta",
          "Campbell, Jen",
          "Strnadová, Anna"
        ],
        "correctAnswer": "Strnadová, Anna",
        "enableIf": "{answer15} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer102",
        "title": "Ve kterém roce jsi přečetla knihu 'Kroky vraha'?",
        "choices": [
          "2023",
          "2021",
          "2024",
          "2022"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer102} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer185",
        "title": "Kdo napsal knihu knihu 'Meč osudu (Zaklínač, #2)'?",
        "choices": [
          "Němcová, Božena",
          "Rina, Lin",
          "Campbell, Jen",
          "Sapkowski, Andrzej"
        ],
        "correctAnswer": "Sapkowski, Andrzej",
        "enableIf": "{answer185} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer180",
        "title": "Ve kterém roce jsi přečetla knihu 'Divné hlášky z knihkupectví'?",
        "choices": [
          "2020",
          "2023",
          "2021",
          "2024"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer180} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer133",
        "title": "Kdo napsal knihu knihu 'Příliš mnoho Kateřin'?",
        "choices": [
          "Tung, Debbie",
          "Minier, Bernard",
          "Havel, Václav",
          "Green, John"
        ],
        "correctAnswer": "Green, John",
        "enableIf": "{answer133} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer189",
        "title": "Kdo napsal knihu knihu 'Teorie vraždy'?",
        "choices": [
          "Komrsková, Alžběta",
          "Mayne, Andrew",
          "Townsend, Jessica",
          "Katalpa, Jakuba"
        ],
        "correctAnswer": "Mayne, Andrew",
        "enableIf": "{answer189} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer44",
        "title": "Ve kterém roce jsi přečetla knihu 'Naslouchač (Naslouchač, #1)'?",
        "choices": [
          "2024",
          "2023",
          "2020",
          "2022"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer44} empty"
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
          "2021",
          "2022",
          "2020",
          "2023"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer122} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene9() {
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
        
        export default Proctene9;
        