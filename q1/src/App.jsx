import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

function App() {
  let employeeStr = localStorage.getItem('employee');
  let employeeData = [];
  if (employeeStr) {
    employeeData = JSON.parse(employeeStr);
  }

  const [employee, setEmployee] = useState(employeeData);

  useEffect(() => {
    localStorage.setItem('employee', JSON.stringify(employee));
  }, [employee]);

  const [search, setSearch] = useState('');
  const deleteEmp = (empId) => {
    if (confirm('Are you sure to delete?')) {
      setEmployee((prev) => prev.filter((emp) => emp.empId != empId));
    }
  };

  let filtered = employee.filter((emp, _) => {
    return emp.name.toLowerCase().includes(search.toLowerCase());
  });

  const saveEmployee = (emp) => {
    setEmployee((prev) => [...prev, emp]);
  };

  return (
    <>
      <h1>Employee</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <Form onSave={saveEmployee} employee={employee} />
            </td>
            <td>
              search:
              <input
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <List employee={filtered} onDelete={deleteEmp} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default App;
