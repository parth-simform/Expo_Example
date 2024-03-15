import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv'
import { useIncrement } from './useIncrement';

const storage = new MMKV()

const bookStore = (set, get) => ({
    books: [],
    addBook: (name) => set((state) => ({ books: [...state.books, { name, id: state.books.length + 1, status: "available" }] })),
    updateStatus: (id) => {
        // console.log(useIncrement?.getState().value); // to access another store value
        const bookList = get().books
        const updateBook = bookList?.map((item) => {
            if (item?.id === id) {
                return {
                    ...item,
                    state: 'issued'
                }
            } else {
                return item
            }
        })
        set(() => ({
            books: updateBook
        }))
    },
    reset: () => set(() => ({ books: [] }))
})

const zustandStorage = {
    setItem: (name, value) => {
        return storage.set(name, value)
    },
    getItem: (name) => {
        const value = storage.getString(name)
        return value ?? null
    },
    removeItem: (name) => {
        return storage.delete(name)
    },
}

export const useBookStore = create(persist(bookStore, {
    name: 'Book Store',
    storage: createJSONStorage(() => zustandStorage)
}
))