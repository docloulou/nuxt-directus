import { DirectusItemRequest, DirectusItemMetaRequest, DirectusItemCreation, DirectusItemDeletion, DirectusItemUpdate, DirectusItems } from '../types';
export declare const useDirectusItems: () => {
    getItems: {
        <T>(data: DirectusItemRequest): Promise<T[]>;
        <T_1>(data: DirectusItemMetaRequest): Promise<DirectusItems<T_1>>;
    };
    getSingletonItem: <T_2>(data: DirectusItemRequest) => Promise<T_2>;
    getItemById: <T_3>(data: DirectusItemRequest) => Promise<T_3>;
    createItems: <T_4>(data: DirectusItemCreation) => Promise<T_4[]>;
    deleteItems: (data: DirectusItemDeletion) => Promise<void>;
    updateItem: <T_5>(data: DirectusItemUpdate) => Promise<T_5>;
};
