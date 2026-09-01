import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'
import client from '@/lib/contentful'

export async function getStaticProps() {
  const entries = await client.getEntries({
    content_type: 'blog',
    order: '-sys.createdAt',
  })

  return {
    props: {
      posts: entries.items.map((item) => ({
        id: item.sys.id,
        createdAt: item.sys.createdAt,
        title: item.fields.title ?? null,
        description: item.fields.description ?? null,
        thumbnailUrl: item.fields.thumbnail?.fields?.file?.url ?? null,
      })),
    },
    revalidate: 60,
  }
}

export default function BlogPage({ posts }) {
  return (
    <div>
      <Header />
 <div
        style={{
          height: "60vh",
          backgroundImage: "url('/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 2rem",
          position: "relative",
        }}
      >
        {/* Dark overlay like in the screenshot */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="studio_bg"
          style={{ position: "relative", zIndex: 1, maxWidth: "600px" }}
        >
          <p
            style={{
              fontStyle: "italic",
              fontSize: "1.7rem",
              color: "#fff",
              lineHeight: 1.5,
              marginBottom: "1.5rem",
            }}
          >
            The latest from the studio - Interior Design Blog
          </p>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(255,255,255,0.4)",
              marginBottom: "1.5rem",
            }}
          />
        
        </div>
      </div>
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start border-b pb-16 group cursor-pointer"
            >
              {post.thumbnailUrl && (
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={`https:${post.thumbnailUrl}`}
                    alt={post.title}
                    fill
                    className="object-cover blog_thumb group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="flex flex-col justify-start gap-4">
                <h2 className="text-2xl font-serif text-gray-900 group-hover:text-amber-700 transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-400 uppercase tracking-widest">
                  {new Date(post.createdAt).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>

                {post.description && (
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                )}

                <span className="text-amber-700 group-hover:underline font-medium mt-2">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}