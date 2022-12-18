import Products from "./products"
import Users from "./users"
import Wishlist from "./wishlist"
import HistoryBuy from "./historybuy"
import HistorySell from "./historysell"
import Cart from "./cart"

Products.hasMany(Wishlist, {
    foreignKey: "link_id",
})

Wishlist.belongsTo(Products, {
    foreignKey: "link_id",
})

Products.hasMany(HistoryBuy, {
    foreignKey: "link_id",
})

HistoryBuy.belongsTo(Products, {
    foreignKey: "link_id",
})

HistorySell.belongsTo(Products, {
    foreignKey: "link_id",
})

Products.hasMany(HistorySell, {
    foreignKey: "link_id",
})

Cart.belongsTo(Products, {
    foreignKey: "link_id",
})

Products.hasMany(Cart, {
    foreignKey: "link_id",
})

Cart.hasOne(Users)
Users.belongsTo(Cart)

Wishlist.hasOne(Users)

Users.belongsTo(Wishlist)

export { Products, Users, Wishlist, HistoryBuy, HistorySell, Cart }