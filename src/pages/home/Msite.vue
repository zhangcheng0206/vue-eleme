<template>
  <section class="msite">
    <!-- 头部  -->
    <header>
      <div class="header-wrapper">
        <div class="location">
          <svg class="icon-location">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
              </svg>
          <span>{{address.msg}}</span>
          <svg class="icon-arrow">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use>
              </svg>
        </div>
        <div class="weather" v-if="weather">
          <div>
            <h3>{{weather.temperature}}</h3>
            <p>{{weather.description}}</p>
          </div>
          <img :src="weather.image_hash | imgUrl('https://fuss10.elemecdn.com', 'imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/')">
        </div>
      </div>
    </header>
    <!-- 搜索  -->
    <section class="search">
      <div>
        <a href="#">
          <svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
          </svg>
          <span>搜索商家、商品名称</span>
        </a>
      </div>
    </section>
    <!-- 热搜关键字 -->
    <section class="hot-search">
      <ul>
        <li v-for="(item,index) in hotSearchs" :key="index">
          {{item.search_word}}
        </li>
      </ul>
    </section>
    <!-- 主体内容 -->
    <main>
      <section class="entries">
        <svg v-if="foodEntries.length==0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 490">
          <defs>
            <path id="b" d="M0 0h1080v489H0z"/>
            <filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
              <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
              <feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/>
            </filter>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <g>
              <use fill="#000" filter="url(#a)" xlink:href="#b"/>
              <use fill="#FFF" xlink:href="#b"/>
            </g>
            <g fill="#F6F6F6">
              <g transform="translate(76 36)">
                <path d="M9 139h100v34H9z"/>
                <ellipse cx="59" cy="59" rx="59" ry="59"/></g>
                <g transform="translate(346 36)">
                  <path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/>
                </g>
                <g transform="translate(616 36)">
                  <path d="M9 139h100v34H9z"/>
                  <ellipse cx="59" cy="59" rx="59" ry="59"/>
                </g>
                  <g transform="translate(886 36)">
                    <path d="M9 139h100v34H9z"/>
                    <ellipse cx="59" cy="59" rx="59" ry="59"/>
                  </g>
                </g>
                <g fill="#F6F6F6">
                  <g transform="translate(76 252)">
                    <path d="M9 139h100v34H9z"/>
                    <ellipse cx="59" cy="59" rx="59" ry="59"/></g><g transform="translate(346 252)"><path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/></g><g transform="translate(616 252)"><path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/></g><g transform="translate(886 252)"><path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/>
                    </g>
                  </g>
                </g>
        </svg>
        <mt-swipe v-else :auto="0"  >
          <mt-swipe-item v-for="(item1,index1) in foodEntries" :key="index1">
            <a href="#" v-for="(item2,index2) in item1" :key="index2">
              <img :src="item2.image_hash | imgUrl('https://fuss10.elemecdn.com/', 'imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90')" >
              <span>{{item2.name}}</span>
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </section>
      <section class="activity">
        <svg v-if="!activities" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 296">
          <defs>
            <linearGradient id="c" x1="50%" x2="50%" y1="95.5%" y2="4.603%">
              <stop offset="0%" stop-color="#FAFAFA"/>
              <stop offset="100%" stop-color="#FAFAFA"/>
            </linearGradient>
          </defs>
          <g fill="url(#c)" fill-rule="evenodd">
            <path d="M248 153h117v133H248V153zm59 121c14.912 0 27-12.088 27-27s-12.088-27-27-27-27 12.088-27 27 12.088 27 27 27zm-34-106v18h68v-18h-68zm9 23v14h50v-14h-50zM129 153h116v133H129V153zm58 121c14.912 0 27-12.088 27-27s-12.088-27-27-27-27 12.088-27 27 12.088 27 27 27zm-34-106v18h68v-18h-68zm9 23v14h50v-14h-50zM10 153h116v133H10V153zm58 121c14.912 0 27-12.088 27-27s-12.088-27-27-27-27 12.088-27 27 12.088 27 27 27zM34 168v18h68v-18H34zm9 23v14h50v-14H43zM189 10h176v140H189V10zm138 129c14.912 0 27-12.088 27-27s-12.088-27-27-27-27 12.088-27 27 12.088 27 27 27zM202 22v18h68V22h-68zm0 24v14h89V46h-89zm0 20v14h78V66h-78zM10 10h176v140H10V10zm137 129c14.912 0 27-12.088 27-27s-12.088-27-27-27-27 12.088-27 27 12.088 27 27 27zM25 22v18h68V22H25zm0 24v14h89V46H25zm0 20v14h78V66H25z"/>
          </g>
        </svg>
        <div v-else>
          <section class="banner">
            <img :src="activities.newUserLink.hash | imgUrl('https://fuss10.elemecdn.com/', 'imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/')" alt="">
          </section>
          <section class="sales">
            <div class="sales-left">
              <h3>{{activities.activityLinks.top[0].title}}</h3>
              <p>{{activities.activityLinks.top[0].content}}</p>
              <p><span>118人</span><em>{{activities.activityLinks.top[0].info}}</em></p>
              <img :src="activities.activityLinks.top[0].imghash | imgUrl('https://fuss10.elemecdn.com/', 'imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/')" alt="">
            </div>
            <div class="sales-right">
              <h3>{{activities.activityLinks.top[1].title}}</h3>
              <p>{{activities.activityLinks.top[1].content}}</p>
              <p><strong>{{activities.activityLinks.top[1].info}}</strong></p>
              <img :src="activities.activityLinks.top[1].imghash | imgUrl('https://fuss10.elemecdn.com/', 'imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/')" alt="">
            </div>
          </section>
          <section class="special">
            <div v-for="(item, index) in activities.activityLinks.bottom">
              <h3>{{item.title}}</h3>
              <span>{{item.content}}</span>
              <img :src="item.imghash | imgUrl('https://fuss10.elemecdn.com/','imageMogr/format/webp/thumbnail/!232x154r/gravity/Center/crop/232x154/')" alt="">
            </div>
          </section>
        </div>
      </section>
      <h2>推荐商家</h2>
      <section class="shops">
        <div v-if="shops.length == 0">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 261"><defs><path id="b" d="M0 0h1080v260H0z"/><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/></filter></defs><g fill="none" fill-rule="evenodd" transform="translate(0 1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/><path fill="#F6F6F6" d="M230 44h533v46H230z"/><rect width="172" height="172" x="30" y="44" fill="#F6F6F6" rx="4"/><path fill="#F6F6F6" d="M230 118h369v30H230zM230 182h323v30H230zM812 115h238v39H812zM808 184h242v30H808zM917 48h133v37H917z"/></g></svg>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 261"><defs><path id="b" d="M0 0h1080v260H0z"/><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/></filter></defs><g fill="none" fill-rule="evenodd" transform="translate(0 1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/><path fill="#F6F6F6" d="M230 44h533v46H230z"/><rect width="172" height="172" x="30" y="44" fill="#F6F6F6" rx="4"/><path fill="#F6F6F6" d="M230 118h369v30H230zM230 182h323v30H230zM812 115h238v39H812zM808 184h242v30H808zM917 48h133v37H917z"/></g></svg>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 261"><defs><path id="b" d="M0 0h1080v260H0z"/><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/></filter></defs><g fill="none" fill-rule="evenodd" transform="translate(0 1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/><path fill="#F6F6F6" d="M230 44h533v46H230z"/><rect width="172" height="172" x="30" y="44" fill="#F6F6F6" rx="4"/><path fill="#F6F6F6" d="M230 118h369v30H230zM230 182h323v30H230zM812 115h238v39H812zM808 184h242v30H808zM917 48h133v37H917z"/></g></svg>
        </div>
        <!-- 加载更多组件  -->
        <mt-loadmore v-else :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="!hasMore" :auto-fill="false" ref="loadmore">
          <ul >
            <elm-shopitem v-for="(item, index) in shops" :key="index" :shop="item"></elm-shopitem>
          </ul>
          <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus == 'pull'">上拉加载更多</span>
            <span v-show="bottomStatus == 'drop'">释放加载</span>
            <template v-if="bottomStatus == 'loading'">
              <svg class="loadmore-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#loading.001898b"></use>
              </svg>
              <span>正在加载...</span>
            </template>
          </div>
        </mt-loadmore>
      </section>
    </main>
    <!-- 回到顶部组件  -->
    <elm-backtop :showBackTop="showBackTop"></elm-backtop>
    <!-- tab导航 -->
    <elm-tabbar></elm-tabbar>
  </section>
</template>

<script>
  import Tabbar from '@/components/footer/Tabbar'
  import ShopItem from './ShopItem'
  import BackTop from '@/components/common/BackTop'
  import { mapState, mapActions } from 'vuex'
  import { getAddress } from '@/api/location'
  import { getWeather, getHotSearchs, getFoodEntries, getShops } from '@/api/msite'
  import { Swipe, SwipeItem, Loadmore } from 'mint-ui'

  import 'mint-ui/lib/swipe/style.css'
  import Vue from 'vue'
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  Vue.component(Loadmore.name, Loadmore)
  import _ from 'lodash'

  export default {
    data () {
      return {
        address: { // 地址信息
          code: 1,
          msg: '正在定位中...'
        },
        weather: null, // 天气
        hotSearchs: [], // 热搜关键字
        foodEntries: [], // 食品入口导航
        shops: [], // 推荐商家
        page: 1, // 商家当前页数
        limit: 20, // 每页显示的商家数量
        hasMore: true, // 是否还有更多的数据
        activities: null, // 活动
        bottomStatus: '', // 底部的状态
        showBackTop: false // 是否显示回到顶部组件
      }
    },
    computed: {
      ...mapState([
        'latitude',
        'longitude'
      ])
    },
    methods: {
      ...mapActions([
        'getLocation'
      ]),
      loadBottom () {
        let offset = (this.page - 1) * this.limit
        getShops(this.latitude, this.longitude, offset, this.limit).then(res => {
          console.log(res)
          if (res.data.length) {
            this.page++
            res.data.forEach(item => {
              this.shops.push(item) // 追加数据
            })
          } else {
            this.hasMore = false
          }
          this.$refs.loadmore.onBottomLoaded()
        }).catch(err => {
          console.log(err)
        })
      },
      handleBottomChange (status) {
        console.log(status)
        this.bottomStatus = status
      },
      handleScroll () {
        let st = document.documentElement.scrollTop || document.body.scrollTop
        // console.log(st)
        this.showBackTop = st >= 400
      }
    },
    created () {
      this.getLocation().then(() => {
        // 获取地址
        getAddress(this.latitude, this.longitude).then(res => {
          console.log(res)
          this.address = {
            code: 0,
            msg: res.data.address
          }
        }).catch(() => {
          this.address = {
            code: 2,
            msg: '获取地址失败'
          }
        })
      }).then(() => {
        // 获取天气
        getWeather(this.latitude, this.longitude).then(res => {
          console.log(res)
          this.weather = res.data
        })
      }).then(() => {
        // 获取热搜关键字
        getHotSearchs(this.latitude, this.longitude).then(res => {
          console.log(res)
          this.hotSearchs = res.data
        })
      }).then(() => {
        // 获取食品导航入口
        getFoodEntries(this.latitude, this.longitude).then(res => {
          console.log(res)
          // 调用lodash的chunk方法将结果转成二维数组
          this.foodEntries = _.chunk(res.data[0].entries, 8)
        })
      }).then(() => {
        // 获取活动
        this.activities = require('@/common/activity')
        console.log(this.activities)
      }).then(() => {
        // 获取推荐商家
        getShops(this.latitude, this.longitude).then(res => {
          console.log(res)
          if (res.data.length) {
            this.page++
            res.data.forEach(item => {
              this.shops.push(item) // 追加数据
            })
          } else {
            this.hasMore = false
          }
        })
      }).catch(err => {
        console.log(err)
        this.address = {
          code: 3,
          msg: '不能定位'
        }
      })
    },
    mounted () {
      // 注册滚动事件
      window.addEventListener('scroll', this.handleScroll)
    },
    components: {
      'elm-tabbar': Tabbar,
      'elm-shopitem': ShopItem,
      'elm-backtop': BackTop
    }
  }
</script>

<style lang="less" scoped>
  @-webkit-keyframes loadMore-loading {
    to{
      -webkit-transform:rotate(1turn);
      transform:rotate(1turn)
    }
  }
  header {
    padding: 0.266667rem 0.373333rem 0rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color: #fff;
    .header-wrapper {
      height: 0.92rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .location {
          display: flex;
          align-items: center;
          width: 60%;
          font-weight: 700;
          .icon-location {
              width: 0.346667rem;
              height: 0.413333rem;
              fill: #fff;
          }
          .icon-arrow {
              width: 0.186667rem;
              height: 0.093333rem;
              fill: #fff;
          }
          span {
              margin: 0 0.133333rem;
              font-size: 0.453333rem;
              max-width: 80%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
          }
      }
      .weather {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          text-align: right;
          font-weight: 400;
          h3 {
            font-size: .373333rem;
          }
          p {
            font-size: .266667rem;
          }
        }
        img {
          margin-left: .106667rem;
          width: .733333rem;
          height: .733333rem;
        }
      }
    }
  }
  .search {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 999;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    margin-top: -2px;
    div {
        width: 100%;
        padding: 0.2rem 0.373333rem;
        margin: -.013333rem 0;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        a {
            width: 100%;
            height: 0.96rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            border-radius: 0.026667rem;
            font-size: 0.346667rem;
            font-weight: 0.346667rem;
            color: #666;
            text-decoration: none;
            svg {
                width: 0.32rem;
                height: 0.32rem;
                margin-right: 0.133333rem;
            }
        }
    }
  }
  .hot-search {
    height: 0.96rem;
    padding: 0.2rem 0.373333rem 0.4rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    width: 100%;
    margin-top: -2px;
    ul {
      width: 100%;
      white-space: nowrap;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        display: inline-block;
        color: #fff;
        &:not(:last-child) {
          margin-right: .4rem;
        }
      }
    }
  }
  main {
    padding-bottom: 1.6rem;
    svg {
      width: 100%;
    }
    .entries {
      height: 4.72rem;
      background: #fff;
      a {
        float: left;
        width: 25%;
        margin-top: .293333rem;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 1.2rem;
          height: 1.2rem;
        }
        span {
          display: block;
          margin-top: .133333rem;
          color: #666;
          font-size: .32rem;
        }
      }
      .mint-swipe-indicator.is-active{
        background-color: #000;
        opacity: 0.7;
      }
    }
    .activity {
      background: #fff;
      .banner {
        text-align: center;
        margin-bottom: .08rem;
        img {
          width: 9.466667rem;
          height: 2.373333rem;
          margin-left: .106667rem;
          max-width: 100%;
        }
      }
      .sales {
        margin-bottom: .08rem;
        display: flex;
        padding: 0 .266667rem;
        div {
          height: 3.733333rem;
          padding: .32rem 0 0 .4rem;
          background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
          flex: 1;
          position: relative;
          &:not(:last-child) {
            margin-right: .08rem;
          }
          h3 {
            font-size: .453333rem;
            font-weight: 700;
            margin-bottom: .133333rem;
          }
          p {
            font-size: .346667rem;
            color: #777;
            margin-bottom: .133333rem;
            strong {
              font-size: .32rem;
              font-weight: 700;
              color: #af8260;
            }
            em {
              font-size: .32rem;
              font-weight: 700;
              color: #333;
            }
            span {
              font-size: .32rem;
              font-weight: 700;
              color: #e81919;
            }
          }
          img {
            width: 3.2rem;
            height: 2.133333rem;
            position: absolute;
            right: 0;
            bottom: -.2rem;
          }
          &.sales-left {
            h3 {
              color: #e81919;
            }
          }
        }
      }
      .special {
        display: flex;
        padding: 0 .266667rem .28rem;
        div {
          flex: 1;
          height: 3.546667rem;
          text-align: center;
          position: relative;
          background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
          &:not(:last-child) {
            margin-right: .08rem;
          }
          h3 {
            font-size: .426667rem;
            font-weight: 700;
            color: #333;
            margin: .426667rem 0 .133333rem;
          }
          span {
            padding: 0 .053333rem;
            font-size: .293333rem;
            border: 1px solid #bbb;
            border-radius: .026667rem;
          }
          img {
            width: 3.093333rem;
            height: 2.053333rem;
            position: absolute;
            left: 0;
            bottom: 0;
            max-width: 100%;
          }
        }
      }
    }
    h2 {
      margin-top: .266667rem;
      font-weight: 600;
      background:#fff;
      border-top: 1px solid #eee;
      font-size: .426667rem;
      padding: .426667rem .266667rem 0;
    }
    .mint-loadmore-bottom {
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 1.066667rem;
      font-size: .346667rem;
      background: #fff;
      color: #555;
      .loadmore-icon {
        width: .4rem;
        height: .4rem;
        margin-right: .4rem;
        transform-origin: 50% 50%;
        animation: loadMore-loading 1s linear infinite;
      }
    }
  }


</style>
