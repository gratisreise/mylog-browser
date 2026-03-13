import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[var(--bg-deep)] overflow-x-hidden text-white font-medium">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border-default)] bg-[var(--bg-level-0)]/80 backdrop-blur-md px-6 md:px-10 py-3">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-8">
          <div className="flex items-center gap-8 flex-1">
            <Link to="/" className="flex items-center gap-2 text-slate-100">
              <div className="size-6 bg-[var(--primary)] rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">auto_awesome</span>
              </div>
              <h2 className="text-slate-100 text-lg font-bold leading-tight tracking-tight">MyLog</h2>
            </Link>
            <div className="hidden md:flex flex-1 max-w-md items-center">
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-500 text-sm">search</span>
                </div>
                <input
                  className="block w-full pl-10 pr-12 py-1.5 bg-[var(--bg-level-3)]/50 border border-[var(--border-default)] rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-all"
                  placeholder="Search or jump to..."
                  type="text"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 bg-[var(--bg-level-0)] border border-[var(--border-default)] rounded">⌘K</kbd>
                </div>
              </div>
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-6">
              <a className="text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors" href="#">홈</a>
              <a className="text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors" href="#">최신</a>
              <a className="text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors" href="#">피드</a>
            </div>
            <div className="flex items-center gap-3 border-l border-[var(--border-default)] pl-6">
              <button className="flex items-center justify-center size-9 rounded-lg bg-[var(--bg-level-3)] text-slate-300 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">notifications</span>
              </button>
              <Link to="/write" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-[var(--primary)] text-white text-sm font-semibold hover:bg-[var(--primary)]/90 transition-all shadow-lg shadow-[var(--primary)]/20">
                <span>글쓰기</span>
              </Link>
              <div className="size-9 rounded-full border border-[var(--border-default)] overflow-hidden cursor-pointer">
                <img
                  className="w-full h-full object-cover"
                  alt="User profile avatar circular thumbnail"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFAslg9_35UPZbNCQ6RFXwhicevnguuaSAalHknHYzSihHXoRyNRrfFVM5qt9i6U-MylMJOIewegngW45sgRkHIVk6lcUnetbRpJFprjF-0q786xr1yiK4WR_ppw3LbUkdcyLHvtB6NprD_eS-0bzmbT-7yyr44LntWegxErtvVWfxnovmhbj9YTbumurT1t1ovBf6T4s_XvMYix4QsFXr-2QDwxZJf3OLCa0HgJFjdxw8XRpa-Bp3uLiCKWt0HBCttziMUa2N3qnt"
                />
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main className="max-w-[1200px] mx-auto w-full px-6 py-8 flex gap-10">
        {/* Content Area */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Featured Post */}
          <section className="relative group cursor-pointer overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-level-3)]/20">
            <div className="grid md:grid-cols-2 gap-0">
              <div
                className="aspect-video md:aspect-auto w-full h-full min-h-[300px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB84Uf__4XGhCYrqwiWhcj6WDwQnwkq94vQsd8NFQAycs5ksh-PWRFFQjSi0ywxgSD80ebuBMixjIyVWY3qJPim-zpbRQ_9lL3htxiAZsKkFvFKG5G5dY9r7F5ZIWgVbH-4zWuCM3T5ZPBITOsh6JDVPk75wmEC3drH7B0Jw6atU9c80aKOf5_iREWs41GD9JXmEVHkK2EQxeWEvPtLp_9CxULUhOOaIaNIH1FaWLjyWxVkirUd8jUjWq8qpmWzUfTv3irfdHQmC8_K')" }}
              ></div>
              <div className="p-8 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/30">Feature</span>
                  <span className="text-slate-500 text-xs">2024년 5월 20일</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-100 leading-tight">Linear 스타일 인터페이스의 철학과 디자인 시스템 구축하기</h1>
                <p className="text-slate-400 text-base leading-relaxed line-clamp-3">
                  최근 디자인 트렌드를 선도하고 있는 Linear의 디자인 언어는 단순한 미니멀리즘을 넘어섭니다. 성능과 명확성, 그리고 아름다움을 동시에 잡는 디자인 시스템의 핵심 원칙을 살펴봅니다.
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="size-6 rounded-full overflow-hidden bg-slate-800">
                    <img
                      className="w-full h-full"
                      alt="Author profile avatar"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKfmqa5kYuqMGOeWTa_smZou1cRn6M8jvBFxnriJbyxcerDPO_Tyz2HEzJ7ikTHTfmes5tcKnlRhDK1wj9kq3_gK2FNAbM-7_agDPDm3vEFOpx_7JR_6cCfQg81LSBsBFHEfo1vJ4W1xR9UR2dtPw-XRGBTeuAbTNEgiCxG4AY0IfByYr0SySHEjrxhPTwTUOKFzOk3tG2JZYI7qlldvE0x5b6isdLkwRvghnZlm93b5FmfUt7FhgHXH36PXuDJfJVMZuLPjGFNSn_"
                    />
                  </div>
                  <span className="text-sm font-medium text-slate-300">디자인 리드 • 김민지</span>
                </div>
              </div>
            </div>
          </section>
          {/* Post Grid */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[var(--border-default)] pb-4">
              <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--primary)]">dynamic_feed</span>
                최근 포스트
              </h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--bg-level-3)] text-slate-300">최신순</button>
                <button className="px-3 py-1 text-xs font-medium rounded-full text-slate-500 hover:text-slate-300">인기순</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Post Card 1 */}
              <div className="hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 group flex flex-col gap-4 p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-level-3)]/10 transition-all">
                <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-[var(--border-default)]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Retro computer and high tech setup in dark lighting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-i1uJAk6I_Ksgdj6IGh_4bvvRu0VdRVrElpWc-Rn1C7GmOMN6pYIl63jbvFAO95pHUqdAWsZGLx2yJ86rRgvmbu6a8Xvg6WuTMlepmMlWaBqyWzkFpJ0Jq368kuX_kcCjyFirN-bOwZukNqnry14MO2C7bVBgJ1Bb9smtnjW6cnk6Wod9k4-tVtaW0mDiEQkpLL7CRweQuyA0UF05BCauCuBkoMY4mDGBhUl1WTvZi0Wg7ntrK3orO1EC2NUK_tow_-62Ccn_d8BD"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--primary)] text-xs font-semibold">Development</span>
                    <span className="text-slate-500 text-[10px]">12 min read</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-[var(--primary)] transition-colors">React 19의 새로운 기능 미리보기</h3>
                  <p className="text-slate-400 text-sm line-clamp-2">React 19에서 도입되는 새로운 훅과 컴파일러의 변화가 개발 경험에 미치는 영향에 대해 알아봅니다.</p>
                </div>
              </div>
              {/* Post Card 2 */}
              <div className="hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 group flex flex-col gap-4 p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-level-3)]/10 transition-all">
                <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-[var(--border-default)]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Abstract gradient flowing shapes in purple tones"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAStGUVblzjNI6Of_zbxQ1LPozD1vXAUhlpOlYZ_WyEZss1bYp9ezO5rtiGMiOYyZRq9pY_-src1AJLltKjmaQK_hHlybcE_Edkuf6yAvXA-nBgFM7hV7d0jcNR4ZzYEyr8gq580Xu6IVAVRjaYvYyqRM2-psl8HKS9dtI9LmGbEJy40wWhZLIfprzf8a9k5yTA75TADk8myCQ71mGASo0aZLxDcYz4ZcjsrBYGE_onUh6gh0bFmc1gmzfb30Z3P3qOby0fd8z8hDtV"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--primary)] text-xs font-semibold">Design</span>
                    <span className="text-slate-500 text-[10px]">8 min read</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-[var(--primary)] transition-colors">타이포그래피: 다크 모드에서의 가독성</h3>
                  <p className="text-slate-400 text-sm line-clamp-2">검은 배경에서 텍스트가 뭉쳐 보이지 않게 만드는 고급 타이포그래피 기법들.</p>
                </div>
              </div>
              {/* Post Card 3 */}
              <div className="hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 group flex flex-col gap-4 p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-level-3)]/10 transition-all">
                <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-[var(--border-default)]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Clean programming code on a monitor"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx4y9CPgLZZHwdrta3E5vzZiCjnJnlk8q1jP7DmG8qu3ZyaVqkZzaCa84WAMol5x_f1i0rp8Bm-0fPjLH2EUgo2OGDEkv3NWcIiQSp7DkvfvbwTlPoThKtoY2vZZcrHTcltAJLzVmifBJUOfnBcnw0G-qgTzepAC_b19YuiefD7J82YpqXDyzaAUVT0o3kfGghkQrwfsIZVaB1PPDsHtumDa8pt5fsXwX4TQguq1d5m12SqxzDedvaoCq1FUV34q0Fbup6r8vbM2DI"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--primary)] text-xs font-semibold">Engineering</span>
                    <span className="text-slate-500 text-[10px]">15 min read</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-[var(--primary)] transition-colors">Serverless 아키텍처의 비용 효율성 분석</h3>
                  <p className="text-slate-400 text-sm line-clamp-2">실제 대규모 서비스 운영 경험을 바탕으로 한 서버리스와 전통적 서버의 운영 비용 비교.</p>
                </div>
              </div>
              {/* Post Card 4 */}
              <div className="hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 group flex flex-col gap-4 p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-level-3)]/10 transition-all">
                <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-[var(--border-default)]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Software design framework abstract image"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAhplUvQBc7wgAxV9wWQr-IK8UV_1TuXs8XQg-o0BtO9RjbkX9SOaPm9tuoSSpXDGz-l3uUBgnvh3uFJLyoeNM7MMLBj1uRZRUmBI5GZo5euFeAsInLmx1v5hpIpKDyaPVYv3eRtPiJI3koK0jVF_mgaJlCWKiBQORfkq6mWT6TtefNeyDwhSwPsPwjD45_iABpTn41MRvS7DtKEHWzwAyzVHQbimSduK4621gi8ufNV_xFpwyqv-NBNneAVp-EjKhHaoRPUhsmyKC"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--primary)] text-xs font-semibold">Career</span>
                    <span className="text-slate-500 text-[10px]">5 min read</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-[var(--primary)] transition-colors">개발자의 성장을 위한 회고 습관</h3>
                  <p className="text-slate-400 text-sm line-clamp-2">매주 진행하는 작은 회고가 어떻게 1년 후 큰 차이를 만드는지에 대하여.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col gap-8 w-72">
          {/* Trending Tags */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2">Trending Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['#React', '#DesignSystem', '#TypeScript', '#AI', '#NodeJS', '#UX'].map((tag) => (
                <a key={tag} className="px-3 py-1.5 rounded-lg bg-[var(--bg-level-3)]/40 border border-[var(--border-default)] text-slate-300 text-xs hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/10 transition-all" href="#">
                  {tag}
                </a>
              ))}
            </div>
          </div>
          {/* Popular Authors */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2">Popular Authors</h3>
            <div className="flex flex-col gap-4 px-2">
              {[
                { name: '박지훈', role: 'Senior Engineer @TechCo', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA81W8eWCq4zr7t_eDxo1ChiLRS0RhiFH82QtjtkrVJu7X_B5uyZXUEo6FiY6kpAIJgx_O5cRUtAV5yys0BbDvoXGpyacyq7VructwmTOZNswQgjwS8h0H7iqr4-Kmh5OOr7xExJWr1vTIxElT285bNDfEnNtx_0wkvbRZ-kojiRJHSamXabuagRu4H5fQg-JbuBohtLvaXFsaclHBtkTPBR_hQHzQumE5zvvdYM3N69ZlJjnluSt4h9j-qdsqa0DoJ3LPLA9DXwLD' },
                { name: '이지영', role: 'Product Designer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABRIx6wTC7mAF2qsEqCz6uNttHkL6_psuLh0az9hoW2GgdE1oNR8z2x-_VNNkK0xuS9z-PZ4QKTRj6XeNv_L-j9z5xJBtWX_mkZ1E_P8ka2k3ULHk5RppXJk4Qw2OHZDkvs64OOSJr-THQhtlClDUoY2Oo6dMKk11a05gPKEuDk_AlyFWgitRGBEDEqP7a4ZpI1bAL4MFwnM1Rfkxch333j28qDiXZVwgDuULcXSswXZkHOSq2Iw5fioGuSOvQ0tFrGlFIK59H-ME9' },
                { name: '최성우', role: 'Frontend Dev', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpgL8u1UQUjNNexPcqtUPlk0F5pG54qV2jC85qRQ7BhSVytnZo9Qy5YOmweVFIiY-LhltjTFGBOGoZX7tGejR-kUTjgbPfQsopwAAoDJ3iZXEaPxSB6FAmtPoNJPndPOnu74XyXj2FIVXwotmo58xKIlseTyIXGp_TpK0CrqcLFPp58ZoUotulAjDG8QcIfiis53KGv7ZOIwUsKfQoYp6NVwl-ywLEOPir1bFncsb8mXq0oBaqLjCNT53cKv9aj0gblK-MzIFuctlv' },
              ].map((author) => (
                <div key={author.name} className="flex items-center gap-3 group cursor-pointer">
                  <div className="size-10 rounded-full border border-[var(--border-default)] overflow-hidden">
                    <img className="w-full h-full object-cover" alt={author.name} src={author.img} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-[var(--primary)] transition-colors">{author.name}</span>
                    <span className="text-[10px] text-slate-500">{author.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Newsletter Box */}
          <div className="p-6 rounded-xl border border-[var(--border-default)] bg-[var(--primary)]/5 flex flex-col gap-4">
            <div className="size-8 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[var(--primary)] text-lg">mail</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-100">뉴스레터 구독</h4>
              <p className="text-xs text-slate-400 mt-1">매주 월요일, 엄선된 기술 블로그 포스트를 이메일로 받아보세요.</p>
            </div>
            <div className="flex flex-col gap-2">
              <input
                className="w-full px-3 py-2 bg-[var(--bg-level-0)] border border-[var(--border-default)] rounded-lg text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                placeholder="이메일 주소"
                type="email"
              />
              <button className="w-full py-2 bg-[var(--primary)] text-white text-xs font-bold rounded-lg hover:bg-[var(--primary)]/90 transition-colors">구독하기</button>
            </div>
          </div>
          {/* Footer Links */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 px-2 mt-4">
            <a className="text-[10px] text-slate-600 hover:text-slate-400 transition-colors" href="#">Privacy Policy</a>
            <a className="text-[10px] text-slate-600 hover:text-slate-400 transition-colors" href="#">Terms of Service</a>
            <a className="text-[10px] text-slate-600 hover:text-slate-400 transition-colors" href="#">Cookies</a>
            <span className="text-[10px] text-slate-700 w-full">© 2024 MyLog Inc.</span>
          </div>
        </aside>
      </main>
      {/* Mobile Bottom Nav (Optional) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 border-t border-[var(--border-default)] bg-[var(--bg-level-0)]/95 backdrop-blur-md flex items-center justify-around px-6 z-50">
        <button className="text-[var(--primary)] flex flex-col items-center gap-1">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px]">홈</span>
        </button>
        <button className="text-slate-500 flex flex-col items-center gap-1">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px]">탐색</span>
        </button>
        <Link to="/write" className="size-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center shadow-lg -mt-8 border-4 border-[#08090a]">
          <span className="material-symbols-outlined">add</span>
        </Link>
        <button className="text-slate-500 flex flex-col items-center gap-1">
          <span className="material-symbols-outlined">bookmark</span>
          <span className="text-[10px]">저장</span>
        </button>
        <button className="text-slate-500 flex flex-col items-center gap-1">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px]">내정보</span>
        </button>
      </div>
    </div>
  );
}
