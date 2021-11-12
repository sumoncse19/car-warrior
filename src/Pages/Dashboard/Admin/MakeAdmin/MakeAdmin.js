import React, { useState } from 'react';
import { Alert, Button, TextField, Box } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const MakeAdmin = () => {
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/makeAdmin';

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    setSuccess(true);
                    history.push(redirect_url);
                }
            })
        e.preventDefault();
    }
    return (
        <div style={{ height: '50vh' }}>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success &&
                <Box>
                    <Alert severity='success'>Maid Admin Successfully!!</Alert>
                    <Link to='/'>
                        <Button variant='contained' color='success'>Go To HOME</Button>
                    </Link>
                </Box>
            }
        </div>
    );
};

export default MakeAdmin;