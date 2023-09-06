<<<<<<< HEAD
export default class Section {
    constructor({ items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    }
}
=======
export default class Section {
    constructor({ items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    }
}
>>>>>>> 31c43c63a8bce379037f5cb78baf8313db936ddb
