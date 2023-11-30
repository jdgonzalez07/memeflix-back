const Movies = [
  {
    title: "Old Dads",
    description:
      "“Papás a la antigua” (“Old Dads” en su idioma original) es una película de Netflix dirigida por Bill Burr en su debut como director y que sigue a un papá gruñón y sus dos mejores amigos, quienes se sienten fuera de lugar en un mundo lleno de CEO mileniales y directoras de escuela de armas tomar.",
    img: "https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTuyiGcHtqPLk60cdHQAQm7ZrjTjf1cDGXAuLLPBxuNMpw_PEOYsmX5_FY24G8Iwo_3E-gMD4D7o0HTtOcv2HqxstszOXy_0dcVZUdc5ENE94THEXTayoST8p8uFMHT6sF4qXQ.jpg?r=ea5",
  },
  {
    title: "The devil on the trail",
    description:
      "A través de dramatizaciones y videos caseros, este sombrío documental investiga la aparente posesión demoníaca de un niño… y el brutal asesinato que le siguió.",
    img: "https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABabqES835TIPW8ypAcdi_FavDg6B-bSmAwqkve0CBi4wXblLCsQMfIT7IBvjVg-qVwULLlgtnbYI5keC03Je4lhUmjer9kBFhcLx-nfKYr_KF6BUYNX276cK9ThklnJcJVnbwQ.jpg?r=bab",
  },
  {
    title: "Gemini Man",
    description:
      "Un francotirador que acaba de retirarse se enfrenta a un clon suyo más joven y más fuerte que una agencia secreta del Gobierno ha creado para matarlo.",
    img: "https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYWqOVu2lGxQPy9hpl8uObREJXRVKOvYj9KjH_oAK99S7R2zZbaydfyfCcKn4ZyGUDtSqBCngU31By8lbsjW45m0DSkwEIiecuOV.jpg?r=b04",
  },
  {
    title: "Reptile",
    description:
      "Mientras investiga la verdad oculta detrás del brutal asesinato de una agente inmobiliaria, un curtido detective destapa una compleja red de engaños.",
    img: "https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTkXXwnUbs_9wik2YEOWUDe0fvlklHqC9-b0CrIpNAvBiCPQAuXJM4ilovTHbUzgjKbNbqfcAAZO-KFSRdCRugNPpoOQP7-AtT15j2MrDEE7v5FTXEh2-cS8j0AEI_QwRzz4rw.jpg?r=fce",
  },
  {
    title: "Ni en sueños",
    description:
      "Mientras hace campaña para la presidencia, una poderosa política cruza flechazos con su idealista redactor de discursos, un periodista a quien alguna vez cuidó en su adolescencia.",
    img: "https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdiz2RPMm-Fex84s5TaixNGacz69_QZVgxXCuNFzuT4RamZvBr0qPCRUOO1UaE5qcjpwn_7sSKBtUcDtei8auj-PO4C1aQguqbve.jpg?r=f6c",
  },
  {
    title: "Fair play",
    description:
      "Fair Play, de Netflix, no es solo un thriller erótico que relaciona el deseo sexual con el poder y la ambición. También es, una inteligente exploración acerca de la codicia del mundo contemporáneo y como, del amor al odio, hay un paso.",
    img: "https://m.media-amazon.com/images/M/MV5BYTkyNGViMmQtODgxZS00MDg3LWI2YWUtNzQ3YWNlYTFiMWMyXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg",
  },
  {
    title: "No hard feelings",
    description:
      "Cuando está a punto de perder su casa de la infancia, Maddie (Lawrence) descubre un curioso anuncio de trabajo: unos adinerados padres controladores están buscando a alguien que salga en una cita con su introvertido hijo de 19 años, Percy, antes de que este vaya a la Universidad.",
    img: "https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABau_G4hoKnBFTdR5tMf9iZYXK8ZiC5reEQM7iumO-JC5Yit3yc4WdfMLP2UFfZw6wmF3BO529sqSpQEDsDG5sfiMxb8DrSn_KMGy.jpg?r=41e",
  },
  {
    title: "Tammy",
    description:
      "Llevada al límite después de perder su trabajo y descubrir que su marido la ha estado engañando, Tammy acepta huir de la ciudad con su abuela.",
    img: "https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWCrYK28xtfsZvBGl0f6SXdgf9RvzI1zYbTsBs7Q3sqjhdxAStBwvzGZ8LsLvcnx0l21DwpeXFxUAl6DN72uHuhHe7zAeF-nBY2j.jpg?r=78e",
  },
  {
    title: "Spy Kids",
    description:
      "La misión: salvar a sus padres y detener a una malvada mente maestra. Para lograrlo, estos hermanos deben equiparse bien, viajar por el mundo… y no pelearse.",
    img: "https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABarzj2Oui6uZ3QEQhz1fHd7f5uY_58IAkXt8stlurHNGIDkup3NtqjV3fLLXgER9PmU-Wm46d0fclO69VQiaF9PDEELswNZLiOgD.jpg?r=936",
  },
  {
    title: "Scary movie",
    description:
      "Un torpe asesino en serie acecha a un grupo de adolescentes tan torpes como él en esta parodia de las películas de terror de los años 90.",
    img: "https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV8ri4bcR7wRN7ed3vzz0kRw9qCYRkZhMCXpsQ-N0ds1RV4sk13lDZnl5P5CgfyG89_oezvFknqoWgWWNyKgNsm7HsrkgPic-Jnk.jpg?r=612",
  },
];

export default Movies;
