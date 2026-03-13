import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 임시 데이터를 로드하는 효과 (실제로는 API 호출)
  useEffect(() => {
    setTitle('기존 게시글 제목');
    setContent('기존 게시글의 상세 내용입니다. 여기에 수정하고 싶은 내용을 입력하세요.');
  }, [id]);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[var(--bg-level-0)] text-[var(--text-primary)] font-sans">
      {/* Header */}
      <header className="h-16 border-b border-[var(--border-default)] flex items-center justify-between px-6 shrink-0 bg-[var(--bg-level-0)] z-50">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-[var(--text-primary)] text-xl">auto_stories</span>
            <span className="font-bold text-xl tracking-tight cursor-pointer hover:text-[var(--primary)] transition-colors" onClick={() => navigate('/write')}>MyLog</span>
          </div>
          <div className="flex items-center text-sm text-[var(--text-tertiary)] space-x-2">
            <span className="bg-[var(--primary-muted)] px-2 py-0.5 rounded text-[10px] font-bold text-[var(--primary)] border border-[var(--primary)]/30">EDIT MODE</span>
            <span>수정 중...</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/write')}
            className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium"
          >
            취소
          </button>
          <button className="btn-primary text-white px-6 py-1.5 rounded-md font-medium text-sm transition-all shadow-[var(--primary-glow)]">
            수정 완료
          </button>
          <div className="w-8 h-8 rounded-full bg-[var(--bg-level-2)] border border-[var(--border-default)] overflow-hidden">
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
              className="w-full bg-transparent border-none focus:ring-0 text-5xl font-bold text-[var(--text-primary)] placeholder-[var(--text-tertiary)] mb-12 outline-none"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
            <textarea
              className="w-full bg-transparent border-none focus:ring-0 text-xl text-[var(--text-secondary)] placeholder-[var(--text-tertiary)] min-h-[400px] resize-none outline-none"
              placeholder="당신의 이야기를 시작하세요..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          {/* Floating Toolbar */}
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[var(--bg-level-1)] border border-[var(--border-default)] rounded-xl px-4 py-2 flex items-center space-x-4 shadow-2xl z-40">
            <div className="flex items-center border-r border-[var(--border-default)] pr-4 space-x-4">
              <button className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] font-bold">B</button>
              <button className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] italic">I</button>
              <button className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)]">
                <span className="material-symbols-outlined text-[18px]">format_underlined</span>
              </button>
            </div>
            <div className="flex items-center border-r border-[var(--border-default)] pr-4 space-x-4">
              <button className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] text-xs font-bold uppercase">H1</button>
              <button className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] text-xs font-bold uppercase">H2</button>
              <button className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)]">
                 <span className="material-symbols-outlined text-[18px]">format_quote</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)]">
                 <span className="material-symbols-outlined text-[18px]">link</span>
              </button>
              <button className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)]">
                 <span className="material-symbols-outlined text-[18px]">image</span>
              </button>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="w-80 border-l border-[var(--border-default)] bg-[var(--bg-level-1)] flex flex-col h-full overflow-y-auto px-6 py-8">
          <div className="flex items-center space-x-2 text-[var(--text-primary)] font-semibold mb-8">
            <span className="material-symbols-outlined text-[18px]">settings</span>
            <span>포스트 수정 설정</span>
          </div>

          {/* Thumbnail Section */}
          <div className="mb-8">
            <label className="block text-xs font-medium text-[var(--text-secondary)] uppercase mb-3 tracking-wider">썸네일</label>
            <div className="relative group overflow-hidden rounded-lg aspect-video border border-[var(--border-default)] bg-[var(--bg-level-2)] cursor-pointer">
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <span className="text-xs text-white">변경하기</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600" 
                alt="Thumbnail" 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
          </div>

          {/* URL Slug Section */}
          <div className="mb-8">
            <label className="block text-xs font-medium text-[var(--text-secondary)] uppercase mb-3 tracking-wider">URL 슬러그</label>
            <div className="bg-[var(--bg-level-0)] border border-[var(--border-default)] rounded-lg p-3 flex flex-col space-y-1">
              <span className="text-[10px] text-[var(--text-tertiary)] break-all">mylog.io/@username/</span>
              <input className="bg-transparent border-none p-0 focus:ring-0 text-sm text-[var(--text-primary)] w-full outline-none placeholder-[var(--text-tertiary)]" type="text" defaultValue="existing-post-slug"/>
            </div>
          </div>

          {/* Visibility Settings */}
          <div className="mb-8">
            <label className="block text-xs font-medium text-[var(--text-secondary)] uppercase mb-3 tracking-wider">공개 설정</label>
            <div className="bg-[var(--bg-level-0)] border border-[var(--border-default)] rounded-lg overflow-hidden">
              <div className="flex items-center justify-between p-3 border-b border-[var(--border-default)] cursor-pointer hover:bg-[var(--bg-level-2)]">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-[var(--text-tertiary)] text-[16px]">public</span>
                  <span className="text-sm">전체 공개</span>
                </div>
                <div className="w-5 h-5 rounded-full border-4 border-[var(--primary)] bg-[var(--bg-level-1)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 opacity-60 cursor-pointer hover:bg-[var(--bg-level-2)]">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-[var(--text-tertiary)] text-[16px]">lock</span>
                  <span className="text-sm">비공개</span>
                </div>
                <div className="w-5 h-5 rounded-full border border-[var(--border-default)] bg-transparent"></div>
              </div>
            </div>
          </div>

          {/* Tags Section */}
          <div className="mb-8">
            <label className="block text-xs font-medium text-[var(--text-secondary)] uppercase mb-3 tracking-wider">태그</label>
            <div className="flex flex-wrap gap-2">
              <div className="bg-[var(--bg-level-0)] text-[var(--text-secondary)] text-xs px-2 py-1 rounded-md flex items-center space-x-1 border border-[var(--border-default)]">
                <span>Design</span>
                <button className="hover:text-[var(--text-primary)]">×</button>
              </div>
              <div className="bg-[var(--bg-level-0)] text-[var(--text-secondary)] text-xs px-2 py-1 rounded-md flex items-center space-x-1 border border-[var(--border-default)]">
                <span>React</span>
                <button className="hover:text-[var(--text-primary)]">×</button>
              </div>
              <button className="text-[10px] text-[var(--text-tertiary)] border border-[var(--border-default)] border-dashed px-2 py-1 rounded-md hover:border-[var(--text-secondary)] hover:text-[var(--text-secondary)] transition-colors">
                + 태그 추가
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="mt-auto pt-8 border-t border-[var(--border-default)]">
            <button className="flex items-center space-x-2 text-[var(--text-tertiary)] hover:text-red-400 text-xs transition-colors group">
              <span className="material-symbols-outlined text-[16px]">delete</span>
              <span>이 게시글 삭제</span>
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
