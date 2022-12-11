<script>
    import { screen } from "../stores.js";
</script>

<div class="position-absolute top-50 start-50 translate-middle text-center justify-content-center vstack gap-3">
    <h1 class="display-1">Gocial</h1>
    <button class="btn btn-primary btn-lg" on:click={() => {
        screen.set("login");
    }}>Log in</button>
    <button class="btn btn-primary btn-lg" on:click={() => {
        screen.set("signup");
    }}>Sign up</button>
    <button class="btn btn-primary btn-lg" on:click={() => {
        screen.set("home");
    }}>Skip</button>
</div>