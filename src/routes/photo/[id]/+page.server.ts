import { PEXELS_API_KEY } from '$env/static/private';
import type { PexelsPhoto } from '$lib/Pexels';
import { error } from '@sveltejs/kit'

export async function load({ params, fetch }) {
    const query = await fetch(`https://api.pexels.com/v1/photos/${params.id}`, {
        headers: {
            Authorization: PEXELS_API_KEY
        }
    });

    if(query.status === 404) {
        throw error(404, query.statusText);
    } else if(!query.ok) {
        throw error(500, "Server error, try again later");
    }

    const response: PexelsPhoto = await query.json();;

    return { photoResponse: response };
}