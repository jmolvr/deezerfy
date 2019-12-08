import {SET_DATA_CARD} from './actionsType';

export const handleCardInfo = data => ({
    type: SET_DATA_CARD,
    payload: {
        title: data.title,
        link: data.link,
        cover: data.cover,
        artist: data.artist
    }
});