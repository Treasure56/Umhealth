"use client"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { Bar } from "react-chartjs-2"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function VisitationStats() {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Visitors",
        data: [28, 32, 25, 30, 22, 18, 15, 20, 26, 24, 19, 29],
        backgroundColor: "#84cc16",
        borderRadius: 2,
        maxBarThickness: 40,
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
