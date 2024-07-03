<template>
  <div>
    <div class="menu" @click="toggleMenu">Menu</div>
    <div class="menu-content" v-show="isMenuVisible">
      <h2>Daftar Isi</h2>
      <a href="#sci-fi">Sci-Fi</a>
      <a href="#action">Action</a>
      <a href="#crime">Crime</a>
      <a href="#drama">Drama</a>
      <a href="#comedy">Comedy</a>
      <a href="#horror">Horror</a>
      <a href="#fantasy">Fantasy</a>
      <a href="#animation">Animation</a>
      <a href="#romance">Romance</a>
      <a href="#adventure">Adventure</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    }
  }
}
</script>

<style>
.menu {
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
}
.menu:hover {
  background-color: #0056b3;
}
.menu-content {
  display: none;
  position: absolute;
  top: 40px;
  left: 10px;
  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1001;
}
.menu-content a {
  display: block;
  margin: 5px 0;
  color: #007bff;
  text-decoration: none;
  font-size: 1.1em;
}
.menu-content a:hover {
  text-decoration: underline;
}
</style>
