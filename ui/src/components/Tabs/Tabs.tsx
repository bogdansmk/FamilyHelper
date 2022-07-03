import React from 'react';
import {styled} from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Tabs.css'

interface FHTabsProps {
    children?: React.ReactNode
    value?: string
    onChange?: (event: React.SyntheticEvent, value: string) => void
}

interface FHTabProps {
    value?: string
    label?: string
}

interface FHTabPanelProps {
    children?: React.ReactNode;
    index?: string;
    value?: string;
}

export const FHTabs = styled((props: FHTabsProps) => <Tabs {...props}/>)(
    ({theme}) => ({
        '& .MuiTabs-indicator': {
            backgroundColor: '#1E8BC3',
        },
    })
);

export const FHTab = styled((props: FHTabProps) => <Tab disableRipple {...props} />)(
    ({theme}) => ({
        textTransform: 'none',
        minWidth: 120,
        color: '#000',
        fontFamily: [
            '"Montserrat"',
        ].join(','),
        '&:hover': {
            color: '#1E8BC3',
        },
        '&.Mui-selected': {
            color: '#000',
        },
    }),
);

export const FHTabPanel = (props: FHTabPanelProps) => {
    const {children, value, index, ...other} = props;

    return (
        <div
            className="fhTabPanel"
            id={`tabpanel-${index}`}
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {children}
        </div>
    );
}
