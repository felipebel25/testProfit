import useSWR from "swr";

import { IProjects } from "@/types/projects/IProjects";
import { fetcher } from "@/utils/api/api";

interface Props {
  page?: number;
  countryId: string;
  currencyId: string;
}

export const useProjects = ({ page, countryId, currencyId }: Props) => {
  const pathKey = `/project?page=${page}&country_id=${countryId}&currency_id=${currencyId}`;
  const { data, error } = useSWR<IProjects>(pathKey, fetcher, {});

  return {
    data: data || ([] as any),
    loading: !error && !data
  };
};
