import React from "react";
import Image from "next/image";
const BlogDetails: React.FC = () => (
  <main className="bg-gray-50">
    {/* Header */}
    <header className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold">Blog Details</h1>
        <p className="mt-2">Home / Blog / Blog Details</p>
      </div>
    </header>

    {/* Blog Content */}
    <div className="max-w-6xl mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8">\
      {/* Main Content */}
      <article className="lg:col-span-2">
        <Image
          src="/blog.png"
          alt="Blog"
          className="rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold">
          10 Reasons To Do A Digital Detox Challenge
        </h2>
        <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
          <span>Feb 14, 2022</span>
          <span>3 Comments</span>
          <span>By Admin</span>
        </div>
        <p className="mt-6 text-gray-700 leading-7">
          Notus pretium nullis nulla commodo massa adipiscing in elementum
          magna congue condimentum placerat habitasse...
        </p>

        {/* Quote Section */}
        <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600 my-6">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </blockquote>

        <p className="text-gray-700 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...
        </p>

        {/* Comments Section */}
        <section className="mt-10">
          <h3 className="text-2xl font-bold">Comments (3)</h3>
          <div className="mt-4 space-y-6">
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <h4 className="font-bold">User {index + 1}</h4>
                    <p className="text-gray-500 text-sm">Jun 22, 2022</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Add Comment */}
        <form className="mt-8 space-y-4">
          <h3 className="text-2xl font-bold">Post a Comment</h3>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="border w-1/2 p-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="border w-1/2 p-2 rounded-lg"
            />
          </div>
          <textarea
            placeholder="Write a comment"
            className="border w-full p-2 rounded-lg"
            rows={4}
          ></textarea>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-lg">
            Post a comment
          </button>
        </form>
      </article>

      {/* Sidebar */}
      <aside>
        {/* Author Info */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="font-bold text-lg">Prince Miyako</h3>
          <p className="text-gray-500">Blogger / Photographer</p>
        </div>

        {/* Recent Posts */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
          {Array(3).fill(0).map((_, index) => (
            <div key={index} className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
              <div className="ml-4">
                <h4 className="font-bold">Recent Post {index + 1}</h4>
                <p className="text-gray-500 text-sm">Jun 22, 2022</p>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>

    
  </main>
);

export default BlogDetails;
