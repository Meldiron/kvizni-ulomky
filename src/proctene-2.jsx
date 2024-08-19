
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #2",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer10",
        "title": "Ve kterém roce jsi přečetla knihu 'Už nikdy pěšky po Arménii a Gruzii'?",
        "choices": [
          "2023",
          "2021",
          "2024",
          "2020"
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
        "name": "answer11",
        "title": "Kdo napsal knihu knihu 'Už nikdy pěšky po Arménii a Gruzii'?",
        "choices": [
          "Zibura, Ladislav",
          "Rolland, Romain",
          "Yarros, Rebecca",
          "Molière"
        ],
        "correctAnswer": "Zibura, Ladislav",
        "enableIf": "{answer11} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer12",
        "title": "Ve kterém roce jsi přečetla knihu 'Legendy & latéčka (Legendy & latéčka, #1)'?",
        "choices": [
          "2022",
          "2021",
          "2024",
          "2023"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer12} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer13",
        "title": "Kdo napsal knihu knihu 'Legendy & latéčka (Legendy & latéčka, #1)'?",
        "choices": [
          "Martin, George R.R.",
          "Zhao, Xiran Jay",
          "Baldree, Travis",
          "Rožek, Filip"
        ],
        "correctAnswer": "Baldree, Travis",
        "enableIf": "{answer13} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer14",
        "title": "Ve kterém roce jsi přečetla knihu '…stačilo jen říct Jáchymov'?",
        "choices": [
          "2022",
          "2021",
          "2024",
          "2023"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer14} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer15",
        "title": "Kdo napsal knihu knihu '…stačilo jen říct Jáchymov'?",
        "choices": [
          "Strnadová, Anna",
          "Fitzgerald, F. Scott",
          "Fuks, Ladislav",
          "Tung, Debbie"
        ],
        "correctAnswer": "Strnadová, Anna",
        "enableIf": "{answer15} empty"
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
          "2023",
          "2024",
          "2022"
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
        "name": "answer17",
        "title": "Kdo napsal knihu knihu 'Spare'?",
        "choices": [
          "Zhao, Xiran Jay",
          "Prince Harry",
          "Podolová, Petra",
          "Schwab, Victoria"
        ],
        "correctAnswer": "Prince Harry",
        "enableIf": "{answer17} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer18",
        "title": "Ve kterém roce jsi přečetla knihu 'Šikmý kostel: románová kronika ztraceného města (léta 1894 - 1921)'?",
        "choices": [
          "2022",
          "2024",
          "2020",
          "2021"
        ],
        "correctAnswer": "2024",
        "enableIf": "{answer18} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer19",
        "title": "Kdo napsal knihu knihu 'Šikmý kostel: románová kronika ztraceného města (léta 1894 - 1921)'?",
        "choices": [
          "Doyle, Arthur Conan",
          "Lednická, Karin",
          "Christie, Agatha",
          "Caplin, Julie"
        ],
        "correctAnswer": "Lednická, Karin",
        "enableIf": "{answer19} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene2() {
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
        
        export default Proctene2;
        