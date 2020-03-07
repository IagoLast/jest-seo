# Jest-Seo

Custom Jest Matchers to perform SEO tests.


## Matchers

### `.toHaveMetaTitle(expectedTitle?: String)`

Check if the html elenent has the expected title. When no title is given it only checks the existence of a title meta tag.

**Parameters** 

- **expectedTitle:** Optional String representing expected content of the title meta tag.


**Example**

```js
const $html = document.createElement('html');
$html.innerHTML = `
<head>
    <meta name="title" content="dummy_title">
</head>
<body>
</body>`
;

expect($html).toHaveMetaTitle(''); // PASS
expect($html).toHaveMetaTitle('dummy_title'); // PASS
expect($html).toHaveMetaTitle('Different title'); // FAIL
```

---

### `.toHaveMetaDescription(expectedDescription?: String)`

Check if the html elenent has the expected meta description. When no expected value is given it only checks the existence of the meta tag.

**Parameters** 

- **expectedDescription:** Optional String representing expected content of the description meta tag.


**Example**

```js
const $html = document.createElement('html');
$html.innerHTML = `
<head>
    <meta name="description" content="expected content"/>
</head>

<body>
    <h1> This html has not a description</h1>
</body>`
;

expect($html).toHaveMetaDescription(''); // PASS
expect($html).toHaveMetaDescription('expected content'); // PASS
expect($html).toHaveMetaDescription('unexpected content'); // FAIL
```


---

### `.toHaveHeading(expectedHeading: String, opts)`

Checks the given element has the expected heading level. It also checks ARIA roles.

**Parameters** 

- **expectedHeading:** The expected heading level: `'h1'|'h2'|'h3'|'h4'|'h5','h6'`
- **opts.aria:** Boolean value, when true, [aria roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role) are considered for the expected heading.


**Examples**

Basic tests:

```js
const const = document.createElement('h2');

expect(element).toHaveHeading('h1'); // FAIL
expect(element).toHaveHeading('h2'); // PASS
```

Enabling ARIA:

```js
const element = document.createElement('div');
element.setAttribute('role', 'heading');
element.setAttribute('aria-level', '2');

expect(element).toHaveHeading('h2'); // FAIL
expect(element).toHaveHeading('h2', { aria: false }); // FAIL
expect(element).toHaveHeading('h2', { aria: true }); // PASS
```

---