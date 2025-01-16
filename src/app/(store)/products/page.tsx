import StoreBreadcrumb from "@/components/Store/StoreBreadcrumb";
import StoreCard from "@/components/Store/StoreCard";
import StoreGrid from "@/components/Store/StoreGrid";
import { VStack } from "@chakra-ui/react";
import { productData } from "@/data/storeData";
import { Suspense } from "react";

export default function Products() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VStack w="100%" gap={8}>
        <StoreBreadcrumb pageName={"Produtos"} />
        <StoreGrid>
          <StoreCard data={productData[0]} />
          <StoreCard data={productData[1]} />
        </StoreGrid>
      </VStack>
    </Suspense>
  );
}
