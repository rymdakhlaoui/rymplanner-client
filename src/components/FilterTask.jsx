import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React from 'react'

const FilterTask = ({ filter, setFilter }) => {
  const items = [
    {
      key: "1",
      label: (
        <p rel="noopener noreferrer" onClick={() => setFilter("All")}>
          All
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <p rel="noopener noreferrer" onClick={() => setFilter("Done")}>
          Done
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <p rel="noopener noreferrer" onClick={() => setFilter("Undone")}>
          Undone
        </p>
      ),
    },
  ];
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
      >
        <Space>
          Filter: <b>{filter}</b>
          <DownOutlined />
        </Space>
      </Dropdown>
    </>
  );
};

export default FilterTask