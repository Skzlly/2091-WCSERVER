<template>
<div class="gallery">
    <h1>Skin Gallery</h1>
    <img id = "game" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_32.jpg">
    <img id = "game" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_47.jpg">
    <img id = "game" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_14.jpg">
    <img id = "game" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_37.jpg">
    <img id = "game" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_65.jpg">
    <img id = "game" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_38.jpg" >
    <img id = "game" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_10.jpg" >
    <img id = "game" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_29.jpg" >
    <img id = "game" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_15.jpg" >
    <img id = "game" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_44.jpg " >
    <img id = "game" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_4.jpg" >
    <img id = "game" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_46.jpg" >
    
</div>
</template>

<script>
export default {
name: 'gallery',
data () {
    return {
    title: 'Gallery'
    }
}
}
</script>

<style scoped>
#game{
    text-align: center;
    width: 550px;
}
h1{
    opacity: 0.9;
}

</style>