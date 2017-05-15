<template>
  <div id="app">
    <b-navbar toggleable type="light" variant="faded">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="#">
        <span>Raz Monitor</span>
      </b-link>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item><router-link to="/dashboard">Dashboard</router-link></b-nav-item>
          <b-nav-item><router-link to="/TrustLib">TrustLib</router-link></b-nav-item>
          <b-nav-item><router-link to="/Records">Records</router-link></b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
