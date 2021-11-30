import client from 'utils/client';

const API = {
  getPosts: () => client
    .getEntries(),
};

export default API;
