
        import React from "react";
        import { Survey } from "survey-react-ui";
        import "survey-core/defaultV2.min.css";
        import "./index.css";
        import { GenerateSurvey } from "./generateSurvey";
        
        const json = {
          title: "Pročtené knihy #7",
          description: "Kvízní úlomky - Interaktivní kvízová platforma",
          showQuestionNumbers: false,
          showProgressBar: "aboveHeader",
          pages: JSON.parse(`
            [
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer127",
        "title": "Kdo napsal knihu knihu 'Pygmalion'?",
        "choices": [
          "Christie, Agatha",
          "Maupassant, Guy de",
          "Molière",
          "Shaw, George Bernard"
        ],
        "correctAnswer": "Shaw, George Bernard",
        "enableIf": "{answer127} empty"
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
          "2021",
          "2024",
          "2022",
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
        "name": "answer90",
        "title": "Ve kterém roce jsi přečetla knihu 'Noc na Karlštejně'?",
        "choices": [
          "2020",
          "2023",
          "2021",
          "2022"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer90} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer135",
        "title": "Kdo napsal knihu knihu 'Romeo and Juliet'?",
        "choices": [
          "Rolland, Romain",
          "Fuks, Ladislav",
          "Nesbø, Jo",
          "Shakespeare, William"
        ],
        "correctAnswer": "Shakespeare, William",
        "enableIf": "{answer135} empty"
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
          "Špitálníková, Nina",
          "Meyer, Marissa",
          "Kinney, Jeff",
          "Martin, George R.R."
        ],
        "correctAnswer": "Kinney, Jeff",
        "enableIf": "{answer159} empty"
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
          "Schwab, Victoria",
          "Yarros, Rebecca",
          "Mrštík, Alois",
          "Stehlíková, Petra"
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
        "name": "answer9",
        "title": "Kdo napsal knihu knihu 'Ignis fatuus'?",
        "choices": [
          "Podolová, Petra",
          "Dyk, Viktor",
          "Klabouchová, Petra",
          "Čechová, Miřenka"
        ],
        "correctAnswer": "Klabouchová, Petra",
        "enableIf": "{answer9} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer55",
        "title": "Kdo napsal knihu knihu 'Spalovač mrtvol'?",
        "choices": [
          "Campbell, Jen",
          "Salte, Tereza",
          "Fuks, Ladislav",
          "Owens, Delia"
        ],
        "correctAnswer": "Fuks, Ladislav",
        "enableIf": "{answer55} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer58",
        "title": "Ve kterém roce jsi přečetla knihu 'Odcházení'?",
        "choices": [
          "2020",
          "2021",
          "2022",
          "2023"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer58} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer145",
        "title": "Kdo napsal knihu knihu 'Listopád'?",
        "choices": [
          "Borovský, Karel Havlíček",
          "Green, John",
          "Mornštajnová, Alena",
          "Pavel, Ota"
        ],
        "correctAnswer": "Mornštajnová, Alena",
        "enableIf": "{answer145} empty"
      }
    ]
  }
]
          `)
        };
        
        function Proctene7() {
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
        
        export default Proctene7;
        