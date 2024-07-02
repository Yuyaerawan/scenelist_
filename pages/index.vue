<script setup>
import { update } from 'firebase/database';
import { addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore'
const colorMode = useColorMode();
const { $modelsRef } = useNuxtApp();
const todos = useCollection($modelsRef);
const newTodo = ref('')

const todoTask = ref('')
const dueDate = ref('')


console.log(todos);
// const todos = useCollection(collection(db, 'todos'))
async function addData(){
  var data = {
    'name': todoTask.value,
    'due': dueDate.value,
    'done': 0
  }

  if (data) {
      try {
        await addDoc($modelsRef, data);

      } catch (error) {
        console.error('Error writing document: ', error)
      }
      todoTask = ''
      dueDate = ''
    } 
};

async function removeTodo(id){
  try {
    // console.log(id)
    const docRef = await doc($modelsRef, id)
    await deleteDoc(docRef)
  } catch (error) {
    console.error('Error delete document: ', error)
  } 
}

async function doneTodo(id){
  try {
    console.log(id)
    const docRef = await doc($modelsRef, id)
    var data = {
      'done': 1
    }
    await updateDoc(docRef, data)
  } catch (error) {
    console.error('Error update document: ', error)
  } 
}

</script>


<template >
  <div class="bg-gray-50">
    <h1 class="text-3xl font-bold underline">
        Todo App
      </h1>
      <label>New ToDo </label>
    <form @submit.prevent="addData()">
     <input v-model="todoTask" name="todoTask" autocomplete="off" />
     <input type="date" v-model="dueDate" name="dueDate">
     <button>Add ToDo</button>
     </form>
    <div class="playground container mx-auto flex mb-4">
      <div class="tasks bg-sky-500 opacity-30">
        <div class="task" v-for="(todo, index) in todos" :key="index">
          <span  @click="doneTodo(todo.id)" class="mr-10">{{ todo.name }} due: {{ todo.due }} status:{{ todo.done }} </span>
          <button class="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="removeTodo(todo.id)">Remove</button>
        </div>
      </div>
    </div>
  </div>
  </template>
  
