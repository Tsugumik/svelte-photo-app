<script lang="ts">
    import '../global.scss';
    import Logo from '$lib/Logo.svelte';
    import SearchBar from '$lib/SearchBar.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<Logo/>

<SearchBar/>

<slot />

<Footer />