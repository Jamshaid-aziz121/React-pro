import { useState } from 'react';
import { tabs } from './tab.js';
import '../Tabbing/tabbing.css';
import { Button, Container, Row } from 'react-bootstrap';

function Tabbing() {

    const [activetab, setActiveTab] = useState(0)
    const [activeContent, setActiveContent] = useState(tabs[0])

    const changeData = (indexx) => {
        // alert(indexx)
        setActiveTab(indexx);
        setActiveContent(tabs[indexx])
    }

    return (
        <div className="tabb">
            <Row>
                <h4> Tabbing & Routing </h4>
            </Row>
            <Container fluid>
                <Container>
                    <div className='outerTab'>
                        <Row>
                            <ul>
                                {tabs.map((itemTab, indexx) => {
                                    return (

                                        <li><Button btn btn-primary onClick={() => changeData(indexx)} className={activetab == indexx ? 'activeButton' : ''}>{itemTab.title}</Button></li>
                                    )
                                })}
                            </ul>
                        </Row>

                        {activeContent !== undefined ? <p>{activeContent.Descriptions}</p> : ''}

                    </div>

                </Container>
            </Container>


        </div>
    );
}

export default Tabbing;
