<script lang="ts">
    import '../global.scss';
    import Logo from '$lib/Logo.svelte';
    import SearchBar from '$lib/SearchBar.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
    <title>Svelte Photo App</title>
</svelte:head>

<Logo/>

<SearchBar/>

<slot />

<Footer />