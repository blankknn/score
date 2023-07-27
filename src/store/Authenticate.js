import { defineStore } from "pinia";

export const useAuthenticate = defineStore('auth', {
    state: () => ({
        isLoggedIn: localStorage.getItem('token') !== null,
        userId: null,
    }),
    actions: {
        setLogin(auth) {
            this.isLoggedIn = auth;
            console.log(auth);
        },
        setId(id) {
            this.userId = id;
            console.log(id);
        },
        initUserIdFromLocalStorage() {
            const userIdFromLocalStorage = localStorage.getItem('userId');
            if (userIdFromLocalStorage) {
                this.setId(userIdFromLocalStorage);
            }
        }
    },
});

