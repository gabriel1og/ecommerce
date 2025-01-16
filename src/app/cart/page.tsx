"use client";

import {
  Badge,
  Box,
  Card,
  Flex,
  HStack,
  VStack,
  Text,
  Heading,
  Stack,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import osso from "@/images/osso.png";
import banho from "@/images/banho.png";

export default function Cart() {
  const value1 = 13.99;
  const value2 = 129.99;
  const totalValue = (value1 + value2).toFixed(2);

  return (
    <Flex w="100%" flexDirection="column">
      <Stack direction={{ base: "column", md: "row" }} gap={6}>
        <VStack gap={6} w="100%" h="100%">
          <Card.Root
            flexDirection="row"
            w="100%"
            gap={8}
            p="20px"
            position="relative"
          >
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Image
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                }}
                src={osso.src}
                alt="Osso de plástico"
              />
            </Box>

            <Box>
              <Card.Body h="100%" justifyContent="space-between">
                <VStack h="100%" alignItems="start">
                  <Card.Title
                    fontWeight={600}
                    fontSize={{ base: "1rem", md: "1.4rem" }}
                  >
                    Osso de plástico
                  </Card.Title>
                  <Card.Description>Brinquedo para cães</Card.Description>
                </VStack>

                <HStack mt="4">
                  <Badge colorPalette="orange" py={1} px={3} rounded="2xl">
                    Cachorro
                  </Badge>
                  <Badge colorPalette="green" py={1} px={3} rounded="2xl">
                    Promoção
                  </Badge>
                </HStack>
              </Card.Body>
            </Box>
          </Card.Root>

          <Card.Root
            flexDirection="row"
            w="100%"
            gap={8}
            p="20px"
            position="relative"
          >
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Image
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                }}
                src={banho.src}
                alt="Banho"
              />
            </Box>

            <Box>
              <Card.Body h="100%" justifyContent="space-between">
                <VStack h="100%" alignItems="start">
                  <Card.Title
                    fontWeight={600}
                    fontSize={{ base: "1rem", md: "1.4rem" }}
                  >
                    Banho
                  </Card.Title>
                  <Card.Description>Banho completo no animal</Card.Description>
                </VStack>

                <HStack mt="4">
                  <Badge colorPalette="orange" py={1} px={3} rounded="2xl">
                    Cachorro
                  </Badge>
                  <Badge colorPalette="green" py={1} px={3} rounded="2xl">
                    Promoção
                  </Badge>
                </HStack>
              </Card.Body>
            </Box>
          </Card.Root>
        </VStack>

        <VStack w="100%" h="100%" alignItems="flex-start">
          <Card.Root w="100%" p={6} gap={8}>
            <Card.Title fontSize="1.4rem">Resumo da compra</Card.Title>

            <VStack>
              <HStack w="100%" justifyContent="space-between">
                <Text color="gray.400">Osso de plástico:</Text>
                <Heading>R${value1}</Heading>
              </HStack>

              <HStack w="100%" justifyContent="space-between">
                <Text color="gray.400">Banho:</Text>
                <Heading>R${value2}</Heading>
              </HStack>

              <HStack
                w="100%"
                justifyContent="space-between"
                borderTop="1px solid #2a2a2a"
                pt={2}
              >
                <Text color="gray.400" fontWeight={700} fontSize="1.1rem">
                  Total:
                </Text>
                <Heading>R${totalValue}</Heading>
              </HStack>
            </VStack>

            <Button>Ir para o pagamento</Button>
          </Card.Root>
        </VStack>
      </Stack>
    </Flex>
  );
}
