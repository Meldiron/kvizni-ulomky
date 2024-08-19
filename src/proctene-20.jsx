
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
        "name": "answer81",
        "title": "Kdo napsal knihu knihu 'Doktor Proktor a velká loupež zlata (Doktor Proktor #4)'?",
        "choices": [
          "Mrštík, Alois",
          "Orwell, George",
          "Rolland, Romain",
          "Nesbø, Jo"
        ],
        "correctAnswer": "Nesbø, Jo",
        "enableIf": "{answer81} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer56",
        "title": "Ve kterém roce jsi přečetla knihu 'Maryša'?",
        "choices": [
          "2022",
          "2024",
          "2023",
          "2021"
        ],
        "correctAnswer": "2022",
        "enableIf": "{answer56} empty"
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
          "Mayne, Andrew",
          "Klevisová, Michaela",
          "Jirotka, Zdeněk",
          "Kinney, Jeff"
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
        "name": "answer183",
        "title": "Kdo napsal knihu knihu 'Vražedná pomsta (The Hunger Games, #2)'?",
        "choices": [
          "Collins, Suzanne",
          "Nesbø, Jo",
          "Klabouchová, Petra",
          "Karolová, Kateřina"
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
        "name": "answer75",
        "title": "Kdo napsal knihu knihu 'Poupátka'?",
        "choices": [
          "Lehečková, Hana",
          "Stehlíková, Petra",
          "Šulc, Jiří",
          "Collins, Suzanne"
        ],
        "correctAnswer": "Lehečková, Hana",
        "enableIf": "{answer75} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer123",
        "title": "Kdo napsal knihu knihu 'Vražda v Orient-expresu'?",
        "choices": [
          "Čapek, Karel",
          "Šulc, Jiří",
          "Christie, Agatha",
          "Cline, Ernest"
        ],
        "correctAnswer": "Christie, Agatha",
        "enableIf": "{answer123} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer173",
        "title": "Kdo napsal knihu knihu 'The Lying Life of Adults'?",
        "choices": [
          "Hrabal, Bohumil",
          "Salte, Tereza",
          "Ferrante, Elena",
          "Vrchlický, Jaroslav"
        ],
        "correctAnswer": "Ferrante, Elena",
        "enableIf": "{answer173} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer91",
        "title": "Kdo napsal knihu knihu 'Noc na Karlštejně'?",
        "choices": [
          "Rolland, Romain",
          "Rožek, Filip",
          "Vrchlický, Jaroslav",
          "Katalpa, Jakuba"
        ],
        "correctAnswer": "Vrchlický, Jaroslav",
        "enableIf": "{answer91} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer61",
        "title": "Kdo napsal knihu knihu 'Prokletý kraj'?",
        "choices": [
          "Green, John",
          "Caplin, Julie",
          "Klevisová, Michaela",
          "Schwab, Victoria"
        ],
        "correctAnswer": "Klevisová, Michaela",
        "enableIf": "{answer61} empty"
      }
    ]
  },
  {
    "elements": [
      {
        "type": "radiogroup",
        "name": "answer171",
        "title": "Kdo napsal knihu knihu 'Renegáti (Renegáti, #1)'?",
        "choices": [
          "Doyle, Arthur Conan",
          "Bradbury, Ray",
          "Meyer, Marissa",
          "Scott, Michael"
        ],
        "correctAnswer": "Meyer, Marissa",
        "enableIf": "{answer171} empty"
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
        