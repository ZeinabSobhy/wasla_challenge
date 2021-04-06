import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getonfirmedAndDeaths } from "../../../Api/Coron";
import Card from "@material-ui/core/Card";
import "./style.scss";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Mutable } from '@devexpress/dx-core';
import { Animation } from '@devexpress/dx-react-chart';


const Click = (props) => {
  let { country } = useParams();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState({ death: 0, confirmed: 0 });
 
  useEffect(() => {
    getonfirmedAndDeaths(country).then(
      (res) => {
        setData(res?.data);
        console.log("REs", res);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [country]);

  useEffect(() => {
    if (data.length > 0) {
      let sumDeath = 0;
      let sumConfirmed = 0;
      data.forEach((x) => {
        sumDeath = sumDeath + x.Deaths;
        sumConfirmed = sumConfirmed + x.Confirmed;
      });
      console.log(sumDeath);
      setStatus({ death: sumDeath, confirmed: sumConfirmed });
    }
  }, [data]);


  return (
   
    <div>
      <Card className="card_detils">
        <div className="details_country">Details About Country</div>
        <div>
          Country:

        {country}
        </div>
        <br />
        <div>
         Total Affected cases:

        {status.confirmed}
        </div>
        <br />
      <div>
         Total:Death:

      {status.death}
      </div>
      </Card>
{/* 
      <Paper>
        <Chart
          chartdata={setChartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          <Title text="World population" />
          <Animation />
        </Chart>
      </Paper> */}

      
    </div>

  );
};

export default Click;




