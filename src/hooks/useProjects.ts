import useSWR from "swr";

import { IProjects } from "@/types/projects/IProjects";
import { fetcher } from "@/utils/api/api";

interface Props {
  page?: number;
}

export const useProjects = ({ page }: Props) => {
  const pathKey = `/project?page=${page}`;
  const { data, error } = useSWR<IProjects>(pathKey, fetcher, {});

  return {
    data: data || ([] as any),
    loading: !error && !data
  };
};
