
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #11",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer100",
        "title": "Ve kterém roce jsi přečetla knihu 'Bílá nemoc'?",
        "choices": [
          "2021",
          "2023",
          "2024",
          "2020"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer100} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer101",
        "title": "Kdo napsal knihu knihu 'Bílá nemoc'?",
        "choices": [
          "Špitálníková, Nina",
          "Hrabal, Bohumil",
          "Čapek, Karel",
          "Karika, Jozef"
        ],
        "correctAnswer": "Čapek, Karel",
        "enableIf": "{answer101} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer102",
        "title": "Ve kterém roce jsi přečetla knihu 'Kroky vraha'?",
        "choices": [
          "2020",
          "2022",
          "2021",
          "2023"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer102} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer103",
        "title": "Kdo napsal knihu knihu 'Kroky vraha'?",
        "choices": [
          "Mrštík, Alois",
          "Lewis, C.S.",
          "Klevisová, Michaela",
          "Minier, Bernard"
        ],
        "correctAnswer": "Klevisová, Michaela",
        "enableIf": "{answer103} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer104",
        "title": "Ve kterém roce jsi přečetla knihu 'Kde zpívají raci'?",
        "choices": [
          "2022",
          "2021",
          "2024",
          "2020"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer104} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer105",
        "title": "Kdo napsal knihu knihu 'Kde zpívají raci'?",
        "choices": [
          "Green, John",
          "Klíma, Josef",
          "Owens, Delia",
          "Rina, Lin"
        ],
        "correctAnswer": "Owens, Delia",
        "enableIf": "{answer105} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer106",
        "title": "Ve kterém roce jsi přečetla knihu 'Kroniky prachu (Kroniky prachu, #1)'?",
        "choices": [
          "2021",
          "2024",
          "2022",
          "2020"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer106} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer107",
        "title": "Kdo napsal knihu knihu 'Kroniky prachu (Kroniky prachu, #1)'?",
        "choices": [
          "Borovský, Karel Havlíček",
          "Lednická, Karin",
          "Rina, Lin",
          "Klíma, Josef"
        ],
        "correctAnswer": "Rina, Lin",
        "enableIf": "{answer107} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer108",
        "title": "Ve kterém roce jsi přečetla knihu 'Lev, čarodějnice a skříň (Letopisy Narnie, #2)'?",
        "choices": [
          "2023",
          "2020",
          "2021",
          "2022"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer108} empty"
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
          "Mrštík, Alois",
          "Maupassant, Guy de",
          "Lewis, C.S.",
          "Paolini, Christopher"
        ],
        "correctAnswer": "Lewis, C.S.",
        "enableIf": "{answer109} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene11() {
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
        
        export default Proctene11;
        