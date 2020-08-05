<template>
	<div class="row">
		<div class="col-7">
			<h1 class="h4 mb-4">Storage Unit >{{heading}}</h1>
		</div>
		<div class="col-4">
			<div class="btn-toolbar">
				<div class="btn-group mr-4" role="group">
					<div class="dropdown">
						<button class="btn btn-sm btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by</button>
						<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item" href="#" @click="sortBy('name')">Name</a>
							<a class="dropdown-item" href="#" @click="sortBy('size')">Size</a>
							<a class="dropdown-item" href="#" @click="sortDateBy('lastModified')">Last Modified</a>
						</div>
					</div>
				</div>
				<div class="btn-group mr-4" role="group">
					<button class="btn btn-sm btn-outline-secondary list">
						<i class="fa fa-bars"></i>
					</button>
					<button class="btn btn-sm btn-outline-secondary list">
						<i class="fa fa-th"></i>
					</button>
				</div>
			</div>
		</div>
		<table class="table table-hover main-table">
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Size</th>
					<th scope="col">Last Modified</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="resource in resources"
                        :key="resource.resourceId">
					<th scope="row">
						<i class="fa fa-folder resource-name-icon"></i>
{{resource.name}}
					</th>
					<td>{{resource.size}}</td>
					<td>{{resource.lastModified}}</td>
					<td>
						<b-button class="btn btn-info btn-sm transfer">Transfer</b-button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
    export default {
        name: "StorageResources.vue",
        props: ["resourcesList", "title"],
        data: function(){
            return {
                resources: this.resourcesList,
                heading: this.title
            }
        },
        methods:{
		sortDateBy(prop){
            this.resourcesList.sort((a,b)=>a[prop] > b[prop] ? -1 : 1)
        },
        sortBy(prop){
            this.resources.sort((a,b)=>a[prop] < b[prop] ? -1 : 1)
        }
    }
    }

</script>
<style scoped>
    .main-table{
        width: 83%!important;
    }
    .transfer {
        width: 45%;
    }
    .resource-name-icon{
        padding-right: 3%;
        font-size:smaller;
    }
</style>