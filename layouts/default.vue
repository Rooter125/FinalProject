<script setup>
import { io } from 'socket.io-client';
const num = useState(`num`, (() => ``))
if (process.client) {
    let socket = io(`ws://localhost:3000`);

    socket.on("hello", (data) => {
        num.value = data;
        console.log(num.value)
    })
}
</script>

<template>
    <header class="bg-sky-500 shadow-lg py-4 sticky top-0 z-50 rounded-b-lg">
        <div class="container mx-auto flex items-center sm:gap-10  gap-4 flex-wrap justify-between px-4">
            <div class="sm:mx-0 mx-auto">
                <h1 class="text-2xl font-bold">PCComplex</h1>
            </div>
            <nav class="sm:mx-0 mx-auto">
                <ul class="flex space-x-4">
                    <li><a href="#" class="hover:text-primary transition-colors duration-300">О нас</a></li>
                    <li class="group relative">
                        <a href="#" class="hover:text-primary transition-colors duration-300">Поддержка</a>
                    </li>
                    <li><a href="#" class="hover:text-primary transition-colors duration-300">Контакты</a></li>
                    <li>
                        <NuxtLink to="/shop" class="hover:text-primary transition-colors duration-300">Магазин
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <slot class="h-100"></slot>
    <footer class="bg-sky-500 shadow-lg py-6 top-0 z-50 rounded-t-lg mt-30 pb-40">
        <p class="ms-15 text-2xl">Люди использующие наш сайт: {{ num }}</p>
    </footer>
</template>