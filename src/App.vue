
<template>
  <div id="app">
    <AppNavbar/>
    <router-view class='app'/>
    <AppFooter/>
    <Notification/>
  </div>
</template>

<script>
import AppNavbar from './containers/app_navbar'
import AppFooter from './containers/app_footer'
import Notification from './containers/app_notification'

export default {
  name: 'app',

  // Top-Level Application Components
  components: {
    AppNavbar,
    AppFooter,
    Notification
  },

  // Top-Level page Meta
  metaInfo: {
    title: 'Home', // set a title
    titleTemplate: 'RCOS - %s', // title will always be "RCOS - ..."
    htmlAttrs: {
      lang: 'en'
    }
  }

}
</script>

<style type="text/css">
  body {
    background-color: #f3f3f3;
  }

  .app {
    margin-top: 4rem;
  }
</style>
