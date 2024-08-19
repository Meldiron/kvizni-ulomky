
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
        "name": "answer116",
        "title": "Ve kterém roce jsi přečetla knihu 'Jak je důležité míti Filipa'?",
        "choices": [
          "2022",
          "2020",
          "2024",
          "2023"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer116} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer18",
        "title": "Ve kterém roce jsi přečetla knihu 'Šikmý kostel: románová kronika ztraceného města (léta 1894 - 1921)'?",
        "choices": [
          "2023",
          "2022",
          "2024",
          "2021"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer18} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer192",
        "title": "Ve kterém roce jsi přečetla knihu 'The Hunger Games (The Hunger Games, #1)'?",
        "choices": [
          "2023",
          "2024",
          "2021",
          "2020"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer192} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer124",
        "title": "Ve kterém roce jsi přečetla knihu 'Petr a Lucie'?",
        "choices": [
          "2021",
          "2022",
          "2020",
          "2024"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer124} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer113",
        "title": "Kdo napsal knihu knihu 'Pes Baskervilský: Další dobrodružství Sherlocka Holmese'?",
        "choices": [
          "Lewis, C.S.",
          "Doyle, Arthur Conan",
          "Mrštík, Alois",
          "Meyer, Marissa"
        ],
        "correctAnswer": "Doyle, Arthur Conan",
        "enableIf": "{answer113} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer104",
        "title": "Ve kterém roce jsi přečetla knihu 'Kde zpívají raci'?",
        "choices": [
          "2022",
          "2024",
          "2021",
          "2020"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer104} empty"
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
          "2020",
          "2024",
          "2021",
          "2022"
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
        "name": "answer74",
        "title": "Ve kterém roce jsi přečetla knihu 'Poupátka'?",
        "choices": [
          "2022",
          "2020",
          "2024",
          "2021"
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
        "name": "answer132",
        "title": "Ve kterém roce jsi přečetla knihu 'Příliš mnoho Kateřin'?",
        "choices": [
          "2021",
          "2023",
          "2022",
          "2020"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer132} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer155",
        "title": "Kdo napsal knihu knihu 'Ze života knihomolky'?",
        "choices": [
          "Tung, Debbie",
          "Fuks, Ladislav",
          "Motte, Anders de la",
          "Pavel, Ota"
        ],
        "correctAnswer": "Tung, Debbie",
        "enableIf": "{answer155} empty"
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
        