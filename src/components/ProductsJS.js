import React from 'react'

import Law from '../assets/images/law.jpg'
import Prog from '../assets/images/programming.jpg'
import guide from '../assets/images/guide.jpg'
import holy from '../assets/images/holy.jpg'
import Prog1 from '../assets/images/programming1.jpg'
import java from '../assets/images/javascriptb.jpg'

 
const productList = {
    books:[
        {
            id:1,
            name: 'Introduction to education law',
            price: 240.00,
            image:<img src={Law} />,
        },

        {
            id:2,
            name: 'Python For Beginners, Python Machine Learning',
            price: 150.00,
            image:<img src={Prog} />,
        },

        // {
        //     id:3,
        //     name: 'Javascript For begginers',
        //     price: 480.00,
        //     image:<img src={guide} />,

        // },

        // //  {
        // //      id:4,
        // //      name: 'Creating an Early Childhood Education Portfolio',
        // //      price: 480.00,
        // //    image:<img src={holy} />,

        // //   },

        {
            id:3,
             name: 'Coders at work',
              price: 350,
             image:<img src={Prog1} />,

        },

        {
            id:4,
            name: 'Creating an Early Childhood Education Portfolio',
            price: 480,
            image:<img src={java} />,

        },
    ],
 
}

export default productList;  