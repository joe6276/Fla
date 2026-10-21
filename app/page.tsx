import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { InquiryForm } from "@/components/InquiryForm";
import { AfricaNet } from "@/components/AfricaNet";
import { COMPANIES, CONTACT, INSTITUTIONS, MOMENTS, NAV, PROGRAMS, SOCIALS, STATS, TEAM } from "@/lib/data";

function SectionHead({ tag, title, text }: { tag: string; title: React.ReactNode; text?: string }) {
  return (
    <Reveal className="head">
      <span className="tag">{tag}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        {/* HERO */}
        <section className="hero">
          <AfricaNet className="hero__net" />
          <div className="wrap hero__grid">
            <div className="hero__copy">
              <span className="script hero__script">Equip talent, shape tomorrow</span>
              <h1>
                Building <em>Africa&apos;s</em> AI &amp; Tech Talent
              </h1>
              <p className="lead">
                We turn passion into profession by training future innovators in customer care and software development. Learn the
                skills, build your future, change the game.
              </p>
              <div className="hero__actions">
                <a href="#enrollment" className="btn btn--lime">Hire Our Graduates</a>
                <a href="#programs" className="btn btn--ghost">View Programs</a>
              </div>
            </div>

            <div className="hero__visual">
              <div className="hero__photo">
                <Image src="/images/hero-trainer-bright.jpg" alt="A Future Labs trainer guiding a student at a computer" fill priority sizes="(max-width: 900px) 100vw, 560px" />
              </div>
              <div className="stat-block">
                <strong>
                  <CountUp to={5000} />
                </strong>
                <span>Graduates trained</span>
              </div>
            </div>
          </div>

          <div className="wrap">
            <div className="stats">
              {STATS.map((s) => (
                <div key={s.label}>
                  <strong>
                    <CountUp to={s.value} />
                  </strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MISSION / VISION */}
        <section className="section section--tight">
          <div className="wrap mv">
            <Reveal className="mv__card">
              <span className="tag">Our Mission</span>
              <p>
                To train and launch the next generation of skilled, future-ready African professionals through hands-on learning,
                industry-driven programs, and real-world experience.
              </p>
            </Reveal>
            <Reveal className="mv__card mv__card--lime" delay={120}>
              <span className="tag tag--dark">Our Vision</span>
              <p>
                To become Africa&apos;s leading technology education and innovation hub, driving global competitiveness, digital
                inclusion, and sustainable growth through empowered tech talent.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="section section--light" id="programs">
          <div className="wrap">
            <SectionHead tag="Our Programs" title={<>Cutting-edge curriculum for <em>modern tech</em></>} text="Industry-aligned programs designed to produce job-ready professionals in the most in-demand fields of technology." />
            <div className="programs">
              {PROGRAMS.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 90}>
                  <article className="program">
                    <span className="program__num">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{p.title}</h3>
                    <p>{p.blurb}</p>
                    <ul>
                      {p.topics.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COLLABORATIONS */}
        <section className="section section--alt" id="collaboration">
          <div className="wrap">
            <SectionHead tag="Collaborations & Partnerships" title={<>University &amp; institution <em>partnerships</em></>} text="We collaborate with leading educational institutions across Kenya to expand access to quality tech education and create pathways for student success." />
            <div className="institutions">
              {INSTITUTIONS.map((c, i) => (
                <Reveal key={c.name} delay={(i % 4) * 70}>
                  <div className="inst">
                    <h3>{c.name}</h3>
                    <span>{c.type}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <SectionHead tag="Our Journey Together" title="Partnership moments" text="Celebrating our collaborations through MOU signings, training sessions, and community impact." />
            <div className="moments">
              {MOMENTS.map((m, i) => (
                <Reveal key={m.src} delay={i * 80} className={i === 0 ? "moment--wide" : ""}>
                  <figure className="moment">
                    <Image src={m.src} alt={m.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
                    <figcaption>
                      <h4>{m.title}</h4>
                      <p>{m.text}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COMPANIES */}
        <section className="section section--light" id="companies">
          <div className="wrap">
            <SectionHead tag="Hiring Partners" title={<>Companies that <em>hired our graduates</em></>} text="Leading organizations across Africa and globally trust Future Labs Africa graduates to drive their technology initiatives." />
          </div>
          <div className="marquee" aria-label="Hiring partners">
            <div className="marquee__track">
              {[...COMPANIES, ...COMPANIES].map((c, i) => (
                <span key={i} aria-hidden={i >= COMPANIES.length}>{c}</span>
              ))}
            </div>
          </div>
          <p className="more">
            <strong>And 75+ more companies</strong> including Agnipank Energy, CreativeGeeks, Nathan Digital, Serianu, and many others across diverse industries.
          </p>
        </section>

        {/* TEAM */}
        <section className="section section--alt" id="team">
          <div className="wrap">
            <SectionHead tag="Our Leadership" title={<>Meet the <em>team</em></>} text="Experienced leaders committed to nurturing Africa's tech talent and driving digital transformation across the continent." />
            <div className="team">
              {TEAM.map((m, i) => (
                <Reveal key={m.name} delay={(i % 3) * 90}>
                  <article className="member">
                    <div className="member__photo">
                      <Image src={m.photo} alt={m.name} fill sizes="(max-width: 700px) 100vw, 360px" unoptimized={m.photo.endsWith(".svg")} style={"position" in m ? { objectPosition: m.position } : undefined} />
                    </div>
                    <div className="member__body">
                      <h3>{m.name}</h3>
                      <span className="member__role">{m.role}</span>
                      <p>{m.bio}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ENROLLMENT */}
        <section className="section enroll" id="enrollment">
          <AfricaNet className="enroll__net" />
          <div className="wrap enroll__grid">
            <Reveal className="enroll__copy">
              <span className="tag">Get Started</span>
              <h2>
                Partner with us or <em>enroll today</em>
              </h2>
              <p>Whether you&apos;re looking to hire exceptional talent or join our next training cohort, we&apos;re here to help. Fill out the form and we&apos;ll get in touch.</p>
            </Reveal>
            <Reveal delay={120}>
              <InquiryForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="wrap footer__grid">
          <div>
            <Image src="/images/logo.png" alt="Future Labs Africa" width={160} height={106} className="footer__logo" />
            <p>Equip Talent, Shape Tomorrow. We are shaping the next generation of African AI and tech talent through world-class training, innovation, and digital empowerment.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              {NAV.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li>{CONTACT.phone}</li>
              {CONTACT.locations.map((l) => (
                <li key={l}>{l}</li>
              ))}
              <li>{CONTACT.handle}</li>
            </ul>
          </div>
          <div>
            <h3>Follow</h3>
            <ul>
              {SOCIALS.map((s) => (
                <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="wrap footer__bottom">
          <p>&copy; {new Date().getFullYear()} Future Labs Africa. All rights reserved.</p>
          <p className="script">Nurturing minds for a brighter future</p>
        </div>
      </footer>
    </>
  );
}
