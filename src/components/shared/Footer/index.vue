<template>
  <vs-row class="root-v2">
    <vs-col
      class="container-avatar"
      vs-type="flex"
      vs-justfy="center"
      vs-lg="3"
      vs-sm="12"
      vs-xs="12"
    >
      <img
        src="https://avatars3.githubusercontent.com/u/38229144?s=400&u=32f2de3761114b346afcfbcb090ed1b82c4690ae&v=4"
        class="avatar"
      />
    </vs-col>
    <vs-col vs-type="flex" vs-justfy="center" vs-lg="6" vs-sm="12" vs-xs="12">
      <div class="description-text">
        <h1>By Orbis Alonzo Gutierrez</h1>
        <br />
        <p>
          Hi, i am a Web Developer in .Net , Vuejs , JavaScript , Reactjs Other
          Skills : Sql, Boostrap, Element Ui and love cleam code!!. ✈
        </p>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
export default {};
</script>

<style scoped>
.root-v2 {
  margin: 20px;
  height: auto;
  background: rgb(23, 201, 100);
  margin: 0;
  padding: 0;
}
.avatar {
  width: 100%;
  text-align: center !important;
  border-radius: 500px;
}
.description-text {
  margin-top: 40px;
  color: #ffffff;
  margin-bottom: 10px;
}
.container-avatar {
  padding: 20px;
}
</style>
