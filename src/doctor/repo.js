import { get } from 'axios';
import createId from 'uuid/v1';
import _ from 'lodash';

const apiConfigs = {
  getDoctors: {
    requestCount: 15, // randomuser's free api only returns 1 record per call
    toViewModel: results =>
      results
        .map(({ data = {} }) => {
          const { results = [] } = data;
          if (!results.length) return null;
          const item = results[0];
          item.id = createId(); // id value from randomuser can be null sometimes, so don't use it
          return item;
        })
        .filter(item => item),
    url: 'https://randomuser.me/api/', // alternative, but no avatars: 'https://jsonplaceholder.typicode.com/users'
  },
};

export const getDoctors = () => {
  const { requestCount, toViewModel, url } = apiConfigs.getDoctors;
  const promises = _.range(requestCount).map(() => get(url));
  return Promise.all(promises).then(toViewModel);
};
