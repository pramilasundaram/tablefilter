import {Table} from "reactstrap"
export default function Tablelist({data})
{
  return(
    <Table
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        name
      </th>
      <th>
        email
      </th>      
    </tr>
  </thead>
  <tbody>
    {data.map((value,index)=>{
return(<tr key={value.id}>
      <th scope="row">
      {index+1}
      </th>
      <td>
        {value.name}
      </td>
      <td>
        {value.email}
      </td>
    </tr>)
    })} 
  </tbody>
</Table>
  )
}