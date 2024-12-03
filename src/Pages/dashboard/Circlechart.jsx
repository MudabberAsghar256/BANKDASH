import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function Circlechart () {
  const [series] = useState([55, 55, 55, 55]);
  const [options] = useState({
    chart: {
      width: 400,
      type: "polarArea",
    },
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "bottom",
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      monochrome: {
        enabled: false, // Disable monochrome to use custom colors
      },
    },
    colors: ["#343C6A", "#FC7900", "#1814F3", "#FA00FF"], // Custom colors for segments
    // labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'], // Remove or comment out this line to remove labels
  });

  return (
    <div
      style={{
        position: "relative",
        width: "340px",
        height: "360px",
        margin: "auto",
      }}
    >
      {/* Polar Area Chart */}
      <div id="Circlechart" className="w-full flex justify-center">
        <ReactApexChart
          options={options}
          series={series}
          type="polarArea"
          width={380}
        />
      </div>

      {/* Text over each "bite" */}
      <div
        style={{
          position: "absolute",
          top: "25%", // Position for first slice
          left: "37%",
          transform: "translate(-50%, -50%)",
          fontSize: "14px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        30% <br></br>
        Entertenment
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%", // Position for second slice
          left: "37%",
          transform: "translate(-50%, -50%)",
          fontSize: "14px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        20%<br></br>
        Investment
      </div>

      <div
        style={{
          position: "absolute",
          top: "25%", // Position for third slice
          left: "68%",
          transform: "translate(-50%, -50%)",
          fontSize: "14px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        15%<br></br>
        Bill Expencse
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%", // Position for fourth slice
          left: "65%",
          transform: "translate(-50%, -50%)",
          fontSize: "14px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        35%<br></br>
        Others
      </div>
    </div>
  );
};