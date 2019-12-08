import { SET_DATA_CARD} from '../actions/actionsType';

const initialState = {
    title: '',
    artist: '',
    cover: '',
    link: '',
    icon: undefined
}

const cardReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_DATA_CARD:
            return{
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export default cardReducer;