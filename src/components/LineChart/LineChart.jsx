import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    const mathMarks =[
        {id:1,name:"Alice",math:85},
    {id:2,name:"Bob",math:78},
    {id:3,name:"Charlie",math:92},
    {id:4,name:"David",math:80},
    {id:5,name:"Emily",math:88},
    {id:6,name:"Frank",math:85},
    {id:7,name:"Grace",math:90},
    {id:8,name:"Harry",math:92},
    {id:9,name:"Ivy",math:85},
    {id:10,name:"Jack",math:88}]
    return (
        <div>
            <LChart width={800} height={400} data={mathMarks}>
                <XAxis></XAxis>
                <YAxis></YAxis>
            <Line dataKey="math" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;