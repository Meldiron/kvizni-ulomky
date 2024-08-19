
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #11",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer164",
        "title": "Ve kterém roce jsi přečetla knihu 'Futurum'?",
        "choices": [
          "2021",
          "2024",
          "2022",
          "2020"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer164} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer193",
        "title": "Kdo napsal knihu knihu 'The Hunger Games (The Hunger Games, #1)'?",
        "choices": [
          "Ferrante, Elena",
          "Collins, Suzanne",
          "Scott, Michael",
          "Hrabal, Bohumil"
        ],
        "correctAnswer": "Collins, Suzanne",
        "enableIf": "{answer193} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer25",
        "title": "Kdo napsal knihu knihu 'Smrt číhá na jarmarku'?",
        "choices": [
          "Rowling, J.K.",
          "Motte, Anders de la",
          "Klevisová, Michaela",
          "Sapkowski, Andrzej"
        ],
        "correctAnswer": "Motte, Anders de la",
        "enableIf": "{answer25} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer125",
        "title": "Kdo napsal knihu knihu 'Petr a Lucie'?",
        "choices": [
          "Prince Harry",
          "Maupassant, Guy de",
          "Nguyễn Phan Quế Mai",
          "Rolland, Romain"
        ],
        "correctAnswer": "Rolland, Romain",
        "enableIf": "{answer125} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer101",
        "title": "Kdo napsal knihu knihu 'Bílá nemoc'?",
        "choices": [
          "Steinbeck, John",
          "Karolová, Kateřina",
          "Caplin, Julie",
          "Čapek, Karel"
        ],
        "correctAnswer": "Čapek, Karel",
        "enableIf": "{answer101} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer38",
        "title": "Ve kterém roce jsi přečetla knihu 'Nikdyuš. Zkoušky, jež podstoupila Morrigan Crowová (Nikdyuš #1)'?",
        "choices": [
          "2024",
          "2020",
          "2023",
          "2021"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer38} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer27",
        "title": "Kdo napsal knihu knihu 'Železná vdova (Železná vdova, #1)'?",
        "choices": [
          "Zhao, Xiran Jay",
          "Shakespeare, William",
          "Shaw, George Bernard",
          "Lewis, C.S."
        ],
        "correctAnswer": "Zhao, Xiran Jay",
        "enableIf": "{answer27} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer188",
        "title": "Ve kterém roce jsi přečetla knihu 'Teorie vraždy'?",
        "choices": [
          "2020",
          "2024",
          "2023",
          "2022"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer188} empty"
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
          "2020",
          "2023",
          "2022",
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
        "name": "answer8",
        "title": "Ve kterém roce jsi přečetla knihu 'Ignis fatuus'?",
        "choices": [
          "2021",
          "2023",
          "2024",
          "2020"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer8} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene11() {
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
        
        export default Proctene11;
        