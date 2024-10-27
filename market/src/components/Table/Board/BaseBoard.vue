<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BaseBoardCard from './BaseBoardCard.vue';
import BaseBoardToolbar from './BaseBoardToolbar.vue';
import useGetProducts from '@/services/getProducts';

const products = ref(null);

onMounted(async () => {
    products.value = await useGetProducts();
    console.log(products.value);
})

</script>

<template>
    <div class="flex gap-3 flex-col">
        <BaseBoardToolbar />
        <div class="grid grid-cols-3 gap-4">
            <template v-for="product in products" :key="product.id">
                <BaseBoardCard :meta="product" />
            </template>
        </div>
    </div>
</template>