<template>
  <div id="Trustlib" class="col-md-12">
    <h2 class="tl-title">Trust Faces</h2>
    <div id="TL_faces" class="row">
      <div v-for="face in faces"class="col-3">
        <div class="card" style="width: 15rem;">
          <img class="card-img-top" :src="face.url" alt="Card image cap" style="height: 15rem">
          <div class="card-block">
            <h4 class="card-title">{{face.name}}</h4>
            <a @click.stop.prevent="deleteFace" href="#" class="btn btn-danger" :id="face.file_hash">Delete</a>
          </div>
        </div>
      </div>
      <div class="col-3" style="padding-top: 10rem;">
        <b-btn @click="$root.$emit('show::modal','uploadModal')">Add New Face</b-btn>
        <!-- Modal Component -->
        <b-modal id="uploadModal" title="Submit your name" @ok="submit" @shown="clearName">
          <form @submit.stop.prevent="submit" action="/api/trustaddface" method="post" enctype="multipart/form-data" id="uploadForm">
            <b-form-file v-model="file" name="file1"></b-form-file>
            <b-form-input type="text" placeholder="Name" name="facename"></b-form-input>
          </form>
        </b-modal>
      </div>
    </div>

  </div>
</template>

<script>

  var $ = require('jQuery')
  export default {
    components: {
    },
    name: 'trustlib',
    data () {
      return {
        faces: []
      }
    },
    mounted () {
      this.getData()
    },
    beforeDestroy () {
    },
    methods: {
      submit (e) {
        let formData = new FormData($('#uploadForm')[0])
        $.ajax({
          url: $('#uploadForm').attr('action'),
          type: 'POST',
          dataType: 'json',
          data: formData,
          cache: false,
          contentType: false,
          processData: false
        }).always((data) => {
          location.reload()
        })
      },
      deleteFace (e) {
        let hash = e.target.id
        $.get('/api/trustdelface', {file_hash: hash}, (data) => {
          alert(data)
          location.reload()
        })
      },
      getData () {
        $.getJSON('/api/getfaces', (data) => {
          var newFaces = []
          for (var i = 0; i < data.length; ++i) {
            data[i].url = '/img' + data[i].url
            newFaces.push(data[i])
          }
          this.faces = newFaces
        })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tl-title {
    margin-top: 20px;
  }
  #TL_faces .col-3 {
    margin-top: 30px;
  }
  .custom-file {
    width: 100%;
    margin-bottom: 10px;
  }
</style>
