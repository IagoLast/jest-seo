describe('.toHaveMetaDescription(element, expectedDescription)', () => {
    it('should throw an error when the html has not a description', () => {
        const $html = document.createElement('html');

        $html.innerHTML = `
            <body>
                <h1> This html has not a description</h1>
            </body>`
            ;

        expect(() => {
            expect($html).toHaveMetaDescription();
        }).toThrow(`Could't find a meta[name="description"] tag in the given element`);
    });

    it('should throw an error when the html has a different description', () => {
        const $html = document.createElement('html');
        $html.innerHTML = `
        <head>
            <meta name="description" content="actual_content"/>
        </head>
        <body>
            <h1> This html has not a description</h1>
        </body>`
            ;


        
        expect(() => {
            expect($html).toHaveMetaDescription('expected_content');
        }).toThrow();


    });

    it('should pass when the html has not a description', () => {
        const $html = document.createElement('html');
        $html.innerHTML = `
        <head>
            <meta name="description" content="expected content"/>
        </head>
        <body>
            <h1> This html has not a description</h1>
        </body>`
            ;

        expect($html).toHaveMetaDescription('expected content');
    });
});