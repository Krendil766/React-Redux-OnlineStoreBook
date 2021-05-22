
export default class Service {
  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
    },
    {
      id: 3,
      title: ' Как устроен JavaScript!',
      author: 'Д. Крокфорд',
      price: 15,
      coverImage: 'https://media.proglib.io/posts/2020/03/01/45071669da85a82be087e48ae586e750.jpg'
    },
    {
      id: 4,
      title: 'Руководство по созданию современных веб-сайтов',
      author: 'Э. Браун',
      price: 30,
      coverImage: 'https://media.proglib.io/posts/2020/02/28/98b63ff1a155e950a49f2b3124fb1d62.jpg'
    },
    {
      id: 5,
      title: 'Выразительный JavaScript. Современное веб-программирование',
      author: 'М. Хавербеке',
      price: 40,
      coverImage: 'https://media.proglib.io/posts/2020/02/28/fa7b8c4eb6514f0452a3209404746a5a.jpg'
    },
    {
      id: 6,
      title: 'React и Redux. Функциональная веб-разработка',
      author: 'А.Бенкс',
      price: 45,
      coverImage: 'https://s2-goods.ozstatic.by/2000/963/671/10/10671963_0.jpg'
    },
    {
      id: 7,
      title: 'Node.js. Паттерны проектирования и разработки',
      author: 'M.Casciaro',
      price: 50,
      coverImage: 'https://habrastorage.org/files/875/e1a/03d/875e1a03d8a24d7abfc2a0801be74d5b.jpg'
    }
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
      }, 1000)
    })
  }
}
