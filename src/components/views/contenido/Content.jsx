import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import NewsCard from '../../UI/newsCard/NewsCard';
import { contents } from '../../../fakeDB';
// import style from './styleContent.module.css';
import genStyle from '../../../style/styleGeneral.module.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Content = () => {
  return (
    <div className={genStyle.view}>        
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                {
                    contents && contents.map((c, i) => (
                        <Item key={i}><NewsCard props={c}/></Item>
                    ))
                }
            </Stack>
        </Box>
    </div>

  )
}

export default Content;
