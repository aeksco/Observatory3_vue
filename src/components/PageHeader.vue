<template>
  <div class="row">
    <div class="col-lg-12">
      <h3>{{ title }}</h3>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: [ 'title' ]
}
</script>
