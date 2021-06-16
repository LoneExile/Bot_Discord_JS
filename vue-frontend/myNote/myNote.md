# Vue Crash

## start

```properties
# or [vue ui]
vue create [name]

# then remove
rm src/components/*
```

### app.vue

```javascript
<template>
  <h1>hello world</h1>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### Global Style

add style to app.vue

```javascript
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
  max-width: 500px;
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

```

## Header and Botton

### Header.vue

```properties
touch src/components/Header.vue
```

- import Button
- add to components
- use in template

```javascript
<template>
    <!-- header>h1 -->
    <header>
        <!-- <h1>Task Tacker</h1> -->
        <h1>{{title}}</h1>
        <Button text="Add Task" color="green"/>
				<!-- <Button text="Update Task" color="blue"/> -->
    </header>
</template>

<script>
import Button from '@/components/Button.vue';
//import Button from './Button'

export default {
    name: 'Header',
    // props: ['title'],
    props: {
        title: String,
        // title: {
        //     type: String,
        //     default: 'Hello World'
				// if delete title in app.vue will ues this default
        // }
    },
    components: {
        Button,
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
```

### app.vue

- import Header
- add to components
- use in template

```javascript
<template>
  <div class="container">
  <Header title="Task Tracker"/>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>
```

### Button.vue

```javascript
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
            color: String,
        },
        methods: {
            onClick() {
                console.log('click');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
```

## Tasks.vue

```properties
touch src/components/Tasks.vue
```

### app.vue

add method data() and create()

```javascript
<template>
  <div class="container">
  <Header title="Task Tracker"/>
  <Tasks :tasks="tasks" />
  </div>
</template>

<script>
import Header from './components/Header';
import Tasks from '@/components/Tasks.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
  },
  data() {
    return {
      tasks: []
    }
  },
  created () {
    this.tasks = [
      {
        id: 1,
        text : 'Doctors Appointment',
        day: 'March 1sh at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text : 'Meeting at School',
        day: 'March 3rd at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text : 'Food Shopping',
        day: 'March 3rd at 11:00pm',
        reminder: false,
      },

    ]
  },
}
</script>
```

### Tasks.vue

```javascript
<template>
    <div :key="task.id" v-for="task in tasks">
        <h3>{{task.text}}</h3>
    </div>
</template>

<script>
    export default {
        name: 'Tasks',
        props: {
            tasks: {
                type: Array,
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
```

![](https://github.com/Wolowit/MyNote-VueJS_TaskTracker/blob/main/myNote/Screen%20Shot%202021-06-11%20at%2012.02.55%20PM.png)

## Tasks.vue and Task.vue

### Tasks.vue

```javascript
<template>
    <div :key="task.id" v-for="task in tasks">
    <!-- <h3>{{task.text}}</h3> -->
    <Task :task="task" />
    </div>
</template>

<script>
import Task from '@/components/Task.vue';
    export default {
        name: 'Tasks',
        props: {
            tasks: {
                type: Array,
            },
        },
        components: {
            Task,
        },
    }
</script>

<style lang="scss" scoped>

</style>
```

### Task.vue

add css to task

```javascript
<template>
  <div class="task">
    <h3>{{ task.text }}</h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
      task: {
        type: Object,
      },
    },
  }
</script>

<style scope>
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
```

![[Screen Shot 2021-06-11 at 12.02.55 PM.png]]

## add font icon

### index.html

add font from https://cdnjs.com/ for icon delete
[font-awesome](https://cdnjs.com/libraries/font-awesome)

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  referrerpolicy="no-referrer"
/>
```

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      referrerpolicy="no-referrer"
    />

    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
        properly without JavaScript enabled. Please enable it to
        continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

### Task.vue

add `<i @click="onDelete(task.id)" class="fas fa-times"></i>`

```javascript
<template>
  <div :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
      {{ task.text }}
      <i @click="onDelete(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
      task: {
        type: Object,
      },
    },
    methods: {
      onDelete(id) {
        //console.log(id);
        this.$emit('delete-task', id)
      },
    },
  }
</script>

<style scope>
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.fas {
  color: red;
}
.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
```

## delete Task (mock)

### Task.vue

- add `@click="onDelete(task.id)"` method

```javascript
<template>
  <div :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
      {{ task.text }}
      <i @click="onDelete(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
      task: {
        type: Object,
      },
    },
    methods: {
      onDelete(id) {
        //console.log(id);
        this.$emit('delete-task', id)
      },
    },
  }
</script>
```

### Tasks.vue

- pass method from Task.vue
- `@delete-task="$emit('delete-task',task.id)"`

```javascript
<template>
    <div :key="task.id" v-for="task in tasks">
    <!-- <h3>{{task.text}}</h3> -->
    <Task @delete-task="$emit('delete-task',task.id)" :task="task" />
    </div>
</template>

<script>
import Task from '@/components/Task.vue';
    export default {
        name: 'Tasks',
        props: {
            tasks: {
                type: Array,
            },
        },
        components: {
            Task,
        },
        emits: ['delete-task'],
    }
</script>
```

### app.vue

- add `@delete-task="deleteTask"`
- and add `methods: ...`
- now you can click to delete

```javascript
<template>
  <div class="container">
  <Header title="Task Tracker"/>
  <Tasks @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from './components/Header';
import Tasks from '@/components/Tasks.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    deleteTask(id) {
    //  console.log('task',id);
      if (confirm('Are you sure you want to delete')) {
				// filter((task)) want anything except this id
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    }
  },
  created () {
    this.tasks = [
      {
        id: 1,
        text : 'Doctors Appointment',
        day: 'March 1sh at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text : 'Meeting at School',
        day: 'March 3rd at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text : 'Food Shopping',
        day: 'March 3rd at 11:00pm',
        reminder: false,
      },
    ]
  },
}
</script>
```

## Toggle Reminder

### Task.vue

- add `@dblclick="$emit('toggle-reminder', task.id)"` on div
-

```javascript
<template>
  <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
      {{ task.text }}
      <i @click="$emit('delete-task',task.id)" class="fas fa-times"></i>
      <!-- <i @click="onDelete(task.id)" class="fas fa-times"></i> -->
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
      task: {
        type: Object,
      },
    },
    // methods: {
    //   onDelete(id) {
    //     //console.log(id);
    //     this.$emit('delete-task', id)
    //   },
    // },
  }
</script>
```

### Tasks.vue

- add `@toggle-reminder="$emit('toggle-reminder',task.id)"` on `<Task>`

```javascript
<template>
    <div :key="task.id" v-for="task in tasks">
    <!-- <h3>{{task.text}}</h3> -->
    <Task @toggle-reminder="$emit('toggle-reminder',task.id)" @delete-task="$emit('delete-task',task.id)" :task="task" />
    </div>
</template>

<script>
import Task from '@/components/Task.vue';
    export default {
        name: 'Tasks',
        props: {
            tasks: {
                type: Array,
            },
        },
        components: {
            Task,
        },
        emits: ['delete-task','toggle-reminder'],
    }
</script>

<style lang="scss" scoped>

</style>
```

### app.vue

- add `@toggle-reminder="toggleReminder"`
- and add method `toggleReminder`
- now you can toggle!

```javascript
<template>
  <div class="container">
  <Header title="Task Tracker"/>
  <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from './components/Header';
import Tasks from '@/components/Tasks.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    deleteTask(id) {
    //  console.log('task',id);
      if (confirm('Are you sure you want to delete')) {
        // filter((task)) want anything except this id
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    toggleReminder (id) {
      console.log('toggle',id);
      // each(task) if(task.id = id) {return change reminder to opposite val} else {if not match return task}
      this.tasks = this.tasks.map((task) => task.id === id? {...task, reminder: !task.reminder} : task)
    }
  },

</script>
```

## add Tasks (mock)

```properties
touch src/components/AddTask.vue
```

### AddTask.vue

- `<template>` just normal form
- add `@submit="onSubmit"` on `<form>`
- then add method in `<script>`

```javascript
<template>
    <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <!-- {{text}} -->
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>

    <label class="checkBox ">
      <input class="checkBoxx" type="checkbox" v-model="reminder" name="reminder">
      <label for="" class="message">Remind me</label>
    </label>

    <!-- <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div> -->

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
  export default {
      name: 'AddTask',
      data() {
        return {
          text: '',
          day: '',
          reminder: false,
        }
      },
      methods: {
        // event object (e)
        onSubmit(e) {
          e.preventDefault()
          if(!this.text) {
            alert('Please enter a text')
            return
          }
          const newTask = {
            id: Math.floor(Math.random() * 1000000),
            text: this.text,
            day: this.day,
            reminder: this.reminder,
          }
          console.log(newTask);
          this.$emit('add-task', newTask)

          this.text = ''
          this.day = ''
          this.reminder = false

        }
      },
  }
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  /* [top bottom] [left right] */
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
.checkBox {
  display: flex;
  align-items: center;
  font-size: 17px;
  margin-bottom: 15px;
}
.checkBoxx {
  margin-right: 10px;
}
</style>
```

### app.vue

- import AddTask from AddTask.vue
- add `<AddTask @add-task="addTask" />` in template
- then `method:`

```javascript
<template>
  <div class="container">
  <Header title="Task Tracker"/>
  <AddTask @add-task="addTask" />
  <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from './components/Header';
import Tasks from '@/components/Tasks.vue';
import AddTask from '@/components/AddTask.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
	// task is newTask from \[this.$emit('add-task', newTask)\] in AddTask.vue
    addTask(task) {
      this.tasks = [...this.tasks,task]
    },
    deleteTask(id) {
    //  console.log('task',id);
      if (confirm('Are you sure you want to delete')) {
        // filter((task)) want anything except this id
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    toggleReminder (id) {
      //console.log('toggle',id);
      // each(task) if(task.id = id) {return change reminder to opposite val} else {if not match return task}
      this.tasks = this.tasks.map((task) => task.id === id? {...task, reminder: !task.reminder} : task)
    }
  },
  created () {
    this.tasks = [
      {
        id: 1,
        text : 'Doctors Appointment',
        day: 'March 1sh at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text : 'Meeting at School',
        day: 'March 3rd at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text : 'Food Shopping',
        day: 'March 3rd at 11:00pm',
        reminder: false,
      },
    ]
  },
}
</script>
```

## Toggle Add Task

- make button that can reuseable

### Button.vue

```javascript
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
```

### Header.vue

```javascript
<template>
    <!-- header>h1 -->
    <header>
        <!-- <h1>Task Tacker</h1> -->
        <h1>{{title}}</h1>
        <!-- @toggle-add-task="$emit('toggle-add-task')" -->
        <Button @btn-click="$emit('toggle-add-task')" :text="showAddTask? 'Close':'Add Task'" :color="showAddTask? 'red':'green'"/>
        <!-- <Button text="Update Task" color="blue"/> -->
    </header>
</template>

<script>
import Button from '@/components/Button.vue';
//import Button from './Button'

export default {
    name: 'Header',
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
        Button,
    },
    emits: ['toggle-add-task']
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
```

### app.vue

```javascript
<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" />
    <div v-show="showAddTask">
      <!-- v-if -->
      <AddTask @add-task="addTask" />
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from './components/Header';
import Tasks from '@/components/Tasks.vue';
import AddTask from '@/components/AddTask.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    // task is newTask from [this.$emit('add-task', newTask)] in AddTask.vue
    addTask(task) {
      this.tasks = [...this.tasks,task]
    },
    deleteTask(id) {
    //  console.log('task',id);
      if (confirm('Are you sure you want to delete')) {
        // filter((task)) want anything except this id
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    toggleReminder (id) {
      //console.log('toggle',id);
      // each(task) if(task.id = id) {return change reminder to opposite val} else {if not match return task}
      console.log(this.tasks[0].id);
      console.log(...this.tasks);
      this.tasks = this.tasks.map((task) => task.id === id? {...task, reminder: !task.reminder} : task)
      // if (task.id) {

      // }
    }
  },
  created () {
    this.tasks = [
      {
        id: 1,
        text : 'Doctors Appointment',
        day: 'March 1sh at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text : 'Meeting at School',
        day: 'March 3rd at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text : 'Food Shopping',
        day: 'March 3rd at 11:00pm',
        reminder: false,
      },
    ]
  },
}
</script>

```

## Building For Production

```properties
npm run build

sudo npm i -g serve
serve -s dist
```

## JSON-Server setup

https://www.npmjs.com/package/json-server

```properties
npm i json-server
```

### package.json

```javascript
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "backend": "json-server --watch db.json --port 5000"
  },
```

```properties
npm run backend
npm run server
```

### vue.config.js

```properties
touch vue.config.js
```

- only when run dev

```javascript
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}
```

### app.vue

```javascript
<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" />
    <div v-show="showAddTask">
      <!-- v-if -->
      <AddTask @add-task="addTask" />
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from './components/Header';
import Tasks from '@/components/Tasks.vue';
import AddTask from '@/components/AddTask.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    // task is newTask from [this.$emit('add-task', newTask)] in AddTask.vue
    addTask(task) {
      this.tasks = [...this.tasks,task]
    },
    deleteTask(id) {
    //  console.log('task',id);
      if (confirm('Are you sure you want to delete')) {
        // filter((task)) want anything except this id
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    toggleReminder (id) {
      //console.log('toggle',id);
      // each(task) if(task.id = id) {return change reminder to opposite val} else {if not match return task}
      console.log(this.tasks[0].id);
      console.log(...this.tasks);
      this.tasks = this.tasks.map((task) => task.id === id? {...task, reminder: !task.reminder} : task)
      // if (task.id) {

      // }
    },
//    async fetchTasks() {
//      const res = await fetch('http://localhost:5000/tasks');
//      const data = await res.json()
//
//      return data
//    }
	async fetchTasks() {
      const res = await fetch('api/tasks');
      const data = await res.json()

      return data
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json()
      return data
    }

  },
  async created () {
    this.tasks = await this.fetchTasks()
  },
}
</script>
```

#### Add Task

```javascript
async addTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task)
      })
      const data = await res.json()
      this.tasks = [...this.tasks,data]
    },
```

#### Delete Task

```javascript
async deleteTask(id) {
    //  console.log('task',id);
      if (confirm('Are you sure you want to delete')) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE'
        })
        res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)): alert('Error deleting task');
        // filter((task)) want anything except this id
      }
    },
```

#### Toggle Reminder

```javascript
async toggleReminder (id) {
      const taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}
      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })
      const data = await res.json()
      //console.log('toggle',id);
      // each(task) if(task.id = id) {return change reminder to opposite val} else {if not match return task}

      //console.log(this.tasks[0].id);
      //console.log(...this.tasks);
      this.tasks = this.tasks.map((task) => task.id === id? {...task, reminder: data.reminder} : task)
    },
```

### Footer.vue

```javascript
<template>
    <div>
        <footer>
            <p>Copyright &copy; 2021</p>
            <a href="/about">About</a>
        </footer>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    a {
        color: #333
    }
    footer {
        margin-top: 30px;
        text-align: center;
    }
</style>
```

#### app.vue

```javascript
<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" />
    <div v-show="showAddTask">
      <!-- v-if -->
      <AddTask @add-task="addTask" />
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
  <Footer />
</template>

<script>
import Header from './components/Header';
import Footer from '@/components/Footer.vue';
import Tasks from '@/components/Tasks.vue';
import AddTask from '@/components/AddTask.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
    Footer,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    // task is newTask from [this.$emit('add-task', newTask)] in AddTask.vue
    async addTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task)
      })
      const data = await res.json()
      this.tasks = [...this.tasks,data]
    },
    async deleteTask(id) {
    //  console.log('task',id);
      if (confirm('Are you sure you want to delete')) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE'
        })
        res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)): alert('Error deleting task');
        // filter((task)) want anything except this id
      }
    },
    async toggleReminder (id) {
      const taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}
      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })
      const data = await res.json()
      //console.log('toggle',id);
      // each(task) if(task.id = id) {return change reminder to opposite val} else {if not match return task}

      //console.log(this.tasks[0].id);
      //console.log(...this.tasks);
      this.tasks = this.tasks.map((task) => task.id === id? {...task, reminder: data.reminder} : task)
    },
    async fetchTasks() {
      const res = await fetch('api/tasks');
      const data = await res.json()
      return data
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json()
      return data
    }
  },
  async created () {
    this.tasks = await this.fetchTasks()
  },
}
</script>
```

## Router

```properties
npm i vue-router@next
mkdir src/router src/views
touch src/router/index.js src/router src/views/About.vue

```

### router/index.js

```javascript
import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
```

### views/About.vue

```javascript
<template>
  <div>
    <h3>Version 1.0</h3>
    <router-link to="/">Go back</router-link>
  </div>
</template>
```

### main.js

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')

// createApp(App).mount('#app')
```

### components/Footer.vue

```javascript
<template>
    <div>
        <footer>
            <p>Copyright &copy; 2021</p>
            <!-- <a href="/about">About</a> -->
            <router-link to="/about">About</router-link>
        </footer>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    a {
        color: #333
    }
    footer {
        margin-top: 30px;
        text-align: center;
    }
</style>
```

## Router Home

### router/index.js

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
```

### app.vue

```javascript
<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" />
    <!-- <div v-show="showAddTask"> -->
      <!-- v-if -->
      <!-- <AddTask @add-task="addTask" /> -->
    <!-- </div> -->
    <!-- <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" /> -->
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script>
import Header from './components/Header';
import Footer from '@/components/Footer.vue';
// import Tasks from '@/components/Tasks.vue';
// import AddTask from '@/components/AddTask.vue';

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
  max-width: 500px;
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
```

### views/Home.vue

```javascript
<template>

    <div v-show="showAddTask">
      <!-- v-if -->
      <AddTask @add-task="addTask" />
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />

</template>

<script>
import Tasks from '@/components/Tasks.vue';
import AddTask from '@/components/AddTask.vue';

export default {
    name: 'Home',
    components: {
        Tasks,
        AddTask,
    },
    data() {
        return {
            tasks: [],
        }
    },
    methods: {
    // task is newTask from [this.$emit('add-task', newTask)] in AddTask.vue
        async addTask(task) {
        const res = await fetch('api/tasks', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        })
        const data = await res.json()
        this.tasks = [...this.tasks,data]
        },
        async deleteTask(id) {
        //  console.log('task',id);
        if (confirm('Are you sure you want to delete')) {
            const res = await fetch(`api/tasks/${id}`, {
            method: 'DELETE'
            })
            res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)): alert('Error deleting task');
            // filter((task)) want anything except this id
        }
        },
        async toggleReminder (id) {
        const taskToToggle = await this.fetchTask(id)
        const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}
        const res = await fetch(`api/tasks/${id}`, {
            method: 'PUT',
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })
        const data = await res.json()
        //console.log('toggle',id);
        // each(task) if(task.id = id) {return change reminder to opposite val} else {if not match return task}

        //console.log(this.tasks[0].id);
        //console.log(...this.tasks);
        this.tasks = this.tasks.map((task) => task.id === id? {...task, reminder: data.reminder} : task)
        },
        async fetchTasks() {
        const res = await fetch('api/tasks');
        const data = await res.json()
        return data
        },
        async fetchTask(id) {
        const res = await fetch(`api/tasks/${id}`);
        const data = await res.json()
        return data
        }
    },

    async created () {
        this.tasks = await this.fetchTasks()
    },
}
</script>

<style scoped>

</style>
```

## send val App.vue to Home.vue

### app.vue

```javascript
<router-view :showAddTask="showAddTask"></router-view>
```

### Home.vue

```javascript
props: {
        showAddTask: Boolean,
    },
```

## remove Add Task button on AboutPage

### Header.vue

- add `v-show="homePage"`

```javascript
<Button v-show="homePage" @btn-click="$emit('toggle-add-task')" :text="showAddTask? 'Close':'Add Task'" :color="showAddTask? 'red':'green'"/>
```

```javascript
computed: {
        homePage() {
            if (this.$route.path === '/') {
                return true
            }else {
                return false
            }

        }
    },
```
