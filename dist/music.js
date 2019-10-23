const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	  {
        name: 'I Shall Rise (Original Game Soundtrack)',
        artist: 'Karen O',
        url: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/music/I Shall Rise (Original Game Soundtrack) - Karen O.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/img/img_music/I Shall Rise.png',
      },
	  {
        name: 'Boom Clap',
        artist: 'Charli XCX',
        url: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/music/Boom_Clap-Charli_XCX.flac',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/img/img_music/Boom_Clap.png',
      },
	  {
        name: 'Obsession',
        artist: 'Vice Jon Bellion',
        url: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/music/Obsession-Vice_Jon_Bellion.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/img/img_music/Obsession.png',
      },
      {
        name: 'Living in the Shadows',
        artist: 'Matthew Perryman Jones',
        url: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/music/Matthew Perryman Jones - Living in the Shadows.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/img/img_music/Living in the Shadows.png',
      },
	  {
        name: 'Señorita',
        artist: 'Shawn Mendes _ Camila Cabello',
        url: 'https://onedrive.52bess.com/blog/music/Se%C3%B1orita.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/img/img_music/Señorita.png',
      },
	  {
        name: "黑暗森林",
        artist: '雲翼星辰',
        url: 'https://onedrive.52bess.com/blog/music/%E9%9B%B2%E7%BF%BC%E6%98%9F%E8%BE%B0%20-%20%E9%BB%91%E6%9A%97%E6%A3%AE%E6%9E%97%EF%BC%88%E5%8E%9F%E6%9B%B2%EF%BC%9ASchwarzer%20Regen%EF%BC%89.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/img/img_music/黑暗森林.png',
      },{
        name: "来自天堂的魔鬼",
        artist: 'G.E.M.邓紫棋',
        url: 'https://onedrive.52bess.com/blog/music/G.E.M.%20%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E6%9D%A5%E8%87%AA%E5%A4%A9%E5%A0%82%E7%9A%84%E9%AD%94%E9%AC%BC.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/img/img_music/来自天堂的魔鬼.png',
      },{
        name: "Say You Love Me",
        artist: 'Seeb,Skylar Grey',
        url: 'https://onedrive.52bess.com/blog/music/Say%20You%20Love%20Me.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/img/img_music/Say You Love Me.png',
      },{
        name: "One Day",
        artist: 'MatisYahu/Akon',
        url: 'https://onedrive.52bess.com/blog/music/One%20Day.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/img/img_music/oneday.png',
      },{
        name: "Vacation",
        artist: 'The Go-Gos',
        url: 'https://onedrive.52bess.com/blog/music/Vacation.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/img/img_music/vacation.png',
      },
	  {
        name: "Everything I Need",
        artist: 'Skylar Grey',
        url: 'https://onedrive.52bess.com/blog/music/Everything%20I%20Need.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/img/img_music/Everything I Need.png',
      },
	  {
        name: "Fractures",
        artist: 'ILLENIUM/Nevve',
        url: 'https://onedrive.52bess.com/blog/music/Fractures.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/bessyjl/cdn@1.5/img/img_music/Fractures.png',
      }
    ]
});