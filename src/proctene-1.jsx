
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #1",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer121",
        "title": "Kdo napsal knihu knihu 'Gump - Pes, který naučil lidi žít'?",
        "choices": [
          "Rožek, Filip",
          "Bradbury, Ray",
          "Scott, Michael",
          "Mayne, Andrew"
        ],
        "correctAnswer": "Rožek, Filip",
        "enableIf": "{answer121} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer41",
        "title": "Kdo napsal knihu knihu 'Smrt přichází na prohlídku (Vraždy v Österlenu, #1)'?",
        "choices": [
          "Yarros, Rebecca",
          "Motte, Anders de la",
          "Špitálníková, Nina",
          "Owens, Delia"
        ],
        "correctAnswer": "Motte, Anders de la",
        "enableIf": "{answer41} empty"
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
          "2023",
          "2022",
          "2021"
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
        "name": "answer4",
        "title": "Ve kterém roce jsi přečetla knihu 'Čtvrté křídlo (Empyreum, #1)'?",
        "choices": [
          "2022",
          "2023",
          "2024",
          "2020"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer4} empty"
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
          "Jonasson, Jonas",
          "Tolkien, J.R.R.",
          "Steinbeck, John",
          "Čapek, Karel"
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
        "name": "answer198",
        "title": "Ve kterém roce jsi přečetla knihu 'Vox'?",
        "choices": [
          "2022",
          "2023",
          "2020",
          "2021"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer198} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer60",
        "title": "Ve kterém roce jsi přečetla knihu 'Prokletý kraj'?",
        "choices": [
          "2022",
          "2024",
          "2021",
          "2020"
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
        "name": "answer187",
        "title": "Kdo napsal knihu knihu 'iPohádka'?",
        "choices": [
          "Frank, Sylvia",
          "Minier, Bernard",
          "Kovář, Karel Kovy",
          "Fitzgerald, F. Scott"
        ],
        "correctAnswer": "Kovář, Karel Kovy",
        "enableIf": "{answer187} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer202",
        "title": "Ve kterém roce jsi přečetla knihu 'Hamlet'?",
        "choices": [
          "2024",
          "2022",
          "2021",
          "2020"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer202} empty"
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
          "Owens, Delia",
          "Ferrante, Elena",
          "Wilde, Oscar",
          "Michell, Tom"
        ],
        "correctAnswer": "Wilde, Oscar",
        "enableIf": "{answer117} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene1() {
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
        
        export default Proctene1;
        