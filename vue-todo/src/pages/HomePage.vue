<template>
  <div class="home-page base-page">
      <CreateTodo @todocreated="onTodoCreated" />
      <div class="separator"><hr /></div>
      <ul class="todo-list">
        <li
          v-for="todoItem in todoList"
          :key="todoItem.id"
          class="todo-item"
          :class="{ done: todoItem.isCompleted }"
        >
          <div class="title">
            {{ todoItem.title }}
          </div>
          <div class="actions">
            <input
              type="checkbox"
              class="checkbox"
              :checked="todoItem.isCompleted"
              @input="
                onCheckBoxInput(todoItem.id, todoItem.isCompleted)
              " 
            />
            <button>&#10006;</button>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import CreateTodo from '@/components/CreateTodo';
import { fetchTodoList, patchTodo } from '@/netClient/dataService';
export default {
  name: 'Home',
  components: {
    CreateTodo,
  },
  data: () => ({
      todoList: []
  }),
  created () {
    this.fetchTodoList()
  },
  methods: {
    onTodoCreated() {
      this.fetchTodoList();
    },
    async fetchTodoList() {
      try {
        this.todoList = await fetchTodoList()
      }
      catch(error){
        console.warn({ error })
      }
    },
    async onCheckBoxInput(id, isCompleted){
      try {
        await patchTodo({ id, isCompleted: !isCompleted });
        this.fetchTodoList();
      }
      catch (error) {
        console.error({ error })
      }
    }
  }
};
</script>