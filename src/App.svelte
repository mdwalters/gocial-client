<script>
    import { screen } from "./lib/stores.js";
    import Cloudlink from "./lib/cloudlink.js";

    import Start from "./lib/screens/Start.svelte";
    import Menu from "./lib/screens/Menu.svelte";
    import Login from "./lib/screens/Login.svelte";
    import Signup from "./lib/screens/Signup.svelte";
    import Home from "./lib/screens/Home.svelte";
    import Disconnected from "./lib/screens/Disconnected.svelte";

    export let cl = new Cloudlink("wss://gocial-server.mdwalters.repl.co/");

    cl.on("connected", () => {
        screen.set("menu");
    });

    cl.on("disconnected", () => {
        screen.set("disconnected");
    });
</script>

<main>
    {#if $screen === "start"}
        <Start message="Connecting..." />
    {:else if $screen === "menu"}
        <Menu />
    {:else if $screen === "login"}
        <Login ws={cl} />
    {:else if $screen === "signup"}
        <Signup ws={cl} />
    {:else if $screen === "home"}
        <Home ws={cl} />
    {:else if $screen === "disconnected"}
        <Disconnected />
    {:else}
    <div class="position-absolute top-50 start-50 translate-middle text-center">
        <h1 class="display-1">
            Invalid screeen
            <h3 class="text-center">You went to a screen that doesn't exist...</h3>
        </h1>
    </div>
    {/if}
</main>