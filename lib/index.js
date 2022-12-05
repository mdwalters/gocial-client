import Spinner from "./spinner.js";

const app = document.getElementById("app");
const spinner = new Spinner();
const loginModal = document.getElementById("login-modal");

spinner.start();
const ws = new WebSocket("wss://gocial-server.mdwalters.repl.co/");

ws.onopen((event) => {
    spinner.stop();
    loginModal.classList.remove("invisible");
});