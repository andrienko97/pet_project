const dom = (function () {
    function createDivElement(id, className, innerText) {
        return createHtmlElement('div', id, className, innerText);
    }

    function createButtonElement(id, className, innerText, click) {
        return createHtmlElement('button', id, className, innerText, click)
    }

    function createInputElement(id, className, placeholder) {
        return createHtmlElement('input', id, className, undefined, placeholder)
    }

    function createHtmlElement(type, id, className, innerText, placeholder, click) {
        const element = window.document.createElement(type);

        if (id) {
            element.setAttribute('id', id);
        }

        if (className) {
            element.setAttribute('class', className);
        }

        if (innerText) {
            element.innerText = innerText;
        }

        if (placeholder) {
            element.setAttribute('placeholder', placeholder);
        }

        if (click) {
            element.addEventListener('click', click);
        }

        return element;
    }

    return {
        createDivElement: createDivElement,
        createButtonElement: createButtonElement,
        createInputElement: createInputElement,
        getById: function (id) {
            return window.document.getElementById(id)
        }
    }
})();
