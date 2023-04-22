<template>
  <div class="home">
    <h1 class="title">Sup Gamers!</h1>
    <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt916643dfd88c75de/6414ea66c91556429e0f69e7/032123_Patch_13_6_Notes_Banner_v3.jpg" alt="">
    <br>
    <p>League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h1.title{ text-transform: uppercase;
          margin-top: 10px;
          margin-bottom: 10px;}
img { width: 850px;}
p{
  margin-top: 50px;
  margin-right: 150px;
  margin-left: 80px;
}
</style>