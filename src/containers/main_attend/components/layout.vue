<template>
  <div class="container pt-3">

    <PageHeader title='Attendance History'/>

    <div class="row">
      <div class="col-lg-12">
        <CodeInput/>
      </div>
    </div>


    <TableHeader/>

    <Explore/>
  </div>
</template>

<!-- // // // //  -->

<script>
import CodeInput from './input.vue'
import TableHeader from './table_header'
import Explore from './explore.vue'

export default {
  name: 'layout',
  components: {
    CodeInput,
    TableHeader,
    Explore
  }
}
</script>


