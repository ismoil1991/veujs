<template>
  <div>
    <app-headr></app-headr>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlogs.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import headr from './components/headr.vue';

export default {
  components:{
    'show-blogs':showBlogs,
    'app-headr':headr
  },
  data() {
    return {
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
body{
  margin:0;
  font-family: 'Nunito SemiBold';
}
</style>