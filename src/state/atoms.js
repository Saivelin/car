import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

export const modalState = atom({
    key: "modalShowed",
    default: null
})