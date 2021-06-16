<template>
    <!-- header>h1 -->
    <header>
        <!-- <h1>Task Tacker</h1> -->
        <h1>{{title}}</h1>

        <!-- <Button v-show="homePage" @btn-click="$emit('toggle-add-task')" :text="showAddTask? 'Close':'Add Task'" :color="showAddTask? 'red':'green'"/> -->
        
        <!-- <Button text="Update Task" color="blue"/> -->
    </header>
</template>

<script>
// import Button from '@/components/Button.vue';
//import Button from './Button'

export default {
    name: 'Hsong',
    // props: ['title'],
    props: {
        title: String,
        // title: {
        //     type: String,
        //     default: 'Hello World'
        // }
        showAddTask: Boolean,
    },
    components: {
        // Button,
    },
    emits: ['toggle-add-task'],
    computed: {
        homePage() {
            if (this.$route.path === '/') {
                return true
            }else {
                return false
            }
            
        }
    },
}
</script>

<!-- [scoped] anything in here gona for only this component -->
<style scoped> 
header {
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: bottom 20px;
}
</style>