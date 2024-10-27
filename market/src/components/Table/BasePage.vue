<script setup lang="ts">
import BaseBoard from './Board/BaseBoard.vue';
import BaseSidebar from './Sidebar/BaseSidebar.vue';
</script>

<template>
    <div class="container">
        <div class="flex gap-4">
            <BaseSidebar class="w-1/4" />
            <BaseBoard class="w-full" />
        </div>
    </div>
</template>