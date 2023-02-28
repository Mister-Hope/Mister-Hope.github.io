import{a1 as H,h as v,M as f,a3 as w}from"./mermaid.esm.min-fe9bebaa.js";import{z as k}from"./isPlainObject-0b348591-01aca3b8.js";let M=0;const P=function(e,a,t,r,n){const i=function(l){switch(l){case n.db.relationType.AGGREGATION:return"aggregation";case n.db.relationType.EXTENSION:return"extension";case n.db.relationType.COMPOSITION:return"composition";case n.db.relationType.DEPENDENCY:return"dependency";case n.db.relationType.LOLLIPOP:return"lollipop"}};a.points=a.points.filter(l=>!Number.isNaN(l.y));const s=a.points,o=k().x(function(l){return l.x}).y(function(l){return l.y}).curve(H),d=e.append("path").attr("d",o(s)).attr("id","edge"+M).attr("class","relation");let c="";r.arrowMarkerAbsolute&&(c=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,c=c.replace(/\(/g,"\\("),c=c.replace(/\)/g,"\\)")),t.relation.lineType==1&&d.attr("class","relation dashed-line"),t.relation.lineType==10&&d.attr("class","relation dotted-line"),t.relation.type1!=="none"&&d.attr("marker-start","url("+c+"#"+i(t.relation.type1)+"Start)"),t.relation.type2!=="none"&&d.attr("marker-end","url("+c+"#"+i(t.relation.type2)+"End)");let x,p;const m=a.points.length;let b=v.calcLabelPosition(a.points);x=b.x,p=b.y;let y,T,B,u;if(m%2!==0&&m>1){let l=v.calcCardinalityPosition(t.relation.type1!=="none",a.points,a.points[0]),h=v.calcCardinalityPosition(t.relation.type2!=="none",a.points,a.points[m-1]);f.debug("cardinality_1_point "+JSON.stringify(l)),f.debug("cardinality_2_point "+JSON.stringify(h)),y=l.x,T=l.y,B=h.x,u=h.y}if(t.title!==void 0){const l=e.append("g").attr("class","classLabel"),h=l.append("text").attr("class","label").attr("x",x).attr("y",p).attr("fill","red").attr("text-anchor","middle").text(t.title);window.label=h;const g=h.node().getBBox();l.insert("rect",":first-child").attr("class","box").attr("x",g.x-r.padding/2).attr("y",g.y-r.padding/2).attr("width",g.width+r.padding).attr("height",g.height+r.padding)}f.info("Rendering relation "+JSON.stringify(t)),t.relationTitle1!==void 0&&t.relationTitle1!=="none"&&e.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",y).attr("y",T).attr("fill","black").attr("font-size","6").text(t.relationTitle1),t.relationTitle2!==void 0&&t.relationTitle2!=="none"&&e.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",B).attr("y",u).attr("fill","black").attr("font-size","6").text(t.relationTitle2),M++},$=function(e,a,t,r){f.debug("Rendering class ",a,t);const n=a.id,i={id:n,label:a.id,width:0,height:0},s=e.append("g").attr("id",r.db.lookUpDomId(n)).attr("class","classGroup");let o;a.link?o=s.append("svg:a").attr("xlink:href",a.link).attr("target",a.linkTarget).append("text").attr("y",t.textHeight+t.padding).attr("x",0):o=s.append("text").attr("y",t.textHeight+t.padding).attr("x",0);let d=!0;a.annotations.forEach(function(g){const S=o.append("tspan").text("«"+g+"»");d||S.attr("dy",t.textHeight),d=!1});let c=a.id;a.type!==void 0&&a.type!==""&&(c+="<"+a.type+">");const x=o.append("tspan").text(c).attr("class","title");d||x.attr("dy",t.textHeight);const p=o.node().getBBox().height,m=s.append("line").attr("x1",0).attr("y1",t.padding+p+t.dividerMargin/2).attr("y2",t.padding+p+t.dividerMargin/2),b=s.append("text").attr("x",t.padding).attr("y",p+t.dividerMargin+t.textHeight).attr("fill","white").attr("class","classText");d=!0,a.members.forEach(function(g){E(b,g,d,t),d=!1});const y=b.node().getBBox(),T=s.append("line").attr("x1",0).attr("y1",t.padding+p+t.dividerMargin+y.height).attr("y2",t.padding+p+t.dividerMargin+y.height),B=s.append("text").attr("x",t.padding).attr("y",p+2*t.dividerMargin+y.height+t.textHeight).attr("fill","white").attr("class","classText");d=!0,a.methods.forEach(function(g){E(B,g,d,t),d=!1});const u=s.node().getBBox();var l=" ";a.cssClasses.length>0&&(l=l+a.cssClasses.join(" "));const h=s.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",u.width+2*t.padding).attr("height",u.height+t.padding+.5*t.dividerMargin).attr("class",l).node().getBBox().width;return o.node().childNodes.forEach(function(g){g.setAttribute("x",(h-g.getBBox().width)/2)}),a.tooltip&&o.insert("title").text(a.tooltip),m.attr("x2",h),T.attr("x2",h),i.width=h,i.height=u.height+t.padding+.5*t.dividerMargin,i},C=function(e,a,t,r){f.debug("Rendering note ",a,t);const n=a.id,i={id:n,text:a.text,width:0,height:0},s=e.append("g").attr("id",n).attr("class","classGroup");let o=s.append("text").attr("y",t.textHeight+t.padding).attr("x",0);const d=JSON.parse(`"${a.text}"`).split(`
`);d.forEach(function(p){f.debug(`Adding line: ${p}`),o.append("tspan").text(p).attr("class","title").attr("dy",t.textHeight)});const c=s.node().getBBox(),x=s.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",c.width+2*t.padding).attr("height",c.height+d.length*t.textHeight+t.padding+.5*t.dividerMargin).node().getBBox().width;return o.node().childNodes.forEach(function(p){p.setAttribute("x",(x-p.getBBox().width)/2)}),i.width=x,i.height=c.height+d.length*t.textHeight+t.padding+.5*t.dividerMargin,i},O=function(e){const a=/^([#+~-])?(\w+)(~\w+~|\[])?\s+(\w+) *([$*])?$/,t=/^([#+|~-])?(\w+) *\( *(.*)\) *([$*])? *(\w*[[\]|~]*\s*\w*~?)$/;let r=e.match(a),n=e.match(t);return r&&!n?I(r):n?A(n):L(e)},I=function(e){let a="",t="";try{let r=e[1]?e[1].trim():"",n=e[2]?e[2].trim():"",i=e[3]?w(e[3].trim()):"",s=e[4]?e[4].trim():"",o=e[5]?e[5].trim():"";t=r+n+i+" "+s,a=N(o)}catch{t=e}return{displayText:t,cssStyle:a}},A=function(e){let a="",t="";try{let r=e[1]?e[1].trim():"",n=e[2]?e[2].trim():"",i=e[3]?w(e[3].trim()):"",s=e[4]?e[4].trim():"",o=e[5]?" : "+w(e[5]).trim():"";t=r+n+"("+i+")"+o,a=N(s)}catch{t=e}return{displayText:t,cssStyle:a}},L=function(e){let a="",t="",r="",n=e.indexOf("("),i=e.indexOf(")");if(n>1&&i>n&&i<=e.length){let s="",o="",d=e.substring(0,1);d.match(/\w/)?o=e.substring(0,n).trim():(d.match(/[#+~-]/)&&(s=d),o=e.substring(1,n).trim());const c=e.substring(n+1,i);e.substring(i+1,1),t=N(e.substring(i+1,i+2)),a=s+o+"("+w(c.trim())+")",i<e.length&&(r=e.substring(i+2).trim(),r!==""&&(r=" : "+w(r),a+=r))}else a=w(e);return{displayText:a,cssStyle:t}},E=function(e,a,t,r){let n=O(a);const i=e.append("tspan").attr("x",r.padding).text(n.displayText);n.cssStyle!==""&&i.attr("style",n.cssStyle),t||i.attr("dy",r.textHeight)},N=function(e){switch(e){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},_={drawClass:$,drawEdge:P,drawNote:C,parseMember:O};export{_ as F,O as T};
