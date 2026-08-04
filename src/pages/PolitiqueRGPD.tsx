import LegalLayout from "./LegalLayout"
import { company } from "../lib/company"

export default function PolitiqueRGPD() {
  return (
    <LegalLayout title="Politique RGPD" lastUpdated="1 août 2026">
      <section>
        <h2>Responsable du traitement</h2>
        <p>
          {company.legalName} — {company.address.full} —{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </section>

      <section>
        <h2>Base légale des traitements</h2>
        <ul>
          <li><strong>Exécution du contrat</strong> — prestations commandées par le client</li>
          <li><strong>Intérêt légitime</strong> — amélioration du site et prospection B2B ciblée</li>
          <li><strong>Consentement</strong> — prise de rendez-vous, newsletter ou cookies non essentiels le cas échéant</li>
          <li><strong>Obligation légale</strong> — conservation comptable et fiscale</li>
        </ul>
      </section>

      <section>
        <h2>Destinataires des données</h2>
        <p>
          Vos données peuvent être transmises à nos sous-traitants techniques (hébergement, email, prise de rendez-vous)
          strictement dans le cadre de l'exécution de nos services. Nous ne vendons pas vos données personnelles.
        </p>
      </section>

      <section>
        <h2>Transferts hors UE</h2>
        <p>
          Lorsque des outils impliquent un transfert hors de l'Union européenne, nous veillons à ce que des garanties
          appropriées soient mises en place (clauses contractuelles types, décision d'adéquation ou mesures équivalentes).
        </p>
      </section>

      <section>
        <h2>Durées de conservation</h2>
        <ul>
          <li>Prospects : 3 ans à compter du dernier contact</li>
          <li>Clients : durée de la relation contractuelle + délais légaux</li>
          <li>Données comptables : 10 ans</li>
        </ul>
      </section>

      <section>
        <h2>Exercer vos droits</h2>
        <p>
          Vous pouvez adresser toute demande à <a href={`mailto:${company.email}`}>{company.email}</a>. En cas de
          réclamation non résolue, vous pouvez saisir la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
        </p>
      </section>
    </LegalLayout>
  )
}
