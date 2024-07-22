import{parser}from"@lezer/php";import{parseMixed}from"@lezer/common";import{html}from"@codemirror/lang-html";import{LRLanguage,indentNodeProp,continuedIndent,delimitedIndent,foldNodeProp,foldInside,LanguageSupport}from"@codemirror/language";const phpLanguage=LRLanguage.define({name:"php",parser:parser.configure({props:[indentNodeProp.add({IfStatement:continuedIndent({except:/^\s*({|else\b|elseif\b|endif\b)/}),TryStatement:continuedIndent({except:/^\s*({|catch\b|finally\b)/}),SwitchBody:e=>{let n=e.textAfter,t=/^\s*\}/.test(n),o=/^\s*(case|default)\b/.test(n);return e.baseIndent+(t?0:o?1:2)*e.unit},ColonBlock:e=>e.baseIndent+e.unit,"Block EnumBody DeclarationList":delimitedIndent({closing:"}"}),ArrowFunction:e=>e.baseIndent+e.unit,"String BlockComment":()=>null,Statement:continuedIndent({except:/^({|end(for|foreach|switch|while)\b)/})}),foldNodeProp.add({"Block EnumBody DeclarationList SwitchBody ArrayExpression ValueList":foldInside,ColonBlock:e=>({from:e.from+1,to:e.to}),BlockComment:e=>({from:e.from+2,to:e.to-2})})]}),languageData:{commentTokens:{block:{open:"/*",close:"*/"},line:"//"},indentOnInput:/^\s*(?:case |default:|end(?:if|for(?:each)?|switch|while)|else(?:if)?|\{|\})$/,wordChars:"$",closeBrackets:{stringPrefixes:["b","B"]}}});function php(e={}){let n,t=[];if(null===e.baseLanguage);else if(e.baseLanguage)n=e.baseLanguage;else{let e=html({matchClosingTags:!1});t.push(e.support),n=e.language}return new LanguageSupport(phpLanguage.configure({wrap:n&&parseMixed((e=>e.type.isTop?{parser:n.parser,overlay:e=>"Text"==e.name}:null)),top:e.plain?"Program":"Template"}),t)}export{php,phpLanguage};