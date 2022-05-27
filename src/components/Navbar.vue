<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fizjoterapia</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page"><router-link to="/">Start</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/about">O nas</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/cennik">Cennik</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/kontakt">Kontakt</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/rejestracja">Rejestracja online</router-link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
li a {
    text-decoration: none;
    color: inherit;
}
</style>