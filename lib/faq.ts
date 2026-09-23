// Source unique de la FAQ : affichée sur la page (components/FAQ.tsx) et publiée pour Google
// (données structurées FAQPage dans app/page.tsx). Réponses relues au regard de l'art. 238 bis CGI.

export type FaqItem = { tag: "Club" | "Entreprise" | "Tous"; q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    tag: "Club",
    q: "Combien ça coûte pour le club ?",
    a: "Rien avant la signature. Trofiz n'est rémunéré par le club qu'une fois un partenariat signé, selon un montant convenu avec vous à l'avance et indiqué au partenaire. Si aucun partenaire ne signe, vous ne payez rien.",
  },
  {
    tag: "Club",
    q: "Notre club peut-il émettre des reçus fiscaux ?",
    a: "Oui, s'il est d'intérêt général : gestion désintéressée, activité non lucrative, ouverte à tous. C'est le cas de la plupart des clubs amateurs. Nous vérifions ce point avec vous avant toute démarche, et pouvons vous aider à obtenir une confirmation écrite de l'administration (rescrit fiscal).",
  },
  {
    tag: "Club",
    q: "On n'a pas de service communication, ça marche quand même ?",
    a: "Oui. Nous préparons la présentation du club, proposons des contreparties adaptées et rédigeons les contrats. Vous validez et vous signez.",
  },
  {
    tag: "Entreprise",
    q: "Comment fonctionne la réduction d'impôt ?",
    a: "Elle concerne le mécénat, c'est-à-dire un don au club. Le club vous remet un reçu fiscal et vous déduisez 60 % du montant du don de votre impôt, dans la limite de 20 000 € ou de 0,5 % de votre chiffre d'affaires (le plus élevé des deux). Exemple : un don de 5 000 € vous revient à 2 000 €. Référence : article 238 bis du Code général des impôts.",
  },
  {
    tag: "Entreprise",
    q: "Mon logo sur les maillots donne-t-il droit aux 60 % ?",
    a: "Non. Un logo sur les maillots, un panneau ou une publication promotionnelle est une prestation publicitaire : c'est un partenariat, facturé par le club et déductible comme une dépense de communication. Beaucoup d'entreprises combinent les deux : un don pour la réduction d'impôt et un partenariat pour la visibilité, avec deux contrats séparés.",
  },
  {
    tag: "Entreprise",
    q: "On est une TPE, c'est fait pour nous ?",
    a: "Oui. Les clubs amateurs accueillent volontiers des partenaires locaux avec des budgets accessibles, à partir d'environ 1 000 €. Nous calculons avec vous le coût réel selon la formule choisie.",
  },
  {
    tag: "Tous",
    q: "Où va l'argent ?",
    a: "Directement au club, par virement de l'entreprise. Il ne transite jamais par Trofiz.",
  },
  {
    tag: "Tous",
    q: "Où intervenez-vous ?",
    a: "En Île-de-France en priorité, et partout en France à distance.",
  },
];
