<template>
    <div>
<Icon :icon="icon" />
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { defineProps } from 'vue';

defineProps({
    icon:String
})

</script>

<style lang="scss" scoped>

</style>