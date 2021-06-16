<template>
  <div v-show="aboutPage" class="container">
    <h1>Song Playing Now</h1>
  </div>
  <div  class="container">
    <Header  v-show="aboutPage" @toggle-add-task="toggleAddTask" :title="aboutPage? 'Top Play Song':'About'" :showAddTask="showAddTask" />
    <!-- <div v-show="showAddTask"> -->
      <!-- v-if -->
      <!-- <AddTask @add-task="addTask" /> -->
    <!-- </div> -->
    <!-- <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" /> -->
    <router-view :showAddTask="showAddTask"></router-view>
  </div>
    <Footer />
</template>

<script>
import Header from './components/Header';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    // Tasks,
    // AddTask,
    Footer,
  },
  data() {
    return {
      //tasks: [],
      showAddTask: false,
    }
  },
  computed: {
        aboutPage() {
            if (this.$route.path === '/about') {
                return false
            }else {
                return true
            }
            
        }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    // task is newTask from [this.$emit('add-task', newTask)] in AddTask.vue
    // async addTask(task) {
    //   const res = await fetch('api/tasks', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(task)
    //   })
    //   const data = await res.json()
    //   this.tasks = [...this.tasks,data]
    // },
    // async deleteTask(id) {
    // //  console.log('task',id); 
    //   if (confirm('Are you sure you want to delete')) {
    //     const res = await fetch(`api/tasks/${id}`, {
    //       method: 'DELETE'
    //     })
    //     res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)): alert('Error deleting task');
    //     // filter((task)) want anything except this id
    //   }   
    // },
    // async toggleReminder (id) {
    //   const taskToToggle = await this.fetchTask(id)
    //   const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}
    //   const res = await fetch(`api/tasks/${id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(updTask)
    //   })
    //   const data = await res.json()
    //   //console.log('toggle',id);
    //   // each(task) if(task.id = id) {return change reminder to opposite val} else {if not match return task}
      
    //   //console.log(this.tasks[0].id);
    //   //console.log(...this.tasks);
    //   this.tasks = this.tasks.map((task) => task.id === id? {...task, reminder: data.reminder} : task)
    // },
    // async fetchTasks() {
    //   const res = await fetch('api/tasks');
    //   const data = await res.json()
    //   return data
    // },
    // async fetchTask(id) {
    //   const res = await fetch(`api/tasks/${id}`);
    //   const data = await res.json()
    //   return data
    // }
  },
  // async created () {
  //   this.tasks = await this.fetchTasks()
  // },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 1000px;
  margin: 30px auto; /* [top bottom] [lef right] */
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
