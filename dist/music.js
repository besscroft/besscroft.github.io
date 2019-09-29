const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	  {
        name: 'Señorita',
        artist: 'Shawn Mendes _ Camila Cabello',
        url: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.3/music/Shawn Mendes _ Camila Cabello - Señorita.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.3/img/img_music/Señorita.png',
      },
	  {
        name: 'I Shall Rise (Original Game Soundtrack)',
        artist: 'Karen O',
        url: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.3/music/I Shall Rise (Original Game Soundtrack) - Karen O.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.3/img/img_music/I Shall Rise.png',
      },
	  {
        name: 'Boom Clap',
        artist: 'Charli XCX',
        url: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.3/music/Boom_Clap-Charli_XCX.flac',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.3/img/img_music/Boom_Clap.png',
      },
	  {
        name: 'Obsession',
        artist: 'Vice Jon Bellion',
        url: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.3/music/Obsession-Vice_Jon_Bellion.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.3/img/img_music/Obsession.png',
      },
      {
        name: "黑暗森林",
        artist: '雲翼星辰',
        url: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.3/music/雲翼星辰 - 黑暗森林（原曲：Schwarzer Regen）.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.3/img/img_music/黑暗森林.png',
      },
      {
        name: 'Living in the Shadows',
        artist: 'Matthew Perryman Jones',
        url: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.3/music/Matthew Perryman Jones - Living in the Shadows.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.3/img/img_music/Living in the Shadows.png',
      }
    ]
});