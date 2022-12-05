export default class Spinner {
    constructor() {
        this.spinner = document.getElementById("spinner");
    }

    start() {
        this.spinner.classList.toggle("visible");
    }

    stop() {
        this.spinner.classList.toggle("visible");
    }
}