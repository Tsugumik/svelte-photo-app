<script lang="ts">
    import PhotoContainer from "$lib/PhotoContainer.svelte";
    export let data;
</script>

{#if data.pexelsResponse}
    <PhotoContainer photos={data.pexelsResponse.photos}/>
{/if}