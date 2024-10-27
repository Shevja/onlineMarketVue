<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';

interface MetaInfo {
    name: string,
    price: number,
    color?: string,
    size?: string,
    material?: string,
}

const props = defineProps({
    meta: {
        type: Object as () => MetaInfo,
        required: true,
    }
})

</script>

<template>
    <div class="p-3 bg-black text-white rounded-xl">
        <div class="w-full h-56 pb-4">
            <img src="" alt="" class="w-full h-full rounded-xl bg-neutral-300">
        </div>
        <div>
            <div class="font-bold text-lg border-b border-gray-400 pb-1 mb-2">
                {{ meta.name }}
            </div>

            <div class="border-b border-gray-400 pb-2 mb-4 flex flex-col gap-1 text-sm">
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
                        {{ meta.material || 'Цвет не указан' }}
                    </span>
                </div>
            </div>

            <div class="flex gap-4 items-center justify-between">
                <div class="flex gap-2 items-baseline">
                    <span>
                        Цена:
                    </span>
                    <strong class="text-lg">
                        {{ meta.price }} ₽
                    </strong>
                </div>

                <Button class="bg-emerald-600 font-bold transition-colors hover:bg-emerald-500 active:bg-emerald-700">
                    В корзину
                </Button>
            </div>
        </div>
    </div>
</template>