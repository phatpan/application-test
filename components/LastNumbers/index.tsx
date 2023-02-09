import {
    Stack,
    Box,
    Button,
    Text,
    Input
} from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
    result: string
    onClick?: (inputValue: number) => void
}

export const LastNumbers = (props: Props) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const submit = () => {
        props.onClick(parseInt(inputValue))
    }
    return <Box
        p={4}
        display={{ md: "flex" }}
        borderWidth={1}
        margin={2}
        borderRadius='5px'
    >
        <Stack
            align={{ base: "center", md: "stretch" }}
            textAlign={{ base: "center", md: "left" }}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
        >
            <Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
            >
                Part 2
            </Text>
            <Text my={2} color="gray.500">
                Peter likes numbers. As a meditation exercise, he likes to write down all the numbers starting with 1 whose digits are sorted in ascending order. For example, 11235888 is such a number. After a while, he stops.
            </Text>
            <Text my={2} color="gray.500">
                Write an efficiently designed program which, after entering a number between 1 and 10 ^ 18, represents the last number checked by Peter, outputs the last number written down by Peter.
            </Text>
            <Text color="gray.500" as="u">
                Examples:
            </Text>
            <Stack spacing={3} color="gray.500">
                <Text fontSize='xs'>Input: 23245       Output: 22999</Text>
                <Text fontSize='xs'>Input: 11235888    Output: 11235888</Text>
                <Text fontSize='xs'>Input: 111110      Output: 99999</Text>
                <Text fontSize='xs'>Input: 33245       Output: 29999</Text>
            </Stack>
            <Text my={2} color="gray.500" mb={5}>
                Tip: Going through the numbers one by one and testing them is not efficient enough.
            </Text>

            <Text my={2} color="gray.600" mb={5}>
                Enters the term
                <Input color="gray.500" placeholder='Please fill out.' type="number" value={inputValue} onChange={handleChange} />
            </Text>

            <Button maxWidth="100px" mt={5} my={2} onClick={submit}>
                Submit
            </Button>

            <Text my={2} color="teal.600">
                Result : {props.result}
            </Text>
        </Stack>
    </Box>
}