import { Heading, Text, VStack } from "@chakra-ui/react";
import { serviceData } from "@/data/storeData";
import StoreCard from "../Store/StoreCard";
import StoreGrid from "../Store/StoreGrid";

export default function Services() {
  return (
    <VStack gap={20}>
      <VStack gap={2}>
        <Heading fontSize="2.5rem">Our services</Heading>
        <Text fontSize="1.5rem" color="gray.400">
          Take a look on our services
        </Text>
      </VStack>
      <StoreGrid>
        <StoreCard data={serviceData[0]} />
        <StoreCard data={serviceData[1]} />
      </StoreGrid>
    </VStack>
  );
}
