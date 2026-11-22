/* Portfolio content shared by the 2D (index.html) and 3D (3d.html) versions.
   Edit text here and both versions update. */
window.PF=(()=>{
const GH='https://github.com/shivanshinigam';
const LI='https://www.linkedin.com/in/shivanshinigam';
const EMAIL='shivanshinigam59@gmail.com';
const chips=a=>'<div class="chips">'+a.map(x=>'<span>'+x+'</span>').join('')+'</div>';
const repo=n=>GH+'/'+n;

const SECTIONS={
about:{tab:'About',label:'ABOUT ME', title:'Nigam HQ', html:`
<p class="lead">AI &amp; Data Engineer specialising in <b>GenAI, RAG and agentic AI</b>. I build production AI systems, data pipelines, semantic retrieval and LLM guardrails across <b>AWS, Databricks and Snowflake</b>.</p>
<div class="role" style="margin:14px 0"><span class="tag now">NOW</span><h4>AI Engineer at RightAnswers</h4><p style="margin:0">Building GraphRAG over private Neo4j knowledge graphs: leaders ask questions in plain English and get answers backed by sources.</p></div>
<div class="statgrid">
  <div><b>3</b><span>AI engineering roles</span></div>
  <div><b>1,200+</b><span>learners on the platform I architected</span></div>
  <div><b>20K+</b><span>lines of production Java</span></div>
  <div><b>2</b><span>IEEE publications</span></div>
</div>
<p>Based in Noida, India. B.Tech in Computer Science at Bennett University (CGPA 8.51). Lead Engineer and <b>Best Employee</b> at iplairani.com.</p>
<div class="links">
  <a class="primary" href="mailto:${EMAIL}">✉ ${EMAIL}</a>
  <a href="${GH}" target="_blank" rel="noopener">GitHub ↗</a>
  <a href="${LI}" target="_blank" rel="noopener">LinkedIn ↗</a>
</div>
<p class="muted">Use the tabs above to browse everything, or walk the city: every glowing ring is a door.</p>`},

experience:{tab:'Experience',label:'EXPERIENCE · 3 ROLES', title:'Experience', html:`
<p class="lead">One thread through all three roles: taking LLM systems from prototype to production, reliably and within budget.</p>
<div class="tl">

<article class="role" id="role-ra">
<span class="tag now">NOW</span>
<h3>AI Engineer · RightAnswers</h3>
<div class="meta"><a href="https://rightanswers.org" target="_blank" rel="noopener">rightanswers.org</a> · Remote · Present</div>
<p class="lead" style="font-size:16px">RightAnswers turns an organisation's own data into a <b>knowledge graph</b>, so leaders can ask questions in plain English and get answers they can trust, backed by sources.</p>
<ul>
<li><b>Bring your own data:</b> upload CSVs, PDFs or even scanned documents. The platform works out how the data fits together and builds a private knowledge graph from it automatically.</li>
<li><b>Ask in plain English:</b> no SQL or dashboards. It finds the relevant facts by meaning and by keyword, and answers only from them.</li>
<li><b>Answers you can check:</b> every answer shows the exact records it came from. If the data doesn't have the answer, it says "Not found in the records" instead of guessing.</li>
<li><b>See the reasoning:</b> an interactive graph view lights up the facts behind each answer.</li>
<li><b>Measured accuracy:</b> suggested questions come with known correct answers, and the score is shown right on screen.</li>
<li><b>Private by design:</b> every organisation gets its own isolated graph, and demo data is deleted automatically after you leave.</li>
<li><b>Real use cases:</b> I produced demos for EdTech and e-commerce teams, and planned how the platform scales to many clients.</li>
</ul>
${chips(['GraphRAG','Knowledge Graphs','Neo4j','Graphiti','Hybrid search','LLM evaluation'])}
</article>

<article class="role" id="role-ip">
<span class="tag">NOV 2025 – SEPT 2026</span>
<h3>AI &amp; Data Engineer · iplairani.com</h3>
<div class="meta">Gamified coding platform · Remote (Gurgaon, India) · Lead Engineer &amp; Best Employee</div>
<ul>
<li><b>Trusted GenAI &amp; agentic architecture:</b> production RAG with knowledge-graph-backed retrieval, a vector DB with deduplication and hybrid reranking, policy infusion for guardrails, and a LangChain agentic pipeline with hallucination detection and dedup-aware memory.</li>
<li><b>NL-to-SQL on a Medallion architecture:</b> Bronze → Silver → Gold over Snowflake JDBC, with a three-tier fallback: Cortex Analyst → LLM-generated SQL → rule-based SQL.</li>
<li><b>Databricks &amp; Snowflake execution:</b> PySpark, PyTorch, LangChain, NumPy and Pandas templates on Databricks clusters and Snowflake SPCS / Snowpark / Cortex, with tag-based dispatch.</li>
<li><b>Full-stack backend:</b> a multi-service JAX-RS/Jersey platform on Elastic Beanstalk with IAM-scoped RDS, S3, SageMaker, Braket and CloudWatch, serving <b>1,200+ students</b> across 5 tracks. 20K+ lines of Java, 40+ endpoints.</li>
<li><b>Quantum CodeLab:</b> AWS Braket SDK v2 compiling OpenQASM 3 circuits (Bell, GHZ, Grover, Deutsch) to the SV1 simulator, results streamed to the browser.</li>
<li><b>Payments, analytics &amp; CRM:</b> Razorpay and PayPal v2 flows (HMAC-SHA256, OAuth2), and a learner-segmentation engine driving A/B-tested email with circuit-breaker and multi-account SMTP rotation.</li>
</ul>
${chips(['RAG','Vector DB','LangChain','Snowflake','Databricks','Cortex','AWS','Braket','SageMaker','Java'])}
</article>

<article class="role" id="role-tl">
<span class="tag">AUG 2025 – NOV 2025</span>
<h3>AI Intern · Tasklance AI</h3>
<div class="meta">Remote</div>
<ul>
<li>Contributed to agentic AI systems with <b>multi-agent orchestration</b> and scalable workflows using LangGraph and LangChain.</li>
<li>Supported LLM-powered solutions for task automation and decision support, including <b>policy infusion</b> and structured reasoning patterns.</li>
<li>Prompt engineering, API integrations and workflow optimisation for production inference pipelines.</li>
</ul>
${chips(['LangGraph','LangChain','Multi-agent','Policy infusion'])}
</article>

</div>`},

projects:{tab:'Projects',label:'SELECTED WORKS', title:'The Lab', html:`
<div class="projgrid">
<article class="proj"><span class="tag">AGENTS</span><h4>Verifying Code Review Agent</h4>
<p>An AI code reviewer that proves its findings. A LangGraph loop reproduces bugs in a Docker sandbox, confirms cross-file breaks via call-graph greps, and traces taint paths before flagging security issues. 3/3 seeded bugs caught at 100% precision, $0 cost on free-tier inference.</p>
${chips(['LangGraph','Docker','AST indexing','Hybrid retrieval'])}<a href="${repo('verifying-code-review-agent')}" target="_blank" rel="noopener">View repo ↗</a></article>

<article class="proj"><span class="tag">RAG</span><h4>Permission-Aware RAG Gateway</h4>
<p>A RAG gateway built around access control, with a full deep-dive write-up in the project showcase repo.</p>
${chips(['RAG','Guardrails','Python'])}<a href="${repo('permission-aware-rag-gateway')}" target="_blank" rel="noopener">View repo ↗</a> <a href="${repo('project-showcase')}" target="_blank" rel="noopener">Write-up ↗</a></article>

<article class="proj"><span class="tag">EVALS</span><h4>LLM Judge Calibration</h4>
<p>Can you trust an AI to grade other AIs? Measures LLM-as-a-judge agreement with 3,355 expert votes: Cohen's kappa, bootstrap CIs, position bias and a CI gate. Reproduces MT-Bench.</p>
${chips(['LLM-as-judge','Statistics','MT-Bench'])}<a href="${repo('llm-judge-calibration')}" target="_blank" rel="noopener">View repo ↗</a></article>

<article class="proj"><span class="tag">EVALS</span><h4>Agent Task Bench</h4>
<p>Realistic coding tasks with hidden tests, a tamper-resistant grader and a failure taxonomy for evaluating coding agents.</p>
${chips(['Coding agents','Benchmarks','Python'])}<a href="${repo('agent-task-bench')}" target="_blank" rel="noopener">View repo ↗</a></article>

<article class="proj"><span class="tag">GENAI + SQL</span><h4>NL-to-SQL Analytics Engine</h4>
<p>Production NL-to-SQL on a Medallion architecture. CSV uploads auto-generate typed transient Snowflake tables via dynamic DDL, an LLM-generated semantic YAML model is persisted to a metadata table, and a three-tier fallback (Cortex Analyst → LLM SQL → rule-based SQL) answers questions.</p>
${chips(['Snowflake','Cortex','Java','Knowledge Graph'])}<span class="muted">Built at iplairani.com</span></article>

<article class="proj"><span class="tag">KNOWLEDGE GRAPH</span><h4>Temporal KG Agent</h4>
<p>A temporal knowledge-graph agent using Graphiti (Zep), LangGraph and Gemini. Context, perception and decision for AI agents.</p>
${chips(['Graphiti','Neo4j','LangGraph','Gemini'])}<a href="${repo('graphiti-zep-agent')}" target="_blank" rel="noopener">View repo ↗</a></article>

<article class="proj"><span class="tag">AUTOMATION</span><h4>Email Automation &amp; CRM Re-engagement</h4>
<p>A behavioural scoring engine segments learners across Python, Spark and LLM tracks, then triggers A/B-tested HTML emails with atomic multi-account SMTP rotation, active-hours, dry-run and a circuit-breaker.</p>
${chips(['Java','AWS RDS','SMTP','A/B testing'])}<span class="muted">Built at iplairani.com</span></article>

<article class="proj"><span class="tag">VISION</span><h4>Secure Access Verification</h4>
<p>Face-recognition access control (InsightFace/ArcFace) with dual-layer liveness detection, a PIN second factor and a tamper-evident audit log, running fully locally. Adversarial testing found and closed a video-replay bypass plus two related gaps.</p>
${chips(['InsightFace','OpenCV','Liveness','Security'])}</article>

<article class="proj"><span class="tag">RAG</span><h4>RAG LangGraph Pipeline</h4>
<p>A step-by-step RAG pipeline: LangChain PDF ingestion, ChromaDB, and a LangGraph retrieve → filter → generate graph.</p>
${chips(['LangGraph','ChromaDB','LangChain'])}<a href="${repo('rag-langgraph-pipeline')}" target="_blank" rel="noopener">View repo ↗</a></article>
</div>`},

skills:{tab:'Skills',label:'SKILL TREE', title:'Skills', html:`
<h4>AI / ML &amp; GenAI</h4>${chips(['PyTorch','TensorFlow/Keras','Scikit-learn','Transformers','Hugging Face','LangChain','LangGraph','OpenCV','Knowledge Graph','GraphRAG','Neo4j','Graphiti','Vector DB','RAG','Policy Infusion','Guardrails','Agentic AI','Prompt Engineering'])}
<h4>Data &amp; Pipeline Architecture</h4>${chips(['Medallion (Bronze/Silver/Gold)','SQL Warehousing','Semantic search','Databricks','Snowflake (JDBC · SQL · SPCS)','Cloud container query'])}
<h4>Cloud &amp; Infra</h4>${chips(['AWS SageMaker','Elastic Beanstalk','EC2','IAM','Route 53','RDS','S3','Braket','CloudWatch Logs','GCP','Infrastructure as Code'])}
<h4>Backend, Frontend &amp; APIs</h4>${chips(['JAX-RS / Jersey','REST','FastAPI','Next.js','MySQL','SMTP','Multithreaded scheduling'])}
<h4>Languages</h4>${chips(['Python','Java','SQL','JavaScript / jQuery','HTML5','CSS3'])}
<h4>DevOps &amp; Tools</h4>${chips(['Docker','Jenkins','Git','GitHub Actions','CI/CD','Selenium','n8n','Maven'])}`},

publications:{tab:'Research',label:'RESEARCH', title:'The Library', html:`
<div class="pub"><span class="tag">IEEE ICDT 2025 · JUNE 2025</span><h4>Future of AI in Surgical Robotics</h4><p>Review paper on how AI is shaping surgical robotics.</p></div>
<div class="pub"><span class="tag">IEEE TEMS MET 2025 · NIT DELHI · OCT 2025</span><h4>Hate Speech Detection Using Classical ML and Transformer Models</h4><p>Research paper comparing classical ML baselines with transformer models for hate-speech detection.</p><a href="${repo('Hate-Speech-Detection')}" target="_blank" rel="noopener">Code ↗</a></div>`},

awards:{tab:'Awards',label:'ACHIEVEMENTS', title:'Hall of Fame', html:`
<div class="pub"><span class="tag">🏆 IPLAIRANI.COM</span><h4>Lead Engineer &amp; Best Employee</h4><p>Recognised as lead engineer and awarded Best Employee for independently architecting and shipping the full-stack AI platform (GenAI systems, cloud infrastructure and data pipelines) serving 1,200+ learners.</p></div>
<div class="pub"><span class="tag">📄 IEEE × 2</span><h4>Two published papers in 2025</h4><p>IEEE ICDT 2025 and IEEE TEMS MET 2025 (NIT Delhi). See the Research tab.</p></div>`},

education:{tab:'Education',label:'EDUCATION', title:'Bennett University', html:`
<h3>B.Tech in Computer Science</h3>
<div class="meta">Bennett University · Greater Noida, India · 2022 – 2026</div>
<div class="statgrid"><div><b>8.51</b><span>CGPA out of 10</span></div><div><b>2</b><span>IEEE papers during the degree</span></div></div>`},

github:{tab:'GitHub',label:'OPEN SOURCE · ARCHIVE', title:'Repo Garage', html:`
<p>A selection of public repos. The full list is on <a href="${GH}" target="_blank" rel="noopener">GitHub ↗</a>.</p>
<div class="repos">
${[['llm-judge-calibration','Python'],['agent-task-bench','Python'],['verifying-code-review-agent','Python'],['permission-aware-rag-gateway','Python'],['graphiti-zep-agent','Python'],['neo4j-graphiti-bot','Python'],['rag-langgraph-pipeline','Python'],['context-platform','Python'],['commerceos','Python'],['llm-eval-dashboard','Python'],['project-showcase','Docs'],['snowpark-agent-api','Python'],['SnowflakeAgentDocker','Python'],['Snowflake_Streamlit','Python'],['RAG_Zilliz','Python'],['Java-Sagemaker','Java'],['LinkedIn-Agent','Python'],['Digital-Employee','Python'],['pharmacovigilance','Python'],['ZKProof','Python'],['Hate-Speech-Detection','Notebook'],['Driver-Drowsiness','Python'],['Satellite-Image-NO2-Concentration-Mapping','HTML'],['aws-image-classifier','Python'],['pytorch-compilation-guide','Docs'],['PyTorch-Fundamentals','Python'],['Transaction-HeatMap','TypeScript'],['DNA_Sequence_Analysis','C++']].map(([n,l])=>`<a href="${repo(n)}" target="_blank" rel="noopener">${n}<i>${l}</i></a>`).join('')}
</div>`},

contact:{tab:'Contact',label:'GET IN TOUCH', title:'Contact', html:`
<p class="lead">Building something with LLMs, agents or data platforms? Let's talk.</p>
<div class="links">
  <a class="primary" href="mailto:${EMAIL}">✉ ${EMAIL}</a>
  <a href="${LI}" target="_blank" rel="noopener">LinkedIn ↗</a>
  <a href="${GH}" target="_blank" rel="noopener">GitHub ↗</a>
</div>
<p class="muted">Noida, India · open to remote</p>`}
};
const ORDER=['about','experience','projects','skills','publications','awards','education','github','contact'];
// Buildings that open a section scrolled to a specific item: building id → [section id, element id]
const ALIAS={rightanswers:['experience','role-ra'],tasklance:['experience','role-tl'],experience:['experience','role-ip']};
// Titles for buildings that don't have their own section
const NAMES={rightanswers:'RightAnswers',tasklance:'Tasklance Studio',experience:'iplairani Tower'};

// What visitors find in each building (shown on signs and approach cards)
const INSIDE={
 about:{icon:'👩‍💻',what:'About me',items:['Who I am and what I do','Current role at RightAnswers','Highlights and contact links']},
 rightanswers:{icon:'🧠',what:'Current role',items:['AI Engineer at RightAnswers','Ask your data in plain English','Answers backed by sources']},
 experience:{icon:'🏙️',what:'Experience',items:['All 3 roles on one timeline','Lead Engineer, Best Employee','RAG · Snowflake · Databricks · AWS']},
 tasklance:{icon:'🤖',what:'Internship',items:['AI Intern at Tasklance','Multi-agent systems','LangGraph and LangChain']},
 projects:{icon:'🧪',what:'Projects',items:['9 featured projects','Agents · RAG · Evals · Vision','Links to the code']},
 skills:{icon:'💪',what:'Skills',items:['My full tech stack','AI/ML · Data · Cloud','Backend · DevOps']},
 publications:{icon:'📚',what:'Research',items:['2 IEEE papers (2025)','AI in surgical robotics','Hate-speech detection']},
 awards:{icon:'🏆',what:'Achievements',items:['Best Employee award','Lead Engineer','2 IEEE publications']},
 education:{icon:'🎓',what:'Education',items:['B.Tech, Computer Science','Bennett University','CGPA 8.51 / 10']},
 github:{icon:'🐙',what:'GitHub',items:['28 public repos','Agents, RAG, data, vision','Open-source work']},
 contact:{icon:'📇',what:'Contact',items:['Email me','LinkedIn','GitHub']},
};
function renderCard(el,id,name,color,visited,touch){
  const i=INSIDE[id];if(!i){el.classList.add('hidden');return}
  const key=id+'|'+visited;
  if(el.dataset.key!==key){el.dataset.key=key;el.style.setProperty('--c',color);
    el.innerHTML='<div class="lc-k"><span>'+i.icon+'</span> '+i.what.toUpperCase()+(visited?' · ✓ VISITED':'')+'</div><div class="lc-t">'+name+'</div><ul>'+i.items.map(x=>'<li>'+x+'</li>').join('')+'</ul><div class="lc-h">'+(touch?'Walk into the glowing ring':'Walk into the glowing ring · press E')+'</div>'}
  el.classList.remove('hidden');
}
// ---------- Conversations (talk to locals, or "Ask me") ----------
const ME={who:'Shivanshi Nigam',icon:'👩‍💻',color:'#ff3d8b'};
const back={label:'Ask something else',next:'me'};
const NODES={
 me:{...ME,text:"Hi, I'm Shivanshi 👋 I build AI systems people can actually trust: RAG, knowledge graphs and agents, in production. What would you like to know?",choices:[
   {label:'What are you working on now?',next:'now'},{label:"What's your best project?",next:'best'},{label:'What did you do at iplairani?',next:'ipl'},
   {label:"What's your tech stack?",next:'stack'},{label:'Any research?',next:'research'},{label:'How can I reach you?',next:'reach'},{label:'Bye for now',close:true}]},
 now:{...ME,text:"I'm an AI Engineer at RightAnswers. We turn an organisation's own data into a knowledge graph, so leaders can ask questions in plain English. Every answer shows the records it came from, and if the data doesn't have the answer, it says so instead of guessing.",choices:[{label:'Show me the details',open:'rightanswers'},back]},
 best:{...ME,text:"My Verifying Code Review Agent. It doesn't just flag bugs, it proves them: it reproduces each one in a Docker sandbox and traces the data path before reporting. It caught 3 out of 3 seeded bugs with no false alarms.",choices:[{label:'See all my projects',open:'projects'},back]},
 ipl:{...ME,text:"I was the lead engineer there and won Best Employee. I built the platform's AI end to end: RAG with knowledge graphs, plain-English questions over Snowflake data, even a quantum computing lab, used by 1,200+ learners.",choices:[{label:'See my experience',open:'experience'},back]},
 stack:{...ME,text:"Mostly Python and Java. For AI: LangChain, LangGraph, RAG and knowledge graphs on Neo4j. For data: Snowflake and Databricks. For cloud: AWS.",choices:[{label:'See the full skill tree',open:'skills'},back]},
 research:{...ME,text:"Two IEEE papers in 2025: one on the future of AI in surgical robotics, and one comparing classical ML with transformers for hate-speech detection.",choices:[{label:'Open the library',open:'publications'},back]},
 reach:{...ME,text:"Email is best: "+EMAIL+". I'm on LinkedIn too. I'd love to hear what you're building!",choices:[{label:'✉ Write me an email',href:'mailto:'+EMAIL+'?subject='+encodeURIComponent('Hi Shivanshi, from your portfolio')},{label:'LinkedIn ↗',href:LI},back]},
};
const dialog=(()=>{
  let el=null,isOpen=false,ctx=null,timer=null;
  function ensure(){if(el)return;el=document.createElement('div');el.id='dlg';el.className='hidden';document.body.appendChild(el);
    addEventListener('keydown',e=>{if(!isOpen)return;const n=parseInt(e.key,10);
      if(n>=1&&n<=9){const b=el.querySelectorAll('.dlg-c > *')[n-1];if(b){e.preventDefault();e.stopImmediatePropagation();b.click()}}
      else if(e.key==='Escape'){e.stopImmediatePropagation();close()}
      else if(!['Shift','Alt','Meta','Control'].includes(e.key))e.stopImmediatePropagation();},true)}
  function type(t,target){clearInterval(timer);target.textContent='';let i=0;timer=setInterval(()=>{i+=2;target.textContent=t.slice(0,i);if(i>=t.length)clearInterval(timer)},16);target.onclick=()=>{clearInterval(timer);target.textContent=t}}
  function show(node){ensure();isOpen=true;el.classList.remove('hidden');el.style.setProperty('--c',node.color||'#ff3d8b');
    el.innerHTML='<div class="dlg-who"><span>'+(node.icon||'💬')+'</span>'+node.who+'<button class="dlg-x" aria-label="Close">✕</button></div><div class="dlg-t"></div><div class="dlg-c"></div>';
    el.querySelector('.dlg-x').onclick=close;type(node.text,el.querySelector('.dlg-t'));
    const cc=el.querySelector('.dlg-c');
    node.choices.forEach((ch,i)=>{const b=document.createElement(ch.href?'a':'button');if(ch.href){b.href=ch.href;b.target='_blank';b.rel='noopener'}
      b.innerHTML='<kbd>'+(i+1)+'</kbd><span>'+ch.label+'</span>';
      b.onclick=()=>{if(ch.next)show(typeof ch.next==='function'?ch.next():NODES[ch.next]);else if(ch.open){const o=ch.open;close();ctx&&ctx.open(o)}else if(!ch.href)close()};
      cc.appendChild(b)});
  }
  function close(){clearInterval(timer);if(!isOpen)return;isOpen=false;el&&el.classList.add('hidden');ctx&&ctx.onClose&&ctx.onClose()}
  return {show,close,isOpen:()=>isOpen,setCtx:c=>{ctx=c}};
})();
const LOCALS=['Maya','Arjun','Leo','Priya','Sam','Zoe','Kabir','Ana','Noah','Isha','Omar','Lena','Ravi','Mia'];
const GREET=["Hey there!","Oh, hi!","Nice evening, right?","Hey! You look a little lost.","Welcome to Sunset City!","Hi! Love the jacket."];
const rp=a=>a[Math.floor(Math.random()*a.length)];
function talkNpc(o){
  dialog.setCtx(o.ctx);const who='Local · '+rp(LOCALS),L={who,icon:'🙂',color:'#21e6c1'},pl=o.place;
  const dir=()=>{const dx=pl.door[0]-o.x,dy=pl.door[1]-o.y,d=Math.hypot(dx,dy),names=['east','north-east','north','north-west','west','south-west','south','south-east'];
    const i=((Math.round(Math.atan2(-dy,dx)/(Math.PI/4))%8)+8)%8;return (d<350?"It's just around the corner":d<900?"It's a couple of blocks away":"It's across town")+', to the '+names[i]+'.'};
  const root={...L,text:rp(GREET)+' Need anything?',choices:[
    {label:'Where should I go next?',next:()=>({...L,text:'Try '+pl.name+(INSIDE[pl.id]?' ('+INSIDE[pl.id].what.toLowerCase()+'): '+INSIDE[pl.id].items[0].toLowerCase():'')+'. '+dir()+' Look for the glowing ring.',choices:[{label:'Thanks!',close:true},{label:'Something else…',next:()=>root}]})},
    {label:'What is this place?',next:()=>({...L,text:"This whole city is Shivanshi Nigam's portfolio. Every building with a glowing ring is a door into part of her work: experience, projects, research and more.",choices:[{label:'Can I talk to her?',next:'me'},{label:'Cool, thanks!',close:true}]})},
    {label:'Can I talk to Shivanshi?',next:()=>({...L,text:"Sure! She's always happy to chat. Here, I'll put her on the phone…",choices:[{label:'📱 Take the call',next:'me'}]})},
    {label:'Bye!',close:true}]};
  dialog.show(root);
}
function talkTo(key,c){dialog.setCtx(c);dialog.show(NODES[key])}
// Shared styles for the panel tabs and experience timeline (injected so both versions get them)
const css=`.tabs{display:flex;gap:6px;overflow-x:auto;padding:10px 16px;background:rgba(0,0,0,.28);border-bottom:1px solid rgba(255,255,255,.08);scrollbar-width:none;flex:none}
.tabs::-webkit-scrollbar{display:none}
.tabs button{flex:none;font-family:"JetBrains Mono",monospace;font-size:11.5px;font-weight:700;padding:7px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.18);background:none;color:#f3e9ff;cursor:pointer}
.tabs button:hover{border-color:#fff}.tabs button.on{background:#fff;color:#1a1030;border-color:#fff}
.tl{position:relative;margin-left:8px;padding-left:22px;border-left:2px solid rgba(255,255,255,.15)}
.role{position:relative;margin-bottom:20px;padding:16px 18px;border-radius:12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);scroll-margin-top:12px;transition:border-color .3s,box-shadow .3s}
.tl .role:before{content:"";position:absolute;left:-31px;top:22px;width:14px;height:14px;border-radius:50%;background:#ff3d8b;box-shadow:0 0 0 4px #1a1033}
.tl .role#role-ra:before{background:#21e6c1;box-shadow:0 0 0 4px #1a1033,0 0 14px #21e6c1}
.role.focus{border-color:#ffd166;box-shadow:0 0 0 1px #ffd166,0 0 24px rgba(255,209,102,.25)}
.role h3{margin-top:2px!important}.tag.now{background:#21e6c1!important}
#locCard{position:absolute;right:16px;top:50%;transform:translateY(-50%);width:270px;padding:14px 16px;border-radius:14px;background:rgba(15,8,32,.88);border:1px solid rgba(255,255,255,.14);border-left:4px solid var(--c);box-shadow:0 10px 30px rgba(0,0,0,.4);pointer-events:none;animation:lcin .3s ease}
@keyframes lcin{from{opacity:0;margin-right:-16px}}
#locCard .lc-k{font:700 11px "JetBrains Mono",monospace;letter-spacing:.16em;color:var(--c)}
#locCard .lc-t{font-family:Anton,sans-serif;font-size:28px;line-height:1.1;color:#fff;margin:4px 0 8px}
#locCard ul{margin:0 0 10px 18px;font-size:13.5px;color:#eadcff;line-height:1.55}
#locCard .lc-h{font:700 11px "JetBrains Mono",monospace;color:#ffd166}

#dlg{position:fixed;left:50%;bottom:22px;transform:translateX(-50%);width:min(740px,calc(100% - 24px));z-index:45;background:rgba(15,8,32,.95);border:1px solid rgba(255,255,255,.15);border-top:4px solid var(--c);border-radius:14px;padding:14px 18px 16px;box-shadow:0 20px 50px rgba(0,0,0,.5);font-family:Inter,sans-serif;color:#fff;animation:dlgin .25s ease}
@keyframes dlgin{from{opacity:0;bottom:6px}}
#dlg .dlg-who{font:700 12px "JetBrains Mono",monospace;letter-spacing:.14em;color:var(--c);text-transform:uppercase;display:flex;gap:8px;align-items:center}
#dlg .dlg-who span{font-size:18px}
#dlg .dlg-x{margin-left:auto;background:none;border:0;color:#fff;font-size:16px;cursor:pointer;opacity:.7}
#dlg .dlg-t{font-size:16.5px;line-height:1.55;margin:8px 0 12px;min-height:52px;cursor:pointer}
#dlg .dlg-c{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px}
#dlg .dlg-c > *{display:flex;gap:10px;align-items:center;text-align:left;padding:9px 12px;border-radius:10px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.05);color:#fff;font:600 13.5px Inter,sans-serif;cursor:pointer;text-decoration:none}
#dlg .dlg-c > *:hover{border-color:var(--c);background:rgba(255,255,255,.1)}
#dlg kbd{font:700 11px "JetBrains Mono",monospace;background:#fff;color:#111;border-radius:4px;padding:1px 6px}
@media(max-width:700px){#dlg .dlg-t{font-size:14.5px}#dlg kbd{display:none}}
@media(max-width:700px){#locCard{top:auto;bottom:205px;right:auto;left:12px;transform:none;width:210px;padding:10px 12px}#locCard ul{font-size:12px;margin-bottom:6px}#locCard .lc-t{font-size:20px}}`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

function show(sid,anchor,colorOf){
  const s=SECTIONS[sid],g=id=>document.getElementById(id);
  g('panelCard').style.setProperty('--c',colorOf(sid));
  g('pLabel').textContent=s.label;g('pTitle').textContent=s.title;g('pBody').innerHTML=s.html;g('pBody').scrollTop=0;
  g('pTabs').innerHTML=ORDER.map(id=>'<button data-s="'+id+'" class="'+(id===sid?'on':'')+'">'+SECTIONS[id].tab+'</button>').join('');
  g('pTabs').querySelectorAll('button').forEach(b=>b.onclick=()=>show(b.dataset.s,null,colorOf));
  if(anchor){const el=g(anchor);if(el){el.classList.add('focus');requestAnimationFrame(()=>{g('pBody').scrollTop=el.offsetTop-g('pBody').offsetTop-8})}}
}
function open(id,colorOf){const a=ALIAS[id]||[id];show(a[0],a[1],colorOf)}
return {SECTIONS,ORDER,ALIAS,NAMES,INSIDE,EMAIL,GH,LI,open,renderCard,dialog,talkNpc,talkTo};
})();
