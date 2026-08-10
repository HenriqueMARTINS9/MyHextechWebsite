import type { Metadata } from "next"

import { LegalPageLayout } from "@/components/legal-page-layout"

export const metadata: Metadata = {
  title: "Politique de confidentialité | MyHextech",
  description: "Politique de confidentialité et de protection des données personnelles du site MyHextech.",
}

export default function PolitiqueDeConfidentialitePage() {
  return (
    <LegalPageLayout
      title="Politique de confidentialité"
      description="Cette politique présente les données susceptibles d'être collectées sur MyHextech, leurs usages et les droits des utilisateurs."
      documentLabel="Protection des données"
      currentPath="/politique-de-confidentialite"
    >
      <section>
        <p>MyHextech accorde une importance particulière à la protection des données personnelles.</p>
        <p>
          La présente politique explique les informations susceptibles d'être collectées lors de l'utilisation du site{" "}
          <strong><a href="https://www.myhextech.com">www.myhextech.com</a></strong>, les raisons de leur traitement et
          les droits dont disposent les utilisateurs.
        </p>
      </section>

      <section>
        <h2>1. Responsable du traitement</h2>
        <p>Le responsable des traitements réalisés directement par le site MyHextech est :</p>
        <address>
          <p>
            <strong>Henrique MARTINS – Entrepreneur individuel (EI)</strong>
            <br />
            Nom commercial : <strong>MyHextech</strong>
          </p>
          <p>
            2 B rue de Bonaventure
            <br />
            78810 Feucherolles
            <br />
            France
          </p>
          <p>SIRET : 939 227 781 00027</p>
          <p>E-mail : <strong><a href="mailto:henrique.mar@outlook.fr">henrique.mar@outlook.fr</a></strong></p>
        </address>
      </section>

      <section>
        <h2>2. Données susceptibles d'être collectées</h2>
        <p>Lorsque vous utilisez le formulaire de contact du site, MyHextech peut notamment collecter :</p>
        <ul>
          <li>votre nom ;</li>
          <li>votre adresse e-mail ;</li>
          <li>le sujet de votre demande ;</li>
          <li>les informations que vous choisissez volontairement de communiquer dans votre message.</li>
        </ul>
        <p>
          Certaines données techniques strictement nécessaires au fonctionnement et à la sécurité du site peuvent
          également être traitées par les prestataires techniques utilisés pour son hébergement.
        </p>
        <p>MyHextech ne demande pas volontairement de données sensibles par l'intermédiaire du formulaire de contact.</p>
        <p>Il est recommandé de ne pas transmettre ce type d'information dans un message sauf nécessité particulière.</p>
      </section>

      <section>
        <h2>3. Finalités des traitements</h2>
        <p>Les données transmises via le formulaire de contact sont utilisées afin de :</p>
        <ul>
          <li>recevoir et traiter votre demande ;</li>
          <li>répondre à vos questions ;</li>
          <li>étudier une éventuelle demande de prestation ;</li>
          <li>établir, lorsque cela est nécessaire, un devis ou une proposition commerciale ;</li>
          <li>assurer le suivi des échanges précontractuels ou contractuels ;</li>
          <li>prévenir les abus et assurer la sécurité du site.</li>
        </ul>
        <p>Les données ne sont pas utilisées à des fins incompatibles avec ces objectifs.</p>
      </section>

      <section>
        <h2>4. Bases légales</h2>
        <p>Selon la nature de la demande, les traitements peuvent reposer sur :</p>
        <p>
          <strong>L'intérêt légitime de MyHextech</strong>, lorsqu'il s'agit de répondre à une demande de contact ou à
          une sollicitation professionnelle ;
        </p>
        <p>
          <strong>Les mesures précontractuelles ou l'exécution d'un contrat</strong>, lorsqu'une personne demande un
          devis, une prestation ou devient cliente ;
        </p>
        <p>
          <strong>Une obligation légale</strong>, lorsque certaines informations doivent être conservées pour répondre
          à des obligations comptables, fiscales ou juridiques.
        </p>
      </section>

      <section>
        <h2>5. Destinataires</h2>
        <p>
          Les données sont accessibles uniquement aux personnes et prestataires ayant besoin d'y accéder pour les
          finalités prévues par la présente politique.
        </p>
        <p>Elles peuvent notamment être traitées par :</p>
        <ul>
          <li>Henrique MARTINS / MyHextech ;</li>
          <li>l'hébergeur du site ;</li>
          <li>les prestataires techniques nécessaires au fonctionnement du formulaire ;</li>
          <li>les prestataires de messagerie utilisés pour recevoir ou répondre aux demandes.</li>
        </ul>
        <p>Les données ne sont pas vendues à des tiers.</p>
      </section>

      <section>
        <h2>6. Hébergement</h2>
        <p>Le site est hébergé par :</p>
        <address>
          <p>
            <strong>Vercel Inc.</strong>
            <br />
            440 N Barranca Ave #4133
            <br />
            Covina, CA 91723
            <br />
            États-Unis.
          </p>
        </address>
        <p>
          L'utilisation de prestataires internationaux peut impliquer certains traitements techniques en dehors de
          l'Espace économique européen.
        </p>
        <p>
          Lorsque la réglementation l'exige, ces transferts doivent être encadrés par les mécanismes juridiques
          appropriés prévus par la réglementation applicable.
        </p>
      </section>

      <section>
        <h2>7. Durées de conservation</h2>
        <p>
          Les données issues d'une simple demande de contact ou d'une relation de prospection peuvent être conservées
          pendant une durée maximale de <strong>trois ans à compter du dernier contact émanant de la personne
          concernée</strong>, sauf nécessité particulière ou obligation légale différente.
        </p>
        <p>
          Lorsqu'une relation contractuelle est conclue, certaines informations peuvent être conservées pendant toute
          la durée de cette relation puis archivées pendant les durées nécessaires au respect des obligations légales,
          comptables, fiscales ou à la constatation, l'exercice ou la défense de droits en justice.
        </p>
        <p>
          Les données devenues inutiles sont supprimées ou anonymisées lorsqu'aucune obligation ne justifie plus leur
          conservation.
        </p>
      </section>

      <section>
        <h2>8. Cookies et traceurs</h2>
        <p>
          Le site peut utiliser des technologies strictement nécessaires à son fonctionnement, à sa sécurité ou à la
          fourniture d'un service expressément demandé par l'utilisateur.
        </p>
        <p>
          Ces technologies ne nécessitent pas nécessairement le recueil du consentement lorsqu'elles sont strictement
          nécessaires.
        </p>
        <p>
          Si MyHextech met ultérieurement en place des cookies ou traceurs soumis au consentement, notamment pour de la
          publicité, du suivi marketing ou certaines mesures d'audience, l'utilisateur en sera préalablement informé et
          pourra accepter ou refuser leur utilisation avant leur dépôt lorsque la réglementation l'exige.
        </p>
        <p>
          La présente politique sera alors mise à jour et, lorsque nécessaire, un outil de gestion du consentement sera
          mis en place.
        </p>
      </section>

      <section>
        <h2>9. Liens externes</h2>
        <p>
          Le site MyHextech peut contenir des liens vers des services tiers, notamment GitHub, LinkedIn ainsi que les
          sites des différents projets présentés dans le portfolio.
        </p>
        <p>
          Lorsque vous quittez MyHextech pour accéder à l'un de ces services, les traitements de données réalisés par
          le service concerné sont régis par sa propre politique de confidentialité.
        </p>
        <p>MyHextech n'est pas responsable des pratiques de ces sites externes.</p>
      </section>

      <section>
        <h2>10. Vos droits</h2>
        <p>
          Conformément à la réglementation applicable en matière de protection des données personnelles, vous pouvez,
          selon les circonstances, exercer les droits suivants :
        </p>
        <ul>
          <li>droit d'accès à vos données ;</li>
          <li>droit de rectification ;</li>
          <li>droit à l'effacement ;</li>
          <li>droit à la limitation du traitement ;</li>
          <li>droit d'opposition ;</li>
          <li>droit à la portabilité lorsque celui-ci est applicable ;</li>
          <li>droit de retirer votre consentement lorsque le traitement repose sur celui-ci.</li>
        </ul>
        <p>Pour exercer vos droits, vous pouvez contacter :</p>
        <p><strong><a href="mailto:henrique.mar@outlook.fr">henrique.mar@outlook.fr</a></strong></p>
        <p>
          Une vérification d'identité pourra être demandée uniquement lorsque cela est nécessaire pour éviter qu'une
          personne non autorisée puisse accéder à vos données.
        </p>
      </section>

      <section>
        <h2>11. Réclamation auprès de la CNIL</h2>
        <p>
          Si vous estimez, après avoir contacté MyHextech, que vos droits relatifs à vos données personnelles ne sont
          pas respectés, vous pouvez introduire une réclamation auprès de la <strong>Commission nationale de
          l'informatique et des libertés (CNIL)</strong>.
        </p>
      </section>

      <section>
        <h2>12. Sécurité</h2>
        <p>
          MyHextech prend des mesures techniques et organisationnelles raisonnables afin de protéger les données
          personnelles contre la perte, l'accès non autorisé, l'altération, la divulgation ou la destruction.
        </p>
        <p>Toutefois, aucun système connecté à Internet ne peut garantir une sécurité absolue.</p>
      </section>

      <section>
        <h2>13. Modification de la politique</h2>
        <p>
          La présente politique peut être modifiée afin de tenir compte d'une évolution du site, des services utilisés
          ou des exigences réglementaires.
        </p>
        <p>
          La date de dernière mise à jour figurant en haut de cette page permet d'identifier la version en vigueur.
        </p>
      </section>

      <section>
        <h2>14. Contact</h2>
        <p>Pour toute question relative à la protection des données :</p>
        <address>
          <p>
            <strong>Henrique MARTINS – MyHextech</strong>
            <br />
            E-mail : <strong><a href="mailto:henrique.mar@outlook.fr">henrique.mar@outlook.fr</a></strong>
          </p>
        </address>
      </section>
    </LegalPageLayout>
  )
}
