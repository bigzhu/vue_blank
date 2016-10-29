<template>
<div>
  <navigation></navigation>
  </div>
</template>

<script>
  import Navigation from './Navigation'
  export default {
    props: [],
    components: {
      Navigation
    },
    data: function () {
      return {
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        // code that assumes this.$el is in-document
      })
    },
    methods: {
    }
  }
</script>

<style>
</style>
