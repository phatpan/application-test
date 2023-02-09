import { NextPage } from 'next';
import {
    Container,
    Heading,
} from '@chakra-ui/react';
import Part1 from '../components/Part1';
import { useState } from 'react';
import { calculator, findLastNumber, plotGraph } from '../utils/tasksUtils'
import Part2 from '../components/Part2';
import Part3 from '../components/Part3';

const IndexPage: NextPage = () => {
    const [resultCalculate, setResultCalculate] = useState('')
    const [numbers, setBumbers] = useState('')
    const [dataChart, setDataChart] = useState([])

    const data = [
        { x: -10, y: 7.875 },
        { x: -9, y: 7.875 },
    ];
    function calculate(input: string) {
        setResultCalculate(calculator(input).toString())
    }

    function calculateNumbers(input: number) {
        setBumbers(findLastNumber(input).toString())
    }

    function calculateChart(input: string) {
        setDataChart(plotGraph(input))
    }

    return (<Container>
        <Heading mt={5} mb={5} as="h1">Tasks</Heading>
        <Part1 onClick={calculate} result={resultCalculate} />
        <Part2 onClick={calculateNumbers} result={numbers} />
        <Part3 onClick={calculateChart} data={dataChart} />
    </Container>
    )
}

export default IndexPage;