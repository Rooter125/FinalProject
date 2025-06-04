import { defineStore } from 'pinia';

export const useAuthStore = defineStore(`auth`, {
    state: () => ({
        user: null,
        isAuthenticated: false,
    }),

    actions: {
        reg(userData:any) {
            this.user = userData;
            this.isAuthenticated = true;
        },
        login(userData:any) {
            this.user = userData;
            this.isAuthenticated = true;
        },
        logout() {
           this.user = null;
           this.isAuthenticated = false;
        }
    }
})