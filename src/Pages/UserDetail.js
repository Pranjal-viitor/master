import * as React from 'react';
import Box from '@mui/material/Box';
import Header from './Header';
import { DrawerHeader } from '../Components/DrawerHeader';

export default function UserDetail() {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <Header />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <h2>User Detail</h2>
                </Box>
            </Box>
        </div>
    );
}
