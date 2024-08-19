
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
        "name": "answer130",
        "title": "Ve kterém roce jsi přečetla knihu 'Malý princ'?",
        "choices": [
          "2024",
          "2023",
          "2021",
          "2020"
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
        "name": "answer165",
        "title": "Kdo napsal knihu knihu 'Futurum'?",
        "choices": [
          "Motte, Anders de la",
          "Klabouchová, Petra",
          "Mornštajnová, Alena",
          "Podolová, Petra"
        ],
        "correctAnswer": "Podolová, Petra",
        "enableIf": "{answer165} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer153",
        "title": "Kdo napsal knihu knihu 'Velký Gatsby'?",
        "choices": [
          "Wilde, Oscar",
          "Salte, Tereza",
          "Fitzgerald, F. Scott",
          "Nesbø, Jo"
        ],
        "correctAnswer": "Fitzgerald, F. Scott",
        "enableIf": "{answer153} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer63",
        "title": "Kdo napsal knihu knihu 'Saturnin'?",
        "choices": [
          "Kinney, Jeff",
          "Havel, Václav",
          "Jirotka, Zdeněk",
          "Baldree, Travis"
        ],
        "correctAnswer": "Jirotka, Zdeněk",
        "enableIf": "{answer63} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer120",
        "title": "Ve kterém roce jsi přečetla knihu 'Gump - Pes, který naučil lidi žít'?",
        "choices": [
          "2020",
          "2023",
          "2024",
          "2021"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer120} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer152",
        "title": "Ve kterém roce jsi přečetla knihu 'Velký Gatsby'?",
        "choices": [
          "2024",
          "2020",
          "2022",
          "2021"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer152} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer68",
        "title": "Ve kterém roce jsi přečetla knihu 'Divá Bára'?",
        "choices": [
          "2023",
          "2022",
          "2021",
          "2024"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer68} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer70",
        "title": "Ve kterém roce jsi přečetla knihu 'Co mě naučil tučňák'?",
        "choices": [
          "2024",
          "2021",
          "2022",
          "2023"
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
        "name": "answer196",
        "title": "Ve kterém roce jsi přečetla knihu 'Rytíř Sedmi království'?",
        "choices": [
          "2024",
          "2022",
          "2023",
          "2020"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer196} empty"
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
          "Karolová, Kateřina",
          "Maupassant, Guy de",
          "Bílková, Alžběta"
        ],
        "correctAnswer": "Bílková, Alžběta",
        "enableIf": "{answer115} empty"
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
        