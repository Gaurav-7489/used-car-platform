import Link from "next/link";
import { cars, formatPrice } from "@/lib/cars";
import LeadForm from "@/components/LeadForm";

export default async function CarPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = cars.find((c) => c.id === Number(id));
  if (!car) return <main className="section"><div className="container"><h1>Car not found</h1><Link href="/inventory">Back to inventory</Link></div></main>;
  return <><header className="topbar"><div className="container nav"><div className="brand">VANDLABS MOTORS</div><Link className="navlinks" href="/inventory">← Inventory</Link></div></header><main className="section"><div className="container"><div className="detail"><div className="gallery">VEHICLE IMAGE GALLERY PLACEHOLDER</div><div className="leadbox"><span className="pill">{car.status}</span><h1>{car.title}</h1><div className="price">{formatPrice(car.price)}</div><div className="meta"><span>{car.year}</span><span>{car.km.toLocaleString("en-IN")} km</span><span>{car.fuel}</span><span>{car.transmission}</span><span>{car.location}</span></div><hr style={{border:0,borderTop:"1px solid #e5e7eb",margin:"22px 0"}}/><h2>Interested?</h2><LeadForm carTitle={car.title}/></div></div></div></main></>;
}
