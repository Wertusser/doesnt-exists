import {combineReducers} from 'redux';
import labels from './labels';
import images from './images';

export default combineReducers({
    labels,
    images
})