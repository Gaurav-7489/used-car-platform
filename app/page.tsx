import Link from "next/link";
import { cars, formatPrice } from "@/lib/cars";

export default function Home() {
  const available = cars.filter((c) => c.status === "Available");
  return <>
    <header className="topbar"><div className="container nav"><div className="brand">VANDLABS MOTORS</div><nav className="navlinks"><Link href="/inventory">Inventory</Link><Link href="/dashboard">Dashboard</Link><Link href="#contact">Contact</Link></nav></div></header>
    <main>
      <section className="hero"><div className="container"><span className="pill">USED-CAR GROWTH MVP</span><h1>Find your next car without the dealership friction.</h1><p>Browse verified inventory, open a vehicle, enquire instantly and hand the lead into a simple dealership workflow.</p><div className="actions"><Link className="btn primary" href="/inventory">Browse Inventory</Link><a className="btn secondary" href="#contact">Get a Callback</a></div></div></section>
      <section className="section"><div className="container"><h2>Featured inventory</h2><p className="muted">Mock dealership inventory for the MVP. Real inventory can replace this dataset later.</p><div className="grid">{available.slice(0,3).map((car)=><article className="card" key={car.id}><div className="carimg">CAR IMAGE PLACEHOLDER</div><div className="cardbody"><span className="pill">{car.year} • {car.fuel}</span><h3>{car.title}</h3><div className="price">{formatPrice(car.price)}</div><div className="meta"><span>{car.km.toLocaleString("en-IN")} km</span><span>{car.transmission}</span><span>{car.location}</span></div><div className="cardactions"><Link className="btn primary" href={`/cars/${car.id}`}>View Car</Link><a className="btn secondary" href={`https://wa.me/?text=Hi%20VandLabs%20Motors,%20I%27m%20interested%20in%20the%20${encodeURIComponent(car.title)}`}>WhatsApp</a></div></div></article>)}</div></div></section>
      <section className="section" style={{paddingTop:0}}><div className="container"><div className="stats"><div className="stat"><span className="muted">Live inventory</span><strong>{available.length}</strong></div><div className="stat"><span className="muted">Lead channels</span><strong>3</strong></div><div className="stat"><span className="muted">Response workflow</span><strong>Ready</strong></div><div className="stat"><span className="muted">WhatsApp API</span><strong>Mock</strong></div></div></div></section>
    </main>
    <footer id="contact" className="footer"><div className="container"><strong>VandLabs Motors</strong><p>Call / WhatsApp integration is currently a placeholder in this MVP. Replace with an approved WhatsApp Business provider later.</p></div></footer>
  </>;
}
