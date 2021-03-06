import {MyTheme} from '../src/components/layout/theme';

export const filterItemsList = [
  {
    id: '1',
    title: 'Грузы',
    descr: 'поиск грузов',
    icon: 'package-variant-closed',
    mainPath: 'MainCargo',
    path: 'CargoFilter',
  },
  {
    id: '2',
    title: 'Транспорт',
    descr: 'поиск транспорта',
    icon: 'truck-outline',
    mainPath: 'Transport',
    path: 'TransportFilter',
  },
  {
    id: '3',
    title: 'Аукцион',
    descr: 'торги за грузы',
    icon: 'resistor',
    mainPath: 'Auctions',
    path: 'AuctionsFilter',
  },
  {
    id: '4',
    title: 'Склады',
    descr: '560 предложений',
    icon: 'dolly',
    mainPath: 'Storage',
    path: 'StorageFilter',
  },
  {
    id: '5',
    title: 'Спецтехника',
    descr: '960 предложений',
    icon: 'excavator',
    mainPath: 'MainSpecEquipment',
    path: 'CategoryList',
  },
];
export const addPostList = [
  {
    id: '1',
    title: 'Грузы',
    icon: 'package-variant-closed',
    mainPath: 'AddPost',
    path: 'AddCargoPost',
  },
  {
    id: '2',
    title: 'Транспорт',
    icon: 'truck-outline',
    mainPath: 'AddPost',
    path: 'AddCargoPost',
  },
  {
    id: '3',
    title: 'Аукцион',
    icon: 'resistor',
    mainPath: 'AddPost',
    path: 'AddAuctionPost',
  },
  {
    id: '4',
    title: 'Склады',
    icon: 'dolly',
    mainPath: 'AddPost',
    path: 'AddStoragePost',
  },
  {
    id: '5',
    title: 'Спецтехника',
    icon: 'excavator',
    mainPath: 'AddPost',
    path: 'AddCargoPost',
  },
];
export const usefulWidgets = [
  {
    id: '1',
    title: 'Расчет расстояний',
    descr: 'длина маршрута и время в пути',
    icon: 'package-variant-closed',
    mainPath: 'Widgets',
    path: 'CalculateDistance',
  },
  {
    id: '2',
    title: 'Проверка компаний',
    descr: 'проверка юр.лиц по всему миру',
    icon: 'package-variant-closed',
    mainPath: 'Widgets',
    path: 'CheckCompany',
  },
];

export const buttonsArray = [
  {title: 'Выгрузка'},
  {title: 'Транспорт'},
  {title: 'Bec'},
  {title: 'Объем'},
  {title: 'Тип груза'},
  {title: 'Срочность'},
];

export const actionStatus = [
  {
    title: 'OЖИДАЕТ',
    bacgroundcolor: '#FFF389',
    driver: 'подбор',
  },
  {
    title: 'ОТКАЗ',
    bacgroundcolor: '#DFE2E5',
    driver: 'подбор',
    reason: 'Клиент выбрал другое предложение',
  },
  {
    title: 'ПРИНЯТО',
    bacgroundcolor: '#008EFF',
    driver: 'подбор',
  },
  {
    title: 'ПОГРУЗКА',
    bacgroundcolor: '#008EFF',
    driver: 'А. Иванов',
  },
  {
    title: 'В ПУТИ',
    bacgroundcolor: '#008EFF',
    driver: 'А. Сидоров (найм)',
  },
  {
    title: 'ДОСТАВЛЕН',
    bacgroundcolor: '#43CC8E',
    driver: 'А. Петров',
  },
  {
    title: 'ЖДЕТ ПОГРУЗКИ',
    bacgroundcolor: '#008EFF',
    driver: 'А. Сидоров (найм)',
  },
];

