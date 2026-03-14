



 export default function normalizeRecords(records: any[]): any[] {
    return records.map(record => {
      const id =
        record.id ??          //   id
        record.categoryId ??  // categories
        record.orderId ??     // orders
        record.email ??       // users without id
        Object.values(record)[0]; // : 
  
      return { ...record, id };
    });
  }


  

export const extractData = (json: any) => {
  if (json && json.data !== undefined) {
    return json.data;
  }
  return json;
};

export const adaptList = (json: any) => {
  const records = extractData(json);

  return {
    data: records,
    total: records.length,
  };
};

export const adaptObject = (json: any) => {
  const record = extractData(json);

  return {
    data: record,
  };
};