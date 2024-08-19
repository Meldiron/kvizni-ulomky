
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #6",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer50",
        "title": "Ve kterém roce jsi přečetla knihu 'Ostře sledované vlaky'?",
        "choices": [
          "2021",
          "2024",
          "2022",
          "2023"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer50} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer51",
        "title": "Kdo napsal knihu knihu 'Ostře sledované vlaky'?",
        "choices": [
          "Frank, Sylvia",
          "Podolová, Petra",
          "Gogol, Nikolai",
          "Hrabal, Bohumil"
        ],
        "correctAnswer": "Hrabal, Bohumil",
        "enableIf": "{answer51} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer52",
        "title": "Ve kterém roce jsi přečetla knihu 'Baletky'?",
        "choices": [
          "2022",
          "2023",
          "2020",
          "2021"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer52} empty"
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
          "Bílková, Alžběta",
          "Čechová, Miřenka",
          "Owens, Delia",
          "Karolová, Kateřina"
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
        "name": "answer54",
        "title": "Ve kterém roce jsi přečetla knihu 'Spalovač mrtvol'?",
        "choices": [
          "2022",
          "2021",
          "2023",
          "2024"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer54} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer55",
        "title": "Kdo napsal knihu knihu 'Spalovač mrtvol'?",
        "choices": [
          "Green, John",
          "Fuks, Ladislav",
          "Meyer, Marissa",
          "Cline, Ernest"
        ],
        "correctAnswer": "Fuks, Ladislav",
        "enableIf": "{answer55} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer56",
        "title": "Ve kterém roce jsi přečetla knihu 'Maryša'?",
        "choices": [
          "2021",
          "2022",
          "2024",
          "2020"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer56} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer57",
        "title": "Kdo napsal knihu knihu 'Maryša'?",
        "choices": [
          "Rolland, Romain",
          "Nesbø, Jo",
          "Baldree, Travis",
          "Mrštík, Alois"
        ],
        "correctAnswer": "Mrštík, Alois",
        "enableIf": "{answer57} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer58",
        "title": "Ve kterém roce jsi přečetla knihu 'Odcházení'?",
        "choices": [
          "2021",
          "2024",
          "2022",
          "2020"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer58} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer59",
        "title": "Kdo napsal knihu knihu 'Odcházení'?",
        "choices": [
          "Mornštajnová, Alena",
          "Havel, Václav",
          "Stehlíková, Petra",
          "Motte, Anders de la"
        ],
        "correctAnswer": "Havel, Václav",
        "enableIf": "{answer59} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene6() {
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
        
        export default Proctene6;
        