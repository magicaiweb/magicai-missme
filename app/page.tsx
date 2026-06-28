export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f4ef] px-5 py-16 text-[#171412]">
      <section className="w-full max-w-5xl">
        <nav className="mb-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#171412] text-sm font-black text-[#f7f4ef]">
              M
            </span>
            <span className="text-xl font-black tracking-tight">MissMe</span>
          </div>
          <span className="rounded-full border border-[#d7cec2] px-4 py-2 text-sm font-bold text-[#76695f]">
            Build workspace
          </span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#9b5f3a]">
              MagicAI preview
            </p>
            <h1 className="max-w-3xl text-6xl font-black leading-[0.92] tracking-tight sm:text-8xl">
              MissMe project is live.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f554d]">
              Next.js and Tailwind scaffold is ready for the approved design brief,
              content direction, and product requirements.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d7cec2] bg-white p-5 shadow-[0_24px_80px_rgba(23,20,18,0.08)]">
            <div className="rounded-[1.5rem] bg-[#171412] p-6 text-[#f7f4ef]">
              <p className="text-sm font-bold uppercase text-[#d8a15f]">Status</p>
              <p className="mt-4 text-4xl font-black">Preview-ready scaffold</p>
              <div className="mt-8 grid gap-3">
                {["Next.js App Router", "Tailwind CSS", "Static export", "SFTP preview"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold">
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
