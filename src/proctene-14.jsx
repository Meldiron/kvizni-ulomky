
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
        "name": "answer178",
        "title": "Ve kterém roce jsi přečetla knihu 'Síla vzdoru (The Hunger Games, #3)'?",
        "choices": [
          "2023",
          "2020",
          "2024",
          "2021"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer178} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer172",
        "title": "Ve kterém roce jsi přečetla knihu 'The Lying Life of Adults'?",
        "choices": [
          "2022",
          "2021",
          "2020",
          "2023"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer172} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer158",
        "title": "Ve kterém roce jsi přečetla knihu 'Deník malého poseroutky: Zápisky Grega Heffleyho (Deník malého poseroutky, #1)'?",
        "choices": [
          "2024",
          "2021",
          "2023",
          "2022"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer158} empty"
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
          "Holland, Sam",
          "Havel, Václav",
          "Němcová, Božena",
          "Bradbury, Ray"
        ],
        "correctAnswer": "Havel, Václav",
        "enableIf": "{answer59} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer10",
        "title": "Ve kterém roce jsi přečetla knihu 'Už nikdy pěšky po Arménii a Gruzii'?",
        "choices": [
          "2023",
          "2024",
          "2021",
          "2022"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer10} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer114",
        "title": "Ve kterém roce jsi přečetla knihu 'Kosti Mraza'?",
        "choices": [
          "2022",
          "2024",
          "2023",
          "2021"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer114} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer66",
        "title": "Ve kterém roce jsi přečetla knihu 'Životice: obraz (po)zapomenuté tragédie'?",
        "choices": [
          "2021",
          "2022",
          "2024",
          "2020"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer66} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer169",
        "title": "Kdo napsal knihu knihu 'Protivníci (Renegáti, #2)'?",
        "choices": [
          "Mrštík, Alois",
          "Riordan, Rick",
          "Meixnerová, Karolína Zoe",
          "Meyer, Marissa"
        ],
        "correctAnswer": "Meyer, Marissa",
        "enableIf": "{answer169} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer16",
        "title": "Ve kterém roce jsi přečetla knihu 'Spare'?",
        "choices": [
          "2021",
          "2024",
          "2022",
          "2023"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer16} empty"
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
          "2021",
          "2023",
          "2020"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer146} empty"
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
        