import type { Metadata } from "next"

import { LegalPageLayout } from "@/components/legal-page-layout"

export const metadata: Metadata = {
  title: "Conditions générales de vente et de prestations | MyHextech",
  description: "Conditions générales de vente et de prestations de services de MyHextech pour les clients professionnels.",
}

export default function ConditionsGeneralesPage() {
  return (
    <LegalPageLayout
      title="Conditions Générales de Vente et de Prestations de Services"
      description="MyHextech – Clients professionnels"
      documentLabel="Cadre contractuel"
      currentPath="/conditions-generales"
    >
      <section>
        <h2>Article 1 – Identification du Prestataire</h2>
        <p>
          Les présentes Conditions Générales de Vente et de Prestations de Services, ci-après les « CGV », sont
          proposées par :
        </p>
        <address>
          <p>
            <strong>Henrique MARTINS – Entrepreneur individuel (EI)</strong>
            <br />
            Nom commercial : <strong>MyHextech</strong>
          </p>
          <p>
            2 B rue de Bonaventure
            <br />
            78810 Feucherolles – France
          </p>
          <p>
            SIREN : 939 227 781
            <br />
            SIRET : 939 227 781 00027
            <br />
            E-mail : <a href="mailto:henrique.mar@outlook.fr">henrique.mar@outlook.fr</a>
            <br />
            Téléphone : <a href="tel:+33622977298">06 22 97 72 98</a>
          </p>
        </address>
        <p>Ci-après désigné « MyHextech » ou « le Prestataire ».</p>
      </section>

      <section>
        <h2>Article 2 – Objet</h2>
        <p>
          Les présentes CGV ont pour objet de définir les conditions dans lesquelles MyHextech fournit ses prestations
          à ses clients professionnels, ci-après désignés « le Client ».
        </p>
        <p>Les prestations proposées peuvent notamment concerner :</p>
        <ul>
          <li>le développement de sites internet ;</li>
          <li>le développement d'applications web ;</li>
          <li>le développement d'applications mobiles ;</li>
          <li>le développement frontend et backend ;</li>
          <li>la conception d'API ;</li>
          <li>la conception et l'administration de bases de données ;</li>
          <li>l'intégration de services et API tiers ;</li>
          <li>l'intégration de solutions d'intelligence artificielle ;</li>
          <li>le développement d'agents IA et d'automatisations ;</li>
          <li>le développement de solutions 2D et 3D ;</li>
          <li>Unity, Unreal Engine, WebGL et technologies associées ;</li>
          <li>le conseil et l'accompagnement technique ;</li>
          <li>l'audit informatique ;</li>
          <li>le déploiement et la mise en production ;</li>
          <li>la maintenance corrective et évolutive ;</li>
          <li>plus généralement, toute prestation informatique convenue avec le Client.</li>
        </ul>
        <p>
          Le contenu exact de chaque mission est défini par le devis, la proposition commerciale, le cahier des charges
          ou le contrat correspondant.
        </p>
      </section>

      <section>
        <h2>Article 3 – Documents contractuels</h2>
        <p>La relation contractuelle est constituée, par ordre de priorité, des documents suivants :</p>
        <ol>
          <li>les éventuelles conditions particulières ou le contrat signé ;</li>
          <li>le devis ou la proposition commerciale accepté ;</li>
          <li>le cahier des charges éventuellement validé ;</li>
          <li>les présentes CGV.</li>
        </ol>
        <p>En cas de contradiction, le document situé au niveau supérieur prévaut.</p>
      </section>

      <section>
        <h2>Article 4 – Devis et commande</h2>
        <p>
          Sauf accord contraire, toute prestation fait l'objet d'un devis ou d'une proposition commerciale précisant
          notamment :
        </p>
        <ul>
          <li>le périmètre de la prestation ;</li>
          <li>les principaux livrables ;</li>
          <li>le prix ou le tarif journalier applicable ;</li>
          <li>les éventuelles étapes ou jalons ;</li>
          <li>les délais estimatifs ;</li>
          <li>les modalités de règlement.</li>
        </ul>
        <p>La commande devient ferme après acceptation du devis par le Client.</p>
        <p>
          L'acceptation peut résulter d'une signature manuscrite ou électronique, d'une validation écrite par e-mail ou
          de la validation de la mission sur une plateforme telle que Malt.
        </p>
        <p>
          Lorsque la mission est réalisée par l'intermédiaire d'une plateforme, les règles impératives de cette
          plateforme relatives notamment à la commande et au paiement peuvent compléter ou prévaloir sur les
          dispositions correspondantes des présentes CGV.
        </p>
      </section>

      <section>
        <h2>Article 5 – Tarifs</h2>
        <p>Les prix sont exprimés en euros et, sauf mention contraire, hors taxes.</p>
        <p>Ils peuvent être calculés :</p>
        <ul>
          <li>au forfait ;</li>
          <li>selon un tarif journalier moyen (TJM) ;</li>
          <li>selon un tarif horaire ;</li>
          <li>selon des jalons ;</li>
          <li>sous forme d'abonnement ou de maintenance récurrente.</li>
        </ul>
        <p>Le prix applicable à une mission est celui figurant sur le devis accepté.</p>
        <p>
          Les éventuels coûts de services tiers ne sont pas inclus sauf mention contraire : hébergement, noms de
          domaine, API, services d'intelligence artificielle, logiciels, licences, services cloud, bases de données,
          services d'envoi d'e-mails, stores d'applications ou tout autre abonnement externe.
        </p>
        <p>Lorsque de tels frais doivent être engagés pour le compte du Client, celui-ci en est informé préalablement.</p>
      </section>

      <section>
        <h2>Article 6 – Acompte et paiement</h2>
        <p>
          Sauf conditions particulières prévues dans le devis, un acompte de <strong>40 % du montant de la
          prestation</strong> est exigible à la commande.
        </p>
        <p>Le démarrage de la prestation peut être conditionné à la réception de cet acompte.</p>
        <p>
          Le solde est facturé lors de la livraison finale ou conformément aux différents jalons prévus au devis.
        </p>
        <p>Les factures sont payables selon l'échéance figurant sur celles-ci.</p>
        <p>Aucun escompte n'est accordé en cas de paiement anticipé, sauf accord écrit contraire.</p>
        <p>Le régime de TVA applicable est celui légalement applicable à MyHextech au jour de la facturation.</p>
      </section>

      <section>
        <h2>Article 7 – Retard de paiement</h2>
        <p>
          En cas de retard de paiement par un Client professionnel, des pénalités sont exigibles de plein droit à
          compter du jour suivant la date d'échéance figurant sur la facture, sans qu'un rappel préalable soit
          nécessaire.
        </p>
        <p>
          Le taux des pénalités de retard est égal au taux d'intérêt appliqué par la Banque centrale européenne à son
          opération de refinancement la plus récente, majoré de dix points de pourcentage.
        </p>
        <p>
          Tout retard de paiement entraîne également de plein droit l'exigibilité d'une indemnité forfaitaire de{" "}
          <strong>40 euros pour frais de recouvrement</strong>.
        </p>
        <p>
          Lorsque les frais de recouvrement engagés sont supérieurs à cette indemnité, une indemnisation complémentaire
          pourra être demandée sur justification.
        </p>
        <p>
          MyHextech se réserve également le droit de suspendre toute prestation en cours jusqu'au règlement des sommes
          échues.
        </p>
      </section>

      <section>
        <h2>Article 8 – Obligations du Client</h2>
        <p>Le Client s'engage à collaborer activement à la réalisation du projet.</p>
        <p>Il doit notamment fournir dans des délais raisonnables :</p>
        <ul>
          <li>les informations nécessaires ;</li>
          <li>les contenus ;</li>
          <li>les accès techniques ;</li>
          <li>les identifiants ;</li>
          <li>les ressources graphiques ;</li>
          <li>les licences nécessaires ;</li>
          <li>les validations demandées.</li>
        </ul>
        <p>Le Client garantit disposer des droits nécessaires sur les éléments qu'il remet à MyHextech.</p>
        <p>
          Le Client demeure responsable de la légalité des contenus, données, documents et instructions qu'il fournit.
        </p>
      </section>

      <section>
        <h2>Article 9 – Délais</h2>
        <p>Les délais annoncés sont établis au regard du périmètre connu au jour de la validation du devis.</p>
        <p>Sauf engagement exprès contraire, ils constituent des délais prévisionnels.</p>
        <p>
          Un retard imputable au Client, notamment dans la fourniture d'informations, d'accès ou de validations,
          entraîne automatiquement un décalage raisonnable du calendrier.
        </p>
        <p>Les délais peuvent également évoluer lorsque le périmètre du projet est modifié.</p>
      </section>

      <section>
        <h2>Article 10 – Modification du périmètre</h2>
        <p>Le prix convenu couvre uniquement les travaux décrits dans le devis ou le cahier des charges accepté.</p>
        <p>
          Toute demande constituant une fonctionnalité supplémentaire, un changement de comportement, une nouvelle
          intégration ou une modification du besoin initial pourra faire l'objet :
        </p>
        <ul>
          <li>d'un devis complémentaire ;</li>
          <li>d'un avenant ;</li>
          <li>ou d'une facturation sur la base du TJM convenu.</li>
        </ul>
        <p>Une demande d'évolution ne constitue pas une correction d'anomalie.</p>
      </section>

      <section>
        <h2>Article 11 – Livraison</h2>
        <p>Selon le projet, la livraison peut notamment être réalisée par :</p>
        <ul>
          <li>mise en production ;</li>
          <li>mise à disposition d'une application ;</li>
          <li>remise d'un dépôt Git ;</li>
          <li>remise des fichiers sources ;</li>
          <li>livraison d'une archive ;</li>
          <li>déploiement sur l'infrastructure du Client ;</li>
          <li>transmission d'une documentation ;</li>
          <li>publication sur un store.</li>
        </ul>
        <p>Le mode de livraison applicable est précisé au devis ou convenu avec le Client.</p>
      </section>

      <section>
        <h2>Article 12 – Recette et anomalies</h2>
        <p>
          À la livraison, le Client dispose d'un délai raisonnable pour tester les fonctionnalités comprises dans le
          périmètre convenu.
        </p>
        <p>
          Toute anomalie signalée doit être suffisamment documentée afin de permettre sa reproduction : comportement
          observé, comportement attendu et, lorsque cela est possible, étapes permettant de reproduire le problème.
        </p>
        <p>
          Une anomalie est une différence reproductible entre le comportement du livrable et le comportement
          expressément prévu dans le périmètre contractuel.
        </p>
        <p>Une demande de modification ou d'amélioration ne constitue pas une anomalie.</p>
      </section>

      <section>
        <h2>Article 13 – Propriété intellectuelle</h2>
        <p>
          Les méthodes, connaissances, outils génériques, architectures, bibliothèques, scripts, composants
          réutilisables, templates, processus et savoir-faire détenus par MyHextech avant la mission ou développés
          indépendamment de celle-ci demeurent la propriété de MyHextech.
        </p>
        <p>Les composants open source ou appartenant à des tiers demeurent soumis à leurs propres licences.</p>
        <p>Les droits relatifs aux créations spécifiquement réalisées pour le Client sont définis dans le devis ou le contrat.</p>
        <p>
          Lorsqu'une cession de droits est prévue, elle ne prend effet qu'après paiement intégral de la prestation
          concernée et dans les limites précisées par le document contractuel.
        </p>
        <p>
          En l'absence de cession expressément convenue, le Client bénéficie d'un droit d'utilisation des livrables lui
          permettant de les exploiter conformément à la destination prévue par le projet.
        </p>
      </section>

      <section>
        <h2>Article 14 – Code source</h2>
        <p>
          Lorsque la remise du code source est comprise dans la prestation, elle intervient selon les modalités prévues
          au devis.
        </p>
        <p>
          Le code peut contenir ou dépendre de bibliothèques, frameworks ou composants soumis à des licences distinctes.
        </p>
        <p>
          Les identifiants, mots de passe et clés API ne sont pas considérés comme faisant partie du code source devant
          être publié ou transmis lorsqu'une telle transmission présenterait un risque de sécurité.
        </p>
      </section>

      <section>
        <h2>Article 15 – Services tiers</h2>
        <p>Les prestations peuvent nécessiter l'utilisation de services exploités par des tiers, notamment :</p>
        <ul>
          <li>fournisseurs cloud ;</li>
          <li>hébergeurs ;</li>
          <li>solutions de bases de données ;</li>
          <li>API ;</li>
          <li>fournisseurs d'intelligence artificielle ;</li>
          <li>solutions de paiement ;</li>
          <li>solutions d'e-mailing ;</li>
          <li>stores Apple ou Google ;</li>
          <li>services SaaS.</li>
        </ul>
        <p>MyHextech ne contrôle pas ces services.</p>
        <p>
          MyHextech ne peut donc garantir leur disponibilité permanente, l'absence de modification de leurs tarifs ou
          de leurs conditions, ni la continuité de leurs API.
        </p>
        <p>
          Toute adaptation rendue nécessaire après livraison par une modification significative d'un service tiers
          pourra faire l'objet d'une prestation complémentaire.
        </p>
      </section>

      <section>
        <h2>Article 16 – Intelligence artificielle</h2>
        <p>Certaines prestations de MyHextech peuvent intégrer des modèles ou services d'intelligence artificielle.</p>
        <p>
          Le Client reconnaît que les résultats générés par ces systèmes peuvent être probabilistes, incomplets ou
          inexacts.
        </p>
        <p>
          Sauf engagement contractuel spécifique, MyHextech ne garantit pas l'exactitude absolue d'un contenu produit
          par un modèle d'intelligence artificielle tiers.
        </p>
        <p>
          Le Client demeure responsable de la validation humaine des résultats avant leur utilisation dans un contexte
          nécessitant une exactitude particulière.
        </p>
      </section>

      <section>
        <h2>Article 17 – Maintenance</h2>
        <p>La maintenance évolutive n'est pas comprise dans le prix initial sauf mention contraire.</p>
        <p>
          Les nouvelles fonctionnalités, évolutions, mises à jour ou adaptations demandées après livraison peuvent
          faire l'objet d'une prestation distincte.
        </p>
        <p>Un contrat de maintenance ou un forfait mensuel peut être proposé séparément.</p>
      </section>

      <section>
        <h2>Article 18 – Confidentialité</h2>
        <p>
          MyHextech et le Client s'engagent à préserver la confidentialité des informations sensibles obtenues dans le
          cadre de la mission.
        </p>
        <p>Cette obligation concerne notamment :</p>
        <ul>
          <li>les informations commerciales ;</li>
          <li>les données internes ;</li>
          <li>les accès techniques ;</li>
          <li>le code source privé ;</li>
          <li>les documents stratégiques ;</li>
          <li>les informations financières ;</li>
          <li>les secrets d'affaires.</li>
        </ul>
        <p>
          Ne sont pas considérées comme confidentielles les informations déjà publiques ou obtenues légalement auprès
          d'une autre source.
        </p>
      </section>

      <section>
        <h2>Article 19 – Données personnelles</h2>
        <p>
          Chaque partie s'engage à respecter la réglementation applicable en matière de protection des données
          personnelles.
        </p>
        <p>
          Lorsque MyHextech traite des données personnelles pour le compte du Client dans le cadre du développement ou
          de l'exploitation d'une application, les responsabilités respectives pourront être précisées dans une annexe
          relative au traitement des données personnelles.
        </p>
        <p>
          Le Client demeure responsable de la détermination des finalités et des bases légales des traitements qu'il met
          en œuvre, sauf accord contractuel contraire.
        </p>
      </section>

      <section>
        <h2>Article 20 – Sécurité</h2>
        <p>MyHextech met en œuvre les mesures techniques raisonnablement adaptées à la nature de la prestation.</p>
        <p>La sécurité d'un système dépend toutefois de l'ensemble de son environnement technique.</p>
        <p>MyHextech ne saurait être tenu responsable d'une compromission résultant notamment :</p>
        <ul>
          <li>d'identifiants communiqués à un tiers ;</li>
          <li>d'une mauvaise configuration effectuée après livraison ;</li>
          <li>d'une modification réalisée par un tiers ;</li>
          <li>d'un service externe compromis ;</li>
          <li>de l'absence d'installation d'une mise à jour recommandée ;</li>
          <li>ou d'une utilisation contraire aux recommandations communiquées.</li>
        </ul>
      </section>

      <section>
        <h2>Article 21 – Responsabilité</h2>
        <p>
          MyHextech est soumis à une obligation de moyens sauf lorsqu'une obligation particulière de résultat est
          expressément indiquée dans le devis.
        </p>
        <p>
          MyHextech ne pourra être tenu responsable d'un dommage résultant d'une mauvaise utilisation du livrable,
          d'une modification réalisée par un tiers ou d'une information erronée fournie par le Client.
        </p>
        <p>
          Sauf faute lourde, dol ou autre cas dans lequel la loi interdit une limitation de responsabilité, le montant
          total de la responsabilité susceptible d'être engagée au titre d'une mission est limité au montant hors taxes
          effectivement payé à MyHextech pour la prestation directement à l'origine du dommage.
        </p>
        <p>
          MyHextech ne pourra être tenu responsable des dommages indirects tels que perte de chiffre d'affaires, perte
          d'opportunité commerciale, perte de clientèle ou atteinte indirecte à l'image.
        </p>
      </section>

      <section>
        <h2>Article 22 – Interruption ou annulation d'une mission</h2>
        <p>
          En cas d'annulation d'une mission par le Client après son commencement, les prestations déjà réalisées restent
          dues.
        </p>
        <p>
          Les frais ou engagements pris spécifiquement pour le projet et ne pouvant être annulés ou remboursés restent
          également à la charge du Client.
        </p>
        <p>
          Lorsque l'acompte versé excède la valeur des travaux et frais effectivement engagés, les modalités de
          régularisation sont déterminées en fonction du devis et de l'état d'avancement de la mission.
        </p>
      </section>

      <section>
        <h2>Article 23 – Force majeure</h2>
        <p>
          Aucune partie ne pourra être tenue responsable d'un retard ou d'une inexécution résultant d'un événement
          constituant un cas de force majeure au sens du droit français.
        </p>
        <p>La partie concernée informe l'autre partie dans les meilleurs délais.</p>
      </section>

      <section>
        <h2>Article 24 – Références commerciales</h2>
        <p>
          Sauf accord de confidentialité ou opposition écrite du Client, MyHextech peut mentionner publiquement
          l'existence de la collaboration et présenter le projet dans son portfolio ou ses références commerciales.
        </p>
        <p>Cette présentation ne doit révéler aucune information confidentielle du Client.</p>
        <p>
          Toute publication détaillée d'informations confidentielles, de données internes ou de code privé nécessite
          l'autorisation du Client.
        </p>
      </section>

      <section>
        <h2>Article 25 – Indépendance des parties</h2>
        <p>MyHextech intervient en qualité de prestataire indépendant.</p>
        <p>Les présentes CGV ne créent aucun lien de subordination entre MyHextech et le Client.</p>
      </section>

      <section>
        <h2>Article 26 – Droit applicable</h2>
        <p>Les présentes CGV sont soumises au droit français.</p>
        <p>
          En cas de difficulté, les parties s'efforcent de rechercher une solution amiable avant toute procédure
          judiciaire.
        </p>
        <p>
          À défaut d'accord amiable, les juridictions territorialement et matériellement compétentes seront déterminées
          conformément aux règles de droit applicables.
        </p>
      </section>

      <section>
        <h2>Article 27 – Acceptation</h2>
        <p>La validation d'un devis faisant référence aux présentes CGV vaut acceptation des CGV par le Client.</p>
        <p>Les CGV applicables sont celles en vigueur à la date de validation de la commande.</p>
      </section>
    </LegalPageLayout>
  )
}
