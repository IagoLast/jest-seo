const getMetaTag = require('./getMetaTag.js');
const testResult = require('./testResult.js');

/**
 * Automagically generates a list of matchers functions for the given meta tags
 * @param {string[]} metaNames - An array of the names of the metatags to generate functions.
 */
function generateMetaMatchers(metaNames) {
    const matchers = {};

    metaNames.forEach(metaTagName => {
        const matcherName = _getMatcherName(metaTagName);
        matchers[matcherName] = generateMatcher(metaTagName, matcherName);
    });

    return matchers;
}


function generateMatcher(metaTagName, matcherName) {
    return function matcher(element, expectedDescription) {
        const { meta, value } = getMetaTag(element, metaTagName);

        if (!meta) {
            return testResult(matcherName, false, `Could\'t find a meta[name="${metaTagName}"] tag in the given element`);
        }

        if (!expectedDescription) {
            return testResult(matcherName, true, '');
        }

        return testResult(matcherName, value == expectedDescription,
            {
                actual: this.utils.printReceived(value),
                expected: this.utils.printExpected(expectedDescription),
            }
        );
    }
}

function _getMatcherName(metaTag) {
    const capitalizedMetaTag = metaTag.charAt(0).toUpperCase() + metaTag.slice(1)
    return `toHaveMeta${capitalizedMetaTag}`;
}


module.exports = generateMetaMatchers;