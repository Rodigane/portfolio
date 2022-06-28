export default function Tech() {
  return (
    <container className="container mt-52 md:mt-64 mx-auto text-white  flex justify-between items-center    lg:px-24 w-full  ">
      <section className="w-full ">
        <h2 className="text-5xl md:text-6xl mx-8">Tech i like to work with</h2>

        <div className="flex flex-col mt-10 mx-8  w-full md:w-3/4">
          <h4 className="text-3xl md:text-4xl mb-6 ">Front end</h4>
          <p>I love building a web app with React JS or Next JS.</p>
          <p>
            For state management, in a complex app, I'm using Redux with Redux
            toolkit and RTK query to request API
          </p>
          <p>I'm used to Material UI, and Tailwind CSS. </p>
          <p>For some projects, i'm using Wordpress.</p>
          <h4 className="text-3xl md:text-4xl mt-6 mb-6 ">Back end</h4>
          <p>
            For now, I'm working with Javascript-based technologies. To build
            rest API, in general, I'm using Node JS with Express JS.
          </p>
          <p>
            I'm using both SQL and NoSQL databases, such as PostgreSQL or Mongo
            DB.
          </p>
          <p>For unit testing, I'm using Jest.</p>
          <p className="mt-10 text-center">
            <strong>PERN / MERN</strong> Stack.
          </p>
        </div>
      </section>
    </container>
  );
}
