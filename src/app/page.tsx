'use client';

import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from 'react';

export default function Home() {

  const [faq, setFaq] = useState<{ title: string; description: string }[]>([]);
  const [feedbacks, setFeedbacks] = useState<{ author: string; position: string; content: string; }[]>([]);

  // Get FAQ
  useEffect(() => {
    fetch('/mockData/faq.json')
      .then((res) => res.json())
      .then((data) => setFaq(data))
      .catch((err) => console.error('Failed to load FAQ data', err));
  })
  
  // Get Reviews
  useEffect(() => {
    fetch('/mockData/reviews.json')
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.error('Failed to load Feedback data', err));
  })

  return (
    <>
      {/* Cover */}
      <div className="grid grid-cols-2 h-[70vh] px-32 bg-cover bg-center bg-[linear-gradient(to_bottom,rgba(136,81,23,0.5),rgba(136,81,23,0.9)),url(/img/Uncategorized/pexels-max-vakhtbovych-6957083.jpg)]">
        <div></div>
        <div className="my-auto flex flex-col gap-5 text-white">
          {/* <span className="mb-12">
            Featured Modelling  <a className="hover:text-amber-800 ease-in-out duration-200" href='https://www.domesiconcepthouse.cz/en/' target="_blank">
              domesiconcepthouse
            </a>
          </span> */}
          <h1 className="text-6xl tracking-tight font-bold">
            The Scent of Wood
          </h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsa perspiciatis excepturi. Molestiae facere tempore numquam ullam veritatis omnis voluptate. Possimus laudantium, eius nisi officia facilis amet qui deserunt? Odit!
          </span>
        </div>
      </div>
      {/* About Us */}
      <div className="flex flex-col gap-5 text-center p-32">
        <h1 className="text-3xl tracking-tight font-bold">
          About Us
        </h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsa perspiciatis excepturi. Molestiae facere tempore numquam ullam veritatis omnis voluptate. Possimus laudantium, eius nisi officia facilis amet qui deserunt? Odit!
        </span>
      </div>
      {/* Services */}
      <div className="p-32">
        <div className="grid grid-cols-6 grid-rows-6 gap-8">
          <Image
            alt='housekeeping'
            src='/img/Uncategorized/pexels-max-vakhtbovych-6186848.jpg'
            className="row-span-4 col-span-2 aspect-3/4 object-cover"
            width={5000}
            height={1000}
            priority
          />
          <div className="row-span-3 col-span-4 flex flex-col gap-5 items-start justify-center h-full">
            <h1 className="text-3xl tracking-tight font-bold">
              Our Services
            </h1>
            <span>Expert designers are here to offer to remodel and organize the living environment of clients based on the needs of the clients.</span>
            <Button asChild variant="outline"><Link href='/'>Explore Remodeling</Link></Button>
          </div>
          <div className="row-span-2 col-span-3 flex flex-col gap-5 col-start-1 items-end justify-center h-full">
            <span className="text-end">Increasing happiness by providing professional full-time maid, part-time maid and organizing helper/expert.</span>
            <Button asChild variant="outline"><Link href='/'>Explore Housekeeping & Organizing</Link></Button>
          </div>
          <Image
            alt='housekeeping'
            src='/img/Uncategorized/pexels-karolina-grabowska-4239032.jpg'
            className="row-span-3 col-span-3 col-start-4 row-start-4 object-cover"
            width={5000}
            height={1000}
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-2 p-32 bg-[rgb(136,81,23)] text-white">
        <h1 className="text-3xl tracking-tight font-bold mt-8">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {faq.map((elem) => (
            <AccordionItem key={elem.title} value={elem.title}>
              <AccordionTrigger className="text-lg tracking-tight font-medium">{elem.title}</AccordionTrigger>
              <AccordionContent>{elem.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="flex flex-col gap-5 text-center p-32">
        <h1 className="text-3xl tracking-tight font-bold">
          Customer Reviews
        </h1>
        <span>
          These are our 5-Star reviews from our customers.
        </span>
        <Carousel className="w-full mt-8">
          <CarouselContent className="w-1/3">
            {feedbacks.map((elem, index) => (
              <CarouselItem key={index}>
                <div className="py-5 px-1">
                  <Card className="hover:scale-105 duration-200">
                    <CardContent className="flex flex-col aspect-2/1 text-justify p-6">
                      <span className="text-sm text-slate-700 mb-5">{elem.content}</span>
                      <h1 className="text-lg font-bold">{elem.author}</h1>
                      <span className="font-semibold">{elem.position}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer" />
        </Carousel>
      </div>
    </>
  );
}
