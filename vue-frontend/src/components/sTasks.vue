<template>
    <div :key="task.id" v-for="task in tasks">
    <!-- <h3>{{task.text}}</h3> -->
    <sTask @toggle-reminder="$emit('toggle-reminder',task.id)" @delete-task="$emit('delete-task',task.id)" :task="task" />
    </div>
</template>

<script>
import sTask from '@/components/sTask.vue';
    export default {
        name: 'sTasks',
        props: {
            tasks: {
                type: Array,
            },
        },
        components: {
            sTask,
        },
        emits: ['delete-task','toggle-reminder'],
    }
</script>

<style lang="scss" scoped>

</style>