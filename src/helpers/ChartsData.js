export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      align: "start",
      labels: {
        padding: 20, // Adds a 20px padding around the legend
      },
    },
    title: {
      display: true,
      //   text: "Chart.js Bar Chart",
    },
  },
};

export const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
];

export const securityBarOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      align: "start",
      labels: {
        padding: 20,
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      //   text: "Chart.js Bar Chart",
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const securityBarLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
