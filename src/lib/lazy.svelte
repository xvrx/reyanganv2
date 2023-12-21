
<script>
	export let condition = false;
	export let component;
	let loading;
	function load() {
		loading = component();
	}

	$: if (condition) {
		load();
	}
	
</script>

<!-- using specifically $$restProps is not recommended, please make sure every props name exported are unique -->
{#if condition}
	{#await loading then { default: Component  }}
		<Component {...$$restProps}/>
	{/await}
{/if}
