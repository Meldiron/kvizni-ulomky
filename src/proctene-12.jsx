
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #12",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer110",
        "title": "Ve kterém roce jsi přečetla knihu 'O myších a lidech'?",
        "choices": [
          "2022",
          "2020",
          "2021",
          "2024"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer110} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer111",
        "title": "Kdo napsal knihu knihu 'O myších a lidech'?",
        "choices": [
          "Owens, Delia",
          "Steinbeck, John",
          "Tung, Debbie",
          "Prince Harry"
        ],
        "correctAnswer": "Steinbeck, John",
        "enableIf": "{answer111} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer112",
        "title": "Ve kterém roce jsi přečetla knihu 'Pes Baskervilský: Další dobrodružství Sherlocka Holmese'?",
        "choices": [
          "2024",
          "2022",
          "2021",
          "2023"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer112} empty"
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
          "Maupassant, Guy de",
          "Caplin, Julie",
          "Motte, Anders de la",
          "Doyle, Arthur Conan"
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
        "name": "answer114",
        "title": "Ve kterém roce jsi přečetla knihu 'Kosti Mraza'?",
        "choices": [
          "2023",
          "2020",
          "2021",
          "2024"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer114} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer115",
        "title": "Kdo napsal knihu knihu 'Kosti Mraza'?",
        "choices": [
          "Rožek, Filip",
          "Bílková, Alžběta",
          "Nesbø, Jo",
          "Molière"
        ],
        "correctAnswer": "Bílková, Alžběta",
        "enableIf": "{answer115} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer116",
        "title": "Ve kterém roce jsi přečetla knihu 'Jak je důležité míti Filipa'?",
        "choices": [
          "2022",
          "2023",
          "2020",
          "2021"
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
        "name": "answer117",
        "title": "Kdo napsal knihu knihu 'Jak je důležité míti Filipa'?",
        "choices": [
          "Wilde, Oscar",
          "Holland, Sam",
          "Katalpa, Jakuba",
          "Sapkowski, Andrzej"
        ],
        "correctAnswer": "Wilde, Oscar",
        "enableIf": "{answer117} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer118",
        "title": "Ve kterém roce jsi přečetla knihu 'Sluha dvou pánů'?",
        "choices": [
          "2024",
          "2022",
          "2021",
          "2023"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer118} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer119",
        "title": "Kdo napsal knihu knihu 'Sluha dvou pánů'?",
        "choices": [
          "Yarros, Rebecca",
          "Goldoni, Carlo",
          "Karika, Jozef",
          "Mayne, Andrew"
        ],
        "correctAnswer": "Goldoni, Carlo",
        "enableIf": "{answer119} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene12() {
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
        
        export default Proctene12;
        