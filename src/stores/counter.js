import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  //state
  
  const count = ref(0);
  
  //actions

  function increaseCount() {
    count.value++;
  }
  
  function decreaseCount() {
    count.value--;
  }

  // getters
  const oddOrEvent = computed(() => {
    if (count.value % 2 === 0) {
      return 'even';
    }
    else {
      return 'odd';
    }
  })

  return {
    // state
    count,

    //actions
    increaseCount,
    decreaseCount,

    //getters
    oddOrEvent
  }
})
