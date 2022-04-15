<template>
	<div class="TopLogoTotal">
		<img class="TopLogoImg" :src="logoSrc" alt="logo"/>
		<div class="TopLogoRight">
			<div class="MessNotice">

			</div>
			<div class="User">

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TopLogo",
		components:{

		},
		data() {
			return {
				logoSrc:""
			};
		},

	}
</script>

<style scoped>

</style>