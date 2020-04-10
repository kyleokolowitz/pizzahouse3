let mock = {
   pizzas: [{
         id: 0,
         name: "Build Your Own",
         img: "build.jpg",
         description: "Build your own pizza",
         toppings: []
      },
      {
         id: 1,
         name: "Classic Cheese",
         img: "cheese.jpg",
         description: "This specialty pizza comes with our famous red tomato sauce and lots of creamy cheese like no other.",
         toppings: ["cheese"]
      },
      {
         id: 2,
         name: "Poppin Pepperoni",
         img: "pepperoni.jpg",
         description: "This specialty pizza comes with our famous red tomato sauce, lots of cheese, and pepperoni that is like no other.",
         toppings: [
            "cheese",
            "pepperoni"
         ]
      },
      {
         id: 3,
         name: "Loaded Supreme",
         img: "supreme.jpg",
         description: "This specialty pizza comes with our famous red tomato sauce, cheese, pepperoni, sausage, tomatos, olives, peppers, and onions.",
         toppings: [
            "cheese",
            "pepperoni",
            "sausage",
            "tomatos",
            "olives",
            "peppers",
            "onions"
         ]
      },
      {
         id: 4,
         name: "Baked BBQ",
         img: "bbq.jpg",
         description: "This specialty pizza comes with our famous bbq sauce, lots of cheese, chicken, and onions.",
         toppings: [
            "cheese",
            "chicken",
            "bbq",
            "onions"
         ]
      },
      {
         id: 5,
         name: "Cheesey Sausage",
         img: "sausage.jpg",
         description: "This specialty pizza comes with our famous red tomato sauce, extra cheese, sausage, and bacon.",
         toppings: [
            "cheese",
            "sausage",
            "bacon"
         ]
      }
   ],

   sizes: [{
         id: 0,
         size: "Small 8\"",
         price: 6.00
      },
      {
         id: 1,
         size: "Medium 12\"",
         price: 10.00
      },
      {
         id: 2,
         size: "Large 16\"",
         price: 14.00
      },
      {
         id: 3,
         size: "Extra Large 20\"",
         price: 18.00
      }
   ]
}

export default mock;