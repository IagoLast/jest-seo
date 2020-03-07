const testResult = require('./utils/testResult.js');

/**
 * Checks the given element has the expected heading level.
 * @param {HtmlElement} element - The element to be checked. 
 * @param  {('h1'|'h2'|'h3'|'h4'|'h5', 'h6')}  expectedHeading - The expected heading level
 * @param {Boolena} opts.aria - When true, aria roles are considered for the expected heading.
 */
function toHaveHeading(element, expectedHeading, opts) {
    const tag = element.tagName;

    // Aria disabled, or passing test act normally
    if (!opts || opts && !opts.aria) {
        return testResult(`toHaveHeading`, tag == expectedHeading.toUpperCase(),
            {
                actual: this.utils.printReceived(tag),
                expected: this.utils.printExpected(expectedHeading.toUpperCase()),
            }
        );
    }

    const role = element.getAttribute('role');

    if (!role) {
        return testResult('toHaveHeading', false, 'Given element does not have a role="heading" attribute. See: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role');
    }

    if (role.toLowerCase() !== 'heading') {
        return testResult('toHaveHeading', false, `Given element does not have the right role attribute. Expected role=${this.utils.printExpected('heading')} but received role=${this.utils.printReceived(role)}`);
    }

    const actual = `H${element.getAttribute('aria-level')}`;

    return testResult(`toHaveHeading`, actual == expectedHeading.toUpperCase() && role.toLowerCase() == 'heading',
        {
            actual: this.utils.printReceived(actual),
            expected: this.utils.printExpected(expectedHeading.toUpperCase()),
        }
    );


}


module.exports = toHaveHeading;