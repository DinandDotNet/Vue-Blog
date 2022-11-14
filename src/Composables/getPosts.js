import { ref } from "vue";

const getPosts = () => {

    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch(" http://localhost:3000/posts");
        if(!data.ok){
        console.log(data.ok)
        throw Error('No data')
        }
        posts.value = await data.json()
      } catch (err) {
      //console.log(err)
      error.value = err.message
      console.log(error.value)
      }
    }
    return {posts, error, load}
}

export default getPosts
