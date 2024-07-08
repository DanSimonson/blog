import { client } from "@/lib/sanity";
import { simpleBlogCard } from "@/lib/interface";
async function getData() {
  const query = `*[_type=='blog']| order(_createAt desc){
  title,
    smallDescription,
    "currentSlug": slug.current
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  console.log("data: ", data);
  return (
    <div>
      <h1>index page </h1>
    </div>
  );
}
