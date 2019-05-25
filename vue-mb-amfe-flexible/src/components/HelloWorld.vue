<template>
  <div class="hello">
    <h2>移动端rem布局 --- amfe-flexible</h2>
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

ul {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   font-size: 18px;
   list-style-type: none;
   padding:20px;
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