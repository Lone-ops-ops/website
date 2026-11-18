// Share the latest design across desktop and mobile.
(async()=>{
for(const src of ['capabilities.js','qifei-articles.js','qifei.js','qifei-orbit.js','app.js']){await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=src+'?v=20261117-balanced-spacing';script.onload=resolve;script.onerror=reject;document.head.append(script);});}
initQifeiOrbits();
})();
