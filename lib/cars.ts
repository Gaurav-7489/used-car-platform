export type Car={id:number;title:string;price:number;year:number;km:number;fuel:string;transmission:string;location:string;status:"Available"|"Sold"};
export const cars:Car[]=[
{id:1,title:"2022 Hyundai Creta SX",price:1450000,year:2022,km:28000,fuel:"Petrol",transmission:"Automatic",location:"Chandigarh",status:"Available"},
{id:2,title:"2021 Mahindra Thar LX",price:1325000,year:2021,km:35000,fuel:"Diesel",transmission:"Manual",location:"Mohali",status:"Available"},
{id:3,title:"2023 Kia Seltos GTX",price:1690000,year:2023,km:18000,fuel:"Petrol",transmission:"Automatic",location:"Chandigarh",status:"Available"},
{id:4,title:"2020 Toyota Fortuner 4x2",price:2850000,year:2020,km:51000,fuel:"Diesel",transmission:"Automatic",location:"Panchkula",status:"Available"},
{id:5,title:"2022 Tata Nexon XZ+",price:920000,year:2022,km:24000,fuel:"Petrol",transmission:"Manual",location:"Kharar",status:"Available"},
{id:6,title:"2021 Honda City ZX",price:1180000,year:2021,km:30000,fuel:"Petrol",transmission:"Automatic",location:"Chandigarh",status:"Sold"},
];
export function formatPrice(n:number){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n)}
