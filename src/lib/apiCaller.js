import httpClient from './httpClient';
import { API_ENDPOINTS } from '../constants/apiEndpoints';

export const apiCaller = {
  call: (endpointKey, data = null, params = null) => {
    const endpoint = API_ENDPOINTS[endpointKey];

    if (!endpoint) {
      throw new Error(`API endpoint '${endpointKey}' not found`);
    }

    const { method, url } = endpoint;

    switch (method) {
    case 'get':
      return httpClient.get(url, params ? { params } : {});
    case 'post':
      return httpClient.post(url, data);
    case 'put':
      return httpClient.put(url, data);
    case 'patch':
      return httpClient.patch(url, data);
    case 'delete':
      return httpClient.delete(url);
    default:
      throw new Error(`Unsupported HTTP method: ${method}`);
    }
  },
};
