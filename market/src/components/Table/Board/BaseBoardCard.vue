<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

interface MetaInfo {
    id: number,
    name: string,
    price: number,
    description: string,
    category: string,
    stock: number,
    color: string,
    size: string,
    material: string
}

const props = defineProps<{ meta: MetaInfo }>()

const store = useStore();
const cartItems = computed<MetaInfo[]>(() => store.getters.getItemsFromCart);
const itemInCart = computed(() => cartItems.value.find(item => item.id === props.meta.id));

function addToCart() {
    store.dispatch('addItemToCart', props.meta)
}

function removeFromCart() {
    store.dispatch('removeItemFromCart', props.meta)
}

</script>

<template>
    <div class="border text-slate-950 rounded-xl overflow-hidden">
        <div class="w-full h-56">
            <img src="" alt="" class="w-full h-full bg-neutral-300">
        </div>
        <div class="p-3">
            <div class="font-bold text-lg border-b border-gray-400 pb-2.5 mb-2">
                {{ meta.name }}
            </div>

            <div class="border-b border-gray-400 pb-2.5 mb-3 flex flex-col gap-1 text-sm">
                <div class="flex gap-2 justify-between">
                    <span>
                        Цвет:
                    </span>
                    <span>
                        {{ meta.color || 'Цвет не указан' }}
                    </span>
                </div>
                <div class="flex gap-2 justify-between">
                    <span>
                        Размер:
                    </span>
                    <span>
                        {{ meta.size || 'Цвет не указан' }}
                    </span>
                </div>
                <div class="flex gap-2 justify-between">
                    <span>
                        Материал:
                    </span>
                    <span>
                        {{ meta.material || 'Материал не указан' }}
                    </span>
                </div>
            </div>

            <div class="flex flex-col flex-wrap gap-2 justify-between">
                <div class="flex justify-between gap-2 items-baseline">
                    <span class="text-sm">
                        Цена:
                    </span>
                    <strong class="text-lg">
                        {{ meta.price }} ₽
                    </strong>
                </div>

                <div v-if="itemInCart" class="flex gap-2">
                    <Button @click="removeFromCart"
                        class="bg-red-300 font-bold transition-colors hover:bg-red-500 active:bg-slate-500">
                        Убрать
                    </Button>

                    <Button @click=""
                        class="w-full bg-sky-500 font-bold transition-colors hover:bg-sky-600 active:bg-sky-600">
                        К оплате
                    </Button>
                </div>

                <Button v-else @click="addToCart"
                    class="bg-emerald-500 font-bold transition-colors hover:bg-emerald-600 active:bg-emerald-600">
                    Добавить в корзину
                </Button>
            </div>
        </div>
    </div>
</template>