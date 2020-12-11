// 订单列表
<template>
  <div class="my-order-list">
    <div v-if="orderList.length > 0">
      <div
        class="order-item"
        v-for="item in orderList"
        :key="item.id"
        @click="goOrderDetail(item.id)"
      >
        <div class="status">{{ item.status }}</div>
        <div class="item-detail">
          <div class="left">
            <img :src="item.goods_details.goods[0].src" alt="" />
          </div>
          <div class="right">
            <div class="names">
              <span
                class="name-item"
                v-for="(item2, index) in item.goods_details.goods"
                :key="index"
              >
                {{ item2.name }}
                <span v-show="index !== item.goods_details.goods.length - 1"
                  >|</span
                >
              </span>
            </div>
            <div class="item-content">
              <span class="goods-count">
                商品总数量：×{{ item.goods_details.goods_count }}
              </span>
              <span class="order-price">
                ￥{{ item.goods_details.total }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no-data">
      <van-empty description="暂无订单" />
    </div>
  </div>
</template>

<script>
import { getOrderList } from "../../../../server/order";
export default {
  data() {
    return {
      orderList: [],
    };
  },
  methods: {
    async getOrderList() {
      const token = localStorage.getItem("token");
      let status = this.$route.params.status + 1;
      if (status == "all1") {
        status = status.replace("1", "");
      }
      const res = await getOrderList(token, status);
      this.orderList = res.data;
      // 0：已取消:1：:待审核 2：待付款 3 :已付款  4:派送中  5：待评价  6：已完成
      this.orderList.forEach((item) => {
        if (item.status == 0) {
          item.status = "已取消";
        }
        if (item.status == 1) {
          item.status = "待审核";
        }
        if (item.status == 2) {
          item.status = "待付款";
        }
        if (item.status == 3) {
          item.status = "已付款";
        }
        if (item.status == 4) {
          item.status = "派送中";
        }
        if (item.status == 5) {
          item.status = "待评价";
        }
        if (item.status == 6) {
          item.status = "已完成";
        }
        item.goods_details = JSON.parse(item.goods_details);
      });
    },
    goOrderDetail(id) {
      this.$router.push({ name: "myOrderDetail", params: { id } });
    },
  },
  mounted() {
    this.getOrderList();
  },
};
</script>

<style lang="scss" scoped>
.my-order-list {
  box-sizing: border-box;
  padding-top: 3.125rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .order-item {
    width: 95%;
    margin: 0 auto;
    padding: 0.69rem;
    box-sizing: border-box;
    margin-top: 0.9375rem;
    background-color: #fff;
    border-radius: 0.3125rem;
    .status {
      text-align: right;
    }
    .item-detail {
      display: flex;
      .left {
        width: 25%;
      }
      .right {
        width: 75%;
        padding: 0.69rem;
        padding-right: 0;
        .names {
          width: 100%;
        }
        .item-content {
          margin-top: 1.25rem;
          display: flex;
          justify-content: space-between;
          span.order-price {
            color: #ff2222;
          }
        }
      }
    }
  }
  .no-data {
    background-color: #fff;
    height: 100%;
    box-sizing: border-box;
    padding-top: 9.375rem;
  }
}
</style>