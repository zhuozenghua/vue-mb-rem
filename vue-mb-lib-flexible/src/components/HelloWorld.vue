<template>
  <div class="hello">
    <h2>移动端rem布局 --- lib-flexible</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
        >
         vuejs
        </a>
      </li>
      <li>
        <a
          href="https://vuejs.org"
        >
         vuejs
        </a>
      </li>
      <li>
        <a
          href="https://vuejs.org"
        >
         vuejs
        </a>
      </li>
      <li>
        <a
          href="https://vuejs.org"
        >
         vuejs
        </a>
      </li>
      <li>
        <a
          href="https://vuejs.org"
        >
         vuejs
        </a>
      </li>
      <li>
        <a
          href="https://vuejs.org"
        >
         vuejs
        </a>
      </li>
      <li>
        <a
          href="https://vuejs.org"
        >
         vuejs
        </a>
      </li>
      <li>
        <a
          href="https://vuejs.org"
        >
         vuejs
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
   font-size: 25px;
   text-align: center;
}

[data-dpr="2"] h2{
   font-size: 42px;
}

[data-dpr="3"] h2{
  font-size: 56px;
}

ul {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   font-size: 18px;
   list-style-type: none;
   padding:20px;
}

[data-dpr="2"] ul{
  font-size: 32px;
}

[data-dpr="3"] ul{
  font-size: 48px;
}

li {
   flex: 1;
   width: 155px;
   height: 155px;
   margin: 11.25px;
}

a {
   float: left;
   width: 155px;
   height: 155px;
   line-height: 155px;
   border-radius: 50%;
   background: #2196f3;
   text-align: center;
   text-decoration: none;
   color:#ffffff;
}
</style>