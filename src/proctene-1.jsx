
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #1",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer0",
        "title": "Ve kterém roce jsi přečetla knihu 'Národní opruzení'?",
        "choices": [
          "2023",
          "2020",
          "2021",
          "2024"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer0} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer1",
        "title": "Kdo napsal knihu knihu 'Národní opruzení'?",
        "choices": [
          "Meixnerová, Karolína Zoe",
          "Dalcher, Christina",
          "Čechová, Miřenka",
          "Klevisová, Michaela"
        ],
        "correctAnswer": "Meixnerová, Karolína Zoe",
        "enableIf": "{answer1} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer2",
        "title": "Ve kterém roce jsi přečetla knihu 'Šikmý kostel 2: románová kronika ztraceného města (léta 1921–1945)'?",
        "choices": [
          "2020",
          "2022",
          "2024",
          "2023"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer2} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer3",
        "title": "Kdo napsal knihu knihu 'Šikmý kostel 2: románová kronika ztraceného města (léta 1921–1945)'?",
        "choices": [
          "Hrabal, Bohumil",
          "Stehlíková, Petra",
          "Owens, Delia",
          "Lednická, Karin"
        ],
        "correctAnswer": "Lednická, Karin",
        "enableIf": "{answer3} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer4",
        "title": "Ve kterém roce jsi přečetla knihu 'Čtvrté křídlo (Empyreum, #1)'?",
        "choices": [
          "2021",
          "2022",
          "2020",
          "2024"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer4} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer5",
        "title": "Kdo napsal knihu knihu 'Čtvrté křídlo (Empyreum, #1)'?",
        "choices": [
          "Green, John",
          "Owens, Delia",
          "Yarros, Rebecca",
          "Frank, Sylvia"
        ],
        "correctAnswer": "Yarros, Rebecca",
        "enableIf": "{answer5} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer6",
        "title": "Ve kterém roce jsi přečetla knihu 'Bookshops & Bonedust (Legends & Lattes, #0)'?",
        "choices": [
          "2024",
          "2021",
          "2020",
          "2023"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer6} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer7",
        "title": "Kdo napsal knihu knihu 'Bookshops & Bonedust (Legends & Lattes, #0)'?",
        "choices": [
          "Rowling, J.K.",
          "Wilde, Oscar",
          "Campbell, Jen",
          "Baldree, Travis"
        ],
        "correctAnswer": "Baldree, Travis",
        "enableIf": "{answer7} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer8",
        "title": "Ve kterém roce jsi přečetla knihu 'Ignis fatuus'?",
        "choices": [
          "2020",
          "2023",
          "2024",
          "2022"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer8} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer9",
        "title": "Kdo napsal knihu knihu 'Ignis fatuus'?",
        "choices": [
          "Saint-Exupéry, Antoine de",
          "Rina, Lin",
          "Stehlíková, Petra",
          "Klabouchová, Petra"
        ],
        "correctAnswer": "Klabouchová, Petra",
        "enableIf": "{answer9} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene1() {
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
        
        export default Proctene1;
        