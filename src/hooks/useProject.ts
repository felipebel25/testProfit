import useSWR from "swr";

import { fetcher } from "@/utils/api/api";
import { IProjectById } from "@/types/projects/IProject";

interface Props {
  id: string;
}

export const useProject = ({ id }: Props) => {
  const { data, isLoading } = useSWR<IProjectById>(`/project/${id}`, fetcher);

  return {
    data: data?.data[0] || ([] as any),
    loading: isLoading
  };
};
