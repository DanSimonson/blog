import { client, urlFor } from "@/lib/sanity";
import { simpleBlogCard } from "@/lib/interface";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LampDemo } from "@/components/ui/lamp";
import { SiteFooter } from "./components/SiteFooter";
import About from "./components/About";

export const revalidate = 30; // revalidate every 30 seconds

async function getData() {
  const query = `*[_type=='blog']| order(_createAt desc){
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <>
      <div className="w-[100vw] h-[85vh] top-0 overflow-hidden">
        <LampDemo />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {data.map((post, idx) => (
          <CardContainer key={idx} className=" w-96">
            <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-2">
              <CardItem
                translateZ="100"
                className="text-lg font-bold text-neutral-600 dark:text-white"
              >
                <Image
                  width={500}
                  height={500}
                  alt="post image"
                  src={urlFor(post.titleImage).url()}
                  className="rounded-t-lg h-[200px] object-cover"
                />
                <h3 className="text-lg line-clamp-2">{post.title}</h3>
                <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {post.smallDescription}
                </p>
                <Button asChild className="w-full mt-7">
                  <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                </Button>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <About />
      <SiteFooter />
    </>
  );
}
