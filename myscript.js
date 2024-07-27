//Advanced arrays

const orders = [
    {
      id: 1,
      title: 'Tennis racket HEAD 23 Junior',
      price: { amount: '350.00',  delivery: '15.00', currency: 'PLN'},
      quantity: 1﻿
    },
    {
      id: 2,
      title: 'Tennis racket HEAD 25 Junior',
      price: { amount: '500.00',  delivery: '0.00' , currency: 'PLN'},
      quantity: 2﻿
    },
    {
      id: 3,
      title: 'Tennis racket HEAD 27 Pro',
      price: { amount: '750.00', delivery: '0.00' , currency: 'PLN'},
      quantity: 1﻿
    }
  ];
  //pętla for each
  orders.forEach(order => {
        //coś tam z orderem
  })

  //pętla map

  orders.map( order => {
    return order.title  //możemy się odnieść bezpośrednio do elementów
  })

  //przypisanie do zmiennej z pętli map
  const titles = orders.map( order => {
    return order.title  //możemy się odnieść bezpośrednio do elementów
  })

  //możemy też dodać z pomocą funkcji map kolejny element type

  const modified = orders.map( order => {
    return {...order, source: 'OLX'}  //...order - odnosi się struktury elementu
  })

  //jeśli chcemy wykorzystać dane z elementów tablicy lepiej stosować pętle map, jeśli chcemy tylko przeiterować to lepiej forEach