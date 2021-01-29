import React from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
    )
}

const TableBody = (props) => {
    const rows = props.Data.map((row, index) => {
      return (
        <tr key={index}>
        <td>{row.title}</td>
        <td>{row.body}</td>
        <td>
            <button onClick={() => props.removeData(index)}>Delete</button>
        </td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const {Data, removeData} = props
  
    return (
      <table>
        <TableHeader />
        <TableBody Data={Data} removeData={removeData} />
      </table>
    )
}

export default Table