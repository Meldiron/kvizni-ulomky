
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #5",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer40",
        "title": "Ve kterém roce jsi přečetla knihu 'Smrt přichází na prohlídku (Vraždy v Österlenu, #1)'?",
        "choices": [
          "2023",
          "2020",
          "2022",
          "2021"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer40} empty"
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
          "Townsend, Jessica",
          "Karika, Jozef",
          "Motte, Anders de la",
          "Jonasson, Jonas"
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
        "name": "answer42",
        "title": "Ve kterém roce jsi přečetla knihu 'Pěšky mezi buddhisty a komunisty'?",
        "choices": [
          "2024",
          "2022",
          "2021",
          "2023"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer42} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer43",
        "title": "Kdo napsal knihu knihu 'Pěšky mezi buddhisty a komunisty'?",
        "choices": [
          "Michell, Tom",
          "Yarros, Rebecca",
          "Zibura, Ladislav",
          "Komrsková, Alžběta"
        ],
        "correctAnswer": "Zibura, Ladislav",
        "enableIf": "{answer43} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer44",
        "title": "Ve kterém roce jsi přečetla knihu 'Naslouchač (Naslouchač, #1)'?",
        "choices": [
          "2023",
          "2020",
          "2021",
          "2024"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer44} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer45",
        "title": "Kdo napsal knihu knihu 'Naslouchač (Naslouchač, #1)'?",
        "choices": [
          "Gogol, Nikolai",
          "Stehlíková, Petra",
          "Martin, George R.R.",
          "Komrsková, Alžběta"
        ],
        "correctAnswer": "Stehlíková, Petra",
        "enableIf": "{answer45} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer46",
        "title": "Ve kterém roce jsi přečetla knihu 'Fantastická zvířata: Brumbálova tajemství - úplný scénář'?",
        "choices": [
          "2020",
          "2021",
          "2024",
          "2023"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer46} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer47",
        "title": "Kdo napsal knihu knihu 'Fantastická zvířata: Brumbálova tajemství - úplný scénář'?",
        "choices": [
          "Rowling, J.K.",
          "Green, John",
          "Zhao, Xiran Jay",
          "Čechová, Miřenka"
        ],
        "correctAnswer": "Rowling, J.K.",
        "enableIf": "{answer47} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer48",
        "title": "Ve kterém roce jsi přečetla knihu 'Odbočka v lesích'?",
        "choices": [
          "2024",
          "2020",
          "2023",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer48} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer49",
        "title": "Kdo napsal knihu knihu 'Odbočka v lesích'?",
        "choices": [
          "Meixnerová, Karolína Zoe",
          "Karolová, Kateřina",
          "Wilde, Oscar",
          "Dyk, Viktor"
        ],
        "correctAnswer": "Karolová, Kateřina",
        "enableIf": "{answer49} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene5() {
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
        
        export default Proctene5;
        