import { NextPage } from 'next';
import {
    Container,
    Heading,
} from '@chakra-ui/react';
import Part1 from '../components/part1';
import { useState } from 'react';
import { calculator, findLastNumber } from '../utils/tasksUtils'
import Part2 from '../components/part2';

const IndexPage: NextPage = () => {
    const [resultCalculate, setResultCalculate] = useState('')
    const [resultCalculatePart2, setResultCalculatePart2] = useState('')

    function calculate(input: string) {
        setResultCalculate(calculator(input).toString())
    }

    function calculatePart2(input: number) {
        setResultCalculatePart2(findLastNumber(input).toString())
    }

    return (<Container>
        <Heading mt={5} mb={5} as="h1">Tasks</Heading>
        <Part1 onClick={calculate} result={resultCalculate} />
        <Part2 onClick={calculatePart2} result={resultCalculatePart2} />
    </Container>
    )
}

export default IndexPage;