"use client";

import { Heading, Box, Card, Flex, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

export default function Dashboard() {
  const faturamentoMensal = useMemo(
    () => [
      { mes: "Jan", faturamento: 120040.2 },
      { mes: "Fev", faturamento: 140700.12 },
      { mes: "Mar", faturamento: 160800.37 },
      { mes: "Abr", faturamento: 180001.62 },
      { mes: "Mai", faturamento: 201700.12 },
      { mes: "Jun", faturamento: 220056.05 },
      { mes: "Jul", faturamento: 240033.12 },
      { mes: "Ago", faturamento: 260001.83 },
      { mes: "Set", faturamento: 280270.12 },
      { mes: "Out", faturamento: 308000.04 },
      { mes: "Nov", faturamento: 320003.12 },
      { mes: "Dez", faturamento: 340011.69 },
    ],
    []
  );

  const setPriceBRL = (price: number) =>
    price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  const { faturamentoAnual, totalVendasEventos, totalVendasOnline } =
    useMemo(() => {
      const faturamentoAnual = faturamentoMensal.reduce(
        (sum, mes) => sum + mes.faturamento,
        0
      );
      const totalVendasEventos = 157406.32;
      const totalVendasOnline = 175002.98;
      return { faturamentoAnual, totalVendasEventos, totalVendasOnline };
    }, [faturamentoMensal]);

  const cards = [
    {
      id: 0,
      title: "Faturamento Total",
      value: faturamentoAnual,
      description: "",
    },
    {
      id: 1,
      title: "Vendas de Produtos",
      value: totalVendasEventos,
      description: "Total de vendas de produtos",
    },
    {
      id: 2,
      title: "Vendas de Serviços",
      value: totalVendasOnline,
      description: "Total de vendas de serviços",
    },
  ];

  return (
    <Flex w="100%" flexDirection="column" gap={8} pb={16}>
      <Heading fontSize="2rem">Dashboard</Heading>

      <Flex
        w="100%"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        gap={8}
      >
        {cards.map((c) => (
          <Card.Root key={c.id} w="100%" p="20px">
            <Card.Body>
              <Card.Title color="#8f8f8f">{c.title}</Card.Title>

              <Text
                fontSize={c.id === 0 ? "2.2rem" : "1.8rem"}
                fontWeight={800}
              >
                {setPriceBRL(c.value)}
              </Text>
              <Text color="#8f8f8f">{c.description}</Text>
            </Card.Body>
          </Card.Root>
        ))}
      </Flex>

      <Flex w="100%">
        <Card.Root w="100%" p="40px">
          <Card.Body>
            <Card.Title fontWeight={700} fontSize="1.5rem" pb="30px">
              Faturamento Anual
            </Card.Title>

            <ResponsiveContainer width="100%" height={600}>
              <BarChart data={faturamentoMensal}>
                <XAxis
                  dataKey="mes"
                  stroke="#888888"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={12}
                />
                <YAxis
                  stroke="#888888"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={0}
                  tickFormatter={(value) => `R$${value / 1000}k`}
                />
                <Bar
                  dataKey="faturamento"
                  fill="currentColor"
                  radius={10}
                  className="fill-primary"
                />
                <Tooltip
                  cursor={false}
                  content={({
                    active,
                    payload,
                    label,
                  }: TooltipProps<number, string>) => {
                    if (active && payload && payload.length > 0) {
                      return (
                        <Card.Root borderRadius="10px" p="20px">
                          <Card.Body>
                            <Box display="flex" gap={8}>
                              <Box>
                                <Text>Mês</Text>
                                <Text
                                  color="#8f8f8f"
                                  fontWeight={800}
                                  fontSize="1.1rem"
                                  marginTop={-1}
                                >
                                  {label}
                                </Text>
                              </Box>

                              <Box>
                                <Text>Faturamento</Text>
                                <Text
                                  fontWeight={800}
                                  fontSize="1.1rem"
                                  marginTop={-1}
                                >
                                  R$ {payload[0].value?.toLocaleString()}
                                </Text>
                              </Box>
                            </Box>
                          </Card.Body>
                        </Card.Root>
                      );
                    }
                    return null;
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card.Body>
        </Card.Root>
      </Flex>
    </Flex>
  );
}
