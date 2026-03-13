import { AppLayout } from "../components/layout/AppLayout"

export default function DesignSystemPage() {
  return (
    <AppLayout title="Design System Foundations" fullWidth>
      <div className="flex-1 min-w-0 bg-[var(--bg-level-0)] text-[var(--text-primary)] font-sans antialiased">
        <div className="relative border-b border-[var(--border-default)] overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none"></div>
          <div className="p-8 lg:p-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-default)] bg-[var(--bg-level-1)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
              <span className="text-xs font-medium text-[var(--text-secondary)]">Design System v1.0 • Foundations</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">Foundations</h1>
            <p className="text-lg text-[var(--text-tertiary)] max-w-2xl leading-relaxed">
              The core visual elements of the MyLog design system. These foundations ensure consistency across the platform, utilizing a linear aesthetic with subtle gradients and precise typography.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 divide-y divide-[var(--border-default)]">
          {/* Color Palette Section */}
          <section className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
              <div className="lg:w-64 flex-shrink-0">
                <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Color Palette</h2>
                <p className="text-[var(--text-tertiary)] text-sm leading-relaxed">
                  Our color system is built for dark mode first, using cool gray tones for backgrounds and vibrant indigo/violet for actions.
                </p>
              </div>
              <div className="flex-1 space-y-10">
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-4">Brand Colors</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="group p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-level-1)] hover:border-[var(--primary)] transition-colors">
                      <div className="h-24 rounded-lg bg-[var(--primary)] mb-4 shadow-[0_0_20px_-5px_var(--primary)]"></div>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-[var(--text-primary)] font-medium">Primary Blue</p>
                          <p className="text-[var(--text-tertiary)] text-sm">Action, Focus</p>
                        </div>
                        <div className="text-right">
                          <p className="font-mono text-xs text-[var(--text-tertiary)]">#5e6ad2</p>
                          <p className="font-mono text-xs text-[var(--text-tertiary)] opacity-50">hsl(234, 55%, 60%)</p>
                        </div>
                      </div>
                    </div>
                    <div className="group p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-level-1)] hover:border-[var(--accent)] transition-colors">
                      <div className="h-24 rounded-lg bg-[var(--accent)] mb-4 shadow-[0_0_20px_-5px_var(--accent)]"></div>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-[var(--text-primary)] font-medium">Accent Violet</p>
                          <p className="text-[var(--text-tertiary)] text-sm">Highlights, Toggles</p>
                        </div>
                        <div className="text-right">
                          <p className="font-mono text-xs text-[var(--text-tertiary)]">#7170ff</p>
                          <p className="font-mono text-xs text-[var(--text-tertiary)] opacity-50">hsl(240, 100%, 72%)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-4">Background Surface Levels</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-3 border border-[var(--border-default)] rounded-lg">
                      <div className="h-16 w-full rounded bg-[var(--bg-level-0)] mb-3 border border-[var(--border-default)]"></div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[var(--text-secondary)]">Level 0</span>
                        <span className="font-mono text-xs text-[var(--text-tertiary)]">#08090a</span>
                      </div>
                    </div>
                    <div className="p-3 border border-[var(--border-default)] rounded-lg">
                      <div className="h-16 w-full rounded bg-[var(--bg-level-1)] mb-3 border border-[var(--border-default)]"></div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[var(--text-secondary)]">Level 1</span>
                        <span className="font-mono text-xs text-[var(--text-tertiary)]">#121417</span>
                      </div>
                    </div>
                    <div className="p-3 border border-[var(--border-default)] rounded-lg">
                      <div className="h-16 w-full rounded bg-[var(--bg-level-2)] mb-3 border border-[var(--border-default)]"></div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[var(--text-secondary)]">Level 2</span>
                        <span className="font-mono text-xs text-[var(--text-tertiary)]">#1b1d22</span>
                      </div>
                    </div>
                    <div className="p-3 border border-[var(--border-default)] rounded-lg">
                      <div className="h-16 w-full rounded bg-[var(--bg-level-3)] mb-3 border border-[var(--border-default)]"></div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[var(--text-secondary)]">Level 3</span>
                        <span className="font-mono text-xs text-[var(--text-tertiary)]">#23252a</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
              <div className="lg:w-64 flex-shrink-0">
                <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Typography</h2>
                <p className="text-[var(--text-tertiary)] text-sm leading-relaxed">
                  We use Inter for UI text to maximize readability on screens, and JetBrains Mono for code snippets and technical data.
                </p>
              </div>
              <div className="flex-1 space-y-10">
                <div className="border border-[var(--border-default)] rounded-xl overflow-hidden">
                  <div className="grid grid-cols-12 bg-[var(--bg-level-1)] border-b border-[var(--border-default)] px-4 py-3 text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
                    <div className="col-span-3">Role</div>
                    <div className="col-span-3">Spec</div>
                    <div className="col-span-6">Example</div>
                  </div>
                  <div className="divide-y divide-[var(--border-default)] bg-[var(--bg-level-0)]">
                    <div className="grid grid-cols-12 px-4 py-6 items-center hover:bg-[var(--bg-level-1)] transition-colors">
                      <div className="col-span-3 text-sm text-[var(--text-tertiary)]">Display</div>
                      <div className="col-span-3 font-mono text-xs text-[var(--text-tertiary)]">Inter Bold / 36-48px</div>
                      <div className="col-span-6 text-4xl font-bold text-[var(--text-primary)] truncate">MyLog Design System</div>
                    </div>
                    <div className="grid grid-cols-12 px-4 py-6 items-center hover:bg-[var(--bg-level-1)] transition-colors">
                      <div className="col-span-3 text-sm text-[var(--text-tertiary)]">Heading 1</div>
                      <div className="col-span-3 font-mono text-xs text-[var(--text-tertiary)]">Inter SemiBold / 24-30px</div>
                      <div className="col-span-6 text-2xl font-semibold text-[var(--text-primary)] truncate">Foundations &amp; Tokens</div>
                    </div>
                    <div className="grid grid-cols-12 px-4 py-6 items-center hover:bg-[var(--bg-level-1)] transition-colors">
                      <div className="col-span-3 text-sm text-[var(--text-tertiary)]">Heading 2</div>
                      <div className="col-span-3 font-mono text-xs text-[var(--text-tertiary)]">Inter Medium / 20-24px</div>
                      <div className="col-span-6 text-xl font-medium text-[var(--text-primary)] truncate">Component Architecture</div>
                    </div>
                    <div className="grid grid-cols-12 px-4 py-6 items-center hover:bg-[var(--bg-level-1)] transition-colors">
                      <div className="col-span-3 text-sm text-[var(--text-tertiary)]">Body</div>
                      <div className="col-span-3 font-mono text-xs text-[var(--text-tertiary)]">Inter Regular / 16px</div>
                      <div className="col-span-6 text-base text-[var(--text-secondary)] truncate">Consistency is the key to a great user experience.</div>
                    </div>
                    <div className="grid grid-cols-12 px-4 py-6 items-center hover:bg-[var(--bg-level-1)] transition-colors">
                      <div className="col-span-3 text-sm text-[var(--text-tertiary)]">Caption</div>
                      <div className="col-span-3 font-mono text-xs text-[var(--text-tertiary)]">Inter Regular / 14px</div>
                      <div className="col-span-6 text-sm text-[var(--text-tertiary)] truncate">Last updated 2 hours ago</div>
                    </div>
                    <div className="grid grid-cols-12 px-4 py-6 items-center hover:bg-[var(--bg-level-1)] transition-colors">
                      <div className="col-span-3 text-sm text-[var(--text-tertiary)]">Code / Mono</div>
                      <div className="col-span-3 font-mono text-xs text-[var(--text-tertiary)]">JetBrains Mono / 13px</div>
                      <div className="col-span-6 font-mono text-xs text-[var(--accent)] truncate">npm install @mylog/ui-kit</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[var(--text-primary)] border border-[var(--border-default)]"></div>
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)]">Text Primary</p>
                      <p className="font-mono text-xs text-[var(--text-tertiary)]">#f7f8f8</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[var(--text-secondary)] border border-[var(--border-default)]"></div>
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)]">Text Secondary</p>
                      <p className="font-mono text-xs text-[var(--text-tertiary)]">#d0d6e0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Assets & Component Preview Section */}
          <section className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
              <div className="lg:w-64 flex-shrink-0">
                <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Brand Assets</h2>
                <p className="text-[var(--text-tertiary)] text-sm leading-relaxed">
                  Minimalist linear logo representation used across the application.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-12 flex flex-col items-center justify-center border border-[var(--border-default)] rounded-xl bg-[var(--bg-level-1)] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-dim)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-[1px]">
                        <div className="w-full h-full rounded-xl bg-[var(--bg-level-1)] flex items-center justify-center">
                          <span className="material-symbols-outlined text-[var(--text-primary)] text-3xl">auto_stories</span>
                        </div>
                      </div>
                      <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">MyLog</span>
                    </div>
                    <div className="absolute bottom-4 left-4 font-mono text-xs text-[var(--text-tertiary)]">On Dark Surface</div>
                  </div>
                  <div className="p-12 flex flex-col items-center justify-center border border-[var(--border-default)] rounded-xl bg-[var(--bg-level-0)] relative">
                    <div className="absolute inset-0 grid-bg opacity-10"></div>
                    <div className="relative z-10">
                      <div className="relative w-20 h-20 border border-[var(--primary)] border-dashed rounded-xl flex items-center justify-center">
                        <div className="absolute -top-2 -left-2 w-1 h-1 bg-[var(--accent)]"></div>
                        <div className="absolute -top-2 -right-2 w-1 h-1 bg-[var(--accent)]"></div>
                        <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-[var(--accent)]"></div>
                        <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-[var(--accent)]"></div>
                        <span className="material-symbols-outlined text-[var(--primary)] text-3xl">auto_stories</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 font-mono text-xs text-[var(--text-tertiary)]">Grid Alignment</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core UI Components (Design System 2) */}
          <section className="p-8 lg:p-12 bg-[var(--bg-page)]">
            <div className="mb-12 border-b border-[var(--border-base)] pb-6">
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">Core UI Components</h2>
              <p className="mt-2 text-[var(--text-secondary)]">Buttons, Inputs, Dialogs — Dark Mode Linear Style</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-[var(--text-primary)] border-l-2 border-[var(--primary)] pl-3">1. Buttons & Controls</h3>
                <div className="glass-panel p-6 rounded-lg space-y-8">
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">Primary & Secondary</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <button className="btn-primary text-white px-5 py-2.5 rounded text-sm font-medium hover:brightness-110 transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">edit_square</span>
                        Write Post
                      </button>
                      <button className="bg-transparent border border-[var(--border-base)] text-[var(--text-secondary)] px-5 py-2.5 rounded text-sm font-medium hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)] transition-colors">
                        Cancel
                      </button>
                      <button className="bg-[var(--bg-input)] border border-[var(--border-base)] text-[var(--text-tertiary)] px-5 py-2.5 rounded text-sm font-medium cursor-not-allowed">
                        Disabled
                      </button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">Social Login</p>
                    <div className="flex flex-col gap-3 w-full sm:w-80">
                      <button className="flex items-center justify-center gap-3 w-full bg-[#FEE500] text-[#000000] px-4 py-2.5 rounded text-sm font-medium hover:opacity-90 transition-opacity">
                        <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                        Continue with Kakao
                      </button>
                      <button className="flex items-center justify-center gap-3 w-full bg-white text-gray-700 border border-gray-200 px-4 py-2.5 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                        <img alt="G" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvTjDmGtZLA6dYp8tP0UIiaSrfeCXW2ItC9avAG7VotpHQAHorKn_WfVidh_G0nXgTzuMm-kfS6XQ4uRyMK6OupU2LVNtvCLIOmyg-It0A1dR4pm5lERkx2cGDZgJBCgee18O3QfZbwYgyn_lBrZZ0kN5ndYALfaioH5I5IO1xFacfaLc6R1nK6ehDYa6vYxuJ_lyCphiKW9weywUuQNwFieujWbKSaWg4pk7R8lTtFABIzBObRleO0f_5EwtFM07oA-d46BKk1Fxc"/>
                        Continue with Google
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-medium text-[var(--text-primary)] border-l-2 border-[var(--primary)] pl-3">2. Input Fields</h3>
                <div className="glass-panel p-6 rounded-lg space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm text-[var(--text-secondary)]">Email Address</label>
                    <div className="input-base rounded px-3 py-2.5 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[var(--text-tertiary)] text-[20px]">mail</span>
                      <input className="bg-transparent border-none w-full text-sm placeholder-[var(--text-tertiary)] focus:ring-0 p-0 text-[var(--text-primary)]" placeholder="name@example.com" type="text"/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm text-[var(--text-secondary)]">Password</label>
                    <div className="input-base rounded px-3 py-2.5 flex items-center gap-2 group">
                      <span className="material-symbols-outlined text-[var(--text-tertiary)] text-[20px]">lock</span>
                      <input className="bg-transparent border-none w-full text-sm focus:ring-0 p-0 text-[var(--text-primary)]" type="password" defaultValue="Password123"/>
                      <button className="text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </div>
                    <p className="text-xs text-[var(--text-tertiary)]">Must be at least 8 characters long.</p>
                  </div>
                  <div className="pt-2">
                    <div className="input-base rounded-full px-4 py-2 flex items-center gap-2 w-full max-w-md">
                      <span className="material-symbols-outlined text-[var(--text-secondary)] text-[20px]">search</span>
                      <input className="bg-transparent border-none w-full text-sm placeholder-[var(--text-tertiary)] focus:ring-0 p-0 text-[var(--text-primary)]" placeholder="Search posts..." type="text"/>
                      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-[var(--border-base)] bg-[var(--bg-page)]">
                        <span className="text-[10px] text-[var(--text-secondary)] font-medium font-sans">⌘K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-medium text-[var(--text-primary)] border-l-2 border-[var(--primary)] pl-3">3. Selection & Tags</h3>
                <div className="glass-panel p-6 rounded-lg space-y-8">
                  <div className="space-y-3">
                    <label className="block text-sm text-[var(--text-secondary)]">Categories & Tags</label>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-[var(--primary)] bg-[var(--primary-muted)] text-[var(--primary)]">
                        #DesignSystem
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-[var(--border-base)] bg-[var(--bg-input)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                        #UIUX
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-[var(--border-base)] bg-[var(--bg-input)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                        #Frontend
                      </span>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-[var(--border-base)] border-dashed bg-transparent text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] hover:border-[var(--text-secondary)] cursor-text">
                        <span className="material-symbols-outlined text-[14px] mr-1">add</span>
                        Add tag
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 relative">
                    <label className="block text-sm text-[var(--text-secondary)]">Category Selector</label>
                    <div className="input-base w-full max-w-xs rounded px-3 py-2.5 flex items-center justify-between cursor-pointer hover:border-[var(--border-hover)] group">
                      <span className="text-sm text-[var(--text-primary)]">Development</span>
                      <span className="material-symbols-outlined text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)]">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-medium text-[var(--text-primary)] border-l-2 border-[var(--primary)] pl-3">4. Feedback Components</h3>
                <div className="glass-panel p-6 rounded-lg space-y-8">
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">Loading Indicator</p>
                    <div className="flex items-center gap-4 p-4 rounded bg-[var(--bg-input)] border border-[var(--border-base)]">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-[var(--border-base)] border-t-[var(--primary)]"></div>
                      <span className="text-sm text-[var(--text-secondary)]">Saving changes...</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">Destructive Dialog</p>
                    <div className="glass-panel rounded-lg shadow-2xl max-w-sm mx-auto overflow-hidden border-none ring-1 ring-[var(--border-base)]">
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--destructive-bg)] flex items-center justify-center">
                            <span className="material-symbols-outlined text-[var(--destructive)]">warning</span>
                          </div>
                          <div>
                            <h4 className="text-[var(--text-primary)] font-medium">Delete this post?</h4>
                            <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                                This action cannot be undone. This will permanently delete the post "My First Log" and remove data from our servers.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="px-6 py-4 bg-[var(--bg-input)] flex justify-end gap-3 border-t border-[var(--border-base)]">
                        <button className="px-4 py-2 rounded text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--border-base)] transition-colors">Cancel</button>
                        <button className="px-4 py-2 rounded text-sm font-medium bg-[var(--destructive)] text-white hover:bg-red-600 transition-colors shadow-lg shadow-red-900/20">Delete Post</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-[var(--border-base)]">
              <h3 className="text-xl font-medium text-[var(--text-primary)] mb-6">Component Context: Write Post Header</h3>
              <div className="glass-panel rounded-xl p-8 border border-[var(--border-base)]">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="input-base w-48 rounded px-3 py-2 flex items-center justify-between cursor-pointer text-sm text-[var(--text-secondary)]">
                      <span>Select Category</span>
                      <span className="material-symbols-outlined text-[18px]">expand_more</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[var(--text-tertiary)] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">cloud_done</span>
                        Saved
                      </span>
                      <div className="h-4 w-[1px] bg-[var(--border-base)]"></div>
                      <button className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-2">Preview</button>
                      <button className="btn-primary text-white px-4 py-1.5 rounded text-sm font-medium hover:brightness-110">Publish</button>
                    </div>
                  </div>
                  <div>
                    <input className="w-full bg-transparent border-none text-3xl md:text-4xl font-bold text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:ring-0 p-0" placeholder="Enter post title" type="text"/>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="material-symbols-outlined text-[var(--text-tertiary)] text-[20px] mr-2">label</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-[var(--border-base)] bg-[var(--bg-input)] text-[var(--text-primary)]">
                      Design <button className="ml-2 text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]">×</button>
                    </span>
                    <input className="bg-transparent border-none text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:ring-0 w-32 p-0" placeholder="Add tags..." type="text"/>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* List & Cards Components (Design System 3) */}
          <section className="p-8 lg:p-12 bg-[var(--bg-color)]">
            <div className="mb-12 border-b border-[var(--border-color)] pb-6">
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">Lists, Cards & Media</h2>
              <p className="mt-2 text-[var(--text-secondary)]">Volume 02: Complex List, Cards & Media Components</p>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">Post Card</h3>
                  <span className="text-xs font-mono text-[var(--text-tertiary)]">COMPONENT: POST_CARD</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <article className="group relative flex flex-col h-full bg-[var(--surface-color)] border border-[var(--border-color)] rounded-xl overflow-hidden card-hover cursor-pointer">
                    <div className="relative w-full aspect-[16/9] bg-[#1a1b1e] overflow-hidden">
                      <img alt="Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBasPwdWwPGjKqezU48i2ZjRHO9FKqdhFo6VS9QOpfUmfq24J37EI9FDi3jT0kUXl86LOl9ZDC8v5g-xnoJH9BlPRrAO00K44fEnXz0WyA8-DxZrm9iCEeT_cbqm-LSLJ1DX04cT-DYWRy4_JF9LWTqebzMZQw59End23imgF7-FtJratrI_XQCfDytImRnEZ_oc9S-kWMep8u9wYL576cKn9N3Bo8ok_N7E-ntNmv6ab1kI8GU8elF0CBWW6Z-e0Qv7iC-raSFD-uI" />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-md text-xs font-medium text-white">
                        Design
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] leading-tight mb-2 group-hover:text-[var(--primary-color)] transition-colors">
                        The Evolution of Linear Design Systems in 2024
                      </h4>
                      <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mb-4 flex-1">
                        Exploring how dark mode aesthetics and high contrast borders are shaping modern web interfaces.
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)] mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 overflow-hidden">
                            <img alt="Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOMu5YXPGZGvhaqM1f5_hVmEoKasqk59KnbPF4G_MPbXyMQ_RSgujVMpRpLRZ0QccZ6U2OEmoit4o5RPsX_7CvVziWZXqqStdYRWer4kgisru_JtXjtmpNMEHWHGFKeKro4F5I07KeoK0vrkAQ_7x-mQndllJTK169-9NxsG_PLdcxZOrk58UBBiAbkHbBD68JQ_8iKhNUu38GkXpx7epcJzNjPLhgo4zlBuc2cJ7Rg0sjCyh5BEDR0tUrYneZylO3_UWvJHU9KuHe" />
                          </div>
                          <span className="text-xs text-[var(--text-secondary)] font-medium">Alex Chen</span>
                        </div>
                        <span className="text-xs text-[var(--text-tertiary)]">Oct 24</span>
                      </div>
                    </div>
                  </article>
                  <article className="group relative flex flex-col h-full bg-[var(--surface-color)] border border-[var(--border-color)] rounded-xl overflow-hidden card-hover cursor-pointer">
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-2 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-medium">Engineering</span>
                      </div>
                      <h4 className="text-xl font-bold text-[var(--text-primary)] leading-snug mb-3 group-hover:text-[var(--primary-color)] transition-colors">
                        Optimizing React Rendering Performance
                      </h4>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                        A deep dive into useMemo, useCallback, and React.memo. Learn when to use them and when they might be premature optimization.
                      </p>
                      <div className="flex items-center gap-2 mb-6 flex-wrap">
                        <span className="text-xs text-[var(--text-tertiary)]">#react</span>
                        <span className="text-xs text-[var(--text-tertiary)]">#performance</span>
                        <span className="text-xs text-[var(--text-tertiary)]">#javascript</span>
                      </div>
                      <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)] mt-auto">
                        <div className="w-8 h-8 rounded-full bg-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] text-xs font-bold">
                          JD
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-[var(--text-primary)] font-medium">Jane Doe</span>
                          <span className="text-[10px] text-[var(--text-tertiary)]">2 hours ago · 5 min read</span>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="group relative flex flex-col h-full bg-[var(--surface-color)] border border-[var(--border-color)] rounded-xl overflow-hidden card-hover cursor-pointer">
                    <div className="relative w-full h-48 bg-[#1a1b1e] overflow-hidden">
                      <img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOeBP9cxfLZ0mNu5jHNugOloBM3_xHWGCANjP1Cs3hM6Vo9mTOBi5WkCgO154jpsReAjoLj62Huer2ZgSfJBxEIfvDQSAtrReRpg4BivnjFVQQXHN13Fhgu-GlpVuCCeHMUXLgLwWUL-0WbrE3BKknoA6lKFh2X819m2nBfC25zZ350n2HlJyMStN6AnfExY7VKJ_1XTYGXCULP_Uf0Lu0xE71oohct3NTOIpDZDi2jin8ze7dvLtq01QVY2UQFltf499yjJVxl6Rk" />
                    </div>
                    <div className="p-5 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-[var(--primary-color)]">Lifestyle</span>
                        <span className="material-symbols-outlined text-[var(--text-tertiary)] text-[16px]">bookmark</span>
                      </div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary-color)] transition-colors">Digital Nomad Setup 2024</h4>
                      <div className="mt-auto pt-4 flex items-center gap-2">
                        <img alt="Avatar" className="w-6 h-6 rounded-full object-cover border border-[var(--border-color)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdX3gH3NN5ACsHnUD-sc5GNraY9DIXHMufvYvtSfSIW4owNKbzqZp30PFrS6fXkvK9EcH-kWEX950JxIG9zhzh_3-Do5vNou9yWIIzLIBgfu4wnWJEqWU-vidHluTir0MgFXourJ8NavlMm64n9cavlx8FTfSJ64nZ_idBlyDipGapnrTLhXW67UvG-RYGzd2TnbQcjOB7AscO8tOmgvRId1Qy9t2-ym2yT4WE0SG3AvvdYpOKC0UYf9N6aT8tzfx2FkOOdntJMQ5E" />
                        <span className="text-xs text-[var(--text-secondary)]">Sarah Smith</span>
                        <span className="text-xs text-[var(--text-tertiary)] ml-auto">Dec 01</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">Comment List</h3>
                  <span className="text-xs font-mono text-[var(--text-tertiary)]">COMPONENT: COMMENT_ITEM</span>
                </div>
                <div className="bg-[var(--surface-color)] border border-[var(--border-color)] rounded-xl p-6 max-w-3xl">
                  <h4 className="text-sm font-semibold text-[var(--text-secondary)] mb-6 uppercase tracking-wider">Discussion (3)</h4>
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <img alt="User" className="w-10 h-10 rounded-full border border-[var(--border-color)] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFRovejACB9Fgq74aKg3GTANsxDXtR9aBwU1hrt1lud0yWo6O8rrIZgc9HC0c-6MZfe8-xUUp_ExDnD0OlrlYEkmNWS7rpR2NfWI9pW3ZVM31aPWNx88fhWfmLsW_KjQ_ox8RNYVwkbkYZIM1ILXm282ZADlhaE7oCBSjkCGbUVW6cLeoWthPX8ClfSJN4vUKjkNvpC_V-ijR9lxTZHCdQpcOmwnaBg7faJDEHAJOb1Rl8rO4QBuaP1QNGgj-kJ78ME_dyTCw5yN-a" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[var(--text-primary)]">Michael Scott</span>
                          <span className="text-xs text-[var(--text-tertiary)]">2 days ago</span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                          <button className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] material-symbols-outlined text-[18px]">edit</button>
                          <button className="text-[var(--text-tertiary)] hover:text-[var(--danger-color)] material-symbols-outlined text-[18px]">delete</button>
                        </div>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                        This article really helped me understand the nuances of the new framework. Specifically the section about state management was eye-opening. Great work!
                      </p>
                      <button className="text-xs font-medium text-[var(--text-tertiary)] hover:text-[var(--primary-color)] flex items-center gap-1 transition-colors">
                        <span className="material-symbols-outlined text-[14px]">chat_bubble</span> Reply
                      </button>
                      <div className="mt-6 flex gap-4 border-l-2 border-[var(--border-color)] pl-4">
                        <div className="flex-shrink-0">
                          <img alt="User" className="w-8 h-8 rounded-full border border-[var(--border-color)] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvY0wfC899vlGFp99KXwjgCymxWyhrmdvVmIt6wQvfwJm0lOlHFZi-9IUATCxUsxvk5NXt3R3pZUizdTblZAMrYOIlzg2m1Ob62vcmwd6X967-8kcD19dnY0deqOnAfOi2LvWVappTifIGuXUT_A1z9G6JQng5SUWEDDAvIMOMqxJPLXp7qsCZ1Y9r4PsiZpkvXXvsKGmfDwt0kMS93qe3w1iIrkiMVYhPU6zQ5akkF2mNYpd6QswL7Vd7ApDtfUAKswKbPIVwuqp3" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-semibold text-[var(--text-primary)]">Pam Beesly</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--primary-color)] text-white font-medium">Author</span>
                            <span className="text-xs text-[var(--text-tertiary)]">1 day ago</span>
                          </div>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                            Thanks Michael! I'm glad you found it useful. State management is definitely tricky at first.
                          </p>
                          <button className="text-xs font-medium text-[var(--text-tertiary)] hover:text-[var(--primary-color)]">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-[var(--border-color)] my-6"></div>
                  <div className="flex gap-4 group opacity-60">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[var(--border-color)] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[var(--text-tertiary)]">person</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[var(--text-secondary)] line-through">Deleted User</span>
                          <span className="text-xs text-[var(--text-tertiary)]">5 days ago</span>
                        </div>
                      </div>
                      <p className="text-sm text-[var(--text-tertiary)] italic">
                        This comment has been deleted by the administrator.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">Notifications</h3>
                    <span className="text-xs font-mono text-[var(--text-tertiary)]">COMPONENT: NOTIFICATION_ITEM</span>
                  </div>
                  <div className="bg-[var(--surface-color)] border border-[var(--border-color)] rounded-xl overflow-hidden divide-y divide-[var(--border-color)]">
                    <div className="p-4 flex gap-4 bg-[var(--surface-hover)] hover:bg-[#232428] transition-colors cursor-pointer relative">
                      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                          <span className="material-symbols-outlined text-[20px]">chat</span>
                        </div>
                      </div>
                      <div className="flex-1 pr-4">
                        <p className="text-sm text-[var(--text-primary)] leading-normal">
                          <span className="font-semibold">Sarah Connor</span> commented on your post <span className="text-[var(--text-secondary)]">"The Future of AI"</span>
                        </p>
                        <span className="text-xs text-[var(--primary-color)] mt-1 font-medium block">2 mins ago</span>
                      </div>
                    </div>
                    <div className="p-4 flex gap-4 hover:bg-[var(--surface-hover)] transition-colors cursor-pointer">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
                          <span className="material-symbols-outlined text-[20px]">favorite</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-[var(--text-secondary)] leading-normal">
                          <span className="font-medium text-[var(--text-primary)]">John Wick</span> liked your comment.
                        </p>
                        <span className="text-xs text-[var(--text-tertiary)] mt-1 block">1 hour ago</span>
                      </div>
                    </div>
                    <div className="p-4 flex gap-4 hover:bg-[var(--surface-hover)] transition-colors cursor-pointer">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-[var(--border-color)] text-[var(--text-secondary)] flex items-center justify-center border border-[var(--border-color)]">
                          <span className="material-symbols-outlined text-[20px]">settings</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-[var(--text-secondary)] leading-normal">
                          Your password was successfully changed.
                        </p>
                        <span className="text-xs text-[var(--text-tertiary)] mt-1 block">Yesterday</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">Image Picker</h3>
                    <span className="text-xs font-mono text-[var(--text-tertiary)]">COMPONENT: IMAGE_PICKER</span>
                  </div>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-[var(--border-color)] rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-[var(--text-secondary)] hover:bg-[var(--surface-hover)] transition-all cursor-pointer group h-48">
                      <div className="w-12 h-12 rounded-full bg-[var(--surface-color)] border border-[var(--border-color)] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                        <span className="material-symbols-outlined text-[var(--text-secondary)] text-[24px]">add_photo_alternate</span>
                      </div>
                      <h4 className="text-sm font-medium text-[var(--text-primary)] mb-1">Click to upload or drag and drop</h4>
                      <p className="text-xs text-[var(--text-tertiary)]">SVG, PNG, JPG or GIF (max. 3MB)</p>
                    </div>
                    <div className="relative group rounded-xl overflow-hidden border border-[var(--border-color)] aspect-video bg-[#1a1b1e]">
                      <img alt="Uploaded Preview" className="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVqyFpvsxC_GWy79cwpIzA7p6e6jxJvupVvKV1zZvySKl2WYiHeqHcddWbqi7eg_cEUf9AYaCLkd7893ca-fuhIH17Hz6H6icMaU6eEp8J3jJaS1kN6Nlt87GlyY6-ybaxipVHp9-vlgKxPw3zPF1EEbGuGg0a2ZbsVUiaooneiAI4jx1CjkmsdKVdCrbwLKEIo9THJQeXo7K2-zurwJ9CdQYcMTOn5rB274SrxveqrHPokXvvoRhnev3ULnLSGfMN0C65T_gKwgiM" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-sm">
                        <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur transition-all hover:scale-105">
                          <span className="material-symbols-outlined">visibility</span>
                        </button>
                        <button className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/40 border border-red-500/30 text-red-200 backdrop-blur transition-all hover:scale-105">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                      <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-md rounded border border-white/10 text-[10px] text-white font-mono">
                        cover_image_v2.jpg • 2.4MB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </AppLayout>
  )
}
