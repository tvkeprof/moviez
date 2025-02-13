

// "use client"
// import {
//     Pagination,
//     PaginationContent,
//     PaginationEllipsis,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
//   } from "@/components/ui/pagination"
//   import { useSearchParams, useRouter, usePathname } from "next/navigation"
  
//    const  PaginationD =() => {

//     const searchParams = useSearchParams();
//     const router = useRouter();
//     const currentPage = Number(searchParams.get("page")) || 1;
//     const pathname = usePathname();

//     const handlePageChange = (page: number) => {
//         const param = new URLSearchParams(searchParams);
//         param.set("page", String(page));
        
//       };
//       const handleNext = () => {
//         if (currentPage) {
//           handlePageChange(currentPage + 1);
//         }
//       };
    
//     return (
//         <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious href="#" />
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#">1</PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#" isActive>
//               2
//             </PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#">3</PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationEllipsis />
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationNext href="#" onClick={handleNext}/>
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     )
//   }
//   export default PaginationD
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  import { usePathname, useRouter, useSearchParams } from "next/navigation";
  type total_page = {

  }
  export const DynamicPagination = ({ total_page }: { total_page: number }) => {
    const totalPage = total_page > 100 ? 100 : total_page;
  
    const searchParams = useSearchParams();
    const { push } = useRouter();
    const pathname = usePathname();
  
    const currentPage = Number(searchParams.get("page")) || 1;
  
    const handlePageChange = (page: number) => {
      const param = new URLSearchParams(searchParams);
      param.set("page", String(page));
      push(`${pathname}?${param.toString()}`);
    };
    const handleNext = () => {
      if (currentPage < totalPage) {
        handlePageChange(currentPage + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentPage > 1) {
        handlePageChange(currentPage - 1);
      }
    };
  
    return (
      <Pagination className="my-4">
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious onClick={handlePrevious} />
            </PaginationItem>
          )}
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(currentPage - 1)}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          )}
  
          <PaginationItem>
            <PaginationLink
              isActive
              onClick={() => handlePageChange(currentPage)}
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>
  
          {totalPage - 1 > currentPage && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          {totalPage > currentPage && (
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(totalPage)}>
                {totalPage}
              </PaginationLink>
            </PaginationItem>
          )}
  
          {totalPage > currentPage && (
            <>
              <PaginationItem>
                <PaginationNext onClick={handleNext} />
              </PaginationItem>
            </>
          )}
        </PaginationContent>
      </Pagination>
    );
  };
  