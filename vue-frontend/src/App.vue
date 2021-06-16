<template>
  <div v-show="aboutPage" class="container">
    <Hsong  title="Song Playing Now" />
    <sTasks :tasks="tasks" /> 
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
import Hsong from '@/components/Hsong.vue';
import sTasks from '@/components/sTasks.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hsong,
    sTasks,
    // Tasks,
    // AddTask,
    Footer,
  },
  data() {
    return {
      tasks: [],
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
    async fetchTasks() {
        const res = await fetch('http://localhost:3000/api/v1/queue/');
        const what = await res.json()
        return what
   },
  },
  async created () {
    try {
      this.songCount = await this.fetchTasks()

      //console.log(this.songCount.data.queue);

      for (let index = 0; index < this.songCount.data.queue.length; index++) {
        //console.log(this.songCount.data.queue[index].title,);
          var taskArray = {
              id: index, 
              text: this.songCount.data.queue[index].title,
              //day: 'count = '+this.songCount.data.count[index].count 
          }
          this.tasks.push(taskArray)
      }
      
    } catch (error) {
      console.log(error);
    }
    },
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
