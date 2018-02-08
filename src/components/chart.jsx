import _ from 'lodash';
import React, { Component } from 'react';
import '../assets/css/chart.css';
import {
  Button,
  Dropdown,
  NavItem,
  Collection,
  CollectionItem
} from 'react-materialize';
import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  VerticalBarSeries,
  MarkSeries,
  AreaSeries,
  GradientDefs,
  FlexibleWidthXYPlot,
  DiscreteColorLegend
} from 'react-vis';
import { Colors, MONTHS } from '../assets/theme';
import Highlight from './charts/Highlight';

const { i_blue, i_green } = Colors;

class Chart extends Component {
  state = {
    typeOfChart: 'line',
    lastDrawLocation: null
  };
  INCOME = {
    title: 'Income',
    color: i_blue,
    disabled: false,
    data: [
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
      { x: 11, y: 15 }
    ]
  };
  OUTCOME = {
    title: 'Outcome',
    color: i_green,
    disabled: false,
    data: [
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
      { x: 11, y: 10 }
    ]
  };
  CHARTS = ['line', 'bar', 'area', 'gradient', 'dot'];

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
    if (this.state.typeOfChart === 'line') {
      return [
        <LineSeries
          key="one"
          color={this.INCOME.color}
          data={this.INCOME.data}
          style={{ strokeWidth: 5 }}
        />,
        <LineSeries
          key="two"
          color={this.OUTCOME.color}
          data={this.OUTCOME.data}
          style={{ strokeWidth: 5 }}
        />
      ];
    }
    if (this.state.typeOfChart === 'bar') {
      return [
        <VerticalBarSeries
          key="one"
          color={this.INCOME.color}
          data={this.INCOME.data}
        />,
        <VerticalBarSeries
          key="two"
          color={this.OUTCOME.color}
          data={this.OUTCOME.data}
        />
      ];
    }
    if (this.state.typeOfChart === 'area') {
      return [
        <AreaSeries
          key="one"
          color={this.INCOME.color}
          data={this.INCOME.data}
        />,
        <AreaSeries
          key="two"
          color={this.OUTCOME.color}
          data={this.OUTCOME.data}
        />
      ];
    }
    if (this.state.typeOfChart === 'gradient') {
      return [
        <AreaSeries
          key="one"
          color={'url(#greenGradient)'}
          data={this.INCOME.data}
        />,
        <AreaSeries
          key="two"
          color={'url(#blueGradient)'}
          data={this.OUTCOME.data}
        />
      ];
    }

    return [
      <MarkSeries
        key="one"
        color={this.INCOME.color}
        data={this.INCOME.data}
      />,
      <MarkSeries
        key="two"
        color={this.OUTCOME.color}
        data={this.OUTCOME.data}
      />
    ];
  }

  render() {
    const { lastDrawLocation } = this.state;
    return (
      <div>
        <Dropdown trigger={<Button>Select the type of chart!</Button>}>
          {this.chartOptions}
        </Dropdown>
        <FlexibleWidthXYPlot
          height={500}
          animation
          xDomain={
            lastDrawLocation && [lastDrawLocation.left, lastDrawLocation.right]
          }
        >
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
          <XAxis tickFormat={x => MONTHS[x]} tickLabelAngle={-45} />
          <YAxis tickFormat={p => '$' + p} />
          {this.renderChart()}
          <Highlight
            onBrushEnd={area => {
              this.setState({
                lastDrawLocation: area
              });
            }}
          />
        </FlexibleWidthXYPlot>
        <DiscreteColorLegend width={180} items={[this.INCOME, this.OUTCOME]} />
        <Button
          onClick={() => {
            this.setState({ lastDrawLocation: null });
          }}
        >
          Reset Zoom
        </Button>
      </div>
    );
  }
}

export default Chart;
