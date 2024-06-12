import { useState } from "react";
import { Box, Button, Container, Flex, HStack, IconButton, Image, Input, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Refrigerator",
    description: "A high-quality refrigerator to keep your food fresh.",
    price: "$500",
    image: "https://images.unsplash.com/photo-1606859191214-25806e8e2423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWZyaWdlcmF0b3J8ZW58MHx8fHwxNzE4MTgzNzg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Washing Machine",
    description: "Efficient washing machine for your laundry needs.",
    price: "$300",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YXNoaW5nJTIwbWFjaGluZXxlbnwwfHx8fDE3MTgxODM3ODl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Microwave Oven",
    description: "Quick and easy microwave oven for your kitchen.",
    price: "$150",
    image: "https://images.unsplash.com/photo-1608384156808-418b5c079968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaWNyb3dhdmUlMjBvdmVufGVufDB8fHx8MTcxODE4Mzc4OXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Air Conditioner",
    description: "Cool your room with this efficient air conditioner.",
    price: "$400",
    image: "https://images.unsplash.com/photo-1604147706284-0a4b6d4b9b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25lcnxlbnwwfHx8fDE3MTgxODM3ODl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Navbar = () => {
  return (
    <Flex as="nav" bg="teal.500" color="white" padding={4} justifyContent="space-between" alignItems="center">
      <Text fontSize="xl" fontWeight="bold">
        ElectroShop
      </Text>
      <HStack spacing={4}>
        <Input placeholder="Search" bg="white" color="black" />
        <Button variant="link" color="white">
          Category
        </Button>
        <IconButton aria-label="Login" icon={<FaUser />} />
        <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
      </HStack>
    </Flex>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} maxW="sm">
      <Image src={product.image} alt={product.name} />
      <VStack align="start" spacing={2} mt={4}>
        <Text fontSize="xl" fontWeight="bold">
          {product.name}
        </Text>
        <Text>{product.description}</Text>
        <Text fontSize="lg" color="teal.600">
          {product.price}
        </Text>
        <Button colorScheme="teal">Add to Cart</Button>
      </VStack>
    </Box>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Navbar />
      <HStack spacing={8} mt={8} wrap="wrap" justify="center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </HStack>
    </Container>
  );
};

export default Index;
