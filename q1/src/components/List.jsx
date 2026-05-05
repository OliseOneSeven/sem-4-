function List({ employee, onDelete }) {
  return (
    <>
      <h1>Employee List</h1>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp, _) => {
            return (
              <tr key={emp.empId}>
                <td>{emp.empId}</td>
                <td>{emp.name}</td>
                <td>{emp.salary}</td>
                <td>
                  <button onClick={() => onDelete(emp.empId)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default List;
