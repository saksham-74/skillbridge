const CATS={
"Gaming":{i:"🎮",s:["Mobile: BGMI","Mobile: Free Fire","Mobile: COD Mobile","Mobile: Clash of Clans","PC: Valorant","PC: CS2","PC: GTA V","PC: Minecraft","PC: Fortnite"]},
"Art":{i:"🎨",s:["Sketching","Digital Art","Painting","Calligraphy","Photography","Graphic Design","Pixel Art","Anime / Manga","Realistic Art","Cartoon","Low-poly 3D"]},
"Music":{i:"🎵",s:["Vocals","Guitar","Piano / Keys","Drums","Music Production","Rap / Lyrics"]},
"Dance":{i:"💃",s:["Hip-hop","Classical","Bhangra","Contemporary","Freestyle"]},
"Theatre":{i:"🎭",s:["Acting","Scriptwriting","Street Play","Stand-up / Mime"]},
"Academics":{i:"📚",s:["Computer Science & Engg","Electronics","Mechanical","Civil","Management / MBA","Law","Design & Architecture","Agriculture","Pharmacy","Hotel Management","Journalism & Media","Sciences","Education"]},
"Sports":{i:"🏅",s:["Cricket","Football","Basketball","Volleyball","Badminton","Table Tennis","Athletics","Kabaddi","Swimming","Chess"]}};
const ST={a:["Available now","#22c55e"],c:["In class","#f59e0b"],b:["Busy","#ef4444"],o:["Offline","#9ca3af"]};
const SEED=[["Aarav Sharma","CSE","Gaming·PC: Valorant,Academics·Computer Science & Engg","a","Looking for a ranked 5-stack and a hackathon team."],
["Meera Kapoor","Design","Art·Digital Art,Art·Anime / Manga","a","Concept artist. Need game devs for a mini project."],
["Rohan Singh","Mech Engg","Sports·Cricket,Sports·Football","c","Weekend matches on the main ground."],
["Priya Nair","BBA","Dance·Hip-hop,Theatre·Acting","a","Forming a dance crew for the cultural fest."],
["Kabir Mehta","Music Tech","Music·Guitar,Music·Music Production","b","Open to jam sessions and collabs."],
["Sneha Gill","Law","Theatre·Street Play,Academics·Law","o","Moot court + street plays."],
["Dev Patel","CSE","Gaming·Mobile: BGMI,Gaming·Mobile: Free Fire","a","Squad leader, scrims every night."],
["Isha Verma","Journalism","Art·Photography,Academics·Journalism & Media","c","Campus photo stories."]];
const SK={p0:{"Gaming·PC: Valorant":{lv:"Advanced",time:"9 PM - 12 AM, daily",desc:"Immortal peak, Controller and Initiator main. I run scrims every weekend.",marks:"",shots:[]},"Academics·Computer Science & Engg":{lv:"Advanced",time:"Study group Tue/Thu evenings",marks:"CGPA 8.4",desc:"Built 3 full-stack projects and solved 300+ DSA problems.",shots:[]}},
p1:{"Art·Digital Art":{lv:"Advanced",time:"6 - 9 PM, weekdays",desc:"Character and concept art in Procreate and Photoshop.",marks:"",shots:[]}},
p3:{"Dance·Hip-hop":{lv:"Intermediate",time:"5 - 7 PM, Mon-Fri",desc:"6 years of hip-hop, performed at 2 college fests.",marks:"",shots:[]}}};
const REG={p0:"12301101",p1:"12302212",p2:"12303323",p3:"12304434",p4:"12305545",p5:"12306656",p6:"12307767",p7:"12308878"};
const FREE={p2:"1:30 PM",p4:"6:00 PM",p5:"Tomorrow 9 AM",p7:"3:00 PM"};
const NOTES={p3:"Hi! Saw your profile and would love to have you in our dance crew.",p1:"Hey, I need a game dev for an anime-style 2D game. Interested?"};
const E=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let S=null,VP=null,CM=null,CP=null,MP="po",OPEN={},V="feed",FC="",FS="",Q="",CH=null,CO=0,MN=null,RP=null,CF=null,AP=null,HF=false;
try{S=JSON.parse(localStorage.getItem("lpuc"))}catch(e){}
const MG=t=>({"Gaming·Art style: Pixel":"Art·Pixel Art","Gaming·Art style: Anime":"Art·Anime / Manga","Gaming·Art style: Realistic":"Art·Realistic Art","Gaming·Art style: Cartoon":"Art·Cartoon","Gaming·Art style: Low-poly":"Art·Low-poly 3D"}[t]||t);
if(S&&S.P){[...S.P,S.me].forEach(o=>{o.tags=[...new Set((o.tags||[]).map(MG))];if(o.sk)Object.keys(o.sk).forEach(k=>{if(MG(k)!==k){o.sk[MG(k)]=o.sk[k];delete o.sk[k]}})});(S.posts||[]).forEach(p=>p.tg=[...new Set((p.tg||[]).map(MG))]);S.P.forEach(p=>{if(!p.sk||!Object.keys(p.sk).length)p.sk=SK[p.id]||{};if(p.free===undefined)p.free=FREE[p.id]||"";if(!p.reg)p.reg=REG[p.id]||""});S.me.sk=S.me.sk||{};if(!S.notes)S.notes={...NOTES}}
function seed(me){
 const P=SEED.map((p,i)=>({id:"p"+i,name:p[0],course:p[1],tags:p[2].split(","),st:p[3],bio:p[4],sk:SK["p"+i]||{},free:FREE["p"+i]||"",reg:REG["p"+i]}));
 return{me,P,notes:{...NOTES},con:{p3:"in",p1:"in"},posts:[
 {id:1,a:"p0",t:"Hosting a Valorant scrim on Saturday night. Radiant to Silver all welcome. Comment if you're in!",tg:["Gaming·PC: Valorant"],lk:[],cm:[],ts:Date.now()-36e5},
 {id:2,a:"p3",t:"Auditions for the fest dance crew start Monday. Hip-hop and contemporary dancers, come say hi.",tg:["Dance·Hip-hop"],lk:[],cm:[],ts:Date.now()-72e5},
 {id:3,a:"p1",t:"Looking for a game dev to team up with for an anime-style 2D game. I'll do all the art.",tg:["Art·Digital Art","Art·Anime / Manga"],lk:[],cm:[],ts:Date.now()-2e7},
 {id:4,a:"p0",t:"Our hackathon team needs one more developer. Frontend or backend, weekends only.",tg:["Academics·Computer Science & Engg"],h:{role:"Hackathon teammate (developer)",n:"1",type:"Project teammate",pay:"Unpaid",loc:"On campus",dl:"",open:true},ap:[],lk:[],cm:[],ts:Date.now()-9e6}],chats:{}}}
