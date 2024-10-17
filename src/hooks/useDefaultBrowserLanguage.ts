/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from "react";
import i18n from "../translation/i18n";

const useDefaultBrowserLanguage = (): void => {
  useEffect(() => {
    // @ts-expect-error
    const browserLanguage = navigator.language || navigator.userLanguage;
    const supportedLanguages = i18n.languages;
    const language = browserLanguage.split("-")[0];
    if (supportedLanguages.includes(language)) {
      i18n.changeLanguage(language);
    }
  }, []);
};

export default useDefaultBrowserLanguage;
