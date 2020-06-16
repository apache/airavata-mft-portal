<template>
    <div class="row">
        <div class="col-7">
            <h1 class="h4 mb-4">{{heading}}</h1>
        </div>
        <div class="col-4">
            <div class="btn-toolbar">
                <div class="btn-group mr-4" role="group">
                    <div class="dropdown">
                        <button class="btn btn-sm btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by</button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#" @click="sortBy('name')">Name</a>
                            <a class="dropdown-item" href="#" @click="sortBy('size')">Size</a>
                        </div>
                    </div>
                </div>
                <div class="btn-group mr-4" role="group">
                    <button class="btn btn-sm btn-outline-secondary list"><i class="fa fa-bars" v-on:click="layout = 'list'" v-bind:class="{ 'active': layout == 'list'}"></i></button>
                    <button class="btn btn-sm btn-outline-secondary list"><i class="fa fa-th" v-on:click="layout = 'grid'" v-bind:class="{ 'active': layout == 'grid'}"></i></button>
                </div>
                <div class="btn-group mr-4 new-unit" role="group">
                    <button class="btn btn-info btn-sm"><i class="fa fa-plus plus-icon"></i>Add new unit</button>
                </div>
            </div>
        </div>
        <!-- Dialog box to show description of each storage unit -->
        <b-modal class="modal-dialog modal-dialog-centered" :title="selectedStorage.name" id="description-dialog" hide-footer>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <p v-if="selectedStorage.host"><b>Host</b></p>
                        <p v-if="selectedStorage.port"><b>Port</b></p>
                        <p v-if="selectedStorage.user"><b>User</b></p>
                    </div>
                    <div class="col-6">
                        <p v-if="selectedStorage.host">{{selectedStorage.host}}</p>
                        <p v-if="selectedStorage.port">{{selectedStorage.port}}</p>
                        <p v-if="selectedStorage.user">{{selectedStorage.user}}</p>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <b-button class="btn btn-sm btn-info browse" :href="selectedStorage.storageId">Browse</b-button>
            </div>
        </b-modal>
        <table v-if="layout === 'list'" class="table table-hover main-table " >
        <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Storage size</th>
              <th scope="col">Storage occupied</th>
              <th scope="col">Last modified</th>
            </tr>
        </thead>
          <tbody>
            <tr class="table-item" v-for="storage in storageList"
                :key="storage.storageId" @click="showDescription(storage)">
                <th scope="row"><i class="fa fa-database unit-name-icon" aria-hidden="true"></i>{{storage.name}}</th>
                <td>{{storage.size}}</td>
                <td>
                  <div class="progress storage-progress">
                      <!-- TODO: storage value should be picked from storage.occupied -->
                      <div class="progress-bar red-bar" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                      <div class="progress-bar green-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </td>
                <td>{{storage.lastModified}}</td>
            </tr>
          </tbody>
        </table>
            <div v-if="layout === 'grid'" class="table table-hover main-table " >
                <!-- Icons of respective storages should be should be added  -->
                <ul :style="gridStyle" class="card-list ">
                <li v-for="storage in storageList " v-bind:key="storage.storageId" class="card-item " @click="showDescription(storage)">
                    <br>{{ storage.name }}<br/>
                    <br>{{ storage.size}}<br/>
                </li>
                </ul>
            </div>
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
            selectedStorage: this.initialStorageList[0],
            layout: 'grid',
            numberOfColumns: 3
        }
    },
    computed: {
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.numberOfColumns}, minmax(100px, 1fr))`
      }
    },
    },
    methods: {
        showDescription(unit) {
            this.selectedStorage = unit
            this.$bvModal.show("description-dialog")
        },
        sortBy(prop){
            this.storageList.sort((a,b)=>a[prop] < b[prop] ? -1 : 1)
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