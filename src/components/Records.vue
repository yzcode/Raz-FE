<template>
  <div id="Records" class="bw">
    <div class="di">
      <div class="es bsk">
        <div class="brv">
          <div class="brw">
            <br/>
            <h2 class="brx">Records</h2>
          </div>
        </div>
        <hr class="afx">
      </div>
      <div id="rd_table">
        <div class="justify-content-centermy-1 row">

          <b-form-fieldset horizontal label="Rows per page" class="col-6" :label-size="6">
            <b-form-select :options="[{text:10,value:10},{text:20,value:20},{text:50,value:50}]" v-model="perPage">
            </b-form-select>
          </b-form-fieldset>

          <b-form-fieldset horizontal label="Filter" class="col-6" :label-size="2">
            <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
          </b-form-fieldset>
        </div>

        <!-- Main table element -->
        <b-table striped hover :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">
          <template slot="name" scope="item">
            {{item.value}}
          </template>
          <template slot="url" scope="item">
            <img :src="item.value" width="40 rem" height="40 rem">
          </template>
          <template slot="actions" scope="item">
            <b-btn size="sm" @click="details(item.item)" v-b-modal.modal1>Details</b-btn>
          </template>
        </b-table>

        <div class="justify-content-center row my-1">
          <b-pagination size="md" :total-rows="this.items.length" :per-page="perPage" v-model="currentPage" />
        </div>

        <b-modal id="modal1" title="Details" >
          <div class="rec-detail">
            <img :src="itemDetail.url" width="300px" height="300px" class="d-img">
            <h3 class="d-name">{{itemDetail.name}}</h3>
            <h3 class="d-time">{{itemDetail.time}}</h3>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>

//  var $ = require('jquery')
  export default {
    components: {
    },
    name: 'records',
    data () {
      return {
        itemDetail: {
          id: -1,
          time: 'null',
          url: '',
          name: 'null'
        },
        items: [{
          id: 2,
          time: '2015/05/01',
          url: 'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/w(01-64).jpg',
          name: 'Dickerson Macdonald'

        }, {
          id: 1,
          time: '2015/05/02',
          url: 'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/w(01-64).jpg',
          name: 'Larsen Shaw'
        }],
        fields: {
          id: {
            label: 'Record Id',
            sortable: true
          },
          name: {
            label: 'Face Name',
            sortable: true
          },
          time: {
            label: 'Time',
            sortable: true
          },
          url: {
            label: 'Face'
          },
          actions: {
            label: 'Actions'
          }
        },
        currentPage: 1,
        perPage: 20,
        filter: null
      }
    },
    mount () {
    },
    methods: {
      details (item) {
        this.itemDetail = item
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .rec-detail {
    text-align: center;
  }
  .rec-detail .d-name {
    margin-top: 10px;
  }
  .rec-detail .d-img {

  }
  .rec-detail .d-time {

  }
  #rd_table {
    text-align: left;
  }
  .bw {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px; }
  @media (min-width: 576px) {
    .bw {
      padding-right: 15px;
      padding-left: 15px; } }
  @media (min-width: 768px) {
    .bw {
      padding-right: 15px;
      padding-left: 15px; } }
  @media (min-width: 992px) {
    .bw {
      padding-right: 15px;
      padding-left: 15px; } }
  @media (min-width: 1200px) {
    .bw {
      padding-right: 15px;
      padding-left: 15px; } }
  @media (min-width: 768px) {
    .bw {
      width: 880px;
      max-width: 100%; } }
  @media (min-width: 992px) {
    .bw {
      width: 950px;
      max-width: 100%; } }
  @media (min-width: 1200px) {
    .bw {
      width: 1100px;
      max-width: 100%; } }
  .brv::after {
    display: block;
    content: "";
    clear: both; }

  @media (min-width: 768px) {
    .brw {
      float: left; } }

  .brx {
    margin-top: 0; }

  .afx {
    margin-top: 1rem !important; }

</style>
