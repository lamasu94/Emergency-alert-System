import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Mon", alerts: 1 },
  { name: "Tue", alerts: 0 },
  { name: "Wed", alerts: 2 },
  { name: "Thu", alerts: 0 },
  { name: "Fri", alerts: 1 },
];

function AlertsChart() {

  return (

    <ResponsiveContainer width="100%" height={200}>

      <LineChart data={data}>

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="alerts"
          stroke="#059669"
          strokeWidth={3}
        />

      </LineChart>

    </ResponsiveContainer>

  );

}

export default AlertsChart;