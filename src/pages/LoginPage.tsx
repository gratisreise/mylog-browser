import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-level-0)] text-[var(--text-primary)] font-sans antialiased relative">
      <header className="flex items-center justify-between p-4 lg:p-6 border-b border-[var(--border-default)] bg-[var(--bg-level-0)]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-[1px]">
            <div className="w-full h-full rounded-lg bg-[var(--bg-level-1)] flex items-center justify-center">
              <span className="material-symbols-outlined text-[var(--text-primary)] text-xl">auto_stories</span>
            </div>
          </div>
          <Link to="/" className="text-xl font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors">
            MyLog
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span className="text-sm font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)] cursor-pointer transition-colors">MyLog가 처음이신가요?</span>
          <Link to="/signup" className="btn-primary text-white px-4 py-2 rounded text-sm font-medium hover:brightness-110 transition-all">
            회원가입
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 relative">
        {/* Abstract Background Blurs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full mix-blend-screen mix-blend-plus-lighter filter blur-[100px] opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--accent)] rounded-full mix-blend-screen mix-blend-plus-lighter filter blur-[100px] opacity-10 animate-blob animation-delay-2000"></div>

        <div className="w-full max-w-md glass-panel p-8 rounded-2xl shadow-2xl relative z-10 border border-[var(--border-default)]">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--text-primary)] mb-2">반가워요!</h1>
            <p className="text-[var(--text-secondary)]">MyLog 계정으로 로그인하세요.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[var(--text-secondary)]">이메일</label>
              <div className="input-base rounded-lg px-3 py-2.5 flex items-center gap-2 transition-all">
                 <span className="material-symbols-outlined text-[var(--text-tertiary)] text-[20px]">mail</span>
                <input 
                  type="email" 
                  className="bg-transparent border-none w-full text-sm placeholder-[var(--text-tertiary)] focus:ring-0 p-0 text-[var(--text-primary)]" 
                  placeholder="name@example.com" 
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-[var(--text-secondary)]">비밀번호</label>
                <a href="#" className="text-xs font-medium text-[var(--primary)] hover:text-[var(--accent)] transition-colors">비밀번호를 잊으셨나요?</a>
              </div>
              <div className="input-base rounded-lg px-3 py-2.5 flex items-center gap-2 group transition-all">
                <span className="material-symbols-outlined text-[var(--text-tertiary)] text-[20px]">lock</span>
                <input 
                  type="password" 
                  className="bg-transparent border-none w-full text-sm focus:ring-0 p-0 text-[var(--text-primary)] placeholder-[var(--text-tertiary)]" 
                  placeholder="••••••••" 
                  required 
                />
                <button type="button" className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                  <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                </button>
              </div>
            </div>

            <button type="submit" className="w-full btn-primary text-white py-3 rounded-lg text-base font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-[var(--primary-dim)]">
              로그인
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>

          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-[var(--border-default)]"></div>
            <div className="px-4 text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wider bg-[var(--bg-level-1)]">또는</div>
            <div className="flex-1 border-t border-[var(--border-default)]"></div>
          </div>

          <div className="space-y-3">
            <button type="button" className="w-full bg-[var(--bg-level-0)] border border-[var(--border-default)] text-[var(--text-primary)] px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[var(--bg-level-2)] hover:border-[var(--text-secondary)] transition-all flex items-center justify-center gap-3">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvTjDmGtZLA6dYp8tP0UIiaSrfeCXW2ItC9avAG7VotpHQAHorKn_WfVidh_G0nXgTzuMm-kfS6XQ4uRyMK6OupU2LVNtvCLIOmyg-It0A1dR4pm5lERkx2cGDZgJBCgee18O3QfZbwYgyn_lBrZZ0kN5ndYALfaioH5I5IO1xFacfaLc6R1nK6ehDYa6vYxuJ_lyCphiKW9weywUuQNwFieujWbKSaWg4pk7R8lTtFABIzBObRleO0f_5EwtFM07oA-d46BKk1Fxc" alt="Google" className="w-4 h-4 opacity-80" />
              Google로 계속하기
            </button>
            <button type="button" className="w-full bg-[#1da1f2]/10 border border-[#1da1f2]/20 text-[#1da1f2] px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1da1f2]/20 transition-all flex items-center justify-center gap-3">
               <span className="material-symbols-outlined text-[18px]">flutter_dash</span>
              Twitter로 계속하기
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-[var(--text-tertiary)]">
            계정이 없으신가요?{' '}
            <Link to="/signup" className="font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors">지금 가입하세요</Link>
          </p>
        </div>
      </main>

      <footer className="py-6 border-t border-[var(--border-default)] flex justify-center gap-8 text-xs font-medium text-[var(--text-tertiary)] bg-[var(--bg-level-0)] backdrop-blur-md">
        <a href="#" className="hover:text-[var(--text-primary)] transition-colors">보안</a>
        <a href="#" className="hover:text-[var(--text-primary)] transition-colors">개인정보 처리방침</a>
        <a href="#" className="hover:text-[var(--text-primary)] transition-colors">이용약관</a>
      </footer>
    </div>
  );
}
