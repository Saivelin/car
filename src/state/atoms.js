import {
    atom,
} from 'recoil';

export const modalState = atom({
    key: "modalShowed",
    default: null
})

export const themeState = atom({
    key: "themeState",
    default: "white"
})