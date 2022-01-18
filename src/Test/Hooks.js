import React, { useState } from 'react';
import MaterialTable from "material-table";
import tableIcons from "../services/MaterialTableIcons";

const data = [
    {
        "id": 1,
        "firstName": "Deepak",
        "lastName": "Rajamanickkam",
        "address": "Namakkal, TamilNadu-637001",
        "email": "deepak.rajamanickkam@accenture.com",
        "telNum": "9080583510",
        "companyName": "Accenture",
        "salary": 28312,
        "designation": "Ase",
        "level": "12"
    },
    {
        "id": 2,
        "firstName": "Ashwanth ",
        "lastName": "K.P",
        "address": "Karur, Tamilnadu",
        "email": "ashkp22@gmail.com",
        "telNum": "+919080583510",
        "companyName": "Accenture",
        "salary": 28312,
        "designation": "ASE",
        "level": "12"
    },
    {
        "id": 3,
        "firstName": "Mridula",
        "lastName": "prabhakar",
        "address": "xyz street,\nabc state.",
        "email": "mridula@gmail.com",
        "telNum": "+919080583510",
        "companyName": "Accenture",
        "salary": 28312,
        "designation": "ASE",
        "level": "12"
    },
    {
        "id": 4,
        "firstName": "John",
        "lastName": "john",
        "address": "5/191,Rajiv gandhi Nagar,\nMurugan kovil,\nsalem road,\nNamakkal,\nTamil nadu.\nPin code: 637001",
        "email": "deepaknkl22@gmail.com",
        "telNum": "+919080583510",
        "companyName": "Accenture",
        "salary": 30000,
        "designation": "ASE",
        "level": "12"
    }
]

const columns = [
    {
        title: "Avatar",
        field: "imageUrl",
        render: (rowData) => <img src={rowData.imageUrl} style={{ width: 40, borderRadius: "50%" }} />,
    },
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname" },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
];

export const ImageTable = () => {
    const[val,setVal]=useState(0)
    console.log(val)
    return <MaterialTable title="Basic Table" icons={tableIcons} columns={columns} data={data} />;
};