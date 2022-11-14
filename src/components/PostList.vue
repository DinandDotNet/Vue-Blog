<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <!-- <h3>{{ post.title }}</h3> -->
      <SinglePost :post="post"></SinglePost>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    //   console.log(props.posts)
    onMounted(() => console.log("mounted"));
    onUnmounted(() => console.log("unmounted"));
    onUpdated(() => console.log("updated"));
  },
  mounted() {
    console.log("using options api");
  },
};
</script>

<style></style>
