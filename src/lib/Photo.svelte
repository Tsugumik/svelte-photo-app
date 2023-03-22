<script lang="ts">
    import type { PexelsPhoto } from "./Pexels";
    export let photo: PexelsPhoto;
</script>

<a href="/photo/{photo.id}">
    <img src={photo.src.medium} alt={photo.alt} loading="lazy">
</a>


<style lang="scss">
    img {
        max-width: 100vw;
    }
</style>

