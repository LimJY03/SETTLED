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

const faq: { title: string; description: string }[] = [
  {
    title: 'Do you provide full-time or part-time domestic helper/maid?', 
    description: 'We will provide full-time maids who live with the employers. However, part-time/temporary / live out maids are only available on case by case basis.'
  },
  {
    title: 'Where do the maid come from? And what are their ethnics and religions?', 
    description: 'The maids from our agency are mainly Indonesian of Central and East Java, Lombok and Nusa Tenggara origins. They are Muslims, Christians or Hindus being the three main religions in Indonesia.'
  },
  {
    title: 'What are their ages?', 
    description: 'In accordance to the immigration law, all domestic helpers must be between 21 to 45 years of age for the first year hiring.'
  },
  {
    title: 'How long is the maid employment contract?', 
    description: 'The maid employment contract is binding for a period of two years upon which the maid shall be returned to the home country for a short leave. The contract can be renewed if the maid agreed to return to the same employer otherwise the employer is advised to secure the services of a different maid.'
  },
]

const feedbacks: { author: string; position: string; content: string; }[] = [
  {
    author: 'John Doe',
    position: 'IT Manager at Google',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsa perspiciatis excepturi. Molestiae facere tempore numquam ullam veritatis omnis voluptate. Possimus laudantium, eius nisi officia facilis amet qui deserunt? Odit!'
  },
  {
    author: 'John Doe',
    position: 'IT Manager at Google',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsa perspiciatis excepturi. Molestiae facere tempore numquam ullam veritatis omnis voluptate. Possimus laudantium, eius nisi officia facilis amet qui deserunt? Odit!'
  },
  {
    author: 'John Doe',
    position: 'IT Manager at Google',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsa perspiciatis excepturi. Molestiae facere tempore numquam ullam veritatis omnis voluptate. Possimus laudantium, eius nisi officia facilis amet qui deserunt? Odit!'
  },
  {
    author: 'John Doe',
    position: 'IT Manager at Google',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsa perspiciatis excepturi. Molestiae facere tempore numquam ullam veritatis omnis voluptate. Possimus laudantium, eius nisi officia facilis amet qui deserunt? Odit!'
  },
]

export default function Home() {
  return (
    <>
      {/* Cover */}
      <div className="grid grid-cols-2 h-[70vh] bg-amber-50 px-32">
        <div></div>
        <div className="my-auto flex flex-col gap-5">
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
          <div className="row-span-4 col-span-2 bg-amber-50">Image</div>
          <div className="row-span-3 col-span-4 flex flex-col gap-5 items-start py-auto">
            <h1 className="text-3xl tracking-tight font-bold">
              Our Services
            </h1>
            <span>Expert designers are here to offer to remodel and organize the living environment of clients based on the needs of the clients.</span>
            <Button asChild variant="outline"><Link href='/'>Explore Remodeling</Link></Button>
          </div>
          <div className="row-span-2 col-span-4 flex flex-col gap-5 col-start-1 items-end py-auto">
            <span>Increasing happiness by providing professional full-time maid, part-time maid and organizing helper/expert.</span>
            <Button asChild variant="outline"><Link href='/'>Explore Housekeeping & Organizing</Link></Button>
          </div>
          <div className="row-span-3 col-span-2 col-start-5 row-start-4 bg-blue-50">Image</div>
        </div>
      </div>
      <div className="grid grid-cols-2 p-32 bg-amber-50">
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
