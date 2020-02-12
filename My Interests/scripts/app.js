var app = new Vue({
  el: '#app',
  data: {
    title: 'Movies',
    subTitle: 'Three Favorite Movies',
    listOfMovies: [
    {
      id:1 ,
      src: `img/lampoon2.jpg`,
      title: `National Lampoon's Christmas Vacation`,
      subTitle:` This is my favorite movie to watch during the Holoday season. Click below to learn more about this movie.`,
      href:`https://www.imdb.com/title/tt0097958/` ,
    },
    {
      id:2 ,
      src:`img/clueless2.jpg` ,
      title: `Clueless` ,
      subTitle: `This hilarious movie makes me wish I was a high schooler in the 90s. Click below to learn more.`,
      href: `https://www.imdb.com/title/tt0112697/`,
    },
    {
      id:3 ,
      src:`img/stickit2.jpg` ,
      title:`Stick It` ,
      subTitle: `This movie portrays the crazy life of elite gymnastics, it truly makes my miss my gymnastics days. CLick below to learn more.`,
      href:`https://www.imdb.com/title/tt0430634/`,
    },
  ]
  }
})
