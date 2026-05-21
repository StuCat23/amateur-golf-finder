export default function GolfTournamentHomePage() {
  const featuredTournaments = [
    {
      title: 'Carolina Amateur Classic',
      course: 'Pine Ridge Golf Club',
      date: 'June 14-15',
      format: 'Stroke Play',
      fee: '$185',
    },
    {
      title: 'Summer Two-Man Scramble',
      course: 'River Bend Country Club',
      date: 'July 2',
      format: '2-Man Scramble',
      fee: '$120',
    },
    {
      title: 'Lowcountry Match Play',
      course: 'Palmetto Dunes',
      date: 'August 8-10',
      format: 'Match Play',
      fee: '$240',
    },
  ];

  return (
    <main className='min-h-screen bg-[#F7F7F5] text-slate-900'>
{/* Navigation */}
<header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-[#163020]">
              Fairway Finder
            </h1>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#" className="transition hover:text-[#163020]">
              Tournaments
            </a>
            <a href="#" className="transition hover:text-[#163020]">
              Tours
            </a>
            <a href="#" className="transition hover:text-[#163020]">
              Courses
            </a>
            <a href="#" className="transition hover:text-[#163020]">
              Rankings
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-200 px-5 py-2 text-sm font-medium transition hover:bg-slate-100 md:block">
              Sign In
            </button>

            <button className="rounded-full bg-[#163020] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90">
              Get Started
            </button>
          </div>
        </div>
      </header>
    </main>
  );
}