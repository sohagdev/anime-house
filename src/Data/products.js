import { v4 as uuidv4 } from 'uuid'
import {
  giftCardOne,
  giftCardTwo,
  giftCardThree,
  giftCardFour,
  giftCardFive,
  JapaneseAnimeBandai,
  JapaneseAnimeBanpresto,
  JapaneseAnimeClothes,
  JapaneseAnimeDeath,
  JapaneseAnimeWallet,
  kpopBlackpinkBackpack,
  kpopBlackpinkBtsV,
  kpopBlackpinkCase,
  kpopBlackpinkCd,
  kpopBlackpinkWallet,
  MostPopularBanpresto,
  MostPopularFunko,
  MostPopularGKResinBoa,
  MostPopularGKResinDragon,
  MostPopularTrafalgar,
  FunkoPopBag
} from '../assets/index'

const productsArray = [
  {
    id: uuidv4(),
    title: 'Anime House $20 Gift Card',
    price: 20,
    description:
      'Gift cards are delivered by email and contain codes to redeem them at checkout. Our gift cards have no additional processing fees Can be used at Online stores and Retail Shops How do your gift Cards work?',
    image: `${giftCardOne}`,
    stocks: 30,
    featured: false
  },
  {
    id: uuidv4(),
    title: 'Anime House $30 Gift Card',
    price: 30,
    description:
      'Gift cards are delivered by email and contain codes to redeem them at checkout. Our gift cards have no additional processing fees Can be used at Online stores and Retail Shops How do your gift Cards work?',
    image: `${giftCardTwo}`,
    stocks: 25,
    featured: false
  },
  {
    id: uuidv4(),
    title: 'Anime House $50 Gift Card',
    price: 50,
    description:
      'Gift cards are delivered by email and contain codes to redeem them at checkout. Our gift cards have no additional processing fees Can be used at Online stores and Retail Shops How do your gift Cards work?',
    image: `${giftCardThree}`,
    stocks: 20,
    featured: false
  },
  {
    id: uuidv4(),
    title: 'Anime House $100 Gift Card',
    price: 100,
    description:
      'Gift cards are delivered by email and contain codes to redeem them at checkout. Our gift cards have no additional processing fees Can be used at Online stores and Retail Shops How do your gift Cards work?',
    image: `${giftCardFour}`,
    stocks: 10,
    featured: true
  },
  {
    id: uuidv4(),
    title: 'Anime House $500 Gift Card',
    price: 500,
    description:
      'Gift cards are delivered by email and contain codes to redeem them at checkout. Our gift cards have no additional processing fees Can be used at Online stores and Retail Shops How do your gift Cards work?',
    image: `${giftCardFive}`,
    stocks: 13,
    featured: true
  },
  {
    id: uuidv4(),
    title: 'Japanese Anime Bandai',
    price: 70,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${JapaneseAnimeBandai}`,
    stocks: 11,
    featured: false
  },
  {
    id: uuidv4(),
    title: 'Japanese Anime Banpresto',
    price: 60,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${JapaneseAnimeBanpresto}`,
    stocks: 13,
    featured: true
  },
  {
    id: uuidv4(),
    title: 'Japanese Anime Clothes all size',
    price: 35,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${JapaneseAnimeClothes}`,
    stocks: 34,
    featured: true
  },
  {
    id: uuidv4(),
    title: 'Japanese Anime Death Note',
    price: 40,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${JapaneseAnimeDeath}`,
    stocks: 23,
    featured: false
  },
  {
    id: uuidv4(),
    title: 'Japanese Anime Wallet',
    price: 100,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${JapaneseAnimeWallet}`,
    stocks: 24,
    featured: true
  },
  {
    id: uuidv4(),
    title: 'Kpop Blackpink backpack',
    price: 200,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${kpopBlackpinkBackpack}`,
    stocks: 21,
    featured: false
  },
  {
    id: uuidv4(),
    title: 'Kpop blackpink-cd',
    price: 40,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${kpopBlackpinkCd}`,
    stocks: 23,
    featured: true
  },
  {
    id: uuidv4(),
    title: 'Kpop BTS Wallet',
    price: 50,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${kpopBlackpinkWallet}`,
    stocks: 19,
    featured: true
  },
  {
    id: uuidv4(),
    title: 'Kpop BTS phone case',
    price: 70,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${kpopBlackpinkCase}`,
    stocks: 17,
    featured: false
  },
  {
    id: uuidv4(),
    title: 'Kpop Funko pop bts V dynamite',
    price: 20,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${kpopBlackpinkBtsV}`,
    stocks: 14,
    featured: true
  },
  {
    id: uuidv4(),
    title: 'Most Popular Banpresto - Nanuto',
    price: 70,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${MostPopularBanpresto}`,
    stocks: 17,
    featured: true
  },
  {
    id: uuidv4(),
    title: 'Most Popular Funko Pop - Edward elnc',
    price: 90,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${MostPopularFunko}`,
    stocks: 11,
    featured: false
  },
  {
    id: uuidv4(),
    title: 'Most Popular Gk Resin - Boa Hancock',
    price: 100,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${MostPopularGKResinBoa}`,
    stocks: 14,
    featured: true
  },
  {
    id: uuidv4(),
    title: 'Most Popular GK Resin - Dragon Ball',
    price: 55,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${MostPopularGKResinDragon}`,
    stocks: 25,
    featured: false
  },
  {
    id: uuidv4(),
    title: 'Most popular Trafalgar',
    price: 65,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${MostPopularTrafalgar}`,
    stocks: 20,
    featured: true
  },
  {
    id: uuidv4(),
    title: 'Funko Pop - pokemon bag',
    price: 75,
    description:
      'Pickup available at Anime House Mega Store Usually ready in 24 hours',
    image: `${FunkoPopBag}`,
    stocks: 16,
    featured: true
  }
]
function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id)

  if (productData == undefined) {
    console.log(`Product data does not exist for ID: ${id}`)
    return undefined
  }
  return productData
}

function getFeaturedProducts() {
  return productsArray.filter((product) => product.featured)
}

export { productsArray, getProductData, getFeaturedProducts }
