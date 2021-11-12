import axios from 'axios';

import {
  fetchImagesRequest,
  fetchImagesSuccess,
  fetchImagesError,
} from './image-actions';

const fetchImages = () => async dispatch => {
  dispatch(fetchImagesRequest());

  try {
    const response = await axios.get('/images');
    dispatch(fetchImagesSuccess(response.data));
  } catch (error) {
    dispatch(fetchImagesError(error));
  }
};
export default {
  fetchImages,
};
