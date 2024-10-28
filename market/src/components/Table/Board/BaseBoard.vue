<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BaseBoardCard from './BaseBoardCard.vue';
import BaseBoardToolbar from './BaseBoardToolbar.vue';
import useGetProducts from '@/services/getProducts';
import { LoaderCircle } from 'lucide-vue-next';

const products = ref(null);
const error = ref(null);

onMounted(async () => {
    [products.value, error.value] = await useGetProducts();
})

</script>

<template>
    <div class="flex gap-3 flex-col">
        <BaseBoardToolbar />

        <div class="relative h-full">
            <div v-if="!products && !error" class="flex h-full justify-center">
                <LoaderCircle class="animate-spin w-14 h-14 text-emerald-600 mt-10" />
            </div>

            <div v-else-if="products" class="grid grid-cols-2 xl:grid-cols-3 gap-4">
                <template v-for="product in products" :key="product.id">
                    <BaseBoardCard :meta="product" />
                </template>
            </div>

            <div v-else class="text-center mt-10 text-lg">
                <span v-if="error === '500'">
                    Ошибка сервера. <br>
                    Попробуйте повторить позже.
                </span>
                <span v-else>
                    Произошла ошибка при загрузке продуктов. Попробуйте повторить позже.
                </span>
            </div>
        </div>
    </div>
</template>