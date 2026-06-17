/* Datos profesionales personalizados — edítalos sólo si quieres cambiar algo */
const PROFILE = {
  fullName: "JUAN JOSE FERNANDO ZABALETA LEUCA",
  displayName: "Juan José Zabaleta",
  role: "Analista de Sistemas — Desarrollador Full Stack",
  about: `Soy una persona proactiva, organizada y responsable, con buenas relaciones interpersonales. Desarrollador Full Stack con experiencia en frontend (React) y backend (Laravel), especializado en crear soluciones tecnológicas IT eficientes. Destaco por mi rápida adaptación a nuevas tecnologías, capacidad de aprendizaje acelerado y habilidades de colaboración efectiva en equipo. Con conocimientos en ciberseguridad y hacking ético.`,
  email: "65118050zabaleta@gmail.com",
  phone: "+54 9 11 7374 1094",
  github: "https://github.com/zxbxletx",
  linkedin: "https://www.linkedin.com/in/zxbxletx",
  location: "Liniers, Ciudad Autónoma de Buenos Aires"
}

const PROJECTS = [
  {
    title: "Sistema de Agenda y Mantenimiento",
    desc: "Módulos desarrollados en React para gestión de agenda interna y mantenimiento de sistemas en BISPACE SRL. Corrección de bugs y mejoras de UX.",
    tags: ["React","Frontend","Mantenimiento"],
    url: "#"
  },
  {
    title: "Encendido por huella (Prototipo IoT)",
    desc: "Proyecto de investigación para encendido de vehículos mediante huella digital, integración IoT y prototipado de hardware/software.",
    tags: ["IoT","Arduino","C/C++"],
    url: "#"
  },
  {
    title: "Automatización & Soporte",
    desc: "Pipelines y scripts para soporte, despliegue y control de calidad en entornos de trabajo. Soporte y mantenimiento a equipos e impresoras.",
    tags: ["CI/CD","Docker","Soporte"],
    url: "#"
  }
]

const SKILLS = [
  { name: "React", level: 78 },
  { name: "Laravel / PHP", level: 72 },
  { name: "JavaScript", level: 80 },
  { name: "IoT / Arduino", level: 70 },
  { name: "C / C++", level: 62 },
  { name: "Python", level: 60 },
  { name: "Redes y Ciberseguridad", level: 58 },
  { name: "Ofimática", level: 85 }
]

const TIMELINE = [
  { date: "07/2021 - 01/2023", text: "Pasantía — Desarrollo de módulos para control de inventarios y soporte en GAMAEA (Gobierno Autónomo Municipal de El Alto)" },
  { date: "01/2023 - 04/2023", text: "Trabajador temporal — Soporte y mantenimiento en Homepac SRL; diseño de materiales para redes sociales" },
  { date: "05/2023 - 12/2023", text: "Auxiliar de investigación — Universidad Pública de El Alto: investigación IoT y prototipos biométricos" },
  { date: "01/2024 - 01/2025", text: "Desarrollador Junior — BISPACE SRL: programador frontend con React, mantenimiento y seguimiento de proyectos" },
  { date: "2024 - Actualidad", text: "Diplomado en Ciberseguridad y Hacking Ético — Universidad Pública de El Alto" }
]

/* Render UI */
function safeText(str){ return String(str || '').replace(/</g,'&lt;').replace(/>/g,'&gt;') }

document.addEventListener('DOMContentLoaded', ()=>{
  // Header & contact
  document.getElementById('display-name').textContent = PROFILE.fullName
  document.getElementById('about-text').textContent = PROFILE.about
  document.getElementById('email-link').textContent = PROFILE.email
  document.getElementById('email-link').href = 'mailto:' + PROFILE.email
  document.getElementById('github-link').href = PROFILE.github
  document.getElementById('linkedin-link').href = PROFILE.linkedin
  document.getElementById('resume-link').href = PROFILE.github + '/raw/main/CV.pdf'

  // Projects
  const grid = document.getElementById('projects-grid')
  grid.innerHTML = PROJECTS.map(p=>`
    <article class="project">
      <h3>${safeText(p.title)}</h3>
      <p>${safeText(p.desc)}</p>
      <div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join(' · ')}</div>
    </article>
  `).join('')

  // Skills
  const sgrid = document.getElementById('skills-grid')
  sgrid.innerHTML = SKILLS.map(s=>`
    <div class="skill">
      <h4>${safeText(s.name)} <small style="float:right;color:#9fbcc7">${s.level}%</small></h4>
      <div class="progress"><i style="width:${s.level}%;"></i></div>
    </div>
  `).join('')

  // Timeline
  const tlist = document.getElementById('timeline-list')
  tlist.innerHTML = TIMELINE.map(t=>`<li><strong>${safeText(t.date)}</strong> — ${safeText(t.text)}</li>`).join('')

  // Recent activities demo
  const recent = document.getElementById('recent-list')
  recent.innerHTML = [
    "Actualización: perfil y proyectos",
    "Participación en CTF (Agetic) — top 10",
    "Diplomado en Ciberseguridad — en curso"
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

  // Animate skill bars after paint
  requestAnimationFrame(()=>{
    document.querySelectorAll('.progress > i').forEach((el)=>{
      const w = el.style.width
      el.style.width = '0%'
      setTimeout(()=> el.style.width = w, 120)
    })
  })
})
