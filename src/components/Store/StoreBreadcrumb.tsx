import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "@/components/ui/breadcrumb";
import { HStack } from "@chakra-ui/react";

export default function StoreBreadcrumb({ pageName }: { pageName: string }) {
  return (
    <HStack w="100%">
      <BreadcrumbRoot size="lg">
        <BreadcrumbLink>Loja</BreadcrumbLink>
        <BreadcrumbCurrentLink>{pageName}</BreadcrumbCurrentLink>
      </BreadcrumbRoot>
    </HStack>
  );
}
