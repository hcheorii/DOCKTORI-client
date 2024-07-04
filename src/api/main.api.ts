// api/main.api.ts
import { fetchMainProps, fetchMainResponse } from "../models/main.model";
import { httpClient } from "./http";

export const fetchMain = async (params: fetchMainProps) => {
    const response = await httpClient.get<fetchMainResponse>("/home/main", {
        params,
    });
    return response;
};
