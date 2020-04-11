<template>
    <div id="storage">
        <div class="container-fluid">
        <div class="row">
            <div class="col-8">
                <h1 class="h4 mb-4">Storage Units</h1>
            </div>
            <div class="col-1">
                 <div class="dropdown">
                      <button class="btn btn-sm btn-secondary dropdown-toggle" style="background: white;color: grey" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort by
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                      </div>
                </div>
            </div>
           <div class="col-1">

           </div>
            <div class="col-2">
                <button class="btn btn-sm"><span data-feather="plus"></span> Add new unit</button>
            </div>
        </div>
              <!--
                  <div class="btn-group btn-group-sm" role="group" aria-label="view">
                      <button class="btn-sm btn-primary"></button>
                       <button class="btn-sm btn-primary"></button>
                  </div>
                  <button class="btn-sm btn-primary"> Add new unit</button> -->

          <table class="table table-hover">
            <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Storage size</th>
                  <th scope="col">Storage occupied</th>
                  <th scope="col">Last modified</th>
                </tr>
            </thead>
              <!--- This should be removed -->
              <tbody>
                <tr>
                  <th scope="row">Box </th>
                  <td>15 GB</td>
                  <td>
                      <div class="progress storage-progress" style="width: 20%">
                          <div class="progress-bar bg-danger" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                          <div class="progress-bar bg-success" role="progressbar" style="width: 85%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </td>
                  <td>Jan 15, 2020</td>
                </tr>
                <tr>
                  <th scope="row">Box </th>
                  <td>15 GB</td>
                  <td>
                      <div class="progress storage-progress" style="width: 20%">
                          <div class="progress-bar bg-danger" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                          <div class="progress-bar bg-success" role="progressbar" style="width: 85%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                      </div></td>
                  <td>Jan 15, 2020</td>
                </tr>
                <tr>
                  <th scope="row">Box </th>
                  <td>15 GB</td>
                  <td>
                                            <div class="progress storage-progress" style="width: 20%">
                          <div class="progress-bar bg-danger" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                          <div class="progress-bar bg-success" role="progressbar" style="width: 85%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </td>
                  <td>Jan 15, 2020</td>
                </tr>

              </tbody>
            </table>
      </div>
    </div>
</template>

<script>
export default {
    name: 'storage',
}
</script>

<style>

</style>