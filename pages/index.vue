<template>
  <div>
    <!--------------- Navbar -------------->
    <appNavBar />

    <!--------------- Header -------------->
    <appHeader />

    <!--------------- Main Body Area -------------->
    <div class="main-wrap">

      <!--------------- Team area -------------->
      <AppOrganizer />

    </div>
    <!--------------- Footer -------------->
    <app-footer />

    <a id="to-top" class="to-top" href="#top-header" data-spy="affix" data-offset-top="500">
      <i class="fa fa-chevron-up"></i>
    </a>

  </div>
</template>


<script>
import AppPreLoader from '~/components/AppPreLoader.vue'
import AppNavBar from '~/components/AppNavBar.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppOrganizer from '~/components/AppOrganizer.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppPreLoader,
    AppNavBar,
    AppHeader,
    AppOrganizer,
    AppFooter
  }
}
</script>
