import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import client from '@/lib/contentful'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export async function getStaticPaths() {
  const entries = await client.getEntries({ content_type: 'blog' })
  const paths = entries.items.map((item) => ({
    params: { id: item.sys.id },
  }))
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const entry = await client.getEntry(params.id, {
    include: 10, // makes sure nested assets like images are resolved
  })

  return {
    props: {
      title: entry.fields.title ?? null,
      blog: entry.fields.blog ?? null,
      backgroundUrl: entry.fields.background?.fields?.file?.url ?? null,
    },
    revalidate: 60,
  }
}

// Custom renderer for rich text
const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title, description } = node.data.target.fields
      const imageUrl = file?.url
      const width = file?.details?.image?.width ?? 800
      const height = file?.details?.image?.height ?? 500

      if (!imageUrl) return null

      return (
        <div className="my-8">
          <Image
            src={`https:${imageUrl}`}
            alt={description || title || ''}
            width={width}
            height={height}
            className="w-full object-cover rounded"
          />
        </div>
      )
    },
  },
}

export default function BlogPost({ title, blog, backgroundUrl }) {
  return (
    <div>
      <Header />

      {/* Hero */}
      <div className="relative w-full h-[70vh]">
        {backgroundUrl && (
          <Image
            src={`https:${backgroundUrl}`}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="text-white text-4xl md:text-5xl font-serif italic text-center max-w-3xl leading-snug">
            {title}
          </h1>
        </div>
      </div>

      {/* Rich text body */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-a:text-amber-700">
          {blog && documentToReactComponents(blog, renderOptions)}
        </div>
      </main>

      <Footer />
    </div>
  )
}