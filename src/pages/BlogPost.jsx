import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import { getBlogPost, blogPosts } from '../data/blog'

const avatarColors = { VS: '#E8622A', RS: '#3B6FE0', RK: '#10B981', JS: '#7C3AED', MD: '#0EA5E9', DM: '#F59E0B' }

export default function BlogPost() {
  const { id } = useParams()
  const post = getBlogPost(id)

  if (!post) return <Navigate to="/insights" replace />

  const related = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2)

  return (
    <>
      <section
        className="pt-28 pb-16 px-4"
        style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #FEF3EE 50%, #F5F4F0 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors"
            style={{ color: '#4A5568' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#E8622A' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#4A5568' }}
          >
            <ArrowLeft size={16} /> Back to Insights
          </Link>

          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="badge">{post.category}</span>
            {post.tags.slice(0, 2).map(tag => (
              <span key={tag} className="badge-gray text-xs">{tag}</span>
            ))}
          </div>

          <h1
            className="font-display font-bold mb-5"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#1A1A2E', letterSpacing: '-0.03em', lineHeight: '1.15' }}
          >
            {post.title}
          </h1>

          <p className="text-base leading-relaxed mb-8" style={{ color: '#4A5568' }}>{post.excerpt}</p>

          <div className="flex items-center gap-4 flex-wrap">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold text-sm"
              style={{ background: avatarColors[post.avatar] || '#E8622A' }}
            >
              {post.avatar}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#1A1A2E' }}>{post.author}</p>
              <p className="text-xs" style={{ color: '#8A96A3' }}>{post.authorRole}</p>
            </div>
            <span className="text-xs hidden sm:inline" style={{ color: '#E5E1D8' }}>|</span>
            <p className="flex items-center gap-1 text-xs" style={{ color: '#8A96A3' }}>
              <Clock size={12} /> {post.date} · {post.readTime}
            </p>
          </div>
        </div>
      </section>

      <article className="section pt-0" style={{ background: 'white' }}>
        <div className="max-w-3xl mx-auto px-4">
          <div
            className="w-full h-48 md:h-56 rounded-2xl flex items-center justify-center text-6xl mb-10"
            style={{ background: 'linear-gradient(135deg, #FEF3EE, #EDE9E1)', border: '1px solid #E5E1D8' }}
          >
            {post.icon || '📝'}
          </div>

          <div className="space-y-5">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: '#4A5568' }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t flex flex-wrap gap-2 items-start" style={{ borderColor: '#E5E1D8' }}>
            <Tag size={14} style={{ color: '#8A96A3', marginTop: 4, flexShrink: 0 }} />
            {post.tags.map(tag => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section" style={{ background: '#F5F4F0' }}>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-display font-bold text-xl mb-6" style={{ color: '#1A1A2E' }}>Related articles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map(p => (
                <Link
                  key={p.id}
                  to={`/insights/${p.id}`}
                  className="card group block transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="text-2xl mb-3 block">{p.icon}</span>
                  <h3 className="font-semibold text-sm mb-2" style={{ color: '#1A1A2E' }}>{p.title}</h3>
                  <p className="text-xs" style={{ color: '#8A96A3' }}>{p.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
