"use strict";(self.webpackChunklabel_generator=self.webpackChunklabel_generator||[]).push([[3279],{9547:function(e){function t(e){!function(e){function t(e,t,a){return{pattern:RegExp("<#"+e+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+e+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:t,alias:a}}}}e.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(a){var n=e.languages[a],i="language-"+a;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:t("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\w+(?=\s)/,"attr-name":/\w+/}),expression:t("=",n,i),"class-feature":t("\\+",n,i),standard:t("",n,i)}}}}})}(e)}e.exports=t,t.displayName="t4Templating",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_t4Templating.241e4d4a.chunk.js.map