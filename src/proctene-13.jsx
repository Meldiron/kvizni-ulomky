
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
        "name": "answer167",
        "title": "Kdo napsal knihu knihu 'Revizor'?",
        "choices": [
          "Lehečková, Hana",
          "Motte, Anders de la",
          "Gogol, Nikolai",
          "Cline, Ernest"
        ],
        "correctAnswer": "Gogol, Nikolai",
        "enableIf": "{answer167} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer94",
        "title": "Ve kterém roce jsi přečetla knihu 'Stoletý stařík, který vylezl z okna a zmizel (Stoletý stařík, #1)'?",
        "choices": [
          "2021",
          "2022",
          "2024",
          "2020"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer94} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer13",
        "title": "Kdo napsal knihu knihu 'Legendy & latéčka (Legendy & latéčka, #1)'?",
        "choices": [
          "Vrchlický, Jaroslav",
          "Riordan, Rick",
          "Baldree, Travis",
          "Rina, Lin"
        ],
        "correctAnswer": "Baldree, Travis",
        "enableIf": "{answer13} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer67",
        "title": "Kdo napsal knihu knihu 'Životice: obraz (po)zapomenuté tragédie'?",
        "choices": [
          "Shakespeare, William",
          "Schwab, Victoria",
          "Lednická, Karin",
          "Scott, Michael"
        ],
        "correctAnswer": "Lednická, Karin",
        "enableIf": "{answer67} empty"
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
          "Orwell, George",
          "Katalpa, Jakuba",
          "Yarros, Rebecca",
          "Nguyễn Phan Quế Mai"
        ],
        "correctAnswer": "Orwell, George",
        "enableIf": "{answer89} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer197",
        "title": "Kdo napsal knihu knihu 'Rytíř Sedmi království'?",
        "choices": [
          "Saint-Exupéry, Antoine de",
          "Frank, Sylvia",
          "Martin, George R.R.",
          "Dalcher, Christina"
        ],
        "correctAnswer": "Martin, George R.R.",
        "enableIf": "{answer197} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer139",
        "title": "Kdo napsal knihu knihu 'Němci'?",
        "choices": [
          "Katalpa, Jakuba",
          "Lewis, C.S.",
          "Saint-Exupéry, Antoine de",
          "Dalcher, Christina"
        ],
        "correctAnswer": "Katalpa, Jakuba",
        "enableIf": "{answer139} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer106",
        "title": "Ve kterém roce jsi přečetla knihu 'Kroniky prachu (Kroniky prachu, #1)'?",
        "choices": [
          "2022",
          "2024",
          "2020",
          "2021"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer106} empty"
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
          "Hrabal, Bohumil",
          "Michell, Tom",
          "Lewis, C.S.",
          "Sapkowski, Andrzej"
        ],
        "correctAnswer": "Sapkowski, Andrzej",
        "enableIf": "{answer129} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer138",
        "title": "Ve kterém roce jsi přečetla knihu 'Němci'?",
        "choices": [
          "2023",
          "2022",
          "2020",
          "2021"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer138} empty"
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
        