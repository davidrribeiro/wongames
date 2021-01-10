import React, { memo, useState, useEffect } from 'react';
import {Header} from '@buffetjs/custom'; 
import { Table } from '@buffetjs/core';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  padding: 18px 30px;

  p{
    margin-top: 1rem;
  }`

const HomePage = () => {

  const [rows, setRows] = useState([]);

  useEffect(() =>{
    axios.get("https://api.github.com/users/react-avancado/repos")
    .then(res => setRows(res.data))
    .catch(e => strapi.notification.error(`Ops, ${e}`))
  },[])

  const headers = [
    {
      name: 'Name',
      value: 'name',
    },
    {
      name: 'Description',
      value: 'description',
    },
    {
      name: 'Url',
      value: 'html_url',
    },
    
  ];

  return (
    <Wrapper>
     <Header
      title={{ label: "React Avançado Repositories"}}
      content="Lista de repositórios do curso."
     />
     <Table headers={headers} rows={rows}/>
    </Wrapper>
  );
};

export default memo(HomePage);
