<template>
      <div >
          <h3> Enter storage end point details </h3> 
<b-form @submit="onSubmit" @reset="onReset">
      <b-form-group  label="Name" >
        <b-form-input  v-model="form.name" type="text" required placeholder="Name"></b-form-input>
      </b-form-group>
       <b-form-group  label="Host Name" >
        <b-form-input  v-model="form.host" type="text" required placeholder="Host"></b-form-input>
      </b-form-group>
       <b-form-group  label="Port" >
        <b-form-input  v-model="form.port" type="text" required placeholder="Port"></b-form-input>
      </b-form-group>
     <b-form-group  label="Storage Type" >
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-form-group>
      <b-button variant="primary">Submit</b-button>
    </b-form>
</div>
</template>
<script>

export default {
    name: "NewStorage.vue",
     data() {
    return {
      form: {},
      selected:null,
      options:[
          {value:'SFTP',text:'SCP'},
          {value:'GDRIVE',text:'Google Drive'},
          {value:'BOX',text:'One Drive'},
      ]

    };
  },
  methods: {
    onSubmit() {},
    onReset() {}
  }
};
</script>
<style scoped>
</style>