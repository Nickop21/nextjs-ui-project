"use client";
import Link from "next/link";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      id: 1,
      images_url: "/images/guitar.jpg",
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      id: 2,
      images_url: "/images/classical-music.jpg",
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      id: 3,
      images_url: "/images/drumming.jpg",
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      id: 4,
      images_url: "/images/edm.jpg",
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    {
      id: 5,
      images_url: "/images/piano.jpg",
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      id: 6,
      images_url: "/images/vocalist.jpg",
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];
  interface data {
    id: number;
    images_url: string;
    title: string;
    description: string;
    slug: string;
    isFeatured: boolean;
  }

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10 flex items-center flex-wrap justify-center gap-6">
          {featuredWebinars.map((data: data) => (
            <div className="w-sm-[50%] w-sm-[25%] " key={data?.id}>
              <DirectionAwareHover imageUrl={data.images_url}>
                <p className="font-bold text-xl mb-5">{data.title}</p>
                <p className="font-normal text-sm">{data.description}</p>
              </DirectionAwareHover>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}>
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-2 transition duration-400">
              Viw All Webinars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
