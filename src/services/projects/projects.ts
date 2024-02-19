import axios from "axios";

import { getIdToken } from "@/utils/api/api";
import config from "@/config";

import { ICreatePayload } from "@/types/projects/IProjects";
import { ICreateProject } from "../../types/projects/ICreateProject";
import { IUpdateFormProject } from "@/types/projects/IUpdateFormProject";

export const addProject = async (data: ICreatePayload): Promise<ICreateProject> => {
  const token = await getIdToken();
  const currenciesFinal = data.general.currencies.map((currency) => ({
    id: currency.split("-")[0],
    currency_name: currency.split("-")[1]
  }));
  const colorRgb = data.personalization.color.metaColor;
  const finalColorRgb = `rgb(${Math.trunc(colorRgb.r)},${Math.trunc(colorRgb.g)},${Math.trunc(colorRgb.b)})`;
  const finalData = {
    project_description: data.general.name,
    rgb_config: finalColorRgb,
    logo: "logo",
    nit: data.general.nit,
    email: data.contact.email,
    contact: data.contact.name,
    phone: data.contact.phone,
    address: data.general.address,
    country_id: data.general.country.split("-")[0],
    currency: currenciesFinal
  };
  try {
    const response: ICreateProject = await axios.post(`${config.API_HOST}/project`, finalData, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    return error as any;
  }
};

export const updateProject = async (
  data: IUpdateFormProject,
  id: string
): Promise<ICreateProject> => {
  const token = await getIdToken();
  const currenciesFinal = data.general.currencies.map((currency) => ({
    id: currency.split("-")[0],
    currency_name: currency.split("-")[1]
  }));
  const colorRgb = data.personalization.color.metaColor;
  const finalColorRgb = colorRgb
    ? `rgb(${Math.trunc(colorRgb.r)},${Math.trunc(colorRgb.g)},${Math.trunc(colorRgb.b)})`
    : data.personalization.color;
  const finalData = {
    id,
    is_active: true,
    project_description: data.general.name,
    rgb_config: finalColorRgb,
    logo: "logo",
    nit: data.general.nit,
    email: data.contact.email,
    contact: data.contact.name,
    phone: data.contact.phone,
    address: data.general.address,
    country_id: data.general.country.split("-")[0],
    currency: currenciesFinal
  };
  try {
    const response: ICreateProject = await axios.put(`${config.API_HOST}/project`, finalData, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    return error as any;
  }
};
export const activateProject = async (id: string): Promise<ICreateProject> => {
  const token = await getIdToken();
  try {
    const response: ICreateProject = await axios.put(`${config.API_HOST}/project/active/${id}`, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`
      }
    });

    return response;
  } catch (error) {
    return error as any;
  }
};

export const desactiveProject = async (id: string): Promise<ICreateProject> => {
  const token = await getIdToken();
  try {
    const response: ICreateProject = await axios.delete(`${config.API_HOST}/project/${id}`, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    return error as any;
  }
};
