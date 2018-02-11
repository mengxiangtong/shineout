/**
 * cn - 固定表头 \n *固定表头需要设置整个表格的高度
 * en - Fixed head
 */
import React, { Fragment } from 'react'
import { Table } from 'shineout'
import { getData } from 'doc/data/table'

const data = getData(20)

export default function () {
  const columns = [
    {
      title: 'id',
      render: 'id',
      width: 36,
    },
    {
      title: 'Name',
      render: d => `${d.firstName} ${d.lastName}`,
    },
    {
      title: 'Country',
      render: 'country',
    },
    {
      title: 'Position',
      render: 'position',
    },
    {
      title: 'Office',
      render: 'office',
    },
    {
      title: 'Start Date',
      render: 'start',
    },
    {
      title: 'Salary',
      render: d => `$${d.salary.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}`,
    },
  ]

  return (
    <Fragment>
      <Table
        fixed="both"
        keygen="id"
        width={1500}
        style={{ height: 400 }}
        columns={columns}
        data={data}
      />
      <Table
        fixed="y"
        data={data}
        keygen="id"
        style={{ height: 300 }}
        columns={columns.slice(0, 4)}
      />
    </Fragment>
  )
}
