(this["webpackJsonplabel-generator"]=this["webpackJsonplabel-generator"]||[]).push([[55],{276:function(e,a,s){"use strict";var t=s(84);function n(e){e.register(t),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"ejs",/<%(?!%)[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"ejs")})),e.languages.eta=e.languages.ejs}(e)}e.exports=n,n.displayName="ejs",n.aliases=["eta"]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ejs.7c21aede.chunk.js.map