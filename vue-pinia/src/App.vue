<template>
<p>{{ counterStore.count }}</p>
<button @click="counterStore.increment">Increment</button>
<button @click="counterStore.decrement">Decrement</button>
<p>Double count is {{ counterStore.doubleCount }}</p>
<p>doubleCountPlusOn {{ counterStore.doubleCountPlusOne }}</p>
<p>triple count {{ counterStore.tripleCount }}</p>
</template>

<script setup>
import {useCounterStore} from './stores/store' // store import ediyoruz.
const counterStore = useCounterStore(); // store'u kullanıma hazır hale getiriyoruz.
counterStore.increment(); // store'daki increment fonksiyonunu çağırıyoruz.
counterStore.decrement(); // store'daki decrement fonksiyonunu çağırıyoruz.
const kaan="kaan";



</script>