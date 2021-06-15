<template>
  <footer>
    <div class="footer-top">
      <div class="footer-eds">
        <h1 class="logo">ЕДС</h1>
        <p>Единая диспетчерская служба Липецкой области</p>
      </div>
      <Login />
    </div>
    <div class="footer-bottom">
      <div class="eds-number">
        <a href="tel:88004504848" class="a-number">8-800-450-48-48</a>
        <p>Единая диспетчерская служба Липецкой области</p>
      </div>
      <div class="reg-number">
      <a href="tel:122" class="a-number">122</a>
        <p>Единый номер региональных &nbsp; контакт-центров для всех жителей РФ</p>
      </div>
      <div class="mail">
        <img src="~/static/images/mail.svg" draggable="false">
        <p>Example@gmail.com</p>
        <p>© 2020 ООО «ЕДС Липецкая область»</p>
      </div>
      <div class="tag">
        <img src="~/static/images/tag.svg" draggable="false">
        <p>Разработка и дизайн сайта</p>
        <p>— ОБУ «ИТЦ» 2020</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  padding: 0 0 64px 0;
  flex-direction: column;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 48px 0 62px 0;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999999;
}
.footer-bottom span {
  color: #82B2A2;
  font-family: OpenSans;
}
.footer-eds {
  display: flex;
  align-items: center;
}
.footer-eds > h1 {
  margin-right: 25px;
}
.footer-eds > p {
  width: 250px;
}
.color-red {
  font-size: 48px;
  margin-right: 24px;
}
@media (max-width: 1200px) {
  .footer-eds > p {
    width: 100%;
  }
  .footer-bottom {
    align-items: flex-start;
  }
  .mail, .tag {
    max-width: 40%;
  }
}
@media (max-width: 340px) {
  .footer-bottom {
    align-items: center;
    flex-direction: column;
  }
  .mail, .tag {
    max-width: auto;
  }
}
</style>