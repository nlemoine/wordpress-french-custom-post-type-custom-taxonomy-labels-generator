(this["webpackJsonplabel-generator"]=this["webpackJsonplabel-generator"]||[]).push([[49],{270:function(e,n,a){"use strict";var o=a(84);function t(e){e.register(o),function(e){e.languages.django={comment:/^{#[\s\S]*?#}$/,tag:{pattern:/(^{%[+-]?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^{[{%][+-]?|[+-]?[}%]}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},filter:{pattern:/(\|)\w+/,lookbehind:!0,alias:"function"},test:{pattern:/(\bis\s+(?:not\s+)?)(?!not\b)\w+/,lookbehind:!0,alias:"function"},function:/\b[a-z_]\w+(?=\s*\()/i,keyword:/\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,operator:/[-+*/%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,number:/\b\d+(?:\.\d+)?\b/,boolean:/[Tt]rue|[Ff]alse|[Nn]one/,variable:/\b\w+?\b/,punctuation:/[{}[\](),.:;]/};var n=/{{[\s\S]*?}}|{%[\s\S]*?%}|{#[\s\S]*?#}/g,a=e.languages["markup-templating"];e.hooks.add("before-tokenize",(function(e){a.buildPlaceholders(e,"django",n)})),e.hooks.add("after-tokenize",(function(e){a.tokenizePlaceholders(e,"django")})),e.languages.jinja2=e.languages.django,e.hooks.add("before-tokenize",(function(e){a.buildPlaceholders(e,"jinja2",n)})),e.hooks.add("after-tokenize",(function(e){a.tokenizePlaceholders(e,"jinja2")}))}(e)}e.exports=t,t.displayName="django",t.aliases=["jinja2"]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_django.e936f9a6.chunk.js.map