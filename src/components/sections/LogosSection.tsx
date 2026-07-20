import logoAmazon from '../../assets/logos/BL-AMAZON.webp';
import logoBoA from '../../assets/logos/Bank of America.jpg';
import logoEpam from '../../assets/logos/BL-EPAM.webp';
import logoEricson from '../../assets/logos/BL-Ericson.webp';
import logoFedEx from '../../assets/logos/BL-FedEx.webp';
import logoHcl from '../../assets/logos/BL-HCL.webp';
import logoIbm from '../../assets/logos/BL-IBM.webp';
import logoJpmorgan from '../../assets/logos/BL-JPMorganChase.webp';
import logoNatwest from '../../assets/logos/BL-NatWest.webp';
import logoPwc from '../../assets/logos/BL-PWC.webp';
import logoPaloalto from '../../assets/logos/BL-PaloAlto.webp';
import logoSynchrony from '../../assets/logos/BL-Synchrony.webp';
import logoTcs from '../../assets/logos/BL-TCS.webp';
import logoTdbank from '../../assets/logos/BL-TDBank.webp';
import logoValuelabs from '../../assets/logos/ValueLabs.jpg';

const companies = [
  { name: 'Amazon', logo: logoAmazon },
  { name: 'IBM', logo: logoIbm },
  { name: 'PwC', logo: logoPwc },
  { name: 'JPMorgan Chase', logo: logoJpmorgan },
  { name: 'TCS', logo: logoTcs },
  { name: 'Bank of America', logo: logoBoA },
  { name: 'EPAM', logo: logoEpam },
  { name: 'Ericsson', logo: logoEricson },
  { name: 'FedEx', logo: logoFedEx },
  { name: 'HCL', logo: logoHcl },
  { name: 'NatWest', logo: logoNatwest },
  { name: 'Palo Alto', logo: logoPaloalto },
  { name: 'Synchrony', logo: logoSynchrony },
  { name: 'TD Bank', logo: logoTdbank },
  { name: 'ValueLabs', logo: logoValuelabs },
];

function CompanyLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="inline-flex items-center justify-center px-10 shrink-0 select-none">
      <img
        src={logo}
        alt={`${name} logo`}
        className="h-10 md:h-12 w-40 object-contain transition-all duration-300 hover:scale-105"
      />
    </div>
  );
}

export default function LogosSection() {
  // Double list to create seamless infinite scrolling effect
  const all = [...companies, ...companies];

  return (
    <section id="logos" className="relative py-10 overflow-hidden  ">
      <div className="max-w-3xl mx-auto px-6 md:px-8 relative z-10 mb-18">
        <h2 className="text-center font-serif text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          Pranjal has worked closely <br /> <span className="text-[#0080C7]">with product leaders at:</span> 
        </h2>
      </div>

      {/* Marquee wrapper */}
      <div className="relative overflow-hidden w-full">

        <div className="logo-marquee flex animate-marquee items-center">
          {all.map((c, i) => (
            <CompanyLogo
              key={`${c.name}-${i}`}
              name={c.name}
              logo={c.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
