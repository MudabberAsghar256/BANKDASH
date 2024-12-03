import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [chartData] = useState({
    series: [
      {
        name: "Desktops",
        data: [5000, 22000, 19000, 36000, 20000, 30000],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        background: "transparent",
      },
      colors: ["#FCAA0B"],
      grid: {
        borderColor: "#e0e0e0",
        strokeDashArray: 0,
      },
      stroke: {
        curve: "smooth",
      },
      markers: {
        size: 5,
        colors: ["#fff"],
        strokeColors: "#FCAA0B",
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      xaxis: {
        categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
        axisBorder: {
          show: true,
          color: "#ccc",
        },
        axisTicks: {
          show: true,
          color: "#ccc",
        },
        labels: {
          rotate: width < 600 ? -45 : 0, // Rotate labels on smaller screens
          style: {
            fontSize: width < 600 ? "10px" : "12px",
          },
        },
      },
      yaxis: {
        min: 0,
        max: 40000,
        tickAmount: 4,
        axisBorder: {
          show: true,
          color: "#ccc",
        },
        axisTicks: {
          show: true,
          color: "#ccc",
        },
        labels: {
          style: {
            fontSize: width < 600 ? "10px" : "12px",
          },
        },
      },
      legend: {
        show: false,
      },
    },
  });

  return (
    <div style={{ maxWidth: "100%", overflow: "hidden", padding: "10px" }}>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={300}
          width={width > 1000 ? "539px" : width < 600 ? "100%" : "90%"} // Dynamic width
        />
      </div>
    </div>
  );
};

export default ApexChart;
