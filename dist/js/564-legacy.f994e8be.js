"use strict";(self["webpackChunkzhku"]=self["webpackChunkzhku"]||[]).push([[564],{9564:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods-detail"},[s("el-page-header",{attrs:{content:"商品详情"},on:{back:t.goBack}}),s("div",{staticClass:"index"},[s("div",{staticClass:"imgBox"},[s("img",{attrs:{src:t.good.pic,alt:""}})]),s("div",{staticClass:"desc"},[s("div",{staticClass:"gname"},[t._v(" "+t._s(t.good.gname)+" ")]),s("div",{staticClass:"price"},[t._v("￥"+t._s(t.good.price))]),s("div",{staticClass:"remark"},[t._v(" "+t._s(t.good.remark)+" ")]),s("div",{staticClass:"purchase"},[s("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary"},on:{click:t.purchaseBtn}},[t._v("立即购买")]),s("el-button",{directives:[{name:"show",rawName:"v-show",value:0==t.isCollected,expression:"isCollected == false"}],staticStyle:{width:"120px"},attrs:{type:"warning"},on:{click:t.collectBtn}},[t._v("加入收藏")]),s("el-button",{directives:[{name:"show",rawName:"v-show",value:1==t.isCollected,expression:"isCollected == true"}],staticStyle:{width:"120px"},attrs:{type:"warning",disabled:""},on:{click:t.collectBtn}},[t._v("已收藏")])],1)])]),s("div",{staticClass:"message"},[s("div",{staticClass:"send-message"},[s("el-form",{attrs:{inline:!0,model:t.addMessage,"label-width":"80px"}},[s("el-form-item",[s("el-input",{attrs:{placeholder:"给卖家留言试试"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.messageBtn.apply(null,arguments)}},model:{value:t.addMessage.content,callback:function(e){t.$set(t.addMessage,"content",e)},expression:"addMessage.content"}})],1),s("el-form-item",[s("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary"},on:{click:t.messageBtn}},[t._v("发布留言")])],1)],1)],1),t.isDataArrive?s("div",{staticClass:"message-list"},t._l(t.message,(function(e,a){return s("div",{key:a,staticClass:"list-item"},[s("el-divider"),s("div",{staticClass:"list-item-index"},[s("div",{staticClass:"message-avatar content-item"},[s("img",{attrs:{src:e.avatar,alt:""}})]),s("div",{staticClass:"message-username content-item"},[t._v(t._s(e.username))]),s("div",{staticClass:"message-content content-item"},[t._v(" "+t._s(e.content)+" ")]),s("div",{staticClass:"message-time content-item"},[t._v(" "+t._s(e.createTime)+" ")])])],1)})),0):t._e(),t.isPaginationShow?s("div",{staticClass:"pagination"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":6,total:t.totalSort},on:{"current-change":t.page}})],1):t._e()])],1)},i=[],o={data:function(){return{isDataArrive:!1,isCollected:!1,totalSort:0,isPaginationShow:!1,gid:1,good:{gid:1,uid:1,gname:"",price:0,pic:"",status:1,remark:"",cid:1},message:{userId:null,username:"",avatar:"",goodId:null,gname:"",pic:"",content:"",createTime:""},addMessage:{userId:null,goodId:null,content:""},collect:{userId:null,goodId:null}}},watch:{totalSort:function(){this.isPaginationShow=this.totalSort>6}},methods:{goBack:function(){this.$router.go(-1)},purchaseBtn:function(){this.$message({message:"购买成功",type:"success"})},collectBtn:function(){var t=this;this.collect.goodId=this.good.gid,this.collect.userId=localStorage.getItem("userId"),this.$axios.post("/addBookmark",this.collect).then((function(e){console.log(e.data),t.isCollected=!0,t.$message({message:"已加入收藏",type:"success"})}))},messageBtn:function(){var t=this;this.addMessage.userId=localStorage.getItem("userId"),this.addMessage.goodId=this.good.gid,this.$axios.post("/addMessage",this.addMessage).then((function(e){t.$message({message:"留言成功",type:"success"}),t.addMessage.content="",t.$axios.get("/api/getMessage",{params:{gid:t.gid}}).then((function(e){t.message=e.data.message,t.totalSort=e.data.total,t.isDataArrive=!0}))}))},page:function(t){var e=this;this.$axios.get("/api/msgList",{params:{pageindex:t}}).then((function(t){e.message=t.data.message}))},getGoodMsg:function(t){for(var e=0;e<this.$store.state.goodList.length;e++)this.$store.state.goodList[e].gid==t&&(this.good=this.$store.state.goodList[e])}},created:function(){var t=this;this.gid=this.$route.query.gid,this.getGoodMsg(this.gid),this.$axios.get("/api/getMessage",{params:{gid:this.gid}}).then((function(e){t.message=e.data.message,t.totalSort=e.data.total,t.isDataArrive=!0})),this.$axios.get("/api/Bookmark?userId="+localStorage.getItem("userId")+"&gid="+this.good.gid).then((function(e){t.isCollected=e.data.isBookMark}))}},n=o,d=s(1001),l=(0,d.Z)(n,a,i,!1,null,"13cafaf6",null),c=l.exports}}]);