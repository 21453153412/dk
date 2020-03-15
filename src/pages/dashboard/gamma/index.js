import React from 'react'
import { Helmet } from 'react-helmet'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import { Table } from 'antd'
import General4 from 'components/kit-widgets/General/4'
import List10 from 'components/kit-widgets/Lists/10'
import List16 from 'components/kit-widgets/Lists/16'
import List11 from 'components/kit-widgets/Lists/11'

import {
  inboundBandwidthData,
  outboundBandwidthData,
  topPhotosGraphData,
  supportCasesTableData,
  supportCasesPieData,
} from './data.json'

import styles from './style.module.scss'

const boundChartistOptions = {
  showPoint: true,
  showLine: true,
  showArea: true,
  fullWidth: true,
  showLabel: false,
  axisX: {
    showGrid: false,
    showLabel: false,
    offset: 0,
  },
  axisY: {
    showGrid: false,
    showLabel: false,
    offset: 0,
  },
  chartPadding: 0,
  low: 0,
  plugins: [
    ChartistTooltip({
      anchorToPoint: false,
      appendToBody: true,
      seriesName: false,
    }),
  ],
}

const supportCasesPieOptions = {
  donut: true,
  donutWidth: 35,
  showLabel: false,
  plugins: [
    ChartistTooltip({
      anchorToPoint: false,
      appendToBody: true,
      seriesName: false,
    }),
  ],
}

const supportCasesTableColumns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Amount',
    key: 'amount',
    dataIndex: 'amount',
    render: amount => {
      if (amount === 'Negative') {
        return <span className="text-danger font-weight-bold">{amount}</span>
      }
      return <span className="text-primary font-weight-bold">{amount}</span>
    },
  },
]

class DashboardGamma extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Dashboard Gamma" />
        <div className="row">
          <div className="col-xl-12">
            <div className="cui__utils__heading">
              <strong>Progress Information</strong>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <General4 />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <General4 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <div className="cui__utils__heading mb-0">
                      <strong>Inbound Bandwidth</strong>
                    </div>
                  </div>
                  <div className="card-body">
                    <strong className="font-size-36 text-dark">246Gb</strong>
                  </div>
                  <ChartistGraph
                    data={inboundBandwidthData}
                    options={boundChartistOptions}
                    type="Line"
                    className="height-200"
                  />
                </div>
              </div>
              <div className="col-xl-12">
                <div className="graphCard card">
                  <div className="card-header border-0 pb-0">
                    <div className="cui__utils__heading mb-0">
                      <strong>Outbound Bandwidth</strong>
                    </div>
                  </div>
                  <div className="card-body">
                    <strong className="font-size-36 text-dark">52Gb</strong>
                  </div>
                  <div className="utils__chartist utils__chartist--success">
                    <ChartistGraph
                      data={outboundBandwidthData}
                      options={boundChartistOptions}
                      type="Line"
                      className="height-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card graphCard card--fullHeight">
              <div className="card-header border-0 pb-0">
                <div className="cui__utils__heading mb-0">
                  <strong>RECENT INVITES</strong>
                </div>
              </div>
              <div className="card-body">
                <List10 />
              </div>
              <ChartistGraph
                data={topPhotosGraphData}
                options={boundChartistOptions}
                type="Line"
                className="height-300"
              />
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card card--fullHeight">
              <div className="card-header border-0 pb-0">
                <div className="cui__utils__heading mb-0">
                  <strong className="text-uppercase font-size-16">New Users</strong>
                </div>
              </div>
              <div className="card-body">
                <List16 />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card card--fullHeight">
              <div className="card-header border-0 pb-0">
                <div className="cui__utils__heading mb-0">
                  <strong className="text-uppercase font-size-16">Support cases</strong>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="mb-3">
                      <Table
                        className="utils__scrollTable"
                        scroll={{ x: '100%' }}
                        dataSource={supportCasesTableData}
                        columns={supportCasesTableColumns}
                        pagination={false}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className={`h-100 d-flex flex-column justify-content-center align-items-center ${styles.chartPieExample}`}
                    >
                      <ChartistGraph
                        data={supportCasesPieData}
                        type="Pie"
                        options={supportCasesPieOptions}
                      />
                      <div className="text-center">
                        <span className="mr-2">
                          <span className="kit__utils__donut kit__utils__donut--success"></span>
                          Ready
                        </span>
                        <span className="mr-2">
                          <span className="kit__utils__donut kit__utils__donut--primary"></span>
                          In Progress
                        </span>
                        <span className="mr-2">
                          <span className="kit__utils__donut kit__utils__donut--danger"></span>
                          Defected
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card card--fullHeight">
              <div className="card-header border-0 pb-0">
                <div className="cui__utils__heading mb-0">
                  <strong className="text-uppercase font-size-16">Finance Stats</strong>
                </div>
              </div>
              <div className="card-body">
                <List11 />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardGamma
