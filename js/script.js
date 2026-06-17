/* Personaliza los datos en estas estructuras */
const PROFILE = {
  name: "Tu Nombre",
  about: "Apasionado/a por construir soluciones en web y aprender nuevas tecnologías. Busco proyectos retadores y colaborativos.",
  email: "tu@email.com",
  github: "https://github.com/tu-usuario"
}

const PROJECTS = [
  { title:"Proyecto A", desc:"Breve descripción del proyecto A. Tecnologías: React, Node.", tags:["React","Node","API"], url:"#"},
  { title:"Proyecto B", desc:"Breve descripción del proyecto B. Foco en diseño y accesibilidad.", tags:["HTML","CSS","A11y"], url:"#"},
  { title:"Mini-tool", desc:"Herramienta pequeña que demuestra progreso y tests.", tags:["JS","Testing"], url:"#"}
]

const SKILLS = [
  { name:"JavaScript", level:80 },
  { name:"HTML/CSS", level:90 },
  { name:"React", level:70 },
  { name:"DevOps básico", level:45 }
]

const TIMELINE = [
  { date:"2024-06", text:"Inicié un curso avanzado de JS y publiqué 3 proyectos" },
  { date:"2025-02", text:"Proyecto B: enfoque en accesibilidad y rendimiento" },
  { date:"2026-01", text:"Colaboré en proyecto Open Source: optimización" }
]

/* Rellenar UI */
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector('header .intro h1').textContent = PROFILE.name
  document.getElementById('about-text').textContent = PROFILE.about
  document.getElementById('email').textContent = PROFILE.email
  document.getElementById('github-link').href = PROFILE.github
  document.getElementById('repo-link').textContent = PROFILE.github.replace(/^https?:\/\//,'')
  // Projects
  const grid = document.getElementById('projects-grid')
  grid.innerHTML = PROJECTS.map(p=>`
    <article class="project">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.join(' · ')}</div>
    </article>
  `).join('')
  // Skills
  const sgrid = document.getElementById('skills-grid')
  sgrid.innerHTML = SKILLS.map(s=>`
    <div class="skill">
      <h4>${s.name} <small style="float:right;color:#9fbcc7">${s.level}%</small></h4>
      <div class="progress"><i style="width:${s.level}%;"></i></div>
    </div>
  `).join('')
  // Timeline
  const tlist = document.getElementById('timeline-list')
  tlist.innerHTML = TIMELINE.map(t=>`<li><strong>${t.date}</strong> — ${t.text}</li>`).join('')

  // Recent activities demo
  const recent = document.getElementById('recent-list')
  recent.innerHTML = [
    "Push: modern-dashboard → main",
    "Nuevo proyecto: Proyecto B",
    "Curso completado: 'Avances en Frontend'"
  ].map(x=>`<li>${x}</li>`).join('')

  // Copy email
  document.getElementById('copy-email').addEventListener('click', async ()=>{
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      const btn = document.getElementById('copy-email')
      btn.textContent = 'Copiado!'
      setTimeout(()=>btn.textContent='Copiar',1500)
    } catch(e){ alert('No se pudo copiar: '+e) }
  })
})
