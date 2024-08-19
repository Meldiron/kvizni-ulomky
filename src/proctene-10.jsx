
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #10",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer33",
        "title": "Kdo napsal knihu knihu 'Ready Player Two (Ready Player One, #2)'?",
        "choices": [
          "Tung, Debbie",
          "Wilde, Oscar",
          "Špitálníková, Nina",
          "Cline, Ernest"
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
        "name": "answer24",
        "title": "Ve kterém roce jsi přečetla knihu 'Smrt číhá na jarmarku'?",
        "choices": [
          "2024",
          "2020",
          "2023",
          "2021"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer24} empty"
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
          "Dalcher, Christina",
          "Schwab, Victoria",
          "Ferrante, Elena",
          "Prince Harry"
        ],
        "correctAnswer": "Dalcher, Christina",
        "enableIf": "{answer199} empty"
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
          "Lewis, C.S.",
          "Lednická, Karin",
          "Paolini, Christopher",
          "Frank, Sylvia"
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
        "name": "answer99",
        "title": "Kdo napsal knihu knihu 'Svědectví o životě v KLDR'?",
        "choices": [
          "Špitálníková, Nina",
          "Martin, George R.R.",
          "Stehlíková, Petra",
          "Rina, Lin"
        ],
        "correctAnswer": "Špitálníková, Nina",
        "enableIf": "{answer99} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer64",
        "title": "Ve kterém roce jsi přečetla knihu '451 stupňů Fahrenheita'?",
        "choices": [
          "2023",
          "2020",
          "2022",
          "2024"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer64} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer179",
        "title": "Kdo napsal knihu knihu 'Síla vzdoru (The Hunger Games, #3)'?",
        "choices": [
          "Meixnerová, Karolína Zoe",
          "Christie, Agatha",
          "Collins, Suzanne",
          "Martin, George R.R."
        ],
        "correctAnswer": "Collins, Suzanne",
        "enableIf": "{answer179} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer141",
        "title": "Kdo napsal knihu knihu 'Utajené Orákulum (Apollónův pád, #1)'?",
        "choices": [
          "Katalpa, Jakuba",
          "Klabouchová, Petra",
          "Schwab, Victoria",
          "Riordan, Rick"
        ],
        "correctAnswer": "Riordan, Rick",
        "enableIf": "{answer141} empty"
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
          "2022",
          "2020",
          "2021",
          "2023"
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
        "name": "answer11",
        "title": "Kdo napsal knihu knihu 'Už nikdy pěšky po Arménii a Gruzii'?",
        "choices": [
          "Salte, Tereza",
          "Komrsková, Alžběta",
          "Zibura, Ladislav",
          "Jonasson, Jonas"
        ],
        "correctAnswer": "Zibura, Ladislav",
        "enableIf": "{answer11} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene10() {
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
        
        export default Proctene10;
        