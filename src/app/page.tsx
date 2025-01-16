"use client";

import Products from "@/components/Home/Products";
import Services from "@/components/Home/Services";
import Welcome from "@/components/Home/Welcome";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100%" direction="column" gap={40}>
      <Welcome />
      <Products />
      <Services />
      <Box />
    </Flex>
  );
}
