
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #8",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer70",
        "title": "Ve kterém roce jsi přečetla knihu 'Co mě naučil tučňák'?",
        "choices": [
          "2021",
          "2023",
          "2024",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer70} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer71",
        "title": "Kdo napsal knihu knihu 'Co mě naučil tučňák'?",
        "choices": [
          "Townsend, Jessica",
          "Michell, Tom",
          "Moravec, Martin",
          "Rowling, J.K."
        ],
        "correctAnswer": "Michell, Tom",
        "enableIf": "{answer71} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer72",
        "title": "Ve kterém roce jsi přečetla knihu 'Mráz (Detektiv Martin Servaz, #1)'?",
        "choices": [
          "2020",
          "2022",
          "2023",
          "2021"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer72} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer73",
        "title": "Kdo napsal knihu knihu 'Mráz (Detektiv Martin Servaz, #1)'?",
        "choices": [
          "Kinney, Jeff",
          "Minier, Bernard",
          "Bílková, Alžběta",
          "Sapkowski, Andrzej"
        ],
        "correctAnswer": "Minier, Bernard",
        "enableIf": "{answer73} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer74",
        "title": "Ve kterém roce jsi přečetla knihu 'Poupátka'?",
        "choices": [
          "2022",
          "2024",
          "2020",
          "2023"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer74} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer75",
        "title": "Kdo napsal knihu knihu 'Poupátka'?",
        "choices": [
          "Cline, Ernest",
          "Borovský, Karel Havlíček",
          "Lehečková, Hana",
          "Baldree, Travis"
        ],
        "correctAnswer": "Lehečková, Hana",
        "enableIf": "{answer75} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer76",
        "title": "Ve kterém roce jsi přečetla knihu 'Dva proti Říši'?",
        "choices": [
          "2022",
          "2024",
          "2020",
          "2021"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer76} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer77",
        "title": "Kdo napsal knihu knihu 'Dva proti Říši'?",
        "choices": [
          "Pavel, Ota",
          "Karolová, Kateřina",
          "Šulc, Jiří",
          "Goldoni, Carlo"
        ],
        "correctAnswer": "Šulc, Jiří",
        "enableIf": "{answer77} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer78",
        "title": "Ve kterém roce jsi přečetla knihu 'Smrt krásných srnců'?",
        "choices": [
          "2024",
          "2020",
          "2021",
          "2023"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer78} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer79",
        "title": "Kdo napsal knihu knihu 'Smrt krásných srnců'?",
        "choices": [
          "Pavel, Ota",
          "Jirotka, Zdeněk",
          "Steinbeck, John",
          "Hrabal, Bohumil"
        ],
        "correctAnswer": "Pavel, Ota",
        "enableIf": "{answer79} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene8() {
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
        
        export default Proctene8;
        