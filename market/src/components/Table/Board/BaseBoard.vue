<script setup lang="ts">
import BaseBoardCard from './BaseBoardCard.vue';
import BaseBoardToolbar from './BaseBoardToolbar.vue';

const meta = {
    name: 'Card Title',
    color: 'Зеленый',
    size: 'XL',
    material: 'Сталь',
    price: 1000,
}

</script>

<template>
    <div class="flex gap-3 flex-col">
        <BaseBoardToolbar />
        <div class="grid grid-cols-3 gap-4">
            <BaseBoardCard :meta="meta" />
        </div>
    </div>
</template>