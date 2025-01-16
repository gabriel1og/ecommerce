import { Flex } from "@chakra-ui/react";

export default function GenericBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex pt="4rem" pb="9.5rem" w="100%" justifyContent="center">
      <Flex w="100%" maxW="1280px" px="20px">
        {children}
      </Flex>
    </Flex>
  );
}