function save(){try{localStorage.setItem("lpuc",JSON.stringify(S))}catch(e){}}
const person=id=>id==="me"?{id:"me",name:S.me.name,course:S.me.course,tags:S.me.tags,st:S.me.st,bio:S.me.bio,sk:S.me.sk,dp:S.me.dp,free:S.me.free,reg:S.me.reg}:S.P.find(p=>p.id===id);
const ini=n=>n.split(" ").map(w=>w[0]).slice(0,2).join("").toUpperCase();
const av=(p,z=44)=>`<div class="av" style="width:${z}px;height:${z}px;font-size:${z/3|0}px;background:${p.dp?"url("+p.dp+") center/cover":"hsl("+(p.name.length*47)%360+" 60% 45%)"}">${p.dp?"":ini(p.name)}<span class="dot" style="background:${ST[p.st][1]}"></span></div>`;
const tags=a=>(a||[]).map(t=>`<span class="chip tag">${E((CATS[t.split("·")[0]]||{}).i||"")} ${E(t.replace("·"," › "))}</span>`).join("");
const ago=t=>{const m=Math.max(1,(Date.now()-t)/6e4|0);return m<60?m+"m":m<1440?(m/60|0)+"h":(m/1440|0)+"d"};
function login(){
 document.getElementById("app").innerHTML=`<div class="login card"><div class="logo">Skill<i>Bridge</i></div><p class="mut">Find students who share your interests and goals. Sign in with your LPU registration ID.</p>
 <label>Full name</label><input id="ln" placeholder="Your name"><label>LPU Registration ID (8 digits)</label><input id="lr" inputmode="numeric" maxlength="8" placeholder="e.g. 12345678"><label>Password (min 6 characters)</label><input id="lp" type="password">
 <div id="le" class="mut" style="color:#ef4444"></div><button class="btn" style="width:100%" onclick="doLogin()">Sign in</button>
 <p class="mut">Demo build: sign-in is checked on this device only. Real verification needs a university login backend.</p></div>`}
function doLogin(){
 const n=ln.value.trim(),r=lr.value.trim(),p=lp.value;
 if(n.length<2)return le.textContent="Enter your name.";
 if(!/^\d{8}$/.test(r))return le.textContent="Registration ID must be exactly 8 digits.";
 if(p.length<6)return le.textContent="Password needs at least 6 characters.";
 S=seed({name:n,reg:r,course:"",bio:"",tags:[],sk:{},st:"a"});save();V="profile";render()}
function render(){
 if(!S)return login();
 const N=[["feed","🏠","Feed"],["disc","🔍","Discover"],["posts","📝","Posts"],["net","🤝","Network"],["chat","💬","Chat"],["profile","👤","Me"]];
 const inv=Object.values(S.con).filter(v=>v==="in").length;
 document.getElementById("app").innerHTML=`<header><div class="bar"><span class="logo">Skill<i>Bridge</i></span><nav>${N.map(n=>`<button class="${V===n[0]?"on":""}" onclick="V='${n[0]}';CO=0;render()"><b>${n[1]}</b>${n[2]}${n[0]==="net"&&inv?" ("+inv+")":""}</button>`).join("")}</nav></div></header><main>${({feed,disc,posts:mine,net,chat,profile})[V]()}</main>${VP?pview():""}${CP?pcomp():""}${CM?cmodal():""}${RP?rmodal():""}${CF?cfmodal():""}${AP?amod():""}`}
function soft(){if(S&&!CP&&!CM&&!AP&&!RP&&!CF&&!/INPUT|TEXTAREA/.test((document.activeElement||{}).tagName||""))render()}
function shrink(f,max,cb,sq){const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{let sx=0,sy=0,sw=im.width,sh=im.height;if(sq){const m=Math.min(sw,sh);sx=(sw-m)/2;sy=(sh-m)/2;sw=sh=m}const z=Math.min(1,max/Math.max(sw,sh)),c=document.createElement("canvas");c.width=sw*z;c.height=sh*z;c.getContext("2d").drawImage(im,sx,sy,sw,sh,0,0,c.width,c.height);cb(c.toDataURL("image/jpeg",.7))};im.src=r.result};r.readAsDataURL(f)}
function tf(c){const F=S.me.fc||[],i=F.indexOf(c);i<0?F.push(c):F.splice(i,1);S.me.fc=F;save();render()}
function feed(){
 if(!S.me.fc)S.me.fc=[...new Set(S.me.tags.map(t=>t.split("·")[0]))];
 const F=S.me.fc,L=S.posts.filter(p=>(!F.length||p.a==="me"||(p.tg||[]).some(t=>F.includes(t.split("·")[0])))&&(!HF||p.h)).sort((a,b)=>b.ts-a.ts);
 return`<div class="card"><b>Your feed</b> <span class="mut">Tap categories to tune it</span><div class="chips" style="margin-top:8px"><span class="chip" style="border-color:#e5233b;${HF?"background:#e5233b;color:#fff":"color:#e5233b"}" onclick="HF=!HF;render()">🔴 Hiring</span><span class="chip ${F.length?"":"on"}" onclick="S.me.fc=[];save();render()">All</span>${Object.keys(CATS).map(c=>`<span class="chip ${F.includes(c)?"on":""}" onclick="tf('${c}')">${CATS[c].i} ${c}</span>`).join("")}</div></div>${L.map(p=>postHTML(p)).join("")||'<p class="mut">No posts in these categories yet. Be the first to post!</p>'}`}
