<template>
  <el-container>
    <el-header class="home-header">Header</el-header>
    <el-container>
      <el-aside class="menu-part">
        <el-row>
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <span>导航1</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项111</el-menu-item>
                  <el-menu-item index="1-2">选项222</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <span>导航2</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1111</el-menu-item>
                  <el-menu-item index="1-2">选项2222</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <span>导航3</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项11111</el-menu-item>
                  <el-menu-item index="1-2">选项22222</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'MainPage',
  mounted () {
  },
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
    },
    handleClose (key, keyPath) {
    }
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container {
    height: 100%;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .menu-part .el-row, .menu-part .el-col, .el-menu-vertical-demo{
    height: 100%;
  }
  .menu-part{
    width: 15% !important;
    text-align: left;
  }
  .home-header{
    background: #3C8DBC;
  }
</style>
