import { useDirectus } from "./useDirectus.mjs";
export const useDirectusCollections = () => {
  const directus = useDirectus();
  const getCollections = async () => {
    const collections = await directus("/collections/", {
      method: "GET"
    });
    return collections.data;
  };
  const getCollection = async (data) => {
    const collection = await directus(
      `/collections/${data.collection}`,
      {
        method: "GET"
      }
    );
    return collection.data;
  };
  const createCollection = async (data) => {
    const collection = await directus("/collections", {
      method: "POST",
      body: data
    });
    return collection.data;
  };
  const updateCollection = async (data) => {
    const collection = await directus(
      `/collections/${data.collection}`,
      {
        method: "PATCH",
        body: {
          meta: data.meta
        }
      }
    );
    return collection.data;
  };
  const deleteCollection = async (data) => {
    await directus(`/collections/${data.collection}`, {
      method: "DELETE"
    });
  };
  return {
    getCollections,
    getCollection,
    createCollection,
    updateCollection,
    deleteCollection
  };
};
