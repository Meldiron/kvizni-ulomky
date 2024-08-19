
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #7",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer60",
        "title": "Ve kterém roce jsi přečetla knihu 'Prokletý kraj'?",
        "choices": [
          "2023",
          "2022",
          "2020",
          "2024"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer60} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer61",
        "title": "Kdo napsal knihu knihu 'Prokletý kraj'?",
        "choices": [
          "Klevisová, Michaela",
          "Němcová, Božena",
          "Kovář, Karel Kovy",
          "Moravec, Martin"
        ],
        "correctAnswer": "Klevisová, Michaela",
        "enableIf": "{answer61} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer62",
        "title": "Ve kterém roce jsi přečetla knihu 'Saturnin'?",
        "choices": [
          "2021",
          "2024",
          "2023",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer62} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer63",
        "title": "Kdo napsal knihu knihu 'Saturnin'?",
        "choices": [
          "Jirotka, Zdeněk",
          "Klíma, Josef",
          "Prince Harry",
          "Nesbø, Jo"
        ],
        "correctAnswer": "Jirotka, Zdeněk",
        "enableIf": "{answer63} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer64",
        "title": "Ve kterém roce jsi přečetla knihu '451 stupňů Fahrenheita'?",
        "choices": [
          "2022",
          "2021",
          "2020",
          "2023"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer64} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer65",
        "title": "Kdo napsal knihu knihu '451 stupňů Fahrenheita'?",
        "choices": [
          "Jirotka, Zdeněk",
          "Lewis, C.S.",
          "Bradbury, Ray",
          "Pavel, Ota"
        ],
        "correctAnswer": "Bradbury, Ray",
        "enableIf": "{answer65} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer66",
        "title": "Ve kterém roce jsi přečetla knihu 'Životice: obraz (po)zapomenuté tragédie'?",
        "choices": [
          "2023",
          "2022",
          "2024",
          "2021"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer66} empty"
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
          "Salte, Tereza",
          "Lednická, Karin",
          "Motte, Anders de la",
          "Mrštík, Alois"
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
        "name": "answer68",
        "title": "Ve kterém roce jsi přečetla knihu 'Divá Bára'?",
        "choices": [
          "2021",
          "2020",
          "2023",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer68} empty"
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
          "Saint-Exupéry, Antoine de",
          "Němcová, Božena",
          "Karolová, Kateřina",
          "Martin, George R.R."
        ],
        "correctAnswer": "Němcová, Božena",
        "enableIf": "{answer69} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene7() {
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
        
        export default Proctene7;
        