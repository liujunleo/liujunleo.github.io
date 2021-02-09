(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-407b9eb8"],{"2f1c":function(t,a,e){},"3b0e":function(t,a,e){"use strict";e("8cea")},"408a":function(t,a,e){var n=e("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"8cea":function(t,a,e){},9406:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-container"},[e(t.currentRole,{tag:"component"})],1)},i=[],c=e("5530"),s=e("2f62"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"platform-container data"},[e("Header",{attrs:{buttonName:"平台管理",url:"/platform"}}),e("div",{staticClass:"data-container"},[e("div",{staticClass:"container-left"},[e("div",{staticClass:"data-card"},[e("p",{staticClass:"data-card-title"},[t._v("实时统计")]),e("div",{staticClass:"count",staticStyle:{height:"calc((100vh - 374px) /3)"}},[e("div",{staticClass:"count-item"},[e("div",{staticClass:"count-item__content"},[e("p",[t._v("当前织机总数(台)")]),e("p",[t._v(t._s(t.data1.deviceNumber))])])]),e("div",{staticClass:"count-item"},[e("div",{staticClass:"count-item__content"},[e("p",[t._v("注册公司数(家)")]),e("p",[t._v(t._s(t.data1.companyNumber))])])]),e("div",{staticClass:"count-item"},[e("div",{staticClass:"count-item__content"},[e("p",[t._v("当前开机率(%)")]),e("p",[t._v(t._s(t.data1.activeRate)+"%")])])])])]),t.data4?e("PlatformRank",{staticClass:"charts",attrs:{data:t.data4,title:"全国在织品种排行榜",id:"echarts_1",width:"100%",height:"calc(100vh - 174px - ((100vh - 140px) /3))"}}):t._e()],1),e("div",{staticClass:"container-center"},[e("div",{staticClass:"center-count"},[e("div",{staticClass:"center-count-item"},[e("p",[t._v("当月全国产量")]),e("p",[t._v(t._s(t.data2.currentMonthNationalOutput))])]),e("div",{staticClass:"center-count-item"},[e("p",[t._v("上月全国产量")]),e("p",[t._v(t._s(t.data3.lastMonthNationalOutput))])])]),t.data9?e("Map",{staticClass:"charts",attrs:{data:t.data9,id:"map",width:"100%",height:"calc(100vh - ((100vh - 285px) /3) - 175px)"}}):t._e(),t.data5?e("LineChart",{staticClass:"charts",attrs:{data:t.data5,title:"全国产量折线图",unit:"公斤",itemName:"产量",id:"echarts_2",width:"100%",height:"calc((100vh - 285px) /3)"}}):t._e()],1),e("div",{staticClass:"container-right"},[t.data6?e("Bar",{staticClass:"charts",attrs:{data:t.data6,title:"全国销量排行榜",itemName:"销量",unit:"公斤",id:"echarts_3",width:"100%",height:"calc((100vh - 285px) /3)"}}):t._e(),t.data7?e("Bar",{staticClass:"charts",attrs:{data:t.data7,title:"全国产量排行榜",itemName:"产量",unit:"公斤",id:"echarts_4",width:"100%",height:"calc((100vh - 285px) /3)"}}):t._e(),t.data8?e("Pie",{staticClass:"charts",attrs:{title:"全国各品种产量排行榜",data:t.data8,id:"echarts_5",width:"100%",height:"calc((100vh - 285px) /3)"}}):t._e()],1)])],1)},o=[],l=(e("b680"),e("63e3"),e("9e13")),d=e("b40f"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"data-card"},[e("p",{staticClass:"data-card-title"},[t._v(t._s(t.title))]),e("div",{class:"flex "+t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}},[e("div",{staticClass:"ranks"},t._l(t.rankList,(function(a,n){return e("div",{key:n,staticClass:"rank-item"},[e("div",{staticClass:"rank-title"},[e("span",[t._v(t._s(a.name))]),e("span",{staticClass:"rank-index"},[t._v(t._s(n>2?"":"TOP")+t._s(n+1))])]),e("div",{staticClass:"rank-item__progress",style:"width: "+a.progress+"%;"})])})),0)])])},h=[],p=(e("d81d"),e("f42c")),f={mixins:[p["a"]],props:{data:{type:Array,default:[]},title:{type:String,default:""},className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},data:function(){return{rankList:[]}},mounted:function(){var t=this.data,a=t[0].value;t.map((function(t){t.progress=t.value/a*100})),this.rankList=t}},v=f,m=(e("3b0e"),e("2877")),_=Object(m["a"])(v,u,h,!1,null,"4ba84be6",null),b=_.exports,g=e("3225"),C=e("bfdd"),x=e("c640"),O=e("7942"),w=e("4ec3"),y={name:"Dashboard",components:{Header:l["a"],Bar:d["a"],PlatformRank:b,Pie:g["a"],Map:C["a"],Area:x["a"],LineChart:O["a"]},data:function(){return{data1:{},data2:{},data3:{},data4:null,data5:null,data6:null,data7:null,data8:null,data9:null}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;Object(w["g"])({module:"realTimeStats"}).then((function(a){a.activeRate=(100*a.activeRate).toFixed(2),t.data1=a})),Object(w["g"])({module:"currentMonthNationalOutput"}).then((function(a){t.data2=a})),Object(w["g"])({module:"lastMonthNationalOutput"}).then((function(a){t.data3=a})),Object(w["g"])({module:"topProducts"}).then((function(a){t.data4=a.topProducts})),Object(w["g"])({module:"nationalOutput"}).then((function(a){t.data5=a.nationalOutput})),Object(w["g"])({module:"topSalesCompany"}).then((function(a){t.data6=a.topSalesCompany})),Object(w["g"])({module:"topOutputCompany"}).then((function(a){t.data7=a.topOutputCompany})),Object(w["g"])({module:"topOutputProduct"}).then((function(a){t.data8=a.topOutputProduct})),Object(w["g"])({module:"companyListForMap"}).then((function(a){t.data9=a.companies}))}}},N=y,j=(e("9d0d"),Object(m["a"])(N,r,o,!1,null,"9e6d3e3c",null)),k=j.exports,S=e("e3d0"),P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._v("operator1")])},M=[],R={},F=R,E=Object(m["a"])(F,P,M,!1,null,null,null),L=E.exports,D={name:"Dashboard",components:{platform:k,company:S["default"],operator:L},computed:Object(c["a"])({},Object(s["b"])(["role","token","userInfo"])),data:function(){return{currentRole:""}},created:function(){this.currentRole="P_ADMIN"===this.userInfo.UserGroup.role?"platform":"company"}},I=D,$=Object(m["a"])(I,n,i,!1,null,null,null);a["default"]=$.exports},"9d0d":function(t,a,e){"use strict";e("2f1c")},b680:function(t,a,e){"use strict";var n=e("23e7"),i=e("a691"),c=e("408a"),s=e("1148"),r=e("d039"),o=1..toFixed,l=Math.floor,d=function(t,a,e){return 0===a?e:a%2===1?d(t,a-1,e*t):d(t*t,a/2,e)},u=function(t){var a=0,e=t;while(e>=4096)a+=12,e/=4096;while(e>=2)a+=1,e/=2;return a},h=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){o.call({})}));n({target:"Number",proto:!0,forced:h},{toFixed:function(t){var a,e,n,r,o=c(this),h=i(t),p=[0,0,0,0,0,0],f="",v="0",m=function(t,a){var e=-1,n=a;while(++e<6)n+=t*p[e],p[e]=n%1e7,n=l(n/1e7)},_=function(t){var a=6,e=0;while(--a>=0)e+=p[a],p[a]=l(e/t),e=e%t*1e7},b=function(){var t=6,a="";while(--t>=0)if(""!==a||0===t||0!==p[t]){var e=String(p[t]);a=""===a?e:a+s.call("0",7-e.length)+e}return a};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(f="-",o=-o),o>1e-21)if(a=u(o*d(2,69,1))-69,e=a<0?o*d(2,-a,1):o/d(2,a,1),e*=4503599627370496,a=52-a,a>0){m(0,e),n=h;while(n>=7)m(1e7,0),n-=7;m(d(10,n,1),0),n=a-1;while(n>=23)_(1<<23),n-=23;_(1<<n),m(1,1),_(2),v=b()}else m(0,e),m(1<<-a,0),v=b()+s.call("0",h);return h>0?(r=v.length,v=f+(r<=h?"0."+s.call("0",h-r)+v:v.slice(0,r-h)+"."+v.slice(r-h))):v=f+v,v}})}}]);