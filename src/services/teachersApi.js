import { apiCaller } from '../lib/apiCaller';

export const teachersApi = {
  search: async (params) => {
    const searchParams = new URLSearchParams();

    if (params.size) searchParams.append('size', params.size);
    if (params.sortBy) searchParams.append('sort_by', params.sortBy);
    if (params.sortDirection) searchParams.append('sort_dirction', params.sortDirection);
    if (params.patterns && params.patterns.length > 0) {
      searchParams.append('patterns', params.patterns.join(','));
    }
    if (params.next) searchParams.append('next', params.next);

    return apiCaller.call('searchResumesGet', null, { searchParams: searchParams.toString() });
  },
};
