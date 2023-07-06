import React, { useEffect, useRef } from 'react'
// import { Chart } from "tw-elements";
import Chart from 'chart.js/auto';


function BarChart() {
const barChartRef = useRef(null); 
    useEffect(() => {
        // Create bar chart
const createBarChart = () => {
    const barChartCanvas = barChartRef.current;
    const barChart = new Chart(barChartCanvas, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [ 
          {
            label: "Traffic",
            data: [30, 15, 62, 65, 61, 6],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      
      options: {
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "green",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#4285F4",
            },
          },
          y: {
            ticks: {
              color: "#f44242",
            },
          },
        },
      },
    });
  
    return barChart;
  };
  

  let barChart = createBarChart();

          // Clean up function
          return () => {
            // Destroy the chart
            if (barChart) {  
                barChart.destroy();
                barChart = null;
            }
          
          };
      }); 


  return (
    <>
         <div className="w-full ">
            <div className="mx-auto w-full overflow-hidden">
            <canvas ref={barChartRef} id="bar-chart-custom-options" />
            </div>
          </div>
    </>
  )
}

export default BarChart