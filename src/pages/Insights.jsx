import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight, BookOpen } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { blogPosts, blogCategories } from '../data/blog'

const avatarColors = { VS: '#E8622A', RS: '#3B6FE0', RK: '#10B981', JS: '#7C3AED', MD: '#0EA5E9', DM: '#F59E0B' }

const categoryEmoji = {
  Engineering: '⚙️',
  'AI/ML': '🤖',
  Design: '🎨',
  Frontend: '💻',
  Product: '📋',
}

function PageHero() {
  return (
    <section className="pt-32 pb-20 px-4" style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F4F0 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <span className="badge mb-6 mx-auto">Insights</span>
        <h1
          className="font-display font-bold mb-6"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#1A1A2E', letterSpacing: '-0.03em', lineHeight: '1.1' }}
        >
          Practical Notes from{' '}
          <span style={{ color: '#E8622A' }}>Real Projects</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed mx-auto" style={{ color: '#4A5568', maxWidth: '540px' }}>
          Short articles on how we build websites and apps for schools, shops, salons, and small businesses.
        </p>
      </div>
    </section>
  )
}

function FeaturedPost({ post }) {
  return (
    <Link
      to={`/insights/${post.id}`}
      className="block rounded-3xl overflow-hidden mb-10 group"
      style={{ background: 'white', border: '1px solid #E5E1D8', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', textDecoration: 'none' }}
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div
          className="h-56 md:h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ background: 'linear-gradient(135deg, #FEF3EE, #EDE9E1)', minHeight: '220px' }}
        >
          <div className="text-6xl">{post.icon || '📝'}</div>
        </div>
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge">Featured</span>
            <span className="badge-blue">{post.category}</span>
          </div>
          <h2 className="font-display font-bold text-xl md:text-2xl mb-3 group-hover:underline decoration-orange-400 decoration-2 underline-offset-4" style={{ color: '#1A1A2E', letterSpacing: '-0.02em' }}>
            {post.title}
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#4A5568' }}>{post.excerpt}</p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ background: avatarColors[post.avatar] || '#E8622A' }}
              >
                {post.avatar}
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: '#1A1A2E' }}>{post.author}</p>
                <p className="text-xs" style={{ color: '#8A96A3' }}>{post.date} · {post.readTime}</p>
              </div>
            </div>
            <span className="btn-primary text-xs px-4 py-2 inline-flex items-center gap-1">
              Read <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function BlogCard({ post, index, visible }) {
  return (
    <Link
      to={`/insights/${post.id}`}
      className="card group block"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${index * 80}ms`,
        transition: 'all 0.6s ease',
        textDecoration: 'none',
      }}
    >
      <div
        className="h-36 rounded-xl mb-5 flex items-center justify-center text-4xl transition-transform duration-300 group-hover:scale-105"
        style={{ background: 'linear-gradient(135deg, #FEF3EE 0%, #F5F4F0 100%)', border: '1px solid #E5E1D8' }}
      >
        {post.icon || categoryEmoji[post.category] || '💻'}
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className="badge-blue">{post.category}</span>
        <span className="flex items-center gap-1 text-xs" style={{ color: '#8A96A3' }}>
          <Clock size={11} /> {post.readTime}
        </span>
      </div>
      <h3 className="font-semibold text-base mb-2 leading-snug group-hover:text-orange-600 transition-colors" style={{ color: '#1A1A2E' }}>{post.title}</h3>
      <p className="text-sm leading-relaxed mb-5" style={{ color: '#4A5568' }}>{post.excerpt}</p>
      <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#F5F4F0' }}>
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ background: avatarColors[post.avatar] || '#E8622A' }}
          >
            {post.avatar}
          </div>
          <div>
            <p className="text-xs font-medium" style={{ color: '#1A1A2E' }}>{post.author}</p>
            <p className="text-xs" style={{ color: '#8A96A3' }}>{post.date}</p>
          </div>
        </div>
        <ArrowRight size={14} style={{ color: '#E8622A' }} className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Link>
  )
}

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, visible] = useScrollAnimation(0.05)

  const featured = blogPosts.find(p => p.featured)
  const filtered = blogPosts
    .filter(p => !p.featured)
    .filter(p => activeCategory === 'All' || p.category === activeCategory)

  return (
    <>
      <PageHero />
      <section className="section" style={{ background: '#F5F4F0' }}>
        <div className="container-custom">
          {featured && <FeaturedPost post={featured} />}

          <div className="flex flex-wrap gap-2 mb-8">
            {blogCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background: activeCategory === cat ? '#E8622A' : 'white',
                  color: activeCategory === cat ? 'white' : '#4A5568',
                  border: `1px solid ${activeCategory === cat ? '#E8622A' : '#E5E1D8'}`,
                  boxShadow: activeCategory === cat ? '0 4px 12px rgba(232,98,42,0.25)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} visible={visible} />
            ))}
          </div>

          {/* Newsletter */}
          <div
            className="mt-14 p-10 rounded-3xl text-center"
            style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #2D2D44 100%)' }}
          >
            <BookOpen size={32} className="mx-auto mb-4" style={{ color: '#E8622A' }} />
            <h3 className="font-display font-bold text-2xl mb-3" style={{ color: 'white', letterSpacing: '-0.02em' }}>
              Get new articles in your inbox
            </h3>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>Monthly digest of our best engineering insights. No spam.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <input type="email" placeholder="you@company.com" className="input-field flex-1" />
              <button className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

