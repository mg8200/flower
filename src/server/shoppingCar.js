import axios from "axios"
import {
   serverIndex
} from "./serverIndex"
axios.defaults.baseURL = serverIndex;


// 将商品加入购物车
export async function joinCar(token, goods_id, price, count) {
    const {
       data: res
    } = await axios.post(`/shoppingCar/joinCar`, {
       data: {
          token,
          goods_id,
          price,
          count
       }
    })
    return res
 }

 // 查询用户购物车的商品的数量
export async function getCarCount(token) {
    const {
        data: res
    } = await axios.get(`/shoppingCar/getCarCount/${token}`)
    return res
}

export async function getCarData(token) {
    const {
        data: res
    } = await axios.get(`/shoppingCar/getCarData/${token}`)
    return res
}

// 通过id删除商品

export async function deleteItem(id) {
    console.log(id)
    const {
        data: res
    } = await axios.post(`/shoppingCar/deleteItem`,{id:id})
    return res
}