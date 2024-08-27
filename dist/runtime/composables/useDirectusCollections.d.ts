import { DirectusCollectionCreation, DirectusCollectionRequest, DirectusCollectionUpdate } from '../types';
export declare const useDirectusCollections: () => {
    getCollections: <T>() => Promise<T[]>;
    getCollection: <T_1>(data: DirectusCollectionRequest) => Promise<T_1>;
    createCollection: <T_2>(data: DirectusCollectionCreation) => Promise<T_2>;
    updateCollection: <T_3>(data: DirectusCollectionUpdate) => Promise<T_3>;
    deleteCollection: <T_4>(data: DirectusCollectionRequest) => Promise<void>;
};