function media(p){return(p.md||[]).map(m=>m.k==="v"?`<video src="${m.s}" controls playsinline style="width:100%;border-radius:10px;margin-top:8px"></video>`:`<img src="${m.s}" style="width:100%;border-radius:10px;margin-top:8px">`).join("")}
function postHTML(p,mg){
 const a=person(p.a);if(!a)return"";
 const lk=p.lk.includes("me"),o=p.rp?S.posts.find(x=>x.id===p.rp):null,cs=S.con[p.a];
 return`<div class="card${p.h?(p.h.open===false?" hire closed":" hire"):""}"><div class="row"><span style="cursor:pointer" title="View profile" onclick="VP='${p.a}';render()">${av(a)}</span><div class="sp"><b style="cursor:pointer" onclick="VP='${p.a}';render()">${E(a.name)}</b>${p.rp?' <span class="mut">reposted</span>':""}<div class="mut">${E(a.course||"LPU student")} · ${ago(p.ts)}${p.ed?" · edited":""}</div></div>${!mg&&p.a!=="me"&&cs!=="ok"?`<button class="btn o" onclick="conn('${p.a}')">${cs==="out"?"Pending":cs==="in"?"Accept":"+ Connect"}</button>`:""}</div>
 ${p.t?`<p style="white-space:pre-wrap">${E(p.t)}</p>`:""}${p.h?hireBox(p):""}
 ${p.rp?(o?`<div class="card" style="background:var(--in);margin:8px 0"><b>${E((person(o.a)||{name:"Student"}).name)}</b><p style="white-space:pre-wrap;margin:4px 0">${E(o.t)}</p>${media(o)}</div>`:'<div class="card mut">The original post is no longer available.</div>'):media(p)}
 <div>${tags(p.tg)}</div><div class="mut" style="margin:8px 0">${p.lk.length} likes · ${p.cm.length} comments</div>
 <div class="row" style="flex-wrap:wrap"><button class="btn g" onclick="like(${p.id})">${lk?"👍 Liked":"👍 Like"}</button><button class="btn g" onclick="OPEN[${p.id}]=!OPEN[${p.id}];render()">💬 ${mg?"Read comments":"Comment"} (${p.cm.length})</button>${mg?`<button class="btn g" onclick="editPost(${p.id})">✏️ Edit</button><button class="btn g" onclick="delPost(${p.id})">🗑 Delete</button>`:`<button class="btn g" onclick="repost(${p.id})">🔁 Repost</button>`}</div>
 ${OPEN[p.id]?`<div style="margin-top:8px">${p.cm.map((c,j)=>`<div class="row mut" style="margin:4px 0"><span class="sp"><b>${E((person(c.a)||{name:"Student"}).name)}:</b> ${E(c.t)}</span>${p.a==="me"?`<span style="cursor:pointer" title="Delete comment" onclick="delCm(${p.id},${j})">✕</span>`:""}</div>`).join("")||'<div class="mut">No comments yet.</div>'}${mg?"":`<div class="row"><input id="ci${p.id}" placeholder="Add a comment..." style="margin:6px 0"><button class="btn" onclick="comment(${p.id})">Send</button></div>`}</div>`:""}</div>`}
function like(id){const p=S.posts.find(x=>x.id===id),i=p.lk.indexOf("me");i<0?p.lk.push("me"):p.lk.splice(i,1);save();render()}
function comment(id){const i=document.getElementById("ci"+id),t=i.value.trim();if(!t)return;S.posts.find(x=>x.id===id).cm.push({a:"me",t});OPEN[id]=true;save();render()}
function delCm(id,j){S.posts.find(x=>x.id===id).cm.splice(j,1);save();render()}
function repost(id){const p=S.posts.find(x=>x.id===id),n=Date.now();S.posts.push({id:n,a:"me",rp:p.rp||id,t:"",tg:p.tg||[],md:[],lk:[],cm:[],ts:n});save();render()}
function newPost(){CP={t:"",tg:[],md:[]};render()}
function editPost(id){const p=S.posts.find(x=>x.id===id);CP={id,rp:!!p.rp,t:p.t,tg:[...(p.tg||[])],md:[...(p.md||[])],h:p.h?{...p.h}:null};render()}
function delPost(id){S.posts=S.posts.filter(x=>x.id!==id);save();render()}
function ctg(c){const h=CP.tg.some(t=>t.split("·")[0]===c);CP.tg=h?CP.tg.filter(t=>t.split("·")[0]!==c):[...CP.tg,c];render()}
function addMedia(el){
 CP.err="";
 [...el.files].forEach(f=>{if(CP.md.length>=4)return;
  if(f.type.startsWith("video")){if(f.size>3e6){CP.err="Video is too large for this demo (max 3 MB).";render();return}
   const r=new FileReader();r.onload=()=>{if(CP){CP.md.push({k:"v",s:r.result});render()}};r.readAsDataURL(f)}
  else shrink(f,900,d=>{if(CP&&CP.md.length<4){CP.md.push({k:"i",s:d});render()}})})}
function pubPost(){
 const t=CP.t.trim();CP.err="";if(CP.h&&!CP.h.role.trim()){CP.err="Add a role or title for your hiring post.";return render()}if(!t&&!CP.md.length&&!CP.h)return;
 if(CP.id){const p=S.posts.find(x=>x.id===CP.id);p.t=t;if(!CP.rp){p.tg=CP.tg;p.md=CP.md;p.h=CP.h?{...CP.h,open:!p.h||p.h.open!==false}:null}p.ed=1}
 else{const id=Date.now();S.posts.push({id,a:"me",t,tg:CP.tg,md:CP.md,h:CP.h?{...CP.h,open:true}:null,ap:[],lk:[],cm:[],ts:id});liveC(id);if(CP.h)liveA(id)}
 CP=null;save();render()}
