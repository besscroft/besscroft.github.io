const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "黑暗森林",
        artist: '雲翼星辰',
        url: 'http://qiniu.bbsky.xyz/music/%E9%9B%B2%E7%BF%BC%E6%98%9F%E8%BE%B0%20-%20%E9%BB%91%E6%9A%97%E6%A3%AE%E6%9E%97%EF%BC%88%E5%8E%9F%E6%9B%B2%EF%BC%9ASchwarzer%20Regen%EF%BC%89.mp3',
        cover: 'http://qiniu.bbsky.xyz/img_music/%E9%BB%91%E6%9A%97%E6%A3%AE%E6%9E%97.png',
      },
      {
        name: 'Living in the Shadows',
        artist: 'Matthew Perryman Jones',
        url: 'http://qiniu.bbsky.xyz/music/Matthew%20Perryman%20Jones%20-%20Living%20in%20the%20Shadows.mp3',
        cover: 'http://qiniu.bbsky.xyz/img_music/Living%20in%20the%20Shadows.png',
      }
    ]
});