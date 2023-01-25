import { Answer, Answers } from '../../../types/answer';
import { Result } from '../../../types/result';
import computeChauffageRating from './chauffage';
import computeConstuctionRating from './construction';
import computeIsolationRating from './isolation';
import computeRenovation from './renovation';

const basseTemperature = (answers: Answers, isolation: number): Result => {
  switch (isolation) {
    case 1:
      return {
        compatibility: 'sok',
        syntheses: {
          positiveTitle: 'Bonne nouvelle !',
          positiveDescription:
            "L'installation d'une pompe à chaleur air/eau peut être envisagé pour votre maison.",
          negativeTitle:
            "Cependant, nous vous recommandons fortement de réaliser des travaux d'isolation avant de vous équiper d'une PAC.",
          negativeDescription:
            "Le manque total d'isolation de votre logement risque d'entrainer des sur-couts à l'installation et en fonctionnement.",
        },
        further:
          "Avant d'aller plus loin dans votre projet, il est important que vous envisagiez d'autres travaux ou une autre source de production. Nous vous proposons de prendre rendez vous auprès d'une Espace France Renov qui peut vous accompagner dans la définition de celui-ci",
        justifications: {
          positives: [
            "Votre maison possède un plancher chauffant, un systeme de chauffage parfaitement adapté au fonctionnement de la PAC. Les planchers chauffant sont en effet conçus pour fonctionner à température moyenne (35/40°). Il ne sera donc pas nécéssaire de modifier les émétteurs de chaleur, ce qui réduit les coûts d'investissement.",
          ],
          negatives: [
            "Sans travaux d'isolation, l'investissement initial sur l'installation de la PAC sera plus élévé. Il sera en effet nécéssaire sur-dimensionner l'équipement par rapport aux besoins d'un même logement correctement isolé.",
            "Avec une mauvaise isolation, les économies sur vos factures énergétiques seront réduites. Les gains apporté par la PAC seront limités à [15%] et limite l'intérêt économique de vos travaux.",
            "Il est important de respecter une bonne chronologie des travaux ou les combiner. Si vous isolez après l'installation de la PAC, cela peut générer des difficultés de régulation et une perte de performance. En pratique, il y a un risque d'inconfort pour l'occupant (la température n'est pas stable) et dégradation prématurée de l'équipement (augmentation du nombre d'allumage).",
          ],
        },
        pacAsFirstStep: false,
        todo: 'Isoler - RFR',
        investment: 3,
      };
    case 2:
      return {
        compatibility: 'ok',
        syntheses: {
          positiveTitle: 'Bonne nouvelle !',
          positiveDescription:
            "L'installation d'une pompe à chaleur est adaptée votre maison.",
          negativeTitle:
            "Votre maison n'est pas complètement performante cependant, même après la mise en œuvre du résultat",
        },
        further:
          "Avant d'aller plus loin dans votre projet, il est important que vous envisagiez d'autres travaux complémentaires. Nous vous proposons de prendre rendez vous auprès d'une Espace France Renov qui peut vous accompagner dans la définition de celui-ci",
        justifications: {
          positives: [
            'Votre maison possède un plancher chauffant ce qui est favorable à la mise en place de PAC Air / Eau.',
          ],
          negatives: [
            "Votre maison est déjà isolée mais tous les lots de l'enveloppe et de la ventilation ne sont pas traités.",
          ],
        },
        pacAsFirstStep: true,
        todo: 'OK, mais proposition isolation de fin de parcours',
        investment: 2,
      };
    case 3:
      return {
        compatibility: 'ok',
        syntheses: {
          positiveTitle: 'Bonne nouvelle !',
          positiveDescription:
            "L'installation d'une pompe à chaleur est adaptée à votre maison.",
        },
        further: 'Bonne pratiques',
        justifications: {
          positives: [
            'Votre maison possède un plancher chauffant ce qui est favorable à la mise en place de PAC Air / Eau.',
            'Votre maison semble déjà isolée. ',
          ],
          negatives: [],
        },
        pacAsFirstStep: true,
        todo: 'Bonnes pratiques',
        investment: 1,
      };
    default:
      throw new Error(`Unknown isolation rating: ${isolation}`);
  }
};

