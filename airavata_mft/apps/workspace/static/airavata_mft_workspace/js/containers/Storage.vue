<template>
	<div class="row">
		<div class="col-7">
			<h1 class="h4 mb-4">{{heading}}</h1>
		</div>
		<div class="col-4">
			<div class="btn-toolbar">
				<div class="btn-group mr-4 new-unit" role="group" >
                    <a v-bind:href="newunit">
					<button class="btn btn-info btn-sm" >
						<i class="fa fa-plus plus-icon"></i>Add new unit
					</button>
                    </a>
				</div>
				<div class="btn-group mr-4 new-unit" role="group" >
                    <a v-bind:href="filetransfer">
					<button class="btn btn-info btn-sm">
						<i class="fa fa-exchange fa-exchange"></i> Inititate Transfer
					</button>
                    </a>
				</div>
			</div>
		</div>
		<table  class="table table-hover main-table " >
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Type</th>
					<th scope="col">Owned By</th>
					<th scope="col">Created</th>
				</tr>
			</thead>
			<tbody>
				<tr class="table-item" v-for="storage in storageList"
                :key="storage.storageId">
					<th scope="row">
						<i class="fa fa-database unit-name-icon" aria-hidden="true"></i>{{storage.name}}
					</th>
					<td>{{storage.type}}</td>
					<td>
						{{storage.owner}}
					</td>
					<td>{{storage.lastModified}}</td>
				</tr>
			</tbody>
		</table>
			</div>
		</template>
		<script>
    //TODO: implement pagination
export default {
    name: 'storage',
    props: ["initialStorageList", "title"],
    data: function(){
        return {
            storageList: this.initialStorageList,
            heading: this.title,
            newunit:"newunit",
            filetransfer:"filetransfer"

        }
    }
}

		</script>
		<style scoped>
    .new-unit{
        width: 140px;
    }
    .plus-icon{
        padding-right: 15px;
    }
    .list{
        width: 40px;
    }
    .main-table{
        width: 83%!important;
    }
    .unit-name-icon{
        padding-right: 5%;
        font-size:smaller;
    }
    .browse{
        width: 25%;
        height: 85%;
    }
    .green-bar{
        background-color: #50c878;
        width: 70%;
    }
    .red-bar{
        background-color: #cd5c5c;
        width: 30%;
    }
    .storage-progress{
        width: 20%;
        height: 50%;
    }
    .table-item{
        cursor: pointer;
    }
    .card-list {
  display: grid;
  list-style-type: none;
    }
    .card-item {
  padding: 2em;
    }
</style>