<template>
	<div class="row">
		<div class="col-7">
			<h1 class="h4 mb-4">{{heading}}</h1>
            <h1 class="h4 mb-4">{{initial}}</h1>
            <h1 class="h4 mb-4">{{final}}</h1>
		</div>
	</div>
</template>
<script>
    export default {
        name: "FileTransfer",
        props: ["initialList", "finalList","title"],
        data: function(){
            return {
                initial: this.initialList,
                final:this.finalList,
                heading: this.title
            }
        }
    }

</script>
<style scoped>

</style>