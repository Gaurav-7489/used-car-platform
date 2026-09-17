import Link from 'next/link';
import { LayoutDashboard, CarFront, Users, CalendarDays, BarChart3, Settings, Store } from 'lucide-react';

const links = [
  ['Overview','/dashboard',LayoutDashboard],['Inventory','/dashboard/inventory',CarFront],['Leads','/dashboard/leads',Users],['Appointments','/dashboard/appointments',CalendarDays],['Analytics','/dashboard/analytics',BarChart3],['Settings','/dashboard/settings',Settings]
];
export default function DashboardLayout({children}:{children:React.ReactNode}){
 return <div className="dashboard"><aside className="sidebar"><div className="side-logo">VAND<span>LABS</span></div><div className="side-section">Workspace</div>{links.map(([label,href,Icon])=><Link key={href} href={href as string} className="side-link"><Icon size={17}/><span>{label as string}</span></Link>)}<div className="side-section">Public</div><Link href="/" className="side-link"><Store size={17}/><span>View dealership</span></Link></aside><main className="main">{children}</main></div>
}