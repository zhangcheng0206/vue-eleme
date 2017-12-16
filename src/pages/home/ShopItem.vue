<template>
  <li class="shop-item" @click="$router.push({path:'/shop', query:{id:shop.id}})">
    <div class="shop-logo">
      <img :src="shop.image_path | imgUrl('https://fuss10.elemecdn.com/', 'imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/')">
    </div>
    <div class="shop-info">
      <section class="title">
        <h2><strong v-if="shop.is_premium">品牌</strong>{{shop.name}}</h2>
        <aside>
          <ul>
            <li v-for="(shop1, index) in shop.supports">{{shop1.icon_name}}</li>
          </ul>
        </aside>
      </section>
      <section class="sale">
        <p>
          <span>{{shop.rating}}</span>
          <em>月售{{shop.recent_order_num}}单</em>
        </p>
        <aside>
          <span v-if="shop.delivery_mode">{{shop.delivery_mode.text}}</span>
        </aside>
      </section>
      <section class="fee">
        <p>
          <span>￥{{shop.float_minimum_order_amount}}起送</span>
          <em>配送费用￥{{shop.float_delivery_fee}}</em>
        </p>
        <aside>
            <span>{{shop.distance | distance}}</span> |
            <em>{{shop.order_lead_time}}分钟</em>
        </aside>
      </section>
      <svg class="dashed-line">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#dashed-line"></use>
      </svg>
      <section class="activity-list">
        <ul class="activity-wrapper">
          <li v-for="(item, index) in shop.activities" :key="index" v-if="index < 2 || !collapsed">
            <i :style="{'background-color': '#'+item.icon_color}">{{item.icon_name}}</i>
            <span>{{item.description}}</span>
          </li>
        </ul>
        <div class="activity-btn" :class="{expend: !collapsed}" v-if="shop.activities.length > 2" @click.stop="collapsed = !collapsed">
          {{shop.activities.length}}个活动
          <svg class="dashed-line">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#activity-more"></use>
          </svg>
        </div>
      </section>
    </div>
  </li>
</template>

<script>
export default {
  data () {
    return {
      collapsed: true // 是否折叠，默认折叠
    }
  },
  props: {
    shop: {
      type: Object,
      required: true
    }
  },
  filters: {
    // 处理距离
    distance (dis) {
      if (dis >= 1000) {
        return (dis / 1000).toFixed(2) + 'km'
      } else {
        return `${dis}米`
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .shop-item {
    display: flex;
    justify-content: space-between;
    position: relative;
    border-bottom: 1px solid #eee;
    background: #fff;
    color: #666;
    font-size: .293333rem;
    .shop-logo {
      position: relative;
      padding: .4rem .266667rem;
      img {
        width: 1.733333rem;
        height: 1.733333rem;
        border-radius: .053333rem;
      }
    }
    .shop-info {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      padding: .4rem .266667rem .4rem 0;
      section {
        display: flex;
        justify-content: space-between;
      }
      .title {
        h2 {
          max-width: 5rem;
          height: .426667rem;
          color: #333;
          font-size: .4rem;
          font-weight: 700;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          strong {
            padding: 0 .066667rem;
            display: inline-block;
            height: .4rem;
            line-height: .4rem;
            border-radius: .053333rem;
            margin-right: .133333rem;
            background-image: linear-gradient(-139deg,#fff100,#ffe339);
            color: #6f3f15;
            text-align: center;
            font-size: .293333rem;
            font-weight: 700;
          }
        }
        aside ul {
          display: flex;
          li {
            font-size: .266667rem;
            width: .346667rem;
            height: .346667rem;
            line-height: .346667rem;
            text-align: center;
            border-radius: .013333rem;
            color: #999;
            border: 1px solid #ddd;
            margin-left: .08rem;
          }
        }
      }
      .sale {
        margin-top: .2rem;
        aside {
          span {
            background: linear-gradient(45deg,#0085ff,#0af);
            color: #fff;
            padding: 0 .053333rem;
            border: 1px solid #44a5ff;
            border-radius: .053333rem;
            font-size: .266667rem;
            height: .346667rem;
            line-height: .346667rem;
          }
        }
      }
      .fee {
        margin-top: .24rem;
        line-height: .32rem;
      }
      .dashed-line {
        width: 100%;
        height: .4rem;
      }
      .activity-list {
        position: relative;
        .activity-wrapper {
          flex-grow: 1;
          width: 7.466667rem;
          li {
            padding-right: 1.866667rem;
            line-height: .48rem;
            font-size: .293333rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            i {
              width: .373333rem;
              height: .373333rem;
              line-height: .373333rem;
              margin-right: .16rem;
              text-align: center;
              border-radius: .053333rem;
              display: inline-block;
              color: #fff;
            }
          }
        }
        .activity-btn {
          position: absolute;
          right: 0;
          height: 100%;
          line-height: 1;
          padding: .08rem 0 .2rem;
          color: #999;
          font-size: .266667rem;
          svg {
            width: .173333rem;
            height: .173333rem;
            opacity: .9;
            fill: currentColor;
            transition: all .3s ease-in-out;
          }
          &.expend {
            svg {
              transform: rotate(180deg);
            }
          }
        }
      }
    }
  }

</style>
