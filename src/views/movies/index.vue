<template>
  <vs-row>
    <vs-col class="search" vs-type="flex" vs-justify="center" vs-w="12">
      <vs-input
        class="inputx ml-1"
        placeholder="Escribe el nombre"
        v-model="search"
        @keyup="filter()"
      />
      <vs-button
        class="ml-1"
        color="primary"
        type="border"
        size="small"
        icon="keyboard_arrow_left"
        @click="back()"
      ></vs-button>

      <vs-button
        color="primary"
        type="border"
        size="small"
        icon="keyboard_arrow_right"
        @click="next()"
      ></vs-button>
    </vs-col>
    <vs-col
      class="search"
      v-if="movies.length <= 0"
      vs-type="flex"
      vs-justify="center"
      vs-w="12"
    >
      Espere un momento, cargando las peliculas...
    </vs-col>

    <vs-col
      v-else
      v-for="(item, index) in movies"
      :key="index"
      vs-type="flex"
      vs-justify="center"
      vs-w="12"
    >
      <MoviewItem :movie="item" />
    </vs-col>
  </vs-row>
</template>

<script>
import Service from "../../services/MovieService";
import MoviewItem from "../../components/movieItem";
export default {
  components: {
    MoviewItem
  },
  data: () => ({
    movies: [],
    index: 1,
    search: ""
  }),
  mounted() {
    this.getAll(1);
  },
  methods: {
    getAll(index) {
      this.$vs.loading();
      new Service().getAll(index).then(response => {
        this.movies = response.data.result;
        this.$vs.loading.close();
      });
    },
    filter() {
      this.movies = this.movies.filter(x =>
        String(x.title)
          .toLowerCase()
          .includes(this.search.toLowerCase())
      );
      if (this.search === "") {
        this.getAll();
      }
    },
    next() {
      this.getAll(this.index++);
    },
    back() {
      if (this.index > 1) this.getAll(this.index--);
    }
  }
};
</script>
<style scoped>
.search {
  margin-top: 20px;
  margin-bottom: 20px;
}
.ml-1 {
  margin-right: 5px;
}
</style>