const hauteTemperature = (answers: Answers, isolation: number): Result => {
  const construction = computeConstuctionRating(answers);
  if (construction === 1 || construction === 2) {
    switch (isolation) {
      case 1:
        return {
          compatibility: 'nok',
          syntheses: {
            negativeTitle:
              "L'installation d'une pompe à chaleur n'est pas directement adaptée à votre maison.",
            negativeDescription:
              "Votre projet doit prendre en compte d'autres travaux en priorité pour éviter un surinvestissement important et des surconsommations.",
          },
          further:
            "Avant d'aller plus loin dans votre projet, il est important que vous envisagiez d'autres travaux ou une autre source de production. Nous vous proposons de prendre rendez vous auprès d'une Espace France Renov qui peut vous accompagner dans la définition de celui-ci",
          justifications: {
            positives: [],
            negatives: [
              "Votre maison ne dispose pas d'émetteurs directement adaptés à la mise en opeuvre de PAC sans isolation",
              "Votre maison n'est pas suffisamment isolée; ce qui va entraîner une surconsommation et un surinvestissement. ",
            ],
          },
          pacAsFirstStep: false,
          todo: 'Isoler - RFR',
          investment: 3,
        };
      case 2:
        return {
          compatibility: 'sok',
          syntheses: {
            positiveTitle: 'Bonne nouvelle !',
            positiveDescription:
              "L'installation d'une pompe à chaleur est adapté mais doit cependant s'accompagner d'autres travaux.",
            negativeTitle:
              "En effet, l'isolation de votre maison est insuffisante pour permettre le fonctionnement efficace d'une pompe  à chaleur.",
          },
          further:
            "Avant d'aller plus loin dans votre projet, il est important que vous envisagiez d'autres travaux complémentaires. Nous vous proposons de prendre rendez vous auprès d'un Espace France Renov qui peut vous accompagner dans la définitiion de celui-ci",
          justifications: {
            positives: [
              "Votre maison est déjà en parti isolée, mais doit encore l'être pour permettre une économie d'énegie importante",
            ],
            negatives: [
              "Vous êtes équipés d'émetteurs à hautes températures, ce qui n'est pas efficace pour le bon fonctionnement des pompes à chaleur. Il faut donc, soit finir le parcours de rénovation, soit changer les émetteurs. ",
              'Nota : certaines pompes à chaleur à Haute Température peuvent fonctionner mais sont moins performante au global et nécessitent un investissement supérieur',
            ],
          },
          pacAsFirstStep: true,
          todo: 'En profiter pour finir le parcours',
          investment: 2,
        };
      case 3:
        return {
          compatibility: 'ok',
          syntheses: {
            positiveTitle: 'Bonne nouvelle !',
            positiveDescription:
              "L'installation d'une pompe à chaleur est adaptée à votre maison.",
          },
          further: 'Bonnes pratiques',
          justifications: {
            positives: [
              'Votre maison semble déjà isolée et les radiateurs semblent adapter à la pompe à chaleur',
            ],
            negatives: [],
          },
          pacAsFirstStep: true,
          todo: 'Bonnes pratiques',
          investment: 1,
        };
      default:
        throw new Error(`Unknown isolation rating: ${isolation}`);
    }
  } else if (construction === 3) {
    return {
      compatibility: 'sok',
      syntheses: {
        positiveTitle: 'Bonne nouvelle !',
        positiveDescription:
          "L'installation d'une pompe à chaleur est adaptée votre maison.",
        negativeTitle:
          'Cependant, certaines précautions doivent être prises en compte pour son bon fonctionnement.',
        negativeDescription: '',
      },
      further:
        "Avant d'aller plus loin dans votre projet, il est important que vous envisagiez d'autres travaux complémentaires. Nous vous proposons de prendre rendez vous auprès d'un Espace France Renov qui peut vous accompagner dans la définitiion de celui-ci",
      justifications: {
        positives: [
          "Votre maison bénéficie déjà d'une isolation d'origine ou changée.",
        ],
        negatives: [
          "Les radiateurs ne sont pas nécessairement adaptés au régime de fonctionnement des pompes à chaleur. Ils doivent dont être changés pour des émetteurs basse température, ou une sur-isolation de l'existant est à prévoir. ",
        ],
      },
      pacAsFirstStep: true,
      todo: 'ok mais PAC HT ou Emetteurs BT ou  réisoler',
      investment: 2,
    };
  } else {
    return {
      compatibility: 'sok',
      syntheses: {
        positiveTitle: 'Bonne nouvelle !',
        positiveDescription:
          "L'installation d'une pompe à chaleur est adaptée votre maison.",
        negativeTitle:
          'Cependant, certaines précautions doivent être prises en compte pour son bon fonctionnement.',
      },
      further: 'Bonne pratiques',
      justifications: {
        positives: [
          "Votre maison bénéficie déjà d'une isolation d'origine ou changée.",
        ],
        negatives: [
          "Les radiateurs ne sont pas nécessairement adaptés au régime de fonctionnement des pompes à chaleur. Ils doivent dont être changés pour des émetteurs basse température, ou une sur-isolation de l'existant est à prévoir.",
        ],
      },
      pacAsFirstStep: true,
      todo: 'ok mais PAC HT ou Emetteurs BT ou  réisoler',
      investment: 2,
    };
  }
};

