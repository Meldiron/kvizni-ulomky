
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #16",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer150",
        "title": "Ve kterém roce jsi přečetla knihu 'Dcera ztracených bohů'?",
        "choices": [
          "2020",
          "2021",
          "2022",
          "2024"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer150} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer151",
        "title": "Kdo napsal knihu knihu 'Dcera ztracených bohů'?",
        "choices": [
          "Komrsková, Alžběta",
          "Martin, George R.R.",
          "Pavel, Ota",
          "Klíma, Josef"
        ],
        "correctAnswer": "Komrsková, Alžběta",
        "enableIf": "{answer151} empty"
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
          "2021",
          "2024",
          "2022",
          "2023"
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
        "name": "answer153",
        "title": "Kdo napsal knihu knihu 'Velký Gatsby'?",
        "choices": [
          "Podolová, Petra",
          "Pavel, Ota",
          "Fitzgerald, F. Scott",
          "Maupassant, Guy de"
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
        "name": "answer154",
        "title": "Ve kterém roce jsi přečetla knihu 'Ze života knihomolky'?",
        "choices": [
          "2024",
          "2022",
          "2023",
          "2021"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer154} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer155",
        "title": "Kdo napsal knihu knihu 'Ze života knihomolky'?",
        "choices": [
          "Tolkien, J.R.R.",
          "Tung, Debbie",
          "Campbell, Jen",
          "Podolová, Petra"
        ],
        "correctAnswer": "Tung, Debbie",
        "enableIf": "{answer155} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer156",
        "title": "Ve kterém roce jsi přečetla knihu 'Trhlina'?",
        "choices": [
          "2020",
          "2021",
          "2024",
          "2022"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer156} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer157",
        "title": "Kdo napsal knihu knihu 'Trhlina'?",
        "choices": [
          "Motte, Anders de la",
          "Zibura, Ladislav",
          "Komrsková, Alžběta",
          "Karika, Jozef"
        ],
        "correctAnswer": "Karika, Jozef",
        "enableIf": "{answer157} empty"
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
          "2020",
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
        "name": "answer159",
        "title": "Kdo napsal knihu knihu 'Deník malého poseroutky: Zápisky Grega Heffleyho (Deník malého poseroutky, #1)'?",
        "choices": [
          "Kinney, Jeff",
          "Bílková, Alžběta",
          "Sapkowski, Andrzej",
          "Karolová, Kateřina"
        ],
        "correctAnswer": "Kinney, Jeff",
        "enableIf": "{answer159} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene16() {
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
        
        export default Proctene16;
        