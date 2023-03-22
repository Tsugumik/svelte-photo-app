<form method="get" action="/">
    <input required type="text" name="query" placeholder="Search...">
    <input type="number" name="max_results" min="1" max="80" placeholder="Limit">
    <button type="submit">Search</button>
</form>


<style lang="scss">
    form {
        margin: 1rem;
        text-align: center;
        input {
            padding: 0.5rem 1rem;
            font-size: 1.5rem;
            outline: none;
        }
        button {
            padding: 0.5rem 1rem;
            font-size: 1.5rem;
            &:hover {
                cursor: pointer;
            }
        }
    }
</style>