import i18n from "i18next";

export const DEFAULT_PARAMETERS = {
  actions: { argTypesRegex: "^on.*" },
  chromatic: { viewports: [320, 480, 1200, 1790] },
};

type ResourceKey = {
  [key: string]: any;
};

export const getTranslation = (section: string, key: string) => {
  if (i18n && i18n.options && i18n.options.resources) {
    const resource = i18n.options.resources[i18n.language] || {};
    const currentSection = resource[section] as ResourceKey;
    return currentSection[key];
  }
  return key;
};
