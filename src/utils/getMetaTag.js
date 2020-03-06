function getMetaTag(element, tagName) {
    const meta = element.querySelector(`head>meta[name="${tagName}"]`);

    return {
        meta,
        value: meta && meta.getAttribute('content'),
    }
}

module.exports = getMetaTag;