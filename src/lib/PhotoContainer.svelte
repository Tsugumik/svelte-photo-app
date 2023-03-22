<script lang="ts">
    import type { PexelsPhoto } from "./Pexels";
    import Photo from "./Photo.svelte";
    export let photos: Array<PexelsPhoto>;

</script>

<div class="photoContainer">
    {#each photos as photo}
        <Photo photo={photo} />
    {/each}
</div>

<style lang="scss">
    .photoContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
</style>
