
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #15",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer140",
        "title": "Ve kterém roce jsi přečetla knihu 'Utajené Orákulum (Apollónův pád, #1)'?",
        "choices": [
          "2021",
          "2020",
          "2024",
          "2023"
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
        "name": "answer141",
        "title": "Kdo napsal knihu knihu 'Utajené Orákulum (Apollónův pád, #1)'?",
        "choices": [
          "Owens, Delia",
          "Riordan, Rick",
          "Martin, George R.R.",
          "Zhao, Xiran Jay"
        ],
        "correctAnswer": "Riordan, Rick",
        "enableIf": "{answer141} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer142",
        "title": "Ve kterém roce jsi přečetla knihu 'R.U.R. By Karel Čapek'?",
        "choices": [
          "2021",
          "2023",
          "2022",
          "2020"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer142} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer143",
        "title": "Kdo napsal knihu knihu 'R.U.R. By Karel Čapek'?",
        "choices": [
          "Paolini, Christopher",
          "Čapek, Karel",
          "Nguyễn Phan Quế Mai",
          "Lamková, Hana"
        ],
        "correctAnswer": "Čapek, Karel",
        "enableIf": "{answer143} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer144",
        "title": "Ve kterém roce jsi přečetla knihu 'Listopád'?",
        "choices": [
          "2023",
          "2022",
          "2024",
          "2021"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer144} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer145",
        "title": "Kdo napsal knihu knihu 'Listopád'?",
        "choices": [
          "Karolová, Kateřina",
          "Čechová, Miřenka",
          "Salte, Tereza",
          "Mornštajnová, Alena"
        ],
        "correctAnswer": "Mornštajnová, Alena",
        "enableIf": "{answer145} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer146",
        "title": "Ve kterém roce jsi přečetla knihu 'Tma'?",
        "choices": [
          "2024",
          "2023",
          "2021",
          "2022"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer146} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer147",
        "title": "Kdo napsal knihu knihu 'Tma'?",
        "choices": [
          "Nesbø, Jo",
          "Karika, Jozef",
          "Sapkowski, Andrzej",
          "Riordan, Rick"
        ],
        "correctAnswer": "Karika, Jozef",
        "enableIf": "{answer147} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer148",
        "title": "Ve kterém roce jsi přečetla knihu 'Kulička'?",
        "choices": [
          "2022",
          "2024",
          "2021",
          "2023"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer148} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer149",
        "title": "Kdo napsal knihu knihu 'Kulička'?",
        "choices": [
          "Maupassant, Guy de",
          "Holland, Sam",
          "Shakespeare, William",
          "Borovský, Karel Havlíček"
        ],
        "correctAnswer": "Maupassant, Guy de",
        "enableIf": "{answer149} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene15() {
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
        
        export default Proctene15;
        