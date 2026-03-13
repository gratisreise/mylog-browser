import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SearchResultPage() {
  const [query, setQuery] = useState("React Performance");
  
  // Mock search results
  const results = [
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
      id: 7,
      title: "React 19 Server Components Explained",
      excerpt: "Understanding how the new server-side capabilities in React change the way we build and ship full-stack JavaScript applications.",
      category: "Engineering",
      author: "Alex Chen",
      date: "Oct 10",
      tags: ["#react", "#rsc", "#frontend"],
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOMu5YXPGZGvhaqM1f5_hVmEoKasqk59KnbPF4G_MPbXyMQ_RSgujVMpRpLRZ0QccZ6U2OEmoit4o5RPsX_7CvVziWZXqqStdYRWer4kgisru_JtXjtmpNMEHWHGFKeKro4F5I07KeoK0vrkAQ_7x-mQndllJTK169-9NxsG_PLdcxZOrk58UBBiAbkHbBD68JQ_8iKhNUu38GkXpx7epcJzNjPLhgo4zlBuc2cJ7Rg0sjCyh5BEDR0tUrYneZylO3_UWvJHU9KuHe"
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
        <div className="flex items-center gap-4">
           <Link to="/write" className="btn-primary text-white px-4 py-2 rounded text-sm font-medium hover:brightness-110 flex items-center gap-2 transition-all shadow-[var(--primary-glow)]">
             <span className="material-symbols-outlined text-[18px]">edit_square</span>
             <span className="hidden sm:inline">글쓰기</span>
           </Link>
           <div className="w-9 h-9 rounded-full bg-[var(--bg-level-2)] border border-[var(--border-default)] overflow-hidden cursor-pointer hover:border-[var(--primary)] transition-colors">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFRovejACB9Fgq74aKg3GTANsxDXtR9aBwU1hrt1lud0yWo6O8rrIZgc9HC0c-6MZfe8-xUUp_ExDnD0OlrlYEkmNWS7rpR2NfWI9pW3ZVM31aPWNx88fhWfmLsW_KjQ_ox8RNYVwkbkYZIM1ILXm282ZADlhaE7oCBSjkCGbUVW6cLeoWthPX8ClfSJN4vUKjkNvpC_V-ijR9lxTZHCdQpcOmwnaBg7faJDEHAJOb1Rl8rO4QBuaP1QNGgj-kJ78ME_dyTCw5yN-a" alt="User Profile" className="w-full h-full object-cover" />
           </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12">
        {/* Large Prominent Search bar */}
        <div className="mb-12 relative z-10 group">
           <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl blur-xl opacity-20 group-focus-within:opacity-40 transition-opacity duration-500"></div>
           <div className="input-base rounded-2xl px-6 py-5 flex items-center gap-4 relative z-20 shadow-2xl bg-[var(--bg-level-1)]/90 backdrop-blur">
              <span className="material-symbols-outlined text-[var(--text-secondary)] text-3xl">search</span>
              <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent border-none w-full text-xl md:text-2xl text-[var(--text-primary)] focus:ring-0 p-0 placeholder-[var(--text-tertiary)]"
                placeholder="Search across all posts, writers, and tags..."
                autoFocus
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] bg-[var(--bg-level-2)] rounded-full p-1 transition-colors">
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              )}
           </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8 border-b border-[var(--border-default)] pb-4">
           {query ? (
              <h2 className="text-xl text-[var(--text-secondary)] font-medium">
                 <strong className="text-[var(--text-primary)]">{results.length} results</strong> for "{query}"
              </h2>
           ) : (
             <h2 className="text-xl font-medium text-[var(--text-secondary)]">Recent Popular Searches</h2>
           )}
           
           <div className="flex gap-2">
             <button className="px-3 py-1.5 rounded-md border border-[var(--border-default)] bg-[var(--bg-level-1)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)] transition-all">Most Relevant</button>
             <button className="px-3 py-1.5 rounded-md border border-transparent bg-transparent text-xs text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-all">Latest</button>
           </div>
        </div>

        {/* Results List */}
        <div className="space-y-6">
           {query && results.map((post) => (
             <article key={post.id} className="group flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-level-1)] hover:bg-[var(--bg-level-2)] hover:border-[#3e4045] transition-all cursor-pointer">
                 <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                       <span className="px-2.5 py-1 rounded-md bg-[var(--primary-dim)] text-[var(--primary)] border border-[var(--primary)]/20 text-[10px] font-medium uppercase tracking-wider">
                          {post.category}
                       </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] leading-tight mb-2 group-hover:text-[var(--primary)] transition-colors">
                       {/* Highlight matching text for visual effect */}
                       {post.title.split(new RegExp('(' + query.split(' ')[0] + ')', 'gi')).map((part, i) => 
                           part.toLowerCase() === query.split(' ')[0].toLowerCase() ? 
                           (<span key={i} className="text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-4">{part}</span>) : (<span key={i}>{part}</span>)
                       )}
                    </h3>
                    
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 mb-4 flex-wrap flex-1 content-start">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs text-[var(--text-tertiary)]">{tag}</span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 mt-auto border-t border-[var(--border-default)]">
                       <div className="flex items-center gap-2">
                         {post.avatar ? (
                            <img alt="Avatar" className="w-6 h-6 rounded-full border border-[var(--border-default)] object-cover" src={post.avatar} />
                         ) : (
                            <div className="w-6 h-6 rounded-full bg-[var(--bg-level-2)] border border-[var(--border-default)] flex items-center justify-center text-[var(--text-secondary)] text-[10px] font-bold">
                              {post.initials}
                            </div>
                         )}
                         <span className="text-xs text-[var(--text-primary)] font-medium">{post.author}</span>
                         <span className="text-[var(--text-tertiary)] text-[10px]">•</span>
                         <span className="text-[10px] text-[var(--text-tertiary)]">{post.date}</span>
                       </div>
                    </div>
                 </div>
             </article>
           ))}

           {query && results.length === 0 && (
             <div className="py-20 text-center">
                <span className="material-symbols-outlined text-[var(--border-hover)] text-6xl mb-4">search_off</span>
                <p className="text-[var(--text-secondary)] text-lg">No results found for "{query}"</p>
                <p className="text-[var(--text-tertiary)] text-sm mt-2">Try adjusting your search terms or filters.</p>
             </div>
           )}

           {!query && (
             <div className="flex flex-wrap gap-3 mt-4">
                <button className="px-4 py-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-level-1)] text-sm text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">react performance</button>
                <button className="px-4 py-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-level-1)] text-sm text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">tailwind templates</button>
                <button className="px-4 py-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-level-1)] text-sm text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">ui/ux trends 2024</button>
             </div>
           )}
        </div>
      </main>
    </div>
  );
}
