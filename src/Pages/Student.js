import React from 'react'
import { useState, useEffect } from 'react'; //check
import axios from 'axios';


const Student = () => {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [age, setAge] = useState();
    const [students, setStudents] = useState([]); //check

    // useEffect(() => {
    //     fetch('http://localhost/sat-app/db.php')
    //         .then((response) => response.json())
    //         .then((data) => setStudents(data));
    // })

    useEffect(() => {
        const url = 'http://localhost/sat-app/db.php'; //check
        axios.get(url).then((response) => {
            setStudents(response.data);
            console.log(students);
        });
    }, []); //check

    const submitBtn = (e) => {
        e.preventDefault();
        let getData = new FormData();
        getData.append('fname', fname); //key-value pairs
        getData.append('lname', lname); //key-value pairs
        getData.append('age', age); //key-value pairs
        getData.append('function', 'insert');

        axios({
            method: 'POST', //either GET or POST
            url: 'http://localhost/sat-app/db.php', //db link
            data: getData,
            config: "Content-Type='multipart/form-data'"
        }).then((response) => {
            alert('Added successfully!');
            const url = 'http://localhost/sat-app/db.php';
            axios.get(url).then((response) => {
                setStudents(response.data);
                console.log(students);
            });
        });
    }

    const deleteBtn = (e) => {
        let getData = new FormData();
        getData.append('stud_id', e.currentTarget.id);
        getData.append('function', 'delete');

        axios({
            method: 'POST', //either GET or POST
            url: 'http://localhost/sat-app/db.php', //db link
            data: getData,
            config: "Content-Type='multipart/form-data'"
        }).then((response) => {
            alert('Deleted successfully!');
            const url = 'http://localhost/sat-app/db.php';
            axios.get(url).then((response) => {
                setStudents(response.data);
                console.log(students);
            });
        });
    }

    const updateBtn = (e) => {
        let getData = new FormData();
        getData.append('stud_id', e.currentTarget.title);
        getData.append('fname', document.getElementById('fname' + e.currentTarget.title).value) //document.getElementById().value
        getData.append('lname', document.getElementById('lname' + e.currentTarget.title).value) //document.getElementById().value
        getData.append('age', document.getElementById('age' + e.currentTarget.title).value) //document.getElementById().value
        getData.append('function', 'update');

        axios({
            method: 'POST', //either GET or POST
            url: 'http://localhost/sat-app/db.php', //db link
            data: getData,
            config: "Content-Type='multipart/form-data'"
        }).then((response) => {
            alert('Updated successfully!');
            const url = 'http://localhost/sat-app/db.php';
            axios.get(url).then((response) => {
                setStudents(response.data);
                console.log(students);
            });
        });
    }

    return (
        <main className="container-fluid">
            <h1 className='display-4 lead my-3 text-center'>Student List</h1>
            <hr />
            <section className="container text-center my-5 border border-2 w-50 py-4 rounded-3 border-dark bg-success">
                <form className="w-50 mx-auto">
                    <input type="text" className="form-control my-2" name="firstname" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="First Name" />
                    <input type="text" className="form-control my-2" name="lastname" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Last Name" />
                    <input type="number" className="form-control my-2" name="age" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                    <input type="submit" className="btn btn-outline-light btn-lg mt-3" name="submit" onClick={submitBtn} />

                </form>
            </section>

            <br />
            <table className='container table table-striped table-bordered text-center'>
                <thead className="text-bg-success">
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((val) => {
                        return (
                            <tr key={val.stud_id}>
                                <td><input id={'fname' + val.stud_id} defaultValue={val.firstname} /></td>
                                <td><input id={'lname' + val.stud_id} defaultValue={val.lastname} /></td>
                                <td><input id={'age' + val.stud_id} defaultValue={val.age} /></td>
                                {/* <td>
                                    <button title={val.stud_id + val.firstname}>Update</button>
                                </td> */}
                                <td>
                                    <button className="btn btn-primary" title={val.stud_id} onClick={updateBtn}>Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" id={val.stud_id} onClick={deleteBtn}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </main>
    );
};


export default Student