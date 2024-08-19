
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #10",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer90",
        "title": "Ve kterém roce jsi přečetla knihu 'Noc na Karlštejně'?",
        "choices": [
          "2022",
          "2021",
          "2020",
          "2023"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer90} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer91",
        "title": "Kdo napsal knihu knihu 'Noc na Karlštejně'?",
        "choices": [
          "Vrchlický, Jaroslav",
          "Stehlíková, Petra",
          "Podolová, Petra",
          "Prince Harry"
        ],
        "correctAnswer": "Vrchlický, Jaroslav",
        "enableIf": "{answer91} empty"
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
          "2023",
          "2022",
          "2020",
          "2021"
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
        "name": "answer93",
        "title": "Kdo napsal knihu knihu 'Krysař'?",
        "choices": [
          "Tung, Debbie",
          "Schwab, Victoria",
          "Dyk, Viktor",
          "Cline, Ernest"
        ],
        "correctAnswer": "Dyk, Viktor",
        "enableIf": "{answer93} empty"
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
          "2020",
          "2023",
          "2022",
          "2021"
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
        "name": "answer95",
        "title": "Kdo napsal knihu knihu 'Stoletý stařík, který vylezl z okna a zmizel (Stoletý stařík, #1)'?",
        "choices": [
          "Tung, Debbie",
          "Jonasson, Jonas",
          "Salte, Tereza",
          "Martin, George R.R."
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
        "name": "answer96",
        "title": "Ve kterém roce jsi přečetla knihu 'Alchymista (Tajemství nesmrtelného Nicholase Flamela, #1)'?",
        "choices": [
          "2024",
          "2021",
          "2020",
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
        "name": "answer97",
        "title": "Kdo napsal knihu knihu 'Alchymista (Tajemství nesmrtelného Nicholase Flamela, #1)'?",
        "choices": [
          "Scott, Michael",
          "Rolland, Romain",
          "Fuks, Ladislav",
          "Cline, Ernest"
        ],
        "correctAnswer": "Scott, Michael",
        "enableIf": "{answer97} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer98",
        "title": "Ve kterém roce jsi přečetla knihu 'Svědectví o životě v KLDR'?",
        "choices": [
          "2024",
          "2021",
          "2020",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer98} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer99",
        "title": "Kdo napsal knihu knihu 'Svědectví o životě v KLDR'?",
        "choices": [
          "Strnadová, Anna",
          "Stehlíková, Petra",
          "Moravec, Martin",
          "Špitálníková, Nina"
        ],
        "correctAnswer": "Špitálníková, Nina",
        "enableIf": "{answer99} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene10() {
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
        
        export default Proctene10;
        