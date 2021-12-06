<template>
  <div class="hello">
    <div class="card1 base_card">
      <h1>{{ msg }}</h1>
      <p>Борис Борисович Рыжий</p>
      <p>БСБО-04-19</p>
      <p>Это я...</p>
      <img alt="Vue logo" src="../assets/1234.jpg">
      <p>Я поэт, физик, люблю заниматься боксом и смотреть на панельки...</p>
    </div>
    <div class="card2 base_card">
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
.base_card{
  border-radius: 10px;
  box-shadow: 0 0 10px black;
  background-color: gray;
  max-width: 500px;
  height: 750px;
  width: 1000px;
}
.card1{
  float: left;
}
.card2{
  float: right;
}
</style>