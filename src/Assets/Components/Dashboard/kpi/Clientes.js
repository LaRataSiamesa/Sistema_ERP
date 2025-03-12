import "chart.js/auto"
import { useState } from "react"
import { Card } from "primereact/card"
import { Chart } from "primereact/chart"
import { Tooltip } from "primereact/tooltip"
import { Button } from "primereact/button"

export default function Cliente() {
  // Estado para controlar la visualización (pie o doughnut)
  const [chartType, setChartType] = useState("pie")

  // Calcular el total para los porcentajes
  const values = [100, 10, 20, 5, 5, 10]
  const total = values.reduce((sum, value) => sum + value, 0)

  // Calcular porcentajes para mostrar en las etiquetas
  const percentages = values.map((value) => ((value / total) * 100).toFixed(1) + "%")

  // Datos con etiquetas que incluyen porcentajes
  const data = {
    labels: ["Activos", "Marketing", "Potenciales", "Inactivos", "Perdidos", "Ganados"],
    datasets: [
      {
        data: values,
        backgroundColor: ["#34D399", "#60A5FA", "#FBBF24", "#9CA3AF", "#F87171", "#2563EB"],
        hoverBackgroundColor: ["#059669", "#2563EB", "#D97706", "#6B7280", "#DC2626", "#1E40AF"],
        borderWidth: 2,
        borderColor: "#ffffff",
        hoverOffset: 15,
        borderRadius: 3,
      },
    ],
  }

  // Opciones mejoradas para el gráfico (manteniendo las animaciones)
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#495057",
          font: {
            size: 12, // Reducido de 14
            weight: "bold",
          },
          padding: 10, // Reducido de 20
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 8, // Reducido
        },
        title: {
          display: true,
          text: "Categorías",
          font: {
            size: 13, // Reducido de 16
            weight: "bold",
          },
          padding: {
            bottom: 5, // Reducido de 10
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || ""
            const value = context.raw || 0
            const percentage = ((value / total) * 100).toFixed(1)
            return `${label}: ${value} (${percentage}%)`
          },
        },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          size: 12, // Reducido de 14
          weight: "bold",
        },
        bodyFont: {
          size: 12, // Reducido de 14
        },
        padding: 8, // Reducido de 12
        cornerRadius: 6, // Reducido de 8
        displayColors: true,
        boxWidth: 8, // Reducido de 10
        boxHeight: 8, // Reducido de 10
        boxPadding: 2, // Reducido de 3
        usePointStyle: true,
      },
      datalabels: {
        formatter: (value, ctx) => {
          return percentages[ctx.dataIndex]
        },
        color: "#ffffff",
        font: {
          weight: "bold",
          size: 11, // Reducido de 12
        },
        textStrokeColor: "rgba(0, 0, 0, 0.5)",
        textStrokeWidth: 2,
        textShadowBlur: 5,
        textShadowColor: "rgba(0, 0, 0, 0.5)",
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 1000,
      easing: "easeOutQuart",
    },
    cutout: chartType === "doughnut" ? "50%" : "0%",
  }

  return (
    <div className="dashboard-card">
      <Card
        header={
          <div className="card-header">
            <h2 className="card-title">Resumen de Clientes</h2>
          </div>
        }
        footer={
          <div className="card-footer">
            <div className="card-metric">
              <div>
                <strong>Total:</strong> {total}
              </div>
              <div>
                <strong>Activos:</strong> {values[0]} ({percentages[0]})
              </div>
            </div>
          </div>
        }
        className="card-content"
      >
        <p className="card-description">Este gráfico muestra la distribución de clientes según su estado actual.</p>

        <div className="card-actions">
          <Tooltip target=".chart-type-button" position="top" />
          <Button
            className="chart-type-button"
            data-pr-tooltip="Gráfico circular"
            icon="pi pi-chart-pie"
            onClick={() => setChartType("pie")}
            severity={chartType === "pie" ? "info" : "secondary"}
            outlined={chartType !== "pie"}
            style={{ width: "30px", height: "30px" }}
            size="small"
          />
          <Button
            className="chart-type-button"
            data-pr-tooltip="Gráfico de anillo"
            icon="pi pi-circle"
            onClick={() => setChartType("doughnut")}
            severity={chartType === "doughnut" ? "info" : "secondary"}
            outlined={chartType !== "doughnut"}
            style={{ width: "30px", height: "30px" }}
            size="small"
          />
        </div>

        <div className="chart-container">
          <Chart type={chartType} data={data} options={options} />
        </div>
      </Card>
    </div>
  )
}
