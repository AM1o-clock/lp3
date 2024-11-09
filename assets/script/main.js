const mySwiper = new Swiper('.swiper', {
  slidesPerView: 'auto', // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）
  spaceBetween: 15, // スライド間の余白（px）
  centeredSlides: true, // アクティブなスライドを中央に配置する
  speed: 300, // スライドアニメーションのスピード（ミリ秒）

   autoplay: { // 自動再生させる
    delay: 300000, // 次のスライドに切り替わるまでの時間（ミリ秒）
    disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
    waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
  },

  grabCursor: true, // PCでマウスカーソルを「掴む」マークにする
  watchSlidesProgress: true, // スライドの進行状況を監視する

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "clickable",
  },

  breakpoints: { // ブレークポイント
    768: { // 画面幅768px以上で適用
      slidesPerView: 'auto',
    },

  },

});