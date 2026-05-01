<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const todos = ref([]);
const newTodo = ref('');

async function getTodo() {
  const { data, error, status, statusText } = await supabase
    .from('todo')
    .select()
    .order('id', { ascending: true });

  if (error) {
    console.log('狀態碼:', status); // 看看是不是 403
    console.log('錯誤訊息:', error.message);
    console.log('錯誤細節 (Hint):', error.hint); // 👈 這個 Hint 通常會給出很有用的線索
  } else {
    console.log('成功！資料長度：', data.length);
    todos.value = data
  }
}

onMounted(() => {
  getTodo()
})

const addTodo = async () => {
  if (!newTodo.value.trim()) return;
  console.log(newTodo.value);

  const { error } = await supabase
    .from('todo')
    .insert([{ name: newTodo.value }])
    .select();

  if (error) {
    console.log(error.message);
  } else {
    console.log("成功");
    newTodo.value = '';
    await getTodo()
  }
}

const handleEdit = (todo) => {
  todo.isEditing = !todo.isEditing
}

const handleComplete = async (todo) => {
  const { data, error } = await supabase
    .from('todo')
    .update({ name: todo.name })
    .eq('id', todo.id)
    .select()

  if (error) {
    console.error('更新失敗：', error.message);
    alert('儲存失敗，請稍後再試！');
  } else {
    console.log('更新成功：', data);
    // 3. 成功後才關閉編輯模式
    todo.isEditing = false;
  }
};

const handleCancel = (todo) => {
  todo.isEditing = false;
}

const handleDelete = async (todo) => {
  if (!confirm(`確定要刪除「${todo.name}」嗎？`)) return;
  const { data, error } = await supabase
    .from('todo')
    .delete()
    .eq('id', todo.id)
    .select()

  if (error) {
    console.error('刪除失敗：', error.message);
    alert('刪除失敗！');
  } else {
    console.log('刪除成功：', data);
    await getTodo();
  }
}
</script>

<template>
  <div class="bg-blue-200 flex flex-col items-center justify-center w-96 m-auto py-4">
    <h1 class="text-3xl">代辦清單</h1>
    <ul class="flex flex-col w-full gap-2">
      <li v-for="todo in todos" :key="todo.id">
        <div v-if="!todo.isEditing" class="border-2 rounded-md bg-white flex justify-between">
          <!-- <p>{{ todo.id }}</p> -->
          <h4>{{ todo.name }}</h4>
          <div>
            <button @click="handleEdit(todo)" class="bg-lime-400 p-1 rounded-md">修改</button>
            <button @click="handleDelete(todo)" class="bg-red-300 p-1 rounded-md">刪除</button>
          </div>
        </div>
        <div v-else>
          <input type="text" v-model="todo.name" class="text-lg border bg-white rounded-md">
          <button v-if="todo.isEditing" @click="handleComplete(todo)" class="bg-lime-400 p-1 rounded-md">儲存</button>
          <button @click="handleCancel(todo)" class="bg-red-300 p-1 rounded-md">取消</button>
        </div>
      </li>
    </ul>
  </div>

  <input type="text" placeholder="請輸入" v-model="newTodo" class="text-2xl border-2">
  <button @click="addTodo" class="p-1 rounded-md bg-amber-200">送出</button>

</template>