function liveC(id){setTimeout(()=>{const p=S&&S.posts.find(x=>x.id===id);if(!p)return;const q=S.P.filter(x=>x.st!=="o"),a=q[Math.random()*q.length|0],T=["Interesting! Count me in.","Nice one, let's connect.","This is exactly what I was looking for."];p.cm.push({a:a.id,t:T[Math.random()*3|0]});save();soft()},7000)}
function pcomp(){
 const e=CP.rp;
 return`<div class="ov" style="z-index:25" onclick="if(event.target===this){CP=null;render()}"><div class="mod"><div class="row"><b class="sp">${CP.id?(e?"Edit repost":"Edit post"):"Create a post"}</b><button class="btn g" onclick="CP=null;render()">Close</button></div>
 <div class="row" style="margin:10px 0">${av(person("me"),40)}<b>${E(S.me.name)}</b></div>
 <textarea style="min-height:130px" oninput="CP.t=this.value" placeholder="${e?"Add your thoughts on this repost...":"What do you want to talk about?"}">${E(CP.t)}</textarea>
 ${e?"":`<label>Post in categories (decides whose feed sees it)</label><div class="chips" style="margin:4px 0 8px">${Object.keys(CATS).map(c=>`<span class="chip ${CP.tg.some(t=>t.split("·")[0]===c)?"on":""}" onclick="ctg('${c}')">${CATS[c].i} ${c}</span>`).join("")}</div>
 ${hform()}<div class="row" style="flex-wrap:wrap;margin:8px 0">${CP.md.map((m,j)=>`<div style="position:relative">${m.k==="v"?`<video src="${m.s}" class="shot"></video>`:`<img src="${m.s}" class="shot">`}<span class="x" onclick="CP.md.splice(${j},1);render()">✕</span></div>`).join("")}</div>
 ${CP.err?`<div style="color:#ef4444;font-size:13px">${E(CP.err)}</div>`:""}
 <label class="btn g" style="display:inline-block;cursor:pointer">📷 Photo / 🎥 Video<input type="file" accept="image/*,video/*" multiple hidden onchange="addMedia(this)"></label>`}
 <div style="text-align:right;margin-top:12px"><button class="btn" onclick="pubPost()">${CP.id?"Save":"Post"}</button></div></div></div>`}
function mine(){
 const my=S.posts.filter(p=>p.a==="me"),R=my.filter(p=>p.rp),O=my.filter(p=>!p.rp),L=(MP==="re"?R:O).sort((a,b)=>b.ts-a.ts);
 return`<div class="row" style="margin-bottom:10px"><h2 class="sp" style="margin:0">My posts</h2><button class="btn" onclick="newPost()">✏️ Post</button></div><div class="row" style="margin-bottom:10px"><span class="chip ${MP==="po"?"on":""}" onclick="MP='po';render()">Posts (${O.length})</span><span class="chip ${MP==="re"?"on":""}" onclick="MP='re';render()">Reposts (${R.length})</span></div>${L.map(p=>postHTML(p,1)).join("")||`<p class="mut">${MP==="re"?"You haven't reposted anything yet.":"You haven't posted yet. Tap the Post button above to share your first post."}</p>`}`}
function conn(id){
 if(S.con[id]==="in"){S.con[id]="ok";const n=S.notes[id];if(n)(S.chats[id]=S.chats[id]||[]).push({f:"",t:n});save();return render()}
 if(S.con[id])return;CM=id;render()}
function sendReq(id){const n=document.getElementById("cn").value.trim();S.notes[id]=n;S.con[id]="out";CM=null;save();render();
 setTimeout(()=>{if(S&&S.con[id]==="out"){S.con[id]="ok";if(n)(S.chats[id]=S.chats[id]||[]).push({f:"me",t:n});save();soft()}},3500)}
function cmodal(){
 const p=person(CM);if(!p)return"";
 const adv=p.st==="a"?"Available now. A good time to connect.":ST[p.st][0]+(p.free?", free from "+p.free:"")+". You can wait until then, or send your request now and they'll see it when they're back.";
 return`<div class="ov" style="z-index:30" onclick="if(event.target===this){CM=null;render()}"><div class="mod"><div class="row">${av(p)}<div class="sp"><b>Connect with ${E(p.name)}</b><div class="mut">${E(p.course)}</div></div></div>
 <div class="card" style="margin:12px 0;border-color:${ST[p.st][1]}"><span style="color:${ST[p.st][1]}">●</span> ${E(adv)}</div>
 <label>Add a note (optional)</label><textarea id="cn" maxlength="300" placeholder="Hi ${E(p.name.split(" ")[0])}, I saw your profile and would like to connect about..."></textarea>
 <div class="row" style="justify-content:flex-end"><button class="btn g" onclick="CM=null;render()">Cancel</button><button class="btn" onclick="sendReq('${p.id}')">Send request</button></div></div></div>`}
function setDp(el){const f=el.files[0];if(f)shrink(f,256,d=>{S.me.dp=d;save();render()},1)}
function rmDp(){delete S.me.dp;save();render()}
function card(p,why,menu){const c=S.con[p.id];return`<div class="card"><div class="row"><span style="cursor:pointer" onclick="VP='${p.id}';render()">${av(p)}</span><div class="sp"><b style="cursor:pointer" onclick="VP='${p.id}';render()">${E(p.name)}</b><div class="mut">${E(p.course)} · ${ST[p.st][0]}</div><div class="mut">Reg. ID ${E(p.reg||"")}</div>${typeof why==="string"&&why?`<div class="mut" style="color:var(--ok);font-weight:600">${E(why)}</div>`:""}</div>${menu?dots(p.id,c):""}</div><p class="mut">${E(p.bio||"")}</p><div>${tags(p.tags)}</div><div style="margin-top:8px"><button class="btn o" onclick="VP='${p.id}';render()">View profile</button> ${c==="ok"?`<button class="btn" onclick="CH='${p.id}';CO=1;V='chat';render()">Message</button>`:c==="out"?`<button class="btn g" disabled>Pending</button>`:c==="in"?`<button class="btn" onclick="conn('${p.id}')">Accept</button>`:`<button class="btn" onclick="conn('${p.id}')">+ Connect</button>`}</div></div>`}
function dres(){
 const q=Q.trim().toLowerCase();
 const L=S.P.filter(p=>(!FC||p.tags.some(t=>t.split("·")[0]===FC))&&(!FS||p.tags.some(t=>t==FC+"·"+FS))&&(!q||(p.name+" "+(p.reg||"")+" "+p.course+" "+p.bio+" "+p.tags.join()).toLowerCase().includes(q)));
 return L.map(card).join("")||'<p class="mut">No student found. Check the name or registration ID.</p>'}
