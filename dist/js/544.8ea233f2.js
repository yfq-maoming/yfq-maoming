"use strict";(self["webpackChunkzhku"]=self["webpackChunkzhku"]||[]).push([[544],{2544:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-goods"},[a("el-page-header",{attrs:{content:"发布商品"},on:{back:t.goBack}}),a("div",{staticClass:"add-pic"},[a("form",[a("input",{attrs:{type:"file",name:"file"},on:{change:function(e){return t.getFile(e)}}}),a("button",{staticClass:"button button-primary button-pill button-small",on:{click:function(e){return t.submit(e)}}},[t._v(" 提交 ")])])]),a("div",{staticClass:"index"},[a("div",{staticClass:"form"},[a("el-form",{attrs:{inline:!0,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"商品分类"}},[a("el-radio-group",{model:{value:t.catalog,callback:function(e){t.catalog=e},expression:"catalog"}},[a("el-radio",{attrs:{label:"数码/办公"}}),a("el-radio",{attrs:{label:"运动/户外"}}),a("el-radio",{attrs:{label:"书籍/学习"}}),a("el-radio",{attrs:{label:"乐器/美术"}}),a("el-radio",{attrs:{label:"游戏/模型"}}),a("el-radio",{attrs:{label:"生活/家居"}}),a("el-radio",{attrs:{label:"文具/箱包"}}),a("el-radio",{attrs:{label:"服装/饰品"}}),a("el-radio",{attrs:{label:"美妆/清洁"}}),a("el-radio",{attrs:{label:"食品/零食"}})],1)],1),a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:t.good.gname,callback:function(e){t.$set(t.good,"gname",e)},expression:"good.gname"}})],1),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{placeholder:"请输入描述"},model:{value:t.good.remark,callback:function(e){t.$set(t.good,"remark",e)},expression:"good.remark"}})],1),a("el-form-item",{attrs:{label:"价格"}},[a("el-input",{attrs:{placeholder:"请输入价格"},model:{value:t.good.price,callback:function(e){t.$set(t.good,"price",e)},expression:"good.price"}})],1)],1),a("div",{staticClass:"option"},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary"},on:{click:t.confirmSubmit}},[t._v("确认发布")])],1)],1)])],1)},l=[],i={data:function(){return{catalog:"",file:"",username:"xmx",pic:"",good:{gid:null,uid:null,gname:"",price:null,pic:"",status:1,remark:"",cid:null}}},methods:{goBack:function(){this.$router.push("/allGoods")},getFile:function(t){this.file=t.target.files[0],console.log("getFile",this.file)},submit:function(t){var e=this;t.preventDefault();var a=new FormData;a.append("file",this.file),this.$axios.post("/upload/good",a).then((function(t){e.good.pic=t.data.data,console.log("获取到了图片链接",e.good.pic),e.$message({message:"上传成功",type:"success"})}))},showUserInfo:function(){console.log("showUserInfo():",this.user)},getCid:function(t){return"数码/办公"==t?1:"运动/户外"==t?2:"书籍/学习"==t?3:"乐器/美术"==t?4:"游戏/模型"==t?5:"生活/家居"==t?6:"文具/箱包"==t?7:"服装/饰品"==t?8:"美妆/清洁"==t?9:10},confirmSubmit:function(){var t=this,e=this.catalog;this.good.cid=this.getCid(e),this.$axios.post("/api/post/addGood",this.good).then((function(e){t.$message({message:"上传成功",type:"success"})}))}},created:function(){this.good.uid=localStorage.getItem("userId")}},s=i,r=a(1001),n=(0,r.Z)(s,o,l,!1,null,"80025048",null),c=n.exports}}]);