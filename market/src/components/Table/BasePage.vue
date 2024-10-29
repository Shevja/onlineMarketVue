<script setup lang="ts">
import BaseBoard from './Board/BaseBoard.vue';
import BaseSidebar from './Sidebar/BaseSidebar.vue';
</script>

<template>
    <section class="pb-12">
        <div class="container px-2 sm:px-10 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div class="flex gap-4">
                <BaseSidebar class="w-1/4 max-lg:hidden" />
                <BaseBoard class="w-full" />
            </div>
        </div>
    </section>
</template>