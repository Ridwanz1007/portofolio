import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Code2,
  Database,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  Monitor,
  Palette,
  Send,
  Server,
  Smartphone,
  X,
} from "lucide-react";
import "./index.css";

const projects = [
  {
    title: "Aplikasi Pendataan Zakat",
    type: "Web Application",
    description:
      "Aplikasi untuk membantu proses pendataan zakat, infak, dan sedekah dengan alur data yang lebih terstruktur.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    icon: Database,
  },
  {
    title: "Dashboard KPI BAZNAS",
    type: "Dashboard",
    description:
      "Dashboard monitoring data dan indikator kinerja untuk membantu penyajian informasi secara lebih ringkas dan mudah dipantau.",
    tech: ["Laravel", "Excel", "Dashboard"],
    icon: Layers3,
  },
  {
    title: "Aplikasi Jadwal Kegiatan",
    type: "Mobile App",
    description:
      "Aplikasi mobile untuk mengelola dan menampilkan jadwal kegiatan dengan antarmuka sederhana dan responsif.",
    tech: ["Flutter", "Dart"],
    icon: Smartphone,
  },
  {
    title: "Monitoring Asset",
    type: "Web Application",
    description:
      "Konsep aplikasi untuk membantu pencatatan dan monitoring aset secara terpusat.",
    tech: ["Laravel", "MySQL", "JavaScript"],
    icon: Server,
  },
];

const skills = [
  ["React.js", Code2],
  ["Laravel", Layers3],
  ["PHP & MySQL", Database],
  ["Flutter & Dart", Smartphone],
  ["Microsoft Excel", FileText],
  ["UI / Graphic Design", Palette],
  ["IT Support", Monitor],
  ["Networking", Server],
];

const experiences = [
  {
    year: "6 Bulan",
    role: "ICT / IT Support Intern",
    company: "PT Putra Perkasa Abadi — Site MIP",
    detail:
      "Mendukung pekerjaan ICT seperti instalasi CCTV, perbaikan komputer, pembuatan wallpaper, setup radio HT, Pemasangan perangkat dialat berat dan PM mobile tower.",
  },
  {
    year: "2 Bulan",
    role: "Admin & Web Development Intern",
    company: "BAZNAS Lahat",
    detail:
      "Terlibat dalam administrasi data serta pengembangan aplikasi pendataan zakat, infak, dan sedekah.",
  },
  {
    year: "2 Bulan",
    role: "Admin Bantuan Pangan",
    company: "Perum Bulog",
    detail:
      "Pengalaman administrasi terkait pengelolaan dokumen dan data dalam kegiatan bantuan pangan.",
  },
];

