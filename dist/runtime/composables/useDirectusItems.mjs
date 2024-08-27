import { useDirectus } from "./useDirectus.mjs";
export const useDirectusItems = () => {
  const directus = useDirectus();
  async function getItems(data) {
    if (data.params?.filter) {
      data.params.filter = JSON.stringify(data.params.filter);
    }
    if (data.params?.deep) {
      data.params.deep = JSON.stringify(data.params.deep);
    }
    const items = await directus(`/items/${data.collection}`, {
      method: "GET",
      params: data.params
    });
    if (items.meta) {
      return items;
    } else {
      return items.data;
    }
  }
  const getSingletonItem = async (data) => {
    if (data.params?.filter) {
      data.params.filter = JSON.stringify(data.params.filter);
    }
    if (data.params?.deep) {
      data.params.deep = JSON.stringify(data.params.deep);
    }
    const items = await directus(`/items/${data.collection}`, {
      method: "GET",
      params: data.params
    });
    return items.data;
  };
  const getItemById = async (data) => {
    if (data.params?.filter) {
      data.params.filter = JSON.stringify(data.params.filter);
    }
    if (data.params?.deep) {
      data.params.deep = JSON.stringify(data.params.deep);
    }
    const items = await directus(
      `/items/${data.collection}/${data.id}`,
      {
        method: "GET",
        params: data.params
      }
    );
    return items.data;
  };
  const createItems = async (data) => {
    const items = await directus(`/items/${data.collection}`, {
      method: "POST",
      body: data.items,
      params: data.params
    });
    return items.data;
  };
  const deleteItems = async (data) => {
    await directus(`/items/${data.collection}`, {
      method: "DELETE",
      body: data.items,
      params: data.params
    });
  };
  const updateItem = async (data) => {
    const item = await directus(
      `/items/${data.collection}/${data.id}`,
      {
        method: "PATCH",
        body: data.item,
        params: data.params
      }
    );
    return item?.data;
  };
  return {
    getItems,
    getSingletonItem,
    getItemById,
    createItems,
    deleteItems,
    updateItem
  };
};