const BR=[["B.Tech CSE (Computer Science)","Computer Science & Engg"],["B.Tech IT","Computer Science & Engg"],["BCA","Computer Science & Engg"],["MCA","Computer Science & Engg"],["B.Tech ECE (Electronics)","Electronics"],["B.Tech Electrical","Electronics"],["B.Tech Mechanical","Mechanical"],["B.Tech Civil","Civil"],["BBA","Management / MBA"],["MBA","Management / MBA"],["B.Com","Management / MBA"],["LLB (Law)","Law"],["B.Des (Design)","Design & Architecture"],["B.Arch (Architecture)","Design & Architecture"],["B.Sc Agriculture","Agriculture"],["B.Pharm (Pharmacy)","Pharmacy"],["Hotel Management","Hotel Management"],["Journalism & Mass Comm","Journalism & Media"],["B.Sc (Sciences)","Sciences"],["M.Sc (Sciences)","Sciences"],["B.Ed (Education)","Education"]];
const nz=s=>String(s||"").toLowerCase().replace(/[^a-z0-9]/g,""),YRX=/,?\s*[1-5](st|nd|rd|th)\s*year/i,bq=x=>nz(x[0].replace(/\s*\(.*\)/,""));
function brs(){const el=document.getElementById("brs");if(!el)return;
 const c=S.me.course||"",b=c.replace(YRX,"").trim(),q=nz(b),cy=(c.match(YRX)||[""])[0].replace(/^,?\s*/,"").toLowerCase();
 const hit=BR.findIndex(x=>nz(x[0])===q||bq(x)===q),ex=x=>nz(x[0])===q||bq(x)===q;
 const L=BR.map((x,i)=>[x,i]).filter(([x])=>!ex(x)&&(!q||nz(x[0]).includes(q)||nz(x[1]).includes(q))).slice(0,q?8:10);
 const have=hit>=0&&S.me.tags.includes("Academics·"+BR[hit][1]);
 el.innerHTML=(L.length?`<div class="mut" style="margin-bottom:4px">Suggestions</div><div class="chips" style="flex-wrap:wrap;overflow:visible">${L.map(([x,i])=>`<span class="chip" onclick="setBr(BR[${i}][0],null)">${E(x[0])}</span>`).join("")}</div>`:"")
 +(b?`<div class="mut" style="margin:10px 0 4px">Year</div><div class="chips" style="flex-wrap:wrap;overflow:visible">${["1st year","2nd year","3rd year","4th year","5th year"].map(y=>`<span class="chip ${cy===y?"on":""}" onclick="setBr(null,'${y}')">${y}</span>`).join("")}</div>`:"")
 +(hit>=0&&!have?`<div class="card" style="margin:12px 0 0;background:var(--in)"><div class="row"><div class="sp"><b>Add a matching skill?</b><div class="mut">📚 Academics › ${E(BR[hit][1])}</div></div><button class="btn" onclick="addAc(${hit})">+ Add</button></div></div>`:"")}
function setBr(b,y){const c=S.me.course||"",cy=(c.match(YRX)||[""])[0].replace(/^,?\s*/,""),cb=c.replace(YRX,"").trim(),nb=b===null?cb:b,ny=y===null?cy:y;S.me.course=nb+(ny?(nb?", ":"")+ny:"");const i=document.getElementById("br");if(i)i.value=S.me.course;save();brs()}
function addAc(i){const t="Academics·"+BR[i][1];if(!S.me.tags.includes(t)){S.me.tags.push(t);save()}render()}
const dots=(id,st)=>`<span class="mn"><button class="dots" aria-label="More options" onclick="event.stopPropagation();MN=MN==='${id}'?null:'${id}';render()">⋮</button>${MN===id?`<div class="menu" onclick="event.stopPropagation()">${st==="ok"?`<button onclick="MN=null;CF='${id}';render()">🗑 Remove connection</button>`:st==="out"?`<button onclick="MN=null;dropCon('${id}')">✖ Cancel request</button>`:`<button onclick="MN=null;dropCon('${id}')">🚫 Ignore invitation</button>`}<button class="dg" onclick="MN=null;RP={id:'${id}',reason:'',note:'',rm:false};render()">⚑ Report profile</button></div>`:""}</span>`;
addEventListener("click",()=>{if(MN){MN=null;render()}});
function dropCon(id,c){delete S.con[id];if(c){delete S.chats[id];if(CH===id)CH=null;CO=0}save();render()}
function cfmodal(){const p=person(CF);if(!p)return"";return`<div class="ov" style="z-index:30" onclick="if(event.target===this){CF=null;render()}"><div class="mod"><h3 style="margin-top:0">Remove connection?</h3><p>Remove <b>${E(p.name)}</b> from your connections? Your chat with them will be cleared. You can send a new request later.</p><div class="row" style="justify-content:flex-end"><button class="btn g" onclick="CF=null;render()">Cancel</button><button class="btn" style="background:#d11124;border-color:#d11124" onclick="const i='${p.id}';CF=null;dropCon(i,1)">Remove</button></div></div></div>`}
const RPR=["Fake profile or impersonation","Fraud or scam (money, fake job or offer)","Harassment or bullying","Inappropriate or abusive content","Spam","Other issue"];
const REPORT_TO="";
function rmodal(){
 const p=person(RP.id);if(!p)return"";
 if(RP.done)return`<div class="ov" style="z-index:30" onclick="if(event.target===this){RP=null;render()}"><div class="mod"><h3 style="margin-top:0">✅ Report submitted</h3><p>Your report about <b>${E(p.name)}</b> (${E(RP.reason)}) has been recorded for the university authorities. Thank you for helping keep the community safe.</p><p class="mut">Demo build: reports are saved on this device only. To reach real authorities, the live site needs a backend or an official email address.</p><div class="row" style="justify-content:flex-end">${REPORT_TO?`<a class="btn o" style="text-decoration:none" href="mailto:${E(REPORT_TO)}?subject=${encodeURIComponent("SkillBridge report: "+p.name)}&body=${encodeURIComponent(RP.reason+"\n\nReg. ID: "+(p.reg||"")+"\n\n"+RP.note)}">Email report</a>`:""}<button class="btn" onclick="RP=null;render()">Done</button></div></div></div>`;
 return`<div class="ov" style="z-index:30" onclick="if(event.target===this){RP=null;render()}"><div class="mod"><div class="row"><b class="sp" style="font-size:17px">⚑ Report ${E(p.name)}</b><button class="btn g" onclick="RP=null;render()">Close</button></div>
 <p class="mut">Tell us what is wrong. Reports go to the university authorities for review, and the other person is not told who reported.</p>
 <label>What is the issue?</label><div class="chips" style="flex-wrap:wrap;overflow:visible;margin:4px 0 10px">${RPR.map((x,i)=>`<span class="chip ${RP.reason===x?"on":""}" onclick="RP.reason=RPR[${i}];render()">${E(x)}</span>`).join("")}</div>
 <label>Details (optional)</label><textarea maxlength="500" oninput="RP.note=this.value" placeholder="What happened? Add dates, messages or anything that helps.">${E(RP.note)}</textarea>
 ${S.con[p.id]?`<span class="chip ${RP.rm?"on":""}" onclick="RP.rm=!RP.rm;render()">Also remove from my network</span>`:""}
 <div class="row" style="justify-content:flex-end;margin-top:12px"><button class="btn g" onclick="RP=null;render()">Cancel</button><button class="btn" style="background:#d11124;border-color:#d11124" ${RP.reason?"":"disabled"} onclick="sendRp()">Submit report</button></div></div></div>`}
