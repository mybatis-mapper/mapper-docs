(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{301:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_2021年8月16日-1-0-1-发布了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2021年8月16日-1-0-1-发布了"}},[t._v("#")]),t._v(" 2021年8月16日 - 1.0.1 发布了🎉🎉🎉")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("核心项目 mybatis-provider 项目升级到 1.0.1，主要解决一个bug：")]),t._v(" "),a("p",[t._v("当在注解 "),a("code",[t._v('@Entity.Table(value = "user_auto", autoResultMap = true)')]),t._v(" 中使用 "),a("code",[t._v("autoResultMap = true")]),t._v("，默认把所有 "),a("code",[t._v("@SelectProvider")]),t._v("\n方法的返回值设置为了自动生成的 "),a("code",[t._v("<resultMap>")]),t._v("，这会导致 "),a("code",[t._v("selectCount")]),t._v(" 这种返回值不是实体类类型的查询出错，本次更新解决了这个问题。\n同时直接使用 mybatis 的方式获取返回值类型，因此支持 mybatis 本身的注解设置返回值类型，例如 "),a("code",[t._v("@ResultType")]),t._v(" 注解。")])]),t._v(" "),a("li",[a("p",[t._v("mybatis-mapper 项目升级为 1.0.1，主要解决了一个 "),a("code",[t._v("autoResultMap = true")]),t._v(" 时相关的问题，当使用 "),a("code",[t._v("<resultMap>")]),t._v(" 时，\n其中的配置包含了数据库列 "),a("code",[t._v("column")]),t._v(" 和 Java 对象属性名 "),a("code",[t._v("property")]),t._v(" 的映射关系，因此在 select 查询时，\n不需要通过 "),a("code",[t._v("column As property")]),t._v(" 方式设置别名，在 "),a("code",[t._v("Example")]),t._v(" 和 "),a("code",[t._v("Fn")]),t._v(" 的实现中缺少对这种情况的处理，\n本次更新已解决该问题。")])])]),t._v(" "),a("h3",{attrs:{id:"关于-autoresultmap-true-的用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-autoresultmap-true-的用途"}},[t._v("#")]),t._v(" 关于 "),a("code",[t._v("autoResultMap = true")]),t._v(" 的用途")]),t._v(" "),a("p",[t._v("TODO 后续补充文档进行介绍，主要针对 "),a("code",[t._v("typeHandler")]),t._v(" 的配置，除了 "),a("code",[t._v("Example")]),t._v(" 查询条件外，其他情况都支持，\n"),a("code",[t._v("Example")]),t._v(" 作为查询条件使用 "),a("code",[t._v("typeHandler")]),t._v(" 时，需要进行全局配置，例如默认的 mybatis 配置文件中：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("typeHandlers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("typeHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("io.mybatis.mapper.model.UserAuto$AddressTypeHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("javaType")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("io.mybatis.mapper.model.UserAuto$Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("typeHandlers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("上面这种全局配置可以生效，"),a("strong",[t._v("后续考虑增加配置，直接自动注册到全局")]),t._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);