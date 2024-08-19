
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #4",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer131",
        "title": "Kdo napsal knihu knihu 'Malý princ'?",
        "choices": [
          "Bradbury, Ray",
          "Molière",
          "Meyer, Marissa",
          "Saint-Exupéry, Antoine de"
        ],
        "correctAnswer": "Saint-Exupéry, Antoine de",
        "enableIf": "{answer131} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer46",
        "title": "Ve kterém roce jsi přečetla knihu 'Fantastická zvířata: Brumbálova tajemství - úplný scénář'?",
        "choices": [
          "2024",
          "2020",
          "2023",
          "2022"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer46} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer149",
        "title": "Kdo napsal knihu knihu 'Kulička'?",
        "choices": [
          "Mrštík, Alois",
          "Riordan, Rick",
          "Maupassant, Guy de",
          "Townsend, Jessica"
        ],
        "correctAnswer": "Maupassant, Guy de",
        "enableIf": "{answer149} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer181",
        "title": "Kdo napsal knihu knihu 'Divné hlášky z knihkupectví'?",
        "choices": [
          "Riordan, Rick",
          "Němcová, Božena",
          "Campbell, Jen",
          "Klíma, Josef"
        ],
        "correctAnswer": "Campbell, Jen",
        "enableIf": "{answer181} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer107",
        "title": "Kdo napsal knihu knihu 'Kroniky prachu (Kroniky prachu, #1)'?",
        "choices": [
          "Lednická, Karin",
          "Rina, Lin",
          "Salte, Tereza",
          "Fuks, Ladislav"
        ],
        "correctAnswer": "Rina, Lin",
        "enableIf": "{answer107} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer54",
        "title": "Ve kterém roce jsi přečetla knihu 'Spalovač mrtvol'?",
        "choices": [
          "2020",
          "2023",
          "2024",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer54} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer163",
        "title": "Kdo napsal knihu knihu 'Supernova (Renegades, #3)'?",
        "choices": [
          "Meyer, Marissa",
          "Meixnerová, Karolína Zoe",
          "Salte, Tereza",
          "Minier, Bernard"
        ],
        "correctAnswer": "Meyer, Marissa",
        "enableIf": "{answer163} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer50",
        "title": "Ve kterém roce jsi přečetla knihu 'Ostře sledované vlaky'?",
        "choices": [
          "2021",
          "2023",
          "2022",
          "2024"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer50} empty"
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
          "Tolkien, J.R.R.",
          "Paolini, Christopher",
          "Fitzgerald, F. Scott",
          "Klevisová, Michaela"
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
        "name": "answer203",
        "title": "Kdo napsal knihu knihu 'Hamlet'?",
        "choices": [
          "Shakespeare, William",
          "Green, John",
          "Čechová, Miřenka",
          "Klabouchová, Petra"
        ],
        "correctAnswer": "Shakespeare, William",
        "enableIf": "{answer203} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene4() {
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
        
        export default Proctene4;
        