<template>
  <div class="">{{articleList}}</div>
</template>
<script>
import { mapState} from 'vuex';
import articleStoreModule from '@/store/modules/article';
export default {
  name: 'home',
  asyncData ({ store, route }) {
    store.registerModule('article', articleStoreModule);
    return store.dispatch('article/getArticleList');
  },
  // 重要信息：当多次访问路由时，避免在客户端重复注册模块。
  destroyed(){
    this.$store.unregisterModule('article', articleStoreModule);
  },
  computed: {
    ...mapState('article', ['articleList'])
  }
};
</script>
<style scoped lang="scss"></style>
