<template>
  <div class="Loading">
     <img src="../static/img/Loading.gif" alt="">
  </div>
</template>

<script>
export default {
    name:'Loading'
}
</script>

<style>
.Loading{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    background: black;
    opacity: 0.5;
    margin-left: -100px;
    margin-top: -100px;
    border-radius: 5px;
}
.Loading img{
    width: 150px;
    height: 150px;
    margin-left: 25px;
    margin-top: 25px;
}
</style>
