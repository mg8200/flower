import axios from "axios"
import {
    serverIndex
} from "./serverIndex"
axios.defaults.baseURL = serverIndex;


// 提交订单
export async function submitOrders(token, obj) {
    const {
        data: res
    } = await axios.post(`/order/submitOrders`, {
        token,
        obj
    })
    return res
}