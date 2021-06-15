<template>
  <header>
    <div class="logo-menu">
      <h1 class="logo">ЕДС</h1>
      <div class="menu">
        <img class="header-menu" src="~/static/images/menu.svg" draggable="false">
        <h1 class="word-menu">Меню</h1>
      </div>
    </div>
    <div class="eds-number">
      <a href="tel:88004504848" class="a-number">8-800-450-48-48</a>
      <p>Единая диспетчерская служба Липецкой области</p>
    </div>
    <div class="reg-number">
      <a href="tel:122" class="a-number">122</a>
      <p>Единый номер региональных &nbsp; контакт-центров для всех жителей РФ</p>
    </div>
    <Login />
  </header>
</template>

<style scoped>
header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  color: #999999;
}
.logo-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
}
.menu {
  align-items: center;
  display: flex;
  cursor: pointer;
}
.menu > h1 {
  font-weight: 400;
}
.word-menu {
  font-size: 18px;
  padding-left: 15px;
}
.header-menu {
  height: 24px;
  user-select: none;
  cursor: pointer;
}
@media (max-width: 1200px) {
  .logo-menu {
    width: 100%;
  }
}
</style>

<style>
.logo {
  font-size: 42px;
  user-select: none;
  color: #C51103;
  font-family: OpenSans;
  font-weight: 600;
}
.eds-number {
  width: 240px;
}
.reg-number {
  width: 310px;
}
.a-number {
  font-weight: 600;
  font-family: OpenSans;
  color: #82B2A2;
  font-size: 22px;
}  
@media (max-width: 1200px) {
  .logo {
    font-size: 32px;
  }
  .eds-number {
    display: none;
  }
  .reg-number {
    display: none;
  }
}
</style>