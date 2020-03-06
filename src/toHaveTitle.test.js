describe('.toHaveTitle(element, expectedTitle', () => {
    it('should return an error when no title is found', () => {
        const $html = document.createElement('html');
        $html.innerHTML = `<body></body>`;

        expect(() => {
            expect($html).toHaveMetaTitle('Dummy title');
        }).toThrow();
    });

    it('should throw an error when the title does not match', () => {
        const $html = document.createElement('html');
        $html.innerHTML = `<head><meta name="title" content="dummy_invalid_title"></head><body></body>`;

        expect(() => {
            expect($html).toHaveMetaTitle('dummy_title');
        }).toThrow();
    });


    it('should pass when the title is valid', () => {
        const $html = document.createElement('html');
        $html.innerHTML = `<head><meta name="title" content="dummy_title"></head><body></body>`;

        expect($html).toHaveMetaTitle('dummy_title');
    });
});