export const searchResults = [
  {
    id: '1',
    updated_at: '2021-06-15 14:54:10',
    auth: false,
    navPath: 'MainCargo',
    path: 'CargoCard',
    details: {
      start_date: '2021-06-15',
      end_date: '2021-06-20',
      volume: 86,
      net: 40,
      type_transport: 'Авто',
      title: 'оборудование',
      price: 165000,
      from_string: 'Нур-Султан',
      to_string: 'Алматы',
      distance: '1200 км',
      duration: '14ч. 20 мин.',
      taxes: false,
      rating: 4.5,
      status: null,
    },
  },
  {
    id: '2',
    updated_at: '2021-06-15 14:54:10',
    auth: true,
    navPath: 'MainCargo',
    path: 'CargoCard',
    details: {
      start_date: '2021-06-15',
      end_date: '2021-06-20',
      volume: 260,
      net: 115,
      type_transport: 'Авто Тент',
      title: 'хим.продукты, безопасные',
      price: 200000,
      from_string: 'Нур-Султан',
      to_string: 'Усть-Каменогорск',
      distance: '900 км',
      duration: '12 ч. 15 мин.',
      taxes: true,
      rating: null,
    },
  },
  {
    id: '3',
    updated_at: '2021-06-15 14:54:10',
    auth: true,
    navPath: 'MainCargo',
    path: 'CargoCard',
    details: {
      start_date: '2021-06-15',
      end_date: '2021-06-20',
      volume: 150,
      net: 75,
      type_transport: 'Авто Тент',
      title: 'фрукты, клубника',
      price: 120000,
      from_string: 'Бишкек,KG',
      to_string: 'Алматы,KZ',
      distance: '700 км',
      duration: '7 ч. 15 мин.',
      taxes: true,
      rating: 5,
      status: actionStatus[1],
    },
  },
  {
    id: '4',
    updated_at: '2021-06-15 14:54:10',
    auth: true,
    navPath: 'MainCargo',
    path: 'CargoCard',
    details: {
      start_date: '2021-06-15',
      end_date: '2021-06-20',
      volume: 86,
      net: 40,
      type_transport: 'Авто',
      title: 'оборудование',
      price: 165000,
      from_string: 'Нур-Султан',
      to_string: 'Алматы',
      distance: '1200км',
      duration: '14ч. 20 мин.',
      taxes: false,
      rating: 3,
      status: actionStatus[2],
    },
  },
  {
    id: '5',
    updated_at: '2021-06-15 14:54:10',
    auth: true,
    navPath: 'MainCargo',
    path: 'CargoCard',
    details: {
      start_date: '2021-06-15',
      end_date: '2021-06-20',
      volume: 86,
      net: 40,
      type_transport: 'Авто',
      title: 'оборудование',
      price: 165000,
      from_string: 'Нур-Султан',
      to_string: 'Алматы',
      distance: '1200км',
      duration: '14ч. 20 мин.',
      taxes: false,
      rating: 3.5,
      status: actionStatus[3],
    },
  },
  {
    id: '6',
    updated_at: '2021-06-15 14:54:10',
    auth: true,
    navPath: 'MainCargo',
    path: 'CargoCard',
    details: {
      start_date: '2021-06-15',
      end_date: '2021-06-20',
      volume: 86,
      net: 40,
      type_transport: 'Авто',
      title: 'оборудование',
      price: 165000,
      from_string: 'Нур-Султан',
      to_string: 'Алматы',
      distance: '1200км',
      duration: '14ч. 20 мин.',
      taxes: false,
      rating: 2.5,
      status: actionStatus[4],
    },
  },
  {
    id: '7',
    updated_at: '2021-06-15 14:54:10',
    auth: true,
    navPath: 'MainCargo',
    path: 'CargoCard',
    details: {
      start_date: '2021-06-15',
      end_date: '2021-06-20',
      volume: 86,
      net: 40,
      type_transport: 'Авто',
      title: 'оборудование',
      price: 165000,
      from_string: 'Нур-Султан',
      to_string: 'Алматы',
      distance: '1200км',
      duration: '14ч. 20 мин.',
      taxes: false,
      rating: 3,
      status: actionStatus[5],
    },
  },
  {
    id: '8',
    updated_at: '2021-06-15 14:54:10',
    auth: true,
    navPath: 'MainCargo',
    path: 'CargoCard',
    details: {
      start_date: '2021-06-15',
      end_date: '2021-06-20',
      volume: 86,
      net: 40,
      type_transport: 'Авто',
      title: 'оборудование',
      price: 165000,
      from_string: 'Нур-Султан',
      to_string: 'Алматы',
      distance: '1200км',
      duration: '14ч. 20 мин.',
      taxes: false,
      rating: 3.5,
      status: actionStatus[0],
    },
  },
  {
    id: '9',
    updated_at: '2021-06-15 14:54:10',
    auth: false,
    navPath: 'MainCargo',
    path: 'CargoCard',
    details: {
      start_date: '2021-06-15',
      end_date: '2021-06-20',
      volume: 86,
      net: 40,
      type_transport: 'Авто',
      title: 'оборудование',
      price: 165000,
      from_string: 'Нур-Султан',
      to_string: 'Алматы',
      distance: '1200км',
      duration: '14ч. 20 мин.',
      taxes: false,
      rating: 2,
    },
  },
];

