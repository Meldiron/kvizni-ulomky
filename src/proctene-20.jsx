
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #20",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer190",
        "title": "Ve kterém roce jsi přečetla knihu 'Poutník, čarodějnice a červ (Příběhy z Alagaësie #1)'?",
        "choices": [
          "2022",
          "2024",
          "2023",
          "2020"
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
        "name": "answer191",
        "title": "Kdo napsal knihu knihu 'Poutník, čarodějnice a červ (Příběhy z Alagaësie #1)'?",
        "choices": [
          "Shakespeare, William",
          "Klabouchová, Petra",
          "Jirotka, Zdeněk",
          "Paolini, Christopher"
        ],
        "correctAnswer": "Paolini, Christopher",
        "enableIf": "{answer191} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer192",
        "title": "Ve kterém roce jsi přečetla knihu 'The Hunger Games (The Hunger Games, #1)'?",
        "choices": [
          "2023",
          "2020",
          "2021",
          "2022"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer192} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer193",
        "title": "Kdo napsal knihu knihu 'The Hunger Games (The Hunger Games, #1)'?",
        "choices": [
          "Němcová, Božena",
          "Bradbury, Ray",
          "Collins, Suzanne",
          "Čapek, Karel"
        ],
        "correctAnswer": "Collins, Suzanne",
        "enableIf": "{answer193} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer194",
        "title": "Ve kterém roce jsi přečetla knihu 'Střet králů (Píseň ledu a ohně, #2)'?",
        "choices": [
          "2022",
          "2020",
          "2024",
          "2023"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer194} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer195",
        "title": "Kdo napsal knihu knihu 'Střet králů (Píseň ledu a ohně, #2)'?",
        "choices": [
          "Martin, George R.R.",
          "Yarros, Rebecca",
          "Kovář, Karel Kovy",
          "Maupassant, Guy de"
        ],
        "correctAnswer": "Martin, George R.R.",
        "enableIf": "{answer195} empty"
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
          "2020",
          "2022",
          "2021",
          "2023"
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
        "name": "answer197",
        "title": "Kdo napsal knihu knihu 'Rytíř Sedmi království'?",
        "choices": [
          "Baldree, Travis",
          "Mrštík, Alois",
          "Schwab, Victoria",
          "Martin, George R.R."
        ],
        "correctAnswer": "Martin, George R.R.",
        "enableIf": "{answer197} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer198",
        "title": "Ve kterém roce jsi přečetla knihu 'Vox'?",
        "choices": [
          "2023",
          "2021",
          "2022",
          "2020"
        ],
        "correctAnswer": "2020",
        "enableIf": "{answer198} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer199",
        "title": "Kdo napsal knihu knihu 'Vox'?",
        "choices": [
          "Borovský, Karel Havlíček",
          "Tung, Debbie",
          "Havel, Václav",
          "Dalcher, Christina"
        ],
        "correctAnswer": "Dalcher, Christina",
        "enableIf": "{answer199} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene20() {
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
        
        export default Proctene20;
        