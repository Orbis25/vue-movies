<template>
  <vs-row class="container">
    <vs-col vs-type="flex" vs-justify="center" vs-lg="6" vs-sm="6" vs-xs="12">
      <h1 class="text-home">
        <span class="init-letter">V</span>ue Movies <br />
        Tus mejores peliculas en un solo lugar
      </h1>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-lg="6" vs-sm="6" vs-xs="12">
      <img class="home-img" src="../../public/homev1.svg" alt="" />
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    movies: []
  })
};
</script>

<style lang="css" scope>
.home-img {
  width: 80%;
}
.container {
  margin: 10px;
}
.text-home {
  margin-top: 150px;
}
.init-letter {
  font-size: 60px;
  color: #17c964;
}
</style>
