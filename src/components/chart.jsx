import _ from 'lodash';
import React, { Component } from 'react';
import '../assets/css/chart.css';
import {
  Button,
  Collection,
  CollectionItem,
  Row,
  Col, 
  Dropdown
} from 'react-materialize';
import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineMarkSeries,
  VerticalBarSeries,
  MarkSeries,
  AreaSeries,
  GradientDefs,
  FlexibleWidthXYPlot,
  DiscreteColorLegend,
  ScaleUtils
} from 'react-vis';
import { Colors, MONTHS } from '../assets/theme';
import Highlight from './charts/Highlight';
import Hammer from 'react-hammerjs';

const { i_blue, i_green } = Colors;

class Chart extends Component {
  state = {
    lastDrawLocation: null,
    inheritProps: {},
    center: 0,
    baseVal: 0
  };
  xDomain = [];

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
  renderChart() {
    if (this.props.chartType === 'line') {
      return [
        <LineMarkSeries
          key="one"
          color={this.INCOME.color}
          data={this.INCOME.data}
          style={{ strokeWidth: 3 }}
        />,
        <LineMarkSeries
          key="two"
          color={this.OUTCOME.color}
          data={this.OUTCOME.data}
          style={{ strokeWidth: 3 }}
        />
      ];
    }

    if (this.props.chartType === 'bar') {
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
    if (this.props.chartType === 'area') {
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
    if (this.props.chartType === 'gradient') {
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

  assignProps(props) {
    this.setState({ inheritProps: props });
  }

  pinchOutChart(scale) {
    const { center, baseVal, inheritProps } = this.state;
    const drawArea = {
      top: 0,
      bottom: 500,
      right: Math.min(center + ((baseVal / scale) / 2), baseVal),
      left: Math.max(center - ((baseVal / scale) / 2), 0),
    }
    const xScale = ScaleUtils.getAttributeScale(inheritProps, 'x');
    const yScale = ScaleUtils.getAttributeScale(inheritProps, 'y');

    const domainArea = {
      top: yScale.invert(drawArea.top),
      right: xScale.invert(drawArea.right),
      bottom: yScale.invert(drawArea.bottom),
      left: xScale.invert(drawArea.left)
    }
    this.setState({ lastDrawLocation: domainArea });
  }

  pinchInChart(scale) {
    const { center, baseVal, inheritProps } = this.state;
    const drawArea = {
      top: 0,
      bottom: 500,
      right: Math.max(center + ((baseVal / scale) / 2), baseVal),
      left: Math.min(center - ((baseVal / scale) / 2), 0),
    }
    const xScale = ScaleUtils.getAttributeScale(inheritProps, 'x');
    const yScale = ScaleUtils.getAttributeScale(inheritProps, 'y');

    const domainArea = {
      top: yScale.invert(drawArea.top),
      right: xScale.invert(drawArea.right),
      bottom: yScale.invert(drawArea.bottom),
      left: xScale.invert(drawArea.left)
    }
    this.setState({ lastDrawLocation: domainArea });
  }

  setCorrectX(){
    const {baseVal, inheritProps, lastDrawLocation} = this.state;
    inheritProps.xRange[1] = baseVal;
    if (lastDrawLocation) {
      inheritProps.xDomain[0] = lastDrawLocation.left;
      inheritProps.xDomain[1] = lastDrawLocation.right;
    }
  }
  render() {
    const { lastDrawLocation } = this.state;
    return (
      <div className="chartBox">
        <Col s={12} ><h1>{this.props.chartType} Chart</h1></Col>
        <div className="pull-right mr-1">
        <Button
          onClick={(e) => {
            e.preventDefault();
            this.setState({ lastDrawLocation: null });
          }}
        >
          Reset Zoom
        </Button>
      </div>
      <div className="pull-right mt--10 text-center">
        <DiscreteColorLegend width={180} items={[this.INCOME, this.OUTCOME]} />
      </div>
        <Hammer
          onPinchStart={initialSpot => {
            this.setState({ center: initialSpot.center.x, baseVal: initialSpot.target.width.baseVal.value })
            this.setCorrectX();
          }}
          onPinchOut={spot => {
            this.pinchOutChart(spot.scale);
          }}
          onPinchIn={spot => {
            this.pinchInChart(spot.scale);
          }}
          onTap={tap => {
            this.setState({ lastDrawLocation: null });
          }}
          options={{ recognizers: { pinch: { enable: true } } }}>
          <div>
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
                passProps={props => {
                  this.assignProps(props);
                }}
              />
            </FlexibleWidthXYPlot>
          </div>
        </Hammer>
      </div>
    );
  }
}

export default Chart;
