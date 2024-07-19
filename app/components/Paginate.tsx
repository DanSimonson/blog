"use client";

import { MouseEventHandler, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type NextRequest } from "next/server";
import { useUrl } from "nextjs-current-url";
import Link from "next/link";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

let page = 0;

function Paginate() {
  const { href } = useUrl() ?? {};
  console.log("href: ", href);
  const pathname = usePathname();
  //console.log("pathname: ", pathname);
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  //console.log("searchParams: ", searchParams);
  //const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page === 2) {
      return;
    } else {
      page++;
    }
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    replace(`${pathname}?${params}`);
    //router.push({ href });
    /************************************ */
    console.log("params after page: ", params);
    console.log("pathname: ", pathname);
    console.log("page.toString: ", page.toString());
    console.log("href: ", href);
    const myurl = `${pathname}?${searchParams}`;
    console.log("pathname+searchParams url: ", myurl);
  };
  const prevPage = () => {
    if (page === 0) {
      return;
    } else {
      page--;
    }
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={prevPage} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>{page}</PaginationLink>
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem>
          <PaginationNext onClick={nextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default Paginate;
function preventDefault() {
  throw new Error("Function not implemented.");
}
