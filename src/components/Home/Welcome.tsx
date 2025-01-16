import { Heading, Text, VStack } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { GiDogBowl } from "react-icons/gi";

export default function Welcome() {
  return (
    <VStack gap={16} pt={16}>
      <VStack gap={4}>
        <Heading fontSize="3rem">Welcome to to Paws & Claws</Heading>
        <Text fontSize="1.5rem" color="gray.400">
          Your one-stop shop for all pet needs
        </Text>
        <GiDogBowl size={44} />
      </VStack>

      <Button px={6} borderRadius="20px">
        Shop Now
      </Button>
    </VStack>
  );
}
