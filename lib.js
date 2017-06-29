'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

const total =
(listings, items) => {
  let result = 0
  items.forEach(item => {
    listings.forEach(listing => {
      const priceLookup = listedPrice(listing)
      result += priceLookup(item)
    })
  })
  return result
}

/**
 * transform carts into an array of { customer, total }
 */
 const calculateTotals =
   listings =>
     carts => {
       let result = []
       carts.forEach(cart => {
         const {customer, items} = cart
         result.push({customer: customer, total: total(listings, items)})
       })
       return result
     }

module.exports = {
  listing,
  cart,
  calculateTotals
}
