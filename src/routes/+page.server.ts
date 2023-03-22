import { PEXELS_API_KEY } from '$env/static/private';
import type { PexelsResponse } from '$lib/Pexels';
import { error } from '@sveltejs/kit';

export async function load({ url, fetch }) {
    const name = url.searchParams.get('query');
    const max_results = Number(url.searchParams.get('max_results')) || 15;

    if(isNaN(max_results) || max_results < 1 || max_results > 80) {
        return error(400, 'max_results must be number and between 1 and 80')
    }

    if(name) {
        const query = await fetch(`https://api.pexels.com/v1/search?query=${name}&per_page=${max_results}`, {
            headers: {
                Authorization: PEXELS_API_KEY
            }
        });
        const response: PexelsResponse = await query.json();

        if(!response.photos) {
            throw error(404, "Not found");
        }

        return { pexelsResponse: response };
    }

}