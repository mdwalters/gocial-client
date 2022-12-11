<div class="position-absolute top-50 start-50 translate-middle text-center vstack gap-3">
    <h1 class="display-1">
        Disconnected
        <h3 class="text-center">You were disconnected from Gocial.</h3>
    </h1>

    <button class="btn btn-lg btn-primary" on:click={() => {
        window.location.reload();
    }}>Reconnect</button>
</div>