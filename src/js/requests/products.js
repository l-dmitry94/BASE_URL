import { apiProducts } from "../services/api";

export async function fetchAllCategories() {
    const response = await apiProducts({
        method: "GET",
        url: '/categories'
    })

    return response.data;
}
