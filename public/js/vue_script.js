'use strict';
var socket = io();

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
    persinfo: [],
    array: [],
    orders: {},
    ordernr: 0,
    bestallt: "",
    hasordered: false,
    location: [],
  },
  methods:{

    getNext: function() {
      this.ordernr += 1;
      return this.ordernr;

    },

    addOrder: function(event) {
      var location = this.orders.T.details;
      this.array = orderArray();
      this.persinfo = valueArray();
      this.hasordered = true;
      this.location = this.orders.T.details;

      socket.emit("addOrder", {
        orderId: this.getNext(),
        details: location,
        orderItems: this.array,
        persinformation: this.persinfo,
      });
    },

    displayOrder: function(event) {
      var location = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top
      };

      this.orders = {
        "T": {
          details: {
            x: event.clientX - 10 - location.x,
            y: event.clientY - 10 - location.y
          }}
        }

      }
    }
  })
