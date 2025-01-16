"use client";

import {
  Flex,
  useBreakpointValue,
  Text,
  MenuSeparator,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import { Tooltip } from "@/components/ui/tooltip";
import { Avatar } from "@/components/ui/avatar";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import logo from "@/images/logo.png";
import GenericLink from "./Link";
import { FaChartBar, FaTools, FaUser, FaShoppingCart } from "react-icons/fa";
import { FaShop, FaHouse } from "react-icons/fa6";
import { ReactNode } from "react";
import { Button } from "../ui/button";

export default function Header() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const tooltip = ({ title, icon }: { title: string; icon: ReactNode }) => {
    return (
      <Tooltip
        positioning={{
          placement: "right",
          offset: {
            mainAxis: 0,
            crossAxis: -28,
          },
        }}
        openDelay={100}
        closeDelay={100}
        content={
          <p
            style={{ padding: "5px 10px", fontWeight: 600, fontSize: ".8rem" }}
          >
            {title}
          </p>
        }
      >
        {icon}
      </Tooltip>
    );
  };

  return (
    <Flex
      position="sticky"
      top="0"
      width="100%"
      height="100px"
      background="#0a0a0a"
      borderBottom="1px solid #393939"
      justifyContent="center"
      zIndex={1}
    >
      <Flex
        w="100%"
        maxW="1280px"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px="10px"
      >
        <Flex
          flex="1"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Image
            src={logo.src}
            width={isMobile ? 60 : 80}
            height={isMobile ? 60 : 80}
            alt="Logo"
            style={{
              objectFit: "cover",
            }}
          />
        </Flex>

        <Flex
          flex="2"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <GenericLink
            link="/"
            content={
              isMobile ? tooltip({ title: "Home", icon: <FaHouse /> }) : "Home"
            }
          />
          <GenericLink
            link="/products"
            content={
              isMobile
                ? tooltip({ title: "Produtos", icon: <FaShop /> })
                : "Produtos"
            }
          />
          <GenericLink
            link="/services"
            content={
              isMobile
                ? tooltip({ title: "Serviços", icon: <FaTools /> })
                : "Serviços"
            }
          />
          <GenericLink
            link="/dashboard"
            content={
              isMobile
                ? tooltip({ title: "Dashboard", icon: <FaChartBar /> })
                : "Dashboard"
            }
          />
        </Flex>

        <Flex
          flex="1"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
          gap={8}
        >
          <Link href="/cart" outline="none">
            <FaShoppingCart size={isMobile ? 20 : 24} />
          </Link>

          <MenuRoot
            positioning={{
              placement: "bottom",
              offset: {
                mainAxis: 10,
              },
            }}
          >
            <MenuTrigger asChild>
              <Button
                overflow="hidden"
                borderRadius="20px"
                border="none"
                outline="none"
              >
                <Avatar
                  src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
                  name="Nome do usuário"
                  size={isMobile ? "sm" : "lg"}
                  border="none"
                />
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem
                value="Minha Conta"
                p="20px"
                cursor="pointer"
                flexDirection="row"
                justifyContent="center"
              >
                <Link href="/account" outline="none">
                  <Text textAlign="center" fontWeight={600} fontSize=".9rem">
                    Minha Conta
                  </Text>
                  <FaUser />
                </Link>
              </MenuItem>

              <MenuSeparator />

              <MenuItem value="Log Out" p="15px" cursor="pointer">
                <Button
                  variant="solid"
                  w="100%"
                  colorPalette="red"
                  outline="none"
                >
                  Log Out
                </Button>
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </Flex>
      </Flex>
    </Flex>
  );
}
