// import 'core-js'
import sum from './js'
import './css/index.css'

console.log(sum(1, 5,2,6,3,4))

document.getElementById("btn").onclick = function () {
    import(/* webpackChunkName: "count" */"./js/count")
      .then((count) => {
        console.log("加载成功", count(2, 1));
      })
      .catch((err) => {
        console.log("加载失败，", err);
      });
  };

if ('serviceWorker' in navigator) {

    window.addEventListener('load', () => {

        navigator.serviceWorker.register('/service-worker.js').then(registration => {

            console.log('SW registered: ', registration);

        }).catch(registrationError => {

            console.log('SW registration failed: ', registrationError);

        });

    });

}