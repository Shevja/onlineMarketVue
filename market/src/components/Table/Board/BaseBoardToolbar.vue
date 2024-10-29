<script setup lang="ts">
import BaseSelect from '../../ui/BaseSelect.vue'
import { ref } from 'vue'

const selectValue = ref<string>()

const selectItems = [
    'популярности',
    'цене',
    'оценке',
]
</script>

<template>
    <div class="flex">
        <BaseSelect preTitle="Сортировка по" v-model="selectValue" :items="selectItems" />
    </div>
</template>