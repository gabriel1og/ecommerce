import { Heading, Text, VStack } from "@chakra-ui/react";
import { productData } from "@/data/storeData";
import StoreCard from "../Store/StoreCard";
import StoreGrid from "../Store/StoreGrid";

export default function Products() {
  return (
    <VStack gap={20}>
      <VStack gap={2}>
        <Heading fontSize="2.5rem">Our products</Heading>
        <Text fontSize="1.5rem" color="gray.400">
          Take a look on our products
        </Text>
      </VStack>
      <StoreGrid>
        <StoreCard data={productData[0]} />
        <StoreCard data={productData[1]} />
      </StoreGrid>
    </VStack>
  );
}
