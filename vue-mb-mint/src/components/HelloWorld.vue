<template>
  <div class="hello">
    <h2>移动端rem布局 --- mint&amfe-flexible</h2>
    <ul class="news">
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
   <h2>移动端rem布局 --- mint部分</h2>
  <mt-index-list class="mt_cut_index_list">
    <mt-index-section index="A">
      <mt-cell title="Aaron"></mt-cell>
      <mt-cell title="Alden"></mt-cell>
      <mt-cell title="Austin"></mt-cell>
    </mt-index-section>
    <mt-index-section index="B">
      <mt-cell title="Baldwin"></mt-cell>
      <mt-cell title="Braden"></mt-cell>
    </mt-index-section>
    <mt-index-section index="C">
      <mt-cell title="Cack"></mt-cell>
      <mt-cell title="Cane"></mt-cell>
    </mt-index-section>
    <mt-index-section index="D">
      <mt-cell title="Daron"></mt-cell>
      <mt-cell title="Dlden"></mt-cell>
      <mt-cell title="Dustin"></mt-cell>
    </mt-index-section>
    <mt-index-section index="Z">
      <mt-cell title="Zack"></mt-cell>
      <mt-cell title="Zane"></mt-cell>
    </mt-index-section>
  </mt-index-list>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
   font-size: 25px;
   text-align: center;
}

.news {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   font-size: 18px;
   list-style-type: none;
   padding:20px;
}

.news li {
   flex: 1;
   width: 155px;
   height: 155px;
   margin: 11.25px;
}

.news a {
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

/*.mt_cut_index_list{
  font-size: 22px;
}*/
</style>