const certifications = [
  {
    name: "Ahli K3 Umum",
    issuer: "Miners Education",
    year: "2026",
    credentialUrl: "https://drive.google.com/file/d/1G5w8yaJiOARN5ArXsDgGw0MF9nezjkUG/view?usp=drive_link",
  },
  {
    name: "Hikvision Certified Security Associate - HNET",
    issuer: "Hikvision",
    year: " Sep 2026 - Sep 2028",
    credentialUrl: "https://elearning-assets.hikvision.com/image/ecfef6a0-c2f6-4043-ab21-9a4ec114cad8.pdf",
  },
  {
    name: "Hikvision Certified Security Associate - HIPC",
    issuer: "Hikvision",
    year: "sep 2026 - Sep 2028",
    credentialUrl: "https://elearning-assets.hikvision.com/image/da2283b5-8b0e-4a03-81df-e7bc4487408d.pdf",
  },
  {
    name: "Introduction to Critical Infrastructure Protection",
    issuer: "Opswat",
    year: "sep 2026 - Sep 2027",
    credentialUrl: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flearn.opswatacademy.com%2Fcertificate%2F7xsYi1WUeg&urlhash=0t8r&mt=nU_iDSRGgs4hFoy88afyPQiGzZcebb_5a_9cn_DIuTAcKFb12SuwA2E8Ci59LwKmqJQJQU5F9yASSxdzmHdi7pqJxO9v&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BKDVT%2BfimREalsf5uz6nGEQ%3D%3D",
  },
  {
    name: "+26 certificates on LinkedIn",
    credentialUrl: "https://www.linkedin.com/in/ridwan-nur-aziz/details/certifications/",
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      const ids = ["home", "about", "skills", "experience", "projects", "sertifikasi", "contact"];
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) setActive(current.charAt(0).toUpperCase() + current.slice(1));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const nav = ["Home", "About", "Skills", "Experience", "Projects", "Sertifikasi", "Contact"];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => go("home")} className="text-left">
            <span className="text-lg font-black tracking-tight text-slate-900">RIDWAN<span className="text-blue-600">.</span></span>
            <span className="ml-2 hidden text-xs font-medium text-slate-400 sm:inline">Portfolio</span>
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <button
                key={item}
                onClick={() => go(item.toLowerCase())}
                className={`text-sm font-semibold transition ${
                  active === item ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-slate-200 p-2 text-slate-700 md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-slate-100 bg-white px-5 py-3 md:hidden">
            {nav.map((item) => (
              <button
                key={item}
                onClick={() => go(item.toLowerCase())}
                className="block w-full py-3 text-left text-sm font-semibold text-slate-600"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="grid-bg relative overflow-hidden pt-32">
          <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-24 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-8 lg:pb-32">
            <div className="reveal">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Open to Work
              </div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[.25em] text-blue-600">
                IT • Web Development • Administration
              </p>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Ridwan Nur Aziz
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Lulusan SMK Rekayasa Perangkat Lunak yang tertarik pada pengembangan web,
                IT support, administrasi data, dan pembuatan solusi digital yang praktis.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  onClick={() => go("projects")}
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Lihat Project <ArrowRight size={17} />
                </button>
                <button
                  onClick={() => go("contact")}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
                >
                  Hubungi Saya <Mail size={17} />
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-slate-500">
                <span>📍 Lahat, Sumatera Selatan</span>
                <span>💻 Web & Mobile</span>
                <span>📊 Data & Admin</span>
              </div>
            </div>

            <div className="reveal lg:justify-self-end">
              <div className="glow relative mx-auto max-w-sm overflow-hidden rounded-[2rem] border border-white bg-white p-3">
                <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-blue-300">~/ridwan/portfolio</span>
                    <Code2 size={18} className="text-blue-300" />
                  </div>
                  <div className="mt-8 space-y-4 font-mono text-sm">
                    <p><span className="text-purple-300">const</span> developer = {"{"}</p>
                    <p className="pl-5">name: <span className="text-emerald-300">"Ridwan"</span>,</p>
                    <p className="pl-5">focus: <span className="text-emerald-300">"Network Technology & Web Development"</span>,</p>
                    <p className="pl-5">stack: [<span className="text-amber-300">"Full Stack"</span>, <span className="text-amber-300">"Laravel"</span>],</p>
                    <p className="pl-5">mindset: <span className="text-emerald-300">"Keep Learning"</span></p>
                    <p>{"}"}</p>
                  </div>
                  <div className="mt-9 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-400">Currently building</p>
                    <p className="mt-1 font-bold">Useful • Simple • Reliable Apps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.22em] text-blue-600">01 — About</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Tentang Saya</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-slate-600">
                Saya memiliki latar belakang Rekayasa Perangkat Lunak dan pengalaman praktik
                di bidang ICT/IT Support serta administrasi. Saya menikmati proses belajar,
                eksplorasi teknologi, dan mengubah kebutuhan menjadi aplikasi atau alur kerja
                yang lebih terstruktur.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["Education", "SMK RPL + Program 1 Tahun"],
                  ["Experience", "ICT / Admin / Projects"],
                  ["Focus", "IT, Web, Data & Digital"],
                ].map(([a, b]) => (
                  <div key={a} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{a}</p>
                    <p className="mt-2 font-bold text-slate-800">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[.22em] text-blue-300">02 — Skills</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Teknologi & Keahlian</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map(([name, Icon]) => (
                <div key={name} className="group rounded-2xl border border-white/10 bg-white/[.04] p-5 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[.07]">
                  <Icon className="text-blue-300" size={22} />
                  <p className="mt-5 font-bold">{name}</p>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-4/5 rounded-full bg-blue-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-blue-600">03 — Experience</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Pengalaman</h2>

          <div className="mt-10 space-y-4">
            {experiences.map((item) => (
              <article key={item.role + item.company} className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-[120px_1fr] md:p-8">
                <div className="text-sm font-black text-blue-600">{item.year}</div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-black text-slate-900">{item.role}</h3>
                    <BriefcaseBusiness size={17} className="text-slate-400" />
                  </div>
                  <p className="mt-1 font-semibold text-slate-500">{item.company}</p>
                  <p className="mt-4 max-w-3xl leading-7 text-slate-600">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[.22em] text-blue-600">04 — Projects</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Project Pilihan</h2>
              </div>
              <p className="max-w-md text-slate-500">Beberapa project yang menunjukkan minat saya pada web, mobile, dashboard, dan pengelolaan data.</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article key={project.title} className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5">
                    <div className="flex items-start justify-between">
                      <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                        <Icon size={23} />
                      </div>
                    </div>
                    <p className="mt-6 text-xs font-bold uppercase tracking-wider text-blue-600">{project.type}</p>
                    <h3 className="mt-2 text-2xl font-black text-slate-900">{project.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-600 ring-1 ring-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="sertifikasi" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-blue-600">05 — Sertifikasi</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Sertifikat & Pelatihan</h2>
          
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certificate) => (
              <article key={certificate.name} className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <GraduationCap size={24} />
                </div>
                <h3 className="mt-6 text-xl font-black text-slate-900">{certificate.name}</h3>
                <p className="mt-2 font-semibold text-slate-500">{certificate.issuer}</p>
                <p className="mt-4 text-sm font-bold text-blue-600">{certificate.year}</p>
                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-blue-600"
                  >
                    Lihat sertifikat <ExternalLink size={15} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[.22em] text-blue-300">06 — Contact</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Mari terhubung & berkolaborasi.</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
              Terbuka untuk peluang kerja, project website, aplikasi, administrasi digital,
              maupun kolaborasi pengembangan produk.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="mailto:ridwannuraziz01@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500">
                <Send size={17} /> Email Saya
              </a>
              <a href="https://www.linkedin.com/in/ridwan-nur-aziz/" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold transition hover:bg-white/10">
                <BriefcaseBusiness size={17} /> LinkedIn
              </a>
              <a href="https://www.instagram.com/ridwannuraziz_/" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold transition hover:bg-white/10">
                <Camera size={17} /> Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 px-5 pb-10 text-center text-sm text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 pt-8 md:flex-row">
          <p>© {new Date().getFullYear()} Ridwan Nur Aziz. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);