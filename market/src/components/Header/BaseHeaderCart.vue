<script setup lang="ts">
import { ShoppingCart } from 'lucide-vue-next'
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const totalPrice = computed(() => store.getters.getTotalPrice)

</script>

<template>
    <a href="#" class="transition-colors hover:bg-emerald-600">
        <div class="flex items-center text-white h-full">
            <div class="px-3 font-semibold">
                {{ totalPrice }} ₽
            </div>
            <div class="w-12 h-full flex justify-center items-center transition-colors text-white">
                <ShoppingCart class="w-6 h-6 text-white" />
                {{ store.state.cart.items.length }}
            </div>
        </div>
    </a>
</template>