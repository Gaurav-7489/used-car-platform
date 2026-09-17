export type Car = { id:string; name:string; year:number; price:number; km:number; fuel:string; transmission:string; owner:number; city:string; status:'Available'|'Reserved'|'Sold'; featured?:boolean };
export const cars:Car[] = [
{id:'c1',name:'2022 Hyundai Creta SX',year:2022,price:1450000,km:28000,fuel:'Petrol',transmission:'Automatic',owner:1,city:'Chandigarh',status:'Available',featured:true},
{id:'c2',name:'2021 Kia Seltos GTX+',year:2021,price:1325000,km:35000,fuel:'Diesel',transmission:'Automatic',owner:1,city:'Mohali',status:'Available',featured:true},
{id:'c3',name:'2020 Toyota Fortuner 4x4',year:2020,price:2850000,km:51000,fuel:'Diesel',transmission:'Automatic',owner:1,city:'Chandigarh',status:'Available',featured:true},
{id:'c4',name:'2023 Tata Nexon XZ+',year:2023,price:980000,km:14000,fuel:'Petrol',transmission:'Manual',owner:1,city:'Panchkula',status:'Available'},
{id:'c5',name:'2022 Mahindra Thar LX',year:2022,price:1620000,km:22000,fuel:'Diesel',transmission:'Manual',owner:1,city:'Chandigarh',status:'Reserved'},
{id:'c6',name:'2021 Honda City ZX',year:2021,price:1080000,km:30000,fuel:'Petrol',transmission:'CVT',owner:1,city:'Mohali',status:'Available'},
{id:'c7',name:'2019 Jeep Compass Limited',year:2019,price:1450000,km:62000,fuel:'Diesel',transmission:'Manual',owner:2,city:'Chandigarh',status:'Sold'},
{id:'c8',name:'2022 Skoda Kushaq Style',year:2022,price:1180000,km:19000,fuel:'Petrol',transmission:'Automatic',owner:1,city:'Chandigarh',status:'Available'}
];
export const formatINR=(n:number)=>'₹'+new Intl.NumberFormat('en-IN').format(n);
export const leads=[
{id:'LD-1042',name:'Arjun Mehta',phone:'+91 98765 43210',vehicle:'2022 Hyundai Creta SX',source:'Google',status:'New',time:'8 min ago'},
{id:'LD-1041',name:'Riya Sharma',phone:'+91 98111 22004',vehicle:'2020 Toyota Fortuner 4x4',source:'Instagram',status:'Qualified',time:'32 min ago'},
{id:'LD-1040',name:'Karan Singh',phone:'+91 99887 11220',vehicle:'2022 Mahindra Thar LX',source:'Marketplace',status:'Appointment',time:'1 hr ago'},
{id:'LD-1039',name:'Neha Verma',phone:'+91 98700 55441',vehicle:'2021 Kia Seltos GTX+',source:'Google',status:'Won',time:'3 hrs ago'},
{id:'LD-1038',name:'Aman Kapoor',phone:'+91 99001 11332',vehicle:'2022 Skoda Kushaq Style',source:'WhatsApp',status:'Contacted',time:'5 hrs ago'},
{id:'LD-1037',name:'Simran Kaur',phone:'+91 98100 88221',vehicle:'2021 Honda City ZX',source:'Instagram',status:'Lost',time:'Yesterday'}
];
