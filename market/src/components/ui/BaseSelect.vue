<script setup lang="ts">
import { onMounted } from 'vue';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const value = defineModel<string>()

const props = defineProps<{
    items: string[],
    default?: string,
    preTitle?: string,
}>()

onMounted(() => {
    if (!value.value && props.default || props.items.length) {
        value.value = props.default || props.items[0]
    }
})
</script>

<template>
    <Select v-model="value" class="">
        <SelectTrigger
            class="p-2 flex gap-1 bg-transparent w-auto h-auto border-none rounded-lg text-sm transition-colors focus:ring-0 focus:ring-offset-0 hover:bg-emerald-600 hover:text-white">
            {{ preTitle }}
            <SelectValue />
        </SelectTrigger>
        <SelectContent>
            <SelectItem v-for="item in items" :value="item">
                {{ item }}
            </SelectItem>
        </SelectContent>
    </Select>
</template>