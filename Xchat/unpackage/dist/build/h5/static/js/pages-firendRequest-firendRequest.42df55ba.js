(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-firendRequest-firendRequest"],{"0721":function(t,e,n){"use strict";var a=n("3d88"),i=n.n(a);i.a},"0b24":function(t,e,n){"use strict";var a=n("4ea4");n("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("26e1")),r=a(n("8e6d")),s={onLoad:function(){this.getStorages(),this.friendRequest()},components:{TopBar:i.default},data:function(){return{uid:"",token:"",myname:"",request:[]}},methods:{back:function(){uni.navigateBack({})},changeDate:function(t){return r.default.changeDate(t)},getStorages:function(){try{var t=uni.getStorageSync("user");t?(this.uid=t.id,this.token=t.token,this.myname=t.name):uni.redirectTo({url:"../login/login"})}catch(e){}},friendRequest:function(){var t=this;uni.request({url:this.serverUrl+"/index/getfriend",data:{uid:this.uid,token:this.token,state:1},method:"POST",success:function(e){if(200==e.data.status){var n=e.data.result;for(var a in n)n[a].imgurl=t.serverUrl+n[a].imgurl,t.getMsg(n,a);t.request=n}else 300==e.data.status?uni.redirectTo({url:"../login/login?name="+t.myname}):500==e.data.status&&uni.showToast({title:"服务器出错了",icon:"none",duration:2e3})}})},getMsg:function(t,e){var n=this;uni.request({url:this.serverUrl+"/index/getlastmsg",data:{uid:this.uid,fid:t[e].id,token:this.token},method:"POST",success:function(a){if(200==a.data.status){var i=a.data.result,r=t[e];r.msg=i.message,t.splice(e,1,r)}else 300==a.data.status?uni.redirectTo({url:"../login/login?name="+n.myname}):500==a.data.status&&uni.showToast({title:"服务器出错了",icon:"none",duration:2e3})}})},reject:function(t){var e=this;uni.request({url:this.serverUrl+"/friend/delete",data:{uid:this.uid,fid:t,token:this.token},method:"POST",success:function(n){if(200==n.data.status){for(var a in e.request)e.request[a].id==t&&e.request.splice(a,1);uni.showToast({title:"删除好友成功",icon:"none",duration:2e3})}else 300==n.data.status?uni.redirectTo({url:"../login/login?name="+e.myname}):500==n.data.status&&uni.showToast({title:"服务器出错了",icon:"none",duration:2e3})}})},aggree:function(t){var e=this;uni.request({url:this.serverUrl+"/friend/update",data:{uid:this.uid,fid:t,token:this.token},method:"POST",success:function(n){if(200==n.data.status){for(var a in e.request)e.request[a].id==t&&e.request.splice(a,1);uni.showToast({title:"添加好友成功",icon:"none",duration:2e3})}else 300==n.data.status?uni.redirectTo({url:"../login/login?name="+e.myname}):500==n.data.status&&uni.showToast({title:"服务器出错了",icon:"none",duration:2e3})}})}}};e.default=s},"225e":function(t,e,n){"use strict";n.r(e);var a=n("0b24"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"26e1":function(t,e,n){"use strict";n.r(e);var a=n("4a1b"),i=n("adc7");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("0721");var s,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"5cf21be6",null,!1,a["a"],s);e["default"]=u.exports},"3a4e":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"status_bar"}),a("TopBar",{staticClass:"top-bar"},[a("v-uni-image",{staticClass:"back",attrs:{slot:"left",src:n("6179")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}},slot:"left"}),a("v-uni-view",{staticClass:"title",attrs:{slot:"center"},slot:"center"},[t._v("好友请求")]),a("v-uni-view",{staticClass:"confirm",attrs:{slot:"right"},slot:"right"})],1),a("v-uni-view",{staticClass:"main"},t._l(t.request,(function(e,n){return a("v-uni-view",{key:n,staticClass:"request"},[a("v-uni-view",{staticClass:"request-top"},[a("v-uni-view",{staticClass:"reject btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.reject(e.id)}}},[t._v("拒绝")]),a("v-uni-view",{staticClass:"head-img"},[a("v-uni-image",{attrs:{src:e.imgurl}})],1),a("v-uni-view",{staticClass:"aggree btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.aggree(e.id)}}},[t._v("同意")])],1),a("v-uni-view",{staticClass:"request-name"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"time"},[t._v(t._s(t.changeDate(e.lastTime)))])],1),a("v-uni-view",{staticClass:"notic"},[t._v(t._s(e.msg))])],1)})),1)],1)},r=[]},"3d88":function(t,e,n){var a=n("ce2b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("4141f09b",a,!0,{sourceMap:!1,shadowMode:!1})},"4a1b":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"top-bar"},[n("v-uni-view",{staticClass:"top-bar-left"},[t._t("left")],2),n("v-uni-view",{staticClass:"top-bar-center"},[t._t("center")],2),n("v-uni-view",{staticClass:"top-bar-right"},[t._t("right")],2)],1)},r=[]},5246:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}}};e.default=a},6179:function(t,e,n){t.exports=n.p+"static/img/back.faeeaca1.png"},"669d":function(t,e,n){var a=n("e666");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("2e1590de",a,!0,{sourceMap:!1,shadowMode:!1})},"82d9":function(t,e,n){"use strict";n.r(e);var a=n("3a4e"),i=n("225e");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("d1ea");var s,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"19583172",null,!1,a["a"],s);e["default"]=u.exports},"8e6d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={changeDate:function(t){var e=new Date(t),n=new Date,a=e.getHours(),i=e.getMinutes(),r=e.getFullYear(),s=e.getMonth()+1,o=e.getDate(),u=(n.getHours(),n.getMinutes(),n.getFullYear()),c=n.getMonth()+1,d=n.getDate();return o===d&&s===c&&r===u?(a<10&&(a="0"+a),i<10&&(i="0"+i),a+":"+i):o+1===d&&s===c&&r===u?(a<10&&(a="0"+a),i<10&&(i="0"+i),"昨天"+a+":"+i):(a<10&&(a="0"+a),i<10&&(i="0"+i),r+"/"+s+"/"+o)},changeTime:function(t){var e=new Date(t),n=(e.getHours(),e.getMinutes(),e.getFullYear()),a=e.getMonth()+1,i=e.getDate();return a<10&&(a="0"+a),i<10&&(i="0"+i),n+"-"+a+"-"+i},chatDate:function(t){var e=new Date(t),n=new Date,a=e.getHours(),i=e.getMinutes(),r=e.getFullYear(),s=e.getMonth()+1,o=e.getDate(),u=(n.getHours(),n.getMinutes(),n.getFullYear()),c=n.getMonth()+1,d=n.getDate();return o===d&&s===c&&r===u?(a<10&&(a="0"+a),i<10&&(i="0"+i),a+":"+i):o+1===d&&s===c&&r===u?(a<10&&(a="0"+a),i<10&&(i="0"+i),"昨天"+a+":"+i):r===u?(a<10&&(a="0"+a),i<10&&(i="0"+i),s+"月"+o+"日 "+a+":"+i):(a<10&&(a="0"+a),i<10&&(i="0"+i),r+"年"+s+"月"+o+"日 "+a+":"+i)},fileName:function(t){var e=new Date(t),n=(e.getHours(),e.getMinutes(),e.getFullYear()),a=e.getMonth()+1,i=e.getDate();return a<10&&(a="0"+a),i<10&&(i="0"+i),n+a+i}};e.default=a},adc7:function(t,e,n){"use strict";n.r(e);var a=n("5246"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},ce2b:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.top-bar[data-v-5cf21be6]{z-index:99;height:%?88?%;position:fixed;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.top-bar-center[data-v-5cf21be6]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.top-bar-left[data-v-5cf21be6]{-webkit-box-flex:0;-webkit-flex:none;flex:none;padding-left:%?32?%}.top-bar-right[data-v-5cf21be6]{-webkit-box-flex:0;-webkit-flex:none;flex:none;padding-right:%?32?%}',""]),t.exports=e},d1ea:function(t,e,n){"use strict";var a=n("669d"),i=n.n(a);i.a},e666:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.status_bar[data-v-19583172]{height:0;width:100%}.top-bar[data-v-19583172]{background-color:hsla(0,0%,95.7%,.96);border-bottom:1px solid rgba(39,40,50,.1)}.top-bar .back[data-v-19583172]{float:left;padding:%?20?% 0;width:%?48?%;height:%?48?%}.top-bar .title[data-v-19583172]{color:#272832;font-size:%?40?%;padding:%?16?% 0}.top-bar .cancel[data-v-19583172],\r\n.top-bar .confirm[data-v-19583172]{font-size:%?32?%}.top-bar .confirm[data-v-19583172]{width:%?64?%}.main[data-v-19583172]{padding:%?88?% %?32?% 0}.main .request[data-v-19583172]{margin:%?132?% 0 %?20?%;padding:0 %?32?% %?20?%;background-color:#fff;box-shadow:0 %?24?% %?64?% %?-8?% rgba(0,0,0,.1);border-radius:%?20?%}.main .request-top[data-v-19583172]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.main .request-top .btn[data-v-19583172]{-webkit-box-flex:0;-webkit-flex:none;flex:none;width:%?160?%;height:%?64?%;background-color:rgba(255,93,91,.1);border-radius:%?40?%;text-align:center;font-size:%?32?%;line-height:%?64?%}.main .request-top .btn[data-v-19583172]:active{background-color:rgba(39,40,50,.2)}.main .request-top .reject[data-v-19583172]{color:#ff5d5b}.main .request-top .aggree[data-v-19583172]{background-color:#ffe431}.main .request-top .head-img[data-v-19583172]{margin-top:%?-104?%;-webkit-box-flex:1;-webkit-flex:auto;flex:auto;text-align:center}.main .request-top .head-img uni-image[data-v-19583172]{width:%?144?%;height:%?144?%;border-radius:50%}.main .request-name[data-v-19583172]{text-align:center;padding:%?20?% 0 %?40?%}.main .request-name .title[data-v-19583172]{font-size:%?36?%;font-weight:600;color:#272832;line-height:%?50?%}.main .request-name .time[data-v-19583172]{font-size:%?24?%;color:rgba(39,40,50,.6);line-height:%?34?%}.main .notic[data-v-19583172]{font-size:%?28?%;color:#272832;line-height:%?40?%;padding:%?20?% %?32?%;border-radius:%?20?%;background-color:#f3f4f6}',""]),t.exports=e}}]);