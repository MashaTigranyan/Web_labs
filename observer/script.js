class Observer {
    constructor() {
        this._handlers = [];
    }

    subscribe(cb) {
        this._handlers.push(cb);
    }

    unsubscribe() {
        this._handlers = [];
    }

    trigger(value) {
        this._handlers.forEach((cb) => cb(value));
    }
}

const div = document.getElementById('div');

const clickObserver = new Observer();

div.addEventListener('click', (e) => clickObserver.trigger(e));

clickObserver.subscribe((e) => {
    console.log(e.target.innerText);
});

clickObserver.subscribe((e) => {
    console.log(e.target.getAttribute('id'));
});