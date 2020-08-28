<template>
	<div class="row">
		<div class="col-7">
			<h1 class="h4 mb-4">{{heading}}</h1>
		</div>
		<table class="table table-hover main-table">
			<thead>
				<tr>
					<th scope="col">Initial Storage</th>
					<th scope="col">Final Storage</th>
					<th scope="col">Size</th>
					<th scope="col">File Name</th>
					<th scope="col">Transfer Date</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="resource in transfers"
                        :key="resource.transferId">
					<th scope="row">
{{resource.Initialstorage}}
					</th>
					<th>{{resource.Finalstorage}}</th>
					<th>{{resource.Size}}</th>
					<th>{{resource.FileName}}</th>
					<td>{{resource.TransferDate}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
    export default {
        name: "Transfers.vue",
        props: ["transfersList", "title"],
        data: function(){
            return {
                transfers: this.transfersList,
                heading: this.title
            }
        }
    }

</script>
<style scoped>
    .main-table{
        width: 83%!important;
    }
</style>