import { $authHost, $host } from "./index";

export const registration = async (lfp, password) => {
    const response = await $host.post('api/user/registration', { lfp, password, role: "admin" })
    return response
}

export const login = async (lfp, password) => {
    const response = await $host.post('api/user/login', { lfp, password })
    return response
}

export const check = async () => {
    const response = await $host.post('api/user/registration', { lfp, password })
    return response
}