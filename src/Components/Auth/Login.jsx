import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Login() {
  const [acctype, setacctype] = useState(null);
  const [formData, setFormData] = useState({});

  const handelChange = (e) => {
    setFormData(...formData);
  };

  const handelSubmit = () => {};
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handelSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" isRequired />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" isRequired />
              </FormControl>
              <Stack spacing={10}>
                <RadioGroup>
                  <Stack spacing={5} direction="row">
                    <Radio
                      colorScheme="green"
                      value="acctype"
                      isRequired={true}
                    >
                      Radio
                    </Radio>
                    <Radio colorScheme="green" value="acctype">
                      Radio
                    </Radio>
                  </Stack>
                </RadioGroup>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
