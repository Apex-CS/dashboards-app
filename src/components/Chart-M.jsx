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
import { OverlayPanel } from 'primereact/components/overlaypanel/OverlayPanel';
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
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
  XYPlot,
  DiscreteColorLegend,
  ScaleUtils,
  Crosshair
} from 'react-vis';
import { Colors, MONTHS } from '../assets/theme';
import Highlight from './charts/Highlight';
import Hammer from 'react-hammerjs';
import { DATA_MONTHS, DATA_DAYS } from './charts/values';

const { i_blue, i_green } = Colors;

export default class M_Chart extends Component {
  state = {
    lastDrawLocation: null,
    inheritProps: {},
    center: 0,
    baseVal: 0,
    crosshairValues: [],
    hintValue: null,
    income: {
      title: 'Income',
      color: i_blue,
      disabled: false,
      data: []
    },
    outcome: {
      title: 'Outcome',
      color: i_green,
      disabled: false,
      data: []
    },
    tabData: [],
    crosshairPosition: 'right',
    crosshairX: 0
  };
  offsetX= 0;
  xDomain = [];
  CHARTS = ['line', 'bar', 'area', 'gradient', 'dot'];

  constructor(props) {
    super(props);
    this._onNearestX = this._onNearestX.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this.showTab = this.showTab.bind(this);
    this.buildDataset(this.props.rangeOfValues);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.chartType === newProps.chartType) {
      this.buildDataset(newProps.rangeOfValues);
    }
  }

  buildDataset(newData) {
    const { income, outcome } = this.state;
    const initial = DATA_MONTHS.findIndex(
      element =>
        element.year === newData.initYear && element.month === newData.initMonth
    );
    const end = DATA_MONTHS.findIndex(
      element =>
        element.year === newData.endYear && element.month === newData.endMonth
    );
    const range = DATA_MONTHS.slice(initial, end + 1);
    income.data = range.map((value, index) => {
      return {
        x: index,
        y: value.income,
        year: value.year,
        month: value.month
      };
    });
    outcome.data = range.map((value, index) => {
      return {
        x: index,
        y: value.outcome,
        year: value.year,
        month: value.month
      };
    });
    this.setState({ income: income, outcome: outcome });
  }
  _onNearestX(values,  {index, event, innerX}) {
    this.offsetX = innerX;
    const { income, outcome } = this.state;
    const DATA = [income.data, outcome.data];
    this.setState({ crosshairValues: DATA.map(d => d[index]) });
  }

  _onMouseLeave() {
    this.setState({ crosshairValues: [] });
  }
  renderChart() {
    const { crosshairValues, income, outcome } = this.state;
    if (this.props.chartType === 'line') {
      return [
        <LineMarkSeries
          animation
          key="one"
          color={income.color}
          data={income.data}
          style={{ strokeWidth: 1 }}
          onNearestX={this._onNearestX}
        />,
        <LineMarkSeries
          animation
          key="two"
          color={outcome.color}
          data={outcome.data}
          style={{ strokeWidth: 1 }}
        />
      ];
    }

    if (this.props.chartType === 'bar') {
      return [
        <VerticalBarSeries key="one" color={income.color} data={income.data} />,
        <VerticalBarSeries
          key="two"
          color={outcome.color}
          data={outcome.data}
        />
      ];
    }
    if (this.props.chartType === 'area') {
      return [
        <AreaSeries key="one" color={income.color} data={income.data} />,
        <AreaSeries key="two" color={outcome.color} data={outcome.data} />
      ];
    }
    if (this.props.chartType === 'gradient') {
      return [
        <AreaSeries
          key="one"
          color={'url(#greenGradient)'}
          data={income.data}
        />,
        <AreaSeries
          key="two"
          color={'url(#blueGradient)'}
          data={outcome.data}
        />
      ];
    }

    return [
      <MarkSeries key="one" color={income.color} data={income.data} />,
      <MarkSeries key="two" color={outcome.color} data={outcome.data} />
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
      right: Math.min(center + baseVal / scale / 2, baseVal),
      left: Math.max(center - baseVal / scale / 2, 0)
    };
    const xScale = ScaleUtils.getAttributeScale(inheritProps, 'x');
    const yScale = ScaleUtils.getAttributeScale(inheritProps, 'y');

    const domainArea = {
      top: yScale.invert(drawArea.top),
      right: xScale.invert(drawArea.right),
      bottom: yScale.invert(drawArea.bottom),
      left: xScale.invert(drawArea.left)
    };
    this.setState({ lastDrawLocation: domainArea });
  }

  pinchInChart(scale) {
    const { center, baseVal, inheritProps } = this.state;
    const drawArea = {
      top: 0,
      bottom: 500,
      right: Math.max(center + baseVal / scale / 2, baseVal),
      left: Math.min(center - baseVal / scale / 2, 0)
    };
    const xScale = ScaleUtils.getAttributeScale(inheritProps, 'x');
    const yScale = ScaleUtils.getAttributeScale(inheritProps, 'y');

    const domainArea = {
      top: yScale.invert(drawArea.top),
      right: xScale.invert(drawArea.right),
      bottom: yScale.invert(drawArea.bottom),
      left: xScale.invert(drawArea.left)
    };
    this.setState({ lastDrawLocation: domainArea });
  }

  setCorrectX() {
    const { baseVal, inheritProps, lastDrawLocation } = this.state;
    inheritProps.xRange[1] = baseVal;
    if (lastDrawLocation) {
      inheritProps.xDomain[0] = lastDrawLocation.left;
      inheritProps.xDomain[1] = lastDrawLocation.right;
    }
  }

  showTab(e) {
    const { income, crosshairPosition, baseVal } = this.state;
    const percent = e.target.width.baseVal.value / income.data.length;
    const point = this.state.crosshairValues[0];
    const data = DATA_DAYS.filter(
      element => element.month == point.month && element.year == point.year
    );
    const dataPoint = income.data.find(
      element => element.month == point.month && element.year == point.year
    );
    this.setState({
      tabData: data,
      crosshairPosition:
        income.data.indexOf(dataPoint) >= income.data.length / 2
          ? 'left'
          : 'right',
      crosshairX:
        income.data.indexOf(dataPoint) >= income.data.length / 2
          ? this.offsetX - 181
          : this.offsetX + 80
    });

    this.op.toggle(e);
  }
  render() {
    const {
      lastDrawLocation,
      crosshairValues,
      income,
      outcome,
      crosshairX,
      inheritProps,
      tabData,
      crosshairPosition
    } = this.state;
    return (
      <div className="chartBox size_M">
        <Row className={'clean-margin-bottom'}>
          <Col s={12}>
            <h1>{this.props.chartType} Chart</h1>
          </Col>
        </Row>
        <Row>
          <Hammer
            onPinchStart={initialSpot => {
              this.setState({
                center: initialSpot.center.x,
                baseVal: initialSpot.target.width.baseVal.value
              });
              this.setCorrectX();
            }}
            onPinchOut={spot => {
              this.pinchOutChart(spot.scale);
            }}
            onPinchIn={spot => {
              this.pinchInChart(spot.scale);
            }}
            onDoubleTap={tap => {
              this.setState({ lastDrawLocation: null });
            }}
            options={{ recognizers: { pinch: { enable: true } } }}
          >
            <div>
              <XYPlot
                height={290}
                width={570}
                animation
                xDomain={
                  lastDrawLocation && [
                    lastDrawLocation.left,
                    lastDrawLocation.right
                  ]
                }
                onMouseLeave={this._onMouseLeave}
              >
                <OverlayPanel
                  ref={el => {
                    this.op = el;
                  }}
                  showCloseIcon={true}
                  className={`overlay-panel-${crosshairPosition}`}
                  style={{ left: crosshairX }}
                >
                  {tabData[0] && (
                    <div>{`${tabData[0].month} ${tabData[0].year}`}</div>
                  )}
                  <DataTable value={tabData}>
                    <Column field="day" header="Day" />
                    <Column field="income" header="In" />
                    <Column field="outcome" header="Out" />
                  </DataTable>
                </OverlayPanel>
                <GradientDefs>
                  <linearGradient
                    id="greenGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor={i_green} stopOpacity={0.5} />
                  </linearGradient>
                  <linearGradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor={i_blue} stopOpacity={0.5} />
                  </linearGradient>
                </GradientDefs>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis
                  tickFormat={x =>
                    x % 1 === 0 && x <= income.data.length - 1
                      ? `${income.data[x].month.substr(0, 3)} ${income.data[
                          x
                        ].year
                          .toString()
                          .substr(2, 4)}`
                      : ''
                  }
                  tickLabelAngle={-45}
                />
                <YAxis
                  tickFormat={p => `$ ${p} k`}
                  tickLabelAngle={-45}
                  left={1}
                />
                {this.renderChart()}
                <Crosshair
                  values={crosshairValues}
                  itemsFormat={values =>
                    values.map(
                      (spot, index) =>
                        index === 0
                          ? { title: 'Income', value: `$ ${spot.y} k` }
                          : { title: 'Outcome', value: `$ ${spot.y} k` }
                    )
                  }
                  titleFormat={values => {
                    return {
                      title: 'Month',
                      value: `${values[0].month} ${values[0].year}`
                    };
                  }}
                  style={{ top: '70%' }}
                />
                <Highlight
                  onBrushEnd={area => {
                    this.setState({
                      lastDrawLocation: area
                    });
                  }}
                  passProps={props => {
                    this.assignProps(props);
                  }}
                  onClick={this.showTab}
                />
              </XYPlot>
            </div>
          </Hammer>
        </Row>
        <Row className='noMarginRow'>
          <div className="pull-right mr-1 marginTop">
            <Button
              waves="light"
              onClick={e => {
                e.preventDefault();
                this.setState({ lastDrawLocation: null });
              }}
            >
              Reset Zoom
            </Button>
          </div>
          <div className="legends">
            <DiscreteColorLegend width={180} items={[income, outcome]} />
          </div>
        </Row>
      </div>
    );
  }
}
