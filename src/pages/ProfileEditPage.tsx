import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';

export default function ProfileEditPage() {
  const navigate = useNavigate();
  // Using same mock data as defaults
  const [formData, setFormData] = useState({
    name: 'Jungho Kim',
    handle: '@junghokim',
    bio: 'Software Engineer exploring the frontend universe. Loves React, Typescript, and beautiful design systems.',
    website: 'https://junghokim.dev',
    avatarUrl: 'https://i.pravatar.cc/150?img=11',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate updating
    console.log('Updated Profile:', formData);
    navigate('/profile');
  };

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto py-12 px-6">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Edit Profile</h1>
          <p className="text-[var(--text-secondary)]">Manage your personal information, bio, and social links.</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl flex flex-col gap-8">
          
          {/* Avatar Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-[var(--border-default)]">
            <div className="size-24 rounded-full overflow-hidden border-2 border-[var(--border-hover)] bg-[var(--bg-level-2)]">
              {formData.avatarUrl ? (
                <img src={formData.avatarUrl} alt="Avatar Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[var(--text-tertiary)]">
                  <span className="material-symbols-outlined text-4xl">person</span>
                </div>
              )}
            </div>
            <div className="flex-1 w-full space-y-2">
              <label htmlFor="avatarUrl" className="block text-sm font-semibold text-[var(--text-secondary)]">Avatar URL</label>
              <input 
                type="url" 
                id="avatarUrl" 
                name="avatarUrl" 
                className="input-base w-full px-4 py-2.5 rounded-lg text-sm" 
                placeholder="https://example.com/avatar.jpg"
                value={formData.avatarUrl}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-secondary)]">Display Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                className="input-base w-full px-4 py-2.5 rounded-lg text-sm" 
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="handle" className="block text-sm font-semibold text-[var(--text-secondary)]">Handle (Username)</label>
              <input 
                type="text" 
                id="handle" 
                name="handle" 
                required
                className="input-base w-full px-4 py-2.5 rounded-lg text-sm" 
                placeholder="@janedoe"
                value={formData.handle}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="website" className="block text-sm font-semibold text-[var(--text-secondary)]">Website / Portfolio</label>
            <input 
              type="url" 
              id="website" 
              name="website" 
              className="input-base w-full px-4 py-2.5 rounded-lg text-sm" 
              placeholder="https://yourdomain.com"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <label htmlFor="bio" className="block text-sm font-semibold text-[var(--text-secondary)]">Bio</label>
              <span className="text-xs text-[var(--text-tertiary)]">{formData.bio.length} / 160</span>
            </div>
            <textarea 
              id="bio" 
              name="bio"
              rows={4} 
              maxLength={160}
              className="input-base w-full px-4 py-3 rounded-lg text-sm resize-none custom-scrollbar" 
              placeholder="Tell us a little bit about yourself..."
              value={formData.bio}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-[var(--border-default)] flex items-center justify-end gap-4">
            <button 
              type="button" 
              onClick={() => navigate('/profile')}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-level-2)] transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn-primary px-8 py-2.5 rounded-lg text-sm font-bold text-white transition-transform active:scale-95"
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </AppLayout>
  );
}
