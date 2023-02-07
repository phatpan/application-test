import { NextPage } from 'next';
import {
    Container,
    Heading,
} from '@chakra-ui/react';
import Part1 from '../components/part1';
import { useState } from 'react';
import { calculator } from '../utils/tasksUtils'

const IndexPage: NextPage = () => {
    const [resultCalculate, setResultCalculate] = useState('')

    function calculate(input: string) {
        setResultCalculate(calculator(input).toString())
    }
    return (<Container>
        <Heading mt={5} mb={5} as="h1">Tasks</Heading>
        <Part1 onClick={calculate} result={resultCalculate} />
    </Container>
    )
}

export default IndexPage;