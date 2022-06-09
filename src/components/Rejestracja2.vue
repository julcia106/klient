<template>
  <div class="container">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Imie i nazwisko</span>
      </div>
      <input type="text" class="form-control" aria-label="Username"
        aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Adres email</span>
      </div>
      <input type="text" class="form-control" aria-label="Username"
        aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Numer telefonu</span>
      </div>
      <input type="text" class="form-control" aria-label="Username"
        aria-describedby="basic-addon1">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.container{
  width: 40%;
  padding-top: 20px;
}

</style>