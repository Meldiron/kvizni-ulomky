
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
        "name": "answer191",
        "title": "Kdo napsal knihu knihu 'Poutník, čarodějnice a červ (Příběhy z Alagaësie #1)'?",
        "choices": [
          "Holland, Sam",
          "Paolini, Christopher",
          "Motte, Anders de la",
          "Schwab, Victoria"
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
        "name": "answer79",
        "title": "Kdo napsal knihu knihu 'Smrt krásných srnců'?",
        "choices": [
          "Holland, Sam",
          "Pavel, Ota",
          "Čechová, Miřenka",
          "Rina, Lin"
        ],
        "correctAnswer": "Pavel, Ota",
        "enableIf": "{answer79} empty"
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
          "2020",
          "2023",
          "2022",
          "2021"
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
        "name": "answer49",
        "title": "Kdo napsal knihu knihu 'Odbočka v lesích'?",
        "choices": [
          "Schwab, Victoria",
          "Kinney, Jeff",
          "Karolová, Kateřina",
          "Owens, Delia"
        ],
        "correctAnswer": "Karolová, Kateřina",
        "enableIf": "{answer49} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer143",
        "title": "Kdo napsal knihu knihu 'R.U.R. By Karel Čapek'?",
        "choices": [
          "Doyle, Arthur Conan",
          "Čapek, Karel",
          "Dyk, Viktor",
          "Špitálníková, Nina"
        ],
        "correctAnswer": "Čapek, Karel",
        "enableIf": "{answer143} empty"
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
          "Townsend, Jessica",
          "Owens, Delia",
          "Lamková, Hana",
          "Rožek, Filip"
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
        "name": "answer82",
        "title": "Ve kterém roce jsi přečetla knihu 'Zlodějka příběhů'?",
        "choices": [
          "2024",
          "2023",
          "2020",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer82} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer137",
        "title": "Kdo napsal knihu knihu 'Bouře mečů (Píseň ledu a ohně, #3)'?",
        "choices": [
          "Martin, George R.R.",
          "Karika, Jozef",
          "Hrabal, Bohumil",
          "Havel, Václav"
        ],
        "correctAnswer": "Martin, George R.R.",
        "enableIf": "{answer137} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer22",
        "title": "Ve kterém roce jsi přečetla knihu 'Hory zpívají'?",
        "choices": [
          "2023",
          "2024",
          "2020",
          "2022"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer22} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer100",
        "title": "Ve kterém roce jsi přečetla knihu 'Bílá nemoc'?",
        "choices": [
          "2020",
          "2021",
          "2022",
          "2024"
        ],
        "correctAnswer": "2021",
        "enableIf": "{answer100} empty"
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
        