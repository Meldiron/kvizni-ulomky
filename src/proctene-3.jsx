
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #3",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer32",
        "title": "Ve kterém roce jsi přečetla knihu 'Ready Player Two (Ready Player One, #2)'?",
        "choices": [
          "2023",
          "2020",
          "2021",
          "2024"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer32} empty"
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
          "2024",
          "2020"
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
        "name": "answer142",
        "title": "Ve kterém roce jsi přečetla knihu 'R.U.R. By Karel Čapek'?",
        "choices": [
          "2022",
          "2023",
          "2021",
          "2020"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer142} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer151",
        "title": "Kdo napsal knihu knihu 'Dcera ztracených bohů'?",
        "choices": [
          "Sapkowski, Andrzej",
          "Komrsková, Alžběta",
          "Klabouchová, Petra",
          "Salte, Tereza"
        ],
        "correctAnswer": "Komrsková, Alžběta",
        "enableIf": "{answer151} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer92",
        "title": "Ve kterém roce jsi přečetla knihu 'Krysař'?",
        "choices": [
          "2022",
          "2020",
          "2021",
          "2024"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer92} empty"
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
          "Dyk, Viktor",
          "Rolland, Romain",
          "Hrabal, Bohumil",
          "Tolkien, J.R.R."
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
        "name": "answer108",
        "title": "Ve kterém roce jsi přečetla knihu 'Lev, čarodějnice a skříň (Letopisy Narnie, #2)'?",
        "choices": [
          "2020",
          "2023",
          "2022",
          "2021"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer108} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer95",
        "title": "Kdo napsal knihu knihu 'Stoletý stařík, který vylezl z okna a zmizel (Stoletý stařík, #1)'?",
        "choices": [
          "Molière",
          "Jonasson, Jonas",
          "Čapek, Karel",
          "Katalpa, Jakuba"
        ],
        "correctAnswer": "Jonasson, Jonas",
        "enableIf": "{answer95} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer184",
        "title": "Ve kterém roce jsi přečetla knihu 'Meč osudu (Zaklínač, #2)'?",
        "choices": [
          "2021",
          "2022",
          "2020",
          "2024"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer184} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer186",
        "title": "Ve kterém roce jsi přečetla knihu 'iPohádka'?",
        "choices": [
          "2023",
          "2020",
          "2021",
          "2022"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer186} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene3() {
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
        
        export default Proctene3;
        