<script setup>
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const loginEmail = useState(`loginEmail`, (() => ``));
const loginPassword = useState(`loginPassword`, (() => ``));

const regEmail = useState(`regEmail`, (() => ``));
const regPassword = useState(`regPassword`, (() => ``));
const name = useState(`name`, (() => ``));
const tel = useState(`tel`, (() => ``));


const NoReg = useState(`NoReg`, (() => false));
const NoLogin = useState(`NoLogin`, (() => false));


const confirmPassword = useState(`confirmPassword`, (() => ``))


async function login() {
    const user = await $fetch(`/api/users/login`, {
        method: `POST`,
        body: {
            email: loginEmail.value,
            password: loginPassword.value
        }
    })
    console.log(user)
    if (user) {
        NoLogin.value = false;
        authStore.login(user);
        await navigateTo(`/cabinet`);
    } else {
        console.log(NoLogin.value);
        NoLogin.value = true
    }
}

async function Reg() {
    console.log(regEmail.value);
    console.log(regPassword.value);
    console.log(name.value);
    console.log(tel.value);
    if (confirmPassword.value == regPassword.value) {
        NoReg.value = false;
        const user = await $fetch(`/api/users/reg`, {
            method: `POST`,
            body: {
                email: regEmail.value,
                password: regPassword.value,
                name: name.value,
                tel: tel.value
            }
        })
        console.log(user)
        if (user) {
            authStore.reg(user);
            await navigateTo(`/cabinet`);
        }
    } else {
        NoReg.value = true
        console.log(NoReg.value)
    }
}

</script>

<template>

    <main class="mt-30">
        <div class="bg-sky-500 rounded-lg container mx-auto py-5 px-5">
            <div class="text-center">
                <h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white">
                    Все виды комплектующих для ПК</h2>
                <p class="mb-6 text-lg font-normal">На нашем маркетплейсе вы найдете все виды видеокарт для ПК.
                </p>
                <button type="button"
                    class="text-white animate-bounce bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"><a
                        href="#example">Посмотреть</a></button>
                <button type="button"
                    class="text-white animate-bounce bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"><a
                        href="#inShop">В магазин</a></button>
            </div>
        </div>

        <div class="bg-sky-500 rounded-lg container mx-auto py-5 px-5 mt-30">
            <div class="text-center">
                <h2 class="text-6xl mb-8 font-extrabold leading-none tracking-tight text-white" id="example">
                    Популярные товары
                </h2>
                <div class="flex gap-10 flex-wrap justify-center">
                    <div>
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
                            <p>
                                <img class="rounded-t-lg contrast-125" src="public\assets\src\3060.jpg" alt="" />
                            </p>
                            <div class="p-5">
                                <p>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    Видеокарта GigaByte nVidia GeForce RTX 3060 12Gb GV-N3060WF2-12GD rev. 2.0</h5>
                                </p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700"><strong>Графический
                                        процессор</strong>: NVidia GeForce RTX 3060 1777 МГц 8 нм</p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700"><strong>Память</strong>: 12
                                    Гб
                                    GDDR6 15000 МГц 192 бит</p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700"><strong>Интерфейс</strong>:
                                    PCI-E 4.0</p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700"><strong>Питание</strong>:
                                    есть
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
                            <p>
                                <img class="rounded-t-lg contrast-125" src="public\assets\src\4070.jpg" alt="" />
                            </p>
                            <div class="p-5">
                                <p>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    Видеокарта GigaByte nVidia GeForce RTX 4070 12Gb GV-N4070WF3OC-12GD</h5>
                                </p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700"><strong>Графический
                                        процессор</strong>: NVidia GeForce RTX 4070 1920 МГц 5 нм</p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700"><strong>Память</strong>: 12
                                    Гб GDDR6X 21000 МГц 192 бит</p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700"><strong>Интерфейс</strong>:
                                    PCI-E 4.0</p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700"><strong>Питание</strong>:
                                    8 pin
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
                            <p>
                                <img class="rounded-t-lg contrast-100" src="public\assets\src\5060.jpg" alt="" />
                            </p>
                            <div class="p-5">
                                <p>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    Видеокарта Palit nVidia GeForce RTX 5060 Dual 8Gb NE75060019P1-GB2063D</h5>
                                </p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700"><strong>Графический
                                        процессор</strong>: NVidia GeForce RTX 5060 2280 МГц 5 нм</p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700"><strong>Память</strong>: 8
                                    Гб GDDR7 28000 МГц 128 бит</p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700"><strong>Интерфейс</strong>:
                                    PCI-E 5.0</p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700"><strong>Питание</strong>:
                                    8 pin
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="bg-sky-500 rounded-lg container mx-auto py-5 px-5 mt-30">
            <div class="text-center">
                <h2 class="mb-4 text-6xl mb-8 font-extrabold leading-none tracking-tight text-white" id="inShop">Вход и
                    регистрация
                </h2>
                <div class="flex gap-10 flex-wrap justify-center">

                    <div class="text-center bg-white rounded-lg px-5">
                        <h2 class="mb-4 text-4xl mt-4 font-extrabold leading-none tracking-tight text-gray-900">Вход
                        </h2>
                        <form class="max-w-sm mx-auto mb-4" @submit.prevent="login">
                            <div class="mb-5">
                                <label for="Loginemail" class="block mb-2 text-sm font-medium text-gray-900">Электронная
                                    почта</label>
                                <input type="email" id="Loginemail"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="example@gmail.com" required v-model="loginEmail" />
                            </div>
                            <div class="mb-5">
                                <label for="Loginpassword"
                                    class="block mb-2 text-sm font-medium text-gray-900">Пароль</label>
                                <input type="password" id="Loginpassword"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required v-model="loginPassword" />
                            </div>
                            <button type="submit"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Войти</button>
                        </form>
                        <div v-if="NoLogin" class="text-gray-900 mb-5">
                            Неправильная почта или пароль
                        </div>
                    </div>

                    <div class="text-center bg-white rounded-lg px-5">
                        <h2 class="mb-4 text-4xl mt-4 font-extrabold leading-none tracking-tight text-gray-900">
                            Регистрация
                        </h2>
                        <form class="max-w-sm mx-auto mb-4" @submit.prevent="Reg">
                            <div class="mb-5">
                                <label for="Username" class="block mb-2 text-sm font-medium text-gray-900">Имя
                                    пользователя</label>
                                <input type="text" id="Username"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required v-model="name" />
                            </div>
                            <div class="mb-5">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Электронная
                                    почта</label>
                                <input type="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="example@gmail.com" required v-model="regEmail" />
                            </div>
                            <div class="mb-5">
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900">Пароль</label>
                                <input type="password" id="password"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required v-model="regPassword" />
                            </div>
                            <div class="mb-5">
                                <label for="Confirm" class="block mb-2 text-sm font-medium text-gray-900">Подтвердите
                                    пароль</label>
                                <input type="password" id="Confirm"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required v-model="confirmPassword" />
                            </div>
                            <div class="mb-5">
                                <label for="tel" class="block mb-2 text-sm font-medium text-gray-900">Телефон</label>
                                <input type="tel" id="tel"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required v-model="tel" />
                            </div>
                            <button type="submit"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Зарегистрироваться</button>
                        </form>
                        <div v-if="NoReg" class="text-gray-900 mb-5">
                            Пароли не совпадают
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>