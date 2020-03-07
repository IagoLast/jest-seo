const META_TAGS = [
    'abstract',
    'category',
    'Classification',
    'copyright',
    'coverage',
    'description',
    'designer',
    'directory',
    'distribution',
    'email',
    'keywords',
    'language',
    'owner',
    'rating',
    'reply',
    'revised',
    'robots',
    'subject',
    'summary',
    'title',
    'topic',
    'url',
];

const matchers = require('./utils/generateMetaMatchers.js')(META_TAGS);
matchers.toHaveHeading = require('./toHaveHeading');

module.exports = matchers;