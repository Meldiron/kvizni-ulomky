
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #17",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer160",
        "title": "Ve kterém roce jsi přečetla knihu 'Kavárna v Kodani (Romantické útěky, #1)'?",
        "choices": [
          "2024",
          "2021",
          "2022",
          "2023"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer160} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer161",
        "title": "Kdo napsal knihu knihu 'Kavárna v Kodani (Romantické útěky, #1)'?",
        "choices": [
          "Salte, Tereza",
          "Zibura, Ladislav",
          "Bílková, Alžběta",
          "Caplin, Julie"
        ],
        "correctAnswer": "Caplin, Julie",
        "enableIf": "{answer161} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer162",
        "title": "Ve kterém roce jsi přečetla knihu 'Supernova (Renegades, #3)'?",
        "choices": [
          "2024",
          "2021",
          "2023",
          "2020"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer162} empty"
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
          "Steinbeck, John",
          "Gogol, Nikolai",
          "Meyer, Marissa",
          "Rowling, J.K."
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
        "name": "answer164",
        "title": "Ve kterém roce jsi přečetla knihu 'Futurum'?",
        "choices": [
          "2021",
          "2023",
          "2022",
          "2020"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer164} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer165",
        "title": "Kdo napsal knihu knihu 'Futurum'?",
        "choices": [
          "Podolová, Petra",
          "Klabouchová, Petra",
          "Collins, Suzanne",
          "Němcová, Božena"
        ],
        "correctAnswer": "Podolová, Petra",
        "enableIf": "{answer165} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer166",
        "title": "Ve kterém roce jsi přečetla knihu 'Revizor'?",
        "choices": [
          "2024",
          "2023",
          "2020",
          "2021"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer166} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer167",
        "title": "Kdo napsal knihu knihu 'Revizor'?",
        "choices": [
          "Ferrante, Elena",
          "Zibura, Ladislav",
          "Gogol, Nikolai",
          "Bílková, Alžběta"
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
        "name": "answer168",
        "title": "Ve kterém roce jsi přečetla knihu 'Protivníci (Renegáti, #2)'?",
        "choices": [
          "2021",
          "2022",
          "2020",
          "2023"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer168} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer169",
        "title": "Kdo napsal knihu knihu 'Protivníci (Renegáti, #2)'?",
        "choices": [
          "Komrsková, Alžběta",
          "Meyer, Marissa",
          "Holland, Sam",
          "Rowling, J.K."
        ],
        "correctAnswer": "Meyer, Marissa",
        "enableIf": "{answer169} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene17() {
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
        
        export default Proctene17;
        