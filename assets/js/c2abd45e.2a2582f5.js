"use strict";(self.webpackChunkns_compose_docs=self.webpackChunkns_compose_docs||[]).push([[2309],{2991:(t,e,a)=>{a.d(e,{Z:()=>h});var r=a(7294),o=a(6010),n=a(2802),i=a(9960),l=a(3919),s=a(5999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(t){let{href:e,children:a}=t;return r.createElement(i.Z,{href:e,className:(0,o.Z)("card padding--lg",c.cardContainer)},a)}function d(t){let{href:e,icon:a,title:n,description:i}=t;return r.createElement(u,{href:e},r.createElement("h2",{className:(0,o.Z)("text--truncate",c.cardTitle),title:n},a," ",n),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",c.cardDescription),title:i},i))}function m(t){let{item:e}=t;const a=(0,n.Wl)(e);return a?r.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function p(t){let{item:e}=t;const a=(0,l.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,n.xz)(e.docId??void 0);return r.createElement(d,{href:e.href,icon:a,title:e.label,description:o?.description})}function y(t){let{item:e}=t;switch(e.type){case"link":return r.createElement(p,{item:e});case"category":return r.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function k(t){let{className:e}=t;const a=(0,n.jA)();return r.createElement(h,{items:a.items,className:e})}function h(t){const{items:e,className:a}=t;if(!e)return r.createElement(k,t);const i=(0,n.MN)(e);return r.createElement("section",{className:(0,o.Z)("row",a)},i.map(((t,e)=>r.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:t})))))}},473:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var r=a(7462),o=(a(7294),a(3905)),n=a(9937),i=a(4267),l=a(8862),s=a(3727);a(2991);const c={},u="Tutorials",d={unversionedId:"tutorial/index",id:"tutorial/index",title:"Tutorials",description:"Quickstart",source:"@site/docs/tutorial/index.mdx",sourceDirName:"tutorial",slug:"/tutorial/",permalink:"/compose-docs/tutorial/",draft:!1,editUrl:"https://github.com/neurostuff/compose-docs/edit/master/docs/tutorial/index.mdx",tags:[],version:"current",lastUpdatedBy:"Alejandro de la Vega",lastUpdatedAt:1706910558,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/compose-docs/guide/glossary"},next:{title:"Manual Meta-Analysis",permalink:"/compose-docs/tutorial/manual"}},m={},p=[{value:"Quickstart",id:"quickstart",level:3},{value:"Advanced tutorials",id:"advanced-tutorials",level:3}],y={toc:p},k="wrapper";function h(t){let{components:e,...a}=t;return(0,o.kt)(k,(0,r.Z)({},y,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorials"},"Tutorials"),(0,o.kt)("h3",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"Neurosynth Compose supports a range of workflows,\nfrom exploratory large-scale automated analyses to highly rigorous manual analyses."),(0,o.kt)("p",null,"The choice of workflow depends on your research question and resources available for manual curation.\nWe reccomend starting with the ",(0,o.kt)("strong",{parentName:"p"},"manual meta-analysis")," tutorial if you are new."),(0,o.kt)("div",{style:{display:"flex"}},(0,o.kt)(s.rU,{to:"tutorial/manual",style:{textDecoration:"none"},style:{width:"100%",display:"flex",marginRight:"30px",cursor:"pointer"},mdxType:"Link"},(0,o.kt)(n.Z,{style:{borderRadius:"8px"},mdxType:"Card"},(0,o.kt)(i.Z,{mdxType:"CardContent"},(0,o.kt)(l.Z,{variant:"h5",component:"h2",gutterBottom:!0,mdxType:"Typography"},"Manual"),(0,o.kt)(l.Z,{variant:"body1",gutterBottom:!0,mdxType:"Typography"},(0,o.kt)("em",null,"Most stringent and rigorous."),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Search across multiple sources, such as: PubMed, Web of Science, NeuroStore"),(0,o.kt)("li",null,"Careful curation for inclusion/exclusion criteria"),(0,o.kt)("li",null,"Extract coordinates from studies not already indexed"),(0,o.kt)("li",null,"Meets PRISMA guidelines")))))),(0,o.kt)(s.rU,{to:"tutorial/automated",style:{textDecoration:"none"},style:{width:"100%",display:"flex",marginRight:"30px",cursor:"pointer"},mdxType:"Link"},(0,o.kt)(n.Z,{style:{borderRadius:"8px"},mdxType:"Card"},(0,o.kt)(i.Z,{mdxType:"CardContent"},(0,o.kt)(l.Z,{variant:"h5",component:"h2",gutterBottom:!0,mdxType:"Typography"},"Automated"),(0,o.kt)(l.Z,{variant:"body1",gutterBottom:!0,mdxType:"Typography"},(0,o.kt)("em",null,"Fast exploratory analysis."),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Query studies at scale"),(0,o.kt)("li",null,"Search using terms, topics or activation coordinates"),(0,o.kt)("li",null,"Replicate results from original Neurosynth"),(0,o.kt)("li",null,"Immediate results, ideal for a exploratory analysis"))))))),(0,o.kt)("h3",{id:"advanced-tutorials"},"Advanced tutorials"),(0,o.kt)("p",null,"After you've completed the core tutorials above, you can continue your learning journey with ",(0,o.kt)("a",{parentName:"p",href:"./tutorial/advanced"},"advanced tutorials"),"."))}h.isMDXComponent=!0}}]);