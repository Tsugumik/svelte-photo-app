<script lang="ts">
    import type { PexelsPhoto } from "./Pexels";


    export let visible = false;
    export let photo: PexelsPhoto;
</script>

{#if visible}
    <div class="photoModal">
        <img src={photo.src.portrait} alt={photo.alt}>
        <div class="photoDetails">
            <h2>{photo.alt}</h2>
        </div>
    </div>
{/if}

<style lang="scss">
    .photoModal {
        top: 50;
        left: 50;
        position: fixed;
        background: gray;
        height: 80%;
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        img {
            max-height: 80%;
            border-radius: 1rem;
            border: 2px solid white;
            margin: 3rem;
        }
        .photoDetails {
            flex: 1;
        }
    }
</style>