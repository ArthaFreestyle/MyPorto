"use client"
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import { CardBody,CardContainer,CardItem } from "@/components/ui/3d-card";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
 

export const products = [
  {
    title: "PanganMerata",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/PanganMerata.png",
  },
  {
    title: "Jiniso",
    link: "https://cursor.sohttps://github.com/ArthaFreestyle/JINISO",
    thumbnail:
      "/Jiniso.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

const people = [
  {
    id: 1,
    name: "Laravel",
    designation: "PHP Framework",
    image:
      "/laravel.png",
  },
  {
    id: 2,
    name: "React JS",
    designation: "JavaScript Library",
    image:
      "/React.png",
  },
  {
    id: 3,
    name: "Next JS",
    designation: "JavaScript Framework",
    image:
      "/nextjs.png",
  },
  {
    id: 4,
    name: "Postgree SQL",
    designation: "Database",
    image:
      "/Postgre.png",
  },
  {
    id: 5,
    name: "Solidity",
    designation: "Blockchain",
    image:
      "/solidity.jpg",
  },
  {
    id: 6,
    name: "Tensorflow",
    designation: "Machine Learning",
    image:
      "/tf.png",
  },
];

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar/>
      <AuroraBackground>
        <div className="container mx-auto sm:mt-10 md:mt-20 px-4 sm:px-6 lg:px-8 min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen py-16 lg:py-0">
            
            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-4 lg:mb-0 lg:pr-12 pt-10">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">
                Hi! I'm Artha Gandhi Wardhana Aksa
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Full-Stack Developer<br className="hidden sm:block"/>
                <span className="sm:hidden"> </span>Based In Indonesia
              </h1>
            </div>
            
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pb-20">
              <div className="w-full max-w-[200px]  sm:max-w-[250px] md:max-w-md lg:max-w-md">
                <CardContainer className="inter-var w-full">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-3 sm:p-4 md:p-6 border">
                    <CardItem translateZ={70} rotateZ={-10} translateY={-10} translateX={-10} className="w-full">
                      <Image  
                        src="/profile.JPG"
                        alt="avatar"
                        className="w-full h-auto object-cover rounded-xl group-hover/card:shadow-xl"
                        width={400}
                        height={500}
                        priority
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>
      
      {/* Tech Stack Section */}
      <div className="w-full py-12 sm:py-16 lg:py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
            Tech Stack
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl overflow-x-auto">
              <div className="flex justify-center items-center min-w-max px-4">
                <AnimatedTooltip items={people} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full">
        <HeroParallax products={products}/>
      </div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-2 sm:top-4 lg:top-10 inset-x-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto z-50 px-2 sm:px-4", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-2 sm:space-y-4 text-xs sm:text-sm p-2 sm:p-4">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-xs sm:text-sm grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 lg:gap-6 p-2 sm:p-4 w-full max-w-xs sm:max-w-sm md:max-w-2xl">
            <ProductItem
              title="PanganMerata"
              href="https://olivia-vert.vercel.app/"
              src="/PanganMerata.png"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <div className="md:col-span-1">
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
            </div>
            <div className="md:col-span-1">
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-2 sm:space-y-4 text-xs sm:text-sm p-2 sm:p-4">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}