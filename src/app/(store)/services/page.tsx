import StoreBreadcrumb from "@/components/Store/StoreBreadcrumb";
import StoreCard from "@/components/Store/StoreCard";
import StoreGrid from "@/components/Store/StoreGrid";
import { VStack } from "@chakra-ui/react";
import { serviceData } from "@/data/storeData";
export default function Services() {
  return (
    <VStack w="100%" gap={8}>
      <StoreBreadcrumb pageName={"Serviços"} />
      <StoreGrid>
        <StoreCard data={serviceData[0]} />
        <StoreCard data={serviceData[1]} />
      </StoreGrid>
    </VStack>
  );
}
