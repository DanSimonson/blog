import { client, urlFor } from "@/lib/sanity";
import { blogPost } from "@/lib/interface";
import Image from "next/image";
import { PortableText } from "next-sanity";

export const revalidate = 30 // revalidate every 30 seconds

async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current =='${slug}']{
  "currentSlug": slug.current,
    title,
    content,
    titleImage,
}[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: blogPost = await getData(params.slug);
  
  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-red-800 dark:text-rose-700 font-semibold tracking-wide uppercase">
          Dan Simonson Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tigh sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlFor(data.titleImage).url()}
        alt="blog image"
        width={800}
        height={800}
        className="rounded-lg mt-8 border mx-auto"
        priority
      />
      <div className="mx-auto w-[50%] mt-16 prose-blue prose-lg">
        <PortableText  value={data.content} />
      </div>
    </div>
  );
}
