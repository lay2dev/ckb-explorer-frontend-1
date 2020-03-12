import React from 'react'
import { Link } from 'react-router-dom'
import 'default-passive-events'
import Content from '../../components/Content'
import i18n from '../../utils/i18n'
import { ChartsPanel, ChartCardPanel } from './styled'

interface ChartData {
  title: string
  chart: string
  path: string
}

const ChartCard = ({ chartData }: { chartData: ChartData }) => {
  return (
    <ChartCardPanel>
      <Link to={chartData.path}>
        <div className="chart__card_title">{chartData.title}</div>
        <div className="chart__card_body">
          <img alt="charts" src={chartData.chart} />
        </div>
      </Link>
    </ChartCardPanel>
  )
}

export default () => {
  const charts: ChartData[] = [
    {
      title: `${i18n.t('block.difficulty')} & ${i18n.t('block.hash_rate')}`,
      chart: 'http://yangyang.dev.nervos.tech/path/difficulty_hash_rate.png',
      path: '/charts/difficulty-hash-rate',
    },
    {
      title: `${i18n.t('block.difficulty')} & ${i18n.t('block.uncle_rate')}`,
      chart: 'http://yangyang.dev.nervos.tech/path/difficulty_uncle_rate.png',
      path: '/charts/difficulty-uncle-rate',
    },
    {
      title: `${i18n.t('block.difficulty')}`,
      chart: 'http://yangyang.dev.nervos.tech/path/difficulty.png',
      path: '/charts/difficulty',
    },
    {
      title: `${i18n.t('block.hash_rate')}`,
      chart: 'http://yangyang.dev.nervos.tech/path/hash_rate.png',
      path: '/charts/hash-rate',
    },
    {
      title: `${i18n.t('block.uncle_rate')}`,
      chart: 'http://yangyang.dev.nervos.tech/path/uncle_rate.png',
      path: '/charts/uncle-rate',
    },
    {
      title: `${i18n.t('statistic.transaction_count')}`,
      chart: 'http://yangyang.dev.nervos.tech/path/transaction_count.png',
      path: '/charts/transaction-count',
    },
    {
      title: `${i18n.t('statistic.address_count')}`,
      chart: 'http://yangyang.dev.nervos.tech/path/address_count.png',
      path: '/charts/address-count',
    },
    {
      title: i18n.t('statistic.cell_count'),
      chart: 'http://yangyang.dev.nervos.tech/path/cell_count.png',
      path: '/charts/cell-count',
    },
    {
      title: `${i18n.t('statistic.total_dao_deposit')}`,
      chart: 'http://yangyang.dev.nervos.tech/path/total_dao_deposit.png',
      path: '/charts/total-dao-deposit',
    },
    {
      title: `${i18n.t('statistic.balance_ranking')}`,
      chart: 'http://yangyang.dev.nervos.tech/path/address_balance_rank.png',
      path: '/charts/address-balance-rank',
    },
  ]

  return (
    <Content>
      <ChartsPanel>
        {charts.map(chart => (
          <ChartCard chartData={chart} key={chart.title} />
        ))}
      </ChartsPanel>
    </Content>
  )
}
