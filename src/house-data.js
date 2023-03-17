const HOUSE_DATA = [
  {
    title: 'RECENT OFFERS',
    items: [
      {
        id: 1,
        name: 'Serenity House',
        address:"231 Oak Lane",
        imageUrl: 'https://i.ibb.co/nmtvZNq/pexels-pew-nguyen-13600515.jpg',
        price:"$2,500/month",
        type1:"2 Beds",
        type2:"2 Baths"
      },
      {
        id: 2,
        name: 'Golden Oaks',
        address:"42 Maple Drive",
        imageUrl: 'https://i.ibb.co/wLGvg8x/pexels-marta-wave-5875866.jpg',
        price:"$3,000/month",
        type1:"3 Beds",
        type2:"3 Baths"
      },
      {
        id: 3,
        name: 'Enchanted Cottage',
        address:"123 Fairy Lane",
        imageUrl: 'https://i.ibb.co/CwthJBD/pexels-maria-orlova-4969845.jpg',
        price: "$1,800/month",
        type1:"4 Beds",
        type2:"4 Baths"
      },
      {
        id: 4,
        name: 'Whispering Pines',
        address:"89 Pine Street",
        imageUrl: 'https://i.ibb.co/j5tWnhC/pexels-frans-van-heerden-723177.jpg',
        price: "$2,000/month",
        type1:"2 Beds",
        type2:"2 Baths"
      },
      {
        id: 5,
        name: 'Harmony Haven',
        address:"76 Dove Avenue",
        imageUrl: 'https://i.ibb.co/7JNTXpJ/pexels-max-rahubovskiy-5998138.jpg',
        price:"$1,800/month" ,
        type1:"4 Beds",
        type2:"4 Baths"
      },
      {
        id: 6,
        name: 'Belleview Estate',
        address:"345 Beach Road",
        imageUrl: 'https://i.ibb.co/Ttx69Yk/pexels-expect-best-323780.jpg',
        price: "$4,500/month",
        type1:"7 Beds",
        type2:"7 Baths"
      },
      {
        id: 7,
        name: 'Sea Breeze Retreat',
        address:"12 Peaceful Lane",
        imageUrl: 'https://i.ibb.co/PjLSycF/pexels-quang-nguyen-vinh-2476632.jpg',
        price: "$1,500/month",
        type1:"3 Beds",
        type2:"3 Baths"
      },
      {
        id: 8,
        name: 'Tranquil Terrace',
        address:"222 Willow Way",
        imageUrl: 'https://i.ibb.co/wJ3wrms/pexels-rachel-claire-5490376.jpg',
        price: "$2,800/month",
        type1:"7 Beds",
        type2:"7 Baths"
      },
      {
        id: 9,
        name: 'Willow Cottage',
        address:"456 Rosewood Lane",
        imageUrl: 'https://i.ibb.co/NKM1N8t/pexels-max-rahubovskiy-7031406.jpg',
        price:"$2,200/month",
        type1:"4 Beds",
        type2:"4 Baths"
      },
    ],
  },
  {
    title: 'RENT A PLACE',
    items: [
      {
        id: 10,
        name: 'Rosewood Estate',
        address:"789 Ocean View Drive",
        imageUrl: 'https://i.ibb.co/Vvb6zGr/pexels-pixabay-259588.jpg',
        price: "$3,500/month",
        type1:"5 Beds",
        type2:"5 Baths"
      },
      {
        id: 11,
        name: 'Ocean View Villa',
        address:"34 Sunflower Boulevard",
        imageUrl: 'https://i.ibb.co/txLtNBb/pexels-wisnu-aditya-travel-6153777.jpg',
        price: "$1,700/month",
        type1:"5 Beds",
        type2:"4 Baths"
      },
      {
        id: 12,
        name: 'Sunflower Manor',
        address:"567 Mountain View Road",
        imageUrl: 'https://i.ibb.co/gW9pFvH/pexels-maria-orlova-4946914.jpg',
        price: "$3,200/month",
        type1:"2 Beds",
        type2:"2 Baths"
      },
      {
        id: 13,
        name: 'Mountain Crest Lodge',
        address:"901 Forest Glen Lane",
        imageUrl: 'https://i.ibb.co/DPJHCgr/pexels-prateek-katyal-2852350.jpg',
        price: "$4,000/month",
        type1:"4 Beds",
        type2:"2 Baths"
      },
      {
        id: 14,
        name: 'Forest Glen Retreat',
        address:"555 Sunburst Avenue",
        imageUrl: 'https://i.ibb.co/Tr6T4Nd/pexels-eberhard-grossgasteiger-449461.jpg',
        price: "$1,600/month",
        type1:"2 Beds",
        type2:"2 Baths"
      },
      {
        id: 15,
        name: 'Sunburst Heights',
        address:"111 Dreamcatcher Lane",
        imageUrl: 'https://i.ibb.co/Tr6T4Nd/pexels-eberhard-grossgasteiger-449461.jpg',
        price: "$2,400/month",
        type1:"3 Beds",
        type2:"2 Baths"
      },
      {
        id: 16,
        name: 'Dreamcatcher House',
        address:"222 Riverfront Drive",
        imageUrl: 'https://i.ibb.co/VMchVTV/pexels-robert-so-13388609.jpg',
        price: "$1,900/month",
        type1:"2 Beds",
        type2:"2 Baths"
      },
      {
        id: 17,
        name: 'Riverfront Mansion',
        address:"789 Paradise Road",
        imageUrl: 'https://i.ibb.co/F5DTbZK/istockphoto-92239530-612x612.jpg',
        price: "$3,100/month",
        type1:"4 Beds",
        type2:"2 Baths"
      },
    ],
  },
  {
    title: 'BUY A PLACE',
    items: [
      {
        id: 18,
        name: 'Sun Set Palace',
        address:"333 Sunset Drive",
        imageUrl: 'https://i.ibb.co/JRqtZWD/istockphoto-507330309-612x612.jpg',
        price: "$3,000,000",
        type1:"5 Beds",
        type2:"4 Baths"
      },
      {
        id: 19,
        name: 'Paradise Cove',
        address:"567 Lakeside Lane",
        imageUrl: 'https://i.ibb.co/Wz8TDBs/pexels-asad-photo-maldives-1450354.jpg',
        price: "$1,850,000",
        type1:"6 Beds",
        type2:"6 Baths"
      },
      {
        id: 20,
        name: 'Sunset Villa',
        address:"901 Belleview Road",
        imageUrl: 'https://i.ibb.co/HHXrSzx/pexels-brian-penny-13620066.jpg',
        price: "$1,500,000",
        type1:"9 Beds",
        type2:"9 Baths"
      },
      {
        id: 21,
        name: 'Lakeside Retreat',
        address:"123 Meadow View Boulevard",
        imageUrl: 'https://i.ibb.co/VWVqY0Y/pexels-kitsun-yuen-7614555.jpg',
        price: "$900,000",
        type1:"6 Beds",
        type2:"4 Baths"
      },
    ],
  },
];

export default HOUSE_DATA;
