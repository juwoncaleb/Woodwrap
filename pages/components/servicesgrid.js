export default function ServicesGrid() {
  const services = [
    {
      title: "Portfolio",
      desc: "An overview of some of our projects for our private clients.",
      img: "/serv1.png",
    },
    {
      title: "Studio",
      desc: "An overview of our studio and the founders behind the brand.",
      img: "/serv2.png",
    },
    {
      title: "Automation",
      desc: "Creative interior solutions tailored to your lifestyle.",
      img: "/serv3.png",
    },
    {
      title: "Consult",
      desc: "Professional guidance to elevate your space.",
      img: "/serv4.png",
    },
  ];

  return (
    <div className="max-w-[950px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 px-4 py-10">
      {services.map((item, index) => (
        <div
          key={index}
          className="relative group overflow-hidden h-[90vh]"
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center px-6">
            <h2 className="text-4xl md:text-5xl font-serif mb-2">
              {item.title}
            </h2>

            <p className="service_Des text-sm md:text-base max-w-md mb-6 opacity-90">
              {item.desc}
            </p>

            <button className="border border-white px-8 py-3 mb-6 text-xs tracking-[0.2em] hover:bg-white hover:text-black transition">
              EXPLORE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}