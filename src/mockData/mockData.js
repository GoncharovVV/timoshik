import work1 from '../assets/images/work-1.jpg';
import work2 from '../assets/images/work-2.jpg';
import work3 from '../assets/images/work-3.jpg';
import work4 from '../assets/images/work-4.jpg';
import work5 from '../assets/images/work-5.jpg';
import work6 from '../assets/images/work-6.jpg';
import person from '../assets/images/person_1.jpg';
import blog from '../assets/images/image_1.jpg';
import blog1 from '../assets/images/image_2.jpg';
import blog2 from '../assets/images/image_3.jpg';

const goalItems = [
  {
    id: 'gi1',
    title: 'Market Research',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    type: 'research'
  },
  {
    id: 'gi2',
    title: 'Business Strategy',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    type: 'creativity'
  },
  {
    id: 'gi3',
    title: 'Audience Analytics',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    type: 'market'
  }
];
const serviceItems = [
  {
    id: 'si1',
    title: 'Logo Branding',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    iconType: 'pencil'
  },
  {
    id: 'si2',
    title: 'Development',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    iconType: 'web'
  },
  {
    id: 'si3',
    title: 'Online Marketing',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    iconType: 'pie-chart'
  }
];
const stat = [
  {
    id: 'st1',
    title: '6,780',
    description: 'Happy Clients',
  },
  {
    id: 'st2',
    title: '6,780',
    description: 'Happy Clients',
  },
  {
    id: 'st3',
    title: '6,780',
    description: 'Happy Clients',
  },
  {
    id: 'st4',
    title: '6,780',
    description: 'Happy Clients',
  }
];
const prices = [
  {
    id: 'pr1',
    title: 'FREE',
    price: 0,
    details: '100% free. Forever',
    description: 'Happy Clients',
    packageData: [
      {id: 'pr1d1',title: '150 GB',
      description: 'Bandwidth'},
      {id: 'pr1d2',title: '100 GB',
      description: 'Storage'},
      {id: 'pr1d3',title: '$1.00 / GB',
      description: 'Overages'}
    ]
  },
  {
    id: 'pr2',
    title: 'STARTUP',
    price: 19,
    details: '100% free. Forever',
    description: 'Happy Clients',
    packageData: [
      {id: 'pr2d1',title: '150 GB',
      description: 'Bandwidth'},
      {id: 'pr2d2',title: '100 GB',
      description: 'Storage'},
      {id: 'pr2d3',title: '$1.00 / GB',
      description: 'Overages'}
    ]
  },
  {
    id: 'pr3',
    title: 'PREMIUM',
    price: 49,
    details: '100% free. Forever',
    description: 'Happy Clients',
    packageData: [
      {id: 'pr3d1',title: '150 GB',
      description: 'Bandwidth'},
      {id: 'pr3d2',title: '100 GB',
      description: 'Storage'},
      {id: 'pr3d3',title: '$1.00 / GB',
      description: 'Overages'}
    ]
  },
  {
    id: 'pr4',
    title: 'PRO',
    price: 99,
    details: '100% free. Forever',
    description: 'Happy Clients',
    packageData: [
      {id: 'pr4d1',title: '150 GB',
      description: 'Bandwidth'},
      {id: 'pr4d2',title: '100 GB',
      description: 'Storage'},
      {id: 'pr4d3',title: '$1.00 / GB',
      description: 'Overages'}
    ]
  }
];
const work = [
  {
    id: 'w1',
    title: 'Work 1',
    image: work1,
  },
  {
    id: 'w2',
    title: 'Work 2',
    image: work2,
  },
  {
    id: 'w3',
    title: 'Work 3',
    image: work3,
  },
  {
    id: 'w4',
    title: 'Work 4',
    image: work4,
  },
  {
    id: 'w5',
    title: 'Work 5',
    image: work5,
  },
  {
    id: 'w6',
    title: 'Work 6',
    image: work6,
  }
];
const testimony = [
  {
    id: 'cl1',
    clientName: 'Dennis Green',
    image: person,
    jobPosition: 'Web Developer',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  },
  {
    id: 'cl2',
    clientName: 'Dennis Green1',
    image: person,
    jobPosition: 'Web Developer',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  },
  {
    id: 'cl3',
    clientName: 'Dennis Green2',
    image: person,
    jobPosition: 'Web Developer',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  },
  {
    id: 'cl4',
    clientName: 'Dennis Green3',
    image: person,
    jobPosition: 'Web Developer',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  },
];
const blogList = [
  {
    id: 'bl1',
    image: blog,
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    author: 'Admin',
    data: 'August 12, 2018',
    msgCount: 3
  },
  {
    id: 'bl2',
    image: blog1,
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    author: 'Admin',
    data: 'August 12, 2018',
    msgCount: 3
  },
  {
    id: 'bl3',
    image: blog2,
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    author: 'Admin',
    data: 'August 12, 2018',
    msgCount: 3
  }
];
export {
  goalItems,
  serviceItems,
  stat,
  work,
  prices,
  testimony,
  blogList
};