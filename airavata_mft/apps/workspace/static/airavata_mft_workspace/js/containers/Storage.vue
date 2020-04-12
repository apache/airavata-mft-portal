<template>
    <div id="storage">
        <div class="container">
        <div class="row">
            <div class="col-8">
                <h1 class="h4 mb-4">Storage Units</h1>
            </div>
            <!-- Add buttons here -->
        </div>
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
                :key="storage.storageList">
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
    </div>
</template>

<script>
    //TODO: implement pagination
export default {
    name: 'storage',
    props: ["initialStorageList"],
    data: function(){
        return {
            storageList: this.initialStorageList
        }
    }
}
</script>

<style>

</style>