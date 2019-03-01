$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });;

  $("button.add-to-cart").click((e) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || {}

    const item = $(e.target)
    const itemId = item.data("item-id")

    if (cart[itemId]) {
      cart[itemId].quantity += 1
    } else {
      cart[itemId] = {
        quantity: 1,
        itemName: item.data("item-name"),
        price: item.data("item-price")
      }
    }

    window.localStorage.setItem("cart", JSON.stringify(cart))
  })

  $("button.remove-from-cart").click((e) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || {}

    const item = $(e.target)
    const itemId = item.data("item-id")

    if (cart[itemId]) {
      cart[itemId].quantity -= 1
      console.log('removed...')
    } else {
      cart[itemId] = {
        quantity: 1,
        itemName: item.data("item-name"),
        price: item.data("item-price")
      }
    }

    window.localStorage.setItem("cart", JSON.stringify(cart))
  })


  const cart = JSON.parse(localStorage.getItem("cart")) || {}

  for (lineItem in cart) {
    const final_price = parseInt(cart[lineItem].price)*parseInt(cart[lineItem].quantity)
    $("table.cart").append(`
      <tr>
        <td>${cart[lineItem].itemName}</td>
        <td>$ ${final_price}.00</td>
        <td>${cart[lineItem].quantity}</td>
      </tr>
    `)

  }


});
