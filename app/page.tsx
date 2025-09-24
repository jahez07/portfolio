import { BlogPosts } from 'app/components/posts'



export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        who i am
      </h1>
      <p className="mb-4">
        {`i follow a palestinian jew from the first century, involved in a culture war. He went up against a rigid religious establishment and a pagan empire. The two powers, often at odds, conspired together to eliminate him.
        His reponse? Not to fight, but to give his life his enimies, and to point to that gift as of proof of his love. Among the last words he spoke before death were these: "Father, forgive them, for they do not know what they are doing."`}
      </p>

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        my portfolio
      </h1>
      <p className="mb-4">
        {`as a passionate ai engineer i thrive on the thrill of creating innovative applications that push the boundaries of technology. 
        my love for community collaboration and teamwork fuels my drive to contribute to projects that make a difference. 
        beyond the world of code and algorithms, i am an artist at heart, infusing creativity into every aspect of my work. 
        whether i’m developing cutting-edge ai solutions or crafting a piece of art, my goal is always to blend technical prowess with imaginative flair. 
        let's build something amazing together!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
      
    </section>
  )
}
