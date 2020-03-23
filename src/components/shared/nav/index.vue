<template>
  <vs-navbar v-model="activeItem" class="nabarx">
    <div slot="title">
      <vs-navbar-title>
        {{ title }}
      </vs-navbar-title>
    </div>
    <vs-navbar-item v-for="(item, index) in links" :key="index" index="0">
      <router-link :to="item.link" tag="a">{{ item.name }}</router-link>
    </vs-navbar-item>
  </vs-navbar>
</template>

<script>
export default {
  data: () => ({
    activeItem: 0,
    title: "Vue Movies",
    links: [
      { name: "Inicio", link: "/" },
      { name: "Peliculas", link: "/peliculas" }
    ]
  })
};
</script>
