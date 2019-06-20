import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../Actions/action-types/cart-actions';

const initState= {
  items:[
    {
      id: 1,
      slug: "cb125e",
      title: "Honda CB 125 E",
      description: "Твій шлях до свободи! Малокубатурний мотоцикл CB125 популярний і серед початківців, і серед досвідчених мотоциклістів. Елегантний і сучасний, він має неповторний стиль і харизму.",
      price: 2000,
      imageUrl: "https://d4zzp4ohshzeb.cloudfront.net/resize/listing-picture/62e14e95-938f-332a-9835-28e58fd34f51?width=1200&height=630",
    },
    {
      id: 2,
      slug: "goldwing",
      title: "Honda Gold Wing GL-1800",
      description: "Неперевершений турінговий мотоцикл Honda став ще більш універсальним з появою останньої версії легендарної моделі Gold Wing, яка не тільки задає нові граничні характеристики для турінгових мотоциклів, а й переписує саму концепцію поїздок.",
      price: 40000,
      imageUrl: "https://auto.mail.ru/image/45573-1a274bedd8426d1e97bd037eba2e076b/1200x630/fpng/",
    },
    {
      id: 3,
      slug: "cb1100ex",
      title: "Honda CB 1100 EX",
      description: "Абсолютно новий Honda CB1100 створений для сучасного мотоцикліста, який при цьому не забуває про класичні цінності мото світу.",
      price: 16000,
      imageUrl: "http://www.sagmart.com/uploads/2019/04/19/news_image1/honda-rebel-500-cruiser.jpg",
    },
    {
      id: 4,
      slug: "nc750x",
      title: "Honda NC 750 X",
      description: "З моменту появи в 2012, NC750X завоював популярність в Європі, увійшовши в десятку найбільш продаваних в Європі мотоциклів.",
      price: 10000,
      imageUrl: "https://www.city-rent.it/wp-content/uploads/2018/01/nc-fronte-1200x630.jpg",
    },
    {
      id: 5,
      slug: "cbr1000rr",
      title: "Honda CBR 1000 RR",
      description: "Honda CBR1000RR Fireblade виводить «Абсолютний Контроль» на новий рівень. На 90% нові основні компоненти.",
      price: 12000,
      imageUrl: "https://d4zzp4ohshzeb.cloudfront.net/resize/listing-picture/1ff00bb7-aaa5-3288-b312-d12d8104ebe5?width=1200&height=630",
    },
    {
      id: 6,
      slug: "xr150l",
      title: "Honda XR 150 L",
      description: "XR150 – новий представник легендарної лінійки позашляхових мотоциклів Honda.",
      price: 2500,
      imageUrl: "http://img.paratamoto.com/full/02c1661d92d3b961.jpg",
    },
  ],
  addedItems: [],
  total: 0
}

const cartReducer = (state = initState,action) =>{
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id)

    let existed_item = state.addedItems.find(item => action.id === item.id)

    if (existed_item) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price
      }
    }
    else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      }

    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id)
    let new_items = state.addedItems.filter(item => action.id !== item.id)

    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
    console.log(itemToRemove)
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    }
  }

  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    addedItem.quantity += 1
    let newTotal = state.total + addedItem.price
    return {
      ...state,
      total: newTotal
    }
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id)
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      }
    }
    else {
      addedItem.quantity -= 1
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        total: newTotal
      }
    }

  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 50
    }
  }

  if (action.type === 'SUB_SHIPPING') {
    return {
      ...state,
      total: state.total - 50
    }
  }

  return state
}

export default cartReducer