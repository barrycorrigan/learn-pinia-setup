<template>
  <div class="home">
    <Counter />
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount">+</button>
    </div>
    <hr>
    <div>
      The counter is: {{ storeCounter.oddOrEvent }}
    </div>
    <hr>
    <h3>Edit counter: </h3>
    <input type="number" v-model="storeCounter.count" />
  </div>  
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import Counter from '@/components/Counter.vue';

const storeCounter = useCounterStore();
</script>

<style>
.count {
  font-size: 60px;
  margin: 10px;
}

.buttons button {
  font-size: 50px;
  width: 60px;
  height: 60px;
  margin: 10px;
}
</style>