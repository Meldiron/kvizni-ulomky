
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #3",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer20",
        "title": "Ve kterém roce jsi přečetla knihu 'Šarlatán'?",
        "choices": [
          "2020",
          "2023",
          "2022",
          "2024"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer20} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer21",
        "title": "Kdo napsal knihu knihu 'Šarlatán'?",
        "choices": [
          "Dalcher, Christina",
          "Klíma, Josef",
          "Zibura, Ladislav",
          "Lednická, Karin"
        ],
        "correctAnswer": "Klíma, Josef",
        "enableIf": "{answer21} empty"
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
          "2021",
          "2024",
          "2020"
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
        "name": "answer23",
        "title": "Kdo napsal knihu knihu 'Hory zpívají'?",
        "choices": [
          "Hrabal, Bohumil",
          "Mayne, Andrew",
          "Mrštík, Alois",
          "Nguyễn Phan Quế Mai"
        ],
        "correctAnswer": "Nguyễn Phan Quế Mai",
        "enableIf": "{answer23} empty"
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
          "2023",
          "2021",
          "2024",
          "2020"
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
        "name": "answer25",
        "title": "Kdo napsal knihu knihu 'Smrt číhá na jarmarku'?",
        "choices": [
          "Špitálníková, Nina",
          "Green, John",
          "Motte, Anders de la",
          "Frank, Sylvia"
        ],
        "correctAnswer": "Motte, Anders de la",
        "enableIf": "{answer25} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer26",
        "title": "Ve kterém roce jsi přečetla knihu 'Železná vdova (Železná vdova, #1)'?",
        "choices": [
          "2021",
          "2020",
          "2024",
          "2023"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer26} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer27",
        "title": "Kdo napsal knihu knihu 'Železná vdova (Železná vdova, #1)'?",
        "choices": [
          "Zhao, Xiran Jay",
          "Havel, Václav",
          "Bradbury, Ray",
          "Caplin, Julie"
        ],
        "correctAnswer": "Zhao, Xiran Jay",
        "enableIf": "{answer27} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer28",
        "title": "Ve kterém roce jsi přečetla knihu 'Gala & Dalí: Nerozluční'?",
        "choices": [
          "2023",
          "2024",
          "2020",
          "2022"
        ],
        "correctAnswer": "2023",
        "enableIf": "{answer28} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer29",
        "title": "Kdo napsal knihu knihu 'Gala & Dalí: Nerozluční'?",
        "choices": [
          "Molière",
          "Frank, Sylvia",
          "Sapkowski, Andrzej",
          "Baldree, Travis"
        ],
        "correctAnswer": "Frank, Sylvia",
        "enableIf": "{answer29} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene3() {
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
        
        export default Proctene3;
        