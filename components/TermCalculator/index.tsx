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
    onClick?: (inputValue: String) => void
}

export const TermCalculator = (props: Props) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const submit = () => {
        props.onClick(inputValue)
    }
    return <>
        <Box
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
                    Part 1
                </Text>
                <Text my={2} color="gray.500">
                    Develop a term calculator that can handle (), *, /, +, and -. For example, if the user enters the term (5+8)*3/8+3, the term calculator shall calculate and output the result according to the school rules of term calculations.
                </Text>
                <Text my={2} color="gray.500">
                    These rules are: () before * and /, * and / before + and -. Several * and / are calculated from left to right, several + and - also from left to right.
                </Text>
                <Text my={2} color="gray.500">
                    Important: The actual algorithm must be implemented itself. The use of functions like eval in JavaScript are not permitted.
                </Text>

                <Text my={2} color="gray.600">
                    Enters the term <Input color="gray.500" placeholder='Please fill out.' type="text" value={inputValue} onChange={handleChange} />
                </Text>

                <Button maxWidth="100px" my={2} onClick={submit}>
                    Submit
                </Button>

                <Text my={2} color="teal.600">
                    Result : {props.result}
                </Text>
            </Stack>
        </Box>
    </>
}