/* eslint-disable prettier/prettier */
const initialstate = {
  Couponcode: [{name:"off50",value:50,use:false},{name:"off30",value:30,use:false}],
  prouducts: [
    {
      id: 1,
      name: 'galaxy s9',
      img: 'http://s5.picofile.com/file/8371493442/1.png',
      price: 20000,
      done: false,
      input: false,
      number: 1,
      coupon:null
    },
    {
      id: 2,
      name: 'iphone x',
      img: 'http://s4.picofile.com/file/8371493450/2.png',
      price: 20000,
      done: false,
      input: false,
      number: 1,
      coupon:null

    },
    {
      id: 3,
      name: 'galaxy a10',
      img: 'http://s3.picofile.com/file/8371493534/3.png',
      price: 200,
      done: false,
      input: false,
      number: 1,
      coupon:null
    },
    {
      id: 4,
      name: 'htc 10',
      img: 'http://s4.picofile.com/file/8371493542/4.png',
      price: 20000,
      done: false,
      input: false,
      number: 1,
      coupon:null
    },
  ],
  card: [],
  textvalue: '',
  pricevalue: '',
};
export default initialstate;
