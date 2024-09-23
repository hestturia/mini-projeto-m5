import { Movie } from "../models/movie.model.js";

const movieDatabase = [
      new Movie(1, "O Lorax: Em Busca da Trúfula Perdida", 2012, "Um jovem descobre a história de um ser que lutou para proteger seu mundo.", "Chris Renaud", ["Conservação ambiental", "Preservação da natureza", "Impacto do desmatamento"], 'https://media.fstatic.com/4rYhxynAp9CjWw31oqg18q2oF5M=/322x478/smart/filters:format(webp)/media/movies/covers/2012/01/10fea5ef63b2b90d8872b710b3067ffe.jpg',
      ),
      new Movie(2, "Princesa Mononoke", 1997, "Um príncipe envolvido em uma guerra entre a natureza e a indústria humana conhece uma princesa da floresta.", "Hayao Miyazaki", ["Equilíbrio ecológico", "Conflito entre humanos e natureza", "Espíritos da floresta"],'https://wallpapers.com/images/hd/princess-mononoke-studio-ghibli-k5rgqxp6lt9pne5p.jpg',
      ),
      new Movie(3, "O Mundo dos Pequeninos", 2010, "Pequenas criaturas vivem escondidas no mundo dos seres humanos, onde buscam recursos para sobreviver.", "Hiromasa Yonebayashi", ["Convivência com humanos", "Aventura", "Solidariedade"],'https://uauposters.com.br/media/catalog/product/3/3/334120211103-uau-posters-o-mundo-dos-pequeninos-estudio-ghibli-filmes.jpg',
      )
];

export default movieDatabase;