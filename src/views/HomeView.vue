// https://www.youtube.com/watch?v=0FwBjPeLqQ8
<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">error  {{error}}</div>
    <div v-if="posts.length">
      <Postlist :posts="posts" />
    </div>
    <div v-else>Loading ...</div>
    
  </div>
</template>

<script>
import Postlist from "../components/PostList.vue"
import getPosts from "../Composables/getPosts"

export default {
  name: "HomeView",
  components: { Postlist },
  setup() {
    const {posts, error, load} = getPosts()
   load()
    return { posts, error };
  },
};
</script>