function sendRp(){const p=person(RP.id);(S.reports=S.reports||[]).push({pid:RP.id,pname:p.name,preg:p.reg||"",reason:RP.reason,note:RP.note.trim(),by:S.me.reg,ts:Date.now()});if(RP.rm){delete S.con[RP.id];delete S.chats[RP.id];if(CH===RP.id)CH=null;CO=0}RP.done=true;save();render()}
const HT=["Project teammate","Team / squad","Event crew","Internship","Part-time job","Volunteer"],HP=["Unpaid","Paid","Stipend","Certificate / credit"],HL=["On campus","Remote","Hybrid"];
const hch=(k,A,v)=>`<div class="chips" style="flex-wrap:wrap;overflow:visible;margin:4px 0 8px">${A.map((x,i)=>`<span class="chip ${v===x?"on":""}" onclick="CP.h.${k}=${k==="type"?"HT":k==="pay"?"HP":"HL"}[${i}];render()">${E(x)}</span>`).join("")}</div>`;
function hform(){const h=CP.h;
 if(!h)return`<div class="card" style="margin:8px 0;cursor:pointer" onclick="CP.h={role:'',n:'1',type:HT[0],pay:HP[0],loc:HL[0],dl:''};render()"><b>🔴 Make this a hiring post</b><div class="mut">Looking for teammates, crew or interns? Add role details so students can apply.</div></div>`;
 return`<div class="card hire" style="margin:8px 0"><div class="row"><b class="sp">🔴 Hiring details</b><button class="btn g" onclick="CP.h=null;render()">Remove</button></div>
 <label>Role / title *</label><input value="${E(h.role)}" oninput="CP.h.role=this.value" placeholder="e.g. Unity game developer">
 <div class="row"><div class="sp"><label>Openings</label><input type="number" min="1" max="50" value="${E(h.n)}" oninput="CP.h.n=this.value"></div><div class="sp"><label>Apply by (optional)</label><input type="date" value="${E(h.dl)}" oninput="CP.h.dl=this.value"></div></div>
 <label>Type</label>${hch("type",HT,h.type)}<label>Pay</label>${hch("pay",HP,h.pay)}<label>Where</label>${hch("loc",HL,h.loc)}
 <div class="mut">Tip: pick categories above so the right students see your post.</div></div>`}
function hireBox(p){const h=p.h,my=p.a==="me",ap=p.ap||[],done=ap.some(x=>x.a==="me"),n=+h.n||1;
 return`<div class="hb"><div class="row" style="flex-wrap:wrap;gap:8px"><span class="hbadge">${h.open===false?"CLOSED":"● HIRING"}</span><b>${E(h.role)}</b></div>
 <div class="mut" style="margin:4px 0 8px">${E(h.type)} · ${E(h.pay)} · ${E(h.loc)} · ${n} opening${n>1?"s":""}${h.dl?" · Apply by "+E(h.dl):""}</div>
 ${my?`<div class="row" style="flex-wrap:wrap"><button class="btn o" onclick="OPEN['a${p.id}']=!OPEN['a${p.id}'];render()">👥 Applicants (${ap.length})</button><button class="btn g" onclick="togHire(${p.id})">${h.open===false?"Reopen":"Mark as filled"}</button></div>${OPEN["a"+p.id]?applHTML(p):""}`:h.open===false?'<button class="btn g" disabled>Hiring closed</button>':done?'<button class="btn g" disabled>✓ Applied</button>':`<button class="btn" onclick="AP={id:${p.id},t:''};render()">Apply now</button>`}</div>`}
function applHTML(p){return`<div style="margin-top:10px">${(p.ap||[]).map(x=>{const q=person(x.a)||{name:"Student",st:"o",tags:[]};return`<div class="card" style="margin:0 0 6px"><div class="row">${q.id?av(q,36):""}<div class="sp"><b>${E(q.name)}</b><div class="mut">${E(q.course||"LPU student")} · ${ago(x.ts)}</div>${x.t?`<div>${E(x.t)}</div>`:""}</div><button class="btn o" onclick="VP='${x.a}';render()">Profile</button></div></div>`}).join("")||'<div class="mut">No applications yet.</div>'}</div>`}
function togHire(id){const p=S.posts.find(x=>x.id===id);p.h.open=p.h.open===false;save();render()}
function amod(){const p=S.posts.find(x=>x.id===AP.id);if(!p)return"";const a=person(p.a)||{name:"a student"};return`<div class="ov" style="z-index:30" onclick="if(event.target===this){AP=null;render()}"><div class="mod"><h3 style="margin-top:0">Apply: ${E(p.h.role)}</h3><div class="mut">Posted by ${E(a.name)}</div><label style="display:block;margin-top:10px">Why are you a good fit? (optional)</label><textarea maxlength="300" oninput="AP.t=this.value" placeholder="Share your experience, skills and availability..."></textarea><div class="row" style="justify-content:flex-end"><button class="btn g" onclick="AP=null;render()">Cancel</button><button class="btn" onclick="sendApp()">Submit application</button></div></div></div>`}
function sendApp(){const p=S.posts.find(x=>x.id===AP.id);(p.ap=p.ap||[]).push({a:"me",t:AP.t.trim(),ts:Date.now()});AP=null;save();render()}
function liveA(id){setTimeout(()=>{const p=S&&S.posts.find(x=>x.id===id);if(!p||!p.h)return;const q=S.P.filter(x=>x.st!=="o"),a=q[Math.random()*q.length|0],T=["Hi! I'd love to join. I have relevant experience.","Interested! I'm free most evenings.","This matches my skills well, happy to chat."];(p.ap=p.ap||[]).push({a:a.id,t:T[Math.random()*3|0],ts:Date.now()});save();soft()},9000)}
function disc(){
 return`<div class="card"><input placeholder="Search by name or registration ID (or course, game...)" value="${E(Q)}" oninput="Q=this.value;document.getElementById('dl').innerHTML=dres()">
 <span class="chip ${!FC?"on":""}" onclick="FC='';FS='';render()">All</span>${Object.keys(CATS).map(c=>`<span class="chip ${FC===c?"on":""}" onclick="FC='${c}';FS='';render()">${CATS[c].i} ${c}</span>`).join("")}
 ${FC?`<div style="margin-top:8px">${CATS[FC].s.map(x=>`<span class="chip ${FS===x?"on":""}" onclick="FS=FS==='${x}'?'':'${x}';render()">${E(x)}</span>`).join("")}</div>`:""}</div>
 <div class="grid" id="dl">${dres()}</div>`}
