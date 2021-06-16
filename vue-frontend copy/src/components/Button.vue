<template>
    <div>
        <!-- v-on:click="onClick()"  -->
        <!-- use class="btn" from global style  -->
        <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
    </div>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: {
                type: String,
                // default: 
            },
            // text: String,
            color: String,
        },
        methods: {
            onClick() {
                console.log('click');
                // this.$emit('toggle-add-task')
                this.$emit('btn-click')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>