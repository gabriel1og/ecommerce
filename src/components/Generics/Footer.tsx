import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      w="100%"
      height="150px"
      background="#0a0a0a"
      borderTop="1px solid #393939"
      justifyContent="center"
      alignItems="center"
      className="footer"
    >
      <Flex
        w="100%"
        maxW="1280px"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        px="10px"
      >
        <VStack>
          <Heading>Paws & Claws</Heading>
          <Text pb={6}>
            Entre em contato:{" "}
            <span style={{ fontWeight: "bold" }}>(31) 3333-3333</span>
          </Text>
          <Text>All rights reserved - 2025.</Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
