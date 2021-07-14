import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import English from "./en.json";
import Nepali from "./ne.json";

export const IntlContext = React.createContext();

const Wrapper = (props) => {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState(English);

  const selectLanguage = (e) => {
    setLocale(e);

    if (e === "en") {
      setMessages(English);
    } else {
      setMessages(Nepali);
    }
  };

  return (
    <IntlContext.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </IntlContext.Provider>
  );
};

export default Wrapper;
