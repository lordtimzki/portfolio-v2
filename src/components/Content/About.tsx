const About = () => {
  return (
    <div className="max-w-2xl mx-auto py-6 px-4">
      <p className="mb-4 text-base leading-relaxed">
        Hey everyone! My name is Timothy, but everyone calls me Tim. Currently,
        I am a third-year Computer Science student at UC Irvine. I'm a fan of UI
        Design in websites and the ever-expanding technology used to make them.
        I became a fan of this after surfing through the web of my favorite
        anime and video games. Here is{" "}
        <a
          href="https://www.anime-shikanoko.jp/"
          target="_blank"
          className="text-purple-400 hover:text-purple-600 transition-colors"
        >
          one
        </a>{" "}
        of my favorite examples.
      </p>
      <p className="text-base leading-relaxed">
        Outside of programming, my usual hobbies include watching/reviewing
        anime and playing video games. Oh and I watch basketball as well.
      </p>
    </div>
  );
};

export default About;
