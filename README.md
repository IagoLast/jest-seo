# Jest-Seo

Custom Jest Matchers to perform SEO tests.


## Matchers

### `.toHaveMetaTitle(expectedTitle?: String)`

**Parameters** 

- **expectedTitle:** Optional String representing expected content of the title meta tag.


**Example**

```js
toHaveMetaTitle()
```

Check if the html elenent has the expected title. When no title is given it only checks the existence of a title meta tag.

---

### `.toHaveMetaDescription(expectedDescription?: String)`

**Parameters** 

- **expectedTitle:** Optional String representing expected content of the description meta tag.


**Example**

```js
toHaveMetaDescription()
```

Check if the html elenent has the expected title. When no title is given it only checks the existence of a title meta tag.


---

### `.toHaveHeading(expectedHeading: String, opts)`

**Parameters** 

- **expectedHeading:** The expected heading level: `'h1'|'h2'|'h3'|'h4'|'h5','h6'`
- **opts.aria:** Boolean value, when true, [aria roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role) are considered for the expected heading.


**Example**

```js
 const $h2 = document.createElement('h2');
$h2.innerText = 'dummy_text';

expect($h2).toHaveHeading('h2');
```

---