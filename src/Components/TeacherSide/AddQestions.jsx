import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../redux1/action";
import Questions from "./Questions";
const AddQestions = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    console.log(formData);
  };
  const handelSubmit = (e) => {
    e.preventDefault();

    const pld = formData;
    dispatch(addQuestion(pld));
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <Stack spacing={3} width="md">
          <InputGroup size="md">
            <Textarea
              placeholder="enter Question here..."
              size="md"
              name="question"
              onChange={handelChange}
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputLeftAddon children="Option - A" borderLeftRadius="10px" />
            <Input
              type="text"
              placeholder="Option - A"
              borderRightRadius="10px"
              name="OptionA"
              onChange={handelChange}
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputLeftAddon children="Option - B" borderLeftRadius="10px" />
            <Input
              type="text"
              placeholder="Option - B"
              borderRightRadius="10px"
              name="OptionB"
              onChange={handelChange}
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputLeftAddon children="Option - C" borderLeftRadius="10px" />
            <Input
              type="text"
              placeholder="Option - C"
              borderRightRadius="10px"
              name="OptionC"
              onChange={handelChange}
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputLeftAddon children="Option - D" borderLeftRadius="10px" />
            <Input
              type="text"
              placeholder="Option - D"
              borderRightRadius="10px"
              name="OptionD"
              onChange={handelChange}
            />
          </InputGroup>

          <Select
            placeholder="Chose correct answer option"
            size="sm"
            borderRadius="10px"
            name="correctAnswerOption"
            onChange={handelChange}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </Select>

          <InputGroup size="sm">
            <InputLeftAddon children="Attachemnt image link" />
            <Input
              placeholder="Add Attachemnt image URL"
              name="attacmentImage"
              onChange={handelChange}
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputLeftAddon children="Attachemnt video link" />
            <Input
              placeholder="Add Attachemnt video URL"
              name="attacmentVideo"
              onChange={handelChange}
            />
          </InputGroup>
          <Button colorScheme="blue" type="submit">
            Button
          </Button>
        </Stack>
      </form>
      <Questions />
    </div>
  );
};

export default AddQestions;
