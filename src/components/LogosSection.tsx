import logoAmazon from '../assets/logos/BL-AMAZON.webp';
import logoBoA from '../assets/logos/BL-BoA.webp';
import logoEpam from '../assets/logos/BL-EPAM.webp';
import logoEricson from '../assets/logos/BL-Ericson.webp';
import logoFedEx from '../assets/logos/BL-FedEx.webp';
import logoHcl from '../assets/logos/BL-HCL.webp';
import logoIbm from '../assets/logos/BL-IBM.webp';
import logoJpmorgan from '../assets/logos/BL-JPMorganChase.webp';
import logoNatwest from '../assets/logos/BL-NatWest.webp';
import logoPwc from '../assets/logos/BL-PWC.webp';
import logoPaloalto from '../assets/logos/BL-PaloAlto.webp';
import logoSynchrony from '../assets/logos/BL-Synchrony.webp';
import logoTcs from '../assets/logos/BL-TCS.webp';
import logoTdbank from '../assets/logos/BL-TDBank.webp';
import logoValuelabs from '../assets/logos/BL-ValueLabs.webp';

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
        className="h-20 w-auto object-contain filter  invert transition-all duration-300"
      />
    </div>
  );
}

export default function LogosSection() {
  // Double list to create seamless infinite scrolling effect
  const all = [...companies, ...companies];

  return (
    <section id="logos" className="relative py-10 overflow-hidden  ">
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 mb-8">
        <p className="text-center font-serif text-white  text-3xl font-medium tracking-[0.1em] ">
          Pranjal has worked closely with product professionals now leading at
        </p>
      </div>

      {/* Marquee wrapper */}
      <div className="relative overflow-hidden w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#080808] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#080808] to-transparent pointer-events-none" />

        <div className="logo-marquee flex animate-marquee">
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
