/* Classement éditorial ajouté pour faciliter la recherche.
   Ces objectifs et durées normalisées ne figurent pas sur les cartes d'origine :
   ils peuvent être ajustés librement ici (fichier maintenu à la main). */

/* « mots » : synonymes pris en compte par la recherche plein texte. */
window.OBJECTIFS = [
  { id: 'accueillir', label: 'Accueillir & se rencontrer', court: 'Rencontre',   couleur: '#e0803a',
    mots: 'brise-glace icebreaker inclusion ouverture présentation prénoms faire connaissance check-in' },
  { id: 'energiser',  label: 'Énergiser & créer du lien',  court: 'Énergie',     couleur: '#d9534f',
    mots: 'énergiseur jeu ludique mouvement corps coopération cohésion pause' },
  { id: 'parole',     label: 'Réguler la parole & l’écoute', court: 'Parole',    couleur: '#8a5cc7',
    mots: 'écoute tour de parole débat discussion expression facilitation' },
  { id: 'explorer',   label: 'Explorer & analyser',        court: 'Analyse',     couleur: '#2f7fc1',
    mots: 'problème problématique diagnostic comprendre réflexion' },
  { id: 'idees',      label: 'Générer des idées',          court: 'Idées',       couleur: '#e3a917',
    mots: 'brainstorming créativité idéation innovation solutions' },
  { id: 'decider',    label: 'Décider & prioriser',        court: 'Décision',    couleur: '#1f9d74',
    mots: 'décision vote priorités choix consensus consentement gouvernance' },
  { id: 'evaluer',    label: 'Évaluer & faire le bilan',   court: 'Bilan',       couleur: '#c2508f',
    mots: 'rétrospective rétro feedback retour évaluation clôture' },
  { id: 'vision',     label: 'Se projeter & bâtir une vision', court: 'Vision',  couleur: '#3a9fb0',
    mots: 'projet stratégie futur objectifs raison d’être alignement' },
  { id: 'produire',   label: 'Produire & partager des savoirs', court: 'Savoirs', couleur: '#6b7a2f',
    mots: 'documentation écriture apprentissage transmission présentation formation' },
  { id: 'rythmer',    label: 'Rythmer & organiser la réunion', court: 'Rythme',  couleur: '#6c7489',
    mots: 'efficacité temps concentration format de réunion' },
  { id: 'fondamentaux', label: 'Ingrédients fondamentaux', court: 'Ingrédient', couleur: '#8b6b4a',
    mots: 'principe concevoir' }
];

window.CLASSEMENT = {
  '5-pourquoi':                    ['explorer'],
  'accelerateur-de-projet':        ['explorer', 'idees'],
  'analyse-swot':                  ['explorer', 'vision'],
  'arpentage':                     ['produire', 'explorer'],
  'baton-dhelium':                 ['energiser'],
  'baton-de-parole':               ['parole'],
  'bodystorming':                  ['idees', 'energiser'],
  'carte-mentale':                 ['explorer', 'idees'],
  'cercle-de-parole':              ['parole', 'accueillir'],
  'cercle-samoan':                 ['parole'],
  'chifoumi-collectif-pierre-feuille-ciseaux': ['energiser', 'accueillir'],
  'debat-mouvant':                 ['parole', 'explorer'],
  'decision-par-consentement':     ['decider'],
  'demande-de-silence':            ['parole', 'rythmer'],
  'diagramme-avec-les-pieds':      ['accueillir', 'energiser'],
  'discussion-ascenceur':          ['accueillir', 'explorer'],
  'discussion-kanak':              ['accueillir'],
  'documentation-croisee':         ['produire'],
  'elevator-pitch':                ['accueillir', 'produire'],
  'energiseur-un-a-neuf':          ['energiser'],
  'enquete-appreciative':          ['vision', 'evaluer'],
  'langage-silencieux':            ['parole'],
  'les-3c-conserver-cesser-creer': ['evaluer'],
  'les-animaux-de-la-ferme':       ['energiser', 'accueillir'],
  'mandala-holistique':            ['vision'],
  'marche-en-aveugle':             ['energiser'],
  'matrice-impact-effort':         ['decider'],
  'matrice-plus-delta':            ['evaluer'],
  'meteo-interieure':              ['accueillir', 'evaluer'],
  'methode-des-personas':          ['idees', 'explorer'],
  'methode-des-post-it':           ['idees', 'explorer'],
  'six-chapeaux-de-bono':          ['idees', 'explorer'],
  'methode-walt-disney':           ['idees', 'vision'],
  'mon-journal':                   ['accueillir'],
  'panorama-des-reussites':        ['vision', 'evaluer'],
  'parole-au-centre':              ['parole'],
  'photolangage':                  ['accueillir', 'explorer'],
  'pomodoro-synchrone':            ['rythmer', 'produire'],
  'presentation-croisee':          ['accueillir'],
  'presentations-eclairs':         ['produire', 'accueillir'],
  'respiration-collective':        ['energiser'],
  'retrospective-a-4-questions':   ['evaluer'],
  'reunion-debout':                ['rythmer'],
  'reunion-en-marchant':           ['rythmer', 'energiser'],
  'souvenir-du-futur':             ['vision'],
  'sprint-ecriture':               ['produire'],
  'tables-de-decouverte':          ['produire', 'accueillir'],
  'tous-dans-le-meme-bateau':      ['explorer', 'evaluer'],
  'tri-par-affinites':             ['idees', 'explorer'],
  'vote-a-cinq-doigts':            ['decider', 'evaluer'],
  'vote-a-points':                 ['decider'],
  'world-cafe':                    ['idees', 'explorer'],
  'sens':                          ['fondamentaux'],
  'intention':                     ['fondamentaux'],
  'recolte':                       ['fondamentaux'],
  'boite-temporelle-timebox':      ['fondamentaux'],
  'roles':                         ['fondamentaux']
};

/* Durées en minutes [min, max] quand le texte de la carte n'est pas directement interprétable. */
window.DUREES_MANUELLES = {
  'meteo-interieure':     [5, 15],        // « courte »
  'elevator-pitch':       [1, 15],        // « 45 sec – 3 min par pitch »
  'enquete-appreciative': [480, Infinity],// « 2 demi-journées ou + »
  'mandala-holistique':   [120, 960]      // « 2h à 2 jours »
};

/* Autres noms sous lesquels une carte est citée dans les textes (en majuscules sur les cartes). */
window.ALIAS = {
  'boite-temporelle-timebox': ['boite temporelle', 'boite de temps', 'boite e temps', 'timebox'],
  'six-chapeaux-de-bono':     ['six chapeaux', 'six chapeaux de bono', '6 chapeaux'],
  'tri-par-affinites':        ['diagramme des affinites', 'methode kj'],
  'retrospective-a-4-questions': ['retrospective'],
  'presentations-eclairs':    ['lightning talk', 'presentation eclair'],
  'chifoumi-collectif-pierre-feuille-ciseaux': ['chifoumi'],
  'methode-walt-disney':      ['strategie walt disney', 'walt disney'],
  'decision-par-consentement': ['consentement'],
  'discussion-ascenceur':     ['discussion d ascenseur'],
  'recolte':                  ['recolte'],
  'roles':                    ['role']
};
