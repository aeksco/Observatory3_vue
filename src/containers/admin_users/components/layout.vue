
<template>
  <div class="container">
    <h2>RCOS Developers</h2>
    <Search/>
    <List/>
  </div>
</template>

<!-- // // // //  -->

<script>

import List from './list.vue'
import Search from './search.vue'

export default {
  name: 'layout',
  components: {
    List,
    Search
  }
}
</script>
