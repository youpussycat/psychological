<template>
    <div class="TopLogoOut">
      <canvas class="TopLogocls"></canvas>

    </div>

</template>

<script>
  export default {
    name: "TopLogo",
    methods: {


    }

  }



</script>

<style scoped>
  .TopLogoOut {
    position: absolute;
    width: 100%;
    height: 100%;
    margin-left: -1%;
    margin-top: -1%;
  }
  .TopLogocls{
    position:inherit;
    top: 2%;
    left: 1%;
    display: inline-block;
    width: 455px;
    height: 76px;
  }
</style>
