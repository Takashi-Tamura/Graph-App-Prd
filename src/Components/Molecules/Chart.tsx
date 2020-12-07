import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { GraphActions } from "../../Redux/Graph/action";

type Props = {
  country?: string,
  model?: any,
}

const Chart: React.FC<Props> = ({ country, model }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    if (country) dispatch(GraphActions.DelCountry(country))
  }

  return (
    <div>
      <StyleChart>
        <LineChart
          width={600}
          height={300}
          data={model}
          margin={{ top: 5, right: 20, bottom: 5, left: 50 }}>
            <Line type="monotone" dataKey="Population" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="Year" />
            <YAxis dataKey="Population"/>
            <Tooltip />
        </LineChart>
        {
          country && (
            <div>
              <h2>{country}</h2>
              <button onClick={deleteHandler}>DELETE</button>
            </div>
          )
        }
      </StyleChart>
    </div>
  )
}

const StyleChart = styled.div`
  width: 700px;
  margin: 0 auto;
`;

export default Chart;