(this["webpackJsonplabel-generator"]=this["webpackJsonplabel-generator"]||[]).push([[16,39],{176:function(e,s,a){"use strict";function n(e){!function(e){function s(e,s){return e.replace(/<<(\d+)>>/g,(function(e,a){return"(?:"+s[+a]+")"}))}function a(e,a,n){return RegExp(s(e,a),n||"")}function n(e,s){for(var a=0;a<s;a++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var t="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",r="class enum interface struct",i="add alias and ascending async await by descending from get global group into join let nameof not notnull on or orderby partial remove select set unmanaged value when where",o="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function c(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var u=c(r),l=RegExp(c(t+" "+r+" "+i+" "+o)),p=c(r+" "+i+" "+o),d=c(t+" "+r+" "+o),g=n(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),b=n(/\((?:[^()]|<<self>>)*\)/.source,2),h=/@?\b[A-Za-z_]\w*\b/.source,f=s(/<<0>>(?:\s*<<1>>)?/.source,[h,g]),m=s(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[p,f]),k=/\[\s*(?:,\s*)*\]/.source,y=s(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[m,k]),v=s(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[g,b,k]),w=s(/\(<<0>>+(?:,<<0>>+)+\)/.source,[v]),x=s(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[w,m,k]),B={keyword:l,punctuation:/[<>()?,.:[\]]/},$=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,R=/"(?:\\.|[^\\"\r\n])*"/.source,S=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:a(/(^|[^$\\])<<0>>/.source,[S]),lookbehind:!0,greedy:!0},{pattern:a(/(^|[^@$\\])<<0>>/.source,[R]),lookbehind:!0,greedy:!0},{pattern:RegExp($),greedy:!0,alias:"character"}],"class-name":[{pattern:a(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[m]),lookbehind:!0,inside:B},{pattern:a(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[h,x]),lookbehind:!0,inside:B},{pattern:a(/(\busing\s+)<<0>>(?=\s*=)/.source,[h]),lookbehind:!0},{pattern:a(/(\b<<0>>\s+)<<1>>/.source,[u,f]),lookbehind:!0,inside:B},{pattern:a(/(\bcatch\s*\(\s*)<<0>>/.source,[m]),lookbehind:!0,inside:B},{pattern:a(/(\bwhere\s+)<<0>>/.source,[h]),lookbehind:!0},{pattern:a(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[y]),lookbehind:!0,inside:B},{pattern:a(/\b<<0>>(?=\s+(?!<<1>>)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[x,d,h]),inside:B}],keyword:l,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:a(/([(,]\s*)<<0>>(?=\s*:)/.source,[h]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:a(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[h]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:a(/(\b(?:default|typeof|sizeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[b]),lookbehind:!0,alias:"class-name",inside:B},"return-type":{pattern:a(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[x,m]),inside:B,alias:"class-name"},"constructor-invocation":{pattern:a(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[x]),lookbehind:!0,inside:B,alias:"class-name"},"generic-method":{pattern:a(/<<0>>\s*<<1>>(?=\s*\()/.source,[h,g]),inside:{function:a(/^<<0>>/.source,[h]),generic:{pattern:RegExp(g),alias:"class-name",inside:B}}},"type-list":{pattern:a(/\b((?:<<0>>\s+<<1>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>)(?:\s*,\s*(?:<<3>>|<<4>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[u,f,h,x,l.source]),lookbehind:!0,inside:{keyword:l,"class-name":{pattern:RegExp(x),greedy:!0,inside:B},punctuation:/,/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var _=R+"|"+$,E=s(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[_]),j=n(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[E]),2),z=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,A=s(/<<0>>(?:\s*\(<<1>>*\))?/.source,[m,j]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:a(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[z,A]),lookbehind:!0,greedy:!0,inside:{target:{pattern:a(/^<<0>>(?=\s*:)/.source,[z]),alias:"keyword"},"attribute-arguments":{pattern:a(/\(<<0>>*\)/.source,[j]),inside:e.languages.csharp},"class-name":{pattern:RegExp(m),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var P=/:[^}\r\n]+/.source,C=n(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[E]),2),I=s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[C,P]),J=n(s(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[_]),2),N=s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[J,P]);function T(s,n){return{interpolation:{pattern:a(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[s]),lookbehind:!0,inside:{"format-string":{pattern:a(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[n,P]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:a(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[I]),lookbehind:!0,greedy:!0,inside:T(I,C)},{pattern:a(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[N]),lookbehind:!0,greedy:!0,inside:T(N,J)}]})}(e),e.languages.dotnet=e.languages.cs=e.languages.csharp}e.exports=n,n.displayName="csharp",n.aliases=["dotnet","cs"]},244:function(e,s,a){"use strict";var n=a(176);function t(e){e.register(n),e.languages.aspnet=e.languages.extend("markup",{"page-directive":{pattern:/<%\s*@.*%>/i,alias:"tag",inside:{"page-directive":{pattern:/<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,alias:"tag"},rest:e.languages.markup.tag.inside}},directive:{pattern:/<%.*%>/i,alias:"tag",inside:{directive:{pattern:/<%\s*?[$=%#:]{0,2}|%>/i,alias:"tag"},rest:e.languages.csharp}}}),e.languages.aspnet.tag.pattern=/<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,e.languages.insertBefore("inside","punctuation",{directive:e.languages.aspnet.directive},e.languages.aspnet.tag.inside["attr-value"]),e.languages.insertBefore("aspnet","comment",{"asp-comment":{pattern:/<%--[\s\S]*?--%>/,alias:["asp","comment"]}}),e.languages.insertBefore("aspnet",e.languages.javascript?"script":"tag",{"asp-script":{pattern:/(<script(?=.*runat=['"]?server['"]?)[^>]*>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,alias:["asp","script"],inside:e.languages.csharp||{}}})}e.exports=t,t.displayName="aspnet",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_aspnet.8719fe7f.chunk.js.map