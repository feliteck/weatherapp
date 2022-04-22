<template>
  <div class="center">
      <div class="container">
          <header>
              <div class="search">
                  <input type="text" placeholder="Enter City Name" id="search-txt">
                  <a href="#" id="search-btn"><i class="fa fa-search" aria-hidden="true"></i></a>
              </div>
              <div class="city">
                  <div id="city-name"></div>
                  <img src="" id="icon" alt="">
              </div>
              <div class="temperature">
                  <div id="temp"></div>
              </div>
              <div class="humidity">
                  <div id="humidity-div"></div>
              </div>
          </header>
      </div>
  </div>
</template>

<script>
import app from '../components/js/app.js'
export default {
    name:"Home-app",
    data(){
    return{
      api_key: 'a4fbfe742b3ec2635ae03e807cb9b949',
      url_base: 'https://api.openweathermap.org/data/2.5/',
    } 
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Maven Pro';
}
.center{
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.container {
    display: grid;
    grid-template: "header header"
    "city temp"
    "city humidity";
    grid-template-columns: 60% 40%;
    grid-template-rows: 55px 1fr 1rf;
    width: 500px;
    height: 300px;
    border-radius: 40px;
    box-shadow: 3px 3px 50px;
}
header{
    grid-area: header;
    padding: 10px;
    border-radius: 30px 30px 0 0;
    text-align: center;
    background: linear-gradient(to right, #43c6ac, #f8ffae);
}
header input{
    outline: none;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
}
header a{
    color: #fff;
    padding: 8px 10px;
    transition: .3s;
    border-radius: 50%;
}
header a:hover{
    background: rgba(225, 255, 255, 0.3);
}
.city{
    grid-area: city;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #eee;
    font-size: 2em;
}
.temperature{
    grid-area: humidity;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
}
</style>