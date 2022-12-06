import Main from '../shared/layout/Main';
import Table from '../components/table/Table';
import './ui/styles/index.css';
import { withProviders } from './providers';
import { Suspense } from 'react';
import { Routing } from '../pages';

const App = () => {
    return (
        <Suspense fallback="Loading...">
            <Routing />
        </Suspense>
    );
};

export default withProviders(App);
