import  { adaptList, adaptObject } from "../../Api/configApi/apiAdapter";
import { httpclientService } from "../../auth/httpclientService/httpclientService";

const apiUrl = "http://localhost:4000/api";

const dataProvider: any = {
  getList: async (resource:any, params:any) => {
   

//


const { page, perPage } = params.pagination;
const { field, order } = params.sort;



const query = {
  page,
  perPage,
  sort: field,
  order,
  filter: JSON.stringify(params.filter),
};

const queryString = new URLSearchParams(query).toString();

const { json } = await httpclientService(
  `${apiUrl}/${resource}`
);
 


return adaptList(json);



  },

  getOne: async (resource:any, params:any) => {
    const { json } = await httpclientService(`${apiUrl}/${resource}/${params.id}`);
    const record = json.data ?? json;

    // return {
    //   data: {
    //     id: record.id ?? record.categoryId, // React Admin needs 'id'
    //     ...record,
    //   },
    // };

   return adaptObject(json);
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

    return adaptObject(json);
    //return { data: json };
  },

  update: async (resource:any, params:any) => {
    console.log("rrrrrrrrrrrr  ",resource ,params ,params.id)
    const { json } = await httpclientService(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });

    return adaptObject(json);
   // return { data: json };
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
    return adaptObject(json);
  },

  deleteMany: async (resource:any, params:any) => {
    const { json } = await httpclientService(`${apiUrl}/${resource}`, {
      method: "DELETE",
      body: JSON.stringify(params.ids),
    });
    return { data: json };
  },
  // getAllCategories: async (resource:any, params:any) => {
  //   console.log("object  trftttttttttttttttttttt")
  //   const { json } = await httpclientService(`${apiUrl}/categories/${resource}`, {
  //     method: "DELETE",
  //     body: JSON.stringify(params.ids),
  //   });
  //   return { data: json };
  // },
};

export default dataProvider;
