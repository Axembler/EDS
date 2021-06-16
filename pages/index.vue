<template>
  <div class="main-index">
    <div class="main-top">
      <h1 class="main-eds">
        Единая диспетчерская<br> служба Липецкой<br> области —<br>
        <a href="tel:88004504848">8-800-450-48-48,</a>
        <a href="tel:122">122</a>
      </h1>
      <span class="next-q">Осуществляет прием заявок по единому бесплатному номеру по следующим вопросам:</span>
      <img src="~/static/images/phone.png">
    </div>
    <aside class="main-inf">
      <div class="zhkh">
        <h1 class="inf">ЖКХ</h1>
        <ul>
          <li>Заявки по обслуживанию и содержанию жилищного фонда (проблемы с теплом, электричеством, водоснабжением и водоотведением)</li>
          <li>Благоустройство города или отдельно взятой территории</li>
          <li>Ведение строительных работ</li>
          <li>Освещение дворов и подъездов, упавшие деревья, открытые колодцы и т.д.</li>
          <li>Уборка подъездов, придомовой территории, вывоз снега, обледенение кровли</li>
          <li>Сроки проведения капитального ремонта, качество работ капитального ремонта, вопросы по начислениям</li>
        </ul>
      </div>
      <div class="additional-inf">
        <div class="zdravoohranenie">
          <h1 class="inf">Здравоохранение</h1>
          <ul>
            <li>Горячая линия по COVID-19: необходимость самоизоляции, куда обратиться с симптомами</li>
            <li>Вызов врача на дом (все поликлиники г. Липецк)</li>
            <li>Запись к врачу (1-я, 4-я и 7-я поликлиники)</li>
            <li>Обеспечение лекарствами (Липецкфармация)</li>
          </ul>
        </div>
        <div class="socialnaya-zashchita">
          <h1 class="inf">Социальная защита и занятости населения Липецкой области</h1>
          <ul>
            <li>Поиск подходящих мер поддержки, какие документы нужны, как оформить дистанционно, статус заявки, сроки выплат</li>
          </ul>
        </div>
        <div class="volonterskaya-deyatelnost">
          <h1 class="inf">Волонтерская деятельность</h1>
          <ul>
            <li class="inf-li-last">Оказание помощи волонтерами в доставке лекарств и продуктов для пожилых жителей региона</li>
          </ul>
        </div>
      </div>
    </aside>
    <div class="outcome">
      <p><span class="outcome-numbers">104</span><span>Выполнено заявок<br> за день</span></p>
      <p><span class="outcome-numbers">717</span><span>Принято звонков<br> за неделю</span></p>
      <p><span class="outcome-numbers">673</span><span>Выполнено заявок<br> за неделю</span></p>
    </div>
    <noscript><div><img src="https://mc.yandex.ru/watch/81013720" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <div class="map">
      <div class="map-dis">
        <h1>Карта отключений</h1>
        <p class="map-p">На карте Вы можете найти информацию по отключениям в Вашем населенном пункте</p>
      </div>
      <img src="~/static/images/map.png">
    </div>
  </div>
</template>

<script>
export default {}
</script>

<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(81013720, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
</script>

<style>
.main-index {
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.main-top {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.main-eds {
  font-family: OpenSans;
  font-weight: 600;
  font-size: 55px;
  line-height: 130%;
}
.main-eds > a {
  color: #82B2A2;
}
.main-top > img {
  max-width: 50vw;
}
.next-q {
  margin-top: 12px;
  font-size: 14px;
  line-height: 150%;
}
.main-inf {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
}
.additional-inf {
  flex-wrap: wrap;
  max-width: 70%;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.zhkh, .zdravoohranenie {
  display: flex;
  flex-direction: column;
  background-color: #F2F7F6;
  font-size: 18px;
  line-height: 150%;
  padding: 32px 32px;
}
.zdravoohranenie {
  width: 510px;
  margin-right: max(28px);
}
.volonterskaya-deyatelnost {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #F2F7F6;
  font-size: 18px;
  line-height: 150%;
  padding: 32px 32px;
}
.socialnaya-zashchita {
  width: 510px;
  display: flex;
  flex-direction: column;
  background-color: #F2F7F6;
  font-size: 18px;
  line-height: 150%;
  padding: 32px 32px;
}
.socialnaya-zashchita, .zdravoohranenie {
  width: calc( (100% - 32px) / 2 );
  margin-bottom: 32px;
}
.inf {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 24px;
  font-family: OpenSans;
  line-height: 130%;
}
.inf-li-last {
  width: 450px;
}
.zhkh {
  max-width: 30%;
  width: 100%;
  margin-right: 32px;
}
.outcome {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 80px 0;
}
.outcome-numbers {
  font-weight: 600;
  font-size: 55px;
  font-family: OpenSans;
  color: #82B2A2;
}
.outcome > p {
  display: flex;
  align-items: center;
  font-weight: 600;
}
.outcome span {
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-right: 18px;
}
.map {
  padding: 48px 0 64px 0;
  border-top: 1px solid #C0E4E4;
  border-bottom: 1px solid #C0E4E4;
}
.map-dis {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.map-dis > h1 {
  font-family: OpenSans;
  font-weight: 600;
  font-size: 36px;
}
.map-p {
  color: #999999;
  font-size: 18px;
  max-width: 26%;
}
.map > img {
  width: 100%;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 24px;
}
ul li:before {
  content:  "-";
  position: relative;
  right: 5px;
  padding-left: 5px;
}
@media (min-width: 1200px) {
  .next-q {
    display: none;
  }
}
/*________________________________Правильно ли это? */
@media (max-width: 1480px) {
  .main-eds {
    font-size: 48px;
    margin-top: max(36px);
  }
} 
@media (max-width: 1330px) {
  .main-eds {
    font-size: 42px;
  }
}
/* ________________________________________________ */
@media (max-width: 1200px) {
  .main-top > img {
    display: none;
  }
  .main-top {
    flex-direction: column;
    align-items: flex-start;
  }
  .main-inf {
    flex-wrap: wrap;
  }
  .main-eds {
    font-size: 22px;
    margin-top: 24px;
  }
  .inf {
    font-size: 16px;
    margin-bottom: 16px;
  }
  .outcome {
    flex-wrap: wrap;
  }
  .text-map-dis {
    flex-direction: column;
  }
  .inf-li-last {
    width: auto;
  }
  .zhkh {
    max-width: 100%;
    margin: 0 0 16px 0;
    padding: 16px 20px;
  }
  .zdravoohranenie, .socialnaya-zashchita {
    margin: 0 0 16px 0;
    padding: 16px 20px;
    width: 100%;
    max-width: 100%;
  }
  .volonterskaya-deyatelnost {
    padding: 16px 20px;
  }
  .additional-inf {
    max-width: 100%;
    justify-content: center;
  }
  li {
    font-size: 12px;
    margin-bottom: 16px;
    line-height: 18px;
  }
  .outcome {
    margin: 50px 0;
  }
  .outcome-p1, .outcome-p2 {
    margin-bottom: 36px;
  }
  .outcome-numbers {
    font-size: 46px;
    line-height: 130%;
  }
  .outcome > p {
    justify-content: center;
  }
  .login {
    display: none;
  }
  .map > img {
    object-fit: cover;
    object-position: center;
    height: 250px;
  }
  .map-p {
    display: none;
  }
  .map-dis {
    margin: 0 0 20px 20px;
    align-items: flex-start;
  }
  .map-dis > h1 {
    font-size: 24px;
  }
}
</style>