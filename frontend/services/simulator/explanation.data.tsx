import QuestionId from '../../../types/enum/QuestionId';
import { Explanation } from '../../../types/result';

const murTitle = 'Murs';
const murImage = '/images/mur_icon.svg';
const murFurther = 'En savoir plus sur l’isolation des murs';

const plancherHautTitle = 'Toit';
const plancherHautImage = '/images/plancher_haut_icon.svg';
const plancherHautFurther =
  'En savoir plus sur l’isolation des planchers hauts';

const plancherBasTitle = 'Sols';
const plancherBasImage = '/images/sol_icon.svg';
const plancherBasFurther = 'En savoir plus sur l’isolation des planchers bas';

const menuiserieTitle = 'Menuiseries';
const menuiserieImage = '/images/menuiserie_icon.svg';
const menuiserieFurther = 'En savoir plus';

const ventilationTitle = 'Ventilation';
const ventilationImage = '/images/ventilation_icon.svg';
const ventilationFurther = 'En savoir plus sur la ventilation';

const emetteursTitle = 'Chauffage';
const emetteursImage = '/images/emetteurs_icon.svg';
const emetteursFurther = 'En savoir plus';

export const explanationData: Record<string, Record<string, Explanation>> = {
  mur: {
    'Cas 1 - Murs non isolés': {
      title: murTitle,
      dependencies: [QuestionId.MUR_ISOLES],
      image: murImage,
      status: 'nok',
      tips: 'Une mauvaise isolation des murs peut représenter jusqu’à 25 % des déperdition de chaleur d’un logement et engendrer son vieillisement prématuré.',
      attentions: (
        <>
          <h6>Pourquoi une isolation des murs est nécessaire ?</h6>
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée va
          générer de l&lsquo;inconfort. Son prix d&lsquo;acquisition, vos
          factures et son volume seront supérieurs pour répondre à un écart de
          température et des besoins énergétiques plus importants, ce qui
          réduira à terme sa durée de vie.
          <h6>Pourquoi l&lsquo;ordre des travaux est important ?</h6>
          Si vous réalisez l&lsquo;isolation de vos murs après
          l&lsquo;installation d&lsquo;une PAC, cette dernière ne sera plus
          correctement dimensionnée par rapport à vos besoins énergétiques après
          isolation, ce qui impactera son rendement global et sa durée de vie.
          Il est possible de redimensionner votre équipement, mais des coûts de
          maintenance seront à prévoir.
        </>
      ),
      further: murFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/murs-maison',
      ],
    },
    'Cas 3 - Murs anciens isolés': {
      title: murTitle,
      dependencies: [QuestionId.CONSTRUCTION, QuestionId.MUR_ISOLES],
      image: murImage,
      status: 'sok',
      tips: "Vos murs semblent isolés, ce qui peut réduire les pertes de chaleur de votre logement jusqu'à 25 %. Mais êtes-vous sûr de l'état de votre isolation ?",
      attentions: (
        <>
          <h6>Attention, toutes les isolations ne se valent pas !</h6>
          Au niveau de l&lsquo;installation (ponts thermiques) mais également de
          la qualité de l&lsquo;isolant (matériaux, épaisseur, ancienneté). Des
          murs humides (présence de condensation, de moisissure), froids en
          hiver et des difficultés à se chauffer sont les signes d&lsquo;une
          mauvaise isolation.
          <br />
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée
          générera de l&lsquo;inconfort, un prix d&lsquo;acquisition et des
          factures plus élevés, ainsi qu&lsquo;une durée de vie moindre.
          <br />
          Il est donc primordial de faire vérifier l&lsquo;état de
          l&lsquo;isolation de vos murs par un professionnel.
        </>
      ),
      further: murFurther,
      furtherLinks: [
        'https://librairie.ademe.fr/urbanisme-et-batiment/5038-isoler-sa-maison-9791029718717.html',
      ],
    },
    'Cas 4 - Murs récents isolés': {
      title: murTitle,
      dependencies: [QuestionId.CONSTRUCTION, QuestionId.MUR_ISOLES],
      image: murImage,
      status: 'ok',
      tips: "Vos murs sont isolés, ce qui peut réduire les pertes de chaleur de votre logement jusqu'à 25 % par rapport à des murs mal isolés.",
      attentions: (
        <>
          <h6>Attention, toutes les isolations ne se valent pas !</h6>
          Au niveau de l&lsquo;installation (ponts thermiques) mais également de
          la qualité de l&lsquo;isolant (matériaux, épaisseur, ancienneté). Des
          murs humides (présence de condensation, de moisissure), froids en
          hiver et des difficultés à se chauffer sont les signes d&lsquo;une
          mauvaise isolation.
          <br />
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée
          générera de l&lsquo;inconfort, un prix d&lsquo;acquisition et des
          factures plus élevés, ainsi qu&lsquo;une durée de vie moindre.
          <br />
          Si vous avez un doute sur l&lsquo;installation ou la qualité de
          l&lsquo;isolant, il est recommandé de faire vérifier l&lsquo;état de
          l&lsquo;isolation de vos murs par un professionnel.
        </>
      ),
      further: murFurther,
      furtherLinks: [
        'https://librairie.ademe.fr/urbanisme-et-batiment/5038-isoler-sa-maison-9791029718717.html',
      ],
    },
    'Cas 5 - Ne sait pas - old': {
      title: murTitle,
      dependencies: [QuestionId.CONSTRUCTION, QuestionId.MUR_ISOLES],
      image: murImage,
      status: 'nok',
      tips: 'Une mauvaise isolation des murs peut représenter jusqu’à 25 % des déperditions de chaleur d’un logement et engendrer son vieillissement prématuré.',
      attentions: (
        <>
          <h6>
            Si votre maison a été construite avant 1974, sans rénovation depuis,
            il est fort probable qu&lsquo;elle ne soit pas isolée.
          </h6>
          <h6>Pourquoi une isolation des murs est nécessaire ? </h6>
          L&lsquo;installation d&lsquo;une pompe à chaleur dans une maison mal
          isolée va générer de l&lsquo;inconfort. Son prix d&lsquo;acquisition,
          vos factures et son volume seront supérieurs pour répondre à un écart
          de température et des besoins énergétiques plus importants, ce qui
          réduira à terme sa durée de vie.
          <br />
          <h6>Pourquoi l&lsquo;ordre des travaux est important ?</h6>
          Si vous réalisez l&lsquo;isolation de vos murs après
          l&lsquo;installation d&lsquo;une PAC, cette dernière ne sera plus
          correctement dimensionnée par rapport à vos besoins énergétiques après
          isolation, ce qui impactera son fonctionnement, son rendement global
          et sa durée de vie. Il est possible de redimensionner votre
          équipement, mais des coûts de maintenance seront à prévoir.
        </>
      ),
      further: murFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/murs-maison',
      ],
    },
    'Cas 5 - Ne sait pas - recent': {
      title: murTitle,
      dependencies: [QuestionId.CONSTRUCTION, QuestionId.MUR_ISOLES],
      image: murImage,
      status: 'nok',
      tips: 'Une mauvaise isolation des murs peut représenter jusqu’à 25 % des déperditions de chaleur d’un logement et engendrer son vieillissement prématuré.',
      attentions: (
        <>
          <h6>
            Si votre maison a été construite entre 1974 et 2000, sans rénovation
            depuis, il est fort probable que l&lsquo;isolation soit à refaire ou
            qu&lsquo;elle ne soit pas isolée.
          </h6>
          Et attention, toutes les isolations ne se valent pas ! Au niveau de
          l&lsquo;installation (ponts thermiques) mais également de la qualité
          de l&lsquo;isolant (matériaux, épaisseur, ancienneté). Des murs
          humides (présence de condensation, de moisissure), froids en hiver et
          des difficultés à se chauffer sont les signes d&lsquo;une mauvaise
          isolation.
          <br />
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée
          générera de l&lsquo;inconfort, un prix d&lsquo;acquisition et des
          factures plus élevées, ainsi qu&lsquo;une durée de vie moindre.
          <br />
          Il est donc fortement recommandé de faire vérifier l&lsquo;état de
          l&lsquo;isolation de vos murs par un professionnel.
        </>
      ),
      further: murFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/murs-maison',
      ],
    },
    'Cas 5 - Ne sait pas - very recent': {
      title: murTitle,
      dependencies: [QuestionId.CONSTRUCTION, QuestionId.MUR_ISOLES],
      image: murImage,
      status: 'nok',
      tips: 'Une mauvaise isolation des murs peut représenter jusqu’à 25 % des déperditions de chaleur d’un logement et engendrer son vieillissement prématuré.',
      attentions: (
        <>
          <h6>
            Si votre maison a été construite après 2000, elle devrait être
            isolée pour répondre aux réglementations thermiques en vigueur.
          </h6>
          Mais attention, toutes les isolations ne se valent pas ! Au niveau de
          l&lsquo;installation (ponts thermiques) mais également de la qualité
          de l&lsquo;isolant (matériaux, épaisseur, ancienneté). Des murs
          humides (présence de condensation, de moisissure), froids en hiver et
          des difficultés à se chauffer sont les signes d&lsquo;une mauvaise
          isolation.
          <br />
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée
          générera de l&lsquo;inconfort, un prix d&lsquo;acquisition et des
          factures plus élevées, ainsi qu&lsquo;une durée de vie moindre. Il est
          donc recommandé de faire vérifier l&lsquo;état de l&lsquo;isolation de
          vos murs par un professionnel.
        </>
      ),
      further: murFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/murs-maison',
      ],
    },
  },
  plancherHaut: {
    'Cas 1 - Combles non isolés (ancien/récent)': {
      title: plancherHautTitle,
      dependencies: [
        QuestionId.COMBLES_AMENAGES,
        QuestionId.COMBLES_ISOLES,
        QuestionId.TOITURE_ISOLE,
      ],
      image: plancherHautImage,
      status: 'nok',
      tips: 'Une mauvaise isolation de la toiture peut représenter jusqu’à 30 % des déperdition de chaleur d’un logement et engendrer son vieillissement prématuré.',
      attentions: (
        <>
          <h6>Pourquoi une isolation de votre toiture est nécessaire ?</h6>
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée va
          générer de l&lsquo;inconfort. Son prix d&lsquo;acquisition, vos
          factures et son volume seront supérieurs pour répondre à un écart de
          température et des besoins énergétiques plus importants, ce qui
          réduira à terme sa durée de vie.
          <h6>Pourquoi l&lsquo;ordre des travaux est important ?</h6>
          Si vous réalisez l&lsquo;isolation de votre toiture après
          l&lsquo;installation d&lsquo;une PAC, cette dernière ne sera plus
          correctement dimensionnée par rapport à vos besoins énergétiques après
          isolation, ce qui impactera son rendement global et sa durée de vie.
          Il est possible de redimensionner votre équipement, mais des coûts de
          maintenance seront à prévoir.
        </>
      ),
      further: plancherHautFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/combles-maison',
      ],
    },
    'Cas 3 - Combles anciennes isolés': {
      title: plancherHautTitle,
      dependencies: [
        QuestionId.CONSTRUCTION,
        QuestionId.COMBLES_AMENAGES,
        QuestionId.COMBLES_ISOLES,
        QuestionId.TOITURE_ISOLE,
      ],
      image: plancherHautImage,
      status: 'sok',
      tips: "Votre toiture semble isolée, ce qui peut réduire les pertes de chaleur de votre logement jusqu'à 30 %. Mais êtes-vous sûr de l'état de votre isolation ?",
      attentions: (
        <>
          <h6>Attention, toutes les isolations ne se valent pas !</h6>
          Au niveau de l&lsquo;installation (ponts thermiques) mais également de
          la qualité de l&lsquo;isolant (matériaux, épaisseur, ancienneté). Des
          plafonds humides, des fuites dans la toiture et des difficultés à se
          chauffer sont les signes d&lsquo;une mauvaise isolation.
          <br />
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée
          générera de l&lsquo;inconfort, un prix d&lsquo;acquisition et des
          factures plus élevés, ainsi qu&lsquo;une durée de vie moindre.
          <br />
          Il est donc primordial de faire vérifier l&lsquo;étanchéité et
          l&lsquo;isolation de votre toiture par un professionnel.
        </>
      ),
      further: plancherHautFurther,
      furtherLinks: [
        'https://librairie.ademe.fr/urbanisme-et-batiment/5038-isoler-sa-maison-9791029718717.html',
      ],
    },
    'Cas 4 - Combles récentes isolés': {
      title: plancherHautTitle,
      dependencies: [
        QuestionId.CONSTRUCTION,
        QuestionId.COMBLES_AMENAGES,
        QuestionId.COMBLES_ISOLES,
        QuestionId.TOITURE_ISOLE,
      ],
      image: plancherHautImage,
      status: 'ok',
      tips: "Votre toiture est isolée, ce qui peut réduire les pertes de chaleur de votre logement jusqu'à 30 % par rapport à une toiture mal isolée.",
      attentions: (
        <>
          <h6>Attention, toutes les isolations ne se valent pas !</h6>
          Au niveau de l&lsquo;installation (ponts thermiques) mais également de
          la qualité de l&lsquo;isolant (matériaux, épaisseur, ancienneté). Des
          plafonds humides, des fuites dans la toiture et des difficultés à se
          chauffer sont les signes d&lsquo;une mauvaise isolation.
          <br />
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée
          générera de l&lsquo;inconfort, un prix d&lsquo;acquisition et des
          factures plus élevés, ainsi qu&lsquo;une durée de vie moindre.
          <br />
          Si vous avez un doute sur l&lsquo;installation ou la qualité de
          l&lsquo;isolant, il est recommandé de faire vérifier
          l&lsquo;étanchéité et l&lsquo;isolation de votre toiture par un
          professionnel.
        </>
      ),
      further: plancherHautFurther,
      furtherLinks: [
        'https://librairie.ademe.fr/urbanisme-et-batiment/5038-isoler-sa-maison-9791029718717.html',
      ],
    },
    'Cas 5 - Ne sait pas - old': {
      title: plancherHautTitle,
      dependencies: [
        QuestionId.CONSTRUCTION,
        QuestionId.COMBLES_AMENAGES,
        QuestionId.COMBLES_ISOLES,
        QuestionId.TOITURE_ISOLE,
      ],
      image: plancherHautImage,
      status: 'nok',
      tips: 'Une mauvaise isolation de la toiture peut représenter jusqu’à 30 % des déperditions de chaleur d’un logement et engendrer son vieillissement prématuré.',
      attentions: (
        <>
          <h6>
            Si votre maison a été construite avant 1974, sans rénovation depuis,
            il est fort probable qu&lsquo;elle ne soit pas isolée.
          </h6>
          <h6>Pourquoi une isolation de votre toiture est nécessaire ? </h6>
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée va
          générer de l&lsquo;inconfort. Son prix d&lsquo;acquisition, vos
          factures et son volume seront supérieurs pour répondre à un écart de
          température et des besoins énergétiques plus importants, ce qui
          réduira à terme sa durée de vie.
          <h6>Pourquoi l&lsquo;ordre des travaux est important ?</h6>
          Si vous réalisez l&lsquo;isolation de votre toiture après
          l&lsquo;installation d&lsquo;une PAC, cette dernière ne sera plus
          correctement dimensionnée par rapport à vos besoins énergétiques après
          isolation, ce qui impactera son fonctionnement, rendement global et sa
          durée de vie. Il est possible de redimensionner votre équipement, mais
          des coûts de maintenance seront à prévoir.
        </>
      ),
      further: plancherHautFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/combles-maison',
      ],
    },
    'Cas 5 - Ne sait pas - recent': {
      title: plancherHautTitle,
      dependencies: [
        QuestionId.CONSTRUCTION,
        QuestionId.COMBLES_AMENAGES,
        QuestionId.COMBLES_ISOLES,
        QuestionId.TOITURE_ISOLE,
      ],
      image: plancherHautImage,
      status: 'nok',
      tips: 'Une mauvaise isolation de la toiture peut représenter jusqu’à 30 % des déperditions de chaleur d’un logement et engendrer son vieillissement prématuré.',
      attentions: (
        <>
          <h6>
            Si votre maison a été construite entre 1974 et 2000, sans rénovation
            depuis, il est fort probable que l&lsquo;isolation soit à refaire ou
            qu&lsquo;elle ne soit pas isolée.
          </h6>
          Et attention, toutes les isolations ne se valent pas ! Au niveau de
          l&lsquo;installation (ponts thermiques) mais également de la qualité
          de l&lsquo;isolant (matériaux, épaisseur, ancienneté). Des plafonds
          humides, des fuites dans la toiture et des difficultés à se chauffer
          sont les signes d&lsquo;une mauvaise isolation.
          <br />
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée
          générera de l&lsquo;inconfort, un prix d&lsquo;acquisition et des
          factures plus élevés, ainsi qu&lsquo;une durée de vie moindre.
          <br />
          Il est donc fortement recommandé de faire vérifier l&lsquo;étanchéité
          et l&lsquo;isolation de votre toiture par un professionnel.
        </>
      ),
      further: plancherHautFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/combles-maison',
      ],
    },
    'Cas 5 - Ne sait pas - very recent': {
      title: plancherHautTitle,
      dependencies: [
        QuestionId.CONSTRUCTION,
        QuestionId.COMBLES_AMENAGES,
        QuestionId.COMBLES_ISOLES,
        QuestionId.TOITURE_ISOLE,
      ],
      image: plancherHautImage,
      status: 'nok',
      tips: 'Une mauvaise isolation de la toiture peut représenter jusqu’à 30 % des déperditions de chaleur d’un logement et engendrer son vieillissement prématuré.',
      attentions: (
        <>
          <h6>
            Si votre maison a été construite après 2000, elle devrait être
            isolée pour répondre aux réglementations thermiques en vigueur.
          </h6>
          Mais attention, toutes les isolations ne se valent pas ! Au niveau de
          l&lsquo;installation (ponts thermiques) mais également de la qualité
          de l&lsquo;isolant (matériaux, épaisseur, ancienneté). Des plafonds
          humides, des fuites dans la toiture et des difficultés à se chauffer
          sont les signes d&lsquo;une mauvaise isolation.
          <br />
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée
          générera de l&lsquo;inconfort, un prix d&lsquo;acquisition et des
          factures plus élevés, ainsi qu&lsquo;une durée de vie moindre.
          <br />
          Il est donc recommandé de faire vérifier l&lsquo;étanchéité et
          l&lsquo;isolation de votre toiture par un professionnel.
        </>
      ),
      further: plancherHautFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/combles-maison',
      ],
    },
  },
  plancherBas: {
    'Cas 1 - Plancher bas non isolé': {
      title: plancherBasTitle,
      dependencies: [QuestionId.CAVE, QuestionId.PLANCHER_BAS_ISOLE],
      image: plancherBasImage,
      status: 'nok',
      tips: 'Une mauvaise isolation d’un plancher bas peut représenter jusqu’à 10 % des déperditions de chaleur d’un logement.',
      attentions: (
        <>
          <h6>Pourquoi une isolation du plancher bas est nécessaire ? </h6>
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée va
          générer de l&lsquo;inconfort. Son prix d&lsquo;acquisition, vos
          factures et son volume seront supérieurs pour répondre à un écart de
          température et des besoins énergétiques plus importants, ce qui
          réduira à terme sa durée de vie.
          <h6>Pourquoi l&lsquo;ordre des travaux est important ?</h6>
          Si vous réalisez l&lsquo;isolation du plancher bas après
          l&lsquo;installation d&lsquo;une PAC, cette dernière ne sera plus
          correctement dimensionnée par rapport à vos besoins énergétiques après
          isolation, ce qui impactera son fonctionnement, son rendement global
          et sa durée de vie. Il est possible de redimensionner votre
          équipement, mais des coûts de maintenance seront à prévoir.
        </>
      ),
      further: plancherBasFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/sous-sol-garage',
      ],
    },
    'Cas 3 - Plancher bas isolé': {
      title: plancherBasTitle,
      dependencies: [
        QuestionId.CONSTRUCTION,
        QuestionId.CAVE,
        QuestionId.PLANCHER_BAS_ISOLE,
      ],
      image: plancherBasImage,
      status: 'sok',
      tips: "Votre plancher bas semble isolée, ce qui peut réduire les pertes de chaleur de votre logement jusqu'à 10 %. Mais êtes-vous sûr de l'état de votre isolation ?",
      attentions: (
        <>
          <h6>Attention, toutes les isolations ne se valent pas !</h6>
          Au niveau de l&lsquo;installation (ponts thermiques) mais également de
          la qualité de l&lsquo;isolant (matériaux, épaisseur, ancienneté). Un
          plancher bas froid et des difficultés à se chauffer peuvent être les
          signes d&lsquo;une mauvaise isolation.
          <br />
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée
          générera de l&lsquo;inconfort, un prix d&lsquo;acquisition et des
          factures plus élevés, ainsi qu&lsquo;une durée de vie moindre.
          <br />
          Il est donc important de faire vérifier l&lsquo;isolation de votre
          plancher bas par un professionnel.
        </>
      ),
      further: plancherBasFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/sous-sol-garage',
      ],
    },
    'Cas 1 - Plancher bas récent isolé': {
      title: plancherBasTitle,
      dependencies: [
        QuestionId.CONSTRUCTION,
        QuestionId.CAVE,
        QuestionId.PLANCHER_BAS_ISOLE,
      ],
      image: plancherBasImage,
      status: 'ok',
      tips: "Votre plancher bas est isolé, ce qui peut réduire les pertes de chaleur de votre logement jusqu'à 10 % par rapport à plancher bas mal isolé.",
      attentions: (
        <>
          <h6>Attention, toutes les isolations ne se valent pas !</h6>
          Au niveau de l&lsquo;installation (ponts thermiques) mais également de
          la qualité de l&lsquo;isolant (matériaux, épaisseur, ancienneté). Un
          plancher bas froid et des difficultés à se chauffer peuvent être les
          signes d&lsquo;une mauvaise isolation.
          <br />
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée
          générera de l&lsquo;inconfort, un prix d&lsquo;acquisition et des
          factures plus élevés, ainsi qu&lsquo;une durée de vie moindre.
          <br />
          Si vous avez un doute sur l&lsquo;installation ou la qualité de
          l&lsquo;isolant, il est recommandé de faire vérifier l&lsquo;isolation
          de votre plancher bas par un professionnel.
        </>
      ),
    },
    'Cas 5 - Ne sait pas - old': {
      title: plancherBasTitle,
      dependencies: [
        QuestionId.CONSTRUCTION,
        QuestionId.CAVE,
        QuestionId.PLANCHER_BAS_ISOLE,
      ],
      image: plancherBasImage,
      status: 'nok',
      tips: 'Une mauvaise isolation d’un plancher bas peut représenter jusqu’à 10 % des déperditions de chaleur d’un logement.',
      attentions: (
        <>
          <h6>
            Si votre maison a été construite avant 1974, sans rénovation depuis,
            il est fort probable qu&lsquo;elle ne soit pas isolée.
          </h6>
          <h6>Pourquoi une isolation du plancher bas est nécessaire ? </h6>
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée va
          générer de l&lsquo;inconfort. Son prix d&lsquo;acquisition, vos
          factures et son volume seront supérieurs pour répondre à un écart de
          température et des besoins énergétiques plus importants, ce qui
          réduira à terme sa durée de vie.
          <h6>Pourquoi l&lsquo;ordre des travaux est important ?</h6>
          Si vous réalisez l&lsquo;isolation du plancher bas après
          l&lsquo;installation d&lsquo;une PAC, cette dernière ne sera plus
          correctement dimensionnée par rapport à vos besoins énergétiques après
          isolation, ce qui impactera son fonctionnement, son rendement global
          et sa durée de vie. Il est possible de redimensionner votre
          équipement, mais des coûts de maintenance seront à prévoir.
        </>
      ),
      further: plancherBasFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/sous-sol-garage',
      ],
    },
    'Cas 5 - Ne sait pas - recent': {
      title: plancherBasTitle,
      dependencies: [
        QuestionId.CONSTRUCTION,
        QuestionId.CAVE,
        QuestionId.PLANCHER_BAS_ISOLE,
      ],
      image: plancherBasImage,
      status: 'nok',
      tips: 'Une mauvaise isolation d’un plancher bas peut représenter jusqu’à 10 % des déperditions de chaleur d’un logement.',
      attentions: (
        <>
          <h6>
            Si votre maison a été construite entre 1974 et 2000, sans rénovation
            depuis, il est fort probable que l&lsquo;isolation soit à refaire ou
            qu&lsquo;elle ne soit pas isolée.
          </h6>
          Et attention, toutes les isolations ne se valent pas ! Au niveau de
          l&lsquo;installation (ponts thermiques) mais également de la qualité
          de l&lsquo;isolant (matériaux, épaisseur, ancienneté). Un plancher bas
          froid et des difficultés à se chauffer peuvent être les signes
          d&lsquo;une mauvaise isolation.
          <br />
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée
          générera de l&lsquo;inconfort, un prix d&lsquo;acquisition et des
          factures plus élevés, ainsi qu&lsquo;une durée de vie moindre.
          <br />
          Il est donc recommandé de faire vérifier l&lsquo;isolation de votre
          plancher bas par un professionnel.
        </>
      ),
      further: plancherBasFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/sous-sol-garage',
      ],
    },
    'Cas 5 - Ne sait pas - very recent': {
      title: plancherBasTitle,
      dependencies: [
        QuestionId.CONSTRUCTION,
        QuestionId.CAVE,
        QuestionId.PLANCHER_BAS_ISOLE,
      ],
      image: plancherBasImage,
      status: 'nok',
      tips: 'Une mauvaise isolation d’un plancher bas peut représenter jusqu’à 10 % des déperditions de chaleur d’un logement.',
      attentions: (
        <>
          <h6>
            Si votre maison a été construite après 2000, elle devrait être
            isolée pour répondre aux réglementations thermiques en vigueur.
          </h6>
          Mais attention, toutes les isolations ne se valent pas ! Au niveau de
          l&lsquo;installation (ponts thermiques) mais également de la qualité
          de l&lsquo;isolant (matériaux, épaisseur, ancienneté). Un plancher bas
          froid et des difficultés à se chauffer peuvent être les signes
          d&lsquo;une mauvaise isolation.
          <br />
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée
          générera de l&lsquo;inconfort, un prix d&lsquo;acquisition et des
          factures plus élevés, ainsi qu&lsquo;une durée de vie moindre.
          <br />
          Il est donc recommandé de faire vérifier l&lsquo;isolation de votre
          plancher bas par un professionnel.
        </>
      ),
      further: plancherBasFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/sous-sol-garage',
      ],
    },
  },
  menuiserie: {
    'Cas 1 - Simple vitrage': {
      title: menuiserieTitle,
      dependencies: [QuestionId.MENUISERIES_DOUBLE_VITRAGE],
      image: menuiserieImage,
      status: 'nok',
      tips: 'Les parois vitrées peuvent représenter jusqu’à 15 % des déperditions de chaleur d’un logement.',
      attentions: (
        <>
          <h6>
            Des parois vitrées en simple vitrage sont à l&lsquo;origine de
            problèmes d&lsquo;humidité, d&lsquo;infiltration de l&lsquo;air et
            d&lsquo;une mauvaise isolation sonore.
          </h6>
          Cela impacte à terme la santé et le confort des occupants d&lsquo;un
          logement. Dans certains cas, les ouvrants (partie mobile de la
          fenêtre) et les dormants (cadre fixe de la fenêtre) sont de mauvaises
          qualités ou trop anciens et doivent être changés.
          <br />
          L&lsquo;installation d&lsquo;une PAC dans une maison mal isolée aura
          des conséquences sur son prix d&lsquo;acquisition, vos factures et son
          volume qui seront supérieurs pour répondre à un écart de température
          et des besoins énergétiques plus importants, ce qui réduira à terme sa
          durée de vie.
        </>
      ),
      further: menuiserieFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/portes-fenetres-maison',
      ],
    },
    'Cas 2 - Double vitrage ancien': {
      title: menuiserieTitle,
      dependencies: [
        QuestionId.MENUISERIES_DOUBLE_VITRAGE,
        QuestionId.MENUISERIES_RECENT,
      ],
      image: menuiserieImage,
      status: 'sok',
      tips: 'Les parois vitrées peuvent représenter jusqu’à 15 % des déperditions de chaleur d’un logement.',
      attentions: (
        <>
          <h6>
            Des parois vitrées en double vitrage sont une bonne protection
            initiale ce qui favorise l&lsquo;installation d&lsquo;une PAC.
          </h6>
          Néanmoins, il est important de s&lsquo;attarder sur l&lsquo;ensemble
          de la structure de vos menuiseries et notamment sur la précision de la
          pose, ainsi que la qualité des dormants (cadre fixe de la fenêtre).
          <br />
          L&lsquo;âge des fenêtres joue également un rôle important dans son
          efficacité isolante, avec une durée de vie moyenne de 25-35 ans pour
          du double vitrage en fonction des matériaux utilisés. Des problèmes
          d&lsquo;humidité et d&lsquo;infiltration de l&lsquo;air peuvent être
          le signe d&lsquo;un équipement obsolète.
        </>
      ),
      further: menuiserieFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/portes-fenetres-maison',
      ],
    },
    'Cas 3 - DV récent ou TV': {
      title: menuiserieTitle,
      dependencies: [
        QuestionId.MENUISERIES_DOUBLE_VITRAGE,
        QuestionId.MENUISERIES_RECENT,
      ],
      image: menuiserieImage,
      status: 'ok',
      tips: "Vos parois vitrées ont une bonne isolation, ce qui peut réduire les pertes de chaleur de votre logement jusqu'à 15 % par rapport à des parois vitrées mal isolées.",
      attentions: (
        <>
          <h6>
            Vous disposez déjà de menuiseries performantes, les déperditions
            sont largement limitées ce qui est idéal pour l&lsquo;installation
            d&lsquo;une PAC.
          </h6>
          Néanmoins, il est important de vérifier votre système de ventilation.
          L’installation de menuiseries neuves, dont l’étanchéité à l’air est
          bien plus élevée que les anciennes, peut venir perturber le
          renouvellement de l’air intérieur et l’évacuation des polluants et de
          l’humidité. Cela peut avoir des répercussions à terme sur la santé des
          occupants et à une détérioration du logement.
        </>
      ),
      further: menuiserieFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/portes-fenetres-maison',
      ],
    },
    'Cas 4 - Ne sait pas': {
      title: menuiserieTitle,
      dependencies: [
        QuestionId.MENUISERIES_DOUBLE_VITRAGE,
        QuestionId.MENUISERIES_RECENT,
      ],
      image: menuiserieImage,
      status: 'nok',
      tips: 'Les parois vitrées peuvent représenter jusqu’à 15 % des déperditions de chaleur d’un logement.',
      attentions: (
        <>
          <h6>
            Il est nécessaire de vous renseigner sur la qualité de vos
            menuiseries.
          </h6>
          Si vous remarquez des problèmes d&lsquo;humidité, d&lsquo;infiltration
          de l&lsquo;air ou encore une mauvaise isolation sonore, cela signifie
          probablement que vos menuiseries sont mal isolées. Cela peut impacter
          à terme la santé, le confort des occupants d&lsquo;un logement et le
          bon fonctionnement d&lsquo;une PAC.
          <br />
          Dans certains cas, les parois vitrées peuvent être suffisamment
          isolées, mais les ouvrants (partie mobile de la fenêtre) et les
          dormants (cadre fixe de la fenêtre) sont de mauvaises qualités ou trop
          anciens et doivent être changés.
          <br />
          Parlez-en avec votre conseiller France Rénov&lsquo;.
        </>
      ),
      further: menuiserieFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/isolation/portes-fenetres-maison',
      ],
    },
  },
  ventilation: {
    'Cas 1 - Naturelle': {
      title: ventilationTitle,
      dependencies: [QuestionId.VMC],
      image: ventilationImage,
      status: 'nok',
      tips: "L'utilisation d'une VMC (ventilation mécanique contrôlée) est fortement recommandée dans le cadre de l'installation d'une PAC.",
      attentions: (
        <>
          <h6>
            L&lsquo;installation d&lsquo;une VMC améliore l&lsquo;efficacité
            énergétique d&lsquo;une PAC.
          </h6>
          Elle permet également la ventilation optimale d&lsquo;un logement, ce
          qui empêche sa détérioration, notamment celle de l&lsquo;isolation.
          <br />
          De plus, une isolation et des menuiseries performantes impliquent une
          étanchéité de l&lsquo;air très élevée, ce qui peut perturber
          l&lsquo;évacuation de l&lsquo;air vicié et de l&lsquo;humidité. Un
          logement mal ventilé peut avoir des conséquences importantes sur la
          santé de ses occupants.
        </>
      ),
      further: ventilationFurther,
      furtherLinks: ['https://france-renov.gouv.fr/renovation/vmc/maison'],
    },
    'Cas 2 - Mécanique': {
      title: ventilationTitle,
      dependencies: [QuestionId.VMC],
      image: ventilationImage,
      status: 'ok',
      tips: "L'utilisation d'une VMC (ventilation mécanique contrôlée) est fortement recommandée dans le cadre de l'installation d'une PAC.",
      attentions: (
        <>
          <h6>
            Vous bénéficiez déjà d&lsquo;une VMC, cette dernière maximisera
            l&lsquo;efficacité énergétique d&lsquo;une PAC.
          </h6>
          Elle permet également la ventilation optimale du logement, ce qui
          empêche sa détérioration en évacuant l&lsquo;air vicié et
          l&lsquo;humidité.
          <br />
          Néanmoins, assurez-vous que votre VMC soit adaptée et en état. Afin de
          maximiser vos économies d&lsquo;énergie liées à l&lsquo;installation
          d&lsquo;une PAC, le bon état général de votre VMC est essentiel, et
          certains modèles sont à privilégiés.
          <br />
          Parlez-en avec votre conseiller France Rénov&lsquo;.
        </>
      ),
      further: ventilationFurther,
      furtherLinks: ['https://france-renov.gouv.fr/renovation/vmc/maison'],
    },
    'Cas 3 - Ne sait pas': {
      title: ventilationTitle,
      dependencies: [QuestionId.VMC],
      image: ventilationImage,
      status: 'nok',
      tips: "L'utilisation d'une VMC (ventilation mécanique contrôlée) est fortement recommandée dans le cadre de l'installation d'une PAC.",
      attentions: (
        <>
          <h6>
            Il est nécessaire de vous renseigner sur la ventilation de votre
            logement, car elle a un impact sur l&lsquo;efficacité énergétique
            d&lsquo;une PAC.
          </h6>
          La ventilation optimale d&lsquo;un logement empêche sa détérioration,
          notamment celle de l&lsquo;isolation.
          <br />
          De plus, une isolation et des menuiseries performantes impliquent une
          étanchéité de l&lsquo;air très élevée, ce qui peut perturber
          l&lsquo;évacuation de l&lsquo;air vicié et de l&lsquo;humidité. Un
          logement mal ventilé peut avoir des conséquences importantes sur la
          santé de ses occupants.
          <br />
          Parlez-en avec votre conseiller France Rénov&lsquo;.
        </>
      ),
      further: ventilationFurther,
      furtherLinks: ['https://france-renov.gouv.fr/renovation/vmc/maison'],
    },
  },
  emetteurs: {
    'Cas 1 - Radiateurs éléctrique': {
      title: emetteursTitle,
      dependencies: [QuestionId.CHAUFFAGE_PRINCIPAL],
      image: emetteursImage,
      status: 'nok',
      tips: "La température de fonctionnement idéale d'une PAC est de 35/40°C. Elle permet une consommation en énergie moindre et de très bons rendements.",
      attentions: (
        <>
          <h6>
            Votre système de chauffage actuel ne permet pas l&lsquo;installation
            d&lsquo;une PAC air/eau.
          </h6>
          Les deux pré-requis à l&lsquo;installation d&lsquo;une PAC air/eau
          basse température (35/40°C) sont la présence d&lsquo;un éméteur basse
          température et d&lsquo;une installation de chauffage utilisant un
          système hydraulique (type chaudière).
          <br />
          Son installation nécessiterait de changer complètement votre système
          de chauffage actuel. D&lsquo;autres systèmes de chauffage alternatifs
          pourrait convenir davantage à votre logement.
          <br />
          Parlez-en avec votre conseiller France Rénov&lsquo;.
        </>
      ),
      further: emetteursFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/chauffage/pompe-chaleur-maison',
      ],
    },
    'Cas 3 - Plancher chauffant à eau': {
      title: emetteursTitle,
      dependencies: [QuestionId.CHAUFFAGE_PRINCIPAL, QuestionId.EMETTEURS],
      image: emetteursImage,
      status: 'ok',
      tips: "La température de fonctionnement idéale d'une PAC est de 35/40°C. Elle permet une consommation en énergie moindre et de très bons rendements.",
      attentions: (
        <>
          <h6>
            Votre système de chauffage actuel est optimal pour
            l&lsquo;installation d&lsquo;une PAC air/eau.
          </h6>
          Les deux pré-requis à l&lsquo;installation d&lsquo;une PAC air/eau
          basse température (35/40°C) sont la présence d&lsquo;un éméteur basse
          température, ce qui est le cas d&lsquo;un plancher chaufant, et la
          présence d&lsquo;une installation de chauffage utilisant un système
          hydraulique (chaudière).
          <br />
          Parlez-en avec votre conseiller France Rénov&lsquo;.
        </>
      ),
      further: emetteursFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/chauffage/pompe-chaleur-maison',
      ],
    },
    'Cas 4 - Radiateur à eau haute température': {
      title: emetteursTitle,
      dependencies: [QuestionId.CHAUFFAGE_PRINCIPAL, QuestionId.EMETTEURS],
      image: emetteursImage,
      status: 'sok',
      tips: "La température de fonctionnement idéale d'une PAC est de 35/40°C. Elle permet une consommation en énergie moindre et de très bons rendements.",
      attentions: (
        <>
          <h6>
            Votre système de chauffage actuel ne permet pas l&lsquo;installation
            d&lsquo;une PAC air/eau basse température (35/40°C).
          </h6>
          En revanche, il semble possible d&lsquo;installer une PAC air/eau
          haute température (65-80°C) puisque vous bénéficiez d&lsquo;une
          installation de chauffage utilisant un système hydraulique et un
          éméteur haute température.
          <br />
          Ce système est moins optimal, car il engendre un coût d&lsquo;achat et
          des dépenses énergétiques supérieures, ainsi qu&lsquo;un rendement
          moindre. Néanmoins, il reste dans la plupart des cas très intéressant.
          <br />
          Parlez-en avec votre conseiller France Rénov&lsquo;.
        </>
      ),
    },
    'Cas 5 : autres/ bois': {
      title: emetteursTitle,
      dependencies: [QuestionId.CHAUFFAGE_PRINCIPAL, QuestionId.EMETTEURS],
      image: emetteursImage,
      status: 'sok',
      tips: "La température de fonctionnement idéale d'une PAC est de 35/40°C. Elle permet une consommation en énergie moindre et de très bons rendements.",
      attentions: (
        <>
          <h6>
            Votre système de chauffage actuel ne permet pas l&lsquo;installation
            d&lsquo;une PAC air/eau.
          </h6>
          Les deux pré-requis à l&lsquo;installation d&lsquo;une PAC air/eau
          basse température (35/40°C) sont la présence d&lsquo;un éméteur basse
          température et d&lsquo;une installation de chauffage utilisant un
          système hydraulique (type chaudière).
          <br />
          Son installation nécessiterait de changer complètement votre système
          de chauffage actuel. D&lsquo;autres systèmes de chauffage alternatifs
          pourrait convenir davantage à votre logement.
          <br />
          Parlez-en avec votre conseiller France Rénov&lsquo;.
        </>
      ),
      further: emetteursFurther,
      furtherLinks: [
        'https://france-renov.gouv.fr/renovation/chauffage/pompe-chaleur-maison',
      ],
    },
  },
};
