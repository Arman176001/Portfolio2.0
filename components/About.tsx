"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function About() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="mt-7 h-full py-10 px-11" id="about">
      <h2 className="pl-11 pb-8 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        About Me
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    category: "Education",
    title: "B.Tech in\nComputer Science Engineering",
    src: "/books.jpg",
  },
  {
    category: "Dream",
    title: "To build Artificial General Intelligence",
    src: "/butterfly.jpg",
  },
  {
    category: "Vision",
    title: "I believe AI is a step in Human Evolution",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    category: "Hobbies",
    title: "I love Video Editing, Photography and Art.",
    src: "/camera.jpg",
  },
];
