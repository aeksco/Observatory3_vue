
<template>
  <div class="container">
    <PageHeader title="Blog" />

    <div class="row">
      <div class="col-lg-12">

        <!-- Fetching -->
        <!-- TODO - this should be a component -->
        <p class='lead' v-if="fetching">
          <i class="fa fa-2x fa-spin fa-spinner"></i>
        </p>

        <!-- EmptyView -->
        <!-- TODO - abstract into ListView -->
        <p class='lead' v-if="!collection[0]">
          EMPTY
        </p>

        <!-- ListView -->
        <ListView :collection="collection"/>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import ListView from './list.vue'
import store from '@/store'

export default {
  props: ['collection'],
  computed: {
    fetching () {
      return store.getters['post/fetching']
    }
  },
  components: {
    ListView
  }
}
</script>


