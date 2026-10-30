import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import hero from "@/assets/hero.jpg";
import cabin from "@/assets/cabin.jpg";
import catchImg from "@/assets/catch.jpg";
import boat from "@/assets/boat.jpg";
import aForest from "@/assets/about-forest.jpg";
import aFishing from "@/assets/about-fishing.jpg";
import aBoats from "@/assets/about-boats.jpg";
import aBanya from "@/assets/about-banya.jpg";

const features = [
  { t: "Тишина и лес", img: aForest },
  { t: "Рыбные места", img: aFishing },
  { t: "Лодки и снасти", img: aBoats },
  { t: "Русская баня", img: aBanya },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Домик рыбака у речки — аренда и рыбалка" },
      { name: "description", content: "Уютные домики на берегу реки, лодки, снасти и рыбалка с проводником. Бронируйте отдых у воды." },
      { property: "og:title", content: "Домик рыбака у речки" },
      { property: "og:description", content: "Уютные домики на берегу реки и отличная рыбалка." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const cabins = [
  { name: "Домик «Окунь»", guests: "до 2 гостей", price: "3 500 ₽", img: cabin },
  { name: "Домик «Щука»", guests: "до 4 гостей", price: "5 500 ₽", img: hero },
  { name: "Дом «Сом»", guests: "до 8 гостей, баня", price: "9 000 ₽", img: boat },
];
const fish = [
  { n: "Щука", s: "весна, осень" },
  { n: "Окунь", s: "круглый год" },
  { n: "Лещ", s: "лето" },
  { n: "Судак", s: "осень, зима" },
];
const reviews = [
  { t: "Тишина, туман над водой и щука на 6 кг. Вернёмся!", a: "Андрей, Екатеринбург" },
  { t: "Чистый домик, горячая баня, хозяин показал лучшие места.", a: "Марина и Олег" },
  { t: "Взяли лодку на весь день — лучший отдых за год.", a: "Сергей" },
  { t: "Целый день рыбачили и купались. Отличный отдых!", a: "Гость" },
];

function Section({ id, title, children, className = "" }: { id: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-5 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 font-display text-3xl md:text-5xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Index() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  const input = "w-full rounded-lg border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

  return (
    <main className="font-sans">
      <header className="relative flex min-h-[90vh] items-end overflow-hidden">
        <img src={hero} alt="Домик у реки на рассвете" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-5xl px-5 pb-16 text-deep-foreground">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">Отдых у воды</p>
          <h1 className="font-display text-5xl leading-tight md:text-7xl">Домик рыбака<br />у речки</h1>
          <p className="mt-4 max-w-md text-lg opacity-90">Рассветы над водой, лодка у причала и клёв, ради которого стоит проснуться в пять утра.</p>
          <a href="#booking" className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition hover:bg-accent hover:text-accent-foreground">Забронировать</a>
        </div>
      </header>

      <Section id="about" title="О месте">
        <p className="max-w-2xl text-lg text-muted-foreground">Три деревянных домика на тихом берегу, в часе езды от города. Ни шума трассы, ни соседей за забором — только лес, река и треск дров в печке.</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {features.map((f) => (
            <div key={f.t} className="overflow-hidden rounded-2xl bg-muted">
              <img src={f.img} alt={f.t} loading="lazy" width={768} height={768} className="aspect-square w-full object-cover" />
              <div className="p-4 font-medium">{f.t}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="cabins" title="Домики" className="bg-card">
        <div className="grid gap-6 md:grid-cols-3">
          {cabins.map((c) => (
            <article key={c.name} className="overflow-hidden rounded-2xl border border-border bg-background">
              <img src={c.img} alt={c.name} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-2xl">{c.name}</h3>
                <p className="text-muted-foreground">{c.guests}</p>
                <p className="mt-3 text-lg font-semibold text-primary">{c.price} <span className="text-sm font-normal text-muted-foreground">/ ночь</span></p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="fishing" title="Рыбалка" className="bg-deep text-deep-foreground">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img src={catchImg} alt="Улов щуки" loading="lazy" width={1024} height={768} className="rounded-2xl" />
          <div>
            <ul className="grid grid-cols-2 gap-3">
              {fish.map((f) => (
                <li key={f.n} className="rounded-xl border border-deep-foreground/20 p-4">
                  <div className="font-display text-xl text-accent">{f.n}</div>
                  <div className="text-sm opacity-80">{f.s}</div>
                </li>
              ))}
            </ul>
            <p className="mt-6 opacity-90">Прокат лодки — 1 500 ₽/день, снасти — 500 ₽, рыбалка с проводником — 3 000 ₽.</p>
          </div>
        </div>
      </Section>

      <Section id="gallery" title="Фотогалерея">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[hero, catchImg, cabin, boat].map((src, i) => (
            <img key={i} src={src} alt="Фото у реки" loading="lazy" width={1024} height={768} className="aspect-square w-full rounded-xl object-cover" />
          ))}
        </div>
      </Section>

      <Section id="reviews" title="Отзывы" className="bg-muted">
        <div className="grid gap-5 md:grid-cols-2">
          {reviews.map((r) => (
            <blockquote key={r.a} className="rounded-2xl bg-card p-6">
              <p className="font-display text-xl">«{r.t}»</p>
              <footer className="mt-4 text-sm text-muted-foreground">{r.a}</footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section id="booking" title="Бронирование">
        {sent ? (
          <div className="rounded-2xl bg-accent p-8 text-accent-foreground">
            <p className="font-display text-2xl">Спасибо! Мы перезвоним в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="grid max-w-xl gap-4">
            <input required placeholder="Ваше имя" className={input} />
            <input required type="tel" placeholder="Телефон" className={input} />
            <div className="grid grid-cols-2 gap-4">
              <label className="text-sm text-muted-foreground">Заезд<input required type="date" className={input} /></label>
              <label className="text-sm text-muted-foreground">Выезд<input required type="date" className={input} /></label>
            </div>
            <input type="number" min={1} max={8} placeholder="Число гостей" className={input} />
            <button className="rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition hover:bg-secondary">Отправить заявку</button>
          </form>
        )}
      </Section>

      <footer id="contacts" className="bg-deep px-5 py-14 text-deep-foreground">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <div><h3 className="font-display text-2xl">Контакты</h3><p className="mt-2 opacity-80">+7 (900) 000-00-00</p></div>
          <div><h3 className="font-display text-2xl">Адрес</h3><p className="mt-2 opacity-80">Деревня Заречье, берег реки</p></div>
          <div><h3 className="font-display text-2xl">Как добраться</h3><p className="mt-2 opacity-80">60 км от города, последние 3 км — грунтовка.</p></div>
        </div>
      </footer>
    </main>
  );
}
