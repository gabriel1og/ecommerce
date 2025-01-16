import {
  Box,
  Card,
  Heading,
  HStack,
  Text,
  Badge,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "../ui/button";
import { productUtils, serviceUtils } from "@/utils/storeUtils";

export default function StoreCard({
  data,
}: {
  data: productUtils | serviceUtils;
}) {
  const isUnavailable =
    (data as productUtils).quantity === 0 || data.status === "Indisponível";

  const handleStatus = () => {
    if (isUnavailable) {
      return "Indisponível";
    }
    return "Disponível";
  };

  const setPriceBRL = (price: number) =>
    price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <Card.Root w="100%" p="20px">
      <Card.Body>
        <HStack gap={8} h="100%">
          <Box
            h="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            padding={8}
            borderRadius={10}
            backgroundColor="#111111"
            boxShadow="0px 0px 20px 5px rgba(46, 46, 43, 0.237)"
            backdropFilter="blur(10px)"
            border="1px solid #27272a"
          >
            <Image
              width={140}
              height={140}
              src={data.image.src}
              alt={data.name}
              style={{
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            h="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            gap={4}
          >
            <Box display="flex" flexDirection="column">
              <Text
                color="#acacac"
                style={{ fontSize: "2rem", marginBottom: "5px" }}
              >
                {data.name}
              </Text>
              <Text style={{ fontSize: "1rem", marginBottom: "15px" }}>
                {data.description}
              </Text>
              <Text
                style={{
                  fontSize: "1.2rem",
                  color: "#acacac",
                  textDecoration: "line-through",
                }}
              >
                {setPriceBRL(data.oldPrice)}
              </Text>
              <Text style={{ fontSize: "1.6rem" }}>
                {setPriceBRL(data.price)}
              </Text>

              <VStack alignItems="flex-start">
                <Badge
                  w="fit-content"
                  colorPalette={isUnavailable ? "orange" : "green"}
                  py={1}
                  px={3}
                  my={2}
                  rounded="2xl"
                >
                  {handleStatus()}
                </Badge>

                {(data as productUtils).quantity &&
                data.status === "Disponível" ? (
                  <Text fontWeight="bold">
                    Quantidade disponível: {(data as productUtils).quantity}
                  </Text>
                ) : (
                  ""
                )}
              </VStack>
            </Box>

            <Button
              w="fit-content"
              colorPalette="blue"
              variant="subtle"
              py={1}
              px={3}
              rounded="md"
              disabled={isUnavailable}
            >
              <Heading fontFamily="Montserrat" fontSize=".9rem">
                {data.button}
              </Heading>
            </Button>
          </Box>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}
