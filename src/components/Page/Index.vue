<template>
  <a-button>Add</a-button>
</template>

<script>
  import { Button } from 'ant-design-vue';
  const ButtonGroup = Button.Group;
	export default {
		name: "Index",
    components: {
      AButton: Button,
      AButtonGroup: ButtonGroup,
    },
	}

</script>

<style scoped>

</style>
