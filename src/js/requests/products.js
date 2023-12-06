import { apiProducts } from "../services/api";

export async function fetchAllCategories() {
    const response = await apiProducts({
        method: "GET",
        url: '/categories'
    })

    console.log(response.data)

    return response.data;
}
