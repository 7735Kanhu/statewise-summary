import React from "react";
import { useState } from "react";
import  { useNavigate  } from "react-router-dom";
import { Chart } from "react-google-charts";


interface StateData {
  Location: string;
  Parent: string | null;
  "Papulations volume (size)": number;
  "Temprature increase/decrease (color)": number;
  assets?: { [key: string]: number };
  fund?: { [key: number]: number };
}
export const data: StateData[] = [
  {
    Location: "India",
    Parent: null,
    "Papulations volume (size)": 0,
    "Temprature increase/decrease (color)": 0,
    assets: { Domestic: 0, International: 0, Bonds: 0,Cash:0 },
    fund: { 2010: 0, 2011: 0, 2012: 0 ,2013:0},
  },
  {
    Location: "Odisha",
    Parent: "India",
    "Papulations volume (size)": 41947358,
    "Temprature increase/decrease (color)": 32,
    assets: { Domestic: 100000, International: 200000, Bonds: 400000,Cash:20000 },
    fund: { 2010: 240000, 2011: 30000, 2012: 455000,2013:456786 },
  },
  {
    Location: "Maharashtra",
    Parent: "India",
    "Papulations volume (size)": 112372972,
    "Temprature increase/decrease (color)": 12,
    assets: { Domestic: 1500000, International: 230000, Bonds: 410000,Cash:300000 },
    fund: { 2010: 280000, 2011: 49000, 2012: 54000,2013:300000 },

    
  },
  {
    Location: "Uttar Pradesh",
    Parent: "India",
    "Papulations volume (size)": 199581477,
    "Temprature increase/decrease (color)": 30,
    assets: { Domestic: 110000, International: 240000, Bonds: 500000,Cash:354446 },
    fund: { 2010: 343430000, 2011: 80000, 2012: 455000,2013:565644 },

  },
  {
    Location: "Gujarat",
    Parent: "India",
    "Papulations volume (size)": 60383628,
    "Temprature increase/decrease (color)": 15,
    assets: { Domestic: 400000, International: 100000, Bonds: 800000,Cash:100000 },
    fund: { 2010: 200546000, 2011: 400600, 2012: 455000,2013:56666 },

  },
  {
    Location: "Kolkata",
    Parent: "India",
    "Papulations volume (size)": 91347736,
    "Temprature increase/decrease (color)": 4,
    assets: { Domestic: 300000, International: 2800000, Bonds: 4600000,Cash:98694 },
    fund: { 2010: 20560000, 2011: 400100, 2012: 45000,2013:600000 },

  },
  {
    Location: "Rajasthan",
    Parent: "India",
    "Papulations volume (size)": 68621012,
    "Temprature increase/decrease (color)": 29,
    assets: { Domestic: 600000, International: 270000, Bonds: 490000,Cash:42354 },
    fund: { 2010: 20530000, 2011: 40000, 2012: 47600540 ,2013:200000},

  },
  {
    Location: "Uttarakhand",
    Parent: "India",
    "Papulations volume (size)": 11116752,
    "Temprature increase/decrease (color)": 8,
    assets: { Domestic: 1560000, International: 260000, Bonds: 480000,Cash:5346524 },
    fund: { 2010: 25400000, 2011: 400005, 2012: 4505500,2013:42344 },

  },
  {
    Location: "Jharkhand",
    Parent: "India",
    "Papulations volume (size)": 32966238,
    "Temprature increase/decrease (color)": 12,
    assets: { Domestic: 100000, International: 200000, Bonds: 400000,Cash:53434 },
    fund: { 2010: 700000, 2011: 400005, 2012: 47565000,2013:300525 },

  },
  {
    Location: "Meghalaya",
    Parent: "India",
    "Papulations volume (size)": 2964007,
    "Temprature increase/decrease (color)": 10,
    assets: { Domestic: 100000, International: 200000, Bonds: 400000,Cash:423845 },
    fund: { 2010: 20067000, 2011: 407000, 2012: 450600,2013:45745 },

  },
  {
    Location: "Punjab",
    Parent: "India",
    "Papulations volume (size)": 27704236,
    "Temprature increase/decrease (color)": 24,
    assets: { Domestic: 100000, International: 200000, Bonds: 400000,Cash:5427 },
    fund: { 2010: 20065000, 2011: 400500, 2012: 455000,2013:534553 },

  },
  {
    Location: "Telangana",
    Parent: "India",
    "Papulations volume (size)": 35193978,
    "Temprature increase/decrease (color)": 8,
    assets: { Domestic: 100000, International: 200000, Bonds: 400000,Cash:40000 },
    fund: { 2010: 20000760, 2011: 400700, 2012: 4500760,2013:30055 },

  },
  {
    Location: "Tripura",
    Parent: "India",
    "Papulations volume (size)": 3671032,
    "Temprature increase/decrease (color)": 12,
    assets: { Domestic: 100000, International: 200000, Bonds: 400000,Cash:47278 },
    fund: { 2010: 2000600, 2011: 400767600, 2012: 450700,2013:33636 },

  },
  {
    Location: "Goa",
    Parent: "India",
    "Papulations volume (size)": 1457723,
    "Temprature increase/decrease (color)": 20,
    assets: { Domestic: 100000, International: 200000, Bonds: 400000,Cash:5425 },
    fund: { 2010: 20057000, 2011: 4067000, 2012: 450500,2013:346346 },

  },
  {
    Location: "Madhya Pradesh",
    Parent: "India",
    "Papulations volume (size)": 72138958,
    "Temprature increase/decrease (color)": 20,
    assets: { Domestic: 100000, International: 200000, Bonds: 400000,Cash:6587 },
    fund: { 2010: 20056000, 2011: 4056000, 2012: 450600,2013:45346 },

  },

  {
    Location: "Assam",
    Parent: "India",
    "Papulations volume (size)": 31169272,
    "Temprature increase/decrease (color)": 20,
    assets: { Domestic: 100000, International: 200000, 2013: 400000,Cash:446444 },
    fund: { 2010: 20056000, 2011: 4000560, 2012: 4500560 ,2013:64566},

  },
];

export const options = {
  minColor: "#0d0",
  midColor: "#283df7",
  maxColor: "#f00",
  headerHeight: 15,
  fontColor: "black",
  showScale: true,
  // tooltip: { isHtml: true },
};


const App: React.FC = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const handleSelect = (chartWrapper: any) => {
    const selection = chartWrapper.getChart().getSelection();
    if (selection.length === 1) {
      const selectedItem = data[selection[0].row];
      setSelectedState(selectedItem.Location);
      navigate(`/state/${encodeURIComponent(selectedItem.Location)}`);
    }
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>State Summary</h2>
      <Chart
        chartType="TreeMap"
        width="100%"
        height="700px"
        data={[
          ["Location", "Parent", "Papulations volume (size)", "Temprature increase/decrease (color)"],
          ...data.map((item) => [
            item.Location,
            item.Parent,
            item["Papulations volume (size)"],
            item["Temprature increase/decrease (color)"],
          ]),
        ]}
        options={options}
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }: any) => handleSelect(chartWrapper),
          },
        ]}
      />
    </>
  );
}
export default App;