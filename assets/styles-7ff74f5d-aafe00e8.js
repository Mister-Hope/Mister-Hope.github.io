import{i as Ke,a as ze,l as Ye,r as Xe,$ as S,g as je,f as Qe,w as We,s as Je,M as Ve,K as L,h as Le,X as x}from"./mermaid.esm.min-fe9bebaa.js";var re=function(){var e=function(B,i,r,s){for(r=r||{},s=B.length;s--;r[B[s]]=i);return r},n=[1,3],o=[1,7],c=[1,8],A=[1,9],C=[1,10],f=[1,13],m=[1,12],D=[1,16,25],he=[1,20],Ae=[1,32],pe=[1,33],de=[1,34],ye=[1,36],Ee=[1,39],Ce=[1,37],ke=[1,38],ge=[1,44],Fe=[1,45],fe=[1,40],De=[1,41],be=[1,42],me=[1,43],d=[1,48],y=[1,49],E=[1,50],F=[1,51],a=[16,25],G=[1,65],M=[1,66],U=[1,67],K=[1,68],z=[1,69],V=[1,70],Z=[1,71],Be=[1,80],O=[16,25,32,45,46,54,60,61,62,63,64,65,66,71,73],H=[16,25,30,32,45,46,50,54,60,61,62,63,64,65,66,71,73,88,89,90,91],_e=[5,8,9,10,11,16,19,23,25],Y=[54,88,89,90,91],I=[54,65,66,88,89,90,91],Te=[54,60,61,62,63,64,88,89,90,91],X=[16,25,32],q=[1,107],ee={trace:function(){},yy:{},symbols_:{error:2,start:3,mermaidDoc:4,statments:5,direction:6,directive:7,direction_tb:8,direction_bt:9,direction_rl:10,direction_lr:11,graphConfig:12,openDirective:13,typeDirective:14,closeDirective:15,NEWLINE:16,":":17,argDirective:18,open_directive:19,type_directive:20,arg_directive:21,close_directive:22,CLASS_DIAGRAM:23,statements:24,EOF:25,statement:26,className:27,alphaNumToken:28,classLiteralName:29,GENERICTYPE:30,relationStatement:31,LABEL:32,classStatement:33,methodStatement:34,annotationStatement:35,clickStatement:36,cssClassStatement:37,noteStatement:38,acc_title:39,acc_title_value:40,acc_descr:41,acc_descr_value:42,acc_descr_multiline_value:43,CLASS:44,STYLE_SEPARATOR:45,STRUCT_START:46,members:47,STRUCT_STOP:48,ANNOTATION_START:49,ANNOTATION_END:50,MEMBER:51,SEPARATOR:52,relation:53,STR:54,NOTE_FOR:55,noteText:56,NOTE:57,relationType:58,lineType:59,AGGREGATION:60,EXTENSION:61,COMPOSITION:62,DEPENDENCY:63,LOLLIPOP:64,LINE:65,DOTTED_LINE:66,CALLBACK:67,LINK:68,LINK_TARGET:69,CLICK:70,CALLBACK_NAME:71,CALLBACK_ARGS:72,HREF:73,CSSCLASS:74,commentToken:75,textToken:76,graphCodeTokens:77,textNoTagsToken:78,TAGSTART:79,TAGEND:80,"==":81,"--":82,PCT:83,DEFAULT:84,SPACE:85,MINUS:86,keywords:87,UNICODE_TEXT:88,NUM:89,ALPHA:90,BQUOTE_STR:91,$accept:0,$end:1},terminals_:{2:"error",5:"statments",8:"direction_tb",9:"direction_bt",10:"direction_rl",11:"direction_lr",16:"NEWLINE",17:":",19:"open_directive",20:"type_directive",21:"arg_directive",22:"close_directive",23:"CLASS_DIAGRAM",25:"EOF",30:"GENERICTYPE",32:"LABEL",39:"acc_title",40:"acc_title_value",41:"acc_descr",42:"acc_descr_value",43:"acc_descr_multiline_value",44:"CLASS",45:"STYLE_SEPARATOR",46:"STRUCT_START",48:"STRUCT_STOP",49:"ANNOTATION_START",50:"ANNOTATION_END",51:"MEMBER",52:"SEPARATOR",54:"STR",55:"NOTE_FOR",57:"NOTE",60:"AGGREGATION",61:"EXTENSION",62:"COMPOSITION",63:"DEPENDENCY",64:"LOLLIPOP",65:"LINE",66:"DOTTED_LINE",67:"CALLBACK",68:"LINK",69:"LINK_TARGET",70:"CLICK",71:"CALLBACK_NAME",72:"CALLBACK_ARGS",73:"HREF",74:"CSSCLASS",77:"graphCodeTokens",79:"TAGSTART",80:"TAGEND",81:"==",82:"--",83:"PCT",84:"DEFAULT",85:"SPACE",86:"MINUS",87:"keywords",88:"UNICODE_TEXT",89:"NUM",90:"ALPHA",91:"BQUOTE_STR"},productions_:[0,[3,1],[3,1],[3,1],[3,2],[6,1],[6,1],[6,1],[6,1],[4,1],[7,4],[7,6],[13,1],[14,1],[18,1],[15,1],[12,4],[24,1],[24,2],[24,3],[27,1],[27,1],[27,2],[27,2],[27,2],[26,1],[26,2],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,2],[26,2],[26,1],[33,2],[33,4],[33,5],[33,7],[35,4],[47,1],[47,2],[34,1],[34,2],[34,1],[34,1],[31,3],[31,4],[31,4],[31,5],[38,3],[38,2],[53,3],[53,2],[53,2],[53,1],[58,1],[58,1],[58,1],[58,1],[58,1],[59,1],[59,1],[36,3],[36,4],[36,3],[36,4],[36,4],[36,5],[36,3],[36,4],[36,4],[36,5],[36,3],[36,4],[36,4],[36,5],[37,3],[75,1],[75,1],[76,1],[76,1],[76,1],[76,1],[76,1],[76,1],[76,1],[78,1],[78,1],[78,1],[78,1],[28,1],[28,1],[28,1],[29,1],[56,1]],performAction:function(B,i,r,s,l,t,k){var u=t.length-1;switch(l){case 5:s.setDirection("TB");break;case 6:s.setDirection("BT");break;case 7:s.setDirection("RL");break;case 8:s.setDirection("LR");break;case 12:s.parseDirective("%%{","open_directive");break;case 13:s.parseDirective(t[u],"type_directive");break;case 14:t[u]=t[u].trim().replace(/'/g,'"'),s.parseDirective(t[u],"arg_directive");break;case 15:s.parseDirective("}%%","close_directive","class");break;case 20:case 21:this.$=t[u];break;case 22:this.$=t[u-1]+t[u];break;case 23:case 24:this.$=t[u-1]+"~"+t[u];break;case 25:s.addRelation(t[u]);break;case 26:t[u-1].title=s.cleanupLabel(t[u]),s.addRelation(t[u-1]);break;case 35:this.$=t[u].trim(),s.setAccTitle(this.$);break;case 36:case 37:this.$=t[u].trim(),s.setAccDescription(this.$);break;case 38:s.addClass(t[u]);break;case 39:s.addClass(t[u-2]),s.setCssClass(t[u-2],t[u]);break;case 40:s.addClass(t[u-3]),s.addMembers(t[u-3],t[u-1]);break;case 41:s.addClass(t[u-5]),s.setCssClass(t[u-5],t[u-3]),s.addMembers(t[u-5],t[u-1]);break;case 42:s.addAnnotation(t[u],t[u-2]);break;case 43:this.$=[t[u]];break;case 44:t[u].push(t[u-1]),this.$=t[u];break;case 45:break;case 46:s.addMember(t[u-1],s.cleanupLabel(t[u]));break;case 47:break;case 48:break;case 49:this.$={id1:t[u-2],id2:t[u],relation:t[u-1],relationTitle1:"none",relationTitle2:"none"};break;case 50:this.$={id1:t[u-3],id2:t[u],relation:t[u-1],relationTitle1:t[u-2],relationTitle2:"none"};break;case 51:this.$={id1:t[u-3],id2:t[u],relation:t[u-2],relationTitle1:"none",relationTitle2:t[u-1]};break;case 52:this.$={id1:t[u-4],id2:t[u],relation:t[u-2],relationTitle1:t[u-3],relationTitle2:t[u-1]};break;case 53:s.addNote(t[u],t[u-1]);break;case 54:s.addNote(t[u]);break;case 55:this.$={type1:t[u-2],type2:t[u],lineType:t[u-1]};break;case 56:this.$={type1:"none",type2:t[u],lineType:t[u-1]};break;case 57:this.$={type1:t[u-1],type2:"none",lineType:t[u]};break;case 58:this.$={type1:"none",type2:"none",lineType:t[u]};break;case 59:this.$=s.relationType.AGGREGATION;break;case 60:this.$=s.relationType.EXTENSION;break;case 61:this.$=s.relationType.COMPOSITION;break;case 62:this.$=s.relationType.DEPENDENCY;break;case 63:this.$=s.relationType.LOLLIPOP;break;case 64:this.$=s.lineType.LINE;break;case 65:this.$=s.lineType.DOTTED_LINE;break;case 66:case 72:this.$=t[u-2],s.setClickEvent(t[u-1],t[u]);break;case 67:case 73:this.$=t[u-3],s.setClickEvent(t[u-2],t[u-1]),s.setTooltip(t[u-2],t[u]);break;case 68:case 76:this.$=t[u-2],s.setLink(t[u-1],t[u]);break;case 69:this.$=t[u-3],s.setLink(t[u-2],t[u-1],t[u]);break;case 70:case 78:this.$=t[u-3],s.setLink(t[u-2],t[u-1]),s.setTooltip(t[u-2],t[u]);break;case 71:case 79:this.$=t[u-4],s.setLink(t[u-3],t[u-2],t[u]),s.setTooltip(t[u-3],t[u-1]);break;case 74:this.$=t[u-3],s.setClickEvent(t[u-2],t[u-1],t[u]);break;case 75:this.$=t[u-4],s.setClickEvent(t[u-3],t[u-2],t[u-1]),s.setTooltip(t[u-3],t[u]);break;case 77:this.$=t[u-3],s.setLink(t[u-2],t[u-1],t[u]);break;case 80:s.setCssClass(t[u-1],t[u]);break}},table:[{3:1,4:2,5:n,6:4,7:5,8:o,9:c,10:A,11:C,12:6,13:11,19:f,23:m},{1:[3]},{1:[2,1]},{1:[2,2]},{1:[2,3]},{3:14,4:2,5:n,6:4,7:5,8:o,9:c,10:A,11:C,12:6,13:11,19:f,23:m},{1:[2,9]},e(D,[2,5]),e(D,[2,6]),e(D,[2,7]),e(D,[2,8]),{14:15,20:[1,16]},{16:[1,17]},{20:[2,12]},{1:[2,4]},{15:18,17:[1,19],22:he},e([17,22],[2,13]),{6:31,7:30,8:o,9:c,10:A,11:C,13:11,19:f,24:21,26:22,27:35,28:46,29:47,31:23,33:24,34:25,35:26,36:27,37:28,38:29,39:Ae,41:pe,43:de,44:ye,49:Ee,51:Ce,52:ke,55:ge,57:Fe,67:fe,68:De,70:be,74:me,88:d,89:y,90:E,91:F},{16:[1,52]},{18:53,21:[1,54]},{16:[2,15]},{25:[1,55]},{16:[1,56],25:[2,17]},e(a,[2,25],{32:[1,57]}),e(a,[2,27]),e(a,[2,28]),e(a,[2,29]),e(a,[2,30]),e(a,[2,31]),e(a,[2,32]),e(a,[2,33]),e(a,[2,34]),{40:[1,58]},{42:[1,59]},e(a,[2,37]),e(a,[2,45],{53:60,58:63,59:64,32:[1,62],54:[1,61],60:G,61:M,62:U,63:K,64:z,65:V,66:Z}),{27:72,28:46,29:47,88:d,89:y,90:E,91:F},e(a,[2,47]),e(a,[2,48]),{28:73,88:d,89:y,90:E},{27:74,28:46,29:47,88:d,89:y,90:E,91:F},{27:75,28:46,29:47,88:d,89:y,90:E,91:F},{27:76,28:46,29:47,88:d,89:y,90:E,91:F},{54:[1,77]},{27:78,28:46,29:47,88:d,89:y,90:E,91:F},{54:Be,56:79},e(O,[2,20],{28:46,29:47,27:81,30:[1,82],88:d,89:y,90:E,91:F}),e(O,[2,21],{30:[1,83]}),e(H,[2,94]),e(H,[2,95]),e(H,[2,96]),e([16,25,30,32,45,46,54,60,61,62,63,64,65,66,71,73],[2,97]),e(_e,[2,10]),{15:84,22:he},{22:[2,14]},{1:[2,16]},{6:31,7:30,8:o,9:c,10:A,11:C,13:11,19:f,24:85,25:[2,18],26:22,27:35,28:46,29:47,31:23,33:24,34:25,35:26,36:27,37:28,38:29,39:Ae,41:pe,43:de,44:ye,49:Ee,51:Ce,52:ke,55:ge,57:Fe,67:fe,68:De,70:be,74:me,88:d,89:y,90:E,91:F},e(a,[2,26]),e(a,[2,35]),e(a,[2,36]),{27:86,28:46,29:47,54:[1,87],88:d,89:y,90:E,91:F},{53:88,58:63,59:64,60:G,61:M,62:U,63:K,64:z,65:V,66:Z},e(a,[2,46]),{59:89,65:V,66:Z},e(Y,[2,58],{58:90,60:G,61:M,62:U,63:K,64:z}),e(I,[2,59]),e(I,[2,60]),e(I,[2,61]),e(I,[2,62]),e(I,[2,63]),e(Te,[2,64]),e(Te,[2,65]),e(a,[2,38],{45:[1,91],46:[1,92]}),{50:[1,93]},{54:[1,94]},{54:[1,95]},{71:[1,96],73:[1,97]},{28:98,88:d,89:y,90:E},{54:Be,56:99},e(a,[2,54]),e(a,[2,98]),e(O,[2,22]),e(O,[2,23]),e(O,[2,24]),{16:[1,100]},{25:[2,19]},e(X,[2,49]),{27:101,28:46,29:47,88:d,89:y,90:E,91:F},{27:102,28:46,29:47,54:[1,103],88:d,89:y,90:E,91:F},e(Y,[2,57],{58:104,60:G,61:M,62:U,63:K,64:z}),e(Y,[2,56]),{28:105,88:d,89:y,90:E},{47:106,51:q},{27:108,28:46,29:47,88:d,89:y,90:E,91:F},e(a,[2,66],{54:[1,109]}),e(a,[2,68],{54:[1,111],69:[1,110]}),e(a,[2,72],{54:[1,112],72:[1,113]}),e(a,[2,76],{54:[1,115],69:[1,114]}),e(a,[2,80]),e(a,[2,53]),e(_e,[2,11]),e(X,[2,51]),e(X,[2,50]),{27:116,28:46,29:47,88:d,89:y,90:E,91:F},e(Y,[2,55]),e(a,[2,39],{46:[1,117]}),{48:[1,118]},{47:119,48:[2,43],51:q},e(a,[2,42]),e(a,[2,67]),e(a,[2,69]),e(a,[2,70],{69:[1,120]}),e(a,[2,73]),e(a,[2,74],{54:[1,121]}),e(a,[2,77]),e(a,[2,78],{69:[1,122]}),e(X,[2,52]),{47:123,51:q},e(a,[2,40]),{48:[2,44]},e(a,[2,71]),e(a,[2,75]),e(a,[2,79]),{48:[1,124]},e(a,[2,41])],defaultActions:{2:[2,1],3:[2,2],4:[2,3],6:[2,9],13:[2,12],14:[2,4],20:[2,15],54:[2,14],55:[2,16],85:[2,19],119:[2,44]},parseError:function(B,i){if(i.recoverable)this.trace(B);else{var r=new Error(B);throw r.hash=i,r}},parse:function(B){var i=this,r=[0],s=[],l=[null],t=[],k=this.table,u="",j=0,Se=0,we=2,ve=1,Ge=t.slice.call(arguments,1),p=Object.create(this.lexer),v={yy:{}};for(var ue in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ue)&&(v.yy[ue]=this.yy[ue]);p.setInput(B,v.yy),v.yy.lexer=p,v.yy.parser=this,typeof p.yylloc>"u"&&(p.yylloc={});var se=p.yylloc;t.push(se);var Me=p.options&&p.options.ranges;typeof v.yy.parseError=="function"?this.parseError=v.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Ue(){var T;return T=s.pop()||p.lex()||ve,typeof T!="number"&&(T instanceof Array&&(s=T,T=s.pop()),T=i.symbols_[T]||T),T}for(var g,N,b,ie,$={},Q,_,Ne,W;;){if(N=r[r.length-1],this.defaultActions[N]?b=this.defaultActions[N]:((g===null||typeof g>"u")&&(g=Ue()),b=k[N]&&k[N][g]),typeof b>"u"||!b.length||!b[0]){var ne="";W=[];for(Q in k[N])this.terminals_[Q]&&Q>we&&W.push("'"+this.terminals_[Q]+"'");p.showPosition?ne="Parse error on line "+(j+1)+`:
`+p.showPosition()+`
Expecting `+W.join(", ")+", got '"+(this.terminals_[g]||g)+"'":ne="Parse error on line "+(j+1)+": Unexpected "+(g==ve?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(ne,{text:p.match,token:this.terminals_[g]||g,line:p.yylineno,loc:se,expected:W})}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+N+", token: "+g);switch(b[0]){case 1:r.push(g),l.push(p.yytext),t.push(p.yylloc),r.push(b[1]),g=null,Se=p.yyleng,u=p.yytext,j=p.yylineno,se=p.yylloc;break;case 2:if(_=this.productions_[b[1]][1],$.$=l[l.length-_],$._$={first_line:t[t.length-(_||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(_||1)].first_column,last_column:t[t.length-1].last_column},Me&&($._$.range=[t[t.length-(_||1)].range[0],t[t.length-1].range[1]]),ie=this.performAction.apply($,[u,Se,j,v.yy,b[1],l,t].concat(Ge)),typeof ie<"u")return ie;_&&(r=r.slice(0,-1*_*2),l=l.slice(0,-1*_),t=t.slice(0,-1*_)),r.push(this.productions_[b[1]][0]),l.push($.$),t.push($._$),Ne=k[r[r.length-2]][r[r.length-1]],r.push(Ne);break;case 3:return!0}}return!0}},Pe=function(){var B={EOF:1,parseError:function(i,r){if(this.yy.parser)this.yy.parser.parseError(i,r);else throw new Error(i)},setInput:function(i,r){return this.yy=r||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var r=i.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var r=i.length,s=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var l=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var t=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===l.length?this.yylloc.first_column:0)+l[l.length-s.length].length-s[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[t[0],t[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),r=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+r+"^"},test_match:function(i,r){var s,l,t;if(this.options.backtrack_lexer&&(t={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(t.yylloc.range=this.yylloc.range.slice(0))),l=i[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],s=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var k in t)this[k]=t[k];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,r,s,l;this._more||(this.yytext="",this.match="");for(var t=this._currentRules(),k=0;k<t.length;k++)if(s=this._input.match(this.rules[t[k]]),s&&(!r||s[0].length>r[0].length)){if(r=s,l=k,this.options.backtrack_lexer){if(i=this.test_match(s,t[k]),i!==!1)return i;if(this._backtrack){r=!1;continue}else return!1}else if(!this.options.flex)break}return r?(i=this.test_match(r,t[l]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var i=this.next();return i||this.lex()},begin:function(i){this.conditionStack.push(i)},popState:function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},pushState:function(i){this.begin(i)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(i,r,s,l){switch(s){case 0:return this.begin("open_directive"),19;case 1:return 8;case 2:return 9;case 3:return 10;case 4:return 11;case 5:return this.begin("type_directive"),20;case 6:return this.popState(),this.begin("arg_directive"),17;case 7:return this.popState(),this.popState(),22;case 8:return 21;case 9:break;case 10:break;case 11:return this.begin("acc_title"),39;case 12:return this.popState(),"acc_title_value";case 13:return this.begin("acc_descr"),41;case 14:return this.popState(),"acc_descr_value";case 15:this.begin("acc_descr_multiline");break;case 16:this.popState();break;case 17:return"acc_descr_multiline_value";case 18:return 16;case 19:break;case 20:return 23;case 21:return 23;case 22:return this.begin("struct"),46;case 23:return"EDGE_STATE";case 24:return"EOF_IN_STRUCT";case 25:return"OPEN_IN_STRUCT";case 26:return this.popState(),48;case 27:break;case 28:return"MEMBER";case 29:return 44;case 30:return 74;case 31:return 67;case 32:return 68;case 33:return 70;case 34:return 55;case 35:return 57;case 36:return 49;case 37:return 50;case 38:this.begin("generic");break;case 39:this.popState();break;case 40:return"GENERICTYPE";case 41:this.begin("string");break;case 42:this.popState();break;case 43:return"STR";case 44:this.begin("bqstring");break;case 45:this.popState();break;case 46:return"BQUOTE_STR";case 47:this.begin("href");break;case 48:this.popState();break;case 49:return 73;case 50:this.begin("callback_name");break;case 51:this.popState();break;case 52:this.popState(),this.begin("callback_args");break;case 53:return 71;case 54:this.popState();break;case 55:return 72;case 56:return 69;case 57:return 69;case 58:return 69;case 59:return 69;case 60:return 61;case 61:return 61;case 62:return 63;case 63:return 63;case 64:return 62;case 65:return 60;case 66:return 64;case 67:return 65;case 68:return 66;case 69:return 32;case 70:return 45;case 71:return 86;case 72:return"DOT";case 73:return"PLUS";case 74:return 83;case 75:return"EQUALS";case 76:return"EQUALS";case 77:return 90;case 78:return"PUNCTUATION";case 79:return 89;case 80:return 88;case 81:return 85;case 82:return 25}},rules:[/^(?:%%\{)/,/^(?:.*direction\s+TB[^\n]*)/,/^(?:.*direction\s+BT[^\n]*)/,/^(?:.*direction\s+RL[^\n]*)/,/^(?:.*direction\s+LR[^\n]*)/,/^(?:((?:(?!\}%%)[^:.])*))/,/^(?::)/,/^(?:\}%%)/,/^(?:((?:(?!\}%%).|\n)*))/,/^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/,/^(?:%%[^\n]*(\r?\n)*)/,/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:\s*(\r?\n)+)/,/^(?:\s+)/,/^(?:classDiagram-v2\b)/,/^(?:classDiagram\b)/,/^(?:[{])/,/^(?:\[\*\])/,/^(?:$)/,/^(?:[{])/,/^(?:[}])/,/^(?:[\n])/,/^(?:[^{}\n]*)/,/^(?:class\b)/,/^(?:cssClass\b)/,/^(?:callback\b)/,/^(?:link\b)/,/^(?:click\b)/,/^(?:note for\b)/,/^(?:note\b)/,/^(?:<<)/,/^(?:>>)/,/^(?:[~])/,/^(?:[~])/,/^(?:[^~]*)/,/^(?:["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:[`])/,/^(?:[`])/,/^(?:[^`]+)/,/^(?:href[\s]+["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:call[\s]+)/,/^(?:\([\s]*\))/,/^(?:\()/,/^(?:[^(]*)/,/^(?:\))/,/^(?:[^)]*)/,/^(?:_self\b)/,/^(?:_blank\b)/,/^(?:_parent\b)/,/^(?:_top\b)/,/^(?:\s*<\|)/,/^(?:\s*\|>)/,/^(?:\s*>)/,/^(?:\s*<)/,/^(?:\s*\*)/,/^(?:\s*o\b)/,/^(?:\s*\(\))/,/^(?:--)/,/^(?:\.\.)/,/^(?::{1}[^:\n;]+)/,/^(?::{3})/,/^(?:-)/,/^(?:\.)/,/^(?:\+)/,/^(?:%)/,/^(?:=)/,/^(?:=)/,/^(?:\w+)/,/^(?:[!"#$%&'*+,-.`?\\/])/,/^(?:[0-9]+)/,/^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/,/^(?:\s)/,/^(?:$)/],conditions:{acc_descr_multiline:{rules:[16,17],inclusive:!1},acc_descr:{rules:[14],inclusive:!1},acc_title:{rules:[12],inclusive:!1},arg_directive:{rules:[7,8],inclusive:!1},type_directive:{rules:[6,7],inclusive:!1},open_directive:{rules:[5],inclusive:!1},callback_args:{rules:[54,55],inclusive:!1},callback_name:{rules:[51,52,53],inclusive:!1},href:{rules:[48,49],inclusive:!1},struct:{rules:[23,24,25,26,27,28],inclusive:!1},generic:{rules:[39,40],inclusive:!1},bqstring:{rules:[45,46],inclusive:!1},string:{rules:[42,43],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,9,10,11,13,15,18,19,20,21,22,23,29,30,31,32,33,34,35,36,37,38,41,44,47,50,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],inclusive:!0}}};return B}();ee.lexer=Pe;function te(){this.yy={}}return te.prototype=ee,ee.Parser=te,new te}();re.parser=re;const Ft=re,oe="classid-";let ce=[],h={},J=[],$e=0,P=[];const R=e=>L.sanitizeText(e,S()),Ze=function(e,n,o){We.parseDirective(this,e,n,o)},w=function(e){let n="",o=e;if(e.indexOf("~")>0){let c=e.split("~");o=c[0],n=L.sanitizeText(c[1],S())}return{className:o,type:n}},ae=function(e){let n=w(e);h[n.className]===void 0&&(h[n.className]={id:n.className,type:n.type,cssClasses:[],methods:[],members:[],annotations:[],domId:oe+n.className+"-"+$e},$e++)},Oe=function(e){const n=Object.keys(h);for(const o of n)if(h[o].id===e)return h[o].domId},He=function(){ce=[],h={},J=[],P=[],P.push(xe),Je()},qe=function(e){return h[e]},et=function(){return h},tt=function(){return ce},ut=function(){return J},st=function(e){Ve.debug("Adding relation: "+JSON.stringify(e)),ae(e.id1),ae(e.id2),e.id1=w(e.id1).className,e.id2=w(e.id2).className,e.relationTitle1=L.sanitizeText(e.relationTitle1.trim(),S()),e.relationTitle2=L.sanitizeText(e.relationTitle2.trim(),S()),ce.push(e)},it=function(e,n){const o=w(e).className;h[o].annotations.push(n)},Ie=function(e,n){const o=w(e).className,c=h[o];if(typeof n=="string"){const A=n.trim();A.startsWith("<<")&&A.endsWith(">>")?c.annotations.push(R(A.substring(2,A.length-2))):A.indexOf(")")>0?c.methods.push(R(A)):A&&c.members.push(R(A))}},nt=function(e,n){Array.isArray(n)&&(n.reverse(),n.forEach(o=>Ie(e,o)))},rt=function(e,n){const o={id:`note${J.length}`,class:n,text:e};J.push(o)},at=function(e){return e.substring(0,1)===":"?L.sanitizeText(e.substr(1).trim(),S()):R(e.trim())},le=function(e,n){e.split(",").forEach(function(o){let c=o;o[0].match(/\d/)&&(c=oe+c),h[c]!==void 0&&h[c].cssClasses.push(n)})},ot=function(e,n){const o=S();e.split(",").forEach(function(c){n!==void 0&&(h[c].tooltip=L.sanitizeText(n,o))})},ct=function(e){return h[e].tooltip},lt=function(e,n,o){const c=S();e.split(",").forEach(function(A){let C=A;A[0].match(/\d/)&&(C=oe+C),h[C]!==void 0&&(h[C].link=Le.formatUrl(n,c),c.securityLevel==="sandbox"?h[C].linkTarget="_top":typeof o=="string"?h[C].linkTarget=R(o):h[C].linkTarget="_blank")}),le(e,"clickable")},ht=function(e,n,o){e.split(",").forEach(function(c){At(c,n,o),h[c].haveCallback=!0}),le(e,"clickable")},At=function(e,n,o){const c=S();let A=e,C=Oe(A);if(c.securityLevel==="loose"&&n!==void 0&&h[A]!==void 0){let f=[];if(typeof o=="string"){f=o.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let m=0;m<f.length;m++){let D=f[m].trim();D.charAt(0)==='"'&&D.charAt(D.length-1)==='"'&&(D=D.substr(1,D.length-2)),f[m]=D}}f.length===0&&f.push(C),P.push(function(){const m=document.querySelector(`[id="${C}"]`);m!==null&&m.addEventListener("click",function(){Le.runFunc(n,...f)},!1)})}},pt=function(e){P.forEach(function(n){n(e)})},dt={LINE:0,DOTTED_LINE:1},yt={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3,LOLLIPOP:4},xe=function(e){let n=x(".mermaidTooltip");(n._groups||n)[0][0]===null&&(n=x("body").append("div").attr("class","mermaidTooltip").style("opacity",0)),x(e).select("svg").selectAll("g.node").on("mouseover",function(){const o=x(this);if(o.attr("title")===null)return;const c=this.getBoundingClientRect();n.transition().duration(200).style("opacity",".9"),n.text(o.attr("title")).style("left",window.scrollX+c.left+(c.right-c.left)/2+"px").style("top",window.scrollY+c.top-14+document.body.scrollTop+"px"),n.html(n.html().replace(/&lt;br\/&gt;/g,"<br/>")),o.classed("hover",!0)}).on("mouseout",function(){n.transition().duration(500).style("opacity",0),x(this).classed("hover",!1)})};P.push(xe);let Re="TB";const Et=()=>Re,Ct=e=>{Re=e},ft={parseDirective:Ze,setAccTitle:Ke,getAccTitle:ze,getAccDescription:Ye,setAccDescription:Xe,getConfig:()=>S().class,addClass:ae,bindFunctions:pt,clear:He,getClass:qe,getClasses:et,getNotes:ut,addAnnotation:it,addNote:rt,getRelations:tt,addRelation:st,getDirection:Et,setDirection:Ct,addMember:Ie,addMembers:nt,cleanupLabel:at,lineType:dt,relationType:yt,setClickEvent:ht,setCssClass:le,setLink:lt,getTooltip:ct,setTooltip:ot,lookUpDomId:Oe,setDiagramTitle:je,getDiagramTitle:Qe},kt=e=>`g.classGroup text {
  fill: ${e.nodeBorder};
  fill: ${e.classText};
  stroke: none;
  font-family: ${e.fontFamily};
  font-size: 10px;

  .title {
    font-weight: bolder;
  }

}

.nodeLabel, .edgeLabel {
  color: ${e.classText};
}
.edgeLabel .label rect {
  fill: ${e.mainBkg};
}
.label text {
  fill: ${e.classText};
}
.edgeLabel .label span {
  background: ${e.mainBkg};
}

.classTitle {
  font-weight: bolder;
}
.node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }


.divider {
  stroke: ${e.nodeBorder};
  stroke: 1;
}

g.clickable {
  cursor: pointer;
}

g.classGroup rect {
  fill: ${e.mainBkg};
  stroke: ${e.nodeBorder};
}

g.classGroup line {
  stroke: ${e.nodeBorder};
  stroke-width: 1;
}

.classLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${e.mainBkg};
  opacity: 0.5;
}

.classLabel .label {
  fill: ${e.nodeBorder};
  font-size: 10px;
}

.relation {
  stroke: ${e.lineColor};
  stroke-width: 1;
  fill: none;
}

.dashed-line{
  stroke-dasharray: 3;
}

.dotted-line{
  stroke-dasharray: 1 2;
}

#compositionStart, .composition {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#compositionEnd, .composition {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#extensionStart, .extension {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#extensionEnd, .extension {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#aggregationStart, .aggregation {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#aggregationEnd, .aggregation {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#lollipopStart, .lollipop {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#lollipopEnd, .lollipop {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

.edgeTerminals {
  font-size: 11px;
}

.classTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${e.textColor};
}
`,Dt=kt;export{ft as B,Ft as b,Dt as y};
