"use strict";(self.webpackChunklabel_generator=self.webpackChunklabel_generator||[]).push([[4884,902],{9285:function(e){function a(e){!function(e){var a=e.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(a,r){"string"===typeof a&&(a=[a]),a.forEach((function(a){!function(a,r){var n="doc-comment",t=e.languages[a];if(t){var o=t[n];if(!o){var i={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};o=(t=e.languages.insertBefore(a,"comment",i))[n]}if(o instanceof RegExp&&(o=t[n]={pattern:o}),Array.isArray(o))for(var s=0,p=o.length;s<p;s++)o[s]instanceof RegExp&&(o[s]={pattern:o[s]}),r(o[s]);else r(o)}}(a,(function(e){e.inside||(e.inside={}),e.inside.rest=r}))}))}}),a.addSupport(["java","javascript","php"],a)}(e)}e.exports=a,a.displayName="javadoclike",a.aliases=[]},7613:function(e,a,r){var n=r(7304),t=r(9285);function o(e){e.register(n),e.register(t),function(e){var a=/(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;e.languages.phpdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:"+a+"\\s+)?)\\$\\w+"),lookbehind:!0}}),e.languages.insertBefore("phpdoc","keyword",{"class-name":[{pattern:RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)"+a),lookbehind:!0,inside:{keyword:/\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,punctuation:/[|\\[\]()]/}}]}),e.languages.javadoclike.addSupport("php",e.languages.phpdoc)}(e)}e.exports=o,o.displayName="phpdoc",o.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_phpdoc.f7cfb8b1.chunk.js.map