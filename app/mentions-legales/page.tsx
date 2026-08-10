import type { Metadata } from "next"

import { LegalPageLayout } from "@/components/legal-page-layout"

export const metadata: Metadata = {
  title: "Mentions légales | MyHextech",
  description: "Mentions légales du site MyHextech édité par Henrique MARTINS, entrepreneur individuel.",
}

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout
      title="Mentions légales"
      description="Informations relatives à l'éditeur, à l'hébergement et aux conditions d'utilisation du site MyHextech."
      documentLabel="Informations légales"
      currentPath="/mentions-legales"
    >
      <section>
        <h2>Éditeur du site</h2>
        <p>
          Le site <strong><a href="https://www.myhextech.com">www.myhextech.com</a></strong> est édité par :
        </p>
        <address>
          <p>
            <strong>Henrique MARTINS – Entrepreneur individuel (EI)</strong>
            <br />
            Nom commercial : <strong>MyHextech</strong>
          </p>
          <p>
            Activité principale : développement informatique de sites internet, logiciels et applications,
            développement web et mobile, intégration de solutions d'intelligence artificielle, développement 2D/3D
            et prestations numériques associées.
          </p>
          <p>
            <strong>Adresse :</strong>
            <br />
            2 B rue de Bonaventure
            <br />
            78810 Feucherolles
            <br />
            France
          </p>
          <p>
            <strong>SIREN :</strong> 939 227 781
            <br />
            <strong>SIRET :</strong> 939 227 781 00027
            <br />
            <strong>Code APE :</strong> 62.01Z – Programmation informatique
          </p>
          <p>
            <strong>Numéro de TVA intracommunautaire :</strong> FR01 939227781
          </p>
          <p>
            <strong>E-mail :</strong> <a href="mailto:henrique.mar@outlook.fr">henrique.mar@outlook.fr</a>
            <br />
            <strong>Téléphone :</strong> <a href="tel:+33622977298">06 22 97 72 98</a>
          </p>
        </address>
      </section>

      <section>
        <h2>Directeur de la publication</h2>
        <p>Le directeur de la publication est :</p>
        <p><strong>Henrique MARTINS</strong></p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>Le site est hébergé par :</p>
        <address>
          <p>
            <strong>Vercel Inc.</strong>
            <br />
            440 N Barranca Ave #4133
            <br />
            Covina, CA 91723
            <br />
            États-Unis
          </p>
          <p>Téléphone : <a href="tel:+15592887060">+1 559 288 7060</a></p>
        </address>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur le site MyHextech, notamment les textes, éléments graphiques, logos,
          illustrations, interfaces, présentations de projets, éléments de design et, sauf mention contraire, les
          créations présentées, est protégé par les dispositions applicables en matière de propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification, adaptation, diffusion ou exploitation de tout ou partie
          du site sans autorisation préalable est interdite, sauf dans les cas expressément autorisés par la loi.
        </p>
        <p>
          Les marques, logos, noms commerciaux, captures d'écran et autres éléments appartenant aux clients,
          partenaires ou éditeurs tiers demeurent la propriété de leurs titulaires respectifs.
        </p>
      </section>

      <section>
        <h2>Liens externes</h2>
        <p>Le site peut contenir des liens vers des sites internet ou services exploités par des tiers.</p>
        <p>
          MyHextech n'exerce aucun contrôle sur ces services et ne peut être tenu responsable de leur contenu, de leur
          disponibilité ou de leurs pratiques.
        </p>
      </section>

      <section>
        <h2>Responsabilité</h2>
        <p>
          Les informations publiées sur le site sont fournies à titre informatif et ont notamment pour objectif de
          présenter l'activité, les compétences et les réalisations de MyHextech.
        </p>
        <p>
          Malgré le soin apporté à leur publication, MyHextech ne garantit pas l'absence totale d'erreurs ou
          d'omissions.
        </p>
        <p>
          MyHextech ne saurait être tenu responsable d'un dommage résultant directement ou indirectement de
          l'utilisation du site ou de l'impossibilité d'y accéder.
        </p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>
          Les modalités relatives à la collecte et au traitement des données personnelles sont détaillées dans la{" "}
          <strong><a href="/politique-de-confidentialite">Politique de confidentialité</a></strong> accessible depuis
          le site.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Pour toute question concernant le site ou son contenu :</p>
        <address>
          <p>
            <strong>Henrique MARTINS – MyHextech</strong>
            <br />
            E-mail : <a href="mailto:henrique.mar@outlook.fr">henrique.mar@outlook.fr</a>
          </p>
        </address>
      </section>
    </LegalPageLayout>
  )
}
