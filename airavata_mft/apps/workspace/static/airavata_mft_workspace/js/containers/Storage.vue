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
                                    <a class="dropdown-item" href="#">Name</a>
                                    <a class="dropdown-item" href="#">Size</a>
                                </div>
                            </div>
                        </div>
                        <div class="btn-group mr-4" role="group">
                            <button class="btn btn-sm btn-outline-secondary list"><i class="fa fa-bars"></i></button>
                            <button class="btn btn-sm btn-outline-secondary list"><i class="fa fa-th"></i></button>
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
                        <b-button :href="selectedStorage.storageId">Browse</b-button>
                    </div>
                </b-modal>
                <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Storage size</th>
                      <th scope="col">Storage occupied</th>
                      <th scope="col">Last modified</th>
                    </tr>
                </thead>
                  <tbody>
                    <tr v-for="storage in storageList"
                        :key="storage.storageId" @click="showDescription(storage)">
                      <th scope="row">{{storage.name}}</th>
                      <td>{{storage.size}}</td>
                      <td>
                          <div class="progress storage-progress" style="width: 20%">
                              <!-- TODO: storage value should be picked from storage.occupied -->
                              <div class="progress-bar bg-danger" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                              <div class="progress-bar bg-success" role="progressbar" style="width: 85%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
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
            selectedStorage: this.initialStorageList[0]
        }
    },
    methods: {
        showDescription(unit) {
            this.selectedStorage = unit
            this.$bvModal.show("description-dialog")
        }
    }
}
</script>

<style>
    .new-unit{
        width: 140px;
    }
    .plus-icon{
        padding-right: 15px;
    }
    .list{
        width: 40px;
    }
</style>