export default class Spinner {
    constructor() {
        this.spinner = document.getElementById("spinner");
    }

    start() {
        this.spinner.classList.remove("invisible");
    }

    stop() {
        this.spinner.classList.add("invisible");
    }
}