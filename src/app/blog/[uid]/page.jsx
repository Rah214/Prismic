import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("blog_test", uid).catch(() => notFound());

  // Fetch additional blog data for blog2
  const blogData = {
    image: asImageSrc(page.data?.blogimage) ?? "",
    heading: page.data?.blogheading ?? "",
    paragraph: page.data?.blogparagraph ?? "",
    additionalImage: asImageSrc(page.data?.blog2image) ?? "",
    additionalHeading: page.data?.blog2heading ?? "",
    additionalParagraph: page.data?.blog2paragraph ?? "",
    additionalImage2: asImageSrc(page.data?.blog3image) ?? "",
    additionalHeading2: page.data?.blog3heading ?? "",
    additionalParagraph2: page.data?.blog3paragraph ?? "",
    additionalImage3: asImageSrc(page.data?.blog4image) ?? "",
    additionalHeading3: page.data?.blog4heading ?? "",
    additionalParagraph3: page.data?.blog4paragraph ?? "",
    additionalImage4: asImageSrc(page.data?.blog5image) ?? "",
    additionalHeading4: page.data?.blog5heading ?? "",
    additionalParagraph4: page.data?.blog5paragraph ?? "",
    additionalImage5: asImageSrc(page.data?.blog6image) ?? "",
    additionalHeading5: page.data?.blog6heading ?? "",
    additionalParagraph5: page.data?.blog6paragraph ?? "",
  };

  return (
    <>
      <div className="my-4 flex flex-col items-center justify-center max-w-[1000px] mx-auto bg-gradient-to-b from-green-800 to-black text-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center gap-6">
          <img
            src={blogData?.image}
            alt={blogData?.heading}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h1 className="text-3xl font-extrabold text-white mt-4 text-center md:text-4xl">
            {blogData?.heading ?? ""}
          </h1>
          <p className="text-lg text-gray-300 text-center md:text-xl">{blogData?.paragraph ?? ""}</p>
        </div>

        <SliceZone slices={page.data?.slices} components={components} />
      </div>
    </>
  );
}

export async function generateMetadata({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("blog_test", uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog_test");
  return pages.map((page) => ({ uid: page.uid }));
}