//!Spec Equipment
export const specEquipmentList = [
  {
    id: '1',
    title: 'Землеройная',
    quantity: 240,
    mainPath: 'MainSpecEquipment',
    path: 'CategoryItems',
  },
  {
    id: '2',
    title: 'Грузоперевозки',
    quantity: 48,
    mainPath: 'MainSpecEquipment',
    path: 'CategoryItems',
  },
  {
    id: '3',
    title: 'Строительная',
    quantity: 104,
    mainPath: 'MainSpecEquipment',
    path: 'CategoryItems',
  },
  {
    id: '4',
    title: 'Бетонные работы',
    quantity: 37,
    mainPath: 'MainSpecEquipment',
    path: 'CategoryItems',
  },
  {
    id: '5',
    title: 'Комунальная',
    quantity: 22,
    mainPath: 'MainSpecEquipment',
    path: 'CategoryItems',
  },
  {
    id: '6',
    title: 'Прочая техника',
    quantity: 118,
    mainPath: 'MainSpecEquipment',
    path: 'CategoryItems',
  },
];

export const diggerMachineList = [
  {
    id: '1',
    title: 'Экскаваторы',
    quantity: 30,
    mainPath: 'MainSpecEquipment',
    path: 'SpecEquipmResults',
  },
  {
    id: '2',
    title: 'Бульдозеры',
    quantity: 70,
    mainPath: 'MainSpecEquipment',
    path: 'SpecEquipmResults',
  },
  {
    id: '3',
    title: 'Бурильно-Крановые',
    quantity: 56,
    mainPath: 'MainSpecEquipment',
    path: 'SpecEquipmResults',
  },
  {
    id: '4',
    title: 'Буровые установки',
    quantity: 24,
    mainPath: 'MainSpecEquipment',
    path: 'SpecEquipmResults',
  },
  {
    id: '5',
    title: 'Землесосные снаряды',
    quantity: 33,
    mainPath: 'MainSpecEquipment',
    path: 'SpecEquipmResults',
  },
  {
    id: '6',
    title: 'Погрузчики',
    quantity: 27,
    mainPath: 'MainSpecEquipment',
    path: 'SpecEquipmResults',
  },
];

