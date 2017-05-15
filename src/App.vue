<template>
  <div id="app">
    <b-navbar toggleable type="light" variant="faded">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="#">
        <span>Raz Monitor</span>
      </b-link>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <li class="active nav-item">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
          <li class="active nav-item">
            <router-link to="/TrustLib" class="nav-link">TrustLib</router-link>
          </li>
          <li class="active nav-item">
            <router-link to="/Records" class="nav-link">Records</router-link>
          </li>
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
