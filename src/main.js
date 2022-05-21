document.addEventListener('DOMContentLoaded', e => {

  // Console 值的輸出
  let log = document.getElementById('textarea');

  // HTML5 Video + 字幕 + 中文 + 控製項全開
  const playerVideo = new Plyr('#player-video', {
    captions: { active: true, language: 'auto', update: true },
    i18n: {
      restart: '重播',
      rewind: '倒帶 {seektime} 秒',
      play: '播放',
      pause: '暫停',
      fastForward: '快轉 {seektime} 秒',
      seek: '尋找',
      played: '已播放',
      buffered: '緩衝',
      currentTime: '目前時間',
      duration: '總共時間',
      volume: '音量',
      mute: '靜音',
      unmute: '取消靜音',
      enableCaptions: '開啟內嵌字幕',
      disableCaptions: '關閉內嵌字幕',
      enterFullscreen: '全螢幕',
      exitFullscreen: '退出全螢幕',
      frameTitle: '{title} 播放器',
      captions: '內嵌字幕',
      settings: '設定',
      speed: '播放速率',
      normal: '一般',
      quality: '畫質',
      loop: '循還播放',
      start: '開始',
      end: '結束',
      all: '全部',
      reset: '重置',
      disabled: '關閉',
      advertisement: '廣告',
    },
    controls: [
      'play-large', // The large play button in the center
      'restart', // Restart playback
      'rewind', // Rewind by the seek time (default 10 seconds)
      'play', // Play/pause playback
      'fast-forward', // Fast forward by the seek time (default 10 seconds)
      'progress', // The progress bar and scrubber for playback and buffering
      'current-time', // The current time of playback
      'duration', // The full duration of the media
      'mute', // Toggle mute
      'volume', // Volume control
      'captions', // Toggle captions
      'settings', // Settings menu
      'pip', // Picture-in-picture (currently Safari only)
      'airplay', // Airplay (currently Safari only)
      'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
      'fullscreen', // Toggle fullscreen
    ],
    tooltips: { controls: true, seek: true },
    quality: { default: 720, options: [1080, 720, 480] },
    loop: { active: true },
    markers: {
      enabled: true,
      points: [
        {
          time: 10,
          label: '段落標記 Demo1',
        },
        {
          time: 20,
          label: '段落標記 Demo2',
        },
        {
          time: 30,
          label: '段落標記之 <strong>可以用粗體字</strong>',
        },
      ],
    },
  });

  // HTML5 Audio
  const playerAudio = new Plyr('#player-audio');

  // Youtube
  const playerYoutube = new Plyr('#player-youtube');

  // Vimeo
  const playerVimeo = new Plyr('#player-vimeo');

  // 客製樣式 + 監聽事件
  const playerCustom = new Plyr('#player-custom');

  // 監聽事件
  playerCustom.on('play', (event) => {
    console.log('影片總長：', playerCustom.duration);
    log.value = '執行 play 事件。\n影片總長：' + playerCustom.duration + ' 秒';
  });

  playerCustom.on('pause', (event) => {
    console.log('目前秒數：', playerCustom.currentTime);
    log.value = '執行 pause 事件。\n目前秒數：' + playerCustom.currentTime + ' 秒';
  });

  // 切換 Theme
  let currentClass = 'letswrite';
  let themeTarget = document.getElementById('theme-target');
  const plyrBtn = document.querySelectorAll('.plyr-theme button');
  Array.prototype.forEach.call(plyrBtn, btn => {
    btn.addEventListener('click', e => {
      themeTarget.classList.remove(`player-${currentClass}`);
      currentClass = e.target.dataset.theme;
      themeTarget.classList.add(`player-${currentClass}`);
    })
  })

});