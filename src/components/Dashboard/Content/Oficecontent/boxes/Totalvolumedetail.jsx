import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const data = [
    { value: 5, label: 'champion' },
    { value: 10, label: 'unilevel' },
    { value: 15, label: 'binary' },
    { value: 20, label: 'topmarketer' },
];


const size = {
    width: 300,
    height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 15,
}));
function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}



export default function TOTALVOLUMEDETAIL() {



    return (
        <div className="col-md-12 col-lg-12">
            <div style={{ borderRadius: "1rem" }} className="mb-3 card">
                <div className="card-header-tab card-header-tab-animation card-header">
                    <div className="card-header-title">
                        <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                        <h1 className="fs-2">Total Volum Details</h1>
                    </div>
                    <ul className="nav">
                        <li className="nav-item"><h3>%</h3></li>
                    </ul>
                </div>
                <div className="card-body row">
                    <div className='col-10 col-md-6'>
                        <Stack direction="column" spacing={2} alignItems="normal" sx={{ width: '100%' }}>
                            <PieChart series={[{
                                data,
                                innerRadius: 30,
                                outerRadius: 100,
                                paddingAngle: 5,
                                cornerRadius: 5,
                                startAngle: -80,
                                endAngle: 360,

                            }]} {...size}>
                                <PieCenterLabel>Total</PieCenterLabel>
                            </PieChart>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* pie chart

 
*/