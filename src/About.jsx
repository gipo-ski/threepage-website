const About = () => {
  return (
    <main className="flex flex-col text-center h-svh">
      <h1 className="text-8xl font-extrabold text-center text-red-700">
        About
      </h1>
      <div className="text-xl mt-10 mx-auto w-8/12 px-10 py-8 rounded bg-slate-200">
        <h2 className="text-3xl text-red-400 mt-10 mb-4 p-4">
          We are [giposki]. We build awesome websites.
        </h2>
        <p className="text-start w-3/4 mx-auto">
          This is a boilerplate for my 3page websites. This could be customised
          to fit other clients' requirements as all funtionalities work
          perfectly!
        </p>
        <br />
        <p className="text-center text-white bg-slate-500 p-4 w-3/4 mx-auto">
          Each Paragraph is purposely styled differently! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Harum sit expedita placeat
          distinctio enim excepturi amet! Nesciunt debitis dignissimos impedit
          quidem eos dolorem expedita iure, deleniti quia atque soluta. Quae.
        </p>
        <br />
        <p className="text-end font-mono w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at
          tenetur nulla dolor quas sunt dolore expedita magni asperiores
          quisquam dicta doloremque et impedit nesciunt enim, nostrum cumque
          soluta ratione.
        </p>
        <br />
        <span className="font-bold text-teal-600">GIPOSKI</span>
      </div>
    </main>
  );
};

export default About;
