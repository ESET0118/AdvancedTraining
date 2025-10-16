import { 
  BarChart, Bar, XAxis, YAxis, Legend, Tooltip, CartesianGrid, ResponsiveContainer 
} from "recharts";

const data = [
  { month: 'jan', sales: 1000 },
  { month: 'feb', sales: 4000 },
  { month: 'mar', sales: 3000 },
  { month: 'apr', sales: 7000 },
  { month: 'may', sales: 4000 },
  { month: 'jun', sales: 5000 },
]

function BarCharts() {
  return (
    <>
      
        <BarChart width={600} height={300} data={data} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey = "sales" />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />  
        </BarChart>
      
    </>
  );
}

export default BarCharts;
