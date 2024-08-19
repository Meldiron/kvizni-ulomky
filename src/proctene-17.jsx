
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #17",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer182",
        "title": "Ve kterém roce jsi přečetla knihu 'Vražedná pomsta (The Hunger Games, #2)'?",
        "choices": [
          "2024",
          "2023",
          "2022",
          "2020"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer182} empty"
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
          "Zibura, Ladislav",
          "Caplin, Julie",
          "Goldoni, Carlo",
          "Baldree, Travis"
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
        "name": "answer136",
        "title": "Ve kterém roce jsi přečetla knihu 'Bouře mečů (Píseň ledu a ohně, #3)'?",
        "choices": [
          "2020",
          "2023",
          "2024",
          "2022"
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
        "name": "answer160",
        "title": "Ve kterém roce jsi přečetla knihu 'Kavárna v Kodani (Romantické útěky, #1)'?",
        "choices": [
          "2021",
          "2024",
          "2020",
          "2023"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer160} empty"
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
          "Collins, Suzanne",
          "Mayne, Andrew",
          "Hrabal, Bohumil",
          "Christie, Agatha"
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
        "name": "answer37",
        "title": "Kdo napsal knihu knihu 'Šlehačková oblaka'?",
        "choices": [
          "Salte, Tereza",
          "Pavel, Ota",
          "Jonasson, Jonas",
          "Rina, Lin"
        ],
        "correctAnswer": "Salte, Tereza",
        "enableIf": "{answer37} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer65",
        "title": "Kdo napsal knihu knihu '451 stupňů Fahrenheita'?",
        "choices": [
          "Mayne, Andrew",
          "Bradbury, Ray",
          "Dalcher, Christina",
          "Hrabal, Bohumil"
        ],
        "correctAnswer": "Bradbury, Ray",
        "enableIf": "{answer65} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer30",
        "title": "Ve kterém roce jsi přečetla knihu 'Josef Mareš: Moje případy z 1. oddělení'?",
        "choices": [
          "2022",
          "2020",
          "2024",
          "2023"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer30} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer190",
        "title": "Ve kterém roce jsi přečetla knihu 'Poutník, čarodějnice a červ (Příběhy z Alagaësie #1)'?",
        "choices": [
          "2020",
          "2023",
          "2024",
          "2022"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer190} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer166",
        "title": "Ve kterém roce jsi přečetla knihu 'Revizor'?",
        "choices": [
          "2024",
          "2020",
          "2021",
          "2022"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer166} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene17() {
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
        
        export default Proctene17;
        