// References:
// Jobsmith TopContainer/TopContainer.jsx   and 
// https://react-chartjs-2.netlify.app/examples/pie-chart  and
// https://react-chartjs-2.netlify.app/components/pie


// What part of the app should render this? At the bottom center? 

import React from 'react';
import '../styles/app.css';
import { Pie } from 'react-chartjs-2';
// Need to install these dependencies?
// Run:    npm install --save chart.js react-chartjs-2

/*
{
  "main": "index.tsx",
  "dependencies": {
    "chart.js": "^3.6.0",
    "faker": "5.5.3",
    "react": "17.0.2",
    "react-chartjs-2": "^4.0.0",
    "react-dom": "17.0.2",
    "react-scripts": "5.0.0"
  },
  "devDependencies": {
    "@types/react": "17.0.38",
    "@types/react-dom": "17.0.11",
    "typescript": "4.5.4"
  }
}
*/


// Do we need to install the following things?   ( From https://react-chartjs-2.netlify.app/examples/pie-chart )
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// And this is from that website, too:
// ChartJS.register(ArcElement, Tooltip, Legend);

// Do I need to import the database? 
const db = require("../model/model");

// Do these queries go here? 
// Please help me format them correctly (fetch? async await?).
const GroceriesSum = db.query('SELECT SUM(amount) FROM expense3 WHERE category='Groceries';');


export const data = {
  // Need to create a drop-down menu for 'categories'.
  labels: ['Groceries', 'Coffee', 'Gas', 'Housing', 'Insurance', 'Subscriptions', 'Giving', 'Misc.', 'Codesmith'], 
  datasets: [
    {
      label: 'Expenses by Category:', 
      // Pass down the variables representing the sum of each amount in each category:
      // Does it automatically add up the totals and find the average itself?
      // data: [GroceriesSum, CoffeeSum, GasSum, HousingSum, InsuranceSum, SubscriptionsSum, GivingSum, MiscSum, CodesmithSum], 
      // this set of data might be helpful for testing if the consts aren't working:
      // data: [10, 15, 30, 25],  
      // Terrible colors. We can fix this later. 
      backgroundColor: [rgba(245, 40, 145, 0.8), rgba(41, 39, 245, 0.8), rgba(39, 245, 58, 0.8), rgba(144, 39, 245, 0.8), rgba(245, 229, 39, 0.8), rgba(113, 84, 25, 0.84), rgba(255, 0, 0, 0.84), rgba(0, 253, 255, 0.84), rgba(255, 151, 0, 0.84) ], 
      // I don't want to mess with fancy styling, but it would go here:
      borderColor: [], 
      borderWidth: 1,
    }
  ]
};

// "Borrowed" from Jobsmith, but changed position to 'center'. 
const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'center',
    },
  },
};

// export function App() {
// The website had this rendering from App. I really need help with this part.  Where do I import this or how do we send it down? 
export default function PieChart() {
  // Do we need to add {...props} to the Pie below? 
  // return <Pie options={...} data={data} width={200} height={200} />
  // Or is it width="200px" height="200px"?
}




// Or GeeksForGeeks https://www.geeksforgeeks.org/create-a-pie-chart-using-recharts-in-reactjs/  has it this way:
// Could we still add our db query results as values?  

/*
import React from 'react';
import { PieChart, Pie} from 'recharts';
  
  
const App = () => {
  
// Sample data
const data = [
  {name: 'Geeksforgeeks', students: 400},
  {name: 'Technical scripter', students: 700},
  {name: 'Geek-i-knack', students: 200},
  {name: 'Geek-o-mania', students: 1000}
];
  
  
return (
        <PieChart width={700} height={700}>
          <Pie data={data} dataKey="students" outerRadius={250} fill="green" />
        </PieChart>
);
}
  
export default App;
*/