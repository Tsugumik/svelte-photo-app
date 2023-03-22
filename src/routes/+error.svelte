<script lang="ts">
    import { page } from '$app/stores';
</script>

{#if $page.error}
    <div class="error">
        <h2>{$page.status}</h2>
        <p>{$page.error.message}</p>
    </div>
{/if}

<style lang="scss">
    .error {
        font-family: sans-serif;
        font-size: 2rem;
        text-align: center;
        padding: 2rem;
    }
</style>