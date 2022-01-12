import plural from "rosaenlg-pluralize-fr";
import LefffWords from "french-words-gender-lefff/dist/words.json";
import { sprintf } from "sprintf-js";
import Diacritics from "diacritic";

/**
 * Replace quotes
 *
 * @param {String} text
 * @returns
 */
const replaceQuotes = (text) => {
  // Revert encoded chars so the regex mystery
  // below works properly

  text = text
    .replace(/(\W|^)"([^\s\!\?:;\.,‽»])/g, "$1\u201c$2") // beginning "
    .replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g, "$1\u201d$2") // ending "
    .replace(/([^0-9])"/g, "$1\u201d") // remaining " at end of word
    .replace(/(\W|^)'(\S)/g, "$1\u2018$2") // beginning '
    .replace(/([a-z])'([a-z])/gi, "$1\u2019$2") // conjunction's possession
    .replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/gi, "$1\u2019$3") // ending '
    .replace(/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/gi, "\u2019$2$3") // abbrev. years like '93
    .replace(/(\B|^)\u2018(?=([^\u2019]*\u2019\b)*([^\u2019\u2018]*\W[\u2019\u2018]\b|[^\u2019\u2018]*$))/gi, "$1\u2019") // backwards apostrophe
    .replace(/'''/g, "\u2034") // triple prime
    .replace(/("|'')/g, "\u2033") // double prime
    .replace(/'/g, "\u2032");

  // Allow escaped quotes
  text = text.replace(/\\“/, '"');
  text = text.replace(/\\”/, '"');
  text = text.replace(/\\’/, "'");
  text = text.replace(/\\‘/, "'");

  return text;
};

/**
 * Capitalize
 *
 * @param {String} s
 * @returns {String}
 */
const capitalize = (s) => {
  if (typeof s !== "string") {
    return "";
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
};

/**
 * Get words
 *
 * @param {String} name
 * @returns {Object}
 */
export const getWords = (name) => {
  const words = name.split(" ");
  return {
    first: words.shift(),
    rest: words,
  };
};

/**
 * Get name gender
 *
 * @param {String} name
 * @returns
 */
export const getGender = (name) => {
  try {
    return LefffWords[name.toLowerCase()].toLowerCase();
  } catch (e) {
    return null;
  }
};

/**
 * Get label name
 *
 * @param {String} name
 * @param {Object} labelObject
 * @returns {String}
 */
const getLabelName = (name, labelObject, gender = null) => {
  const words = getWords(name);

  let firstWord = words.first;
  const firstWordSingular = firstWord;
  const restWords = words.rest;

  // Pluralize
  firstWord = labelObject.hasOwnProperty("plural") && labelObject.plural ? plural(firstWord) : firstWord;

  let label = labelObject.label;
  const labelHasGenders = typeof label === "object" && label !== null;

  // Handle gender
  if (labelHasGenders) {
    if (gender === "") {
      gender = getGender(firstWordSingular) ?? "f";
    }
    label = label[gender];
  }

  // Handle elision
  if (
    labelObject.hasOwnProperty("elision")
    && labelObject.elision.hasOwnProperty('search')
    && ["a", "e", "i", "o", "u", "y", "h"].includes(Diacritics.clean(firstWord.charAt(0).toLowerCase()))
  ) {
    const search = labelHasGenders ? labelObject.elision.search[gender] : labelObject.elision.search;
    if (search !== "nouvelle") {
      const regex = new RegExp(search, "i");
      label = capitalize(label.replace(regex, labelObject.elision.replace));
    }
  }

  if (label.indexOf("%1$s") === 0) {
    firstWord = capitalize(firstWord);
  }

  return replaceQuotes(sprintf(label, [firstWord, ...restWords].join(" ")));
};

/**
 * Get label
 *
 * @param {String} name
 * @param {Object} labelObject
 * @param {String} domain
 * @returns
 */
const getLabel = (name, labelObject, gender = null, domain = null) => {
  let value = `'${getLabelName(name, labelObject, gender)}'`;

  if (domain) {
    const translate = labelObject.hasOwnProperty("fn") ? labelObject.fn : "__";
    const context = labelObject.hasOwnProperty("context") ? `'${labelObject.context}', ` : "";
    value = `${translate}( ${value}, ${context}'${domain}' )`;
  }

  return value;
};

/**
 * Get labels
 *
 * @param {Object} labels
 * @param {String} name
 * @param {String} domain
 * @returns {Object}
 */
export default function getLabels(labels, name, gender = null, domain = null) {
  return Object.entries(labels).map(([key, conf]) => ({ key: key, label: getLabel(name, conf, gender, domain) }));
}

/**
 * Get formatted labels
 *
 * @param {Object} labels
 * @returns
 */
export function getFormattedLabels(labels) {
  const maxLength = Math.max(...labels.map((l) => l.key.length));

  let code = `$labels = [\n`;
  labels.forEach((label) => {
    const currentKeyLength = label.key.length;
    const currentRepeat = maxLength - currentKeyLength;
    code += `    '${label.key}' ${" ".repeat(currentRepeat)}=> ${label.label},\n`;
  });
  code += `];`;

  return code;
}
