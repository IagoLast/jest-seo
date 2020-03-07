describe('.toHaveHeading(element, heading)', () => {
    it('should throw an error when the element has not the expected heading', () => {
        const $h2 = document.createElement('h2');
        $h2.innerText = 'dummy_text';

        expect(() => {
            expect($h2).toHaveHeading('h1');
        }).toThrow();
    });

    it('should not throw an error when the element has the expected heading', () => {
        const $h2 = document.createElement('h2');
        $h2.innerText = 'dummy_text';

        expect($h2).toHaveHeading('h2');
    });

    // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role
    describe('when the given element has an aria heading', () => {
        let element;
        beforeEach(() => {
            element = document.createElement('div');
            element.innerText = 'dummy_text';
            element.setAttribute('role', 'heading');
            element.setAttribute('aria-level', '2');
        });

        it('should throw an error when the aria option is set to false', () => {
            expect(() => {
                expect(element).toHaveHeading('h2', { aria: false });
            }).toThrow();
        });


        it('should pass when the aria option is se to true', () => {
            expect(element).toHaveHeading('h2', { aria: true });
        });

        it('should thrown an error when the aria option is set to true and the element has no heading role', () => {
            element.removeAttribute('role');
            expect(() => {
                expect(element).toHaveHeading('h2', { aria: true });
            }).toThrow(`Given element does not have a role="heading" attribute. See: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role`);

        });

        it('should thrown an error when the aria option is set to true and the element has no heading role', () => {
            element.setAttribute('role', 'not-valid');

            expect(() => {
                expect(element).toHaveHeading('h2', { aria: true });
            }).toThrow(``);
        });
    });
});