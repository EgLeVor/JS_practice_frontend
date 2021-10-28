<template>
  <div class="hello">
    <div class="card1">
      <h1>{{ msg }}</h1>
      <p>Борис Борисович Рыжий</p>
      <p>БСБО-04-19</p>
      <p>Это я...</p>
      <img alt="Vue logo" src="../assets/1234.jpg">
      <p>Я поэт, физик, люблю заниматься боксом и смотреть на панельки...</p>
    </div>
    <div class="card2">
      <form id="form" class="form1" @submit.prevent="onFormSubmit">
        <ul>
          <input
            required
            type="text"
            placeholder="Ваше имя: "
            :readonly="false"
          />
        </ul>
        <ul>
          <input
            required
            type="text"
            placeholder="Ваш email: "
            :readonly="false"
          />
        </ul>
        <ul>
          <textarea
            required
            placeholder="Ваше сопроводительное письмо: ">
          </textarea>
        </ul>
        <ul>
          <button
            id="submitButton"
            type="submit">
            Отправить
          </button>
        </ul>
        <label for="checkbox">
          capcha
        </label>
        <input
          required
          id="checkbox"
          type="checkbox"
          :value="true"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style wscoped>
#hello, .card1{
  border-radius: 10px;
  box-shadow: 0 0 10px black;
  background-color: gray;
  max-width: 500px;
  float: left;
  height: 700px;
  width: 1000px;
}
#hello, .card2{
  border-radius: 10px;
  box-shadow: 0 0 10px black;
  background-color: gray;
  max-width: 500px;
  float: right;
  height: 700px;
  width: 1000px;
}
</style>
