import { Link } from 'react-router-dom';

export default function PostDetailPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-level-0)] text-[var(--text-primary)] font-sans antialiased">
      {/* Fixed Header */}
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
        <div className="flex items-center gap-6">
           <div className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-level-1)] cursor-text text-sm">
             <span className="material-symbols-outlined text-[var(--text-tertiary)] text-[18px]">search</span>
             <span className="text-[var(--text-tertiary)] mr-8">Search...</span>
             <span className="text-[10px] text-[var(--text-secondary)] font-medium border border-[var(--border-default)] rounded px-1">⌘K</span>
           </div>
           <Link to="/write" className="btn-primary flex items-center gap-2 px-4 py-2 rounded text-sm text-white font-medium hover:brightness-110 transition-all">
             <span className="material-symbols-outlined text-[18px]">edit_square</span>
             <span className="hidden sm:inline">글쓰기</span>
           </Link>
           <div className="w-9 h-9 rounded-full bg-[var(--bg-level-2)] border border-[var(--border-default)] overflow-hidden cursor-pointer hover:border-[var(--primary)] transition-colors">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFRovejACB9Fgq74aKg3GTANsxDXtR9aBwU1hrt1lud0yWo6O8rrIZgc9HC0c-6MZfe8-xUUp_ExDnD0OlrlYEkmNWS7rpR2NfWI9pW3ZVM31aPWNx88fhWfmLsW_KjQ_ox8RNYVwkbkYZIM1ILXm282ZADlhaE7oCBSjkCGbUVW6cLeoWthPX8ClfSJN4vUKjkNvpC_V-ijR9lxTZHCdQpcOmwnaBg7faJDEHAJOb1Rl8rO4QBuaP1QNGgj-kJ78ME_dyTCw5yN-a" alt="User Profile" className="w-full h-full object-cover" />
           </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12 lg:py-20">
        
        {/* Article Header & Metadata */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-[var(--primary)] bg-[var(--primary-muted)] text-[var(--primary-color)]">
              DesignSystem
            </span>
            <span className="text-sm text-[var(--text-tertiary)] flex items-center gap-1 block">
               <span className="material-symbols-outlined text-[16px]">schedule</span> 10 min read
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[var(--text-primary)] mb-8">
            The Evolution of Linear Design Systems in 2024
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-y border-[var(--border-default)] py-6">
             <div className="flex items-center gap-4">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOMu5YXPGZGvhaqM1f5_hVmEoKasqk59KnbPF4G_MPbXyMQ_RSgujVMpRpLRZ0QccZ6U2OEmoit4o5RPsX_7CvVziWZXqqStdYRWer4kgisru_JtXjtmpNMEHWHGFKeKro4F5I07KeoK0vrkAQ_7x-mQndllJTK169-9NxsG_PLdcxZOrk58UBBiAbkHbBD68JQ_8iKhNUu38GkXpx7epcJzNjPLhgo4zlBuc2cJ7Rg0sjCyh5BEDR0tUrYneZylO3_UWvJHU9KuHe" alt="Author" className="w-12 h-12 rounded-full border border-[var(--border-default)] object-cover" />
               <div>
                  <div className="text-base font-semibold text-[var(--text-primary)]">Alex Chen</div>
                  <div className="text-sm text-[var(--text-tertiary)]">Senior UX Engineer • Oct 24, 2024</div>
               </div>
             </div>
             
             {/* Action Buttons */}
             <div className="flex items-center gap-3">
               <button className="w-10 h-10 rounded-full border border-[var(--border-default)] bg-[var(--bg-level-1)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
               </button>
               <button className="w-10 h-10 rounded-full border border-[var(--border-default)] bg-[var(--bg-level-1)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all">
                  <span className="material-symbols-outlined text-[20px]">bookmark</span>
               </button>
               <button className="w-10 h-10 rounded-full border border-[var(--border-default)] bg-[var(--bg-level-1)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all">
                  <span className="material-symbols-outlined text-[20px]">share</span>
               </button>
             </div>
          </div>
        </header>

        {/* Hero Image */}
        <figure className="mb-12 relative w-full aspect-video rounded-2xl overflow-hidden border border-[var(--border-default)]">
           <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBasPwdWwPGjKqezU48i2ZjRHO9FKqdhFo6VS9QOpfUmfq24J37EI9FDi3jT0kUXl86LOl9ZDC8v5g-xnoJH9BlPRrAO00K44fEnXz0WyA8-DxZrm9iCEeT_cbqm-LSLJ1DX04cT-DYWRy4_JF9LWTqebzMZQw59End23imgF7-FtJratrI_XQCfDytImRnEZ_oc9S-kWMep8u9wYL576cKn9N3Bo8ok_N7E-ntNmv6ab1kI8GU8elF0CBWW6Z-e0Qv7iC-raSFD-uI" alt="Hero representation of linear design" className="w-full h-full object-cover" />
           <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-xs text-[var(--text-tertiary)] text-center font-mono">
              High contrast UI showcasing the dark mode linear aesthetic
           </figcaption>
        </figure>

        {/* Article Body (Markdown Content Simulation) */}
        <article className="prose prose-invert prose-lg max-w-none mb-20 text-[var(--text-secondary)]">
          <p className="lead text-xl text-[var(--text-primary)] font-medium leading-relaxed mb-8">
            Exploring how dark mode aesthetics and high contrast borders are shaping modern web interfaces. The linear style is more than just a trend; it's a focus on performance and readability.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-12 mb-6 tracking-tight">The Core Principles</h2>
          <p className="mb-6 leading-relaxed">
            In 2024, design systems have moved towards explicit structures. Gone are the soft, diffuse shadows of the early flat design era. Now, we define surfaces using crisp, 1px borders mapped to specific semantic variables like <code>var(--border-default)</code>.
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-3">
             <li><strong className="text-[var(--text-primary)]">Dark Mode First</strong>: Building palettes that emit light rather than block it.</li>
             <li><strong className="text-[var(--text-primary)]">Minimal Gradients</strong>: Using gradients sparingly for accents (like <code>--primary-glow</code>) instead of structural elements.</li>
             <li><strong className="text-[var(--text-primary)]">Typography</strong>: Strict reliance on highly legible sans-serif fonts (like Inter) paired with mono fonts for data density.</li>
          </ul>

          <blockquote className="border-l-4 border-[var(--primary)] pl-6 py-2 my-8 italic text-xl text-[var(--text-primary)] bg-[var(--bg-level-1)]/50 rounded-r-lg">
             "A good design system doesn't just look good; it writes good code. The tokens must map 1:1 with developer mental models."
          </blockquote>

          <h3 className="text-xl font-medium text-[var(--text-primary)] mt-10 mb-4">Implementation using Tailwind</h3>
          <div className="bg-[#0d1117] border border-[var(--border-default)] rounded-xl overflow-hidden mb-8">
             <div className="flex items-center px-4 py-2 bg-[var(--bg-level-1)] border-b border-[var(--border-default)] text-xs text-[var(--text-tertiary)] font-mono">
                tailwind.config.css
             </div>
             <pre className="p-4 overflow-x-auto text-[13px] font-mono leading-relaxed text-[#c9d1d9]"><code className="language-css">
{`@theme {
  --color-bg-level-0: var(--bg-level-0);
  --color-border-default: var(--border-default);
  --color-primary: var(--primary);
  /* Use explicit tokens over arbitrary hex codes */
}`}
             </code></pre>
          </div>
          
          <p className="mb-6 leading-relaxed">
             This approach ensures that when the brand swaps its primary color, or adjustments are needed for contrast accessibility, the update flows cleanly through the system. By strictly utilizing CSS variables inside tailwind configuration, we unlock true themeability.
          </p>
        </article>

        {/* Tags Block */}
        <div className="flex flex-wrap gap-3 mb-16 pb-16 border-b border-[var(--border-default)]">
           <span className="px-4 py-1.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-level-1)] text-sm text-[var(--text-secondary)] hover:border-[var(--text-secondary)] cursor-pointer transition-colors">
              #WebDesign
           </span>
           <span className="px-4 py-1.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-level-1)] text-sm text-[var(--text-secondary)] hover:border-[var(--text-secondary)] cursor-pointer transition-colors">
              #TailwindCSS
           </span>
           <span className="px-4 py-1.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-level-1)] text-sm text-[var(--text-secondary)] hover:border-[var(--text-secondary)] cursor-pointer transition-colors">
              #React
           </span>
        </div>

        {/* Comments Section */}
        <section id="comments">
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] tracking-tight">Discussion <span className="text-[var(--text-tertiary)] text-lg font-normal ml-2">(3)</span></h3>
           </div>
           
           {/* Write Comment Box */}
           <div className="glass-panel p-6 rounded-xl border border-[var(--border-default)] mb-10 flex gap-4">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFRovejACB9Fgq74aKg3GTANsxDXtR9aBwU1hrt1lud0yWo6O8rrIZgc9HC0c-6MZfe8-xUUp_ExDnD0OlrlYEkmNWS7rpR2NfWI9pW3ZVM31aPWNx88fhWfmLsW_KjQ_ox8RNYVwkbkYZIM1ILXm282ZADlhaE7oCBSjkCGbUVW6cLeoWthPX8ClfSJN4vUKjkNvpC_V-ijR9lxTZHCdQpcOmwnaBg7faJDEHAJOb1Rl8rO4QBuaP1QNGgj-kJ78ME_dyTCw5yN-a" alt="User" className="w-10 h-10 rounded-full border border-[var(--border-default)] object-cover shrink-0" />
               <div className="flex-1 space-y-3">
                  <textarea 
                     className="w-full bg-transparent border-none text-[var(--text-primary)] text-sm resize-none focus:ring-0 placeholder-[var(--text-tertiary)] p-0" 
                     placeholder="Share your thoughts..." 
                     rows={3}
                  ></textarea>
                  <div className="flex justify-end pt-3 border-t border-[var(--border-default)]">
                     <button className="btn-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:brightness-110 transition-all shadow-[var(--primary-glow)]">
                        게시 (Post)
                     </button>
                  </div>
               </div>
           </div>

           {/* Comment List */}
           <div className="space-y-8">
              <div className="flex gap-4 group">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOMu5YXPGZGvhaqM1f5_hVmEoKasqk59KnbPF4G_MPbXyMQ_RSgujVMpRpLRZ0QccZ6U2OEmoit4o5RPsX_7CvVziWZXqqStdYRWer4kgisru_JtXjtmpNMEHWHGFKeKro4F5I07KeoK0vrkAQ_7x-mQndllJTK169-9NxsG_PLdcxZOrk58UBBiAbkHbBD68JQ_8iKhNUu38GkXpx7epcJzNjPLhgo4zlBuc2cJ7Rg0sjCyh5BEDR0tUrYneZylO3_UWvJHU9KuHe" alt="User" className="w-10 h-10 rounded-full border border-[var(--border-default)] object-cover shrink-0" />
                 <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                       <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[var(--text-primary)]">Michael Scott</span>
                          <span className="text-xs text-[var(--text-tertiary)]">2 days ago</span>
                       </div>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                       This article really helped me understand the nuances of the new framework. Specifically the section about state management was eye-opening. Great work!
                    </p>
                    <button className="text-xs font-medium text-[var(--text-tertiary)] hover:text-[var(--primary)] flex items-center gap-1 transition-colors">
                       <span className="material-symbols-outlined text-[14px]">chat_bubble</span> Reply
                    </button>
                    
                    {/* Reply thread */}
                    <div className="mt-6 flex gap-4 border-l-2 border-[var(--border-default)] pl-4">
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvY0wfC899vlGFp99KXwjgCymxWyhrmdvVmIt6wQvfwJm0lOlHFZi-9IUATCxUsxvk5NXt3R3pZUizdTblZAMrYOIlzg2m1Ob62vcmwd6X967-8kcD19dnY0deqOnAfOi2LvWVappTifIGuXUT_A1z9G6JQng5SUWEDDAvIMOMqxJPLXp7qsCZ1Y9r4PsiZpkvXXvsKGmfDwt0kMS93qe3w1iIrkiMVYhPU6zQ5akkF2mNYpd6QswL7Vd7ApDtfUAKswKbPIVwuqp3" alt="User" className="w-8 h-8 rounded-full border border-[var(--border-default)] object-cover shrink-0" />
                       <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                             <span className="text-sm font-semibold text-[var(--text-primary)]">Alex Chen</span>
                             <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--primary)] text-white font-medium">Author</span>
                             <span className="text-xs text-[var(--text-tertiary)]">1 day ago</span>
                          </div>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                             Thanks Michael! I'm glad you found it useful. State management is definitely tricky at first.
                          </p>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>
      
      {/* Scroll to Top mobile (Optional helper) */}
      <div className="fixed bottom-6 right-6 lg:hidden z-50">
        <button className="w-12 h-12 bg-[var(--bg-level-1)] border border-[var(--border-default)] rounded-full flex items-center justify-center text-[var(--text-primary)] shadow-lg hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
          <span className="material-symbols-outlined text-2xl">arrow_upward</span>
        </button>
      </div>

    </div>
  );
}
