
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #2",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer119",
        "title": "Kdo napsal knihu knihu 'Sluha dvou pánů'?",
        "choices": [
          "Baldree, Travis",
          "Hrabal, Bohumil",
          "Goldoni, Carlo",
          "Yarros, Rebecca"
        ],
        "correctAnswer": "Goldoni, Carlo",
        "enableIf": "{answer119} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer1",
        "title": "Kdo napsal knihu knihu 'Národní opruzení'?",
        "choices": [
          "Nguyễn Phan Quế Mai",
          "Komrsková, Alžběta",
          "Meixnerová, Karolína Zoe",
          "Collins, Suzanne"
        ],
        "correctAnswer": "Meixnerová, Karolína Zoe",
        "enableIf": "{answer1} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer128",
        "title": "Ve kterém roce jsi přečetla knihu 'Krev elfů (Zaklínač, #3)'?",
        "choices": [
          "2023",
          "2021",
          "2024",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer128} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer157",
        "title": "Kdo napsal knihu knihu 'Trhlina'?",
        "choices": [
          "Owens, Delia",
          "Nesbø, Jo",
          "Hrabal, Bohumil",
          "Karika, Jozef"
        ],
        "correctAnswer": "Karika, Jozef",
        "enableIf": "{answer157} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer7",
        "title": "Kdo napsal knihu knihu 'Bookshops & Bonedust (Legends & Lattes, #0)'?",
        "choices": [
          "Karolová, Kateřina",
          "Baldree, Travis",
          "Frank, Sylvia",
          "Fitzgerald, F. Scott"
        ],
        "correctAnswer": "Baldree, Travis",
        "enableIf": "{answer7} empty"
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
          "Owens, Delia",
          "Sapkowski, Andrzej",
          "Wilde, Oscar"
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
        "name": "answer76",
        "title": "Ve kterém roce jsi přečetla knihu 'Dva proti Říši'?",
        "choices": [
          "2022",
          "2023",
          "2024",
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
        "name": "answer28",
        "title": "Ve kterém roce jsi přečetla knihu 'Gala & Dalí: Nerozluční'?",
        "choices": [
          "2022",
          "2024",
          "2023",
          "2021"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer28} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer17",
        "title": "Kdo napsal knihu knihu 'Spare'?",
        "choices": [
          "Townsend, Jessica",
          "Gogol, Nikolai",
          "Prince Harry",
          "Molière"
        ],
        "correctAnswer": "Prince Harry",
        "enableIf": "{answer17} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer21",
        "title": "Kdo napsal knihu knihu 'Šarlatán'?",
        "choices": [
          "Motte, Anders de la",
          "Strnadová, Anna",
          "Klíma, Josef",
          "Lamková, Hana"
        ],
        "correctAnswer": "Klíma, Josef",
        "enableIf": "{answer21} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene2() {
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
        
        export default Proctene2;
        