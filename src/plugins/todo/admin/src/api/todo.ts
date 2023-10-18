import { request } from "@strapi/helper-plugin";

export const getAll = async (): Promise<any> => {
  return await request("/todo/find");
};

export const create = async (data: object): Promise<any> => {
  return await request(`/todo/create`, {
    method: "POST",
    body: { data },
  });
};

export const toggle = async (id: string): Promise<any> => {
  return await request(`/todo/toggle/${id}`, {
    method: "PUT",
  });
};

export const update = async (id: string, data: object): Promise<any> => {
  return await request(`/todo/update/${id}`, {
    method: "PUT",
    body: { data },
  });
};

export const remove = async (id: string): Promise<any> => {
  return await request(`/todo/delete/${id}`, {
    method: "DELETE",
  });
};
