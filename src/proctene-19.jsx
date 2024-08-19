
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #19",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer180",
        "title": "Ve kterém roce jsi přečetla knihu 'Divné hlášky z knihkupectví'?",
        "choices": [
          "2021",
          "2023",
          "2020",
          "2022"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer180} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer181",
        "title": "Kdo napsal knihu knihu 'Divné hlášky z knihkupectví'?",
        "choices": [
          "Wilde, Oscar",
          "Tolkien, J.R.R.",
          "Maupassant, Guy de",
          "Campbell, Jen"
        ],
        "correctAnswer": "Campbell, Jen",
        "enableIf": "{answer181} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer182",
        "title": "Ve kterém roce jsi přečetla knihu 'Vražedná pomsta (The Hunger Games, #2)'?",
        "choices": [
          "2023",
          "2020",
          "2021",
          "2022"
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
        "name": "answer183",
        "title": "Kdo napsal knihu knihu 'Vražedná pomsta (The Hunger Games, #2)'?",
        "choices": [
          "Pavel, Ota",
          "Motte, Anders de la",
          "Baldree, Travis",
          "Collins, Suzanne"
        ],
        "correctAnswer": "Collins, Suzanne",
        "enableIf": "{answer183} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer184",
        "title": "Ve kterém roce jsi přečetla knihu 'Meč osudu (Zaklínač, #2)'?",
        "choices": [
          "2020",
          "2023",
          "2021",
          "2022"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer184} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer185",
        "title": "Kdo napsal knihu knihu 'Meč osudu (Zaklínač, #2)'?",
        "choices": [
          "Goldoni, Carlo",
          "Mayne, Andrew",
          "Kovář, Karel Kovy",
          "Sapkowski, Andrzej"
        ],
        "correctAnswer": "Sapkowski, Andrzej",
        "enableIf": "{answer185} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer186",
        "title": "Ve kterém roce jsi přečetla knihu 'iPohádka'?",
        "choices": [
          "2022",
          "2021",
          "2020",
          "2023"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer186} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer187",
        "title": "Kdo napsal knihu knihu 'iPohádka'?",
        "choices": [
          "Lewis, C.S.",
          "Jirotka, Zdeněk",
          "Havel, Václav",
          "Kovář, Karel Kovy"
        ],
        "correctAnswer": "Kovář, Karel Kovy",
        "enableIf": "{answer187} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer188",
        "title": "Ve kterém roce jsi přečetla knihu 'Teorie vraždy'?",
        "choices": [
          "2023",
          "2024",
          "2020",
          "2021"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer188} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer189",
        "title": "Kdo napsal knihu knihu 'Teorie vraždy'?",
        "choices": [
          "Lednická, Karin",
          "Lehečková, Hana",
          "Mayne, Andrew",
          "Christie, Agatha"
        ],
        "correctAnswer": "Mayne, Andrew",
        "enableIf": "{answer189} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene19() {
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
        
        export default Proctene19;
        