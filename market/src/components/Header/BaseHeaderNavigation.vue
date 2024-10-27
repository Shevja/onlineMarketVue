<script setup lang="ts">

interface NavLink {
    label: string;
    href: string;
    id?: number;
}

// interface NavLinks {
//     links: NavLink[]
// }

const props = defineProps({
    links: {
        type: Array as () => NavLink[],
        required: true
    }
})
</script>

<template>
    <ul class="flex text-slate-100">
        <li v-for="(link, index) in props.links" :key="link.id ? link.id : index">
            <a :href="link.href" class="flex items-center px-4 min-w-32 h-full font-semibold transition-colors hover:bg-emerald-600">
                {{ link.label }}
            </a>
        </li>
    </ul>
</template>