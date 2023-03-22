<script lang="ts">
    export let data;
</script>

<div class="photoPage">
    <div class="imageContainer">
        <img src={data.photoResponse.src.portrait} alt={data.photoResponse.alt}>
    </div>
    <div class="photoDetails">
        <div>
            <h2>{data.photoResponse.alt}</h2>
            <p>Author: <a href={data.photoResponse.photographer_url} target="_blank">{data.photoResponse.photographer}</a></p>
            <p>Original width: {data.photoResponse.width}px</p>
            <p>Original height: {data.photoResponse.height}px</p>
        </div>
        <div>
            <h3>Downloads</h3>
            <ul>
                <li><a href={data.photoResponse.src.original} target="_blank">Original</a></li>
                <li><a href={data.photoResponse.src.large2x} target="_blank">Very large</a></li>
                <li><a href={data.photoResponse.src.large} target="_blank">Large</a></li>
                <li><a href={data.photoResponse.src.medium} target="_blank">Medium</a></li>
                <li><a href={data.photoResponse.src.small} target="_blank">Small</a></li>
                <li><a href={data.photoResponse.src.portrait} target="_blank">Portrait</a></li>
                <li><a href={data.photoResponse.src.landscape} target="_blank">Landscape</a></li>
                <li><a href={data.photoResponse.src.tiny} target="_blank">Tiny</a></li>
            </ul>
        </div>
    </div>
</div>

<style lang="scss">
    .photoPage {
        display: flex;
        justify-content: center;
        gap: 3rem;
        flex-wrap: wrap;
        img {
            width: 50rem;
            max-width: 100vw;
        }
        a {
            color: black;
        }
        .photoDetails {
            h2, h3 {
                font-family: sans-serif;
                font-size: 2.5rem;
                width: 30rem;
                border-bottom: 2px solid black;
            }
            p {
                font-size: 2rem;
            }
            ul {
                font-size: 2rem;
            }
        }
    }
</style>