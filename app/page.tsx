import { client, urlFor } from "@/lib/sanity";
import { simpleBlogCard } from "@/lib/interface";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LampDemo } from "@/components/ui/lamp";
import Paginate from "./components/Paginate";
import { SiteFooter } from "./components/SiteFooter";
import About from "./components/About";
import CardsContainer from "./components/CardsContainer";

export const revalidate = 30; // revalidate every 30 seconds

async function getData(lastPageNum: number = 1) {
  const query = `*[_type == "blog"] | order(_createdAt, desc) [${lastPageNum}...${lastPageNum + 3}] {
  _id, title, _createdAt, content, smallDescription, titleImage, "currentSlug": slug.current
}`;

  const data = await client.fetch(query, { lastId: lastPageNum });
  return data;
}

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const page = Number(searchParams?.page ?? 0);
  const data: simpleBlogCard[] = await getData(page);

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
                {post.title}
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

                <Link
                  href={`https://mariposablog.hashnode.dev/${post.currentSlug}`}
                  target="_blank"
                >
                  <Button className="w-full mt-7">Read More</Button>
                  {/* 
                      Code for using my app instead of hashnode for displayin
                      single post. May be implemented later with new styles for post page.
                     ******************************
                  <Button asChild className="w-full mt-7 border border-white">
                    <Link href={`/blog/${post.currentSlug}`}>Read More</Link> 
                  </Button> */}
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <Paginate />
      <About />
      <CardsContainer />
      <SiteFooter />
    </>
  );
}
