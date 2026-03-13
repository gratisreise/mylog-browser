import { Link } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';

export default function ProfilePage() {
  // Mock User Data
  const user = {
    name: 'Jungho Kim',
    handle: '@junghokim',
    bio: 'Software Engineer exploring the frontend universe. Loves React, Typescript, and beautiful design systems.',
    avatarUrl: 'https://i.pravatar.cc/150?img=11',
    website: 'https://junghokim.dev',
    joined: 'February 2025',
    followers: 124,
    following: 89,
    posts: [
      {
        id: 1,
        title: 'React 19의 새로운 기능 미리보기',
        excerpt: '내년 출시 예정인 React 19의 핵심 기능들을 미리 살펴보고 어떤 변화가 있을지 예측해봅니다.',
        date: '2023. 10. 25',
        tags: ['React', 'Frontend'],
        likes: 128,
      },
      {
        id: 2,
        title: '타이포그래피: 다크 모드에서의 가독성',
        excerpt: 'UI 디자인에서 다크 모드 텍스트의 색상 대비와 위계 구조를 설계하는 베스트 프랙티스.',
        date: '2023. 10. 20',
        tags: ['Design', 'UI/UX'],
        likes: 85,
      },
      {
        id: 3,
        title: '개발자의 성장을 위한 회고 습관',
        excerpt: '단순한 반성을 넘어 실제 성장으로 이어지는 효과적인 회고 작성법에 대해 공유합니다.',
        date: '2023. 10. 15',
        tags: ['Career', 'Soft Skills'],
        likes: 210,
      }
    ]
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto py-12 px-6">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16 pb-12 border-b border-[var(--border-default)]">
          {/* Avatar Area */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="size-32 rounded-full overflow-hidden border-2 border-[var(--border-hover)] mb-4">
              <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Info Area */}
          <div className="flex-1 w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-1">{user.name}</h1>
                <p className="text-[var(--text-secondary)] font-medium">{user.handle}</p>
              </div>
              
              <Link to="/profile/edit" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--bg-level-2)] border border-[var(--border-default)] text-[var(--text-primary)] text-sm font-semibold hover:bg-[var(--bg-level-3)] hover:border-[var(--border-hover)] transition-all">
                <span className="material-symbols-outlined text-sm">edit</span>
                Edit Profile
              </Link>
            </div>

            <p className="text-[var(--text-secondary)] leading-relaxed mb-6 max-w-2xl">
              {user.bio}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--text-tertiary)] font-medium">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">link</span>
                <a href={user.website} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">
                  {user.website.replace('https://', '')}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                <span>Joined {user.joined}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-[var(--border-default)]">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[var(--text-primary)]">{user.followers}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">Followers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[var(--text-primary)]">{user.following}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">Following</span>
              </div>
            </div>
          </div>
        </div>

        {/* User's Posts */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Articles by {user.name}</h2>
            <span className="text-sm text-[var(--text-tertiary)] bg-[var(--bg-level-2)] px-3 py-1 rounded-full border border-[var(--border-default)]">
              {user.posts.length} Posts
            </span>
          </div>

          <div className="grid gap-6">
            {user.posts.map(post => (
              <article key={post.id} className="group flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-level-1)] hover:bg-[var(--bg-level-2)] hover:border-[var(--border-hover)] transition-all cursor-pointer">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[var(--primary-dim)] text-[var(--primary)] border border-[var(--primary)]/30">
                        {tag}
                      </span>
                    ))}
                    <span className="text-xs text-[var(--text-tertiary)]">• {post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-[var(--text-tertiary)]">
                    <span className="flex items-center gap-1.5 text-xs font-medium group-hover:text-[var(--primary)] transition-colors">
                      <span className="material-symbols-outlined text-[14px]">favorite</span>
                      {post.likes}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