function net(){
 const g=s=>S.P.filter(p=>S.con[p.id]===s);
 return`<h3>Invitations</h3>${g("in").map(p=>`<div class="card row">${av(p)}<div class="sp"><b>${E(p.name)}</b><div class="mut">${E(p.course)}</div>${S.notes[p.id]?`<div style="margin-top:4px">“${E(S.notes[p.id])}”</div>`:""}</div><button class="btn" onclick="conn('${p.id}')">Accept</button><button class="btn g" onclick="delete S.con['${p.id}'];save();render()">Ignore</button>${dots(p.id,"in")}</div>`).join("")||'<p class="mut">No pending invitations.</p>'}
 <h3>Sent</h3>${g("out").map(p=>`<div class="card row">${av(p)}<b class="sp">${E(p.name)}</b><span class="mut">Pending</span>${dots(p.id,"out")}</div>`).join("")||'<p class="mut">None.</p>'}
 <h3>My connections (${g("ok").length})</h3><div class="grid">${g("ok").map(p=>card(p,"",1)).join("")}</div>`}
function chat(){
 const L=S.P.filter(p=>S.con[p.id]==="ok");if(!L.length)return'<div class="card mut">Connect with someone and have them accept. Their chat opens here.</div>';
 if(!CH||!L.find(p=>p.id===CH))CH=L[0].id;const p=person(CH),M=S.chats[CH]||[];
 return`<div class="chat ${CO?"open":""}"><div class="card cl">${L.map(x=>{const lm=(S.chats[x.id]||[]).slice(-1)[0];return`<div class="sel row ${x.id===CH?"on":""}" onclick="CH='${x.id}';CO=1;render()">${av(x)}<div class="sp"><b>${E(x.name)}</b><div class="mut" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${lm?E(lm.t):"Tap to chat"}</div></div></div>`}).join("")}</div>
 <div class="card conv"><div class="row ch"><button class="btn g back" onclick="CO=0;render()" aria-label="Back">←</button>${av(p)}<div><b>${E(p.name)}</b><div class="mut">${ST[p.st][0]}</div></div></div><hr style="border:0;border-top:1px solid var(--br)"><div class="msgs" id="ms">${M.map(m=>`<div class="m ${m.f}">${E(m.t)}</div>`).join("")||'<span class="mut">Say hi 👋</span>'}</div>
 <div class="row cin"><input id="mi" autocomplete="off" placeholder="Type a message..." style="margin:6px 0" onkeydown="if(event.key==='Enter')send()"><button class="btn" onclick="send()">Send</button></div></div></div>`}
function rch(F){const i=document.getElementById("mi"),v=i?i.value:"",f=!!i&&document.activeElement===i;render();const n=document.getElementById("mi");if(n){n.value=v;if(F||f)n.focus()}}
function send(){const t=mi.value.trim();if(!t)return;const id=CH;(S.chats[id]=S.chats[id]||[]).push({f:"me",t});save();mi.value="";rch(1);
 setTimeout(()=>{S.chats[id].push({f:"",t:"Sounds great! Let's catch up on campus."});save();if(V==="chat")rch();const m=document.getElementById("ms");if(m)m.scrollTop=1e9},1200);const m=document.getElementById("ms");m.scrollTop=1e9}
const SKL={Gaming:["When do you play?","Screenshots of your profile, rank or stats"],Academics:["Study / project timing","Marksheets, certificates and achievements"],Sports:["Practice timing","Match photos and certificates"]};
const LV=["Beginner","Intermediate","Advanced","Pro"];
const skl=t=>SKL[t.split("·")[0]]||["When do you practice?","Work samples, certificates or performances"];
function profile(){
 const m=S.me;m.sk=m.sk||{};
 return`<div class="card"><div class="row">${av(person("me"),72)}<div class="sp"><b>${E(m.name)}</b><div class="mut">Reg. ID ${E(m.reg)}</div><div class="row" style="flex-wrap:wrap;margin-top:6px"><label class="btn o" style="cursor:pointer;font-size:13px">✏️ Edit photo<input type="file" accept="image/*" hidden onchange="setDp(this)"></label>${m.dp?'<button class="btn g" style="font-size:13px" onclick="rmDp()">Remove</button>':""}<button class="btn g" style="font-size:13px" onclick="VP='me';render()">Preview</button></div></div></div></div>
 <div class="card"><b>Branch</b><br><label>Course / branch and year</label><input id="br" autocomplete="off" value="${E(m.course)}" oninput="S.me.course=this.value;save();brs()" onfocus="brs()" placeholder="Start typing, e.g. CSE, MBA, Law"><div id="brs"></div></div>
 <div class="card"><b>About me &amp; goals</b><br><label>Who are you and what are you looking for?</label><textarea oninput="S.me.bio=this.value;save()" placeholder="e.g. Looking for a hackathon team and a gaming squad">${E(m.bio)}</textarea></div>
 <div class="card"><b>Availability</b><p class="mut" style="margin:2px 0 8px">Students see this when they try to connect with you, so they know whether to reach out now or wait.</p>${Object.entries(ST).map(([k,v])=>`<span class="chip ${m.st===k?"on":""}" onclick="S.me.st='${k}';save();render()"><span style="color:${v[1]}">●</span> ${v[0]}</span>`).join("")}<label style="display:block;margin-top:8px">Free from (optional)</label><input value="${E(m.free||"")}" oninput="S.me.free=this.value;save()" placeholder="e.g. 5:30 PM today"></div>
 <h2 style="margin:20px 0 2px">Skills</h2><p class="mut" style="margin-top:0">Add each interest as a skill and back it up with proof. Students check this before they connect with you.</p>
 <div class="card"><label>Add a skill</label><div class="row"><select id="tc" onchange="subs()">${Object.keys(CATS).map(c=>`<option>${c}</option>`).join("")}</select><select id="ts"></select><button class="btn" onclick="addTag()">Add</button></div></div>
 ${m.tags.map(skEdit).join("")||'<p class="mut">No skills yet. Add one above.</p>'}
 <div class="row" style="justify-content:space-between"><button class="btn" onclick="V='feed';render()">Done</button><button class="btn g" onclick="S=null;try{localStorage.removeItem('lpuc')}catch(e){};render()">Sign out</button></div>`}
