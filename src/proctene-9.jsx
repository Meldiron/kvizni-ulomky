
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
        "name": "answer80",
        "title": "Ve kterém roce jsi přečetla knihu 'Doktor Proktor a velká loupež zlata (Doktor Proktor #4)'?",
        "choices": [
          "2021",
          "2024",
          "2022",
          "2023"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer80} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer81",
        "title": "Kdo napsal knihu knihu 'Doktor Proktor a velká loupež zlata (Doktor Proktor #4)'?",
        "choices": [
          "Klíma, Josef",
          "Schwab, Victoria",
          "Nesbø, Jo",
          "Meixnerová, Karolína Zoe"
        ],
        "correctAnswer": "Nesbø, Jo",
        "enableIf": "{answer81} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer82",
        "title": "Ve kterém roce jsi přečetla knihu 'Zlodějka příběhů'?",
        "choices": [
          "2021",
          "2022",
          "2020",
          "2024"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer82} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer83",
        "title": "Kdo napsal knihu knihu 'Zlodějka příběhů'?",
        "choices": [
          "Karika, Jozef",
          "Klevisová, Michaela",
          "Katalpa, Jakuba",
          "Collins, Suzanne"
        ],
        "correctAnswer": "Klevisová, Michaela",
        "enableIf": "{answer83} empty"
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
          "2024",
          "2022",
          "2021",
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
        "name": "answer85",
        "title": "Kdo napsal knihu knihu 'Hobit'?",
        "choices": [
          "Tolkien, J.R.R.",
          "Zibura, Ladislav",
          "Scott, Michael",
          "Komrsková, Alžběta"
        ],
        "correctAnswer": "Tolkien, J.R.R.",
        "enableIf": "{answer85} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer86",
        "title": "Ve kterém roce jsi přečetla knihu 'Neviditelný život Addie LaRue'?",
        "choices": [
          "2020",
          "2023",
          "2022",
          "2024"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer86} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer87",
        "title": "Kdo napsal knihu knihu 'Neviditelný život Addie LaRue'?",
        "choices": [
          "Baldree, Travis",
          "Moravec, Martin",
          "Orwell, George",
          "Schwab, Victoria"
        ],
        "correctAnswer": "Schwab, Victoria",
        "enableIf": "{answer87} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer88",
        "title": "Ve kterém roce jsi přečetla knihu '1984'?",
        "choices": [
          "2022",
          "2024",
          "2020",
          "2021"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer88} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer89",
        "title": "Kdo napsal knihu knihu '1984'?",
        "choices": [
          "Scott, Michael",
          "Paolini, Christopher",
          "Fuks, Ladislav",
          "Orwell, George"
        ],
        "correctAnswer": "Orwell, George",
        "enableIf": "{answer89} empty"
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
        