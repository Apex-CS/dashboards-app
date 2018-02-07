import _ from "lodash";
import React, { Component } from "react";
import '../assets/css/chart.css';
import { Button, Dropdown, NavItem, Collection, CollectionItem } from "react-materialize";
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

const i_green = '#72C168';
const i_blue = '#146CB5';

class Chart extends Component {
  state = { typeOfChart: "line" };
  data1 = [
    { x: 0.5, y: 1 },
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
        <LineSeries color={i_blue} animation data={this.data1} style={{strokeWidth: 5}} />,
        <LineSeries color={i_green} animation data={this.data2} style={{strokeWidth: 5}} />
      ];
    }
    if (this.state.typeOfChart === "bar") {
      return [
        <VerticalBarSeries color={i_blue} animation data={this.data1} />,
        <VerticalBarSeries color={i_green} animation data={this.data2} />
      ];
    }
    if (this.state.typeOfChart === "area") {
      return [
        <AreaSeries color={i_blue} animation data={this.data1} />,
        <AreaSeries color={i_green} animation data={this.data2} />
      ];
    }
    if (this.state.typeOfChart === "gradient") {
      return [
        <AreaSeries color={'url(#greenGradient)'} animation data={this.data1} />,
        <AreaSeries color={'url(#blueGradient)'} animation data={this.data2} />
      ];
    }

    return [
      <MarkSeries color={i_blue} animation data={this.data1} />,
      <MarkSeries color={i_green} animation data={this.data2} />
    ];
  }

  render() {
    return (
      <div>
        <Dropdown trigger={<Button>Select the type of chart!</Button>}>
          {this.chartOptions}
        </Dropdown>
       
       
        <XYPlot height={500} width={500}>
          <GradientDefs>
            <linearGradient id="greenGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={i_green} stopOpacity={0.5}/>
            </linearGradient>
            <linearGradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={i_blue} stopOpacity={0.5}/>
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
