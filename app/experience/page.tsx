import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Experience',
  description: 'My work experience.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">my experiences</h1>
      <BlogPosts />
    </section>
  )
}
