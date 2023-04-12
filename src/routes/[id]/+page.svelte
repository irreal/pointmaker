<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import toast from 'svelte-french-toast';
	export let data: PageData;
	$: justCreated = $page.url.searchParams.get('created') === '1';

	function copyToClipboard(text: string) {
		//clipboard api
		if (navigator.clipboard) {
			navigator.clipboard.writeText(text);
			toast.success('Copied to clipboard');
			return;
		} else {
			toast.error('Clipboard not available, please copy manually');
		}
	}
</script>

<div class="flex flex-col gap-24 justify-center items-center h-full">
	{#if justCreated}
		<div class="flex flex-col gap-4">
			<div class="text-xl text-center">
				<span class="font-bold">Point noted!</span> Your point has been saved. Now share it with the
				world:
			</div>
			<button
				class="bg-gray-100 rounded-md p-2 cursor-pointer"
				on:click={() => copyToClipboard(`https://${data.point.hostname}/${$page.params.id}`)}
			>
				<span class="text-gray-600 font-mono break-all"
					>{`https://${data.point.hostname}/${$page.params.id}`}</span
				>
				<span class="text-gray-400 text-sm ml-2">(click to copy)</span>
			</button>
		</div>
	{/if}
	{#await data.point.promise}
		<h1 class="text-6xl md:text-9xl text-center">Loading a point</h1>
	{:then point}
		<h1 class="text-6xl md:text-9xl text-center">{point.point}</h1>
	{:catch}
		<h1 class="text-6xl md:text-9xl text-center">Point not found :(</h1>
	{/await}
</div>
