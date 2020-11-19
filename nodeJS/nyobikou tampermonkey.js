// ==UserScript==
// @name    N予備校で再生停止とかをできるようにした
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.nnn.ed.nico/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const page_url = location.href;

  var arg = new Object();
  var pair = location.search.substring(1).split("&");
  for (var i = 0; pair[i]; i++) {
    var kv = pair[i].split("=");
    arg[kv[0]] = kv[1];
  }
  console.log(arg.second);

  let video_link = document.querySelector("#vjs_video_3_html5_api");
  window.onload = function () {
    // doSomething(); // DOM 構築後に実行したい関数の呼び出し
    
    video_link.currentTime = arg.second;
  };

  video_link.currentTime = setInterval(() => {
    var time_played_second = Math.floor(
      document.querySelector("#vjs_video_3_html5_api").currentTime
    );
    console.log(page_url + "?second=" + time_played_second);
    // console.log(time_played_second + "秒再生しました");
    // video_link.insertAdjacentHTML("afterend", "<div>AfterEnd</div>");
  }, 1000);
  // キーボードの矢印キーとかを押して押して動画を進めたり戻したりするところ
  window.addEventListener("keydown", (event) => {
    console.log("event = " + event.keyCode);

    var video = document.querySelector("video");
    if (
      event.keyCode === 67 ||
      event.keyCode === 66 ||
      event.keyCode === 86 ||
      event.keyCode === 16
    ) {
      //スペースが押された時

      // console.log("event スペースが押されました");
      if (video.paused) {
        video.play(); // 動画再生が始まり、video.pausedはfalseになる
      } else {
        video.pause(); // 動画再生が止まり、video.pausedはtrueになる
      }
    } else if (event.keyCode === 39) {
      //右矢印の時

      console.log("event 右矢印のが押されました");
      video.currentTime = video.currentTime + 5;
    } else if (event.keyCode === 37) {
      //左矢印の時
      console.log("event 左矢印のが押されました");
      video.currentTime = video.currentTime - 5;
    } else if (event.keyCode === 70 || event.keyCode == 17) {
      //Fキーを押したら動画をフルスクリーンにするところ
      console.log("Fキーが押されたよ");

      var videoFullscreenBtn = document.querySelector(
        ".bmpui-ui-fullscreentogglebutton"
      );

      videoFullscreenBtn.click();

      var videoselsect = document.querySelector("video");
      // video.requestFullscreen()

      // if (videoselsect.webkitEnterFullScreen) {
      //   console.log("フルスクリーンにするよーーーーーーーーーー")
      //   videoselsect.webkitEnterFullScreen();

      // }
      // if (!videoselsect.webkitExitFullScreen) {
      //   videoselsect.webkitExitFullScreen();
      // }
    }

    //         document.querySelector("#vjs_video_3_html5_api");
  });

  // Your code here...
})();
