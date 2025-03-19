import React from 'react';
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { asImageSrc } from "@prismicio/client";
import Link from 'next/link'; // Import Link for client-side navigation

const Page = async () => {
  const client = createClient();
  const pages = await client.getAllByType("blog_test").catch(() => notFound());

  const blogData = pages.map(page => ({
    id: page.id, // Add the page ID for linking
    image: asImageSrc(page.data?.blogimage) ?? "",
    heading: page.data?.blogheading ?? "",
    paragraph: page.data?.blogparagraph ?? "", // Include paragraph for display
    slug: page.uid, // Assuming `uid` is the slug for the blog post
  }));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.slug}`} passHref> {/* Use Next.js Link for navigation */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <img
                src={blog.image}
                alt={blog.heading}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.heading}</h2>
                <p className="text-gray-700 mb-2">{blog.paragraph.slice(0, 100)}...</p> {/* Show only 2-3 lines */}
                <Link href={`/blog/${blog.slug}`} passHref>
                  <button className="mt-2 text-blue-500 hover:underline">Read More</button>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;