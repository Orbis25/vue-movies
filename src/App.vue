<template>
  <vs-row id="app">
    <vs-col
      vs-justify="center"
      vs-align="center"
      vs-type="flex"
      vs-lg="12"
      vs-sm="12"
      vs-xs="12"
    >
      <NavBar />
    </vs-col>
    <vs-col
      vs-type="flex"
      vs-justify="center"
      vs-aling="center"
      vs-lg="12"
      vs-sm="12"
      vs-xs="12"
    >
      <router-view />
    </vs-col>
    <vs-col
      vs-type="flex"
      vs-justify="center"
      vs-aling="center"
      vs-lg="12"
      vs-sm="12"
      vs-xs="12"
    >
      <FootPage />
    </vs-col>
  </vs-row>
</template>

<script>
import NavBar from "./components/shared/nav";
import FootPage from "./components/shared/Footer";
export default {
  components: {
    NavBar,
    FootPage
  }
};
</script>
<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  margin: 0px;
}
</style>
