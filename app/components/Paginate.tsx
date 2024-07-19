"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
  const pathname = usePathname();
  //const { replace } = useRouter();
  const router = useRouter();
  const searchParams = useSearchParams();

  const nextPage = () => {
    if (page === 2) {
      return;
    } else {
      page++;
    }
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    //replace(`${pathname}?${params}`);
    router.push(`${pathname}?${params}`, { scroll: false });
  };
  const prevPage = () => {
    if (page === 0) {
      return;
    } else {
      page--;
    }
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    //replace(`${pathname}?${params}`);
    router.push(`${pathname}?${params}`, { scroll: false });
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
