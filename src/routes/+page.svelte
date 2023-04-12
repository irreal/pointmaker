<script lang="ts">
	let point: string;
</script>

<form method="post" class="flex flex-col gap-4 justify-center items-center h-full px-12">
	<label for="point" class="text-2xl sm:text-4xl lg:text-6xl mb-2">What's your point?</label>
	<input
		name="point"
		id="point"
		type="text"
		placeholder="Your point here"
		bind:value={point}
		class="border-b border-black mb-2 py-2 text-xl md:text-4xl lg:text-4xl"
	/>
	<input
		type="submit"
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		value="Submit"
	/>
</form>
