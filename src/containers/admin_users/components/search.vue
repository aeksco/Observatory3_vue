<template>
  <div class="row pt-3 pb-2">
    <div class="col-lg-8">
      <form class="form-inline pb-3">
        <input class="form-control w-100" type="search" placeholder="Search for a developer">
      </form>
    </div>
    <div class="col-lg-4 text-right">
      <a href='/#/projects/new' class="btn btn-outline-secondary w-100">
        <i class="fa fa-fw fa-backward mr-1"></i>
        Show Past Developers
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search'
  }
</script>
