import React from "react";

const Banner = () => {
  return (
    <div className="h-[80vh] container mx-auto  ">
      <div className="carousel w-full h-full">
        {banners.map((d, idx) => (
          <div
            key={idx}
            style={{
              backgroundImage: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%), url('/images/banner/${
                idx + 1
              }.jpg')`,
            }}
            id={`slide${idx+1}`}
            className="carousel-item bg-cover   bg-top  bg-no-repeat relative w-full h-full"
          >

            <div className="w-full flex justify-center items-start m-28 flex-col">
            <h1 className="text-5xl text-primary font-semibold">{d.title}</h1>
            <div className="mt-16">
              <button className="btn btn-primary w-32 border-white mr-4">Click</button>
              <button className="btn btn-secondary w-32 border-primary">Click</button>
            </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">

              <a href={d.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={d.next} className="btn btn-circle">
                ❯
              </a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Best Price in Town",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];
