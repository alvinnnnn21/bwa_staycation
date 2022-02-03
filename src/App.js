import React from 'react';
import './assets/scss/style.scss';
import { 
    Button
} from './components';

const App = () => {
    return (
        <div> 
            <Button type="link" isExternal={false} isPrimary>123</Button>
        </div>
    )    
}

export default App;