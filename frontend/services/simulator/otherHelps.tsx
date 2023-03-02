import UserSatus from '../../../types/enum/UserStatus';
import { OtherHelp } from '../../../types/help';

export const otherHelps: OtherHelp[] = [
  {
    title: 'Les CEE',
    description: (
      <>
        Les{' '}
        <b>
          Certificats d&lsquo;économie d&lsquo;énergie (CEE)
          &ldquo;Standard&ldquo;
        </b>{' '}
        sont des aides financières versées par les fournisseurs d&lsquo;énergie
        pour financer leurs travaux d&lsquo;économies d&lsquo;énergie des
        logements des particuliers.
      </>
    ),
    link: 'https://france-renov.gouv.fr/aides/cee',
    eligibility: (status: UserSatus, age: number) => age > 2,
    logo: '/images/cee_logo.png',
  },
  {
    title: 'L’éco-prêt à taux zéro (éco-PTZ)',
    description:
      "L'éco-PTZ permet de financer des travaux de rénovation énergétique dans un logement. Il est versé par certaines banques. C'est un prêt sans intérêts d'un montant maximal de 50 000 €.",
    link: 'https://france-renov.gouv.fr/aides/eco-pret-taux-zero',
    eligibility: (status: UserSatus, age: number) =>
      (status === UserSatus.PROPRIETAIRE_BAILLEUR ||
        status === UserSatus.PROPRIETAIRE_OCCUPANT) &&
      age > 2,
    logo: '/images/rf_logo.png',
  },
  {
    title: 'La TVA a taux réduit',
    description:
      'Certains travaux de rénovation énergétique de votre logement peuvent bénéficier de taux réduits de TVA.',
    link: 'https://france-renov.gouv.fr/aides/tva-taux-reduit',
    eligibility: (status: UserSatus, age: number) =>
      status === UserSatus.PROPRIETAIRE_OCCUPANT && age > 2,
    logo: '/images/rf_logo.png',
  },
  {
    title: 'Les aides des collectivités locales',
    description:
      'De nombreuses collectivités territoriales encouragent les démarches de rénovation par le biais de dispositifs locaux.',
    link: 'https://www.anil.org/aides-locales-travaux/',
    eligibility: () => true,
    logo: '/images/rf_logo.png',
  },
  {
    title: 'Loc’Avantages',
    description:
      'Une réduction d’impôt importante (et optionnellement, une aide financière aux travaux), à destination des propriétaires bailleurs.',
    link: 'https://france-renov.gouv.fr/aides/loc-avantages',
    eligibility: (status: UserSatus) =>
      status === UserSatus.PROPRIETAIRE_BAILLEUR,
    logo: '/images/locavantages_logo.jpeg',
  },
  {
    title: 'Le dispositif Denormandie',
    description:
      'Le dispositif Denormandie propose un abatement fiscale aux particuliers souhaitant investir dans un logement ancien et le rénover pour le mettre en location.',
    link: 'https://france-renov.gouv.fr/aides/dispositif-denormandie',
    eligibility: (status: UserSatus) =>
      status === UserSatus.PROPRIETAIRE_BAILLEUR,
    logo: '/images/rf_logo.png',
  },
];
