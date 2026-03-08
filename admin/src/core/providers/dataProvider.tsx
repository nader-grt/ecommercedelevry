import { httpclientService } from "../../auth/httpclientService/httpclientService";

const apiUrl = "http://localhost:4000/api";

const dataProvider: any = {
  getList: async (resource:any, params:any) => {
    // Add pagination and sorting query strings here if your API supports them
    const { json } = await httpclientService(`${apiUrl}/${resource}`);

    const mappedData = json.data.map((record: any) => ({
      ...record,
      id: record.id || record.email, // Use email as ID if missing
    }));

    return {
      data: mappedData,
      total: json.total || mappedData.length,
    };
  },

  getOne: async (resource:any, params:any) => {
    const { json } = await httpclientService(`${apiUrl}/${resource}/${params.id}`);
    return { data: json };
  },

  getMany: async (resource:any, params:any) => {
    const { json } = await httpclientService(
      `${apiUrl}/${resource}?ids=${params.ids.join(",")}`
    );
    return { data: json };
  },

  getManyReference: async (resource:any, params:any) => {
    const { json } = await httpclientService(
      `${apiUrl}/${resource}?${params.target}=${params.id}`
    );
    return { data: json.data, total: json.total };
  },

  create: async (resource:any, params:any) => {
    const { json } = await httpclientService(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  update: async (resource:any, params:any) => {
    const { json } = await httpclientService(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  updateMany: async (resource:any, params:any) => {
    const { json } = await httpclientService(`${apiUrl}/${resource}`, {
      method: "PUT",
      body: JSON.stringify(params.ids),
    });
    return { data: json }; // array
  },

  delete: async (resource:any, params:any) => {
    const { json } = await httpclientService(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    });
    return { data: json };
  },

  deleteMany: async (resource:any, params:any) => {
    const { json } = await httpclientService(`${apiUrl}/${resource}`, {
      method: "DELETE",
      body: JSON.stringify(params.ids),
    });
    return { data: json };
  },
};

export default dataProvider;
