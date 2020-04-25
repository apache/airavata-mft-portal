<template>
    <div class="container">
    <div class="row">
        <div class="col-8">
            <h1 class="h4 mb-4">{{heading}}</h1>
        </div>
        <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Size</th>
                      <th scope="col">LastModified</th>
                      <th scope="col"></th>
                    </tr>
                </thead>
                  <tbody>
                    <tr v-for="resource in resources"
                        :key="resource.resourceId">
                      <th scope="row">{{resource.name}}</th>
                      <td>{{resource.size}}</td>
                      <td>{{resource.lastModified}}</td>
                      <td><b-button>Transfer</b-button></td>
                    </tr>
                  </tbody>
                </table>
        </div>
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
    }
</script>

<style scoped>

</style>