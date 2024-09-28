import type {DataProvider} from "@refinedev/core";
import axios from "../config/axios";


export const dataProvider: DataProvider = {
    getList: async ({resource, pagination, meta}) => {

        const response = await axios(`${resource}s/list`, {
            params: {
                page: pagination?.current,
                pageSize: pagination?.pageSize,
            }
        });

        return {
            data: response.data.data.items,
            total: response.data.data.totalCount, // We'll cover this in the next steps.
        };
    },
    getOne: () => {
        throw new Error("Not implemented");
    },
    update: () => {
        throw new Error("Not implemented");
    },
    create: ({resource, variables}) => {
        const res =  axios.post(`${resource}`, {
            ...variables,
            isLegal:false
        });

        return res
    },
    deleteOne: () => {
        throw new Error("Not implemented");
    },
    getApiUrl: () => '',
    // Optional methods:
    /* ... */
};