
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #4",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer30",
        "title": "Ve kterém roce jsi přečetla knihu 'Josef Mareš: Moje případy z 1. oddělení'?",
        "choices": [
          "2024",
          "2023",
          "2021",
          "2022"
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
        "name": "answer31",
        "title": "Kdo napsal knihu knihu 'Josef Mareš: Moje případy z 1. oddělení'?",
        "choices": [
          "Frank, Sylvia",
          "Ferrante, Elena",
          "Moravec, Martin",
          "Meyer, Marissa"
        ],
        "correctAnswer": "Moravec, Martin",
        "enableIf": "{answer31} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer32",
        "title": "Ve kterém roce jsi přečetla knihu 'Ready Player Two (Ready Player One, #2)'?",
        "choices": [
          "2020",
          "2023",
          "2021",
          "2024"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer32} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer33",
        "title": "Kdo napsal knihu knihu 'Ready Player Two (Ready Player One, #2)'?",
        "choices": [
          "Vrchlický, Jaroslav",
          "Podolová, Petra",
          "Cline, Ernest",
          "Klevisová, Michaela"
        ],
        "correctAnswer": "Cline, Ernest",
        "enableIf": "{answer33} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer34",
        "title": "Ve kterém roce jsi přečetla knihu 'Kopírák'?",
        "choices": [
          "2023",
          "2021",
          "2022",
          "2020"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer34} empty"
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
          "Holland, Sam",
          "Lewis, C.S.",
          "Riordan, Rick",
          "Baldree, Travis"
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
        "name": "answer36",
        "title": "Ve kterém roce jsi přečetla knihu 'Šlehačková oblaka'?",
        "choices": [
          "2021",
          "2020",
          "2023",
          "2024"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer36} empty"
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
          "Rožek, Filip",
          "Kovář, Karel Kovy",
          "Bradbury, Ray"
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
        "name": "answer38",
        "title": "Ve kterém roce jsi přečetla knihu 'Nikdyuš. Zkoušky, jež podstoupila Morrigan Crowová (Nikdyuš #1)'?",
        "choices": [
          "2024",
          "2022",
          "2021",
          "2023"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer38} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer39",
        "title": "Kdo napsal knihu knihu 'Nikdyuš. Zkoušky, jež podstoupila Morrigan Crowová (Nikdyuš #1)'?",
        "choices": [
          "Townsend, Jessica",
          "Campbell, Jen",
          "Kinney, Jeff",
          "Moravec, Martin"
        ],
        "correctAnswer": "Townsend, Jessica",
        "enableIf": "{answer39} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene4() {
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
        
        export default Proctene4;
        