<script>
    // @ts-nocheck

    import { username, password } from "../stores.js"
    export let ws;

    ws.on("message", (data) => {
        alert("message");
        var div = document.createElement("div");
        var posts = document.getElementById("posts");

        div.classList.add("bg-light", "rounded", "border", "m-3", "p-2");
        div.innerHTML = `<h3>${data.username}</h3>
${data.val}`;
        posts.appendChild(div);
    });

    document.addEventListener("keypress", function(event) {
        if (event.key == "Enter") {
            ws.send(`{"cmd": "post", "username": "${$username}", "password": "${$password}", "val": "${document.getElementById("post-textbox").value}"}`);
            document.getElementById("post-textbox").value = "";
        }
    });
</script>

<div id="posts"></div>

{#if username !== null && password !== null}
    <div class="input-group fixed-bottom mb-3">
        <input type="text" class="form-control ms-3" placeholder="Write something..." aria-describedby="post-send" id="post-textbox">
        <button class="btn btn-primary input-group-text me-3" id="post-send" on:click={() => {
            ws.send(`{"cmd": "post", "username": "${$password}", "password": "${$password}", "val": "${document.getElementById("post-textbox").value}"}`);
            document.getElementById("post-textbox").value = "";
        }}>Post</button>
    </div>
{/if}