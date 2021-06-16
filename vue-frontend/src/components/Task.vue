<template>
<!-- @dblclick="$emit('toggle-reminder', task.id)" -->
  <div  :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
      {{ task.text }}
      <!-- <i @click="$emit('delete-task',task.id)" class="fas fa-times"></i> -->
      
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