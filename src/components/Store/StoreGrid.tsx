import { SimpleGrid } from "@chakra-ui/react";

export default function StoreGrid({ children }: { children: React.ReactNode }) {
  return (
    <SimpleGrid columns={[1, 1, 1, 2]} columnGap="6" rowGap="6" w="100%">
      {children}
    </SimpleGrid>
  );
}
