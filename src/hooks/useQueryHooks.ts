import { useQuery } from "@tanstack/react-query";

export const useQueryInfinity = <T>(
  fetchData: (url: string) => Promise<T>,
  url: string,
  name: string
) => {
  const { data, isLoading } = useQuery([name], () => fetchData(url), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  return { data, isLoading };
};

export const useQueryMinutes = <T>(
  fetchData: (url: string) => Promise<T>,
  url: string,
  name: string
) => {
  const { data, isLoading } = useQuery([name], () => fetchData(url), {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
  });
  return { data, isLoading };
};
