<template>
<div class="container-fluid">
  <app-header></app-header>
      <div class="row">
      <div class="col-sm-12">
      <router-view></router-view>
      </div>
      </div>
</div>

</template>

<script>
import Header from './components/Header.vue';
export default {
  data() {
    return {
    }
  },
  components: {
    'app-header': Header
  }
}
</script>

<style>

</style>
