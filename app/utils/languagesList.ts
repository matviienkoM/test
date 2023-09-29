type LanguageList = {
  [key: string]: {
    name: string;
    nativeName: string;
  };
};

const languagesList: LanguageList = {
  "en": {
    "name": "English",
    "nativeName": "English"
  },
  "es": {
    "name": "Spanish",
    "nativeName": "español"
  },
  "fr": {
    "name": "French",
    "nativeName": "français"
  }
};

export default languagesList;