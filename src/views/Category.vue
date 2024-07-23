<template>
	<div>
		<h1>Category {{ categoryId }}</h1>
		<!-- Category detail -->
	</div>
</template>

<script>
export default {
	name: 'Category',
	computed: {
		categoryId() {
			return this.$route.params.id
		}
	}
}
</script>

