import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { collection, getDocs, query, getFirestore } from "firebase/firestore";

function Chart() {
  const [campaignCount, setCampaignCount] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [dates, setDates] = useState([]);

  const fetchData = async () => {
    try {
      var tempDates = [];
      for (var i = 0; i < 7; i++) {
        var date = new Date();
        date.setDate(date.getDate() - i);
        var dd = String(date.getDate()).padStart(2, "0");
        var mm = String(date.getMonth() + 1).padStart(2, "0");
        var yy = date.getFullYear().toString();
        var dateString = yy + "-" + mm + "-" + dd;
        tempDates.push(dateString);
      }

      setDates(tempDates);

      const q = query(collection(getFirestore(), "requests"));
      const querySnapshot = await getDocs(q);

      const updatedCampaignCount = Array(7).fill(0);

      querySnapshot.forEach((doc) => {
        const requestData = doc.data();
        const requestDate = requestData.date;

        const index = tempDates.indexOf(requestDate);
        if (index !== -1) {
          updatedCampaignCount[index]++;
        }
      });

      setCampaignCount(updatedCampaignCount);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = dates.map((date, index) => {
    const [yy, mm, dd] = date.split("-");
    const formattedDate = `${dd}/${mm}`;

    return {
      name: formattedDate,
      nv: campaignCount[index],
    };
  });

  return (
    <ResponsiveContainer
      width="100%"
      height="30%"
      minHeight={300}
      className="mx-auto"
    >
      <LineChart
        width="100%"
        height="30%"
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="nv"
          stroke="#8884d8"
          strokeDasharray="5 5"
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d"
          strokeDasharray="3 4 5 2"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
