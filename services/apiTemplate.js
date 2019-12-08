import api from "./api";

export const deezerRegex = /^(https|http):\/\/www.deezer.com\/track\/\d+/;
export const spotifyRegex = /^https:\/\/open\.spotify\.com\/track\/\w+/;

export async function spotifyEntry(url){
    try{
        let link = url.match(spotifyRegex)[0];
        const response = await api.post('/getURLDeezer', {
            url: link,
        });
        return response.data;
    }catch(err){
        return "";
    }
}

export async function deezerEntry(url){
    let link = url.match(deezerRegex)[0];
    try{
        const response = await api.post('/getURLSpotify', {
            url: link,
        });
        return response.data;
    }catch(err){
        return "";
    }
    
}
