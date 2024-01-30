import Chart from "react-apexcharts";

const options = {
  chart: {
    id: "basic-bar",
    toolbar:{
      show:false
    },
    
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
  title: {
    text: "Last Six month sales overview",
    offsetX: 2,
    offsetY:5,
    style: {
      fontSize: "24px",
    },
  },
  responsive: [
    {
      breakpoint: 768, // Adjust this breakpoint based on your design needs
      options: {
      title:{
        style:{
          fontSize:'20px'
        }
      },
        chart: {
          width: "100%", // Set width to 100% for smaller screens
        },
      },
    },
    
  ],
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];

const LastSixMonthSalesChart = () => (
 <div className="px-2 bg-white md:col-span-7 " >
   <Chart options={options} series={series} type="bar"  />
 </div>
);

export default LastSixMonthSalesChart;
