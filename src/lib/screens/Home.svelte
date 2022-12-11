<script>
    export let ws;
    let posts;

    ws.send(`{"cmd": "home"}`);
    ws.on("message", (data) => {
        console.log(data);
    });
</script>

{#each posts as post}
    <div class="bg-light rounded border-1">
        <h3>{post.username}</h3>
        <p>{post.content}</p>
    </div>
{/each}