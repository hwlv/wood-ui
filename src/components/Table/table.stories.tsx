import React, { useCallback, useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import Table from "./table"
import { ColumnsType } from "./types"

const meta = {
  title: "Table",
  component: Table,
  // parameters: {
  //   docs: {
  //     page: WelcomeMDX
  //   }
  // }
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

interface DataType {
  key: string
  name: string
  age: number
  address: string
}

const dataSource: DataType[] = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
]

const scrollDataSource: DataType[] = [
  {
    key: "1",
    name: "杨幂",
    age: 28,
    address: "上海市徐汇区漕溪北路888号",
  },
  {
    key: "2",
    name: "刘亦菲",
    age: 34,
    address: "北京市朝阳区三里屯路5号",
  },
  {
    key: "3",
    name: "周杰伦",
    age: 42,
    address: "台北市信义区松山路20号",
  },
  {
    key: "4",
    name: "迪丽热巴",
    age: 30,
    address: "乌鲁木齐市天山区解放南路66号",
  },
  {
    key: "5",
    name: "吴亦凡",
    age: 28,
    address: "广州市天河区珠江新城花城大道1号",
  },
  {
    key: "6",
    name: "范冰冰",
    age: 39,
    address: "北京市朝阳区工体北路11号",
  },
  {
    key: "7",
    name: "王思聪",
    age: 34,
    address: "北京市海淀区西四环北路32号",
  },
  {
    key: "8",
    name: "张艺兴",
    age: 29,
    address: "重庆市渝中区解放碑步行街99号",
  },
  {
    key: "9",
    name: "杨颖",
    age: 32,
    address: "上海市静安区南京西路100号",
  },
  {
    key: "10",
    name: "鹿晗",
    age: 31,
    address: "北京市海淀区中关村大街18号",
  },
]

const columns: ColumnsType<DataType> = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
]

export const BaseTable = () => (
  <>
    <Table columns={columns} bordered dataSource={dataSource} />
  </>
)
BaseTable.storyName = "纵向-基本表格"

export const BaseSizeTable = () => (
  <>
    <Table
      header={{
        width: "100px",
      }}
      bordered
      size="small"
      columns={columns}
      dataSource={dataSource}
    />
  </>
)
BaseSizeTable.storyName = "纵向-小尺寸表格"

export const ScrollTable = () => {
  return (
    <>
      <Table
         header={{
          width: "100px",
        }}
        scroll={{ x: 1300 }}
        bordered
        columns={columns}
        dataSource={scrollDataSource}
      />
    </>
  )
}
ScrollTable.storyName = "纵向-滚动的表格"

export const CustomColumnsTable = () => {
  const [age, setAge] = useState<string>()

  const renderColumns: ColumnsType<DataType> = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      render: useCallback(() => {
        return <input onChange={(e) => setAge(e.target.value)} />
      }, []), // Empty dependency array to ensure the same callback is used
      // render() {
      //   return <input onChange={(e) => setAge(e.target.value)} />
      // },
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ]
  return (
    <>
      <div>输入年龄：{age}</div>
      <Table
         header={{
          width: "100px",
        }}
        scroll={{ x: 1300 }}
        bordered
        columns={renderColumns}
        dataSource={dataSource}
      />
    </>
  )
}
CustomColumnsTable.storyName = "自定义列表格"

export const FixedColumnsTable = () => {
  const [age, setAge] = useState<string>()

  const renderColumns: ColumnsType<DataType> = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      fixed: "left",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
      fixed: "left",
    },
  ]
  return (
    <>
      <div>输入年龄：{age}</div>
      <Table
         header={{
          width: "100px",
        }}
        scroll={{ x: 1300 }}
        bordered
        columns={renderColumns}
        dataSource={scrollDataSource}
      />
    </>
  )
}
FixedColumnsTable.storyName = "固定列列表格"
