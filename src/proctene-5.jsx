
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
        "name": "answer118",
        "title": "Ve kterém roce jsi přečetla knihu 'Sluha dvou pánů'?",
        "choices": [
          "2024",
          "2021",
          "2020",
          "2023"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer118} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer109",
        "title": "Kdo napsal knihu knihu 'Lev, čarodějnice a skříň (Letopisy Narnie, #2)'?",
        "choices": [
          "Dyk, Viktor",
          "Lewis, C.S.",
          "Karika, Jozef",
          "Motte, Anders de la"
        ],
        "correctAnswer": "Lewis, C.S.",
        "enableIf": "{answer109} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer161",
        "title": "Kdo napsal knihu knihu 'Kavárna v Kodani (Romantické útěky, #1)'?",
        "choices": [
          "Doyle, Arthur Conan",
          "Paolini, Christopher",
          "Caplin, Julie",
          "Karika, Jozef"
        ],
        "correctAnswer": "Caplin, Julie",
        "enableIf": "{answer161} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer35",
        "title": "Kdo napsal knihu knihu 'Kopírák'?",
        "choices": [
          "Meyer, Marissa",
          "Holland, Sam",
          "Rožek, Filip",
          "Martin, George R.R."
        ],
        "correctAnswer": "Holland, Sam",
        "enableIf": "{answer35} empty"
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
          "Vrchlický, Jaroslav",
          "Ferrante, Elena",
          "Schwab, Victoria",
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
        "name": "answer73",
        "title": "Kdo napsal knihu knihu 'Mráz (Detektiv Martin Servaz, #1)'?",
        "choices": [
          "Bílková, Alžběta",
          "Campbell, Jen",
          "Fuks, Ladislav",
          "Minier, Bernard"
        ],
        "correctAnswer": "Minier, Bernard",
        "enableIf": "{answer73} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer175",
        "title": "Kdo napsal knihu knihu 'Král Lávra'?",
        "choices": [
          "Kovář, Karel Kovy",
          "Borovský, Karel Havlíček",
          "Lehečková, Hana",
          "Rina, Lin"
        ],
        "correctAnswer": "Borovský, Karel Havlíček",
        "enableIf": "{answer175} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer126",
        "title": "Ve kterém roce jsi přečetla knihu 'Pygmalion'?",
        "choices": [
          "2023",
          "2021",
          "2022",
          "2020"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer126} empty"
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
          "2020",
          "2023",
          "2021",
          "2022"
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
        "name": "answer98",
        "title": "Ve kterém roce jsi přečetla knihu 'Svědectví o životě v KLDR'?",
        "choices": [
          "2024",
          "2021",
          "2020",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer98} empty"
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
        