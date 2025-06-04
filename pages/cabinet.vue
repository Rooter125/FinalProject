<script setup>
definePageMeta({
    middleware: ["auth"]
})

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
</script>

<template>

    <main>
        <div class="text-center mt-30">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
                Профиль</h1>
            <div
                class="flex lg:w-6/12 w-full mx-auto md:flex-row flex-col items-center bg-white border-2 border-gray-700 rounded-lg shadow-sm container">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="public\assets\src\unnamed.jpg" alt="">
                <div class="flex flex-col p-4 leading-normal text-center">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Имя пользователя: {{
                        authStore.user.name }}</h5>
                    <p class="mb-3 font-normal text-gray-700">Почта: {{ authStore.user.email }}</p>
                    <p class="mb-3 font-normal text-gray-700">Пароль: {{ authStore.user.password }}</p>
                    <p class="mb-3 font-normal text-gray-700">Телефон: {{ authStore.user.tel }}</p>
                </div>
            </div>
            <div class="text-center mt-30">
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-4xl w-full sm:w-auto px-5 py-2.5 text-center"><NuxtLink to="/shop">В
                        магазин</NuxtLink></button>
            </div>
        </div>
    </main>

</template>