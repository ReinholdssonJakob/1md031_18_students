var BurgerMenu = new Vue({
  el: '#Burger_menu_div',
  data: {
    burgers: [
      new MenuItem(food[0]['name'], food[0]['price'], food[0]['kCal'], food[0]['lactose'], food[0]['gluten'], food[0]['img']),
      new MenuItem(food[1]['name'], food[1]['price'], food[1]['kCal'], food[1]['lactose'], food[1]['gluten'], food[1]['img']),
      new MenuItem(food[2]['name'], food[2]['price'], food[2]['kCal'], food[2]['lactose'], food[2]['gluten'], food[2]['img']),
    ]

  }
})

var Info = new Vue({
  el: '#main',
  data: {
    name      : '',
    email     : '',
    street    : '',
    house     : '',
    Payment   : 'Swish',
    picked    : '',

    persinfo: [],
    array: [],

    bestallt: "",

    hasordered: false,

    isOpen: false
  },
  methods:{
      toggle: function(){
          this.isOpen = !this.isOpen
      },
  addOrder: function(event) {
      this.persinfo = valueArray();
      this.array = orderArray();
      this.hasordered = true;
  }
}
})
