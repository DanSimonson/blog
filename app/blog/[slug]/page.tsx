import { client, urlFor } from "@/lib/sanity";
import { blogPost } from "@/lib/interface";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 30; // revalidate every 30 seconds

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

/* Page to display a single post. This is page is unused and user is redirected tohasnode blog page because of superior styling for showing code */
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
      <div className="mt-14 text-justify max-w-2xl m-auto prose-headings:my-5 prose-heading:text-2xl prose-p:mb-5 prose-p:leading-7 prose-li:list-disc prose-li:leading-7 prose-li:ml-4">
        <PortableText
          value={data.content}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value).url()}
        alt="Post"
        width={700}
        height={700}
      />
    ),
  },
};
