import { BlogPosts } from 'app/components/posts'



export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        my portfolio
      </h1>
      <p className="mb-4">
        {`as a passionate ai engineer i thrive on the thrill of creating innovative applications that push the boundaries of technology. 
        my love for community collaboration and teamwork fuels my drive to contribute to projects that make a difference. 
        beyond the world of code and algorithms, i am an artist at heart, infusing creativity into every aspect of my work. 
        Whether i’m developing cutting-edge ai solutions or crafting a piece of art, my goal is always to blend technical prowess with imaginative flair. 
        let's build something amazing together!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        research work
      </h1>
      <div className='my-8'>
        <p className="text-neutral-600 italic">
          Research publications and ongoing work will appear here soon.
        </p>
      </div>
    </section>
  )
}
