import _ from "lodash";
import React, { Component } from "react";
import { Button, Dropdown, NavItem } from "react-materialize";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  VerticalBarSeries,
  MarkSeries,
  AreaSeries,
  GradientDefs
} from "react-vis";

class Chart extends Component {
  state = { typeOfChart: "line" };
  data1 = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 }
  ];
  data2 = [
    { x: 0, y: 3 },
    { x: 1, y: 6 },
    { x: 2, y: 8 },
    { x: 3, y: 3 },
    { x: 4, y: 9 },
    { x: 5, y: 0 },
    { x: 6, y: 4 },
    { x: 7, y: 7 },
    { x: 8, y: 1 },
    { x: 9, y: 7 }
  ];
  CHARTS = ['line', 'bar', 'area','gradient', 'dot'];

  chartOptions = _.map(this.CHARTS, chart => (
    <NavItem
      key={chart}
      onClick={e => {
        e.preventDefault();
        this.setState({ typeOfChart: chart });
      }}
    >
      {chart} chart
    </NavItem>
  ));

  renderChart() {
    if (this.state.typeOfChart === "line") {
      return [
        <LineSeries color={'blue'} animation data={this.data1} />,
        <LineSeries color={'green'} animation data={this.data2} />
      ];
    }
    if (this.state.typeOfChart === "bar") {
      return [
        <VerticalBarSeries color={'blue'} animation data={this.data1} />,
        <VerticalBarSeries color={'green'} animation data={this.data2} />
      ];
    }
    if (this.state.typeOfChart === "area") {
      return [
        <AreaSeries color={'blue'} animation data={this.data1} />,
        <AreaSeries color={'green'} animation data={this.data2} />
      ];
    }
    if (this.state.typeOfChart === "gradient") {
      return [
        <AreaSeries color={'url(#greenGradient)'} animation data={this.data1} />,
        <AreaSeries color={'url(#blueGradient)'} animation data={this.data2} />
      ];
    }

    return [
      <MarkSeries color={'blue'} animation data={this.data1} />,
      <MarkSeries color={'green'} animation data={this.data2} />
    ];
  }

  render() {
    return (
      <div>
        <Dropdown trigger={<Button>Select the type of chart!</Button>}>
          {this.chartOptions}
        </Dropdown>
        <XYPlot height={300} width={300}>
          <GradientDefs>
            <linearGradient id="greenGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="green" stopOpacity={0.4}/>
            </linearGradient>
            <linearGradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="blue" stopOpacity={0.4}/>
            </linearGradient>
          </GradientDefs>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {this.renderChart()}
        </XYPlot>
      </div>
    );
  }
}

export default Chart;
