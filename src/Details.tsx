import React from "react";
import { useParams } from "react-router-dom";
import { Chart } from "react-google-charts";
import { data } from "./App";


const PieChart: React.FC = () => {
    const { selectedState } = useParams();
const selectedStateData = data.find((item) => item.Location === selectedState);
const assetsData = selectedStateData?.assets;
const fundData = selectedStateData?.fund;

const pieChartData = assetsData? Object.entries(assetsData).map(([category, value]) => [category, value]): [];
const pieChartFund = fundData? Object.entries(fundData).map(([category, value]) => [category, value]): [];

  return (
    <>
      <h2
        style={{ textAlign: "center" }}
      >{`Asset Allocation for ${selectedState}`}</h2>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={[["Category", "Value"], ...pieChartData]}
        options={{ title: `Asset Allocation for ${selectedState}` }}
      />
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={[["Year", "Value"], ...pieChartFund]}
        options={{
          title: `Fund Performance for ${selectedState}`,
          hAxis: {
            title: "Year",
          },
          vAxis: {
            title: "Value",
          },
        }}
      />
    </>
  );
};

export default PieChart;
