$(() => {
  //


  $("button.add-to-cart").click((e) => {
    const added = $(".add-confirmation")
    const cart = JSON.parse(localStorage.getItem("cart")) || {}
    const item = $(e.target)
    const itemId = item.data("item-id")

    if (cart[itemId]) {
      added.text('Good choice!').css("display", "inline-block").fadeOut(1200)
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
    const added = $(".add-confirmation")
    const item = $(e.target)
    const itemId = item.data("item-id")

    if (cart[itemId] && cart[itemId].quantity >= 1) {
      added.text('Awww...').css("display", "inline-block").fadeOut(1200)
      cart[itemId].quantity -= 1
    } else  {
      cart[itemId] = {
        quantity: 0,
        itemName: item.data("item-name"),
        price: item.data("item-price")
      }
    }

    window.localStorage.setItem("cart", JSON.stringify(cart))
  })


  const cart = JSON.parse(localStorage.getItem("cart")) || {}

  let final_price = 0

  for (lineItem in cart) {
    let line_item_price = parseInt(cart[lineItem].price)*parseInt(cart[lineItem].quantity)
    $("table.cart").append(`
      <tr>
        <td>${cart[lineItem].itemName}</td>
        <td>${cart[lineItem].quantity}</td>
        <td>$ ${line_item_price}.00</td>
      </tr>
    `)
    final_price += line_item_price
  }

   $("table.cart").append(`
      <tr>
        <td></td>
        <td><strong>TOTAL</strong></td>
        <td>$ ${final_price}.00</td>
      </tr>
    `)

});

