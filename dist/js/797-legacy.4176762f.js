(self["webpackChunkzhku"]=self["webpackChunkzhku"]||[]).push([[797],{797:function(t,s,o){"use strict";o.r(s),o.d(s,{default:function(){return l}});var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"search"},[e("el-page-header",{attrs:{content:"搜索商品"},on:{back:t.goBack}}),e("div",{staticClass:"search-result"},[t.hasGoods?e("div",[e("el-row",t._l(t.goods,(function(s,o){return e("el-col",{key:s.gid,attrs:{span:8}},[e("el-card",{staticClass:"good-list-item",attrs:{"body-style":{padding:"0px"}}},[e("div",{staticClass:"img-box",on:{click:function(e){return t.showDetail(o,s)}}},[e("img",{staticClass:"image",attrs:{src:s.pic}})]),e("div",{staticStyle:{padding:"14px"},on:{click:function(e){return t.showDetail(o,s)}}},[e("span",[t._v(t._s(s.gname))]),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"desc"},[t._v(t._s(t._f("ellipsis_remark")(s.remark)))]),e("el-button",{staticClass:"button",attrs:{type:"text"}},[e("span",{staticStyle:{color:"rgb(42, 103, 45)","font-size":"18px"}},[t._v("￥"+t._s(s.price))])])],1)])])],1)})),1),e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":9,total:t.totalSort},on:{"current-change":t.pageSort}})],1)],1):e("div",{staticClass:"no-goods"},[e("img",{attrs:{src:o(2536),alt:"没有该商品"}}),e("div",[t._v("没有该商品")])])])],1)},a=[],i=(o(7042),o(4916),o(4765),{data:function(){return{goods:[],input:"",hasGoods:!1,totalSort:0}},filters:{ellipsis_remark:function(t){return t?t.length>10?t.slice(0,10)+"...":t:""}},methods:{goBack:function(){this.$router.go(-1)},search:function(t){var s=this;this.$axios.get("/goods/getGoodsBySelect",{params:{keyword:t}}).then((function(t){s.goods=t.data.goods,s.goods.length>0&&(s.hasGoods=!0,s.totalSort=t.data.total,s.$store.dispatch("getGoodList",s.goods))}))},pageSort:function(t){var s=this;console.log("pageSort",t),this.$axios.get("/goods/ByPageindex",{params:{pageindex:t,pagesize:9}}).then((function(t){s.goods=t.data.goods,s.$store.dispatch("getGoodList",s.goods),console.log(s.$store.state.goodList)}))},showDetail:function(t,s){console.log("获取到了商品详情",t,s),this.$router.push({path:"/goodsDetail",query:{gid:s.gid}})}},watch:{$route:function(){var t=this.$route.query.input;this.search(t)}},created:function(){var t=this.$route.query.input;this.search(t)}}),n=i,r=o(1001),c=(0,r.Z)(n,e,a,!1,null,"dd95b09e",null),l=c.exports},1150:function(t){t.exports=Object.is||function(t,s){return t===s?0!==t||1/t===1/s:t!=t&&s!=s}},4765:function(t,s,o){"use strict";var e=o(6916),a=o(7007),i=o(9670),n=o(4488),r=o(1150),c=o(1340),l=o(8173),d=o(7651);a("search",(function(t,s,o){return[function(s){var o=n(this),a=void 0==s?void 0:l(s,t);return a?e(a,s,o):new RegExp(s)[t](c(o))},function(t){var e=i(this),a=c(t),n=o(s,e,a);if(n.done)return n.value;var l=e.lastIndex;r(l,0)||(e.lastIndex=0);var u=d(e,a);return r(e.lastIndex,l)||(e.lastIndex=l),null===u?-1:u.index}]}))},2536:function(t,s,o){"use strict";t.exports=o.p+"img/no-goods.62dc7e87.png"}}]);