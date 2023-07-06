import React, { useEffect, useRef } from 'react'
// import { Chart } from "tw-elements";
import Chart from 'chart.js/auto';


function DoughnutChart() {

  const doughnutChartRef = useRef(null);
  useEffect(() => {     
  
    // Create doughnut chart
    const createDoughnutChart = () => {
        const doughnutChartCanvas = doughnutChartRef.current;
        const doughnutChart = new Chart(doughnutChartCanvas, {
          type: "doughnut",
          data: {
              datasets: [
                {
                  label: "Traffic",
                  data: [2112, 2343, 2545, 3423, 2365, 1985, 1756],
                  backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                    "#FF9F40",
                    "#F44242",
                  ],
                },
              ],
              labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              
            },
          options: {
            // ...
          },
        });
      
        return doughnutChart;
      };
      
  // Create New Chart
    let doughnutChart = createDoughnutChart();
          // Clean up function
      return () => {
        // Destroy the chart
        if (doughnutChart) {  
          doughnutChart.destroy();
        //   doughnutChart = null;
        }
        
      };
  }); 
 
  

  
  return (
    <>
         <div className="w-full">
            <div className="mx-auto w-full overflow-hidden">
            
              <canvas ref={doughnutChartRef} id="doughnut-chart" />
            </div>
          </div>
    </>
  )
}

export default DoughnutChart