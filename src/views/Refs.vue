//https://www.youtube.com/watch?v=V-kxBWcPJfo
<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }}. My age is {{ age }}</p>
  </div>
  <button @click="handleClick">click me</button>
  <input type="text" v-model="name"/>
  <button @click="age++">Age+1</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "HomeView",
  setup() {
    console.log("setup");
    const p = ref(null)

    const name = ref("Mario")
    const age = ref(30);

    const handleClick = () => {
      console.log(p, p.value)
      // p.value.classList.add('test')
      // p.value.textContent = 'Ninja boys'
      name.value='Luigi',
      age.value=35
    };
    return {
      name,
      age,
      handleClick,
      p,
    };
  },
};
</script>