const other = (answers: Answers, isolation: number): Result => {
  switch (isolation) {
    case 1:
      return {
        compatibility: 'nok',
        syntheses: {
          negativeTitle:
            "L'installation d'une pompe à chaleur n'est pas directement adaptée à votre maison.",
          negativeDescription:
            "Votre projet doit prendre en compte d'autres travaux en priorité pour éviter un surinvestissement important et des surconsommations.",
        },
        further:
          "Avant d'aller plus loin dans votre projet, il est important que vous envisagiez d'autres travaux ou une autre source de production. Nous vous proposons de prendre rendez vous auprès d'un Espace France Renov qui peut vous accompagner dans la définition de celui-ci",
        justifications: {
          positives: [],
          negatives: [
            "Votre maison n'est pas suffisamment isolée; ce qui va entraîner une surconsommation et un surinvestissement. ",
          ],
        },
        pacAsFirstStep: false,
        todo: 'Isoler avant de mettre une PAC',
        investment: 3,
      };
    case 2:
      return {
        compatibility: 'ok',
        syntheses: {
          positiveTitle: 'Bonne nouvelle !',
          positiveDescription:
            "L'installation d'une pompe à chaleur est adaptée votre maison.",
          negativeTitle:
            'Cependant, certaines précautions doivent être prises en compte pour son bon fonctionnement.',
        },
        further:
          "Votre maison peut également être plus performante en terminant votre parcours de rénovation et en traitant les lots d'enveloppe qui ne sont pas encore traités. Bonne pratiques",
        justifications: {
          positives: [
            "Votre maison est déjà en parti isolée, mais doit encore l'être pour permettre une économie d'énergie importante",
          ],
          negatives: [
            'Vous allez installer des émetteurs spécifiquement pour le projet. Il faut prendre des radiateurs basse température',
          ],
        },
        pacAsFirstStep: true,
        todo: 'OK, mais proposition isolation de fin de parcours',
        investment: 2,
      };
    case 3:
      return {
        compatibility: 'ok',
        syntheses: {
          positiveTitle: 'Bonne nouvelle !',
          positiveDescription:
            "L'installation d'une pompe à chaleur est adaptée votre maison.",
          negativeTitle:
            'Cependant, certaines précautions doivent être prises en compte pour son bon fonctionnement.',
        },
        further: 'Bonne pratiques',
        justifications: {
          positives: ['Votre maison est déjà isolée'],
          negatives: [
            'Vous allez installer des émetteurs spécifiquement pour le projet. Il faut prendre des émetteurs basse température',
          ],
        },
        pacAsFirstStep: true,
        todo: 'Bonnes pratiques',
        investment: 2,
      };
    default:
      throw new Error(`Unknown isolation rating: ${isolation}`);
  }
};

const simulator = (arrayAnswers: Answer[]): Result => {
  const answers: Answers = {};
  arrayAnswers.forEach((answer) => {
    answers[answer.id] = answer.value;
  });

  const chauffageRating = computeChauffageRating(answers);
  const isolationResult = computeIsolationRating(answers);
  const isolation = Math.max(
    Math.min(
      Math.floor(
        isolationResult.mur +
          isolationResult.plancherHaut +
          isolationResult.plancherBas +
          isolationResult.menuiserie +
          isolationResult.vmc
      ),
      3
    ),
    1
  );

  let result;
  switch (chauffageRating) {
    case 1:
      result = basseTemperature(answers, isolation);
      break;
    case 2:
      result = hauteTemperature(answers, isolation);
      break;
    default:
      result = other(answers, isolation);
      break;
  }

  const rennovation = computeRenovation(answers, isolationResult, result);

  return {
    ...result,
    rennovation,
  };
};

export default simulator;
