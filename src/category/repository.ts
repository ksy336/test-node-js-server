import { Category } from './category';

const categories: Category[] = [
  {
    id: 1,
    name: 'ActionSetA',
    cards: [
      {
        id: 1,
        word: 'cry',
        translation: 'плакать',
        image: 'assets/images/cry.jpg',
        audioSrc: 'https://glamorous-wax-sky.glitch.me/audio/cry.mp3',
      },
      {
        id: 2,
        word: 'dance',
        translation: 'танцевать',
        image: 'https://glamorous-wax-sky.glitch.me/img/dance.jpg',
        audioSrc: 'https://glamorous-wax-sky.glitch.me/audio/dance.mp3',
      },
      {
        id: 3,
        word: 'dive',
        translation: 'нырять',
        image: 'https://glamorous-wax-sky.glitch.me/img/dive.jpg',
        audioSrc: 'https://glamorous-wax-sky.glitch.me/audio/dive.mp3',
      },
      {
        id: 4,
        word: 'draw',
        translation: 'рисовать',
        image: 'assets/img/draw.jpg',
        audioSrc: 'assets/audio/draw.mp3',
      },
      {
        id: 5,
        word: 'fish',
        translation: 'ловить рыбу',
        image: 'assets/img/fish.jpg',
        audioSrc: 'assets/audio/fish.mp3',
      },
      {
        id: 6,
        word: 'fly',
        translation: 'летать',
        image: 'assets/img/fly.jpg',
        audioSrc: 'assets/audio/fly.mp3',
      },
      {
        id: 7,
        word: 'hug',
        translation: 'обнимать',
        image: 'assets/img/hug.jpg',
        audioSrc: 'assets/audio/hug.mp3',
      },
      {
        id: 8,
        word: 'jump',
        translation: 'прыгать',
        image: 'assets/img/jump.jpg',
        audioSrc: 'assets/audio/jump.mp3',
      },
    ],
  },
  {
    id: 2,
    name: 'ActionSetB',
    cards: [
      {
        id: 9,
        word: 'open',
        translation: 'открывать',
        image: 'assets/img/open.jpg',
        audioSrc: 'assets/audio/open.mp3',
      },
      {
        id: 10,
        word: 'play',
        translation: 'играть',
        image: 'assets/img/play.jpg',
        audioSrc: 'assets/audio/play.mp3',
      },
      {
        id: 11,
        word: 'point',
        translation: 'указывать',
        image: 'assets/img/point.jpg',
        audioSrc: 'assets/audio/point.mp3',
      },
      {
        id: 12,
        word: 'ride',
        translation: 'ездить',
        image: 'assets/img/ride.jpg',
        audioSrc: 'assets/audio/ride.mp3',
      },
      {
        id: 13,
        word: 'run',
        translation: 'бегать',
        image: 'assets/img/run.jpg',
        audioSrc: 'assets/audio/run.mp3',
      },
      {
        id: 14,
        word: 'sing',
        translation: 'петь',
        image: 'assets/img/sing.jpg',
        audioSrc: 'assets/audio/sing.mp3',
      },
      {
        id: 15,
        word: 'skip',
        translation: 'пропускать, прыгать',
        image: 'assets/img/skip.jpg',
        audioSrc: 'assets/audio/skip.mp3',
      },
      {
        id: 16,
        word: 'swim',
        translation: 'плавать',
        image: 'assets/img/swim.jpg',
        audioSrc: 'assets/audio/swim.mp3',
      },
    ],
  },
  {
    id: 3,
    name: 'Animal',
    cards: [
      {
        id: 17,
        word: 'giraffe',
        translation: 'жираф',
        image: 'img/giraffe.jpg',
        audioSrc: 'audio/giraffe.mp3',
      },
      {
        id: 18,
        word: 'dog',
        translation: 'собака',
        image: 'img/dog.jpg',
        audioSrc: 'audio/dog.mp3',
      },
      {
        id: 19,
        word: 'horse',
        translation: 'лошадь',
        image: 'img/horse.jpg',
        audioSrc: 'audio/horse.mp3',
      },
      {
        id: 20,
        word: 'pig',
        translation: 'свинья',
        image: 'img/pig.jpg',
        audioSrc: 'audio/pig.mp3',
      },
      {
        id: 21,
        word: 'frog',
        translation: 'жаба',
        image: 'img/frog.jpg',
        audioSrc: 'audio/frog.mp3',
      },
      {
        id: 22,
        word: 'rabbit',
        translation: 'кролик',
        image: 'img/rabbit.jpg',
        audioSrc: 'audio/rabbit.mp3',
      },
      {
        id: 23,
        word: 'sheep',
        translation: 'овца',
        image: 'img/sheep.jpg',
        audioSrc: 'audio/sheep.mp3',
      },
      {
        id: 24,
        word: 'lion',
        translation: 'лев',
        image: 'img/lion.jpg',
        audioSrc: 'audio/lion.mp3',
      },
    ],
  },
  {
    id: 4,
    name: 'Clothes',
    cards: [
      {
        id: 25,
        word: 'skirt',
        translation: 'юбка',
        image: 'img/skirt.jpg',
        audioSrc: 'audio/skirt.mp3',
      },
      {
        id: 26,
        word: 'blouse',
        translation: 'блузка',
        image: 'img/blouse.jpg',
        audioSrc: 'audio/blouse.mp3',
      },
      {
        id: 27,
        word: 'boot',
        translation: 'ботинок',
        image: 'img/boot.jpg',
        audioSrc: 'audio/boot.mp3',
      },
      {
        id: 28,
        word: 'pants',
        translation: 'брюки',
        image: 'img/pants.jpg',
        audioSrc: 'audio/pants.mp3',
      },
      {
        id: 29,
        word: 'shirt',
        translation: 'рубашка',
        image: 'img/shirt.jpg',
        audioSrc: 'audio/shirt.mp3',
      },
      {
        id: 30,
        word: 'dress',
        translation: 'платье',
        image: 'img/dress.jpg',
        audioSrc: 'audio/dress.mp3',
      },
      {
        id: 31,
        word: 'shoe',
        translation: 'туфли',
        image: 'img/shoe.jpg',
        audioSrc: 'audio/shoe.mp3',
      },
      {
        id: 32,
        word: 'coat',
        translation: 'пальто',
        image: 'img/coat.jpg',
        audioSrc: 'audio/coat.mp3',
      },
    ],
  },
  {
    id: 5,
    name: 'Sports',
    cards: [
      {
        id: 33,
        word: 'football',
        translation: 'футбол',
        image: 'img/football.jpg',
        audioSrc: 'audio/football.mp3',
      },
      {
        id: 34,
        word: 'basketball',
        translation: 'баскетбол',
        image: 'img/basketball.jpg',
        audioSrc: 'audio/basketball.mp3',
      },
      {
        id: 35,
        word: 'volleyball',
        translation: 'волейбол',
        image: 'img/volleyball.jpg',
        audioSrc: 'audio/volleyball.mp3',
      },
      {
        id: 36,
        word: 'gymnastic',
        translation: 'гимнастика',
        image: 'img/gymnastics.jpg',
        audioSrc: 'audio/gymnastic.mp3',
      },
      {
        id: 37,
        word: 'athletics',
        translation: 'легкая атлетика',
        image: 'img/athletics.jpg',
        audioSrc: 'audio/athletics.mp3',
      },
      {
        id: 38,
        word: 'tennis',
        translation: 'теннис',
        image: 'img/tennis.jpg',
        audioSrc: 'audio/tennis.mp3',
      },
      {
        id: 39,
        word: 'golf',
        translation: 'гольф',
        image: 'img/golf.jpg',
        audioSrc: 'audio/golf.mp3',
      },
      {
        id: 40,
        word: 'baseball',
        translation: 'бейсбол',
        image: 'img/baseball.jpg',
        audioSrc: 'audio/baseball.mp3',
      },
    ],
  },
  {
    id: 6,
    name: 'Emotions',
    cards: [
      {
        id: 41,
        word: 'sad',
        translation: 'грустный',
        image: 'assets/img/sad.jpg',
        audioSrc: 'assets/audio/sad.mp3',
      },
      {
        id: 42,
        word: 'angry',
        translation: 'сердитый',
        image: 'assets/img/angry.jpg',
        audioSrc: 'assets/audio/angry.mp3',
      },
      {
        id: 43,
        word: 'happy',
        translation: 'счастливый',
        image: 'assets/img/happy.jpg',
        audioSrc: 'assets/audio/happy.mp3',
      },
      {
        id: 44,
        word: 'tired',
        translation: 'уставший',
        image: 'assets/img/tired.jpg',
        audioSrc: 'assets/audio/tired.mp3',
      },
      {
        id: 45,
        word: 'surprised',
        translation: 'удивлённый',
        image: 'assets/img/surprised.jpg',
        audioSrc: 'assets/audio/surprised.mp3',
      },
      {
        id: 46,
        word: 'scared',
        translation: 'испуганный',
        image: 'assets/img/scared.jpg',
        audioSrc: 'assets/audio/scared.mp3',
      },
      {
        id: 47,
        word: 'smile',
        translation: 'улыбка',
        image: 'assets/img/smile.jpg',
        audioSrc: 'assets/audio/smile.mp3',
      },
      {
        id: 48,
        word: 'cry',
        translation: 'плакать',
        image: 'img/cry.jpg',
        audioSrc: 'audio/cry.mp3',
      },
    ],
  },
  {
    id: 7,
    name: 'Food',
    cards: [
      {
        id: 49,
        word: 'rice',
        translation: 'рис',
        image: 'img/rice.jpg',
        audioSrc: 'audio/rice.mp3',
      },
      {
        id: 50,
        word: 'bean',
        translation: 'фасоль',
        image: 'img/bean.jpg',
        audioSrc: 'audio/bean.mp3',
      },
      {
        id: 51,
        word: 'ham',
        translation: 'ветчина',
        image: 'img/ham.jpg',
        audioSrc: 'audio/ham.mp3',
      },
      {
        id: 52,
        word: 'bread',
        translation: 'хлеб',
        image: 'img/bread.jpg',
        audioSrc: 'audio/bread.mp3',
      },
      {
        id: 53,
        word: 'soup',
        translation: 'суп',
        image: 'img/soup.jpg',
        audioSrc: 'audio/soup.mp3',
      },
      {
        id: 54,
        word: 'cookies',
        translation: 'печенье',
        image: 'assets/img/cookies.jpg',
        audioSrc: 'assets/audio/cookies.mp3',
      },
      {
        id: 55,
        word: 'salad',
        translation: 'салат',
        image: 'img/salad.jpg',
        audioSrc: 'audio/salad.mp3',
      },
      {
        id: 56,
        word: 'porridge',
        translation: 'каша',
        image: 'img/porridge.jpg',
        audioSrc: 'audio/porridge.mp3',
      },
    ],
  },
  {
    id: 8,
    name: 'House',
    cards: [
      {
        id: 57,
        word: 'bathroom',
        translation: 'ванная комната',
        image: 'img/bathroom.jpg',
        audioSrc: 'audio/bathroom.mp3',
      },
      {
        id: 58,
        word: 'kitchen',
        translation: 'кухня',
        image: 'img/kitchen.jpg',
        audioSrc: 'audio/kitchen.mp3',
      },
      {
        id: 59,
        word: 'bedroom',
        translation: 'спальня',
        image: 'img/bedroom.jpg',
        audioSrc: 'audio/bedroom.mp3',
      },
      {
        id: 60,
        word: 'garden',
        translation: 'сад',
        image: 'img/backyard.jpg',
        audioSrc: 'audio/garden.mp3',
      },
      {
        id: 61,
        word: 'basement',
        translation: 'подвал',
        image: 'img/basement.jpg',
        audioSrc: 'audio/basement.mp3',
      },
      {
        id: 61,
        word: 'closet',
        translation: 'стенной шкаф',
        image: 'img/closet.jpg',
        audioSrc: 'audio/closet.mp3',
      },
      {
        id: 62,
        word: 'chimney',
        translation: 'дымоотход',
        image: 'img/chimney.jpg',
        audioSrc: 'audio/chimney.mp3',
      },
      {
        id: 63,
        word: 'laundry',
        translation: 'прачечная',
        image: 'img/laundry.jpg',
        audioSrc: 'audio/laundry.mp3',
      },
    ],
  },
];

export function getCategories(): Promise<Category[]> {
  return Promise.resolve<Category[]>(categories);
}

export function getCategoryById(
  categoryId: number,
): Promise<Category | undefined> {
  return Promise.resolve(categories.find(cat => cat.id === categoryId));
}

export function createCategory(category: Category): Promise<Category> {
  const isExist =
    typeof categories.find(
      cat => cat.name.toLowerCase() === category.name.toLowerCase(),
    ) !== 'undefined';
  if (isExist) {
    return Promise.reject(
      new Error(`Category with name ${category.name} is already exists`),
    );
  }

  const id = categories.length + 1;
  const model = { ...category, id };
  categories.push(model);

  return Promise.resolve(model);
}

export function deleteCategory(id: number): Promise<void> {
  const index = categories.findIndex(cat => cat.id === id);
  if (index < 0) {
    Promise.reject(new Error('Category not found'));
  }
  categories.splice(index, 1);
  return Promise.resolve();
}
