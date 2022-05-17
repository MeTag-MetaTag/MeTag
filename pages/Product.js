import styles from '../styles/Product.module.css';
import Img1 from '../images/Img1.jpg';
import Img2 from '../images/QRtiger.png';
import Img3 from '../images/Img3.png';
import Img4 from '../images/Img4.png';
import Img5 from '../images/Img5.png';
import Img6 from '../images/Img6.png';
import { Radio, RadioGroup, Stack, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

function Product() {

    const [value, setValue] = React.useState('1');

    return (
        <div>
            <div>
            <h4>Welcome to the MeTag Store- Your one stop shop for everything MeTag</h4>
                <RadioGroup onChange={e => setValue(e)} value={value}>
                    <Stack direction='row'>
                        <Radio value='1'>Green</Radio>
                        <Radio value='2'>Yellow</Radio>
                        <Radio value='3'>Blue</Radio>
                    </Stack>
                </RadioGroup>
            </div>

            <div className={styles.images} >
                <div className={styles.hi}>Our Product Line</div>
                <img src={Img1} style={{width: 200, height: 200 }} />
                <img src={Img2} style={{width: 200, height: 200}} />
                <img src={Img3} style={{width: 200, height: 200}} />
                <img src={Img4} style={{width: 200, height: 200}} />
                <img src={Img5} style={{width: 200, height: 200}} />
                <img src={Img6} style={{width: 200, height: 200}} />
            </div>
            <Button className={styles.button}>Buy Metag</Button>
        </div>
    );
}

export default Product;
