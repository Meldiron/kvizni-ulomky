
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
        "name": "answer23",
        "title": "Kdo napsal knihu knihu 'Hory zpívají'?",
        "choices": [
          "Nguyễn Phan Quế Mai",
          "Campbell, Jen",
          "Kovář, Karel Kovy",
          "Vrchlický, Jaroslav"
        ],
        "correctAnswer": "Nguyễn Phan Quế Mai",
        "enableIf": "{answer23} empty"
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
          "2022",
          "2021",
          "2024",
          "2023"
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
        "name": "answer20",
        "title": "Ve kterém roce jsi přečetla knihu 'Šarlatán'?",
        "choices": [
          "2020",
          "2021",
          "2024",
          "2023"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer20} empty"
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
          "Lamková, Hana",
          "Šulc, Jiří",
          "Čapek, Karel",
          "Karolová, Kateřina"
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
        "name": "answer88",
        "title": "Ve kterém roce jsi přečetla knihu '1984'?",
        "choices": [
          "2021",
          "2020",
          "2022",
          "2024"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer88} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer110",
        "title": "Ve kterém roce jsi přečetla knihu 'O myších a lidech'?",
        "choices": [
          "2023",
          "2024",
          "2021",
          "2022"
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
        "name": "answer53",
        "title": "Kdo napsal knihu knihu 'Baletky'?",
        "choices": [
          "Zibura, Ladislav",
          "Čechová, Miřenka",
          "Sapkowski, Andrzej",
          "Yarros, Rebecca"
        ],
        "correctAnswer": "Čechová, Miřenka",
        "enableIf": "{answer53} empty"
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
          "Karika, Jozef",
          "Karolová, Kateřina",
          "Riordan, Rick",
          "Rina, Lin"
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
        "name": "answer144",
        "title": "Ve kterém roce jsi přečetla knihu 'Listopád'?",
        "choices": [
          "2021",
          "2024",
          "2022",
          "2023"
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
        "name": "answer19",
        "title": "Kdo napsal knihu knihu 'Šikmý kostel: románová kronika ztraceného města (léta 1894 - 1921)'?",
        "choices": [
          "Paolini, Christopher",
          "Nguyễn Phan Quế Mai",
          "Cline, Ernest",
          "Lednická, Karin"
        ],
        "correctAnswer": "Lednická, Karin",
        "enableIf": "{answer19} empty"
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
        