<script setup>
definePageMeta({
    middleware: ["auth"]
});
</script>

<template>
    <main class="text-center">
        <h1 class="mb-4 text-8xl font-extrabold leading-none tracking-tight text-gray-900">
            Магазин</h1>
        <div class="ms-50">
            <div class="container flex mt-10 gap-7">
                <div>
                    <div class="max-w-sm bg-white border border-gray-700 rounded-lg shadow-sm">
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
                    <div class="max-w-sm bg-white border border-gray-700 rounded-lg shadow-sm">
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

                <div>
                    <div class="max-w-sm bg-white border border-gray-700 rounded-lg shadow-sm">
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
            </div>
        </div>
    </main>
</template>