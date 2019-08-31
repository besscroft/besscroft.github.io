const dp = new DPlayer({
    container: document.getElementById('player'),
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    screenshot: false,
    hotkey: true,
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    video: {
        url: 'http://qiniu.bbsky.xyz/video/I%20Vow%20To%20Thee%20My%20Country.mp4',
        pic: '',
        thumbnails: '',
        type: 'auto'
    }
});