export const specEquipItemData = [
  {
    success: true,
    current_page: 1,
    max_page: 1,
    count: 1,
    data: [
      {
        id: '2',
        user: [
          {
            id: 2,
            fullName: 'ТОО «ОУСА Альянс»',
            email: 'test@test.kz',
            phone: '77082839998',
            address: null,
            rating: 4.5,
          },
        ],
        details: [
          {
            name: 'Экскаватор-погрузчик JCB',
            price: 20000,
            city: 'Алматы',
            address: 'Бостандыкский район',
            net: 10,
            bucketCapacity: '0.5 м³',
            mobility: 'гусеничная',
          },
        ],
        image: [
          'https://blog.mascus.ru/wp-content/uploads/sites/21/2020/08/shutterstock_1364197664-scaled.jpg',
          'https://www.prostanki.com/img/boardpics/2020_09/MZYbsevWdi7DMRqKYndZ.jpg',
          'https://image.made-in-china.com/202f0j10WZKtHLeEqDrT/Wheel-Excavator-Hot-Sale-Best-Price-Best-Quality-Wheel-Digger.jpg',
          'https://www.prostanki.com/img/boardpics/2020_04/dHggkhOF6QKTnda1XdNE.jpg',
        ],
      },
    ],
  },
  {
    success: true,
    current_page: 1,
    max_page: 1,
    count: 1,
    data: [
      {
        id: '3',
        user: [
          {
            id: 2,
            fullName: 'ТОО «ОУСА Альянс»',
            email: 'test@test.kz',
            phone: '77082839998',
            address: null,
            rating: 4.5,
          },
        ],
        details: [
          {
            name: 'Гусеничный экскаватор Cat',
            price: 8000,
            city: 'Алматы',
            address: 'Бостандыкский район',
            net: 10,
            bucketCapacity: '0.5 м³',
            mobility: 'гусеничная',
          },
        ],
        image: [
          'https://www.prostanki.com/img/boardpics/2020_09/MZYbsevWdi7DMRqKYndZ.jpg',
          'https://image.made-in-china.com/202f0j10WZKtHLeEqDrT/Wheel-Excavator-Hot-Sale-Best-Price-Best-Quality-Wheel-Digger.jpg',
          'https://blog.mascus.ru/wp-content/uploads/sites/21/2020/08/shutterstock_1364197664-scaled.jpg',
          'https://www.prostanki.com/img/boardpics/2020_04/dHggkhOF6QKTnda1XdNE.jpg',
        ],
      },
    ],
  },
  {
    success: true,
    current_page: 1,
    max_page: 1,
    count: 1,
    data: [
      {
        id: '4',
        user: [
          {
            id: 2,
            fullName: 'ТОО «ОУСА Альянс»',
            email: 'test@test.kz',
            phone: '77082839998',
            address: null,
            rating: 4.5,
          },
        ],
        details: [
          {
            name: 'Камаз-погрузчик JCB',
            price: 15000,
            city: 'Алматы',
            address: 'Бостандыкский район',
            net: 10,
            bucketCapacity: '0.5 м³',
            mobility: 'гусеничная',
          },
        ],
        image: [
          'https://www.prostanki.com/img/boardpics/2020_04/dHggkhOF6QKTnda1XdNE.jpg',
          'https://www.prostanki.com/img/boardpics/2020_09/MZYbsevWdi7DMRqKYndZ.jpg',
          'https://blog.mascus.ru/wp-content/uploads/sites/21/2020/08/shutterstock_1364197664-scaled.jpg',
          'https://image.made-in-china.com/202f0j10WZKtHLeEqDrT/Wheel-Excavator-Hot-Sale-Best-Price-Best-Quality-Wheel-Digger.jpg',
        ],
      },
    ],
  },
  {
    success: true,
    current_page: 1,
    max_page: 1,
    count: 1,
    data: [
      {
        id: '5',
        user: [
          {
            id: 2,
            fullName: 'ТОО «ОУСА Альянс»',
            email: 'test@test.kz',
            phone: '77082839998',
            address: null,
            rating: 4.5,
          },
        ],
        details: [
          {
            name: 'Белаз-погрузчик JCB',
            price: 16000,
            city: 'Алматы',
            address: 'Бостандыкский район',
            net: 12,
            bucketCapacity: '0.5 м³',
            mobility: 'гусеничная',
          },
        ],
        image: [
          'https://image.made-in-china.com/202f0j10WZKtHLeEqDrT/Wheel-Excavator-Hot-Sale-Best-Price-Best-Quality-Wheel-Digger.jpg',
          'https://blog.mascus.ru/wp-content/uploads/sites/21/2020/08/shutterstock_1364197664-scaled.jpg',
          'https://www.prostanki.com/img/boardpics/2020_09/MZYbsevWdi7DMRqKYndZ.jpg',
          'https://www.prostanki.com/img/boardpics/2020_04/dHggkhOF6QKTnda1XdNE.jpg',
        ],
      },
    ],
  },
];
