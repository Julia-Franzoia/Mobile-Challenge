import {http} from './config';

export default {
  all: () => {
    return http.get('/restaurants', {
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    });
  },

  details: (id) => {
    return http.get(`/restaurants/${id}`, {
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    });
  },
  
};
