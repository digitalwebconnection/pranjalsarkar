const logoModules = import.meta.glob('../assets/logos/*.webp', { eager: true, import: 'default' }) as Record<string, string>;

// Helper to find the correct logo by a partial name (case-insensitive)
const getLogo = (name: string) => {
  const match = Object.keys(logoModules).find((path) => path.toLowerCase().includes(name.toLowerCase()));
  return match ? logoModules[match] : '';
};

export const companies = [
  { name: 'Amazon', logo: getLogo('amazon') },
  { name: 'IBM', logo: getLogo('ibm') },
  { name: 'PwC', logo: getLogo('pwc') },
  { name: 'JPMorgan Chase', logo: getLogo('jpmorgan') },
  { name: 'TCS', logo: getLogo('tcs') },
  { name: 'Bank of America', logo: getLogo('bank-of-america') },
  { name: 'EPAM', logo: getLogo('epam') },
  { name: 'Ericsson', logo: getLogo('ericsson') },
  { name: 'FedEx', logo: getLogo('fedex') },
  { name: 'HCL', logo: getLogo('hcl') },
  { name: 'NatWest', logo: getLogo('natwest') },
  { name: 'Palo Alto', logo: getLogo('palo-alto') },
  { name: 'Synchrony', logo: getLogo('synchrony') },
  { name: 'TD Bank', logo: getLogo('td-bank') },
  { name: 'ValueLabs', logo: getLogo('valuelabs') },
];
