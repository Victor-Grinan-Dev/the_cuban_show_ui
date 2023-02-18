import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import NewsCard from '../../UI/newsCard/NewsCard';
import genStyle from '../../../style/styleGeneral.module.css';
import { useEffect, useState } from 'react';
import { getContents } from '../../../services/firebaseService';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Content = () => {
  const [content, setcontent] = useState([]);
  useEffect(() => {
    getContents().then((data) => setcontent(data))
    setcontent();
  // eslint-disable-next-line
  }, []);
  if(!content){
    return (
      <div className={genStyle.view}>
        <h1>LOADING...</h1>
      </div>
    )
    
  }
  return (
    <div className={genStyle.view}>        
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                {
                    content && content.map((c, i) => (
                        <Item key={i}><NewsCard props={c}/></Item>
                    ))
                }
            </Stack>
        </Box>
    </div>
  )
}

export default Content;
