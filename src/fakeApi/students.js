const students = [
  {
    id: '1',
    firstName: 'Андрей',
    lastName: 'Родин',
    age: 35,
    info: 'Год назад я решил изменить свою жизнь и начал изучать JS',
    infoBefore: 'Раньше работал на гигантском грузовике с прицепом',
    img: 'https://i.postimg.cc/x1NvgTd5/itsme.jpg',
    social: [
      { type: 'tg', to: 'https://telegram.me/VakiTaki' },
      { type: 'vk', to: 'https://vk.com' }
    ],
    projectRole: 'В этом проекте я делал структуру, hoc, роуты, навигацию, хлебные крошки, страницу студента, прогресс-бары и слайдер угнал тоже я)',
    role: 'Cтудент',
    skills: [
      { label: 'HTML', value: 70 },
      { label: 'TypeScript', value: 80 },
      { label: 'Css', value: 60 },
      { label: 'JS', value: 90 }],
    hobbies: ['Футбол', 'Хардкор', 'Кино', 'Еда'],
    portfolio: [
      'https://imageup.ru/img237/4509376/snimok-ekrana-2023-08-27-v-170508.jpg',
      'https://imageup.ru/img241/4509379/snimok-ekrana-2023-08-27-v-170441.jpg',
      "https://imageup.ru/img21/4509381/snimok-ekrana-2023-08-26-v-142613.jpg"
    ]

  },
  {
    id: "2",
    firstName: "Сергей",
    lastName: "Загорский",
    age: 25,
    info: "Изучаю frontend",
    infoBefore: "Ранее, во время универа, решил поменять профессию и начал развиваться в ИТ.",
    img: "https://i.postimg.cc/jSN66fh5/500-500.jpg",
    social: [
      { type: "tg", to: "https://telegram.me/ZagSerSan" },
      { type: "vk", to: "https://vk.com" }
    ],
    projectRole: "отдыхал :D",
    role: "Cтудент",
    skills: [
      { label: "HTML", value: 50 },
      { label: "Css", value: 70 },
      { label: "JavaScript", value: 60 },
      { label: "React", value: 30 }
    ],
    hobbies: ['Гитара', 'Документальные фильмы', 'Общение', 'Бизнес', 'Музыка'],
    portfolio: [
      "https://i.postimg.cc/Kjw8cJ4D/weather-widget.png",
      "https://i.postimg.cc/KckKwM1D/tic-tac-toe.png"
    ]
  },
  {
    id: '3',
    firstName: 'Сергей',
    lastName: 'Максимов',
    age: 39,
    info: 'Frontend разработчик',
    infoBefore: 'работал много зарабатывал мало, решил это исправить и пошёл в IT',
    img: 'https://i.postimg.cc/j5H8gPzQ/Smart-Select-Image-2020-01-14-20-48-50-1.png',
    social: [
      { type: "tg", to: "https://t.me/Sergeymaxx" },
      { type: "vk", to: "https://vk.com" }
    ],
    projectRole: 'MainPage, Button',
    role: 'Team Lead',
    skills: [
      { label: 'HTML', value: 50 },
      { label: 'JavaScript', value: 80 },
      { label: 'React', value: 50 },
      { label: 'Redux', value: 50 },
      { label: 'CSS', value: 30 },
    ],
    hobbies: ["кино", "музыка", "гитара", "спорт"],
    portfolio: [
      "https://imageup.ru/img12/4509385/snimok-ekrana-2023-09-04-v-124940.jpg",
      "https://imageup.ru/img44/4509393/snimok-ekrana-2023-09-04-v-125411.jpg"
    ]
  }]


const fetchAllStudents = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(students);
    }, 1000);
  });

export const toggleFavorite = (id) => {
  if (localStorage.getItem('favorite')) {
    let favoriteState = JSON.parse(localStorage.getItem('favorite'));

    const isContain = favoriteState.includes(id);

    isContain
      ? favoriteState = favoriteState.filter(thisId => thisId !== id)
      : favoriteState.push(id);

    favoriteState.length === 0
      ? localStorage.removeItem('favorite')
      : localStorage.setItem('favorite', JSON.stringify(favoriteState));

    return favoriteState;
  } else {
    localStorage.setItem('favorite', JSON.stringify([id]));
    return JSON.parse(localStorage.getItem('favorite'));
  }
};

export const getBookmarkStatus = (id) => {
  if (localStorage.getItem('favorite')) {
    let favoriteState = JSON.parse(localStorage.getItem('favorite'));
    return favoriteState.includes(id);
  }

  return false;
};

export default fetchAllStudents;
