"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import {
  Badge,
  Box,
  Card,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import osso from "@/images/osso.png";
import banho from "@/images/banho.png";
import { useState, useEffect } from "react";
import { IUser } from "@/data/axios";
import axios from "axios";
import { LuCheck, LuPackage, LuShip } from "react-icons/lu";

export default function Account() {
  const [nome, setNome] = useState<IUser["nome"]>("");
  const [email, setEmail] = useState<IUser["email"]>("");
  const [senha, setSenha] = useState<IUser["senha"]>("");
  const [novaSenha, setNovaSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setLoading(true);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <VStack w="100%" alignItems="stretch" gap={16} pb={8}>
      <Stack direction={{ base: "column", md: "row" }} gap={8}>
        <Card.Root w="100%" p="30px" gap={12}>
          <Card.Header>
            {users.map((user, i) => (
              <HStack
                key={i}
                border="2px solid red"
                borderRadius="5px"
                p="5px"
                my="5px"
              >
                <Heading>{user.nome},</Heading>
                <Heading>{user.email},</Heading>
                <Heading>{user.senha}</Heading>
              </HStack>
            ))}
            <Heading fontSize="1.8rem">Informações do Perfil</Heading>
            <Text color="#a0a0a0">Gerencie os detalhes da sua conta</Text>
          </Card.Header>

          <Card.Body>
            <VStack gap={6} h="100%" justifyContent="space-between">
              <HStack w="100%">
                <Avatar
                  src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
                  name="Nome do usuário"
                  size="2xl"
                  border="none"
                />

                <VStack>
                  <Heading>{nome || "Gabriel Gomide"}</Heading>
                  <Text>{email || "gabriel@gmail.com"}</Text>
                </VStack>
              </HStack>

              <VStack w="100%">
                <Field label="Nome">
                  <Input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    padding="5px"
                  />
                </Field>

                <Field label="Email">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    padding="5px"
                  />
                </Field>
              </VStack>

              <Button
                w="100%"
                colorPalette={"blue"}
                variant="subtle"
                loading={loading}
                loadingText="Carregando"
              >
                Salvar alterações
              </Button>
            </VStack>
          </Card.Body>
        </Card.Root>

        <Card.Root w="100%" p="30px" gap={12}>
          <Card.Header>
            <Heading fontSize="1.8rem">Segurança</Heading>
            <Text color="#a0a0a0">Gerencie a segurança da sua conta</Text>
          </Card.Header>

          <Card.Body>
            <VStack gap={6} h="100%" justifyContent="space-between">
              <Field label="Senha Atual">
                <Input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  padding="5px"
                />
              </Field>

              <Field label="Nova Senha">
                <Input
                  type="password"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  padding="5px"
                />
              </Field>

              <Field label="Confirmar Nova Senha">
                <Input
                  type="password"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  padding="5px"
                />
              </Field>

              <Button w="100%" colorPalette={"blue"} variant="subtle">
                Alterar senha
              </Button>
            </VStack>
          </Card.Body>
        </Card.Root>
      </Stack>

      <Heading fontSize="2rem" pb={2}>
        <span style={{ borderBottom: "2px solid #fff" }}>Pedidos</span>
      </Heading>

      <Stack w="100%" direction={{ base: "column", md: "row" }} gap={8}>
        <VStack w={{ base: "100%", md: "50%" }} alignItems="flex-start" gap={8}>
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
                    color="#777777"
                    fontWeight={600}
                    fontSize={{ base: "1rem", md: "1.2rem" }}
                  >
                    Osso de plástico
                  </Card.Title>
                  <Text
                    fontWeight={800}
                    fontSize={{ base: "1rem", md: "1.4rem" }}
                  >
                    R$13,99
                  </Text>
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

          <TimelineRoot size="xl" w="100%" maxW="600px">
            <TimelineItem>
              <TimelineConnector>
                <LuShip />
              </TimelineConnector>

              <TimelineContent>
                <TimelineTitle fontSize="1.1rem">Pedido Separado</TimelineTitle>
                <TimelineDescription>13/05/21, 10:37</TimelineDescription>
                <Text textStyle="sm" pb={8}>
                  Separamos o osso para expedição e posterior envio ao cliente
                  em 3-5 dias úteis.
                </Text>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector>
                <LuCheck />
              </TimelineConnector>
              <TimelineContent>
                <TimelineTitle fontSize="1.1rem">Pedido Enviado</TimelineTitle>
                <TimelineDescription pb={8}>
                  15/05/21, 08:12
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector>
                <LuPackage />
              </TimelineConnector>
              <TimelineContent>
                <TimelineTitle fontSize="1.1rem">Pedido Entregue</TimelineTitle>
                <TimelineDescription pb={8}>
                  16/05/21, 12:51
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </TimelineRoot>
        </VStack>

        <VStack w={{ base: "100%", md: "50%" }} alignItems="flex-start" gap={8}>
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
                    color="#777777"
                    fontWeight={600}
                    fontSize={{ base: "1rem", md: "1.2rem" }}
                  >
                    Banho
                  </Card.Title>
                  <Text
                    fontWeight={800}
                    fontSize={{ base: "1rem", md: "1.4rem" }}
                  >
                    R$129,99
                  </Text>
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

          <TimelineRoot size="xl" w="100%" maxW="600px">
            <TimelineItem>
              <TimelineConnector>
                <LuShip />
              </TimelineConnector>

              <TimelineContent>
                <TimelineTitle fontSize="1.1rem">
                  Solicitação de Serviço
                </TimelineTitle>
                <TimelineDescription>18/06/21, 12:43</TimelineDescription>
                <Text textStyle="sm" pb={8}>
                  Solicitação de serviço via telefone e checagem de
                  disponibilidade de horário e profissional.
                </Text>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector>
                <LuCheck />
              </TimelineConnector>
              <TimelineContent>
                <TimelineTitle fontSize="1.1rem">
                  Agendamento de Serviço
                </TimelineTitle>
                <TimelineDescription>19/06/21, 08:53</TimelineDescription>
                <Text textStyle="sm" pb={8}>
                  Serviço agendado às 08:30 do dia 21/06 com o profissional
                  Marcos.
                </Text>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector>
                <LuPackage />
              </TimelineConnector>
              <TimelineContent>
                <TimelineTitle fontSize="1.1rem">
                  Serviço Finalizado
                </TimelineTitle>
                <TimelineDescription pb={8}>
                  21/06/21, 09:30
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </TimelineRoot>
        </VStack>
      </Stack>
    </VStack>
  );
}
