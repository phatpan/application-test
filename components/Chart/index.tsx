import {
    Stack,
    Box,
    Button,
    Text,
    Input
} from '@chakra-ui/react';
import { useState } from 'react';
import { Point } from '@utils/tasksUtils';
import LineChartPart3 from '@components/LineChartPart3';

interface Props {
    onClick?: (inputValue: String) => void
    data: Point[]
}

const Part3 = (props: Props) => {
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
                    Part 3, based on Part 1
                </Text>
                <Text my={2} color="gray.500">
                    Allow the term calculator to accept lines in the form y = TERM with x as an additional possible character in the term. If such a complete equation is given, you display a simple x / y graph. For each value on the x axis, calculate y and plot the point (a continuous line is even better).
                </Text>

                <Text my={2} color="gray.600">
                    Enters the term <Input color="gray.500" placeholder='Please fill out.' type="text" value={inputValue} onChange={handleChange} />
                </Text>

                <Button maxWidth="100px" my={2} onClick={submit}>
                    Submit
                </Button>
                {props.data.length > 0 && (<LineChartPart3 data={props.data} />)}
            </Stack>
        </Box>
    </>
}

export default Part3