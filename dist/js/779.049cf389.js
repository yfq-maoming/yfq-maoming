"use strict";(self["webpackChunkzhku"]=self["webpackChunkzhku"]||[]).push([[779],{3779:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{fixed:"",prop:"gid",label:"商品编号",width:"100",align:"center"}}),a("el-table-column",{attrs:{fixed:"",prop:"gid",label:"发布者账号",width:"100",align:"center"}}),a("el-table-column",{attrs:{prop:"gname",label:"商品名称",width:"200",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"price",label:"价格",width:"120",align:"center"}}),a("el-table-column",{attrs:{prop:"remark",label:"详情",width:"280",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"time",label:"发布时间",width:"200",align:"center"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"250",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){return t.edit(e.row)}}},[t._v("修改")]),a("el-button",{attrs:{size:"small"},on:{click:function(a){return t.deleteGoods(e.row)}}},[t._v("删除")])]}}])})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"pagination-div"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":5,total:t.total},on:{"current-change":t.page}})],1)],1)},i=[],o={data:function(){return{total:0,isShow:!1,tableData:[],user:{name:"",password:"",age:null,sex:""}}},watch:{tableData:function(){this.isShow=this.total>5}},methods:{edit:function(t){this.$router.push({path:"/updateGoods",query:{gid:t.gid}})},deleteGoods:function(t){var e=this;this.$confirm("此操作将永久删除信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$axios.post("/admin/deleteGoods",t.gid)})).then((function(t){e.reload(),e.$message({type:"success",message:"删除成功!"})})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},page:function(t){var e=this;this.$axios.get("/api/get/newList",{params:{pageindex:t,pagesize:9}}).then((function(t){e.tableData=t.data.newList}))}},created:function(){var t=this;this.$axios.get("/admin/goodsList").then((function(e){t.tableData=e.data.goodsList,t.total=e.data.total}))},inject:["reload"]},l=o,s=a(1001),r=(0,s.Z)(l,n,i,!1,null,"1544c2ea",null),c=r.exports}}]);