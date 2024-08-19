
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #19",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer200",
        "title": "Ve kterém roce jsi přečetla knihu 'Lakomec'?",
        "choices": [
          "2023",
          "2021",
          "2024",
          "2022"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer200} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer14",
        "title": "Ve kterém roce jsi přečetla knihu '…stačilo jen říct Jáchymov'?",
        "choices": [
          "2021",
          "2024",
          "2022",
          "2023"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer14} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer40",
        "title": "Ve kterém roce jsi přečetla knihu 'Smrt přichází na prohlídku (Vraždy v Österlenu, #1)'?",
        "choices": [
          "2022",
          "2021",
          "2023",
          "2024"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer40} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer140",
        "title": "Ve kterém roce jsi přečetla knihu 'Utajené Orákulum (Apollónův pád, #1)'?",
        "choices": [
          "2020",
          "2023",
          "2022",
          "2021"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer140} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer6",
        "title": "Ve kterém roce jsi přečetla knihu 'Bookshops & Bonedust (Legends & Lattes, #0)'?",
        "choices": [
          "2024",
          "2023",
          "2021",
          "2022"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer6} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer26",
        "title": "Ve kterém roce jsi přečetla knihu 'Železná vdova (Železná vdova, #1)'?",
        "choices": [
          "2023",
          "2021",
          "2024",
          "2020"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer26} empty"
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
          "Schwab, Victoria",
          "Cline, Ernest",
          "Townsend, Jessica",
          "Salte, Tereza"
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
        "name": "answer170",
        "title": "Ve kterém roce jsi přečetla knihu 'Renegáti (Renegáti, #1)'?",
        "choices": [
          "2022",
          "2024",
          "2021",
          "2020"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer170} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer52",
        "title": "Ve kterém roce jsi přečetla knihu 'Baletky'?",
        "choices": [
          "2023",
          "2021",
          "2020",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer52} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer177",
        "title": "Kdo napsal knihu knihu '4 Starodávné příběhy Čtyřlístku'?",
        "choices": [
          "Komrsková, Alžběta",
          "Moravec, Martin",
          "Lamková, Hana",
          "Orwell, George"
        ],
        "correctAnswer": "Lamková, Hana",
        "enableIf": "{answer177} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene19() {
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
        
        export default Proctene19;
        