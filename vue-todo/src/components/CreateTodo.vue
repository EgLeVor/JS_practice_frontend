<template>
    <section class="create-todo">
        <input v-model="name" type="text" placeholder="Type your task..." />
        <button @click="onCreateTodoClicked">Create</button>
    </section>
</template>
<script>
import { createTodo } from '@/netClient/dataService'

export default {
    name: 'CreateTodo',
    data: () => ({
        name: '',
    }),
    methods: {
        async onCreateTodoClicked() {
            try {
                const newTodo = await createTodo({ title: this.name })
                if (newTodo) {
                    this.name = '';
                }
                this.$emit('todocreated');
            }
            catch (error) {
                console.error({ error })
            }
        },
    },
};
</script>
