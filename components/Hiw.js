const Hiw = () => {
  return (
    <section className="bg-black pt-28 pb-40 rounded-b-3xl" id="how">
      <h3 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center text-white">
        <p>How it works?</p>
      </h3>
      <div className="flex max-w-5xl mx-auto px-4">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube-nocookie.com/embed/12W37NDBzi0?si=q92rR_DGzzC6tQnP"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Hiw;
