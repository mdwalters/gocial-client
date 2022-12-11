<script>
    export let ws;
    import { screen } from "../stores.js";
</script>

<div class="position-absolute top-50 start-50 translate-middle text-center justify-content-center">
    <h1 class="display-1">Log in to Gocial</h1>

    <div class="vstack gap-3">
        <input id="username" type="text" class="form-control" placeholder="Username">
        <input id="password" type="password" class="form-control" placeholder="Password">
    </div>

    <br>

    <button class="btn btn-primary btn-lg" on:click={() => {
        screen.set("menu");
    }}>Back</button>
    <button class="btn btn-primary btn-lg" on:click={() => {
        ws.send(`{"cmd": "login", "username": ${document.getElementById("username").value}, "password": ${document.getElementById("password").value}}`);
        screen.set("home");
    }}>Log in</button>
</div>