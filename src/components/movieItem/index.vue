<template>
  <vs-card actionable class="cardx ">
    <div slot="header">
      <h3>
        {{ movie.title }}
      </h3>
    </div>
    <div>
      <span>Calidad : {{ movie.quality }}</span>
    </div>
    <iframe
      v-if="show"
      class="mb-2"
      height="600px"
      width="100%"
      :src="movie.embed_url"
    />
    <div slot="footer" class="foot">
      <vs-row vs-justify="flex-end">
        <vs-button
          color="primary"
          size="small"
          type="gradient"
          @click="show = !show"
          ><span v-if="!show">Ver</span><span v-else>Cerrar</span></vs-button
        >
        <vs-button color="primary" size="small" type="gradient">
          <a class="text" target="_blank" :href="movie.embed_url"
            >ver en pantalla completa 
          </a>
        </vs-button>
        <vs-button color="primary" size="small" type="gradient">
          <a class="text" :href="`https://www.imdb.com/title/${movie.imdb_id}`"
            >ver en imDb</a
          >
        </vs-button>
      </vs-row>
    </div>
  </vs-card>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
      show: false
    }
  },
  data: () => ({
    show: false
  })
};
</script>
<style lang="css" scoped>
.cardx {
  margin: 15px;
}
.text {
  text-align: none;
  color: #ffffff;
}
.mb-2 {
  margin-bottom: 30px;
}
.foot{
  height: 70px;
}
</style>
