(this["webpackJsonplabel-generator"]=this["webpackJsonplabel-generator"]||[]).push([[63],{284:function(e,s,t){"use strict";function r(e){e.languages["firestore-security-rules"]=e.languages.extend("clike",{comment:/\/\/.*/,keyword:/\b(?:allow|function|if|match|null|return|rules_version|service)\b/,operator:/&&|\|\||[<>!=]=?|[-+*/%]|\b(?:in|is)\b/}),delete e.languages["firestore-security-rules"]["class-name"],e.languages.insertBefore("firestore-security-rules","keyword",{path:{pattern:/(^|[\s(),])(?:\/(?:[\w\xA0-\uFFFF]+|\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)))+/,lookbehind:!0,greedy:!0,inside:{variable:{pattern:/\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)/,inside:{operator:/=/,keyword:/\*\*/,punctuation:/[.$(){}]/}},punctuation:/[/]/}},method:{pattern:/(\ballow\s+)[a-z]+(?:\s*,\s*[a-z]+)*(?=\s*[:;])/,lookbehind:!0,alias:"builtin",inside:{punctuation:/,/}}})}e.exports=r,r.displayName="firestoreSecurityRules",r.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_firestoreSecurityRules.4a49bbd1.chunk.js.map