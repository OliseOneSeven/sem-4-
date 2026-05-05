import { useState } from 'react';

function Form({ onSave, employee }) {
  const [empId, setEmpId] = useState('');
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [msg, setMsg] = useState('');

  const saveEmployee = (e) => {
    e.preventDefault();

    if (empId.trim() == '' || name.trim() == '' || salary.trim() == '') {
      setMsg('All fields are required.');
      return;
    } else if (employee.find((emp) => emp.empId == empId)) {
      setMsg('empId must be unique.');
      return;
    } else {
      setMsg('');
    }

    let emp = {
      empId: empId,
      name: name,
      salary: salary,
    };

    onSave(emp);

    setEmpId('');
    setName('');
    setSalary('');
  };

  return (
    <>
      <h1>Add new</h1>
      <p>{msg}</p>
      <form onSubmit={saveEmployee}>
        <table border="1" cellPadding="5" cellSpacing="0">
          <tbody>
            <tr>
              <td>EmpId:</td>
              <td>
                <input
                  type="number"
                  name="empId"
                  value={empId}
                  onChange={(e) => setEmpId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Salary:</td>
              <td>
                <input
                  type="number"
                  name="salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>
                <button type="submit">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default Form;
