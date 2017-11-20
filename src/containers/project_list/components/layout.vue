<template>
  <div class="container">

    <PageHeader title="Projects"/>

    <div class="row">
      <div class="col-lg-12">
        <ProjectSearch/>
      </div>
    </div>

  	<div class="row">
      <div class="col-lg-9">
  			<ListView :collection="collection"/>
  		</div>

      <div class="col-lg-3">
        <ProjectPinned/>
      </div>

  	</div>
  </div>
</template>

<!-- // // // //  -->

<script>
import store from '@/store'
import ListView from './list.vue'
import ProjectSearch from './search.vue'
import ProjectPinned from './pinned.vue'

export default {
  props: ['collection'],
  computed: {
    fetching () {
      return store.getters['project/fetching']
    }
  },
  components: {
    ListView,
    ProjectSearch,
    ProjectPinned
  }
}
</script>


