import LegalLayout from "./LegalLayout"
import { company } from "../lib/company"

export default function CGV() {
  return (
    <LegalLayout title="Conditions Générales de Vente" lastUpdated="1 août 2026">
      <section>
        <h2>Objet</h2>
        <p>
          Les présentes Conditions Générales de Vente (CGV) régissent les prestations de conseil, d'audit, de
          conception et de déploiement d'agents IA proposées par {company.legalName} auprès de ses clients
          professionnels (PME, TPE et entreprises).
        </p>
      </section>

      <section>
        <h2>Prestations</h2>
        <p>
          Les services comprennent notamment l'audit IA, la conception d'agents sur mesure, l'intégration aux outils
          existants, la formation et le support. Le détail des prestations, délais et livrables est défini dans le
          devis ou bon de commande accepté par le client.
        </p>
      </section>

      <section>
        <h2>Tarifs et paiement</h2>
        <p>
          Les tarifs sont indiqués en euros hors taxes, sauf mention contraire. Un acompte peut être demandé à la
          commande. Le solde est exigible selon les échéances définies au devis. Toute facture impayée à l'échéance
          pourra entraîner la suspension des prestations.
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Sauf stipulation contraire au contrat, {company.name} conserve la propriété de ses méthodes, frameworks et
          composants génériques. Les livrables spécifiques au client lui sont cédés après paiement intégral, dans les
          conditions prévues au devis.
        </p>
      </section>

      <section>
        <h2>Responsabilité</h2>
        <p>
          {company.legalName} s'engage à exécuter ses prestations avec diligence et conformément aux règles de l'art.
          Sa responsabilité est limitée au montant des sommes effectivement perçues au titre du contrat concerné,
          sauf faute lourde ou dolosive.
        </p>
      </section>

      <section>
        <h2>Litiges</h2>
        <p>
          En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, les tribunaux de
          Paris seront seuls compétents. Contact : <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </section>
    </LegalLayout>
  )
}
