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
    <header class="pt-2 pb-8">
        <div class="container">
            <div class="px-4 w-full h-11 bg-black flex gap-2 justify-between rounded-xl overflow-hidden">
                <BaseHeaderNavigation :links="links" />
                <BaseHeaderCart />
            </div>
        </div>
    </header>
</template>

<style scoped></style>
