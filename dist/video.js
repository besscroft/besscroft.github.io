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
    },
    danmaku: {
        id: '9E2E3368B56CDBC4',
        api: 'https://api.prprpr.me/dplayer/',
        token: 'tokendemo',
        maximum: 1000,
        addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'],
        user: 'DIYgod',
        bottom: '10%',
        unlimited: true
    }
});