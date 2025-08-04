"use client"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { Bar } from "react-chartjs-2"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function VisitationStats() {
const chartData = {
  labels: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ],
  datasets: [
    {
      label: "Refunds",
      data: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3].sort((a, b) => a - b),
      backgroundColor: "#84cc16",
      borderRadius: 8,
      maxBarThickness: 6,
    },
   
    {
      label: "Signups",
      data: [8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22].sort((a, b) => a - b),
      backgroundColor: "#84cc16",
      borderRadius: 8,
      maxBarThickness: 6,
    },
     {
      label: "Revenue",
      data: [4, 5, 5, 6, 6, 7, 8, 8, 9, 9, 10, 11].sort((a, b) => a - b),
      backgroundColor: "#84cc16",
      borderRadius: 8,
      maxBarThickness: 6,
    },
     {
      label: "Visitors",
      data: [15, 18, 19, 20, 22, 24, 25, 26, 28, 29, 30, 32].sort((a, b) => a - b),
      backgroundColor: "#84cc16",
      borderRadius: 8,
      maxBarThickness: 6,
    },
  ],
}

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        cornerRadius: 6,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#6b7280",
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 35,
        grid: {
          color: "#f3f4f6",
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#6b7280",
          font: {
            size: 12,
          },
          stepSize: 5,
        },
      },
    },
  }

  return (
    <div className="w-full  mx-auto p-6 rounded-lg bg-white ">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-semibold text-gray-900">Visitation Stats</h1>
        <Select defaultValue="2025">
          <SelectTrigger className="w-20 h-8 text-sm border border-gray-300">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white border-white">
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-500">No. of Visits</p>
      </div>

      <div className="h-80 w-full">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  )
}
