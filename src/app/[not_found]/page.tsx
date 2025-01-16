"use client";

import { Button } from "@/components/ui/button";
import { VStack, Heading, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Custom404() {
  return (
    <VStack w="100%" justifyContent="center" alignItems="center" gap={6}>
      <Heading fontSize="3rem">404</Heading>

      <Heading>(Página não encontrada)</Heading>
      <Flex>
        <Link href="/">
          <Button
            colorPalette="blue"
            variant="subtle"
            p="5px 15px"
            fontSize="1rem"
          >
            Voltar para o site
          </Button>
        </Link>
      </Flex>
    </VStack>
  );
}
