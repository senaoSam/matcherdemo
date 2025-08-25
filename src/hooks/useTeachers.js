import { useInfiniteQuery } from '@tanstack/react-query';
import { teachersApi } from '../services/teachersApi';
import { TeachersResponseSchema } from '../schemas/teachersSchema';
import { useTeachersStore } from '../stores/useTeachersStore';

export const useTeachers = (patterns = []) => {
  const { setPatterns } = useTeachersStore();

  const query = useInfiniteQuery({
    queryKey: ['teachers', patterns],
    queryFn: async ({ pageParam }) => {
      const response = await teachersApi.search({
        size: 3,
        sortBy: 'updated_at',
        sortDirection: 'asc',
        patterns: patterns.length > 0 ? patterns : undefined,
        next: pageParam,
      });

      const validatedResponse = TeachersResponseSchema.parse(response);

      if (validatedResponse.code !== '0') {
        throw new Error(validatedResponse.msg || 'API error');
      }

      return {
        teachers: validatedResponse.data.items.map(item => ({
          id: item.rid,
          tid: item.tid,
          avatar: item.avator,
          name: item.fullname,
          introduction: item.intro,
          tags: item.tags,
          views: item.views,
          updatedAt: item.updated_at,
          region: item.region,
          urlPath: item.url_path,
          followed: item.followed,
          contacted: item.contacted,
        })),
        nextCursor: validatedResponse.data.next,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: null,
  });

  const searchTeachers = (newPatterns) => {
    setPatterns(newPatterns);
    query.refetch();
  };

  const clearSearch = () => {
    setPatterns([]);
    query.refetch();
  };

  const allTeachers = query.data?.pages.flatMap(page => page.teachers) || [];
  const hasMore = query.data?.pages[query.data.pages.length - 1]?.nextCursor != null;

  return {
    teachers: allTeachers,
    loading: query.isLoading,
    error: query.error?.message || null,
    hasMore,
    searchTeachers,
    clearSearch,
    fetchNextPage: query.fetchNextPage,
    isFetchingNextPage: query.isFetchingNextPage,
  };
};
