<template>
  <div id="app">
    <el-container>
      <el-header>
        <!-- <div class="logo">
          <img src="./assets/img/logo2.jpg" alt />
        </div>
        <el-menu
          :default-active="defaultActive"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :router="router"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/news">新闻资讯</el-menu-item>
          <el-menu-item index="/product">产品中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="/products">云开产品</el-menu-item>
          <el-menu-item index="/case">经典案例</el-menu-item>
          <el-menu-item index="/goin">走进云开</el-menu-item>
          <el-menu-item index="/admin">管理界面</el-menu-item>
        </el-menu>-->
        <div class="hk-nav hk-nav__other" style="position: fixed;">
          <h1 class="logo">
            <img src="./assets/img/logo2.jpg" alt />
          </h1>
          <ul class="hk-nav__list clearfix">
            <li class="hk-nav__li">
              <a class="hk-nav__item" href="/" title="首页">首页</a>
            </li>
            <li class="hk-nav__li">
              <a class="hk-nav__item" href="javascript:void(0);" title="关于慧科">关于慧科</a>
              <div class="hk-nav__fold"></div>
              <ul
                class="hk-nav__sub clearfix"
                style="display: none; height: 210px; padding-top: 0px; margin-top: 26px; padding-bottom: 0px; margin-bottom: 0px;"
              >
                <li class="hk-nav__li">
                  <a class="hk-nav__item" href="/about/1.html" title="公司简介">公司简介</a>
                </li>
                <li class="hk-nav__li">
                  <a class="hk-nav__item" href="/about/3.html" title="发展历程">发展历程</a>
                </li>
                <li class="hk-nav__li">
                  <a class="hk-nav__item" href="/about/252.html" title="核心竞争力">核心竞争力</a>
                </li>
                <li class="hk-nav__li">
                  <a class="hk-nav__item" href="/managementteam/index.html" title="管理团队">管理团队</a>
                </li>
                <li class="hk-nav__li">
                  <a class="hk-nav__item" href="/about/372.html" title="战略投资">战略投资</a>
                </li>
              </ul>
            </li>
            <li class="hk-nav__li">
              <a class="hk-nav__item" href="javascript:void(0);" title="新闻中心">新闻中心</a>
              <div class="hk-nav__fold"></div>
              <ul class="hk-nav__sub clearfix" style="display: none;">
                <li class="hk-nav__li">
                  <a class="hk-nav__item" href="/new/state/" title="公司动态">公司动态</a>
                </li>
                <li class="hk-nav__li">
                  <a class="hk-nav__item" href="/new/media/" title="媒体报道">媒体报道</a>
                </li>
                <li class="hk-nav__li">
                  <a class="hk-nav__item" href="/e/action/ListInfo/?classid=79" title="荣誉奖项">荣誉奖项</a>
                </li>
                <li class="hk-nav__li">
                  <a class="hk-nav__item" href="/new/leadershipcare/" title="领导关怀">领导关怀</a>
                </li>
                <li class="hk-nav__li">
                  <a class="hk-nav__item" href="/new/socialmedia/" title="社交媒体">社交媒体</a>
                </li>
              </ul>
            </li>
            <li class="hk-nav__li">
              <a class="hk-nav__item" href="javascript:void(0);" title="产品服务">产品服务</a>
              <div class="hk-nav__fold"></div>
              <ul class="hk-nav__sub clearfix" style="display: none;">
                <li class="hk-nav__li">
                  <a
                    class="hk-nav__item hk-nav__fold__second"
                    href="javascript:void(0);"
                    title="高等教育"
                  >高等教育</a>
                  <ul class="hk-nav__three clearfix" style="display: none;">
                    <li class="hk-nav__li">
                      <a
                        class="hk-nav__item"
                        target="_blank"
                        href="http://www.huikedu.com/"
                        title="慧科教育"
                      >慧科教育</a>
                    </li>
                  </ul>
                </li>
                <li class="hk-nav__li">
                  <a
                    class="hk-nav__item hk-nav__fold__second"
                    href="javascript:void(0);"
                    title="职业教育"
                  >职业教育</a>
                  <ul class="hk-nav__three clearfix" style="display: none;">
                    <li class="hk-nav__li">
                      <a
                        class="hk-nav__item"
                        target="_blank"
                        href="https://www.kaikeba.com"
                        title="开课吧"
                      >开课吧</a>
                    </li>
                    <li class="hk-nav__li">
                      <a
                        class="hk-nav__item"
                        target="_blank"
                        href="https://houchangtech.com"
                        title="后厂理工学院"
                      >后厂理工学院</a>
                    </li>
                  </ul>
                </li>
                <li class="hk-nav__li">
                  <a class="hk-nav__item" href="/service/liuxuefuwu">国际合作</a>
                </li>
                <li class="hk-nav__li">
                  <a
                    class="hk-nav__item"
                    target="_blank"
                    href="http://www.huikeyun.com/"
                    title="慧科云"
                  >慧科云</a>
                  <ul class="hk-nav__three clearfix" style="display: none;"></ul>
                </li>
              </ul>
            </li>
            <li class="hk-nav__li">
              <a class="hk-nav__item" href="/engineering/" title="产教融合">产教融合</a>
            </li>
            <li class="hk-nav__li">
              <a class="hk-nav__item" href="javascript:void(0);" title="教育案例">教育案例</a>
              <div class="hk-nav__fold"></div>
              <ul class="hk-nav__sub clearfix" style="display: none;">
                <li class="hk-nav__li">
                  <a class="hk-nav__item" href="/educationcase/universityview/" title="高校视角">高校视角</a>
                  <ul class="hk-nav__three clearfix" style="display: none;"></ul>
                </li>
                <li class="hk-nav__li">
                  <a class="hk-nav__item hk-nav__fold__second" href="javascript:void(0);">学生风范</a>
                  <ul class="hk-nav__three clearfix" style="display: none;">
                    <li class="hk-nav__li">
                      <a class="hk-nav__item" href="/educationcase/student/byj/" title="毕业季">毕业季</a>
                    </li>
                    <li class="hk-nav__li">
                      <a class="hk-nav__item" href="/educationcase/student/bat/" title="BAT">BAT</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div class="headerMenu">
            <div class="headerMenu_items">
              <div class="headerMenu_item headerMenu_item--1"></div>
              <div class="headerMenu_item headerMenu_item--2"></div>
              <div class="headerMenu_item headerMenu_item--3"></div>
            </div>
          </div>
          <div class="overlay"></div>
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <div class="footer" v-show="isShow">
        <div class="footer-content">
          <ul class="content-nav">
            <li>
              <p>走进云开</p>
              <span>发展历程</span>
              <span>企业文化</span>
              <span>资质荣誉</span>
              <span>合作伙伴</span>
            </li>
            <li>
              <p>新闻资讯</p>
              <span>公司新闻</span>
              <span>行业动态</span>
            </li>
            <li>
              <p>产品中心</p>
              <span>介绍视频</span>
              <span>管理模式</span>
              <span>平台目标</span>
              <span>功能模块</span>
            </li>
            <li>
              <p>联系我们</p>
              <span>邮箱：471621076@qq.com</span>
              <span>电话：18651837835</span>
              <span>地址：南京市栖霞区尧化街道甘家边东108号01幢401室</span>
            </li>
          </ul>
          <img src="./assets/img/ercode.png" alt />
        </div>
        <div class="copyright">
          <span>云开版权所有</span>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
import "./assets/css/common.css";
export default {
  data() {
    return {
      router: true,
      defaultActive: "/",
      isShow: false
    };
  },
  methods: {
    handleSelect(key) {
      this.isShow = this.defaultActive != key;
      window.console.log(this.isShow);
    }
  }
};
</script>

<style lang="scss">
.el-header {
    padding: 0 !important;
    margin: 0 !important;
}
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 1240px;
  margin: 0 auto;
  //background-color: #fff;

  .logo {
    width: 280px;
    padding: 10px;
    img {
      width: 100%;
      line-height: 60px;
    }
  }
}
.el-main {
  padding: 0 !important;
}

.footer {
  width: 100%;
  height: 216px;
  overflow: hidden;
  background-color: #14679f;
  &-content {
    width: 1240px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    .content-nav {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        //justify-content: center;
        align-items: flex-start;
        p {
          font-size: 20px;
          color: #d4edff;
          padding: 10px 0;
        }
        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 5px 0;
        }
      }
    }
    img {
      width: 170px;
      height: 170px;
      padding: 10px;
    }
  }
  .copyright {
    height: 30px;
    background: #125688;
    span {
      color: #fff;
      line-height: 30px;
    }
  }
}
</style>
