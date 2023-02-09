import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Point } from '@utils/tasksUtils';

interface Props {
    data: Point[]
}

export const PlotChart = (props: Props) => {
    return (
        <LineChart
            width={400}
            height={300}
            data={props.data}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    );
}