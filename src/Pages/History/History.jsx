import React from 'react';
import Card from '../../Components/CardHistory/Card';
import { DataHistory } from './StaticData';
function History(props) {
    return (
        <div className="container mx-auto page-wrapper">
            <br />
            {
                DataHistory.map((item, idx) => (
                    <Card data={item} key={idx}/>
                ))
            }
        </div>
    );
}

export default History;