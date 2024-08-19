
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
        "name": "answer170",
        "title": "Ve kterém roce jsi přečetla knihu 'Renegáti (Renegáti, #1)'?",
        "choices": [
          "2024",
          "2022",
          "2020",
          "2023"
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
        "name": "answer171",
        "title": "Kdo napsal knihu knihu 'Renegáti (Renegáti, #1)'?",
        "choices": [
          "Tolkien, J.R.R.",
          "Strnadová, Anna",
          "Meyer, Marissa",
          "Komrsková, Alžběta"
        ],
        "correctAnswer": "Meyer, Marissa",
        "enableIf": "{answer171} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer172",
        "title": "Ve kterém roce jsi přečetla knihu 'The Lying Life of Adults'?",
        "choices": [
          "2024",
          "2021",
          "2022",
          "2020"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer172} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer173",
        "title": "Kdo napsal knihu knihu 'The Lying Life of Adults'?",
        "choices": [
          "Steinbeck, John",
          "Ferrante, Elena",
          "Zibura, Ladislav",
          "Dyk, Viktor"
        ],
        "correctAnswer": "Ferrante, Elena",
        "enableIf": "{answer173} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer174",
        "title": "Ve kterém roce jsi přečetla knihu 'Král Lávra'?",
        "choices": [
          "2022",
          "2020",
          "2021",
          "2024"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer174} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer175",
        "title": "Kdo napsal knihu knihu 'Král Lávra'?",
        "choices": [
          "Borovský, Karel Havlíček",
          "Karolová, Kateřina",
          "Rožek, Filip",
          "Moravec, Martin"
        ],
        "correctAnswer": "Borovský, Karel Havlíček",
        "enableIf": "{answer175} empty"
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
          "2024",
          "2021",
          "2022",
          "2020"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer176} empty"
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
          "Shaw, George Bernard",
          "Rowling, J.K.",
          "Baldree, Travis",
          "Lamková, Hana"
        ],
        "correctAnswer": "Lamková, Hana",
        "enableIf": "{answer177} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer178",
        "title": "Ve kterém roce jsi přečetla knihu 'Síla vzdoru (The Hunger Games, #3)'?",
        "choices": [
          "2023",
          "2022",
          "2024",
          "2020"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer178} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer179",
        "title": "Kdo napsal knihu knihu 'Síla vzdoru (The Hunger Games, #3)'?",
        "choices": [
          "Collins, Suzanne",
          "Pavel, Ota",
          "Tolkien, J.R.R.",
          "Green, John"
        ],
        "correctAnswer": "Collins, Suzanne",
        "enableIf": "{answer179} empty"
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
        