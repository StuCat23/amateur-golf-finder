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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              Discover amateur tournaments across the country
            </div>

            <h2 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
              Find Your Next
              <span className="block text-[#C8A96B]">Golf Tournament</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Explore local scrambles, member-guest events, amateur tours,
              and competitive tournaments built for golfers who love to compete.
            </p>

            {/* Search Bar */}
            <div className="mt-10 rounded-3xl bg-white p-4 shadow-2xl">
              <div className="grid gap-4 md:grid-cols-5">
                <input
                  type="text"
                  placeholder="Location"
                  className="rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#163020]"
                />

                <select className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-[#163020]">
                  <option>Format</option>
                  <option>Stroke Play</option>
                  <option>Scramble</option>
                  <option>Match Play</option>
                </select>

                <select className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-[#163020]">
                  <option>Handicap</option>
                  <option>0-5</option>
                  <option>6-10</option>
                  <option>11-15</option>
                  <option>16+</option>
                </select>

                <input
                  type="date"
                  className="rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#163020]"
                />

                <button className="rounded-2xl bg-[#163020] px-6 py-4 font-semibold text-white transition hover:opacity-90">
                  Search Tournaments
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='border-b border-slate-200 bg-white py-10'>
        <div className='mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4'>
          {[
            ['1,200+', 'Tournaments Listed'],
            ['350+', 'Golf Courses'],
            ['42', 'States Covered'],
            ['15k+', 'Golfers Using Platform'],
          ].map (([value, label]) => (
            <div key={label}>
              <div className='text-4xl font-black text-[163020]'>{value}</div>
              <div className='mt-2 text-sm text-slate-600'>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='mx-auto max-w-7xl px-6 py-24'>
        <div className='rounded-[3rem] bg-gradient-to-br from-[163020] to-[#244B33] px-10 py-20 text-center text-white shadow-2xl'>
          <h3 className='text-5xl font-black tracking-tight'>
            Ready To Find Your Next Event?
          </h3>

          <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200'>
            Join thousands of amateur golfer discovering tournaments, scrambles and competitive events every week.
          </p>

          <div className='mt-10 flex flex-col justify-center gap-4 sm:flex-row'>
            <button className='rounded-2xl bg-white px-8 py-4 font-semibold text-[#163020] transition hover:opacity-90'>
              Explore Tournaments
            </button>

            <button className='rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white/20'>
              Submit An Event
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}