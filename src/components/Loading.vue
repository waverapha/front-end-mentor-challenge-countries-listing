<template>
    <div class="loading-container" v-if="active">
        <loading-spinner :width="`${width}px`"></loading-spinner>
    </div>
</template>

<script>
export default {
    props: {
        active: {
            type: Boolean,
            required: true
        },
        width: {
            type: Number,
            default: 60
        }
    }
}
</script>