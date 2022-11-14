//https://www.youtube.com/watch?v=V-kxBWcPJfo
<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>

    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watch</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";

export default {
  name: "HomeView",
  setup() {
    const search = ref("");
    const names = ref(["Mario", "Yoshi", "Luigi", "bowser", "koopa", "peach"]);
    const stopwatch = watch(search, () => {
      console.log("watchit");
    });
    //usefull to get data from a db
    const stopeffect = watchEffect(() => {
      console.log("wachteffect", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    const handleClick =() => {
    stopwatch()
    stopeffect()
    }
    return { names, search, matchingNames, handleClick };
  },
};
</script>
