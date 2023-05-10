import jwtDecode from "jwt-decode";
import { $authHost, $host } from "./index";

export const registration = async (lfp, password, phone) => {
    const { data } = await $host.post('api/user/registration', { lfp, password, phone, role: "admin" })
    return jwtDecode(data.token)
}

export const login = async (phone, password) => {
    const { data } = await $host.post('api/user/login', { phone, password })
    return jwtDecode(data.token)
}

export const check = async () => {
    const response = await $host.post('api/user/registration', { lfp, password })
    return response
}

export const getInfo = async (id) => {
    const { data } = await $host.get(`api/user/getById/${id}`)
    return data
}