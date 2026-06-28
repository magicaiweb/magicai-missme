"use client";

import { useMemo, useState } from "react";

type Locale = "ar" | "en";

const copy = {
  ar: {
    dir: "rtl",
    nav: ["المنصة", "الميزات", "المستثمرون"],
    switchLabel: "English",
    eyebrow: "منصة ذكاء اصطناعي للمفقودات في الشرق الأوسط",
    title: "ارجع أشياء الناس قبل ما تضيع للأبد.",
    body: "MissMe تربط من فقد شيئاً بمن وجده عبر مطابقة ذكية للصور والوصف، خرائط قريبة، محادثة مشفرة، ومكافآت موثوقة للسوق العربي.",
    cta: "استعراض تجربة المنتج",
    secondary: "تجربة المنتج",
    phoneTitle: "مطابقة محتملة",
    phoneItem: "حقيبة جلدية سوداء",
    phonePlace: "الرياض بارك، البوابة ٣",
    confidence: "نسبة التطابق ٩٢٪",
    marketTitle: "مصممة للعربية أولاً",
    marketBody: "تجربة RTL كاملة، لمس مريح على الجوال، أرقام عربية هندية في الواجهات، وأرقام لاتينية عند عرض نسب التطابق والبيانات التقنية.",
    featuresTitle: "منصة ثنائية الاتجاه للمفقودات والموجودات.",
    features: [
      ["٠١", "مطابقة ذكية", "تحليل الصور والوصف لتجميع البلاغات المتشابهة بدون كشف بيانات حساسة."],
      ["٠٢", "خرائط ذكية", "نطاقات جغرافية للمكان والوقت تساعد على تضييق احتمالات العثور."],
      ["٠٣", "إشعارات فورية", "تنبيهات عند ظهور تطابق أو تغيير حالة البلاغ."],
      ["٠٤", "محادثة مشفرة", "تواصل بين المالك والواجد بدون مشاركة رقم الجوال."],
      ["٠٥", "نظام مكافآت", "مكافأة اختيارية وآلية تسليم واضحة تزيد الحافز والثقة."],
      ["٠٦", "تحقق هوية", "طبقة تحقق تقلل الاحتيال وتناسب الأسواق الحساسة."],
    ],
    trustTitle: "أمان وثقة قبل التسليم.",
    trust: [
      ["تحقق الهوية", "ملفات موثقة تقلل الاحتيال وتساعد قبل تسليم الأشياء أو المكافآت."],
      ["محادثة خاصة", "تنسيق التسليم داخل المنصة بدون كشف رقم الجوال أو البريد."],
      ["إبلاغ وحظر", "أدوات سلامة أساسية للتعامل مع البلاغات المشبوهة أو السلوك غير المناسب."],
    ],
    flowTitle: "رحلتان، محرك واحد",
    flowItems: ["بلاغ مفقود: صور، وصف، مكان ووقت الفقدان", "بلاغ معثور: صور، وصف، مكان ووقت العثور", "مطابقة تلقائية وترتيب حسب الثقة", "تأكيد ثم محادثة وتسليم آمن"],
  },
  en: {
    dir: "ltr",
    nav: ["Platform", "Features", "Investors"],
    switchLabel: "العربية",
    eyebrow: "AI lost & found for Arabic-speaking MENA",
    title: "Return what matters before it disappears.",
    body: "MissMe connects owners and finders through AI image and description matching, smart geo-context, encrypted chat, trusted rewards, and identity verification.",
    cta: "Explore product flow",
    secondary: "Product walkthrough",
    phoneTitle: "Likely match",
    phoneItem: "Black leather bag",
    phonePlace: "Riyadh Park, Gate 3",
    confidence: "92% match confidence",
    marketTitle: "Arabic-first by design",
    marketBody: "Full RTL/LTR experience, mobile touch targets, Arabic-Indic interface labels, and Latin numerals for confidence scores and technical data.",
    featuresTitle: "A two-sided network for lost and found items.",
    features: [
      ["01", "AI matching", "Image and description analysis clusters related reports without exposing sensitive details."],
      ["02", "Smart geo-maps", "Place and time radius tools narrow down where an item may have moved."],
      ["03", "Real-time alerts", "Notifications trigger when matches or claim states change."],
      ["04", "Encrypted chat", "Owners and finders coordinate without sharing phone numbers."],
      ["05", "Rewards system", "Optional rewards and clear handoff steps increase trust and motivation."],
      ["06", "Identity verification", "Verification layer reduces fraud for sensitive, high-value claims."],
    ],
    trustTitle: "Trust before the handover.",
    trust: [
      ["Identity verification", "Verified profiles reduce fraud before sensitive returns or reward claims."],
      ["Private chat", "Owners and finders coordinate inside MissMe without exposing phone or email."],
      ["Report and block", "Basic safety controls handle suspicious reports and inappropriate behavior."],
    ],
    flowTitle: "Two journeys, one matching engine",
    flowItems: ["Lost report: photos, description, loss place and time", "Found report: photos, description, found place and time", "Automatic ranking by confidence", "Confirm, chat, and complete a safe handover"],
  },
} as const;

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m16.5 16.5 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path d="M12 3 5 6v5c0 4.4 2.8 8.4 7 10 4.2-1.6 7-5.6 7-10V6l-7-3Z" stroke="currentColor" strokeWidth="2" />
      <path d="m9 12 2 2 4-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ar");
  const t = copy[locale];
  const isArabic = locale === "ar";
  const featureRows = useMemo(() => t.features, [t.features]);
  const navTargets = ["#platform", "#platform", "#investors"];

  return (
    <main dir={t.dir} className={`min-h-screen bg-[#081426] text-[#f8fafc] ${isArabic ? "font-arabic" : "font-sans"}`}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_5%,rgba(238,120,36,0.32),transparent_34%),linear-gradient(150deg,#081426_0%,#10233f_48%,#06101f_100%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
          <nav className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f27a22] text-lg font-black text-[#081426]">
                M
              </span>
              <div>
                <p className="text-xl font-black tracking-tight">MissMe</p>
                <p className="text-xs font-bold text-[#92a7c4]">AI Lost & Found</p>
              </div>
            </div>
            <div className="hidden gap-5 text-sm font-bold text-[#c7d4e8] sm:flex">
              {t.nav.map((item, index) => (
                <a key={item} href={navTargets[index]} className="hover:text-white">
                  {item}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setLocale(isArabic ? "en" : "ar")}
              className="min-h-11 rounded-full border border-white/20 px-4 text-sm font-black text-white"
            >
              {t.switchLabel}
            </button>
          </nav>

          <div className="grid flex-1 gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-10">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.16em] text-[#f27a22]">{t.eyebrow}</p>
              <h1 className={`max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl ${isArabic ? "font-display leading-[1.05]" : ""}`}>
                {t.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d8e2f1] sm:text-xl">{t.body}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#platform" className="rounded-full bg-[#f27a22] px-6 py-3 text-center text-sm font-black text-[#081426]">
                  {t.cta}
                </a>
                <a href="#platform" className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-black text-white">
                  {t.secondary}
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[390px] rounded-[2.4rem] border border-white/15 bg-[#0d1f39] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
              <div className="rounded-[1.9rem] bg-[#f8fafc] p-4 text-[#081426]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-black">{t.phoneTitle}</span>
                  <span className="rounded-full bg-[#f27a22] px-3 py-1 text-xs font-black text-[#081426]">AI</span>
                </div>
                <div className="rounded-3xl bg-[#081426] p-5 text-white">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f27a22] text-[#081426]">
                      <SearchIcon />
                    </span>
                    <div>
                      <p className="font-black">{t.phoneItem}</p>
                      <p className="text-sm text-[#9db2cf]">{t.phonePlace}</p>
                    </div>
                  </div>
                  <div className="mt-6 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[92%] rounded-full bg-[#f27a22]" />
                  </div>
                  <p className="mt-3 text-sm font-bold text-[#ffd7bd]">{t.confidence}</p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {["Chat", "Reward", "Verify", "Notify"].map((item) => (
                    <div key={item} className="rounded-2xl border border-[#e2e8f0] p-3 text-center text-xs font-black">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="bg-[#f8fafc] px-5 py-16 text-[#081426] sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#d95f12]">{t.marketTitle}</p>
            <h2 className={`mt-4 text-4xl font-black leading-tight sm:text-6xl ${isArabic ? "font-display" : ""}`}>{t.featuresTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-[#4b5b72]">{t.marketBody}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureRows.map(([number, title, detail]) => (
              <article key={title} className="rounded-[1.35rem] border border-[#d9e1ec] bg-white p-5">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="text-xl font-black text-[#f27a22]">{number}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#eef3f9] text-[#0d2b52]">
                    <ShieldIcon />
                  </span>
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-[#53657c]">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="safety" className="bg-[#081426] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#f27a22]">{t.trustTitle}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {t.trust.map(([title, label]) => (
                  <div key={title} className="rounded-[1.35rem] border border-white/15 bg-white/5 p-5">
                    <p className="text-2xl font-black text-white">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-[#a9bad1]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.6rem] bg-[#f27a22] p-6 text-[#081426]">
              <h2 className={`text-3xl font-black ${isArabic ? "font-display" : ""}`}>{t.flowTitle}</h2>
              <div className="mt-6 grid gap-3">
                {t.flowItems.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/35 px-4 py-3 font-black">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
