
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #14",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer130",
        "title": "Ve kterém roce jsi přečetla knihu 'Malý princ'?",
        "choices": [
          "2020",
          "2021",
          "2024",
          "2023"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer130} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer131",
        "title": "Kdo napsal knihu knihu 'Malý princ'?",
        "choices": [
          "Saint-Exupéry, Antoine de",
          "Fitzgerald, F. Scott",
          "Christie, Agatha",
          "Mornštajnová, Alena"
        ],
        "correctAnswer": "Saint-Exupéry, Antoine de",
        "enableIf": "{answer131} empty"
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
          "2024",
          "2021",
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
        "name": "answer133",
        "title": "Kdo napsal knihu knihu 'Příliš mnoho Kateřin'?",
        "choices": [
          "Nguyễn Phan Quế Mai",
          "Bílková, Alžběta",
          "Green, John",
          "Wilde, Oscar"
        ],
        "correctAnswer": "Green, John",
        "enableIf": "{answer133} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer134",
        "title": "Ve kterém roce jsi přečetla knihu 'Romeo and Juliet'?",
        "choices": [
          "2023",
          "2020",
          "2022",
          "2021"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer134} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer135",
        "title": "Kdo napsal knihu knihu 'Romeo and Juliet'?",
        "choices": [
          "Christie, Agatha",
          "Zibura, Ladislav",
          "Shakespeare, William",
          "Goldoni, Carlo"
        ],
        "correctAnswer": "Shakespeare, William",
        "enableIf": "{answer135} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer136",
        "title": "Ve kterém roce jsi přečetla knihu 'Bouře mečů (Píseň ledu a ohně, #3)'?",
        "choices": [
          "2022",
          "2023",
          "2021",
          "2020"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer136} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer137",
        "title": "Kdo napsal knihu knihu 'Bouře mečů (Píseň ledu a ohně, #3)'?",
        "choices": [
          "Meyer, Marissa",
          "Martin, George R.R.",
          "Borovský, Karel Havlíček",
          "Rožek, Filip"
        ],
        "correctAnswer": "Martin, George R.R.",
        "enableIf": "{answer137} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer138",
        "title": "Ve kterém roce jsi přečetla knihu 'Němci'?",
        "choices": [
          "2020",
          "2021",
          "2024",
          "2023"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer138} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer139",
        "title": "Kdo napsal knihu knihu 'Němci'?",
        "choices": [
          "Katalpa, Jakuba",
          "Paolini, Christopher",
          "Dyk, Viktor",
          "Martin, George R.R."
        ],
        "correctAnswer": "Katalpa, Jakuba",
        "enableIf": "{answer139} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene14() {
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
        
        export default Proctene14;
        