function skEdit(t,i){
 const k=(S.me.sk[t]=S.me.sk[t]||{lv:"Beginner",time:"",desc:"",marks:"",shots:[]}),c=t.split("·"),L=skl(t);
 return`<div class="card"><div class="row"><b class="sp">${CATS[c[0]].i} ${E(c[0])} › ${E(c[1])}</b><button class="btn g" onclick="rmTag(${i})">Remove</button></div>
 <label>Level</label><select onchange="skSet(${i},'lv',this.value)">${LV.map(v=>`<option${k.lv===v?" selected":""}>${v}</option>`).join("")}</select>
 ${c[0]==="Academics"?`<label>Marks / CGPA / rank</label><input value="${E(k.marks||"")}" oninput="skSet(${i},'marks',this.value)" placeholder="e.g. CGPA 8.4">`:""}
 <label>${L[0]}</label><input value="${E(k.time)}" oninput="skSet(${i},'time',this.value)" placeholder="e.g. 9 PM - 12 AM, weekdays">
 <label>Description</label><textarea oninput="skSet(${i},'desc',this.value)" placeholder="Your experience and what you can offer...">${E(k.desc)}</textarea>
 <label>${L[1]} (up to 4)</label><div class="row" style="flex-wrap:wrap;margin-bottom:8px">${k.shots.map((x,j)=>`<div style="position:relative"><img src="${x}" class="shot"><span class="x" onclick="rmShot(${i},${j})">✕</span></div>`).join("")}</div>
 ${k.shots.length<4?`<input type="file" accept="image/*" multiple onchange="addShot(${i},this)">`:""}</div>`}
function subs(){const a=document.getElementById("tc"),b=document.getElementById("ts");if(a&&b)b.innerHTML=CATS[a.value].s.map(s=>`<option>${E(s)}</option>`).join("")}
function addTag(){const t=tc.value+"·"+ts.value;if(!S.me.tags.includes(t)){S.me.tags.push(t);save()}render()}
function rmTag(i){const t=S.me.tags[i];S.me.tags.splice(i,1);delete S.me.sk[t];save();render()}
function skSet(i,f,v){S.me.sk[S.me.tags[i]][f]=v;save()}
function rmShot(i,j){S.me.sk[S.me.tags[i]].shots.splice(j,1);save();render()}
function addShot(i,el){
 const k=S.me.sk[S.me.tags[i]];
 [...el.files].slice(0,4-k.shots.length).forEach(f=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{
  const z=Math.min(1,800/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=im.width*z;c.height=im.height*z;
  c.getContext("2d").drawImage(im,0,0,c.width,c.height);
  if(k.shots.length<4){k.shots.push(c.toDataURL("image/jpeg",.7));save();render()}};im.src=r.result};r.readAsDataURL(f)})}
function pview(){
 const p=person(VP);if(!p)return"";const sk=p.sk||{},c=S.con[p.id];
 const act=p.id==="me"?"":c==="ok"?`<button class="btn" onclick="VP=null;CH='${p.id}';CO=1;V='chat';render()">Message</button>`:c==="out"?'<button class="btn g" disabled>Pending</button>':c==="in"?`<button class="btn" onclick="conn('${p.id}')">Accept</button>`:`<button class="btn" onclick="conn('${p.id}')">+ Connect</button>`;
 return`<div class="ov" onclick="if(event.target===this){VP=null;render()}"><div class="mod"><div class="row">${av(p)}<div class="sp"><b>${E(p.name)}</b><div class="mut">${p.reg?"Reg. ID "+E(p.reg)+" · ":""}${E(p.course||"LPU student")} · ${ST[p.st][0]}${p.free&&p.st!=="a"?", free from "+E(p.free):""}</div></div><button class="btn g" onclick="VP=null;render()">Close</button></div>
 <h3>About &amp; goals</h3><p style="margin:0">${E(p.bio||"No bio yet.")}</p><h3>Skills</h3>
 ${p.tags.map(t=>{const k=sk[t],c2=t.split("·");return`<div class="card"><b>${CATS[c2[0]].i} ${E(c2[0])} › ${E(c2[1])}</b>${k?`<div class="mut">${E(k.lv)}${k.marks?" · "+E(k.marks):""}${k.time?" · 🕒 "+E(k.time):""}</div>${k.desc?`<p>${E(k.desc)}</p>`:""}<div class="row" style="flex-wrap:wrap">${(k.shots||[]).map(x=>`<img src="${x}" class="shot" onclick="this.classList.toggle('big')">`).join("")}</div>`:'<div class="mut">No showcase added yet.</div>'}</div>`}).join("")||'<p class="mut">No skills listed yet.</p>'}
 <div style="margin-top:6px">${act}</div></div></div>`}
const _r=render;render=function(){_r();document.body.dataset.v=S?V:"login";if(V==="profile"){subs();brs()}const m=document.getElementById("ms");if(m)m.scrollTop=1e9;kbs()};
const kbs=()=>{const a=document.activeElement,t=a&&a.tagName,on=(t==="TEXTAREA"||(t==="INPUT"&&!/^(file|checkbox|radio|button)$/.test(a.type)))&&matchMedia("(max-width:700px)").matches;document.body.classList.toggle("kb",!!on);if(on)setTimeout(()=>{const m=document.getElementById("ms");if(m)m.scrollTop=1e9},350)};
addEventListener("focusin",kbs);addEventListener("focusout",()=>setTimeout(kbs,60));
const vv=window.visualViewport,vs=()=>{const s=document.documentElement.style;s.setProperty("--vvh",vv.height+"px");s.setProperty("--vvt",vv.offsetTop+"px");const m=document.getElementById("ms");if(m)m.scrollTop=1e9};
if(vv){vv.addEventListener("resize",vs);vv.addEventListener("scroll",vs);vs()}
render();
