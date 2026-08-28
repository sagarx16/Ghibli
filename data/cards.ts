export interface CardItem {
  id: number
  image: string   // public asset path, e.g. '/assets/cards/card1.jpg'
  name: string
}

const cards_data: CardItem[] = [
  { id: 1,  image: '/assets/cards/card1.jpg',  name: 'My Neighbor Totoro' },
  { id: 2,  image: '/assets/cards/card2.jpg',  name: 'From Up on Poppy Hill' },
  { id: 3,  image: '/assets/cards/card3.jpg',  name: "Howl's Moving Castle" },
  { id: 4,  image: '/assets/cards/card4.jpg',  name: "Kiki's Delivery Service" },
  { id: 5,  image: '/assets/cards/card5.jpg',  name: 'My Neighbors the Yamadas' },
  { id: 6,  image: '/assets/cards/card6.jpg',  name: 'Nausicaä of the Valley of the Wind' },
  { id: 7,  image: '/assets/cards/card7.jpg',  name: 'Ocean Waves' },
  { id: 8,  image: '/assets/cards/card8.jpg',  name: 'Only Yesterday' },
  { id: 9,  image: '/assets/cards/card9.jpg',  name: 'Pom Poko' },
  { id: 10, image: '/assets/cards/card10.jpg', name: 'Ponyo' },
  { id: 11, image: '/assets/cards/card11.jpg', name: 'Porco Rosso' },
  { id: 12, image: '/assets/cards/card12.jpg', name: 'Princess Mononoke' },
  { id: 13, image: '/assets/cards/card13.jpg', name: 'Spirited Away' },
  { id: 14, image: '/assets/cards/card14.jpg', name: 'Tales from Earthsea' },
  { id: 15, image: '/assets/cards/card15.jpg', name: 'The Boy and the Heron' },
  { id: 16, image: '/assets/cards/card16.jpg', name: 'The Cat Returns' },
  { id: 17, image: '/assets/cards/card17.jpg', name: 'The Secret World of Arrietty' },
  { id: 18, image: '/assets/cards/card18.jpg', name: 'The Tale of the Princess Kaguya' },
  { id: 19, image: '/assets/cards/card19.jpg', name: 'The Wind Rises' },
  { id: 20, image: '/assets/cards/card20.jpg', name: 'When Marnie Was There' },
  { id: 21, image: '/assets/cards/card21.jpg', name: 'Whisper of the Heart' },
  { id: 22, image: '/assets/cards/card22.jpg', name: 'Laputa: Castle in the Sky' },
  { id: 23, image: '/assets/cards/card23.jpg', name: 'Grave of the Fireflies' },
  { id: 24, image: '/assets/cards/card24.jpg', name: 'My Neighbor Totoro' },
]

export default cards_data
