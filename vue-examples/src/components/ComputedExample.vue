<template>
      <h1>Example</h1>
      <p>Typewriters left in storage: {{ typeWriters }}</p>
      <button @click="remove">Remove a typewriter</button>
      <p>{{ storageComment }}</p>

</template>

<script setup>
  import { ref, computed,watchEffect } from 'vue'

  const typeWriters = ref(10);

  function remove(){
    if(typeWriters.value>0){
      typeWriters.value--;
    }
  }


  const storageComment = computed(
    function(){
      if(typeWriters.value > 5) {
        return "Many left"
      }
      else if(typeWriters.value > 0){
        return "Very few left"
      }
      else {
        return "No typewriters left"
      }
    }
  );
  watchEffect(() => {
    console.log('counter:', typeWriters.value>0);
  });

</script>    