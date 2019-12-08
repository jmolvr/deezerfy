import { createStore } from 'redux'
import cardReducer from '../reducers/cardReduce'

export default createStore(cardReducer);