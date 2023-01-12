import { sum } from "./math";
// import count from "./count"

console.log(sum(1, 2, 3, 4));
document.getElementById("btn").onclick = function () {
  import("./count")
    .then((res) => {
      console.log("加载成功", res, res.default(2, 1));
    })
    .catch((err) => {
      console.log("加载失败，", err);
    });
};
