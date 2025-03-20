"use client"

import { useState } from "react"
import DynamicFrameLayout from "../components/DynamicFrameLayout"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [headerSize] = useState(1.2) 
  const [textSize] = useState(0.8) 

  return (
    <div
      className={`min-h-screen bg-[#141414] flex items-center justify-center p-8 ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
       
        <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-16">
            <h1
              className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%]`}
              style={{ fontSize: `${4 * headerSize}rem` }}
            >
              Brand
              <br />
              Designer
              <br />
              at Luma?
            </h1>
            <div
              className={`${inter.className} flex flex-col gap-12 text-white/50 text-sm font-light max-w-[300px]`}
              style={{ fontSize: `${0.875 * textSize}rem` }}
            >
              <div className="space-y-6">
                <div className="h-px bg-white/10 w-full" />
                <p>
                  Luma is looking to hire a multi-disciplinary Brand Designer to develop and maintain the brand identity
                  and communicate the story of Luma to the world. Alongside members of the design team using product and
                  research insights, you will help shape and define Luma's brand across product surfaces, social media,
                  merchandise, marketing website, launch campaigns as well as other new channels.
                </p>
                <p>
                  You will use a combination of graphic design, motion design, web design and video production/editing
                  skills across traditional and innovative tools to communicate in visually compelling and impactful
                  ways.
                </p>
                <p>Here are some of our favorite works so far.</p>
                <div className="h-px bg-white/10 w-full" />
              </div>
            </div>
            <Link
              href="https://lumalabs.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 relative opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LumaLogo%201-MA3upjPymxFHKoHJgpdAUfZMeKGq3i.png"
                alt="Luma Logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>
          <a
            href="https://lumalabs.ai/join?role=5d274587-f8fd-4f53-a5b6-8f85d586e1aa"
            className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply
          </a>
        </div>

        <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
          <DynamicFrameLayout />
        </div>
      </div>
    </div>
  )
}

