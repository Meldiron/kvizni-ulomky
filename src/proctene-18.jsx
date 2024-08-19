
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #18",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer47",
        "title": "Kdo napsal knihu knihu 'Fantastická zvířata: Brumbálova tajemství - úplný scénář'?",
        "choices": [
          "Šulc, Jiří",
          "Havel, Václav",
          "Rowling, J.K.",
          "Kinney, Jeff"
        ],
        "correctAnswer": "Rowling, J.K.",
        "enableIf": "{answer47} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer29",
        "title": "Kdo napsal knihu knihu 'Gala & Dalí: Nerozluční'?",
        "choices": [
          "Orwell, George",
          "Salte, Tereza",
          "Frank, Sylvia",
          "Yarros, Rebecca"
        ],
        "correctAnswer": "Frank, Sylvia",
        "enableIf": "{answer29} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer80",
        "title": "Ve kterém roce jsi přečetla knihu 'Doktor Proktor a velká loupež zlata (Doktor Proktor #4)'?",
        "choices": [
          "2022",
          "2020",
          "2023",
          "2021"
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
        "name": "answer36",
        "title": "Ve kterém roce jsi přečetla knihu 'Šlehačková oblaka'?",
        "choices": [
          "2023",
          "2020",
          "2024",
          "2022"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer36} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer45",
        "title": "Kdo napsal knihu knihu 'Naslouchač (Naslouchač, #1)'?",
        "choices": [
          "Špitálníková, Nina",
          "Stehlíková, Petra",
          "Dalcher, Christina",
          "Bradbury, Ray"
        ],
        "correctAnswer": "Stehlíková, Petra",
        "enableIf": "{answer45} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer69",
        "title": "Kdo napsal knihu knihu 'Divá Bára'?",
        "choices": [
          "Rina, Lin",
          "Gogol, Nikolai",
          "Doyle, Arthur Conan",
          "Němcová, Božena"
        ],
        "correctAnswer": "Němcová, Božena",
        "enableIf": "{answer69} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer0",
        "title": "Ve kterém roce jsi přečetla knihu 'Národní opruzení'?",
        "choices": [
          "2022",
          "2023",
          "2020",
          "2024"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer0} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer34",
        "title": "Ve kterém roce jsi přečetla knihu 'Kopírák'?",
        "choices": [
          "2020",
          "2022",
          "2024",
          "2023"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer34} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer148",
        "title": "Ve kterém roce jsi přečetla knihu 'Kulička'?",
        "choices": [
          "2021",
          "2020",
          "2022",
          "2023"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer148} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer176",
        "title": "Ve kterém roce jsi přečetla knihu '4 Starodávné příběhy Čtyřlístku'?",
        "choices": [
          "2022",
          "2023",
          "2024",
          "2020"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer176} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene18() {
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
        
        export default Proctene18;
        