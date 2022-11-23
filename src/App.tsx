import './index.css';
import Main from './components/layout/Main';
import Table from './components/table/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useApi from './hooks/useApi';

function App() {
    const { data, loading } = useApi();
    console.log('data', data);
    return (
        <Main>
            <Table />
        </Main>
    );
}

export default App;
