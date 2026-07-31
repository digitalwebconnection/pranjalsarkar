import logoAmazon from '../../assets/logos/BL-AMAZON.webp';
import logoBoA from '../../assets/logos/bank-of-america.webp';
import logoEpam from '../../assets/logos/BL-EPAM.webp';
import logoEricson from '../../assets/logos/bl-ericsson.webp';
import logoFedEx from '../../assets/logos/BL-FedEx.webp';
import logoHcl from '../../assets/logos/BL-HCL.webp';
import logoIbm from '../../assets/logos/BL-IBM.webp';
import logoJpmorgan from '../../assets/logos/bl-jpmorgan-chase.webp';
import logoNatwest from '../../assets/logos/BL-NatWest.webp';
import logoPwc from '../../assets/logos/BL-PWC.webp';
import logoPaloalto from '../../assets/logos/bl-palo-alto.webp';
import logoSynchrony from '../../assets/logos/BL-Synchrony.webp';
import logoTcs from '../../assets/logos/BL-TCS.webp';
import logoTdbank from '../../assets/logos/bl-td-bank.webp';
import logoValuelabs from '../../assets/logos/ValueLabs.webp';

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
    <section id="logos" className="relative py-8 md:py-14 overflow-hidden bg-[#000001] border-b border-white/8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-[#0080C7] blur-[150px] opacity-10 pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 mb-16">
        <h2 className="text-center font-serif text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight">
         Professionals Pranjal has mentored  <br /> 
          <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)] mt-2">
           are now leading product here.
            {/* Horizontal flare line (no white dot) */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 md:w-80 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
          </span> 
        </h2>
      </div>

      {/* Marquee wrapper */}
      <div className="relative overflow-hidden w-full py-4 z-10">
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-r from-[#000001] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-l from-[#000001] to-transparent z-20 pointer-events-none" />

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
