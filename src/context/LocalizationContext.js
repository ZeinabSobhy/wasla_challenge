import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import enLocale from "../locales/en";
import arLocale from "../locales//ar";

const LocalizationContext = React.createContext([() => {}]);

const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState(enLocale);

  const switchLocale = (key) => {
    console.log("zeze");
    if (key === "en") {
      document.body.style.direction = "ltr";
      setLocale(enLocale);
    } else {
      document.body.style.direction = "rtl";
      setLocale(arLocale);
    }
  };

  return (
    <LocalizationContext.Provider value={[locale.locale, switchLocale]}>
      <IntlProvider locale={locale.locale} messages={locale.messages}>
        {children}
      </IntlProvider>
    </LocalizationContext.Provider>
  );
};

export { LocalizationProvider, LocalizationContext };
