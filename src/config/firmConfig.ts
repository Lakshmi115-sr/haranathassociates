// Central place for firm contact details and map settings.
export const OFFICE_LAT_LNG = '16.3033585,80.438913';
export const OFFICE_MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE_LAT_LNG}`;
export const OFFICE_EMBED_MAP_URL = `https://maps.google.com/maps?q=${OFFICE_LAT_LNG}&hl=en&z=19&output=embed`;

export const firmPhone = '+91 98856 78619 / 77998 30909';
export const primaryTel = '+919885678619';
export const whatsappNumber = '919885678619';
export const firmEmail = 'haranathassociates@gmail.com';
export const secondaryEmail = 'sriharipriyawithu@gmail.com';

export const officeHours = 'Mon – Sat: 10:00 AM to 8:00 PM (Online Consultancy Available)';

export const headOfficeLines = [
  '# 6-7-36, No.2, 3rd Floor, V.S.R. Complex,',
  '7/1, Arundelpet, Beside Paramount Footwear,',
  'Guntur – 522 002, Andhra Pradesh.'
];

export const branchOfficeLines = [
  'D.No. 2-8-138, Lakshmi Nivasam, Labor Colony,',
  'Vidyadhara Puram, Vijayawada –',
  '520 012, Andhra Pradesh.'
];

// Careers form: leave empty to open the applicant's email app (mailto).
// To receive applications (with resume) directly, paste a form endpoint here,
// e.g. a Formspree / Web3Forms URL. The form will POST to it automatically.
export const careersFormEndpoint = '';
