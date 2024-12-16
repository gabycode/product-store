import { Button, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import cart from "/cart.png";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}>
        <Link to="/">
          <Flex alignItems={"center"} gap={2}>
            <Image boxSize="50px" src={cart} />
            <Text fontSize={{ base: "22px", sm: "28px" }} fontWeight={"600"}>
              Product Store
            </Text>
          </Flex>
        </Link>

        <HStack spacing={2} alignItems={"center"}>
          <Link to="/create">
            <Button>
              <CiSquarePlus />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
