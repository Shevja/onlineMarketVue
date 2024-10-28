<script setup lang="ts">
import { ref } from 'vue';
import BaseHeaderNavigation from './BaseHeaderNavigation.vue';
import BaseHeaderCart from './BaseHeaderCart.vue';

const links = ref([
    { id: 0, label: 'Главная', href: '/' },
    { id: 1, label: 'Футболки', href: '/' },
    { id: 2, label: 'Штаны', href: '/' },
    { id: 3, label: 'Обувь', href: '/' },
])
</script>

<template>
    <header class="pt-2 pb-8 sticky top-0">
        <div class="container px-2 sm:px-10 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div class="px-4 w-full h-11 bg-slate-950 flex gap-2 justify-between rounded-xl overflow-hidden">
                <BaseHeaderNavigation :links="links" />
                <BaseHeaderCart />
            </div>
        </div>
    </header>
</template>

<style scoped></style>
