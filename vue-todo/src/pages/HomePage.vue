<template>
  <div id="home">
    <section class="create-todo">
      <input type="text" placeholder="Название дела">
      <button>Создать</button>
    </section>
    <section class="todo-list">
      <h1>TODOLIST</h1>
      <ul>
        <li v-for="todoItem in todoList" :key="todoItem.id">
           {{todoItem}} 
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { fetchTodoList } from '@/netClient/dataService';
export default {
    
    name: 'HomePage',
    data: () => ({
        todoList: [],
    }),
    created() {
        this.fetchTodoList();
    },
    methods: {
        async fetchTodoList() {
            try {
                this.todoList = await fetchTodoList();
            } catch(error) {
                console.error({ error })
            }
        },
    },
};
</script>