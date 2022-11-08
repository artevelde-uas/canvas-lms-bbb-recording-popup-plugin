import { addTranslations, getTranslator } from '@artevelde-uas/canvas-lms-app/services/i18n';

import translations from './locales.json';

// Get the namespace from the package
const namespace = require('../package.json').name;

// Add all the translation files to the namespace
addTranslations(namespace, translations);

// Get the default translator for the namespace
const translator = getTranslator(namespace);


export default translator;
