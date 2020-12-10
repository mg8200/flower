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

// 获取用户的订单列表
export async function getOrderList(token, status) {
    const {
        data: res
    } = await axios.post(`/order/getOrderList`, {
        token,
        status
    })
    return res
}

// 通过id获取用户的订单详情
export async function getOrderDetail(id) {
    const {
        data: res
    } = await axios.get(`/order/getOrderDetail/${id}`)
    return res
}



// 确定收货
export async function sureGoods(id, token) {
    const {
        data: res
    } = await axios.post(`/order/sureGoods`, {
        token: token,
        id: id
    })
    return res
}

// 评论订单
export async function submitComments(id, comments_content, token) {
    const {
        data: res
    } = await axios.post(`/order/submitComments`, {
        token: token,
        id: id,
        comments_content: comments_content
    })
    return res
}