import { useState } from 'react';

export default function WritePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[var(--bg-deep)] text-white">
      {/* Header */}
      <header className="h-16 border-b border-[var(--border-default)] flex items-center justify-between px-6 shrink-0 bg-[var(--bg-level-0)] z-50">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z"></path>
            </svg>
            <span className="font-bold text-xl tracking-tight">MyLog</span>
          </div>
          <div className="flex items-center text-sm text-[var(--text-tertiary)] space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span>임시 저장됨</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
          <button className="bg-[#5c7cfa] hover:bg-blue-600 text-white px-6 py-1.5 rounded-md font-medium text-sm transition-all">
            발행
          </button>
          <div className="w-8 h-8 rounded-full bg-orange-200 border border-gray-700 overflow-hidden">
            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOp6YNm4HOejCvnE3FlpBlThbfrXfCk87sqPrjUt-UyOWJNwtRlDnlAyseIm7pec7l5y_WsacAHhc4I0N4o9navMxpSrtBZBy1CPTzgPvCQ3MfEBokFiiFGavB7tYR_Y5sUXM8zaotpuLvU_1kFYAp-ANRhUQ0I0aPgX7317qZAZk5znxG8D-z3K-oAv2Wc2iPuLS-qy0X64xF-Jjs2_RjvwYxc3Nimyod4icr4T6mVRIbCH5HLgMxtYBnvgiadaL6qwVNK5XoWkNB"/>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-1 overflow-hidden relative">
        {/* Editor Area */}
        <section className="flex-1 flex flex-col items-center pt-24 pb-12 overflow-y-auto bg-[var(--bg-level-0)] scrollbar-hide">
          <div className="w-full max-w-3xl px-8">
            <input
              className="w-full bg-transparent border-none focus:ring-0 text-5xl font-bold text-white placeholder-[#2a2d32] mb-12 outline-none"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
            <textarea
              className="w-full bg-transparent border-none focus:ring-0 text-xl text-[var(--text-tertiary)] placeholder-[#2a2d32] min-h-[400px] resize-none outline-none"
              placeholder="당신의 이야기를 시작하세요..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          {/* Floating Toolbar */}
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#121418] border border-[var(--border-default)] rounded-xl px-4 py-2 flex items-center space-x-4 shadow-2xl z-40">
            <div className="flex items-center border-r border-[var(--border-default)] pr-4 space-x-4">
              <button className="text-[var(--text-tertiary)] hover:text-white font-bold">B</button>
              <button className="text-[var(--text-tertiary)] hover:text-white italic">I</button>
              <button className="text-[var(--text-tertiary)] hover:text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </button>
            </div>
            <div className="flex items-center border-r border-[var(--border-default)] pr-4 space-x-4">
              <button className="text-[var(--text-tertiary)] hover:text-white text-xs font-bold uppercase">h1</button>
              <button className="text-[var(--text-tertiary)] hover:text-white text-xs font-bold uppercase">h2</button>
              <button className="text-[var(--text-tertiary)] hover:text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C3.89543 8 3 7.10457 3 6V3L11 3V15C11 18.3137 8.31371 21 5 21H3Z"></path></svg>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-[var(--text-tertiary)] hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </button>
              <button className="text-[var(--text-tertiary)] hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </button>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="w-80 border-l border-[var(--border-default)] bg-[#0c0d0f] flex flex-col h-full overflow-y-auto px-6 py-8">
          <div className="flex items-center space-x-2 text-white font-semibold mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            <span>포스트 설정</span>
          </div>

          {/* Thumbnail Section */}
          <div className="mb-8">
            <label className="block text-xs font-medium text-[var(--text-tertiary)] uppercase mb-3 tracking-wider">썸네일</label>
            <div className="border border-dashed border-[#3a3f47] rounded-lg aspect-video flex flex-col items-center justify-center bg-[#121418] cursor-pointer hover:bg-[#1a1c22] transition-colors group">
              <div className="bg-[var(--bg-level-3)] p-2 rounded-md mb-2 group-hover:bg-[#2e3138]">
                <svg className="w-5 h-5 text-[var(--text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <span className="text-xs text-[var(--text-tertiary)]">이미지 업로드</span>
            </div>
          </div>

          {/* URL Slug Section */}
          <div className="mb-8">
            <label className="block text-xs font-medium text-[var(--text-tertiary)] uppercase mb-3 tracking-wider">URL 슬러그</label>
            <div className="bg-[#121418] border border-[var(--border-default)] rounded-lg p-3 flex flex-col space-y-1">
              <span className="text-[10px] text-[#555a64] break-all">mylog.io/@username/</span>
              <input className="bg-transparent border-none p-0 focus:ring-0 text-sm text-white w-full outline-none" type="text" defaultValue="how-to-design-modern-ui"/>
            </div>
          </div>

          {/* Visibility Settings */}
          <div className="mb-8">
            <label className="block text-xs font-medium text-[var(--text-tertiary)] uppercase mb-3 tracking-wider">공개 설정</label>
            <div className="bg-[#121418] border border-[var(--border-default)] rounded-lg overflow-hidden">
              <div className="flex items-center justify-between p-3 border-b border-[var(--border-default)] cursor-pointer hover:bg-[#1a1c22]">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-[var(--text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span className="text-sm">전체 공개</span>
                </div>
                <div className="w-5 h-5 rounded-full border-4 border-[#5c7cfa] bg-[#0c0d0f] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5c7cfa]"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 opacity-60 cursor-pointer hover:bg-[#1a1c22]">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-[var(--text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span className="text-sm">비공개</span>
                </div>
                <div className="w-5 h-5 rounded-full border border-[var(--border-default)] bg-transparent"></div>
              </div>
            </div>
          </div>

          {/* Tags Section */}
          <div className="mb-8">
            <label className="block text-xs font-medium text-[var(--text-tertiary)] uppercase mb-3 tracking-wider">태그</label>
            <div className="flex flex-wrap gap-2">
              <div className="bg-[#1a1c22] text-[var(--text-tertiary)] text-xs px-2 py-1 rounded-md flex items-center space-x-1 border border-[var(--border-default)]">
                <span>Design</span>
                <button className="hover:text-white">×</button>
              </div>
              <div className="bg-[#1a1c22] text-[var(--text-tertiary)] text-xs px-2 py-1 rounded-md flex items-center space-x-1 border border-[var(--border-default)]">
                <span>UI/UX</span>
                <button className="hover:text-white">×</button>
              </div>
              <button className="text-[10px] text-[#555a64] border border-[var(--border-default)] border-dashed px-2 py-1 rounded-md hover:border-[#8a8f98] transition-colors">
                + 태그 추가
              </button>
            </div>
          </div>

          {/* Delete Action */}
          <div className="mt-auto pt-8 border-t border-[var(--border-default)]">
            <button className="flex items-center space-x-2 text-[var(--text-tertiary)] hover:text-red-400 text-xs transition-colors group">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              <span>포스트 삭제</span>
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
