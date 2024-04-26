<template>
    <!--Değişkenleri yazdırma-->
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
     <!-Fonksiyon çağırma->
    <p>{{ hiFucntion() }}</p>
     <!--Tek yönlü data binding-->
    v-bind ile link verme
    <a :href="pageLink">{{ pageLink }}</a>
    <!--v-html ile html içeriği gösterme-->
    <div v-html="htmlContent"></div>
    <!--v-once ile bir kere yazdırma-->
    <p v-once>{{ onceContent }}</p>
    <!--v-on ile click eventi-->
    <button @click="clickCount++">Click me</button>
    <p>{{ clickCount }}</p>
    <!--two way data binding-->
    <input type="text" v-model="name">
    <p>{{ name }}</p>
    <!--computed-->
    <p>{{ fullName }}</p>
    <button @click="fullName='Ali'">Change Name</button>
    <br>
    <!--sayaç örneği-->
    <button @click="counter++">arttır</button>
    <button @click="counter--">azalt</button>
    <p>{{ counter }}</p>
    <!--v-bind ile class örneği-->
    <p :class="{ title: true }">Benim classım title</p>
    <!--v-if ile koşul örneği-->
    <div v-if="isShow">
        <p>Ben gösteriliyorum</p>
    </div>
    <div v-else>
        <p>Ben gösterilmiyorum</p>
    </div>
      <!--v-show örneği-->
      <p v-show="isShow">Ben v-show ile gösteriliyorum</p>
    <!--v-for ile döngü örneği-->
    <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <!--ref örneği-->
    <p ref="myRef">{{ myRef }}</p>
    <button @click="myRef='ref örneği değişti'">Change Ref</button>
    <!--component örneği-->
    <Example1 />
    <Example1 />
    <!--yaşam döngüsü örneği-->
    <p>Ben yaşam döngüsü örneğiyim</p>
    <!--props örneği-->
    <ChildComponent :msg="message" />


</template>

<script setup>
import {ref,watchEffect,onMounted,onUnmounted} from 'vue'
import Example1 from './components/Example1.vue';
import ChildComponent from './components/ChildComponent.vue';
//data tanımlamaları
const title = ref('Hello Vue 3');
const description = ref('This is a simple example of Vue 3');
//methods tanımlamaları
const hiFucntion=()=>{
    return 'Hi';
}
//v-bind örneği 
const pageLink = ref('https://www.google.com');
//v-html örneği
const htmlContent = ref('<h1>Ben Html Olarak Gönderildim</h1>');
//V-once örneği
const onceContent = ref('Ben bir kere yazıldım');
//v-on örneği
const clickCount = ref(0);
//two way data binding
const name = ref('');
//computed tanımlamaları
const fullName = ref('Kaan');
//sayaç örneği
const counter = ref(0);
//watcher örneği
watchEffect(() => {
    console.log('counter:', counter.value);
});
//if else örneği
const isShow = ref(true);
//v-for örneği
const items = ref(['item1', 'item2', 'item3']);
//ref örneği
const myRef = ref('ref örneği');
//yaşam döngüsü örneği
onMounted(() => {
    console.log('Component mounted');
});
onUnmounted(() => {
    console.log('Component unmounted');
});
//props örneği
const message = ref('This is a message from parent');
</script>
<style>
.title {
    color: red;
}
</style>