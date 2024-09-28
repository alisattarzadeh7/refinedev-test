import {AccessControlProvider} from "@refinedev/core";

export const accessControlProvider: AccessControlProvider = {
    can: async ({resource, action, params}) => {
        //
        // if (profileData.find((perm)=>perm.toLowerCase() === `${resource}.${action}`)) {
        //     return {can: true};
        // }
        return {
            can: true,
        };
        return {
            can: false,
            reason: "Unauthorized",
        };

    },
};