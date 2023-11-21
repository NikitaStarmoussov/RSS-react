import { useSearchParams } from 'next/navigation';

type SearchParams = {
  productName: string | null;
  query: string;
  page: string;
  limit: number;
  newOffset: number;
};

export const getSearchParams = (): SearchParams => {
  const searchParams = useSearchParams();
  const productName = searchParams.get("productName");
  const query = searchParams.get("q") || "";
  const page = searchParams.get("page") || "1";
  const limit = Number(searchParams.get("limit")) || 10;
  const newOffset = (Number(page) - 1) * limit;

  return {
    productName,
    query,
    page,
    limit,
    newOffset,
  };
};