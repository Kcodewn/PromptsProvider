import Feed from '@components/Feed';


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
      <br className="max-md:hidden"/>
      <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptpeii, the cutting-edge AI prompt generator,
        revolutionizes the creative realm by empowering individuals to craft, 
        explore, and exchange captivating prompts in the digital era. 
      </p>

      <Feed/>
    </section>
  )
}

export default Home