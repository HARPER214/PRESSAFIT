<template>
  <div>
    <nav class="header-global">
      <div class="header-global-ssafit1">
        <router-link to="/" class="header-ssafit">SSAFIT</router-link>
      </div>
      <div class="header-global-ssafit2">
        <router-link to="/search" class="header-search">검색</router-link>
      </div>
      <div class="header-global-ssafit3">
        <router-link to="/login" class="header-login">로그인</router-link>
        <router-link to="/regist" class="header-regist">회원가입</router-link>
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped>
.header-global {
  /* background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 0.3617822128851541) 0%,
    rgba(148, 187, 233, 0.2777485994397759) 100%
  ); */
  margin: 0px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  font-size: 1.2rem;
  font-weight: bold;
  /* transition: all 0.5s linear; */
}
.header-ssafit:hover,
.header-search:hover,
.header-login:hover,
.header-regist:hover {
  color: rgb(174, 189, 238);
  text-decoration: none;
  transform: translateX(10px);
  transition: all 0.5s linear;
}
.header-global-ssafit1,
.header-global-ssafit2,
.header-global-ssafit3 {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}
.header-global-ssafit1 {
  display: flex;
}

.header-global-ssafit2 {
  display: flex;
  justify-content: center;
}

.header-global-ssafit3 {
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
}
.header-global-item-enter {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.header-global:hover {
  color: black;
  text-decoration: none;
}
a {
  color: black;
  text-decoration: none;
  text-align: center;
}
</style>
