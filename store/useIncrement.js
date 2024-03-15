import { create } from 'zustand';


export const useIncrement = create((set) => ({
    value: 0,
    increment: (val) => {
        set((state) => ({ value: state.value + val }))
    }
}))