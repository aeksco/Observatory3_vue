
<template>
  <div class="container">

    <PageHeader title="Developers"/>

    <div class="row">
      <div class="col-lg-12">
        <Search :collection="collection"/>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <Pagination :collection="collection"/>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <List :collection="collection"/>
      </div>
    </div>


  </div>
</template>

<!-- // // // //  -->

<script>
import Search from './search.vue'
import Pagination from './pagination.vue'
import List from './list.vue'

export default {
  props: ['collection'],
  components: {
    Search,
    Pagination,
    List
  }
}
</script>


