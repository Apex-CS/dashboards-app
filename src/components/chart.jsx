import _ from "lodash";
import React, { Component } from "react";
import "../assets/css/chart.css";
import {
  Button,
  Dropdown,
  NavItem,
  Collection,
  CollectionItem
} from "react-materialize";
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
  GradientDefs,
  Hint
} from "react-vis";
import { Colors } from "../assets/theme";

const { i_blue, i_green } = Colors;

class Chart extends Component {
  ASPECT_RATIO = 1.2;
  state = {
    typeOfChart: "line",
    hintValue: {},
    visSize: 500,
    hoveredPoint: false
  };
  data1 = [

    { x: 0, y: 28 },
    { x: 1, y: 31 },
    { x: 2, y: 4.2 },
    { x: 3, y: 9 },
    { x: 4, y: 8 },
    { x: 5, y: 1 },
    { x: 6, y: 7 },
    { x: 7, y: 6 },
    { x: 8, y: 3 },
    { x: 9, y: 2 },
    { x: 10, y: 1 },
    { x: 11, y: 15 },
  ];
  data2 = [
    { x: 0, y: 2 },
    { x: 1, y: 8 },
    { x: 2, y: 12 },
    { x: 3, y: 22 },
    { x: 4, y: 21 },
    { x: 5, y: 10 },
    { x: 6, y: 7 },
    { x: 7, y: 6 },
    { x: 8, y: 30 },
    { x: 9, y: 21 },
    { x: 10, y: 1 },
    { x: 11, y: 10 },
  ];
  CHARTS = ["line", "bar", "area", "gradient", "dot"];

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

  constructor(props) {
    super(props);
  }
  renderChart() {
    if (this.state.typeOfChart === "line") {
      return [
        <LineSeries
          key="one"
          color={i_blue}
          data={this.data1}
          style={{ strokeWidth: 5 }}
        />,
        <LineSeries
          key="two"
          color={i_green}
          data={this.data2}
          style={{ strokeWidth: 5 }}
        />
      ];
    }
    if (this.state.typeOfChart === "bar") {
      return [
        <VerticalBarSeries key="one" color={i_blue}  data={this.data1} />,
        <VerticalBarSeries key="two" color={i_green}  data={this.data2} />
      ];
    }
    if (this.state.typeOfChart === "area") {
      return [
        <AreaSeries key="one" color={i_blue}  data={this.data1} />,
        <AreaSeries key="two" color={i_green}  data={this.data2} />
      ];
    }
    if (this.state.typeOfChart === "gradient") {
      return [
        <AreaSeries key="one" color={"url(#greenGradient)"} data={this.data1} />,
        <AreaSeries key="two" color={"url(#blueGradient)"}  data={this.data2} />
      ];
    }

    return [
      <MarkSeries key="one" color={i_blue} data={this.data1} />,
      <MarkSeries key="two" color={i_green}  data={this.data2} />,
    ];
  }
  
  render() {
    const MESES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const { visSize, hoveredPoint } = this.state;
    return (
      <div>
        <Dropdown trigger={<Button>Select the type of chart!</Button>}>
          {this.chartOptions}
        </Dropdown>

        <XYPlot height={visSize * this.ASPECT_RATIO} width={visSize}>
          <GradientDefs>
            <linearGradient id="greenGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={i_green} stopOpacity={0.5} />
            </linearGradient>
            <linearGradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={i_blue} stopOpacity={0.5} />
            </linearGradient>
          </GradientDefs>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis tickFormat={x => MESES[x]} tickLabelAngle={-45} />
          
          <YAxis tickFormat={p => '$' + p} />
          {this.renderChart()}
        </XYPlot>

        {`Visualization size: ${visSize}`}
        <input
          onChange={e => this.setState({ visSize: e.target.value })}
          type="range"
          min={100}
          max={1000}
          value={visSize}
        />
      </div>
    );
  }
}

export default Chart;
