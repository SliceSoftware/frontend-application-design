
function v(el, options) {

    const element = document.createElement(el);
    
    for (let prop in options) {
        const value = options[prop];
        if (prop.startsWith('on')) {
            const event = prop.replace(/^on/, '');
            element.addEventListener(event, value);
        } else if (prop === "className") {
            element.className = value;
        } else {
            element.setAttribute(prop, value);
        }
    }
    
    element.add = (child) => {
        if (typeof(child) == 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    }

    return element;
}

export default v;