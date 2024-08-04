import * as SurveyTheme from "survey-core/themes";
import { surveyLocalization } from "survey-core";
import { Model } from "survey-core";
import { themeJson } from "./theme";
import { Converter } from "showdown";

export const GenerateSurvey = (json, isHomepage, showAnswer = false) => {
  const engLocale = surveyLocalization.locales["en"];
  if (isHomepage) {
    engLocale.completeText = "Spustit kvíz";
    engLocale.requiredError = "Prosím zvol kvíz.";
    engLocale.completingSurvey = "Malý moment ...";
  } else {
    engLocale.pagePrevText = "Zpět";
    engLocale.pageNextText = "Pokračovat";
    engLocale.completeText = "Dokončit";
    engLocale.progressText = "Strana {0} z {1}";
  }

  const survey = new Model(json);
  survey.applyTheme({
    ...themeJson,
    cssVariables: {
      ...themeJson.cssVariables
    }
  });
  const converter = new Converter();
  survey.onTextMarkdown.add(function (survey, options) {
    let str = converter.makeHtml(options.text);
    str = str.substring(3);
    str = str.substring(0, str.length - 4);
    options.html = str;
  });

  if (showAnswer) {
    const incorrectTemplate =
      "<p style='margin: 0; margin-top: 4px; font-size: 14px;' class='incorrectAnswer'>Chyba! Správna odpověd: ";
    const correctStr =
      "<p style='margin: 0; margin-top: 4px; font-size: 14px;' class='correctAnswer'>Správně!</p>";
    let incorrectStr = incorrectTemplate + "</p>";

    function changeTitle(q) {
      if (!q) return;
      const isCorrect = q.isAnswerCorrect();
      if (!q.prevTitle) {
        q.prevTitle = q.title;
      }
      if (isCorrect === undefined) {
        q.title = q.prevTitle;
      }

      incorrectStr = incorrectTemplate + q.correctAnswer + "</p>";
      q.title = q.prevTitle + " " + (isCorrect ? correctStr : incorrectStr);
    }

    survey.onCurrentPageChanged.add(() => {});

    survey.onValueChanged.add((_, options) => {
      changeTitle(options.question);
    });

    survey.onTextMarkdown.add((_, options) => {
      const text = options.text;
      options.html = text;
    });
  }

  return survey;
};
