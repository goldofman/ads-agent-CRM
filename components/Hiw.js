const Hiw = () => {
  return (
    <section className="bg-black py-28" id="how">
      <h3 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center text-white">
        <p>How it works?</p>
      </h3>
      <div className="flex max-w-5xl mx-auto px-4">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1018833878?h=7249e4bca9"
          width="100%"
          height="400"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default Hiw;
