import LegalLayout from "./LegalLayout"
import { company } from "../lib/company"

export default function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité" lastUpdated="1 août 2026">
      <section>
        <h2>Introduction</h2>
        <p>
          {company.legalName} s'engage à protéger la vie privée des visiteurs et clients de son site. Cette politique
          décrit les données que nous collectons et la manière dont nous les utilisons.
        </p>
      </section>

      <section>
        <h2>Données collectées</h2>
        <p>Nous pouvons collecter les données suivantes :</p>
        <ul>
          <li>Identité et coordonnées (nom, email, téléphone, entreprise) via le formulaire de contact</li>
          <li>Données de navigation (pages visitées, durée de visite) via des outils d'analyse</li>
          <li>Informations relatives à la prise de rendez-vous via Calendly</li>
        </ul>
      </section>

      <section>
        <h2>Finalités du traitement</h2>
        <p>Vos données sont utilisées pour :</p>
        <ul>
          <li>Répondre à vos demandes et organiser des audits gratuits</li>
          <li>Établir des propositions commerciales personnalisées</li>
          <li>Améliorer nos services et l'expérience utilisateur du site</li>
          <li>Respecter nos obligations légales</li>
        </ul>
      </section>

      <section>
        <h2>Conservation et sécurité</h2>
        <p>
          Les données sont conservées pendant la durée nécessaire à la relation commerciale, puis archivées conformément
          aux obligations légales. Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos
          informations contre tout accès non autorisé.
        </p>
      </section>

      <section>
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation,
          d'opposition et de portabilité. Pour exercer vos droits, contactez{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>. Consultez également notre{" "}
          <a href="/politique-rgpd">Politique RGPD</a>.
        </p>
      </section>
    </LegalLayout>
  )
}
