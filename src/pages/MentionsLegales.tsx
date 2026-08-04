import LegalLayout from "./LegalLayout"
import { company } from "../lib/company"

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales" lastUpdated="1 août 2026">
      <section>
        <h2>Éditeur du site</h2>
        <p>
          Le site est édité par {company.legalName}, société par actions simplifiée dont le siège social est situé à{" "}
          {company.address.full}.
        </p>
        <ul>
          <li>Email : <a href={`mailto:${company.email}`}>{company.email}</a></li>
          <li>Directeur de la publication : Younes Mahdjoub</li>
        </ul>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site est protégé par le droit d&apos;auteur. Toute reproduction
          sans autorisation écrite de {company.name} est interdite.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Pour toute question : <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </section>
    </LegalLayout>
  )
}
