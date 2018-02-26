import React, { Component } from 'react';
import '../assets/css/chart.css';
import { Row, Col } from 'react-materialize';
import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  MarkSeries,
  FlexibleWidthXYPlot,
  DiscreteColorLegend,
} from 'react-vis';
import { Colors, MONTHS } from '../assets/theme';
import { DATA } from './charts/values';

const { i_orange, i_aqua } = Colors;

class ProfitChart extends Component {
  state = {
    inheritProps: {},
    profit: {
      title: 'Profit',
      color: i_aqua,
      disabled: false
    },
    /*regular_profit: {
      title: 'Regular Profit',
      color: i_orange,
      disabled: false
    }*/
  };

  constructor(props) {
    super(props);
    this.buildDataset(this.props.rangeOfValues);
  }

  componentWillReceiveProps(newProps) {
    this.buildDataset(newProps.rangeOfValues);
  }

  buildDataset(newData) {
    const { profit } = this.state;
    const initial = DATA.findIndex(
      element =>
        element.year === newData.initYear && element.month === newData.initMonth
    );
    const end = DATA.findIndex(
      element =>
        element.year === newData.endYear && element.month === newData.endMonth
    );
    const range = DATA.slice(initial, end + 1);
    
    profit.data = range.map((value, index) => {
        return {
            x: index,
            y: value.income - value.outcome,
            year: value.year,
            month: value.month
          };
    });
    this.setState({ profit: profit });
  }
  
  assignProps(props) {
    this.setState({ inheritProps: props });
  }

  render() {
    const { profit } = this.state;
    return (
      <div className="chartBox">
        <Col s={12}>
          <h1>Profit Chart</h1>
        </Col>
        
        <div className="legends">
          <DiscreteColorLegend width={180} items={[profit/*, regular_profit*/]} />
        </div>
            <FlexibleWidthXYPlot
              height={500}
              animation
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis
                tickFormat={x =>
                  x % 1 === 0 && x <= profit.data.length - 1
                    ? `${profit.data[x].month.substr(0, 3)} ${profit.data[
                        x
                      ].year
                        .toString()
                        .substr(2, 4)}`
                    : ''
                }
                tickLabelAngle={-45}
              />
              <YAxis tickFormat={p => '$' + p} />
              {/*if (profit.data.y >=7){ profit.color }*/}
              <VerticalBarSeries animation key="profit" color={profit.color} data={profit.data} />
            </FlexibleWidthXYPlot>
      </div>
    );
  }
}

export default ProfitChart;
