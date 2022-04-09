<template>
	<div class="indexTrainingPro">

		<index-training-pro-caro></index-training-pro-caro>
		<p></p>
	</div>
</template>

<script>
	import IndexTrainingProCaro from "@/components/Carousels/IndexTrainingProCaro";
	export default {
		name: "IndexTrainingPro",
		components: {
			IndexTrainingProCaro,
		}
	}
</script>

<style scoped>
	.indexTrainingPro{
		width: 50%;
		height: 100%;
		position: absolute;
	}
</style>