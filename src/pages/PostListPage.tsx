import { Link } from 'react-router-dom';

export default function PostListPage() {
  const posts = [
    {
      id: 1,
      title: "The Evolution of Linear Design Systems in 2024",
      excerpt: "Exploring how dark mode aesthetics and high contrast borders are shaping modern web interfaces.",
      category: "Design",
      author: "Alex Chen",
      date: "Oct 24",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBasPwdWwPGjKqezU48i2ZjRHO9FKqdhFo6VS9QOpfUmfq24J37EI9FDi3jT0kUXl86LOl9ZDC8v5g-xnoJH9BlPRrAO00K44fEnXz0WyA8-DxZrm9iCEeT_cbqm-LSLJ1DX04cT-DYWRy4_JF9LWTqebzMZQw59End23imgF7-FtJratrI_XQCfDytImRnEZ_oc9S-kWMep8u9wYL576cKn9N3Bo8ok_N7E-ntNmv6ab1kI8GU8elF0CBWW6Z-e0Qv7iC-raSFD-uI",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOMu5YXPGZGvhaqM1f5_hVmEoKasqk59KnbPF4G_MPbXyMQ_RSgujVMpRpLRZ0QccZ6U2OEmoit4o5RPsX_7CvVziWZXqqStdYRWer4kgisru_JtXjtmpNMEHWHGFKeKro4F5I07KeoK0vrkAQ_7x-mQndllJTK169-9NxsG_PLdcxZOrk58UBBiAbkHbBD68JQ_8iKhNUu38GkXpx7epcJzNjPLhgo4zlBuc2cJ7Rg0sjCyh5BEDR0tUrYneZylO3_UWvJHU9KuHe"
    },
    {
      id: 2,
      title: "Optimizing React Rendering Performance",
      excerpt: "A deep dive into useMemo, useCallback, and React.memo. Learn when to use them and when they might be premature optimization.",
      category: "Engineering",
      author: "Jane Doe",
      date: "2 hours ago",
      tags: ["#react", "#performance", "#javascript"],
      initials: "JD"
    },
    {
       id: 3,
       title: "Digital Nomad Setup 2024",
       category: "Lifestyle",
       author: "Sarah Smith",
       date: "Dec 01",
       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOeBP9cxfLZ0mNu5jHNugOloBM3_xHWGCANjP1Cs3hM6Vo9mTOBi5WkCgO154jpsReAjoLj62Huer2ZgSfJBxEIfvDQSAtrReRpg4BivnjFVQQXHN13Fhgu-GlpVuCCeHMUXLgLwWUL-0WbrE3BKknoA6lKFh2X819m2nBfC25zZ350n2HlJyMStN6AnfExY7VKJ_1XTYGXCULP_Uf0Lu0xE71oohct3NTOIpDZDi2jin8ze7dvLtq01QVY2UQFltf499yjJVxl6Rk",
       avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdX3gH3NN5ACsHnUD-sc5GNraY9DIXHMufvYvtSfSIW4owNKbzqZp30PFrS6fXkvK9EcH-kWEX950JxIG9zhzh_3-Do5vNou9yWIIzLIBgfu4wnWJEqWU-vidHluTir0MgFXourJ8NavlMm64n9cavlx8FTfSJ64nZ_idBlyDipGapnrTLhXW67UvG-RYGzd2TnbQcjOB7AscO8tOmgvRId1Qy9t2-ym2yT4WE0SG3AvvdYpOKC0UYf9N6aT8tzfx2FkOOdntJMQ5E"
    },
    {
      id: 4,
      title: "Mastering Tailwind CSS Grid Strategies",
      excerpt: "Build complex layouts effortlessly using Tailwind's grid utilities combined with standard CSS variables.",
      category: "Engineering",
      author: "Alex Chen",
      date: "Nov 15",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBasPwdWwPGjKqezU48i2ZjRHO9FKqdhFo6VS9QOpfUmfq24J37EI9FDi3jT0kUXl86LOl9ZDC8v5g-xnoJH9BlPRrAO00K44fEnXz0WyA8-DxZrm9iCEeT_cbqm-LSLJ1DX04cT-DYWRy4_JF9LWTqebzMZQw59End23imgF7-FtJratrI_XQCfDytImRnEZ_oc9S-kWMep8u9wYL576cKn9N3Bo8ok_N7E-ntNmv6ab1kI8GU8elF0CBWW6Z-e0Qv7iC-raSFD-uI", /* reusing image for mock */
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOMu5YXPGZGvhaqM1f5_hVmEoKasqk59KnbPF4G_MPbXyMQ_RSgujVMpRpLRZ0QccZ6U2OEmoit4o5RPsX_7CvVziWZXqqStdYRWer4kgisru_JtXjtmpNMEHWHGFKeKro4F5I07KeoK0vrkAQ_7x-mQndllJTK169-9NxsG_PLdcxZOrk58UBBiAbkHbBD68JQ_8iKhNUu38GkXpx7epcJzNjPLhgo4zlBuc2cJ7Rg0sjCyh5BEDR0tUrYneZylO3_UWvJHU9KuHe"
    },
    {
      id: 5,
      title: "Why Typography Matters More in Dark Mode",
      excerpt: "When the background pulls back, the text takes center stage. Adjusting font weights, letter spacing, and contrast ratios for dark themes.",
      category: "Design",
      author: "Jane Doe",
      date: "Nov 02",
      tags: ["#typography", "#ui", "#darkmode"],
      initials: "JD"
    },
    {
       id: 6,
       title: "Workspace Tour: Minimalist Desk Setup",
       category: "Lifestyle",
       author: "Sarah Smith",
       date: "Oct 18",
       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOeBP9cxfLZ0mNu5jHNugOloBM3_xHWGCANjP1Cs3hM6Vo9mTOBi5WkCgO154jpsReAjoLj62Huer2ZgSfJBxEIfvDQSAtrReRpg4BivnjFVQQXHN13Fhgu-GlpVuCCeHMUXLgLwWUL-0WbrE3BKknoA6lKFh2X819m2nBfC25zZ350n2HlJyMStN6AnfExY7VKJ_1XTYGXCULP_Uf0Lu0xE71oohct3NTOIpDZDi2jin8ze7dvLtq01QVY2UQFltf499yjJVxl6Rk",
       avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdX3gH3NN5ACsHnUD-sc5GNraY9DIXHMufvYvtSfSIW4owNKbzqZp30PFrS6fXkvK9EcH-kWEX950JxIG9zhzh_3-Do5vNou9yWIIzLIBgfu4wnWJEqWU-vidHluTir0MgFXourJ8NavlMm64n9cavlx8FTfSJ64nZ_idBlyDipGapnrTLhXW67UvG-RYGzd2TnbQcjOB7AscO8tOmgvRId1Qy9t2-ym2yT4WE0SG3AvvdYpOKC0UYf9N6aT8tzfx2FkOOdntJMQ5E"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-level-0)] text-[var(--text-primary)] font-sans antialiased">
      {/* Header */}
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
        <div className="flex items-center gap-6 text-sm font-medium">
           <Link to="/" className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">Home</Link>
           <Link to="/posts" className="text-[var(--text-primary)] border-b-2 border-[var(--primary)] pb-1">Posts</Link>
           <Link to="/write" className="btn-primary text-white px-4 py-2 rounded font-medium hover:brightness-110 md:ml-4 flex items-center gap-2">
             <span className="material-symbols-outlined text-[18px]">edit_square</span>
             <span className="hidden sm:inline">글쓰기</span>
           </Link>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12">
        {/* Page Title & Filter Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[var(--border-default)] pb-8">
           <div>
              <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-2">All Posts</h1>
              <p className="text-[var(--text-secondary)]">Discover thoughts, stories, and ideas from our writers.</p>
           </div>
           
           <div className="flex items-center gap-3">
              <div className="input-base w-40 rounded-lg px-3 py-2 flex items-center justify-between cursor-pointer group transition-all">
                 <span className="text-sm text-[var(--text-primary)]">All Categories</span>
                 <span className="material-symbols-outlined text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)]">expand_more</span>
              </div>
              <div className="input-base w-32 rounded-lg px-3 py-2 flex items-center justify-between cursor-pointer group transition-all">
                 <span className="text-sm text-[var(--text-primary)]">Latest</span>
                 <span className="material-symbols-outlined text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)]">sort</span>
              </div>
           </div>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
           <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm border border-[var(--primary)] bg-[var(--primary-muted)] text-[var(--primary)] cursor-pointer">
              All
           </span>
           <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm border border-[var(--border-default)] bg-[var(--bg-level-1)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
              Design
           </span>
           <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm border border-[var(--border-default)] bg-[var(--bg-level-1)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
              Engineering
           </span>
           <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm border border-[var(--border-default)] bg-[var(--bg-level-1)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
              Lifestyle
           </span>
           <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm border border-[var(--border-default)] bg-[var(--bg-level-1)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
              Productivity
           </span>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
           {posts.map((post) => (
             <Link to={`/post/${post.id}`} key={post.id} className="group relative flex flex-col h-full bg-[var(--bg-level-1)] border border-[var(--border-default)] rounded-xl overflow-hidden card-hover">
                {post.image ? (
                   <div className="relative w-full aspect-[16/9] bg-[var(--bg-level-2)] overflow-hidden">
                     <img alt="Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src={post.image} />
                     <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-md text-xs font-medium text-white shadow-lg">
                       {post.category}
                     </div>
                   </div>
                ) : (
                   <div className="pt-6 px-6">
                      <span className="px-2.5 py-1 rounded-md bg-[var(--primary-dim)] text-[var(--primary)] border border-[var(--primary)]/20 text-xs font-medium inline-block mb-4">
                         {post.category}
                      </span>
                   </div>
                )}
                
                <div className={`flex flex-col flex-1 p-6 ${post.image ? 'pt-5' : 'pt-0'}`}>
                   <h4 className="text-xl font-semibold text-[var(--text-primary)] leading-tight mb-3 group-hover:text-[var(--primary)] transition-colors">
                     {post.title}
                   </h4>
                   
                   {post.excerpt && (
                     <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                       {post.excerpt}
                     </p>
                   )}
                   
                   {!post.excerpt && post.tags && (
                      <div className="flex items-center gap-2 mb-6 flex-wrap flex-1 content-start">
                        {post.tags.map(tag => (
                          <span key={tag} className="text-xs text-[var(--text-tertiary)]">{tag}</span>
                        ))}
                      </div>
                   )}
                   
                   {/* Card Footer */}
                   <div className={`flex items-center justify-between pt-4 mt-auto ${post.image ? 'border-t border-[var(--border-default)]' : 'border-t border-[var(--border-default)]'}`}>
                     <div className="flex items-center gap-2">
                       {post.avatar ? (
                          <img alt="Avatar" className="w-8 h-8 rounded-full border border-[var(--border-default)] object-cover" src={post.avatar} />
                       ) : (
                          <div className="w-8 h-8 rounded-full bg-[var(--bg-level-2)] border border-[var(--border-default)] flex items-center justify-center text-[var(--text-secondary)] text-xs font-bold">
                            {post.initials}
                          </div>
                       )}
                       <div className="flex flex-col">
                          <span className="text-xs text-[var(--text-primary)] font-medium">{post.author}</span>
                          <span className="text-[10px] text-[var(--text-tertiary)]">{post.date}</span>
                       </div>
                     </div>
                     {!post.excerpt && <span className="material-symbols-outlined text-[var(--text-tertiary)] text-[18px] group-hover:text-[var(--primary)]">arrow_forward</span>}
                   </div>
                </div>
             </Link>
           ))}
        </div>

        {/* Load More Button */}
        <div className="mt-16 flex justify-center">
            <button className="px-6 py-3 rounded-full border border-[var(--border-default)] bg-[var(--bg-level-1)] text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)] transition-all flex items-center gap-2">
               Show More Posts
               <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>
        </div>
      </main>
      
      {/* Universal Footer placeholder */}
      <footer className="py-8 border-t border-[var(--border-default)] bg-[var(--bg-level-1)] text-center text-sm text-[var(--text-tertiary)]">
         &copy; 2024 MyLog Inc. All rights reserved.
      </footer>
    </div>
  );
}
