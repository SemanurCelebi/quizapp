<template>
	<h1 class="text-4xl font-bold text-gray-800 mb-6">Quiz App</h1>
	<div class="min-h-screen flex flex-col items-center bg-gray-100 py-12">
		<div class="flex justify-center items-center w-full">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
				<router-link
						:to="{ name: 'categories' }"
						class="text-lg font-semibold text-gray-800 bg-white p-4 rounded-lg shadow hover:bg-gray-200 transition">
					Click for categories
				</router-link>
			</div>
		</div>
	</div>
</template>


<script>

export default {
	name: 'Home',
	setup() {
		
	},
};
</script>

