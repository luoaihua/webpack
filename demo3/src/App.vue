<template>
    <div>
        <h1 class="title">hello Vue</h1>
        <el-button type="primary">Primary</el-button>
        <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
        
        <router-view/>
    </div>
</template>

<script>

import { ElButton } from 'element-plus'

    export default {
      name: 'App',
      components: { ElButton },
    }
</script>

<style>
.title{
    color: pink;
}
</style>