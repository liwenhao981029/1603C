webpackJsonp([5],{24:function(t,e,i){"use strict";function a(t){i(49)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(32),n=i(51),r=i(6),l=a,o=r(s.a,n.a,!1,l,null,null);e.default=o.exports},32:function(t,e,i){"use strict";var a=i(7),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e.a={name:"CarType",computed:s({},Object(a.c)({AllList:function(t){return t.a.AllList}})),methods:s({},Object(a.b)({getAllList:"a/AllList"}),{getRouter:function(){this.AllList(this.$route.query.id)}}),mounted:function(){var t=this.$route.query.id;this.msg=t,console.log(this.msg)},watch:{$route:"getParams"}}},49:function(t,e,i){var a=i(50);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(5)("2643139c",a,!0,{})},50:function(t,e,i){e=t.exports=i(4)(!1),e.push([t.i,".CarType,html{width:100%}.head_green{width:100%;height:30px;background:#79cd92;text-align:center;line-height:30px;caret-color:#fff;color:#fff}.head_Data{width:100%;display:flex;padding-top:10px;padding-bottom:10px}.img{width:115px;height:70px;margin-left:10px;border:1px solid #ccc}.img img{width:100%;height:100%}.text{margin-left:10px}.title{background:#ccc;font-size:12px;height:30px;color:#fff;line-height:30px;text-indent:2em}.from,.title{width:100%}.from ul li{display:flex;width:100%;height:40px;justify-content:space-between;align-items:center;border-bottom:1px solid #eee;text-indent:1em}.from ul li input{border:none;outline:none;text-align:right;margin-right:10px}.shooping{width:100%;height:85px;border-bottom:1px solid #eee}.shooping div{display:flex;justify-content:space-between;text-indent:1em}.wen{width:100%;display:flex;align-items:center;height:64px;position:relative}.wen p{background:#3aacff;border-radius:10px;color:#fff;width:300px;height:35px;text-align:center;line-height:35px;margin-top:20px;position:absolute;top:50%;left:50%;margin-left:-150px;margin-top:-17.5px}",""])},51:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"CarType"},[i("div",{staticClass:"head_green"},[t._v("可以向多个商家询问最低价")]),t._v(" "),i("div",{staticClass:"head_Data"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.AllList.details.serial.Picture,alt:""}})]),t._v(" "),i("div",{staticClass:"text"},[i("p",[t._v(t._s(t.AllList.details.serial.AliasName))]),t._v(" "),i("p",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.AllList.details.car_name))])])]),t._v(" "),i("div",{staticClass:"title"},[t._v("个人信息")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._l(t.AllList.list,function(e,a){return i("div",{key:a,staticClass:"shooping"},[i("div",{staticStyle:{"margin-top":"15px"}},[i("span",[t._v(t._s(e.dealerShortName))]),t._v(" "),i("span",{staticStyle:{color:"red","font-size":"12px","margin-right":"10px"}},[t._v(t._s(e.promotePrice))])]),t._v(" "),i("div",{staticStyle:{"font-size":"12px",color:"#a2a2a2","margin-top":"25px"}},[i("span",[t._v(t._s(e.address))]),t._v(" "),i("span",{staticStyle:{"margin-right":"10px"}},[t._v("售"+t._s(e.saleRange))])])])})],2)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"from"},[i("ul",[i("li",[i("span",[t._v("姓名")]),i("input",{attrs:{type:"text",placeholder:"请输入你的真实中文姓名"}})]),t._v(" "),i("li",[i("span",[t._v("手机")]),i("input",{attrs:{type:"text",placeholder:"请输入你的真实手机号码"}})]),t._v(" "),i("li",[i("span",[t._v("城市")]),i("input",{attrs:{type:"text",placeholder:"请输入你真实的中文姓名"}})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wen"},[i("p",[t._v("询最低价")])])}],n={render:a,staticRenderFns:s};e.a=n}});
//# sourceMappingURL=5.build.js.map