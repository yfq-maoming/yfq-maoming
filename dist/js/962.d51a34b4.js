"use strict";(self["webpackChunkzhku"]=self["webpackChunkzhku"]||[]).push([[962],{6962:function(t,a,s){s.r(a),s.d(a,{default:function(){return c}});var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"bookmark"},[o("el-page-header",{attrs:{content:"我的收藏"},on:{back:t.goBack}}),o("el-tabs",{attrs:{type:"border-card"}},[o("el-tab-pane",{attrs:{label:"我的收藏"}},[t.isHasGoods?o("div",{staticClass:"bookmark-list"},[o("el-row",t._l(t.goods,(function(a){return o("el-col",{key:a.gid,attrs:{span:8}},[o("el-card",{staticClass:"bookmark-list-item",attrs:{"body-style":{padding:"0px"}}},[o("div",{staticClass:"img-box"},[o("img",{staticClass:"image",attrs:{src:a.pic}})]),o("div",{staticStyle:{padding:"14px"}},[o("span",[t._v(t._s(a.gname))]),o("div",{staticClass:"bottom clearfix"},[o("time",{staticClass:"time"},[t._v(t._s(t._f("ellipsis")(a.remark)))]),o("el-button",{attrs:{type:"success",icon:"el-icon-search",circle:""},on:{click:function(s){return t.descBtn(a)}}}),o("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(s){return t.delBtn(a)}}})],1)])])],1)})),1),o("div",{staticClass:"pagination"},[o("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":9,total:t.total},on:{"current-change":t.page}})],1)],1):o("div",{staticClass:"no-goods"},[o("img",{attrs:{src:s(2536),alt:"没有已收藏的商品"}}),o("div",[t._v("暂无已收藏的商品")])])])],1)],1)},e=[],i={data:function(){return{uid:null,total:0,goods:[],isHasGoods:!1}},watch:{goods:function(){this.isHasGoods=0!=this.goods.length}},methods:{goBack:function(){this.$router.go(-1)},descBtn:function(t){this.$router.push({path:"/goodsDetail",query:{gid:t.gid}})},delBtn:function(t){var a=this;this.$axios.post("/delBookmark",{userId:localStorage.getItem("userId"),goodId:t.gid}).then((function(t){a.$message({message:"删除成功",type:"success"}),a.$axios.get("/myBookmark?userId="+localStorage.getItem("userId")).then((function(t){a.total=t.data.total,a.goods=t.data.goods}))}))},page:function(t){var a=this;console.log("当前页数：",t),this.$axios.get("/findBookmark/"+localStorage.getItem("userId")+"/"+t+"/9").then((function(t){a.goods=t.data.data.data,a.total=t.data.data.totalSize}))}},filters:{ellipsis:function(t){return t?t.length>10?t.slice(0,10)+"...":t:""}},created:function(){var t=this;this.$axios.get("/myBookmark?userId="+localStorage.getItem("userId")).then((function(a){t.goods=a.data.goods,t.total=a.data.total}))}},n=i,r=s(1001),l=(0,r.Z)(n,o,e,!1,null,"5d84a51f",null),c=l.exports},2536:function(t,a,s){t.exports=s.p+"img/no-goods.62dc7e87.png"}}]);