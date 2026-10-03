/* Synthèses des ressources citées dans la section « La méthode en détail » de chaque carte.
   Résumés rédigés pour cette application à partir des liens donnés par les cartes (fichier maintenu à la main) ;
   ils ne figurent pas sur les cartes d'origine. Clé : slug de la carte. Valeur : fragment HTML
   (<p>, <h4>, <ul>, <ol>, <li>, <strong>, <em>) affiché, replié par défaut, sous la liste de liens. */

window.SYNTHESES = {
  '5-pourquoi': `
<p>Les « cinq pourquoi » viennent de l’industrie japonaise&nbsp;: la méthode est attribuée à Sakichi Toyoda, fondateur du groupe Toyota, puis formalisée par Taiichi Ohno comme pilier du système de production Toyota et de l’amélioration continue (kaizen, lean). L’article Wikipédia en donne l’origine, l’exemple classique et les critiques&nbsp;; la fiche Compass du centre de formation de l’OIT (ITCILO) décrit la manière de la dérouler en atelier ou en formation.</p>
<h4>Origine et principe</h4>
<p>Pour Ohno, répéter « pourquoi&nbsp;? » cinq fois est « la base de l’approche scientifique de Toyota »&nbsp;: chaque réponse devient l’objet de la question suivante jusqu’à atteindre la cause racine, c’est-à-dire un dysfonctionnement de processus sur lequel on peut agir, et non un simple symptôme ni une personne fautive. Exemple classique repris sur Wikipédia&nbsp;: la voiture ne démarre pas → la batterie est à plat → l’alternateur ne charge plus → la courroie est cassée → elle a dépassé sa durée de vie → le véhicule n’a pas été entretenu selon le plan prévu. La cause racine est l’absence de suivi de l’entretien, pas la batterie.</p>
<h4>Déroulé en atelier (fiche Compass ITCILO)</h4>
<ol>
<li>Formuler le problème de départ par écrit, de façon factuelle et précise, visible de tout le monde.</li>
<li>Poser le premier « pourquoi&nbsp;? » et noter la réponse sous l’énoncé, en s’appuyant sur des faits observés plutôt que sur des hypothèses.</li>
<li>Enchaîner sur la réponse obtenue&nbsp;; si plusieurs causes apparaissent, ouvrir une branche par cause pour former un arbre plutôt qu’une chaîne unique.</li>
<li>S’arrêter quand la réponse désigne un processus ou une pratique modifiable&nbsp;; cinq est un ordre de grandeur, trois ou sept itérations sont possibles.</li>
<li>En formation, faire travailler des sous-groupes de 4 à 6 personnes sur le même problème (20 à 30 minutes), puis comparer les chaînes causales et convenir des actions correctives.</li>
</ol>
<h4>Rôle de l’animateur·rice</h4>
<ul>
<li>Refuser les réponses-écrans (« manque de temps », « manque de moyens ») et demander ce qui concrètement s’est produit.</li>
<li>Chercher des causes de processus, jamais des coupables, faute de quoi le groupe se referme.</li>
</ul>
<h4>Limites</h4>
<p>Wikipédia relève que la méthode dépend fortement des connaissances des personnes présentes&nbsp;: deux groupes peuvent aboutir à des causes différentes, le raisonnement s’arrête parfois trop tôt sur un symptôme, et une chaîne linéaire masque les causes multiples. Elle gagne à être complétée par un diagramme d’Ishikawa et par une vérification sur le terrain avant d’engager des solutions.</p>
`,

  'accelerateur-de-projet': `
<p>La fiche Multibao, compilée lors des rencontres MousTIC, rattache l’accélérateur de projet à l’entraînement mental de Joffre Dumazedier, né pendant la Seconde Guerre mondiale et diffusé par le mouvement d’éducation populaire Peuple et Culture, ainsi qu’au groupe de codéveloppement professionnel décrit par Payette et Champagne (Presses de l’Université du Québec, 1997). Elle détaille les rôles, les consignes de chaque étape et les conditions de réussite.</p>
<h4>Trois rôles à distribuer</h4>
<ul>
<li><strong>L’exposant·e</strong>&nbsp;: la personne qui soumet sa situation-problème. Il lui est conseillé de préparer sa question en amont, à partir d’une difficulté réellement vécue dans sa pratique.</li>
<li><strong>L’animateur·rice, gardien·ne de la méthode</strong>&nbsp;: présente rapidement la démarche, rappelle les règles et veille au respect des temps.</li>
<li><strong>Le ou la secrétaire</strong>&nbsp;: prend les notes, fonction qui peut être partagée sur un pad.</li>
</ul>
<h4>Consignes étape par étape</h4>
<ol>
<li><strong>Exposé</strong>&nbsp;: l’exposant·e décrit la situation, son contexte, puis la façon dont elle ou il définit le problème. Le groupe écoute sans intervenir.</li>
<li><strong>Clarification</strong>&nbsp;: seules des questions d’information factuelle sont admises (contexte, acteurs, chronologie). Pas de conseils déguisés en questions.</li>
<li><strong>Contrat</strong>&nbsp;: en une minute, l’exposant·e formule ce qu’il ou elle attend&nbsp;: « je voudrais que le groupe m’aide à… ».</li>
<li><strong>Réactions et suggestions</strong>&nbsp;: les pairs donnent impressions, interprétations, autres façons de voir, conseils pratiques. L’exposant·e s’engage à ne pas répondre et note ce qui lui paraît utile.</li>
<li><strong>Synthèse et plan d’action</strong>&nbsp;: temps d’écriture silencieux. L’exposant·e rédige un mini plan d’action, les autres notent les idées transversales utiles pour leurs propres projets. Puis l’exposant·e présente ses suites&nbsp;; le groupe ne discute pas ses choix, il se comporte en témoin et exprime son soutien.</li>
<li><strong>Évaluation</strong>&nbsp;: retour sur le vécu de l’exposant·e, évaluation de la façon de procéder, correctifs pour la prochaine séance, quelques minutes de notes individuelles.</li>
</ol>
<h4>Conseils et vigilance</h4>
<ul>
<li>Avant l’étape des réactions, la fiche suggère de rappeler comment aider utilement&nbsp;: remettre de la complexité, penser en termes de processus et de situation évolutive, sortir du binaire (« et ceci et cela »), revenir à la genèse de la situation, repérer les non-dits et les contradictions.</li>
<li>Interventions courtes, esprit bienveillant, pas de jugement&nbsp;: l’exercice exige une vraie attention aux autres.</li>
<li>La méthode est très efficace quand la situation et la demande sont clairement posées et que le groupe est hétérogène&nbsp;; une question floue au départ fait perdre l’essentiel du temps de réactions.</li>
</ul>
`,

  'analyse-swot': `
<p>SWOT est l’acronyme anglais de <em>Strengths, Weaknesses, Opportunities, Threats</em>&nbsp;; on parle aussi en français de matrice FFOM, MOFF ou AFOM. L’article Wikipédia retrace son origine, précise la logique interne/externe des quatre cases, décrit ses usages et rapporte les critiques qui lui sont adressées.</p>
<h4>Origine</h4>
<p>La paternité est généralement attribuée à Albert Humphrey, consultant au Stanford Research Institute, qui a mené dans les années 1960-1970 une étude sur la planification des grandes entreprises américaines (le modèle s’appelait d’abord SOFT&nbsp;: <em>Satisfactory, Opportunity, Fault, Threat</em>). Le même raisonnement se retrouve dans le modèle LCAG des professeurs de Harvard (1965), qui confronte les ressources de l’organisation aux conditions de son environnement. L’outil s’est ensuite répandu dans la planification stratégique, le marketing, les projets de territoire et l’évaluation de programmes publics, y compris européens.</p>
<h4>Lire la matrice</h4>
<ul>
<li>Les <strong>forces</strong> et <strong>faiblesses</strong> sont <em>internes</em>&nbsp;: compétences, ressources, organisation, image, finances. Test utile&nbsp;: « avons-nous prise dessus&nbsp;? ».</li>
<li>Les <strong>opportunités</strong> et <strong>menaces</strong> sont <em>externes</em>&nbsp;: marché, réglementation, technologies, concurrence, tendances sociales. Elles s’imposent à l’organisation.</li>
<li>Exemples de questions&nbsp;: « que savons-nous faire mieux que d’autres&nbsp;? », « qu’est-ce qui nous manque pour agir&nbsp;? », « quel changement du contexte pourrions-nous saisir&nbsp;? », « qu’est-ce qui pourrait nous empêcher d’atteindre notre objectif&nbsp;? ».</li>
</ul>
<h4>Conseils d’animation</h4>
<ol>
<li>Fixer le périmètre (une activité, pas toute l’organisation) et l’horizon de temps avant de commencer.</li>
<li>Limiter chaque case à cinq ou sept éléments et les classer par importance et, pour les cases externes, par probabilité.</li>
<li>Prolonger l’exercice en croisant les cases&nbsp;: quelles forces mobiliser pour saisir une opportunité, quelles faiblesses corriger face à une menace. C’est ce croisement qui transforme la liste en options stratégiques.</li>
<li>Dater la matrice et prévoir sa mise à jour.</li>
</ol>
<h4>Critiques et limites</h4>
<p>Wikipédia souligne que la matrice simplifie beaucoup&nbsp;: elle produit des listes souvent non hiérarchisées, subjectives, où interne et externe sont parfois confondus, et elle ne dit pas quoi faire ensuite. Une étude de Hill et Westbrook (1997) constatait qu’aucune des entreprises observées n’avait réellement utilisé les résultats de son SWOT. La méthode vaut donc surtout comme support de discussion collective, à condition d’être suivie d’un choix et d’un plan d’action.</p>
`,

  'baton-de-parole': `
<p>Wikipédia situe le bâton de parole dans les conseils de plusieurs nations autochtones d’Amérique du Nord, où un bâton orné de plumes, de perles ou de cuir circulait entre les orateurs&nbsp;; il est aujourd’hui repris dans l’éducation, les groupes de parole et l’animation de réunions. La fiche de Lilian Ricaud en décrit le déroulé concret et explique en quoi l’objet change la qualité de l’écoute.</p>
<h4>Déroulé proposé par la fiche de Lilian Ricaud</h4>
<ol>
<li>Installer un espace de conversation agréable, les participant·es assis·es en cercle, sans table au milieu.</li>
<li>Désigner l’objet et énoncer la règle&nbsp;: seule la personne qui le tient parle, les autres lui accordent leur attention.</li>
<li>Quand la personne estime n’avoir plus rien à ajouter, elle passe l’objet à sa voisine ou son voisin.</li>
<li>Qui reçoit l’objet sans avoir rien à dire le transmet simplement, sans justification&nbsp;: le silence est une réponse acceptable.</li>
<li>Poursuivre les tours jusqu’à épuisement du sujet ou du temps prévu.</li>
</ol>
<h4>Pourquoi ça marche</h4>
<ul>
<li>La parole n’est plus confisquée par les plus extraverti·es ou les plus à l’aise à l’oral&nbsp;: l’objet passe également entre toutes les mains.</li>
<li>Personne ne craint d’être coupé&nbsp;: on peut prendre le temps de réfléchir avant de parler.</li>
<li>Le temps que l’objet revienne, chacun·e a mûri son propos et s’exprime par rapport à l’ensemble de ce qui a été dit, plutôt que de réagir impulsivement à la dernière intervention.</li>
</ul>
<h4>Variantes</h4>
<ul>
<li><strong>Tour de cercle</strong>&nbsp;: l’objet suit l’ordre des places, utile pour un tour d’ouverture ou de clôture où tout le monde s’exprime.</li>
<li><strong>Objet au centre</strong>&nbsp;: après chaque intervention, l’objet est reposé au milieu&nbsp;; qui souhaite parler va le chercher. Le court silence entre deux prises apaise les échanges.</li>
<li><strong>Appel</strong>&nbsp;: la personne qui a fini choisit à qui transmettre, ou le passe à qui lève la main.</li>
</ul>
<h4>Conseils et vigilance</h4>
<ul>
<li>L’animateur·rice se soumet à la même règle&nbsp;: elle ou il ne reprend la parole qu’en tenant l’objet.</li>
<li>Choisir un objet visible, facile à passer et qui ne roule pas&nbsp;; en grand groupe, annoncer une durée indicative par prise de parole.</li>
<li>La forme ralentit l’échange et bride le rebond spontané&nbsp;: elle convient aux sujets sensibles ou aux groupes où la parole est déséquilibrée, moins à un brainstorming rapide. À distance, un geste convenu ou un message dans le chat peut remplacer l’objet.</li>
</ul>
`,

  'bodystorming': `
<p>Le terme <em>bodystorming</em> vient du design d’interaction des années 1990 (Interval Research, puis les travaux d’Antti Oulasvirta et ses collègues à Helsinki) et a été popularisé par le livre <em>Gamestorming</em> de Gray, Brown et Macanufo. La fiche de Lilian Ricaud et la page Gamestorming décrivent le même principe&nbsp;: imaginer ce qui se passerait si le produit ou le service existait déjà et le jouer avec son corps, idéalement sur le lieu réel d’usage, plutôt que d’en discuter autour d’une table.</p>
<h4>Déroulé détaillé</h4>
<ol>
<li><strong>Observation sur site</strong>&nbsp;: sortir du lieu de travail habituel et se rendre là où le service sera utilisé, pour percevoir l’environnement par les sens et non à travers des rapports d’analyse. Prendre des notes, des photos.</li>
<li><strong>Distribution des rôles</strong>&nbsp;: identifier les acteurs de la situation et les attribuer. La fiche Multibao insiste sur le fait que les rôles peuvent être des personnes (client·e, usager·ère), des organisations, ou même des objets et des systèmes (« qui veut jouer le rôle d’Internet&nbsp;? »).</li>
<li><strong>Mise en scène</strong>&nbsp;: mimer l’usage du produit, improviser des prototypes avec ce qui est à portée de main (cartons, chaises, feuilles), utiliser l’environnement et rebondir sur les interactions des autres.</li>
<li><strong>Itération en direct</strong>&nbsp;: pendant la scène, les participant·es posent des questions, suggèrent une modification et rejouent immédiatement la variante.</li>
<li><strong>Réflexion</strong>&nbsp;: réexaminer ensemble ce qui s’est passé, identifier les pépites, faire un rapport d’étonnement. Si la scène a été filmée, la revoir pour discuter des moments clés.</li>
</ol>
<h4>Usages décrits dans les sources</h4>
<ul>
<li>Chez Gamestorming, le jeu sert à sortir les équipes de la salle de réunion et à tester rapidement un parcours d’usage avant tout prototype coûteux&nbsp;; il se joue à partir de 5 personnes, en 30 minutes à une demi-journée selon qu’on se déplace ou non sur site.</li>
<li>En architecture, Christopher Alexander faisait marcher les futurs usagers sur le terrain de construction, bâtiments figurés par des drapeaux ou des bambous marquant limites et entrées, pour tester différents scénarios d’implantation.</li>
</ul>
<h4>Conseils et limites</h4>
<ul>
<li>Si le lieu réel est inaccessible, le reconstituer sommairement avec du mobilier et des marquages au sol.</li>
<li>Les critiques rappelées par la fiche Multibao soulignent que ce n’est pas une méthode centrée utilisateur à part entière, car elle est souvent pratiquée par des concepteurs sans usagers&nbsp;: inviter de vrais usagers ou confronter ensuite les scènes jouées à leurs retours.</li>
</ul>
`,

  'carte-mentale': `
<p>La carte mentale (ou carte heuristique, <em>mind map</em>) a été formalisée dans les années 1970 par le psychologue britannique Tony Buzan, qui s’appuyait sur le fonctionnement associatif de la mémoire. La page du wiki Cocotier rappelle les principes de construction de Buzan, montre comment la carte sert un groupe et recense les logiciels libres qui permettent de la réaliser et de la partager.</p>
<h4>Principes de construction selon Buzan</h4>
<ul>
<li>Partir d’une image ou d’un mot central, en couleur, au milieu d’une feuille en format paysage.</li>
<li>Tracer des branches courbes et épaisses depuis le centre, qui s’affinent vers la périphérie&nbsp;; la hiérarchie se lit du centre vers l’extérieur, en tournant dans le sens des aiguilles d’une montre.</li>
<li>Un seul mot-clé par branche, écrit sur la branche elle-même, plutôt que des phrases.</li>
<li>Une couleur par grande branche, des pictogrammes, des flèches entre branches éloignées pour montrer les liens transversaux.</li>
</ul>
<h4>Usages collectifs décrits par le wiki</h4>
<ul>
<li>Prise de notes en direct d’une réunion ou d’un débat, projetée au mur, que le groupe corrige au fil de l’eau.</li>
<li>Brainstorming&nbsp;: chaque idée devient une branche, le regroupement se fait en déplaçant les nœuds.</li>
<li>Préparation d’un événement, plan d’un document à rédiger ensemble, synthèse d’une formation.</li>
</ul>
<h4>Déroulé pour une carte à plusieurs</h4>
<ol>
<li>Formuler la question centrale avec le groupe et la vérifier&nbsp;: une carte répond à une seule question.</li>
<li>Collecter les idées sur post-it ou sur un pad sans les classer.</li>
<li>Regrouper les post-it en familles&nbsp;: ce sont les branches principales. Les nommer d’un mot.</li>
<li>Dessiner la carte (une personne au feutre ou au clavier, le groupe dicte), puis la relire collectivement et déplacer ce qui est mal placé.</li>
<li>Photographier ou exporter la carte et la partager avec les absent·es.</li>
</ol>
<h4>Outils libres</h4>
<p>Le wiki cite notamment <strong>Freeplane</strong> (héritier de FreeMind, logiciel de bureau très complet, export en image, PDF ou plan de texte) et <strong>Framindmap</strong>, service en ligne de Framasoft fondé sur Wisemapping, qui permet de dessiner une carte à plusieurs sans installation et de l’intégrer dans une page web. Le feutre reste préférable en atelier, le numérique pour la mise à jour et la diffusion.</p>
<h4>Vigilance</h4>
<ul>
<li>Une carte reflète la logique de celui ou celle qui la dessine&nbsp;: en collectif, vérifier que les intitulés de branches sont compris de tout le monde.</li>
<li>La structure est arborescente&nbsp;: pour représenter des relations croisées entre notions, la carte conceptuelle est plus adaptée.</li>
</ul>
`,

  'cercle-de-parole': `
<p>Le document de référence est la version française des <em>Circle Guidelines</em> de Christina Baldwin et Ann Linnea, fondatrices de The Circle Way (PeerSpirit), qui ont codifié depuis les années 1990 une pratique du cercle inspirée des conseils traditionnels. Il décrit les composantes qui font passer un groupe de la simple réunion en rond à un cercle structuré&nbsp;: intention, centre, accords, rôles tournants et formes de parole.</p>
<h4>Composantes du cercle</h4>
<ul>
<li><strong>L’intention</strong>&nbsp;: la raison d’être de la rencontre, formulée dans l’invitation et rappelée à l’ouverture. C’est elle, et non l’animateur·rice, qui donne la direction.</li>
<li><strong>La pièce centrale</strong>&nbsp;: un objet, une bougie, des fleurs ou un symbole posés au milieu, qui matérialisent l’intention et vers lesquels les regards convergent lorsque la tension monte.</li>
<li><strong>Les accords</strong>&nbsp;: ce qui se dit dans le cercle y reste&nbsp;; on écoute avec curiosité et sans jugement&nbsp;; on demande ce dont on a besoin et on offre ce qu’on peut&nbsp;; chacun·e peut demander une pause.</li>
<li><strong>Les trois pratiques</strong>&nbsp;: parler avec intention (dire ce qui compte pour le sujet, maintenant), écouter avec attention (soutenir la personne qui parle), prendre soin du bien-être du groupe (rester conscient·e de l’effet de sa contribution).</li>
</ul>
<h4>Rôles tournants</h4>
<ul>
<li><strong>L’hôte</strong> prépare l’espace, ouvre et clôt la rencontre, relance la question centrale.</li>
<li><strong>Le ou la gardien·ne</strong> tient la cloche (ou tout objet sonore)&nbsp;: elle ou il peut suspendre les échanges pour un temps de silence quand le rythme s’emballe, puis sonner à nouveau pour reprendre. Tout membre peut lui demander une pause.</li>
<li><strong>Le ou la scribe</strong> garde une trace des décisions et des phrases marquantes.</li>
</ul>
<h4>Déroulé type</h4>
<ol>
<li>Ouverture par un signal (cloche, silence, lecture courte) qui marque le passage dans l’espace du cercle.</li>
<li>Rappel de l’intention et des accords, désignation de l’hôte, du ou de la gardien·ne et du ou de la scribe.</li>
<li><strong>Check-in</strong>&nbsp;: tour de cercle où chaque personne dit brièvement avec quoi elle arrive.</li>
<li>Exploration du sujet selon l’une des trois formes de parole&nbsp;: le <em>bâton de parole</em> qui circule, la <em>conversation</em> libre où l’on se répond, ou la <em>réaction</em> spontanée (« popcorn ») où chacun·e intervient quand une idée surgit.</li>
<li><strong>Check-out</strong>&nbsp;: tour de clôture (ce que j’emporte, un mot, un engagement), puis signal de fermeture.</li>
</ol>
<h4>Conseils et vigilance</h4>
<ul>
<li>La forme peut dérouter des participant·es habitué·es aux réunions classiques&nbsp;: expliquer brièvement le sens de chaque composante plutôt que de l’imposer.</li>
</ul>
`,

  'cercle-samoan': `
<p>Le cercle samoan est connu sous plusieurs noms&nbsp;: <em>fishbowl</em>, bocal à poissons, cercle excentrique ou aquarium. La fiche yaplusk et la fiche Multibao (compilée à partir de KStoolkit, de Wikipédia et du Centre des pratiques de la coopération) le décrivent comme un outil d’animation de grands groupes, tandis que la fiche « aquarium » de Canopé, tirée des <em>52 méthodes pratiques pour enseigner</em>, en fait un exercice d’observation et de retour sur les comportements de débat.</p>
<h4>Cadrage et préparation (fiche Multibao)</h4>
<ul>
<li>Cercle central de 3 à 8 personnes, public extérieur de taille libre&nbsp;; prévoir au minimum une heure, préparation rapide, coût faible.</li>
<li>Vérifier que la technique répond aux objectifs de l’événement, obtenir l’accord des organisateurs, informer à l’avance les personnes pressenties pour le centre de leur rôle.</li>
<li>Aménager l’espace&nbsp;: cercle intérieur éventuellement surélevé pour être vu, anneaux concentriques de chaises ou tables rondes autour, allées dégagées pour entrer et sortir facilement.</li>
<li>Quand les personnes au centre sont des décideurs ou des élu·es, le format rend visible leur raisonnement et renforce la confiance sur des sujets complexes.</li>
</ul>
<h4>Déroulé d’animation (fiche yaplusk)</h4>
<ol>
<li>Installer les chaises et expliquer la règle en une minute, en insistant sur la chaise vide comme seule porte d’entrée.</li>
<li>Poser une question d’ouverture courte et ouverte, puis inviter les premiers volontaires ou les personnes choisies à s’asseoir.</li>
<li>L’animateur·rice reste hors du cercle&nbsp;: elle ou il relance si la conversation s’essouffle, rappelle la règle si le public parle, et peut rejoindre la chaise vide pour poser une question.</li>
<li>Annoncer la fin dix minutes avant, puis clore par une synthèse ou un tour de ressentis.</li>
</ol>
<h4>Variantes décrites dans les sources</h4>
<ul>
<li><strong>Deux chaises</strong> (Multibao)&nbsp;: conversation à deux voix&nbsp;; qui veut entrer tape sur l’épaule de la personne qu’il souhaite remplacer, à un moment où elle ne parle pas.</li>
<li><strong>Cercle fermé par rotation</strong>&nbsp;: un premier groupe parle un temps donné, puis cède entièrement la place à un nouveau groupe, jusqu’à ce qu’une bonne partie du public soit passée au centre.</li>
<li><strong>Aquarium pédagogique</strong> (Canopé)&nbsp;: un groupe d’élèves débat au centre sur une question controversée, les autres observent avec une grille (qui argumente, qui coupe la parole, qui reformule, qui s’appuie sur des faits) et restituent à la fin leurs observations. L’objectif est d’entraîner aux comportements d’un débat argumenté et de développer l’esprit critique, plus que de traiter le sujet.</li>
</ul>
<h4>Points de vigilance</h4>
<ul>
<li>Le format reste praticable en amphithéâtre ou sur scène, mais en dessous de 50 personnes les participant·es apprécient nettement d’être au même niveau que le cercle intérieur.</li>
<li>La discussion se structure d’elle-même une fois lancée, mais elle gagne à un·e modérateur·rice pour la clôture et la synthèse.</li>
<li>Le cercle samoan s’insère le plus souvent dans un temps plus large (plénière, atelier) qu’il ouvre ou qu’il conclut.</li>
</ul>
`,

  'chifoumi-collectif-pierre-feuille-ciseaux': `
<p>L’article Wikipédia consacré au pierre-papier-ciseaux retrace l’histoire d’un jeu de mains vieux de deux millénaires et en décrit les règles, les variantes et l’usage en tournoi. Ces éléments éclairent l’énergiseur de la carte, qui transforme le duel en tournoi à élimination avec supporters.</p>
<h4>Origine</h4>
<p>Le jeu est attesté en Chine sous la dynastie Han (<em>shoushiling</em>), puis au Japon où il prend la forme du <em>jan-ken</em>, issu d’une famille de jeux de mains à trois gestes qui se dominent en boucle (par exemple serpent, grenouille et limace). Il arrive en Europe au début du XXe siècle. Le mot « chifoumi » vient du décompte japonais <em>hi, fu, mi</em> (un, deux, trois) que l’on scande avant de montrer son geste.</p>
<h4>Règles et gestes</h4>
<ul>
<li>Pierre (poing fermé) casse les ciseaux, ciseaux (index et majeur tendus) coupent le papier, papier (main à plat) enveloppe la pierre. Deux gestes identiques donnent une manche nulle, à rejouer.</li>
<li>Les deux joueurs balancent le poing en rythme sur trois temps et dévoilent leur geste simultanément au troisième. Le jeu sert traditionnellement à départager deux personnes, comme un pile ou face.</li>
<li>Variantes décrites sur Wikipédia&nbsp;: le puits (qui engloutit pierre et ciseaux mais se fait couvrir par le papier), la version à cinq gestes « pierre-papier-ciseaux-lézard-Spock » popularisée par une série télévisée, et des extensions à sept ou vingt-cinq gestes.</li>
</ul>
<h4>Un jeu de tournoi</h4>
<p>Des championnats du monde ont été organisés à Toronto dans les années 2000, et l’article rapporte qu’en 2005 une maison de ventes aux enchères a été choisie par une entreprise japonaise au terme d’une partie de chifoumi. La psychologie des joueurs y est documentée&nbsp;: les débutants ouvrent souvent avec la pierre, et une personne qui vient de perdre a tendance à changer de geste.</p>
<h4>Conseils pour la version collective</h4>
<ol>
<li>Faire mimer les trois gestes par tout le monde et jouer une manche d’essai en binôme pour caler le rythme à trois temps.</li>
<li>Rappeler que le ou la perdant·e rejoint l’équipe du vainqueur et crie son prénom&nbsp;: la cohorte des supporters grossit à chaque tour, ce qui crée l’énergie recherchée.</li>
<li>Commenter la finale comme un·e speaker, en faisant venir les deux finalistes au centre de la salle.</li>
</ol>
<ul>
<li>Durée&nbsp;: 5 à 10 minutes pour 20 à 200 personnes, sans matériel, dans un espace dégagé.</li>
<li>Le niveau sonore monte vite&nbsp;: prévenir les voisins et les personnes sensibles au bruit, qui peuvent rester en retrait et observer.</li>
</ul>
`,

  'debat-mouvant': `
<p>Le débat mouvant est né dans les milieux de l’éducation populaire et de l’éducation à l’environnement, où il a été popularisé notamment par Franck Lepage et la Scop Le Pavé. La fiche Multibao compile des retours d’expérience (Outils-Réseaux, Supagro Florac, Centre des pratiques de la coopération), le scénario d’Animacoop donne une trame concrète sur les communs, et la vidéo de Franck Lepage montre la méthode en action.</p>
<h4>Déroulé pas à pas selon la fiche Multibao</h4>
<ol>
<li>L’animateur·rice raconte une histoire volontairement polémique, dans laquelle les participant·es peuvent se projeter, et s’arrête à chaque moment clé pour lancer une affirmation.</li>
<li>Les participant·es se placent physiquement&nbsp;: les «&nbsp;d’accord&nbsp;» d’un côté de la salle, les «&nbsp;pas d’accord&nbsp;» de l’autre, zones marquées par des affiches. Personne n’a le droit de rester au milieu&nbsp;: se déplacer réellement oblige à choisir un camp et des arguments.</li>
<li>L’animateur·rice demande qui veut expliquer son positionnement, en commençant par les personnes les plus fortement positionnées.</li>
<li>Les arguments s’échangent en ping-pong&nbsp;: un argument d’un camp, puis un argument de l’autre. Quiconque juge valable un argument adverse peut changer de camp à tout moment.</li>
<li>Quand l’animateur·rice le décide, le débat est clos et l’histoire reprend jusqu’à l’affirmation polémique suivante.</li>
</ol>
<p>Compter de 8 à 50 personnes, de 1&nbsp;h à 2&nbsp;h pour une séance complète, une salle avec de l’espace et aucun matériel autre que les affiches. Règle à rappeler&nbsp;: personne n’est obligé de prendre la parole, mais tout le monde doit choisir un camp.</p>
<h4>Ce que montre Franck Lepage</h4>
<p>Dans la vidéo, l’animateur lance des affirmations volontairement clivantes, presque provocatrices, et insiste sur deux principes&nbsp;: on se place d’abord «&nbsp;avec les pieds&nbsp;» avant de chercher ses arguments, et le changement de camp est encouragé puisqu’il manifeste qu’un argument a fait mouche. L’animateur·rice ne donne jamais son avis&nbsp;: il ou elle distribue la parole, reformule et relance.</p>
<h4>Exemple de scénario&nbsp;: les communs (Animacoop)</h4>
<p>Le scénario de Fabienne Morel pour Animacoop (30 à 40 minutes) déroule une histoire en six temps&nbsp;: vous prenez des photos pour votre nouvel employeur avec votre appareil personnel («&nbsp;vous en êtes propriétaire&nbsp;: oui ou non&nbsp;?&nbsp;»), puis avec celui de la structure&nbsp;; la structure publie les contenus de formation («&nbsp;à qui appartiennent-ils&nbsp;?&nbsp;»), en autorise la modification, puis l’usage commercial&nbsp;; enfin un nouveau président arrête tout partage. Chaque étape ouvre un débrief sur le droit d’auteur, les licences Creative Commons et l’utilité des communs. Lilian Ricaud y ajoute des affirmations courtes («&nbsp;j’ai le droit de photographier des personnes lors d’un événement&nbsp;») suivies d’un cercle samoan.</p>
<h4>Variantes et conseils</h4>
<ul>
<li>Laisser cinq vraies minutes à chaque camp pour se concerter avant la confrontation.</li>
<li>Remplacer le simple d’accord / pas d’accord par un débat multi-facteurs avec plusieurs zones.</li>
<li>Favoriser la parole de celles et ceux qui ne se sont pas encore exprimé·es.</li>
<li>Le format se joue aussi en extérieur, sans matériel, et sert très bien de brise-glace.</li>
</ul>
<h4>Limites</h4>
<p>Formuler une affirmation claire et vraiment clivante est difficile, et rien ne garantit que le débat «&nbsp;prenne&nbsp;». Le format fait prendre position plus qu’il ne construit, et les personnes peu à l’aise avec l’argumentation peuvent se sentir exclues&nbsp;: à compléter par d’autres formes de débat.</p>
`,

  'decision-par-consentement': `
<p>La décision par consentement vient de la sociocratie et a été reprise par l’holacratie et par l’Université du Nous, dont les deux ressources s’inspirent&nbsp;: la fiche Multibao reprend un document de Dimitri Biot diffusé par le Réseau transition Belgique, celle de Lilian Ricaud reproduit la trame de l’Université du Nous. Elles précisent surtout qui parle à chaque étape, ce qu’est une objection recevable et comment le ou la facilitateur·rice la teste.</p>
<h4>Qui parle à chaque étape</h4>
<ol>
<li><strong>Écoute du centre</strong>&nbsp;: chacun·e exprime ses préférences, limites et idées sur le sujet, en tours de cercle ou via d’autres méthodes (six chapeaux, forum ouvert…).</li>
<li><strong>Élaboration</strong>&nbsp;: une personne ou un petit groupe d’amélioration rédige une proposition simple, précise et argumentée (sujet, problématique, proposition, arguments). Une seule proposition à la fois.</li>
<li><strong>Présentation</strong>&nbsp;: seule la personne porteuse parle, sans aucune réaction du cercle. Une fois présentée, la proposition n’appartient plus à son auteur·rice.</li>
<li><strong>Clarifications</strong>&nbsp;: des questions pour comprendre, pas pour réagir. La personne porteuse répond ou dit «&nbsp;non spécifié&nbsp;»&nbsp;; les «&nbsp;pourquoi&nbsp;» sont écartés.</li>
<li><strong>Tour de réaction</strong>&nbsp;: chacun·e à son tour dit ce que la proposition lui évoque (atouts, freins, peurs, idées)&nbsp;; la personne porteuse écoute sans répondre.</li>
<li><strong>Amendement</strong>&nbsp;: la personne porteuse seule clarifie, amende, maintient ou retire sa proposition (en cas de retrait, retour à l’écoute du centre).</li>
<li><strong>Tour d’objection</strong>&nbsp;: chacun·e dit simplement «&nbsp;oui&nbsp;» ou «&nbsp;non&nbsp;», la personne porteuse en dernier. Nul ne peut s’abstenir&nbsp;; on peut «&nbsp;passer&nbsp;» une fois. Les objections sont notées au tableau avec le prénom de qui les porte.</li>
<li><strong>Bonification</strong>&nbsp;: discussion ouverte, objection par objection, pour amender la proposition&nbsp;; on vérifie auprès de la personne que son objection est levée, puis on refait un tour d’objection.</li>
<li><strong>Célébration</strong>&nbsp;: applaudissements, repas… au groupe de choisir.</li>
</ol>
<h4>Qu’est-ce qu’une objection recevable&nbsp;?</h4>
<p>Une objection n’est ni une préférence, ni un avis, ni une autre proposition&nbsp;: c’est une limite, pour soi ou pour la mise en œuvre du projet. Elle est raisonnable si elle est argumentée clairement, si elle invite à bonifier la proposition ou si elle la rend impossible à réaliser. La fiche Multibao ajoute qu’elle est valide si la proposition dépasse les limites personnelles d’un membre, dégrade la capacité du cercle à remplir sa mission, nuit à la raison d’être de l’organisation ou contredit ses valeurs. Une objection est «&nbsp;un cadeau&nbsp;» pour le groupe.</p>
<h4>Rôle du ou de la facilitateur·rice</h4>
<ul>
<li>Coupe toute discussion hors des phases prévues et rappelle qui a la parole.</li>
<li>Ne juge pas si une objection est raisonnable&nbsp;: aide la personne à le déterminer par des questions («&nbsp;Quels sont les arguments&nbsp;? Est-ce une préférence&nbsp;? Puis-je vivre avec cette proposition&nbsp;?&nbsp;»).</li>
<li>Revient vers celles et ceux qui ont passé, et vérifie qu’aucune nouvelle objection n’apparaît après bonification.</li>
</ul>
`,

  'diagramme-avec-les-pieds': `
<p>Le diagramme avec les pieds a été conçu par Vincent Kober (Infolabs) comme jeu d’inclusion «&nbsp;spécial open data&nbsp;» et animé par Kokonet aux rencontres MOUSTIC 2015&nbsp;; la fiche Multibao en décrit le déroulé commenté. Le site atelier-collaboratif.com présente la version plus générale dite «&nbsp;constellation&nbsp;», où l’on se positionne dans l’espace selon des critères proposés par l’animateur·rice.</p>
<h4>Déroulé selon la fiche Multibao</h4>
<p>Compter 10 à 15 minutes et au moins une douzaine de personnes. L’animateur·rice donne les consignes, aide à se placer et commente chaque figure.</p>
<ol>
<li><strong>Le camembert</strong>&nbsp;: après avoir expliqué à quoi sert une donnée (mesurer la répartition socioprofessionnelle, les âges…), inviter le groupe à former un cercle, puis demander ce qu’on peut mesurer avec. Selon les réponses (la parité, par exemple), les personnes se répartissent dans le cercle par catégorie et l’on commente la mesure.</li>
<li><strong>L’histogramme</strong>&nbsp;: le groupe se met en rangs selon des repères fixés par l’animateur·rice, par tranche d’âge par exemple&nbsp;; on commente la répartition.</li>
<li><strong>La cartographie</strong>&nbsp;: nord, est, sud et ouest sont définis dans la pièce&nbsp;; chacun·e se place selon son lieu de naissance, puis selon son lieu de travail, ce qui permet de commenter les «&nbsp;flux migratoires&nbsp;». Finir de manière festive en demandant à tout le monde de se rejoindre sur le lieu de la rencontre en cours.</li>
</ol>
<h4>La constellation (atelier-collaboratif.com)</h4>
<p>Dans cette variante, le critère n’est plus forcément une donnée objective&nbsp;: l’animateur·rice énonce une consigne, chacun·e se place en silence, puis quelques personnes sont invitées à dire pourquoi elles sont là. Exemples de consignes&nbsp;:</p>
<ul>
<li>une ligne graduée de 0 à 10&nbsp;: «&nbsp;à quel point connaissez-vous le sujet du jour&nbsp;?&nbsp;», «&nbsp;à quel point êtes-vous en forme ce matin&nbsp;?&nbsp;»&nbsp;;</li>
<li>un cercle dont le centre représente la plus forte proximité&nbsp;: «&nbsp;placez-vous selon votre implication dans le projet&nbsp;»&nbsp;;</li>
<li>les coins de la pièce pour des choix tranchés (quatre attentes possibles vis-à-vis de la rencontre)&nbsp;;</li>
<li>la carte géographique, pour visualiser d’où vient le groupe.</li>
</ul>
<p>Cette version sert aussi en fin de séance pour une évaluation express («&nbsp;placez-vous selon votre satisfaction&nbsp;»).</p>
<h4>Conseils et vigilance</h4>
<ul>
<li>Enchaîner les figures sans temps mort&nbsp;; le commentaire de l’animateur·rice fait tout le sel du format.</li>
<li>Choisir des critères non intrusifs&nbsp;: les questions sur le genre ou l’âge doivent rester légères et facultatives.</li>
<li>Prévoir un espace vraiment dégagé et proposer une alternative aux personnes qui ne peuvent pas rester debout.</li>
</ul>
`,

  'discussion-ascenceur': `
<p>La technique de l’ascenseur a été documentée sur Multibao par Anna Paulitsch, avec un retour d’expérience de Thomas Wolff (Centre des pratiques de la coopération). La fiche replace le format dans son contexte d’origine&nbsp;: rendre participatif un débat avec un·e expert·e, en l’enchaînant avec d’autres formats dans une trame de 50 minutes.</p>
<h4>Déroulé complet avec expert·e</h4>
<ol>
<li><strong>Plénière</strong>&nbsp;: tout le monde est assis en cercle, expert·e et facilitateur·rice compris. Le ou la facilitateur·rice explicite les règles de parole et le programme (4 minutes).</li>
<li><strong>Ouverture</strong>&nbsp;: l’expert·e présente le sujet et les enjeux selon son angle, en 10 minutes maximum (4 minutes dans la version congrès), et propose une question, écrite sur une grande feuille affichée.</li>
<li><strong>Ascenseur</strong>&nbsp;: debout, chaises repoussées contre les murs, en binômes. Consigne possible&nbsp;: «&nbsp;partagez une idée que vous avez eue, entendue, vue ou expérimentée qui pourrait, même très partiellement, répondre à la problématique&nbsp;». L’un·e parle une minute pendant que l’autre écoute sans interrompre, puis on inverse&nbsp;; une cloche marque les changements. Au bout de deux minutes, on change de binôme. Trois rotations au total, soit six minutes.</li>
</ol>
<h4>Un exemple de trame de 50 minutes (congrès CNEI, 2014)</h4>
<p>Six facilitateur·rices devaient rendre participatif un débat d’expert·e en 50 minutes, avec un droit de regard des organisateurs sur le fond et la forme. Après l’ascenseur, la trame se poursuit ainsi&nbsp;:</p>
<ul>
<li>15 minutes de cercle excentrique&nbsp;: l’expert·e et quatre personnes au centre dialoguent à partir des échanges en binômes&nbsp;; le cercle extérieur écoute seulement et note les propositions sur des post-it (code couleur annoncé, écriture lisible)&nbsp;;</li>
<li>10 minutes en groupes de cinq pour regrouper les idées proches et créer des catégories, sans réunir les quatre personnes du centre dans un même groupe&nbsp;;</li>
<li>10 minutes de restitution par un·e rapporteur·se par groupe, priorisation, et quelques témoignages sur les opportunités concrètes que cela ouvre&nbsp;;</li>
<li>clôture, avec une évaluation ROTI s’il reste du temps.</li>
</ul>
<h4>Conseils et limites</h4>
<ul>
<li>Ne pas dépasser trois binômes successifs, sous peine d’essouffler le groupe.</li>
<li>Convenir en amont avec l’expert·e de son temps de parole&nbsp;: il est souvent difficile de le limiter sur le moment.</li>
<li>Le format favorise l’écoute et le rapprochement, génère des idées de façon conviviale, et peut servir de brise-glace ou de rebond sur un thème.</li>
</ul>
`,

  'discussion-kanak': `
<p>Le brise-glace Kanak a été formalisé par Lilian Ricaud, qui le tient d’Olivier Cortès, et publié sous licence CC BY-SA dans son recueil sur le travail en réseau. La fiche source est courte&nbsp;; elle apporte surtout l’arrière-plan culturel qui donne du sens aux deux questions, ainsi que des repères pour les poser.</p>
<h4>Origine et sens des deux questions</h4>
<p>La fiche cite le mythe mélanésien de la pirogue, rapporté par la sociologue Julie Lafforgue&nbsp;: tout être humain est tiraillé entre le besoin de la Pirogue, le voyage et l’arrachement à soi-même, et le besoin de l’Arbre, l’enracinement et l’identité, jusqu’au jour où il comprend que c’est avec l’Arbre qu’on fabrique la Pirogue. «&nbsp;D’où viens-tu&nbsp;?&nbsp;» renvoie à l’Arbre, «&nbsp;Où vas-tu&nbsp;?&nbsp;» à la Pirogue. En Nouvelle-Calédonie, on fait toujours la coutume avec une tribu kanak pour se présenter avant de décider de faire quoi que ce soit ensemble&nbsp;: les deux questions sont une forme minimale de cette présentation mutuelle.</p>
<h4>Déroulé détaillé</h4>
<ol>
<li>Présenter l’origine des deux questions en une phrase, éventuellement avec le mythe de la pirogue&nbsp;: cela donne de la profondeur à l’exercice et invite à des réponses moins convenues.</li>
<li>Préciser que les questions peuvent s’entendre au sens propre (lieu de départ, destination) ou au sens figuré (parcours, projet, ce que l’on vient chercher dans la rencontre). Chacun·e choisit son niveau.</li>
<li>En grand groupe, former des binômes, idéalement entre personnes qui ne se connaissent pas. Chacun·e pose la première question, écoute, puis répond à son tour&nbsp;; même chose avec la deuxième. Compter deux à trois minutes par personne.</li>
<li>En petit groupe (jusqu’à une douzaine), se mettre en cercle et répondre aux deux questions à tour de rôle, ce qui tient lieu de tour de présentation.</li>
<li>Pour clore, demander si quelqu’un veut partager une chose entendue qui l’a marqué.</li>
</ol>
<h4>Conseils et vigilance</h4>
<ul>
<li>Le format ne demande aucun matériel et se glisse en cinq à dix minutes en ouverture de séance, en complément ou à la place d’un tour de table.</li>
<li>Rappeler que l’on répond sur le registre que l’on souhaite&nbsp;: personne n’est obligé de parler de son histoire personnelle.</li>
<li>Pour relancer une conversation qui s’éteint, l’animateur·rice peut suggérer un «&nbsp;et toi&nbsp;?&nbsp;» après chaque réponse.</li>
</ul>
`,

  'documentation-croisee': `
<p>La documentation croisée est un format imaginé par Lilian Ricaud, influencé par ses échanges avec Outils-Réseaux et le réseau Tilios, et publié sous licence CC BY-SA. La fiche source explicite le double besoin auquel répond le format, les rôles de chacun·e, les outils pour le pratiquer à distance et les conditions de licence qui en font un vrai dispositif de communs.</p>
<h4>Le problème de départ</h4>
<p>Une personne qui porte un projet ou détient un savoir n’a pas le temps de le documenter et, quand elle le fait, elle néglige des détails qui lui semblent évidents. À l’inverse, une personne qui veut monter en compétence n’a pas toujours les moyens d’apprendre seule ni de rémunérer un·e formateur·rice, et ce qu’elle reçoit reste souvent flou. Lier les deux besoins permet à chacun·e d’y gagner.</p>
<h4>Déroulé et rôles</h4>
<ol>
<li>Le ou la spécialiste et l’apprenti·e-éditeur·rice choisissent un sujet précis et une durée maximale.</li>
<li>L’apprenti·e interviewe le ou la spécialiste en cherchant à distinguer, question après question, ce qui est accessoire ou optionnel, ce qui est important et ce qui est essentiel. La reformulation est l’outil principal&nbsp;: elle force à expliciter les évidences.</li>
<li>L’apprenti·e prend des notes sur un outil de co-écriture pendant l’entretien, et peut ajouter photos, vidéos, audio, cartes ou objets interactifs.</li>
<li>Le ou la spécialiste vérifie le contenu, l’apprenti·e l’éditorialise, et le document est publié sur un wiki, un site ou une boîte à outils comme Multibao.</li>
</ol>
<p>Un enjeu important est de «&nbsp;traduire&nbsp;» le contenu expert pour le rendre accessible à tous.</p>
<h4>Licence et outils</h4>
<ul>
<li>Choisir une licence qui autorise la modification et l’usage commercial (CC BY-SA ou CC0)&nbsp;: une formation payante est un usage commercial, et c’est à cette condition que le document pourra être enrichi et resservir à d’autres formations.</li>
<li>À distance, utiliser un outil de visioconférence (la fiche cite Skype, Hangout pour enregistrer ou diffuser en direct, et Firefox Hello comme outil libre) et combiner avec une contrainte de temps à la manière du co-pomodoro.</li>
</ul>
<h4>Exemples d’usage et pistes</h4>
<ul>
<li>Un·e facilitateur·rice transmet un format qu’il ou elle a développé&nbsp;; l’apprenant·e produit une recette libre.</li>
<li>Un·e développeur·se forme quelqu’un à une nouvelle fonctionnalité d’un wiki&nbsp;; l’apprenant·e produit un mode d’emploi libre.</li>
<li>Piste non encore réalisée&nbsp;: un canevas de questions pour aider à faire parler le ou la spécialiste (histoire, exemples, points essentiels, part de subjectivité).</li>
<li>Formats liés&nbsp;: troc-école, co-coaching.</li>
</ul>
`,

  'elevator-pitch': `
<p>L’expression «&nbsp;elevator pitch&nbsp;» (argumentaire d’ascenseur) vient du monde des affaires américain&nbsp;: Wikipédia en situe l’origine dans la culture entrepreneuriale de la fin du XXe siècle, et la fiche Gymkhana renvoie au «&nbsp;test de l’ascenseur&nbsp;» décrit par Geoffrey Moore en 1991 dans son ouvrage de marketing. Les deux ressources se complètent&nbsp;: Wikipédia donne le cadre général et les ingrédients d’un bon pitch, Gymkhana propose un atelier collectif de 20 minutes avec un formulaire à trous.</p>
<h4>Ce que dit Wikipédia</h4>
<p>Le pitch doit tenir dans la durée d’un trajet d’ascenseur, soit 30 secondes à 2 minutes. Il s’adresse à une personne dont le temps est compté et qu’il faut convaincre d’accorder un second rendez-vous, pas de conclure sur-le-champ. Les éléments attendus&nbsp;: une accroche qui capte l’attention, le problème traité, la solution proposée et ce qui la différencie, une preuve de crédibilité (équipe, premiers résultats) et un appel à l’action. L’article souligne que l’exercice s’est étendu bien au-delà de la levée de fonds&nbsp;: recherche d’emploi, présentation d’une association, d’un projet de recherche ou d’une candidature. Le pitch se prépare et se répète, s’adapte à l’interlocuteur·rice et évite le jargon.</p>
<h4>L’atelier Gymkhana pas à pas</h4>
<p>Gymkhana est un parcours de conception d’applications citoyennes&nbsp;; l’atelier sert à remplir rapidement plusieurs cases du canevas de projet.</p>
<ol>
<li>Réunir un groupe de 3 à 7 citoyen·nes, futur·es utilisateur·rices potentiel·les, avec un·e facilitateur·rice pour un ou deux groupes. Matériel&nbsp;: paperboard, marqueurs, post-it.</li>
<li>Préparer sur la feuille le formulaire type en sept rubriques&nbsp;: «&nbsp;Pour (acteur cible) qui a (un besoin), (nom du produit) est une (catégorie, par exemple appli web citoyenne) qui (bénéfice clé)&nbsp;; à la différence de (situation actuelle, autre solution), le produit est (différenciateur unique)&nbsp;».</li>
<li>Rubrique par rubrique, lister sur post-it les formulations candidates, puis sélectionner, par vote par points par exemple.</li>
<li>Une personne écrit sur le paperboard les mots définitifs retenus par le groupe.</li>
<li>Avec plusieurs groupes, chacun présente son pitch aux autres. Compter 20 minutes, un peu plus s’il y a plusieurs groupes.</li>
</ol>
<h4>Conseils et limites</h4>
<ul>
<li>Chronométrer les présentations&nbsp;: le respect de la durée fait partie de l’exercice.</li>
<li>Le formulaire Gymkhana aide à dépasser le vocabulaire «&nbsp;business&nbsp;»&nbsp;: remplacer investisseur par partenaire, marché par public, et adapter les rubriques au contexte associatif ou public.</li>
<li>Un pitch simplifie forcément&nbsp;: il ouvre la discussion, il ne remplace pas le dossier complet.</li>
</ul>
`,

  'energiseur-un-a-neuf': `
<p>Cet énergiseur vient du théâtre d’improvisation, où il sert d’échauffement corporel et vocal avant de jouer. La fiche de Lilian Ricaud (CC BY-SA) est volontairement courte&nbsp;; elle précise toutefois deux points absents de la carte&nbsp;: le compte se fait à voix haute, tous ensemble, et les participant·es se placent librement dans l’espace plutôt qu’en cercle.</p>
<h4>Déroulé précis</h4>
<ol>
<li>Choisir un espace un peu dégagé et demander à chacun·e de se mettre debout, avec assez de place pour bouger bras et jambes sans gêner les voisin·es.</li>
<li>Annoncer la règle&nbsp;: tout le monde compte en même temps, à voix haute, de un à neuf, en secouant énergiquement la main droite.</li>
<li>Enchaîner sans pause la main gauche de un à neuf, puis le pied droit, puis le pied gauche.</li>
<li>Repartir pour un tour complet des quatre membres en comptant jusqu’à huit, puis jusqu’à sept, et ainsi de suite.</li>
<li>Le dernier tour se fait sur «&nbsp;un&nbsp;»&nbsp;: un seul mouvement par membre, souvent accompagné d’un cri collectif qui conclut l’exercice.</li>
</ol>
<p>L’ensemble dure une à deux minutes, sans matériel, pour un groupe de toute taille.</p>
<h4>Rôle de l’animateur·rice</h4>
<ul>
<li>Montrer l’exemple en exagérant les gestes&nbsp;: l’énergie du groupe suit celle de la personne qui mène.</li>
<li>Donner le tempo de la voix&nbsp;: plus le compte raccourcit, plus il accélère, jusqu’à une fin très rapide.</li>
<li>Veiller à ce que le compte reste collectif et audible&nbsp;: c’est la voix autant que le mouvement qui réveille.</li>
</ul>
<h4>Usages et vigilance</h4>
<ul>
<li>Idéal après un repas, en reprise d’après-midi ou entre deux séquences assises, y compris en visioconférence caméra allumée.</li>
<li>Proposer d’adapter les mouvements aux personnes qui ne peuvent pas rester debout ou secouer un membre (version assise, amplitude réduite).</li>
<li>Prévenir les voisins&nbsp;: le format est bruyant.</li>
</ul>
`,

  'enquete-appreciative': `
<p>L’enquête appréciative (Appreciative Inquiry) a été développée à la fin des années 1980 par David Cooperrider et Suresh Srivastva à l’université Case Western Reserve (Cleveland), dans le champ du développement des organisations. La fiche du Centre des pratiques de la coopération, rédigée par Thomas Wolff, en donne les repères pratiques, les cinq étapes et les usages, tout en précisant que la méthode est une marque déposée et que seule une présentation générale peut être publiée sous licence libre.</p>
<h4>Repères pratiques</h4>
<ul>
<li>Plus de 12 participant·es, souvent beaucoup plus&nbsp;: la démarche mobilise l’ensemble des personnes concernées par le projet.</li>
<li>Préparation&nbsp;: une demi-journée au minimum&nbsp;; événement&nbsp;: de deux demi-journées à une durée non définie, la démarche s’inscrivant dans le temps.</li>
<li>Usages&nbsp;: définition d’orientations stratégiques, recherche de solutions, optimisation du travail ou de l’organisation, gestion de conflits.</li>
</ul>
<h4>Les cinq étapes et qui les mène</h4>
<p>La fiche distingue un groupe de pilotage restreint et des groupes plus vastes, et ajoute une étape de clarification en amont du cycle en quatre temps présenté sur la carte.</p>
<ol>
<li><strong>Clarification</strong> (groupe de pilotage)&nbsp;: déterminer le «&nbsp;problème&nbsp;», le sujet ou le champ d’investigation, formulé de manière affirmative.</li>
<li><strong>Découverte</strong> (groupe large)&nbsp;: mettre en valeur ce qui marche et a marché, en général par des entretiens en binômes autour de questions appréciatives («&nbsp;Racontez un moment où vous avez été particulièrement fier·e de ce que nous avons accompli ensemble&nbsp;»).</li>
<li><strong>Imagination</strong>&nbsp;: à partir de ces récits, imaginer l’avenir souhaité.</li>
<li><strong>Conception</strong>&nbsp;: construire cet avenir en s’appuyant sur le meilleur du passé et du présent.</li>
<li><strong>Planification et action</strong>&nbsp;: inscrire les actions dans le temps&nbsp;; ce sont les collaborateur·rices qui portent et communiquent eux-mêmes les résultats.</li>
</ol>
<h4>Principes qui fondent la démarche</h4>
<ul>
<li>Systémique et inclusive plutôt qu’exclusive.</li>
<li>Évolutive grâce à l’apport humain&nbsp;: les personnes et leurs valeurs sont au cœur du dispositif.</li>
<li>Économique&nbsp;: le projet reste un projet qui doit produire des résultats.</li>
<li>L’individu est sollicité à chaque étape, et l’implication des participant·es se mesure directement pendant le processus.</li>
</ul>
<h4>Vigilance et limites</h4>
<ul>
<li>La fiche recommande de coupler ces étapes avec d’autres outils d’animation et de faire appel à des animateur·rices certifié·es pour une démarche complète.</li>
<li>Se concentrer sur les forces ne doit pas servir à taire les difficultés réelles&nbsp;: la phase de clarification doit nommer honnêtement le sujet.</li>
<li>Pour aller plus loin, la fiche renvoie à la note ILAC d’Acosta et Douthwaite (2005) et à des études de cas (Myrada en Inde, un village en Gambie).</li>
</ul>
`,

  'langage-silencieux': `
<p>Les gestes de communication silencieuse viennent des assemblées des mouvements d’occupation des places (Occupy, Indignados) et, avant eux, des pratiques de consensus des collectifs militants. L’article d’Interface-conscience (2013) et la fiche Interpole expliquent comment les introduire dans une réunion ordinaire, les articuler avec des rôles et éviter qu’ils ne deviennent un rituel vide.</p>
<h4>Origine et principe</h4>
<p>Ce « langage des signes de réunion » est né dans des assemblées de plusieurs centaines de personnes, sans micro ni votes bruyants. Interface-conscience distingue deux familles de gestes&nbsp;: ceux qui <strong>expriment un ressenti</strong> (accord, désaccord, blocage) et ceux qui <strong>demandent une action</strong> (prendre la parole, accélérer, clarifier, régler un point technique). Les premiers donnent un retour visuel continu à qui parle, les seconds s’adressent à qui distribue la parole. Les deux sources insistent sur la complémentarité entre gestes et <strong>rôles explicites</strong>&nbsp;: sans quelqu’un qui note les demandes de parole, les signes restent lettre morte.</p>
<h4>Mise en place pas à pas</h4>
<ol>
<li>En ouverture, présenter les gestes retenus en les mimant et demander au groupe s’il accepte de les utiliser&nbsp;; afficher un pense-bête visible de tous.</li>
<li>Désigner une personne qui distribue la parole&nbsp;: elle note les index levés dans l’ordre, en priorisant celles et ceux qui n’ont pas encore parlé, et donne la priorité absolue aux mains en T (on n’entend pas, l’heure tourne).</li>
<li>Pendant chaque intervention, le groupe réagit en silence&nbsp;: mains agitées pour l’accord, mains vers le bas pour le désaccord, moulinet pour signaler un point déjà dit ou une intervention qui s’éternise.</li>
<li>Au moment d’une proposition, lire d’un coup d’œil le niveau de consensus&nbsp;; traiter d’abord les blocages (bras croisés, poings fermés), puis les désaccords non bloquants, avant d’amender.</li>
</ol>
<h4>Conseils et points de vigilance</h4>
<ul>
<li>Commencer avec trois ou quatre gestes seulement (demande de parole, accord, « déjà dit », point technique) et enrichir au fil des réunions.</li>
<li>Le blocage est un geste grave&nbsp;: la fiche Interpole rappelle qu’il signifie « je ne peux pas rester dans le projet si cela passe », et que certains collectifs imposent à la personne qui bloque de formuler une alternative.</li>
<li>Éviter que les gestes d’accord ne deviennent un applaudimètre qui intimide les avis minoritaires&nbsp;; aller chercher activement les désaccords silencieux.</li>
</ul>
<h4>Limites</h4>
<p>Le dispositif demande que tout le monde se voie&nbsp;: il convient mal aux visioconférences sans caméra ou aux salles en gradins. Face à un public institutionnel, le présenter comme un simple outil de confort et laisser le groupe choisir ses signes.</p>
`,

  'les-3c-conserver-cesser-creer': `
<p>Les 3C sont la version francophone du classique « Keep / Stop / Start » des rétrospectives d’équipe. La fiche de Communagir, organisme québécois d’accompagnement du développement collectif, en fait un outil complet de bilan et de décision pour les groupes en transition (nouveau mandat, nouvelles pratiques), avec un déroulé en sous-groupes, du matériel précis et des conseils d’animation.</p>
<h4>À quoi sert l’outil selon Communagir</h4>
<p>La fiche le présente comme un outil d’analyse collective, d’évaluation et de priorisation. Son intérêt est de <strong>reconnaître ce qui est jugé essentiel</strong> dans les pratiques actuelles, de <strong>permettre les deuils nécessaires</strong> (cesser quelque chose sans dévaloriser celles et ceux qui l’ont porté) et de <strong>projeter le groupe vers l’avenir</strong>. Elle le recommande pour 10 à 50 personnes, sur 60 à 120 minutes et plus selon la taille. Matériel&nbsp;: trois grandes feuilles (une par C), feutres, post-it et gommettes pour voter.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li><strong>Cadrer</strong> (10 min)&nbsp;: rappeler l’objectif partagé ou la cible visée, car c’est par rapport à elle que l’on juge ce qui est à conserver, cesser ou créer.</li>
<li><strong>Réflexion individuelle</strong> (10 min)&nbsp;: chacun·e note ses idées sur des post-it, une idée par post-it.</li>
<li><strong>Sous-groupes</strong> (20–30 min)&nbsp;: en équipes de 4 à 6, mettre en commun, regrouper les idées proches et retenir les plus importantes pour chaque C.</li>
<li><strong>Plénière</strong> (20–30 min)&nbsp;: chaque sous-groupe colle ses post-it sur les grandes feuilles et les présente&nbsp;; l’animateur·rice regroupe les doublons et fait émerger les terrains communs.</li>
<li><strong>Priorisation</strong> (10 min)&nbsp;: vote par gommettes (trois par personne, par exemple) dans chaque colonne.</li>
<li><strong>Validation et suites</strong>&nbsp;: nommer ce qui est décidé, qui s’en charge et quand on en refera le bilan.</li>
</ol>
<h4>Rôle de l’animateur·rice</h4>
<ul>
<li>Formuler les trois questions à partir d’une même amorce&nbsp;: « Considérant où nous en sommes et où nous voulons aller ensemble, qu’est-ce qui nous aide et doit rester&nbsp;? qu’est-ce qui ne correspond plus au contexte&nbsp;? qu’est-ce qui nous manque&nbsp;? »</li>
<li>Traiter la colonne « Cesser » avec respect&nbsp;: distinguer « cesser » et « modifier », rappeler que ce qui est abandonné a été utile en son temps.</li>
</ul>
<h4>Variantes et limites</h4>
<p>En petit groupe, on passe directement à la plénière sans sous-groupes. Sa limite&nbsp;: il produit des listes plutôt que des analyses, et doit être suivi d’un plan d’action daté, faute de quoi les « Créer » restent sur le papier.</p>
`,

  'mandala-holistique': `
<p>Le mandala holistique a été conçu par la facilitatrice néo-zélandaise Robina McCurdy, issue de la permaculture et des écovillages, et il est décrit en détail dans son livre « Faire Ensemble&nbsp;: outils participatifs pour les collectifs » (Éditions Passerelle Éco). La recette simplifiée de Lilian Ricaud et la variante « autoportrait » publiée sur Interpole en font un format opérationnel pour aider un collectif à formuler valeurs, principes et actions, puis à les valider au consensus.</p>
<h4>Origine</h4>
<p>Passerelle Éco présente le livre de Robina McCurdy comme une boîte à outils pour les groupes de transition, les habitats partagés et les facilitateur·rices du changement social. Le mandala y occupe une place centrale car il aborde en une séance les trois niveaux d’un projet&nbsp;: le sens (pourquoi), les modalités (comment) et les actions (quoi). Lilian Ricaud recommande le « souvenir du futur » plutôt que le rêve éveillé pour la phase de vision.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li><strong>Vision</strong>&nbsp;: les participant·es imaginent le projet réussi dans quelques années et écrivent leurs idées, une par post-it.</li>
<li><strong>Dessin du mandala</strong>&nbsp;: sur une nappe en papier ou au sol, trois cercles concentriques (valeurs au centre, principes, actions) découpés en segments thématiques, prédéfinis ou émergents.</li>
<li><strong>Placement</strong>&nbsp;: l’animateur·rice aide à positionner chaque post-it dans le bon cercle et le bon segment, et vérifie que tous les segments sont alimentés.</li>
<li><strong>Validation au consensus</strong>, segment par segment&nbsp;: lire les papiers par groupes de quatre, demander de lever la main en cas de désaccord. Le cercle central est validé avec le plus de soin.</li>
<li><strong>Traitement des désaccords</strong>&nbsp;: l’auteur·rice explique en quoi l’énoncé compte pour le projet, puis la personne en désaccord dit si elle peut l’accepter. Sinon&nbsp;: renvoyer le papier à son auteur·rice, le mettre dans une zone d’attente réexaminée à la fin, demander une abstention (« peux-tu vivre avec&nbsp;? ») ou, si une personne s’oppose plus de trois fois, poser la question de son appartenance au projet.</li>
<li><strong>Célébration</strong> du consensus, puis <strong>rédaction d’une charte</strong>&nbsp;: en petits groupes, exprimer chaque segment en une phrase, et afficher le résultat dans les locaux ou en ligne.</li>
</ol>
<h4>Matériel, temps, variantes</h4>
<ul>
<li>Nappe papier, feutres, post-it&nbsp;; 5 à 100 participant·es&nbsp;; 2 à 3&nbsp;h minimum pour douze personnes, jusqu’à deux jours en grand groupe.</li>
<li>Variante « grand groupe facilitateur de lui-même » (40 personnes)&nbsp;: les participant·es se regroupent par thème émergent, compilent les contributions pendant 30 à 45&nbsp;min et déduisent eux-mêmes principes et valeurs avant de les présenter en plénière.</li>
<li>Variante « mandala autoportrait » (Interpole, d’après Nicolas Geiger)&nbsp;: le même canevas sert à une organisation existante pour décrire ce qu’elle est déjà et repérer les écarts entre valeurs affichées et actions réelles.</li>
</ul>
<h4>Conseils et vigilance</h4>
<p>Formuler les principes avec un verbe à l’infinitif pour les distinguer des valeurs, clarifier si un désaccord porte sur la formulation ou sur le fond, et ne pas sacrifier la validation du cercle central faute de temps&nbsp;: c’est elle qui donne sa légitimité à la charte.</p>
`,

  'matrice-impact-effort': `
<p>La matrice impact/effort est décrite dans « Gamestorming » (Dave Gray, Sunni Brown et James Macanufo, 2010, traduit chez Diateino), un recueil de jeux pour réunions créatives. La page du site Gamestorming en donne la fiche de jeu&nbsp;: objectif, nombre de joueurs, durée, déroulé et logique des quatre quadrants.</p>
<h4>Objectif et cadre selon Gamestorming</h4>
<p>Le jeu sert à passer d’une longue liste d’idées ou d’actions possibles à un petit nombre de pistes réellement engageables. Il se joue avec <strong>3 à 15 personnes</strong>, pour une durée de <strong>30 à 60 minutes</strong>, sur un tableau blanc ou une grande feuille. Gamestorming insiste sur le fait qu’il ne s’agit pas d’une mesure objective mais d’une <strong>estimation collective</strong>&nbsp;: la valeur de l’exercice tient à la discussion qui accompagne le placement de chaque idée.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li>Tracer deux axes&nbsp;: l’effort (temps, argent, énergie, compétences nécessaires) et l’impact (effet attendu sur l’objectif visé). Les orientations varient selon les sources, l’essentiel étant de les annoncer clairement.</li>
<li>Avant la partie, disposer d’une liste d’idées, une par post-it, issue d’un brainstorming ou d’une séquence précédente.</li>
<li>Lire chaque idée à voix haute et demander au groupe où la placer. Commencer par poser la question « l’effort est-il plutôt faible ou élevé&nbsp;? », puis « l’impact est-il plutôt faible ou fort&nbsp;? », avant d’affiner la position relative aux autres post-it.</li>
<li>Une fois toutes les idées placées, nommer les quadrants&nbsp;: <strong>gains rapides</strong> (fort impact, faible effort), <strong>grands projets</strong> (fort impact, gros effort), <strong>petites tâches de confort</strong> (faible impact, faible effort) et <strong>à écarter</strong> (faible impact, gros effort).</li>
<li>Décider&nbsp;: lancer les gains rapides sans attendre, planifier un ou deux grands projets, et acter explicitement ce que l’on abandonne.</li>
</ol>
<h4>Rôle de l’animateur·rice</h4>
<ul>
<li>Tenir le rythme&nbsp;: une à deux minutes par idée, sinon la séance s’enlise sur les cas limites. En cas de désaccord persistant, placer le post-it à la frontière et y revenir à la fin.</li>
<li>Demander qui porterait l’action et à quelle échéance&nbsp;: l’effort devient beaucoup plus concret quand il est rattaché à des personnes réelles.</li>
<li>Faire préciser l’objectif par rapport auquel on mesure l’impact, faute de quoi chacun·e évalue selon ses propres critères.</li>
</ul>
<h4>Variantes et limites</h4>
<p>Gamestorming suggère de réutiliser la matrice en fin de projet pour vérifier si les estimations étaient justes, et de l’appliquer à des fonctionnalités, des demandes clients ou des chantiers internes. La principale limite est le biais d’optimisme&nbsp;: les groupes sous-estiment presque toujours l’effort et surestiment l’impact. Il est utile de confier le placement de l’effort aux personnes qui feront le travail, et celui de l’impact aux personnes qui en bénéficieront.</p>
`,

  'matrice-plus-delta': `
<p>Le Plus/Delta vient des pratiques d’amélioration continue et a été popularisé dans le monde de la facilitation par Luke Hohmann, auteur d’« Innovation Games » (2006), puis repris dans « Gamestorming » (Dave Gray et al., 2010). Les deux pages en font un rituel de fin de réunion, très court, pour recueillir à chaud ce qui a bien fonctionné et ce que le groupe ferait autrement.</p>
<h4>Origine et intention</h4>
<p>Innovation Games présente le Plus/Delta comme le plus simple des jeux de rétrospective&nbsp;: deux colonnes, cinq à dix minutes, pas de matériel particulier. Le choix du mot <strong>delta</strong> plutôt que « moins » est délibéré&nbsp;: la lettre grecque signifie « changement » et déplace la conversation de la critique vers l’amélioration. Pour Gamestorming, l’outil sert à instaurer une culture du retour régulier plutôt qu’un grand bilan annuel, et à donner aux participant·es un signal que leur avis compte, puisque les deltas sont visibles à la réunion suivante.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li>Dans les cinq à dix dernières minutes d’une réunion, d’un atelier ou d’un sprint, tracer deux colonnes sur un tableau&nbsp;: « + » et « Δ ».</li>
<li>Poser les deux questions&nbsp;: « Qu’est-ce qui a bien marché et que nous devons garder&nbsp;? » puis « Qu’est-ce que nous changerions la prochaine fois&nbsp;? »</li>
<li>Faire un tour rapide, chacun·e donne au moins un élément, ou bien chacun·e écrit sur des post-it que l’on colle dans la colonne correspondante.</li>
<li>Noter tel quel, sans débattre ni se justifier&nbsp;: le but est de capter le ressenti, pas de le discuter.</li>
<li>Choisir un ou deux deltas à mettre en œuvre dès la prochaine séance, et désigner qui s’en occupe.</li>
</ol>
<h4>Rôle de l’animateur·rice et conseils</h4>
<ul>
<li>Commencer toujours par les plus&nbsp;: cela ancre le positif et rend les deltas plus faciles à entendre.</li>
<li>Reformuler les deltas en changements concrets (« commencer à l’heure » plutôt que « trop de retard »).</li>
<li>Garder la trace&nbsp;: photographier le tableau et rouvrir la liste des deltas en début de réunion suivante pour montrer ce qui a été pris en compte.</li>
<li>Innovation Games recommande de l’utiliser systématiquement, y compris après une réunion qui s’est bien passée&nbsp;: c’est la répétition qui crée l’habitude.</li>
</ul>
<h4>Variantes et limites</h4>
<p>Gamestorming propose une version silencieuse sur post-it suivie d’un vote à points, utile quand le groupe est grand ou que certaines voix dominent. En distanciel, deux colonnes dans un document partagé suffisent. La limite de l’outil est sa brièveté&nbsp;: il recueille des impressions, pas des causes, et ne remplace pas une rétrospective plus approfondie quand un problème se répète.</p>
`,

  'meteo-interieure': `
<p>La fiche publiée sur Multibao par François Wuidard, via le Réseau Transition Belgique, détaille la pratique de la météo intérieure telle qu’elle est utilisée dans les groupes de transition et les formations à la facilitation. Elle précise les conditions pratiques, les différentes manières d’organiser le tour de parole et le rôle particulier de l’animateur·rice.</p>
<h4>Cadre pratique</h4>
<p>La fiche fixe quelques repères&nbsp;: aucun minimum de participant·es mais <strong>pas plus de vingt</strong>, aucune préparation, aucun coût, et une durée de <strong>cinq à vingt minutes</strong> selon la taille du groupe, en veillant à ne pas empiéter sur le reste de la rencontre. Elle recommande de placer la météo <strong>après un moment de centrage</strong>, c’est-à-dire une courte pause silencieuse, yeux fermés, pour se mettre en contact avec son corps, ses émotions et ses pensées. L’exercice est le plus utile en début de journée pour ouvrir et en fin de journée pour clôturer.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li><strong>Consigne</strong>&nbsp;: l’animateur·rice explique que chacun·e va dire comment il ou elle se sent ici et maintenant, en utilisant si possible des métaphores météorologiques (« pour moi aujourd’hui c’est soleil », « ce matin il y a eu de l’orage à la maison mais ça se calme »).</li>
<li><strong>Tour de parole</strong>&nbsp;: dans le sens horaire, antihoraire, en parole au centre, ou bien la première personne qui le souhaite commence spontanément et le tour part de sa gauche ou de sa droite.</li>
<li>Chaque personne parle jusqu’au bout sans être interrompue, ni par le groupe ni par l’animateur·rice, puis termine par « j’ai dit » ou « j’ai terminé » pour rendre la parole.</li>
<li><strong>Conclusion</strong>&nbsp;: l’animateur·rice donne sa propre météo en dernier et conclut.</li>
</ol>
<h4>Rôle de l’animateur·rice</h4>
<ul>
<li>Parler en <strong>dernier</strong>, jamais en premier&nbsp;: une météo donnée d’entrée influence celles des participant·es.</li>
<li>Utiliser ce dernier tour pour rebondir sur ce qui a été dit, poser le cadre ou introduire l’activité suivante.</li>
<li>Rappeler que l’on peut passer ou se limiter à un mot&nbsp;: la sécurité du groupe prime sur l’exhaustivité.</li>
</ul>
<h4>Variantes décrites dans la fiche</h4>
<p>La météo peut se combiner avec un tour de présentation en début de session. La question peut être orientée vers les attentes de la journée (« avec quelle attente arrivez-vous&nbsp;? »), ou, en clôture, vers une évaluation de la rencontre. Une consigne « en quelques mots » ou « en un seul mot » permet de tenir le temps avec un grand groupe. Au-delà de vingt personnes, mieux vaut passer par des sous-groupes ou un format non verbal.</p>
`,

  'methode-des-personas': `
<p>Les personas viennent du design d’interaction (Alan Cooper les popularise à la fin des années 1990) et la fiche de Lilian Ricaud reprend, en la simplifiant, la version proposée par Amélie Boucher dans « Ergonomie web » (Eyrolles, 2008). Elle explique pourquoi la méthode fonctionne, donne un modèle de fiche persona, un exemple complet et un déroulé d’atelier avec synthèse en carte mentale.</p>
<h4>Pourquoi inventer des personnes fictives</h4>
<p>La fiche avance quatre arguments&nbsp;: penser en termes de « l’utilisateur » est trop vague, alors qu’un persona oblige à <strong>entrer dans le détail</strong> de la cible&nbsp;; un visage, un prénom, un métier <strong>humanisent</strong> la cible et favorisent l’empathie&nbsp;; donner à chaque persona des missions et des tâches permet de <strong>hiérarchiser les objectifs</strong> réels des usager·ères&nbsp;; enfin le travail collectif crée une <strong>vision partagée</strong> des besoins dans l’équipe projet. Elle assume aussi la limite principale&nbsp;: c’est approximatif et non scientifique, mais suffisant pour un projet peu complexe que l’on améliorera ensuite par itérations.</p>
<h4>Modèle de fiche persona</h4>
<p>Prénom, âge, adresse, profession, équipement informatique, aisance avec internet, fréquence et usages du web, relation au projet, puis un <strong>scénario type</strong> qui raconte comment la personne découvre le produit ou le service, ce qu’elle cherche et ce qu’elle fait. Les critères numériques comptent surtout pour un site web. La fiche distingue trois statuts&nbsp;: le <strong>persona primaire</strong>, dont les besoins doivent absolument être satisfaits&nbsp;; le <strong>persona secondaire</strong>, que l’on accommode si cela ne contredit pas le primaire&nbsp;; et l’<strong>antipersona</strong>, que l’on ne cherche pas à servir, voire que l’on écarte.</p>
<h4>Déroulé d’atelier</h4>
<ol>
<li>Réunir 5 à 10 personnes aux profils variés&nbsp;; au-delà, former des sous-groupes.</li>
<li>Rédiger individuellement ou en binôme 3 à 5 portraits en temps limité, inspirés de personnes réelles, un persona pouvant mêler les traits de plusieurs personnes.</li>
<li>Mettre en commun dans une carte mentale vidéoprojetée (Freeplane par exemple)&nbsp;: l’animateur·rice capture tout ce qui est dit, puis organise par affinité.</li>
<li>Dégager les points communs aux personas primaires et secondaires, et classer par tâches, intérêts et besoins.</li>
<li>Traduire ces besoins en fonctionnalités, contenus et priorités.</li>
</ol>
<h4>Conseils et vigilance</h4>
<ul>
<li>Laisser les discussions se dérouler lors de la synthèse&nbsp;: c’est là que la compréhension partagée se construit.</li>
<li>Réévaluer l’organisation de la carte avec le groupe une fois tout capturé, plutôt que de la figer en cours de route.</li>
<li>Veiller à la diversité des participant·es&nbsp;: un groupe homogène produit des personas qui lui ressemblent.</li>
</ul>
`,

  'methode-des-post-it': `
<p>La page de Savage &amp; Greene, agence de design de service, décrit la « post-it method » comme un format de brainstorming silencieux suivi d’un regroupement et d’un vote. Elle apporte ce que la carte ne détaille pas&nbsp;: la raison d’être de l’écriture individuelle, le minutage, les consignes exactes et la manière d’exploiter le mur de post-it ensuite.</p>
<h4>Pourquoi écrire avant de parler</h4>
<p>Savage &amp; Greene partent d’un constat classique sur le brainstorming oral&nbsp;: les premières idées orientent toutes les suivantes, les personnes extraverties occupent l’espace et les idées fragiles ne sont jamais dites. Faire écrire chacun·e <strong>en silence</strong> avant toute discussion produit plus d’idées, plus variées, et met tout le monde à égalité. Le post-it ajoute la <strong>manipulabilité</strong>&nbsp;: une idée devient un objet que l’on peut déplacer, rapprocher d’une autre ou écarter sans vexer personne.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li>Formuler une question précise et l’afficher (« comment pourrions-nous… »)&nbsp;; distribuer post-it et marqueurs épais, un bloc par personne.</li>
<li>Écriture silencieuse, 5 à 8 minutes&nbsp;: une idée par post-it, en lettres capitales, trois à six mots. Encourager la quantité&nbsp;; aucune idée n’est jugée à ce stade.</li>
<li>Affichage&nbsp;: chacun·e vient coller ses post-it au mur en lisant chaque idée à voix haute en une phrase, sans justification ni débat.</li>
<li>Regroupement&nbsp;: le groupe rapproche les idées similaires en grappes et donne un titre à chaque grappe (tri par affinité).</li>
<li>Vote à points&nbsp;: chaque personne dispose de trois à cinq gommettes ou coups de marqueur pour désigner les idées ou grappes à approfondir.</li>
<li>Décision et suites&nbsp;: les idées retenues sont transformées en actions ou passées dans une matrice de priorisation&nbsp;; photographier le mur avant de le défaire.</li>
</ol>
<h4>Rôle de l’animateur·rice</h4>
<ul>
<li>Faire respecter le silence pendant l’écriture et le « pas de débat » pendant l’affichage&nbsp;: c’est ce qui protège les idées minoritaires.</li>
<li>Modéliser la consigne en écrivant soi-même un post-it lisible au mur, pour montrer le format attendu.</li>
<li>Relancer en cours d’écriture (« une idée que personne n’oserait proposer&nbsp;? ») si le rythme ralentit.</li>
</ul>
<h4>Variantes et limites</h4>
<p>Savage &amp; Greene utilisent la méthode aussi bien pour collecter des problèmes que des solutions, ou pour recueillir les observations d’une enquête terrain. En distanciel, un tableau blanc en ligne reproduit le format. La limite tient à la brièveté des énoncés&nbsp;: un post-it de cinq mots perd son contexte, d’où l’importance de la lecture à voix haute et d’une capture rapide des grappes avec leurs titres.</p>
`,

  'six-chapeaux-de-bono': `
<p>La méthode des six chapeaux a été formalisée par le psychologue maltais Edward de Bono dans « Six Thinking Hats » (1985), traduit en français sous le titre « Les six chapeaux de la réflexion ». La fiche Multibao, l’article de Wikipédia, celui des Cahiers de l’innovation et les ressources de l’Université du Nous en détaillent les rôles, les séquences types et les usages en gouvernance partagée.</p>
<h4>Origine et principe</h4>
<p>De Bono part d’un constat&nbsp;: en réunion, chacun·e défend une position en mobilisant à la fois des faits, des émotions, des craintes et des idées, ce qui rend le débat confus et conflictuel. Les chapeaux séparent ces registres et imposent au groupe de <strong>penser en parallèle</strong>&nbsp;: tout le monde porte le même chapeau au même moment. Wikipédia précise que la méthode est une marque déposée, point que Multibao signale comme limite. Multibao rapporte un retour d’expérience à la foire aux savoirs KM4Dev (Rome, 2011)&nbsp;: des groupes novices l’ont trouvée immédiatement efficace.</p>
<h4>Les six chapeaux, précisés</h4>
<ul>
<li><strong>Blanc</strong>&nbsp;: faits, chiffres, informations manquantes, sans interprétation.</li>
<li><strong>Rouge</strong>&nbsp;: émotions, intuitions, pressentiments, exprimés sans avoir à les justifier.</li>
<li><strong>Noir</strong>&nbsp;: prudence, risques, raisons pour lesquelles cela pourrait échouer.</li>
<li><strong>Jaune</strong>&nbsp;: bénéfices, valeur, raisons pour lesquelles cela peut marcher.</li>
<li><strong>Vert</strong>&nbsp;: alternatives, idées nouvelles, provocations, sans critique.</li>
<li><strong>Bleu</strong>&nbsp;: pilotage du processus, choix de la séquence, synthèse. C’est le chapeau de l’animateur·rice.</li>
</ul>
<h4>Déroulé type</h4>
<ol>
<li>Chapeau bleu&nbsp;: poser la question, le temps imparti et la séquence choisie.</li>
<li>Chapeau blanc&nbsp;: rassembler les faits connus et les manques d’information.</li>
<li>Chapeau vert&nbsp;: générer des options ou enrichir la proposition.</li>
<li>Chapeau jaune puis noir&nbsp;: examiner les forces, puis les risques de chaque option (les Cahiers de l’innovation recommandent le jaune avant le noir pour éviter de tuer les idées trop tôt).</li>
<li>Chapeau rouge&nbsp;: un tour rapide de ressenti sur ce qui se dégage, 30 secondes par personne.</li>
<li>Chapeau bleu&nbsp;: synthèse, décision ou prochaines étapes.</li>
</ol>
<p>Les Cahiers de l’innovation proposent d’adapter la séquence au but&nbsp;: pour <strong>générer des idées</strong>, bleu, blanc, vert, jaune, noir, rouge, bleu&nbsp;; pour <strong>évaluer une proposition</strong>, bleu, rouge, jaune, noir, vert, bleu, le rouge placé d’emblée évitant que les émotions ne contaminent l’analyse. Compter deux à quatre minutes par chapeau pour un sujet simple.</p>
<h4>Rôle de l’animateur·rice</h4>
<ul>
<li>Annoncer chaque changement de chapeau et recadrer dès qu’une intervention relève d’un autre registre (« ceci est un argument chapeau noir, on y revient dans cinq minutes »).</li>
<li>Limiter strictement le temps du chapeau noir, naturellement le plus bavard.</li>
<li>Noter les contributions par couleur sur des feuilles distinctes.</li>
</ul>
<h4>Usages en gouvernance partagée</h4>
<p>L’Université du Nous range les chapeaux parmi les outils d’intelligence collective qui préparent une décision par consentement&nbsp;: un tour chapeau rouge sert de tour de ressenti, le chapeau noir permet de formuler des objections sans qu’elles soient vécues comme une attaque, et le chapeau vert alimente les bonifications d’une proposition. La limite signalée par plusieurs sources est le caractère artificiel du jeu de rôle pour certaines personnes&nbsp;: la méthode gagne à être présentée comme une discipline collective plutôt qu’un déguisement.</p>
`,

  'methode-walt-disney': `
<p>La stratégie Walt Disney a été formalisée en 1994 par Robert Dilts, l’un des fondateurs de la programmation neuro-linguistique (PNL), à partir de la façon dont Disney faisait travailler ses studios&nbsp;: selon ses collaborateurs, il y avait «&nbsp;trois Walt&nbsp;» différents, le rêveur, le réaliste et le critique. L’article Wikipédia décrit la méthode telle que Dilts l’a modélisée, tandis que la fiche de Lilian Ricaud en propose une lecture plus incarnée, où chaque rôle est associé à une posture corporelle.</p>
<h4>Origine et principe</h4>
<p>Pour Dilts, la créativité échoue quand on mélange les trois attitudes&nbsp;: on critique une idée avant de l’avoir rêvée, ou l’on rêve sans planifier. La méthode sépare donc strictement les phases dans le temps et dans l’espace, seul·e en changeant de place ou en groupe, chaque personne endossant un rôle.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li>Installer trois espaces distincts (chaises, zones au sol ou pièces), un par rôle, et nommer le problème ou le projet.</li>
<li><strong>Le rêveur</strong>&nbsp;: aucune censure, pose détendue, regard vers le haut. Questions types&nbsp;: «&nbsp;Que voulons-nous vraiment&nbsp;? À quoi ressemblerait l’idéal&nbsp;? Quels seraient les bénéfices&nbsp;?&nbsp;» La fiche Ricaud ajoute l’image d’une bonne fée qui lève tous les obstacles.</li>
<li><strong>Le réaliste</strong>&nbsp;: pieds à plat, dos droit, on transpose le rêve dans le quotidien. «&nbsp;Comment le mettre en œuvre&nbsp;? Quelles étapes, quelles ressources, quel calendrier, qui fait quoi&nbsp;?&nbsp;»</li>
<li><strong>Le critique</strong>&nbsp;: menton dans la main, la bonne fée a disparu. «&nbsp;Qu’est-ce qui pourrait mal tourner&nbsp;? Que manque-t-il&nbsp;? Comment rendre ce projet réalisable&nbsp;?&nbsp;» La critique porte sur le plan, jamais sur le rêveur, et vise à peaufiner, pas à démolir.</li>
<li>Repasser par les trois espaces autant de fois que nécessaire, jusqu’à ce que le critique n’ait plus d’objection majeure.</li>
</ol>
<h4>Rôle de l’animateur·rice</h4>
<ul>
<li>Garantir l’étanchéité des phases&nbsp;: toute objection formulée dans l’espace du rêveur est notée et renvoyée à l’espace du critique.</li>
<li>Matérialiser les rôles (chapeaux, badges, panneaux) et, en cas de blocage, renvoyer le groupe vers le rêveur.</li>
</ul>
<h4>Limites</h4>
<p>Comme toute approche issue de la PNL, la méthode est critiquée&nbsp;: les postures et directions du regard associées aux rôles n’ont pas de fondement scientifique démontré. Le cadre reste efficace pour éviter que la critique n’étouffe les idées naissantes.</p>
`,

  'mon-journal': `
<p>«&nbsp;Mon journal&nbsp;» a été adapté par Lilian Ricaud à partir d’un exercice de collage sans auteur connu, et documenté sous licence CC-BY-SA dans son recueil de formats de travail en réseau. La fiche précise les durées, le matériel et une variante tournée vers le futur qui transforme ce brise-glace en outil de projection collective.</p>
<h4>Principe</h4>
<p>Le collage sert d’objet intermédiaire&nbsp;: plutôt que de parler de soi directement, chacun·e assemble des images et des mots trouvés dans la presse. Ce détour par le découpage permet de se livrer plus facilement et d’apprendre à se connaître dans un cadre bienveillant, en mêlant librement la sphère personnelle et la sphère professionnelle.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li><strong>Préparation</strong>&nbsp;: rassembler une grande variété de magazines et de journaux, ou demander aux participant·es d’en apporter. Prévoir une feuille A3 par personne, ciseaux, colle et scotch.</li>
<li><strong>Consigne</strong> (5&nbsp;minutes)&nbsp;: expliquer que l’on représente, par des images et des textes découpés, ce que l’on aime au recto de la feuille et ce que l’on n’aime pas au verso, dans le domaine personnel ou professionnel.</li>
<li><strong>Découpage et collage</strong> (15&nbsp;minutes)&nbsp;: travail individuel et silencieux ou en musique.</li>
<li><strong>Présentation</strong> (2 à 3&nbsp;minutes par personne)&nbsp;: chacun·e montre son journal et commente ses choix. Les autres peuvent demander des précisions, mais ni juger ni critiquer.</li>
<li><strong>Affichage</strong>&nbsp;: les journaux peuvent rester au mur pendant la suite de la rencontre, comme galerie des membres du groupe.</li>
</ol>
<h4>Rôle de l’animateur·rice</h4>
<ul>
<li>Rappeler la règle de non-jugement avant les présentations et la faire respecter, le verso «&nbsp;je n’aime pas&nbsp;» pouvant toucher des sujets sensibles.</li>
<li>Tenir le temps de parole, car la présentation d’un collage s’étire vite au-delà des 3&nbsp;minutes.</li>
<li>Compter la durée totale&nbsp;: avec 12&nbsp;personnes, prévoir environ une heure en tout.</li>
</ul>
<h4>Variante&nbsp;: le souvenir du futur</h4>
<p>La fiche propose de détourner le format en exercice de prospective&nbsp;: les participant·es imaginent un futur idéal (pour le projet, l’équipe ou le territoire) et le représentent par collage avant de le présenter aux autres. Le même matériel sert alors à faire émerger une vision partagée plutôt qu’à se présenter.</p>
`,

  'panorama-des-reussites': `
<p>Le panorama des réussites est la traduction française, par Lilian Ricaud, du «&nbsp;Goals / Success Spectrum&nbsp;» conçu par Eugene Eric Kim et publié dans le domaine public sur son site Faster Than 20. Les deux ressources décrivent le même canevas, les colonnes <em>minimum</em>, <em>target</em> et <em>epic</em> devenant en français réussite minimale, visée et fabuleuse, et insistent sur son double usage&nbsp;: cadrer un projet au départ, puis en faire le bilan.</p>
<h4>Origine et principe</h4>
<p>Kim part d’un constat&nbsp;: les groupes croient être alignés sur ce que serait le succès d’un projet et découvrent trop tard qu’ils ne le sont pas. Plutôt qu’un objectif unique, le canevas décrit un continuum de scénarios, de l’échec à la réussite épique, à remplir seul·e ou en groupe, en présence (post-it) ou à distance (document partagé).</p>
<h4>Comment remplir les colonnes</h4>
<ul>
<li><strong>Minimale</strong>&nbsp;: tout ce qui doit absolument être atteint pour parler de réussite, à 100&nbsp;%.</li>
<li><strong>Visée</strong>&nbsp;: les objectifs qui tirent vers l’avant&nbsp;; en atteindre 40 à 60&nbsp;% est normal. Ne pas les glisser dans la colonne minimale.</li>
<li><strong>Fabuleuse</strong>&nbsp;: ce que l’on ne vise pas directement mais qui serait génial. Cette colonne sert à élargir les possibles&nbsp;; Kim redemande souvent «&nbsp;à quoi ressemble vraiment le succès&nbsp;?&nbsp;» pour dépasser l’autocensure.</li>
<li><strong>Échec</strong>&nbsp;: décrite après les trois autres, elle sert à vérifier la cohérence de la colonne minimale.</li>
</ul>
<h4>Conseils et vigilance</h4>
<ul>
<li>Passer de «&nbsp;plus de&nbsp;» à «&nbsp;combien&nbsp;»&nbsp;: mettre des chiffres, même sans analyse préalable, vaut mieux que rester vague.</li>
<li>Boucher les trous (si le minimum est 10&nbsp;000&nbsp;€ et l’échec 5&nbsp;000&nbsp;€, que vaut 7&nbsp;500&nbsp;€&nbsp;?) et éviter les chevauchements entre colonnes.</li>
<li>Repérer les incohérences, puis faire une «&nbsp;vérification avec les tripes&nbsp;»&nbsp;: scénarios trop faciles, trop durs, vraiment ceux qui comptent&nbsp;?</li>
<li>Raconter une histoire que n’importe qui peut visualiser, et inclure les ressentis attendus, pas seulement les livrables.</li>
<li>Terminer par les objectifs de haut niveau&nbsp;: ce que l’on veut accomplir et pourquoi.</li>
</ul>
<h4>Usage en bilan</h4>
<p>Chez Faster Than 20, le canevas ne se remplit pas une fois&nbsp;: Kim recommande de l’afficher en permanence, de fixer dès le départ une date de rétrospective, puis de le relire à la fin du projet pour situer honnêtement le résultat dans le spectre et donner du sens à ce que le groupe a appris.</p>
`,

  'parole-au-centre': `
<p>La fiche Multibao sur la gestion de parole, publiée par François Wuidard pour le Réseau Transition Belgique, replace la parole au centre dans une famille de pratiques dont le but est de faciliter une écoute et une expression équitables&nbsp;: la parole étant un lieu de pouvoir, il est important d’en cadrer la circulation. Elle décrit un protocole verbal plus formel que le simple geste de la carte, et deux autres modes complémentaires.</p>
<h4>Déroulé selon la fiche Multibao</h4>
<ol>
<li>L’animateur·rice annonce le thème de la discussion (un sujet précis ou une météo intérieure), puis déclare&nbsp;: «&nbsp;La parole est au centre.&nbsp;»</li>
<li>Toute personne qui souhaite s’exprimer se présente et s’annonce&nbsp;: «&nbsp;Je suis [prénom] et j’offre ma parole au centre.&nbsp;» Elle développe sa pensée jusqu’au bout, sans être interrompue.</li>
<li>Elle signale la fin de son intervention par une formule convenue&nbsp;: «&nbsp;J’ai dit&nbsp;» ou «&nbsp;J’ai terminé.&nbsp;» La parole revient alors au centre, disponible pour la personne suivante.</li>
<li>Pendant qu’une personne parle, les autres ne peuvent pas la couper mais peuvent réagir silencieusement avec des gestes facilitateurs (accord, désaccord, demande de clarification).</li>
<li>Quand les échanges s’épuisent, l’animateur·rice offre à son tour sa parole au centre pour faire la synthèse des propos et clore la discussion.</li>
</ol>
<h4>Deux autres modes de gestion de parole</h4>
<ul>
<li><strong>Parole tournante</strong>&nbsp;: un tour classique dans le sens horaire («&nbsp;lunaire&nbsp;») ou anti-horaire («&nbsp;solaire&nbsp;»). Chacun·e peut passer son tour, personne n’est interrompu·e, et l’on peut enchaîner plusieurs tours. En visioconférence, suivre l’ordre alphabétique des prénoms et noter dans le tchat un moyen mnémotechnique (par exemple «&nbsp;CEMP&nbsp;» pour Corine, Emmanuel, Marie, Pierre).</li>
<li><strong>Parole pop-corn</strong>&nbsp;: proche d’une conversation ordinaire, la parole saute d’une personne à l’autre, chacun·e rebondissant sur les propos précédents sans se couper. Recommandée pour un remue-méninges où l’on cherche le plus d’idées diversifiées possible.</li>
</ul>
<h4>Conseils et vigilance</h4>
<ul>
<li>Choisir le mode selon l’intention&nbsp;: parole au centre pour une expression posée et équitable, tournante pour s’assurer que tout le monde est entendu, pop-corn pour l’émergence rapide d’idées.</li>
<li>Annoncer explicitement la règle et la formule de clôture avant de commencer&nbsp;; sans «&nbsp;j’ai dit&nbsp;», les silences deviennent ambigus et les interruptions reviennent.</li>
<li>Veiller à ce que les personnes les plus réservées osent «&nbsp;prendre&nbsp;» la parole au centre&nbsp;: alterner avec un tour de parole si quelques voix dominent.</li>
</ul>
`,

  'photolangage': `
<p>Le Photolangage® est une méthode française née à Lyon dans les années 1960, créée par un groupe de psychosociologues et de formateurs dont Alain Baptiste et Claire Bélisle, d’abord pour aider des adolescents à prendre la parole en groupe, puis largement reprise en formation d’adultes, en éducation à la santé et en travail social. L’article Wikipédia décrit le dispositif complet, ses règles d’écoute et les dossiers de photographies qui en constituent le matériel.</p>
<h4>Origine et principe</h4>
<p>La méthode repose sur la médiation de l’image&nbsp;: face à une question, une photographie choisie parmi d’autres permet d’exprimer ce qui serait difficile à dire directement, et offre au groupe un support concret pour échanger. Le nom est une marque déposée&nbsp;; ses auteur·rices ont publié des dossiers thématiques de photographies en noir et blanc (généralement 48), choisies pour leurs lectures multiples. Le terme «&nbsp;photo-expression&nbsp;» désigne les pratiques dérivées.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li><strong>Préparation</strong>&nbsp;: l’animateur·rice formule une question ouverte en lien avec les préoccupations du groupe et choisit un dossier adapté. Étaler les photos sur une ou plusieurs tables, sans ordre.</li>
<li><strong>Consigne</strong>&nbsp;: énoncer la question et préciser le nombre de photos à choisir (une, parfois deux) ainsi que les règles d’écoute.</li>
<li><strong>Choix silencieux</strong> (5 à 10&nbsp;minutes)&nbsp;: chacun·e circule et choisit, sans parler ni prendre la photo, pour que plusieurs personnes puissent retenir la même image.</li>
<li><strong>Échange en groupe</strong>&nbsp;: en cercle, chaque personne montre sa photo et explique en quoi elle répond à la question. Le groupe peut ensuite poser des questions ou réagir.</li>
<li><strong>Synthèse</strong>&nbsp;: l’animateur·rice reprend les thèmes apparus et, le cas échéant, ouvre sur la suite du travail.</li>
</ol>
<h4>Règles d’écoute et rôle de l’animateur·rice</h4>
<ul>
<li>Parler en «&nbsp;je&nbsp;»&nbsp;: on commente son propre choix, pas celui des autres.</li>
<li>Aucune interprétation du choix d’autrui, aucun jugement, pas de débat sur la «&nbsp;bonne&nbsp;» lecture d’une image.</li>
<li>L’animateur·rice garantit le cadre, redistribue la parole et ne s’érige pas en interprète. Dans le courant psychanalytique de groupe (Claudine Vacheret), il ou elle attend aussi les résonances entre les récits.</li>
</ul>
<h4>Conditions et limites</h4>
<p>Le format fonctionne au mieux avec 8 à 15&nbsp;personnes et demande de une heure trente à deux heures. Sans règles d’écoute explicites, l’exercice glisse vers l’interprétation sauvage&nbsp;; avec un matériel pauvre ou univoque, les choix se répètent.</p>
`,

  'pomodoro-synchrone': `
<p>Le pomodoro synchrone a été décrit par Laurent Marseault, du collectif Outils-Réseaux, comme une adaptation collective de la technique Pomodoro inventée par Francesco Cirillo à la fin des années 1980 (le nom vient de son minuteur de cuisine en forme de tomate). La fiche de Lilian Ricaud en expose le fondement, le rituel de base et deux options pour le vivre à plusieurs dans un même lieu.</p>
<h4>Pourquoi synchroniser</h4>
<p>La fiche part d’un constat issu des recherches sur l’attention&nbsp;: il faut environ 15&nbsp;minutes pour retrouver le niveau de concentration que l’on avait avant une interruption. Dans un espace partagé où l’on est dérangé toutes les 10&nbsp;minutes, on ne produit donc rien de profond. En décidant ensemble des moments «&nbsp;hors flux&nbsp;» (concentration, pas d’interruption) et des moments «&nbsp;en flux&nbsp;» (échanges, questions, discussions), le groupe protège le travail individuel sans sacrifier la coopération.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li>En début de journée ou de session, décider collectivement ce que chacun·e va faire et répartir les temps en flux et hors flux.</li>
<li>Couper notifications, sonneries et messageries&nbsp;; annoncer le début du cycle.</li>
<li>Lancer un minuteur visible de tous pour 25&nbsp;minutes de travail individuel, sans se solliciter.</li>
<li>À la sonnerie, 5&nbsp;minutes de pause collective&nbsp;: c’est là que les questions, demandes d’aide et bavardages reprennent.</li>
<li>Enchaîner plusieurs séries (classiquement quatre), puis prendre une pause plus longue de 15 à 30&nbsp;minutes.</li>
</ol>
<h4>Options proposées par la fiche</h4>
<ul>
<li><strong>Rendre le temps visible</strong>&nbsp;: afficher le compte à rebours sur un écran ou un minuteur mural, pour que chacun·e sache quand les autres redeviennent «&nbsp;dérangeables&nbsp;».</li>
<li><strong>Playlist synchrone</strong>&nbsp;: une même musique diffusée pendant le cycle signale le mode hors flux et marque la fin du temps de concentration.</li>
<li>Le format se combine avec le «&nbsp;co-pomodoro&nbsp;», où l’on travaille sur une tâche commune, et il se transpose à distance avec un minuteur partagé en visio.</li>
</ul>
<h4>Conseils et vigilance</h4>
<ul>
<li>La règle doit être consentie par tous avant de commencer&nbsp;: un seul membre qui continue à interrompre fait tomber le dispositif.</li>
<li>Respecter la durée des pauses, courtes mais réelles&nbsp;: se lever, bouger, ne pas enchaîner directement.</li>
<li>Ne pas rallonger un cycle «&nbsp;parce qu’on est lancé&nbsp;»&nbsp;: la régularité est ce qui rend les interruptions prévisibles pour le groupe.</li>
</ul>
`,

  'presentation-croisee': `
<p>Les présentations croisées sont un format très répandu dont la source originelle est inconnue&nbsp;; la fiche de Lilian Ricaud, sous licence CC-BY-SA, le documente comme alternative aux longs tours de table de début de rencontre, où chacun·e se présente de façon conventionnelle et où l’attention s’érode vite. Elle précise le minutage et une option pour les grands groupes.</p>
<h4>Principe</h4>
<p>En présentant l’autre plutôt que soi-même, on écoute vraiment pendant l’entretien, on parle de son·sa partenaire avec plus de générosité que l’on ne parlerait de soi, et le groupe entend deux fois plus de choses en deux fois moins de temps. Le format crée aussi un premier lien de confiance en binôme avant l’exposition au grand groupe.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li>Former des binômes, de préférence entre personnes qui ne se connaissent pas. En cas de nombre impair, faire un trio où les rôles tournent.</li>
<li>Donner la consigne d’entretien, éventuellement guidée par deux ou trois questions&nbsp;: «&nbsp;Qu’est-ce qui vous amène ici&nbsp;? Qu’avez-vous envie que le groupe sache de vous&nbsp;? Un détail inattendu&nbsp;?&nbsp;»</li>
<li>Première minute&nbsp;: l’un·e interroge, l’autre répond. L’animateur·rice tient le temps et annonce le changement.</li>
<li>Deuxième minute&nbsp;: inverser les rôles.</li>
<li>Revenir en cercle&nbsp;: chaque personne présente son·sa partenaire au groupe, en 30&nbsp;secondes à une minute.</li>
</ol>
<h4>Option grand groupe</h4>
<p>Au-delà d’une vingtaine de personnes, la restitution devient longue. La fiche propose de demander de présenter l’autre en deux ou trois mots seulement&nbsp;: l’exercice de synthèse force à retenir l’essentiel et produit souvent un effet plus marquant que les présentations complètes.</p>
<h4>Conseils et vigilance</h4>
<ul>
<li>Annoncer que la personne présentée pourra corriger ou compléter en une phrase&nbsp;: cela détend et évite les contresens.</li>
<li>Rester strict sur la minute d’entretien&nbsp;; c’est la contrainte qui donne le rythme.</li>
<li>Prévoir environ 5&nbsp;minutes d’entretien plus une minute de restitution par personne (soit 20 à 25&nbsp;minutes pour 15&nbsp;personnes).</li>
<li>Le format se prête bien à la visio en salles de sous-groupes à deux, puis retour en plénière.</li>
</ul>
`,

  'presentations-eclairs': `
<p>La fiche de Lilian Ricaud présente les présentations éclair (Lightning Talks) comme une famille de formats fondés sur deux «&nbsp;patterns&nbsp;»&nbsp;: la boîte de temps et la contrainte créative. Elle détaille trois variantes de marque, Ignite, Pecha Kucha et Ma thèse en 180 secondes, et précise ce que le format ne sait pas faire.</p>
<h4>Principe</h4>
<p>Le défilement automatique des diapositives retire à l’orateur·rice le contrôle du temps&nbsp;: impossible de s’égarer dans des parenthèses ou de déborder sur les suivants. La préparation devient un exercice d’écriture serrée, et le public découvre dix ou quinze sujets en une heure. En revanche, le format n’est pas conçu pour l’interactivité&nbsp;: les échanges se font après, en pause ou dans un autre format.</p>
<h4>Les trois variantes décrites</h4>
<ul>
<li><strong>Ignite</strong>&nbsp;: 20&nbsp;diapositives affichées 15&nbsp;secondes chacune, soit exactement 5&nbsp;minutes. Né dans les communautés tech américaines, le format vise une prestation dynamique et convaincante&nbsp;; la fiche renvoie à l’Ignite Talk de Sébastien Paquet, «&nbsp;How to become a Culture Hacker&nbsp;», comme exemple.</li>
<li><strong>Pecha Kucha</strong> («&nbsp;bruit de la conversation&nbsp;» en japonais)&nbsp;: 20&nbsp;images, 20&nbsp;secondes chacune, soit 6&nbsp;minutes&nbsp;40. Créé à Tokyo par des architectes pour que des designers présentent leur travail et leur processus de création lors de soirées régulières.</li>
<li><strong>Ma thèse en 180 secondes</strong>&nbsp;: 3&nbsp;minutes et une seule diapositive, pour expliquer une recherche à un public profane. Inspiré du Three Minute Thesis de l’université du Queensland, repris au Québec par l’Acfas en 2012 puis étendu à la francophonie.</li>
</ul>
<h4>Déroulé pour l’organisation</h4>
<ol>
<li>Fixer la variante et la communiquer aux intervenant·es plusieurs semaines à l’avance, avec un gabarit de diaporama.</li>
<li>Collecter les fichiers avant la session et régler le minutage automatique dans un seul diaporama enchaîné.</li>
<li>Prévoir une répétition technique&nbsp;: les intervenant·es ne touchent pas à l’ordinateur pendant leur passage.</li>
<li>Enchaîner les présentations sans questions entre elles, avec un·e maître·sse de cérémonie qui annonce chacune.</li>
<li>Ouvrir ensuite un temps informel ou un café projet pour les échanges.</li>
</ol>
<h4>Conseils et vigilance</h4>
<ul>
<li>Pousser à répéter chronomètre en main&nbsp;: la plupart des échecs viennent d’un texte trop long pour la diapo.</li>
<li>Privilégier des images plein écran et peu de texte, le public n’a pas le temps de lire.</li>
<li>Choisir une variante de marque peut stimuler une communauté de pratique, à condition d’en respecter la règle exacte.</li>
<li>Formats voisins&nbsp;: l’elevator pitch et le café projet pour approfondir ensuite.</li>
</ul>
`,

  'respiration-collective': `
<p>La respiration collective est inspirée de la pratique «&nbsp;Forward Stance&nbsp;» (ou Courageous Practice) développée par Eveline Shen et l’organisation militante Forward Together, aux États-Unis, qui intègre des exercices corporels issus des arts martiaux dans le travail de mobilisation. Eugene Eric Kim l’a rapportée dans ses ateliers sur la collaboration, et Lilian Ricaud l’a traduite. La fiche détaille le déroulé, le rôle des observateur·rices et surtout la leçon à tirer de l’exercice.</p>
<h4>Origine et intention</h4>
<p>Chez Forward Together, le corps est un outil de changement&nbsp;: la posture, la respiration et le mouvement partagé renforcent la capacité d’un groupe à agir ensemble. Kim utilise l’exercice pour illustrer physiquement ce qu’est l’alignement d’un groupe, bien plus parlant qu’une discussion abstraite sur le sujet.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li>Debout en cercle, prendre ensemble quelques respirations profondes pour s’échauffer et s’accorder.</li>
<li>Ajouter le mouvement&nbsp;: lever les mains jusqu’à l’angle droit (avant-bras à l’horizontale) à l’inspiration, les redescendre à l’expiration.</li>
<li>Chercher à respirer et bouger en alignement les uns avec les autres, sans que personne ne donne le tempo.</li>
<li>Désigner deux ou trois personnes qui sortent du cercle pour observer et rendre compte ensuite du degré réel de synchronisation.</li>
<li>Varier les conditions&nbsp;: en ligne, en cercle avec certain·es tourné·es vers l’extérieur, avec ou sans meneur·se désigné·e, puis comparer.</li>
<li>Débriefer brièvement&nbsp;: qu’est-ce qui a aidé ou gêné l’alignement&nbsp;? Qu’est-ce que cela dit de notre façon de collaborer&nbsp;?</li>
</ol>
<h4>Ce que l’exercice enseigne</h4>
<ul>
<li>Respirer ensemble de façon alignée est étonnamment difficile, surtout quand on ne se voit pas tous.</li>
<li>Pratiquer développe des stratégies de synchronisation (écouter, ralentir, regarder) transposables au-delà de la respiration.</li>
<li>L’alignement parfait est rarement atteint, mais quand tout le monde essaie, le groupe est «&nbsp;très bon&nbsp;». «&nbsp;Très bon&nbsp;» est un objectif valable pour tout groupe qui collabore.</li>
</ul>
<h4>Conseils et vigilance</h4>
<ul>
<li>Durée courte, 5 à 10&nbsp;minutes&nbsp;: en ouverture de rencontre, après une pause ou avant une décision importante.</li>
<li>Rester sur des mouvements accessibles à tous les corps&nbsp;; proposer de rester assis·e si besoin.</li>
<li>Annoncer que l’exercice n’a rien de spirituel ni de performance&nbsp;: certaines personnes sont mal à l’aise avec le travail corporel en groupe.</li>
</ul>
`,

  'retrospective-a-4-questions': `
<p>La fiche de Lilian Ricaud s’appuie sur le format «&nbsp;post-Motorola&nbsp;» pratiqué par la coopérative québécoise Percolab et sur plusieurs articles issus de l’agilité logicielle (InfoQ, All the Responsibility, Flow Motion Café), où la rétrospective est un rituel d’équipe à la fin de chaque itération. Elle décrit un dispositif mural à quadrants, trois jeux de questions alternatifs et une règle de dosage des améliorations.</p>
<h4>Origine</h4>
<p>Le nom «&nbsp;post-Motorola&nbsp;» renvoie à une pratique de débriefing de l’entreprise Motorola, reprise par Percolab en clôture de ses rencontres. Dans les méthodes agiles, la rétrospective porte sur la façon de travailler ensemble, pas sur le produit.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li>Tracer au mur un quadrant et nommer les quatre zones&nbsp;: ce qui s’est bien passé, ce qui pourrait être amélioré, ce que j’ai appris, ce que je souhaite pour la prochaine fois.</li>
<li>Rappeler la période ou l’action évaluée, puis laisser un temps de réflexion silencieuse (2 à 5&nbsp;minutes).</li>
<li>Chacun·e écrit ses retours sur des post-it, une idée par post-it.</li>
<li>Partager&nbsp;: coller les post-it en silence au fur et à mesure, ou les présenter à tour de rôle, puis regrouper les idées proches.</li>
<li>Choisir 3 à 5 éléments de correction, pas davantage&nbsp;: une liste plus longue ne sera pas suivie d’effet.</li>
<li>Noter qui s’en occupe et fixer la date de la prochaine rétrospective.</li>
</ol>
<h4>Trois autres jeux de questions</h4>
<ul>
<li><strong>Orienté action</strong>&nbsp;: ce qui s’est bien passé (continuer), ce qui pourrait être amélioré (ça a marché, mais mieux est possible), ce qui a mal fonctionné (ne pas refaire), le focus pour la prochaine période (une ou deux choses).</li>
<li><strong>Orienté apprentissage</strong>&nbsp;: ce qui s’est bien passé, ce qui ne s’est pas si bien passé, ce que j’ai appris, ce qui m’étonne encore.</li>
<li><strong>Orienté vécu</strong>&nbsp;: ce que j’ai aimé et ce qui s’est passé pour moi, ce que cela signifie ou a changé pour moi, quelles possibilités ou questions s’ouvrent, une suggestion ou envie d’amélioration.</li>
</ul>
<h4>Conseils et vigilance</h4>
<ul>
<li>Compter 30 à 60&nbsp;minutes&nbsp;; au-delà de 10&nbsp;personnes, collecter en sous-groupes.</li>
<li>Commencer par le positif et par le silence, pour que les voix dominantes ne cadrent pas la discussion.</li>
<li>Formuler les points en «&nbsp;je&nbsp;» ou sur les pratiques, jamais contre une personne.</li>
<li>Relire les décisions de la rétrospective précédente au début de la suivante&nbsp;: c’est ce qui rend le rituel crédible.</li>
</ul>
`,

  'reunion-en-marchant': `
<p>La fiche Cooptic consacrée à la « réunion en marchant » reprend la pratique du <em>walking meeting</em> popularisée par les dirigeants de la Silicon Valley, tout en rappelant qu’elle est bien plus ancienne&nbsp;: Aristote enseignait déjà en marchant avec ses élèves, d’où le nom d’école « péripatéticienne ». La ressource précise les bénéfices attendus, le format à privilégier, la façon de garder une trace des échanges et les contraintes à anticiper.</p>
<h4>Ce que la marche apporte</h4>
<ul>
<li>Le mouvement stimule la pensée&nbsp;: une étude de l’université Stanford (2014) mesure une hausse nette de la production d’idées pendant et juste après une marche.</li>
<li>Marcher côte à côte supprime le face-à-face et la table de réunion&nbsp;: la hiérarchie s’estompe, la parole se libère et les silences sont moins pesants.</li>
<li>Le format rompt la sédentarité des journées de travail, oxygène le groupe et offre une respiration dans un programme chargé.</li>
</ul>
<h4>Déroulé pas à pas</h4>
<ol>
<li>Annoncer le format à l’avance pour que chacun·e vienne équipé·e (chaussures, vêtements adaptés) et repérer un parcours en boucle, sûr, calme, de préférence dans la nature ou un espace vert.</li>
<li>Choisir un sujet unique par marche&nbsp;: le format convient aux échanges exploratoires, aux retours d’expérience, aux entretiens en tête-à-tête ou aux conversations délicates, pas aux décisions qui exigent des documents.</li>
<li>Constituer les binômes (ou trios au maximum) et fixer la durée, de 10 à 25 minutes, jusqu’à 45 minutes pour un sujet de fond.</li>
<li>Marcher et discuter librement&nbsp;; l’animateur·rice fixe l’heure et le lieu du retour.</li>
<li>De retour, consacrer un temps en grand groupe à partager ce qui est ressorti de chaque binôme.</li>
</ol>
<h4>Prise de notes</h4>
<p>Marcher empêche d’écrire&nbsp;: la fiche conseille de noter les idées fortes à la fin de la marche ou lors de courtes pauses, d’utiliser un dictaphone ou la saisie vocale d’un téléphone, ou de désigner dans chaque binôme la personne qui restituera au groupe.</p>
<h4>Contraintes et vigilance</h4>
<ul>
<li>Vérifier l’accessibilité du parcours pour les personnes à mobilité réduite et prévoir une alternative assise en extérieur.</li>
<li>Tenir compte de la météo, du bruit et de la circulation&nbsp;: un trottoir le long d’une route tue la conversation.</li>
<li>Éviter les sujets confidentiels dans les lieux fréquentés.</li>
<li>Au-delà de trois personnes, le groupe s’étire et l’échange se fragmente&nbsp;: mieux vaut multiplier les binômes.</li>
</ul>
`,

  'souvenir-du-futur': `
<p>La fiche de Lilian Ricaud (travail-en-réseau, CC BY-SA) présente les « souvenirs du futur » comme une adaptation du jeu <em>Remember the Future</em> des Innovation Games, repris par Stéphane Langlois puis affiné lors d’ateliers comme la minga de Brest. Elle détaille la formulation de la consigne, le rythme des étapes, plusieurs variantes et un déroulé chronométré pour quarante personnes.</p>
<h4>Principe</h4>
<p>Raconter au passé un projet déjà réussi le rend tangible et crée de l’empathie avec le sujet. La diversité des angles (personnel, technique, théorique, pratique) produit une sorte de mini cahier des charges du projet commun.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li>Concevoir la question avec soin&nbsp;: parler de « souvenirs » et non de « rêves » du futur, et exiger le passé. « À quoi a servi le produit&nbsp;? » ne donne pas du tout les mêmes réponses que « À quoi devrait-il servir&nbsp;? ». La période (6 jours ou 6 mois après la fin du projet) s’ajuste selon l’objectif.</li>
<li>Réflexion individuelle ou en petits groupes, 5 à 15 minutes, sur papier ou post-it. Après une première salve d’idées vient souvent un arrêt&nbsp;; l’animateur·rice relance avec des exemples, car certaines idées arrivent tard.</li>
<li>Mise en commun en tour de table, chacun·e présentant ses souvenirs sans être interrompu·e. Les post-it sont collés sur un mur ou saisis dans un pad projeté pour en garder une trace.</li>
<li>Regroupement en catégories, négocié avec les participant·es, qui sert ensuite de base à la mise en œuvre concrète. Les souvenirs bruts sont restitués tels quels en complément.</li>
</ol>
<h4>Variantes décrites dans la fiche</h4>
<ul>
<li><strong>À distance</strong> en visioconférence, avec un·e scribe qui note au fil de l’eau, ce qui libère l’animateur·rice et pallie un son médiocre.</li>
<li><strong>« Aidez-moi à me rappeler… »</strong> pour cibler des actions concrètes&nbsp;: « Aidez-moi à me rappeler comment nous avons convaincu les partenaires. »</li>
<li><strong>Cauchemars du futur</strong>&nbsp;: se rappeler ce qui a échoué (« Qu’est-ce qui a fait que nous avons échoué&nbsp;? ») pour repérer les écueils.</li>
<li><strong>Grand groupe</strong> (40 personnes, 2 h)&nbsp;: consigne datée (« Nous sommes le… une année s’est écoulée… »), 5 min seul·e, 15 min par trois pour fusionner et éliminer les doublons, 10 à 15 min par six, puis restitution de 5 min par groupe dans une matrice de type mandala holistique, sans discuter les choix. Un·e gardien·ne du temps est indispensable et il faut prévoir du battement.</li>
</ul>
`,

  'sprint-ecriture': `
<p>Deux fiches décrivent des sprints d’écriture assez différents&nbsp;: celle de Lilian Ricaud (travail-en-réseau), créateur du format par questions et rôles tournants utilisé en formation, et celle du Centre des pratiques de la coopération (cpcoop), issue des rencontres Moustic 2015 à Supagro Florac et inspirée des <em>book sprints</em> d’Adam Hyde. Les deux partagent l’unité de temps et de lieu, un pad partagé et des temps courts et cadencés.</p>
<h4>Version Lilian Ricaud&nbsp;: questions et rôles tournants</h4>
<ol>
<li>Définir 3 à 5 questions (15 à 30 min), par exemple&nbsp;: « Quelles seraient pour vous les bonnes pratiques pour mener une réunion&nbsp;? », « …pour choisir un outil collaboratif&nbsp;? ».</li>
<li>Distribuer trois rôles&nbsp;: un·e animateur·rice qui pose la question, un·e scribe qui note (aidé·e par le groupe sur le pad), un·e gardien·ne du temps. Les rôles tournent à chaque question et le·la facilitateur·rice redevient participant·e.</li>
<li>Échanger 10 à 15 min par question.</li>
<li>Finaliser (10 à 15 min)&nbsp;: corriger l’orthographe, ajouter liens, titre, mots-clés et licence libre, mettre en page, publier.</li>
</ol>
<p>Faire tourner les rôles évite que ce soit toujours les mêmes qui travaillent et crée de l’empathie pour celles et ceux qui sont moins à l’aise. Un rôle d’observateur·rice du processus est possible&nbsp;; un rôle d’« expert·e » arbitre n’est conseillé que dans des contextes très techniques.</p>
<h4>Version cpcoop&nbsp;: écrire un texte en binômes</h4>
<p>Conditions&nbsp;: 4 à 12 personnes en nombre pair, un ordinateur connecté par personne, un pad, post-it et paperboard, deux heures minimum. Règles&nbsp;: on s’écoute, et on ne supprime jamais de texte, on le barre pour garder la trace.</p>
<ol>
<li>Brise-glace « partage d’ascenseur »&nbsp;: par deux, 1 min chacun·e sur une expérience d’écriture collaborative, répété trois fois.</li>
<li>Définir le sujet, l’objectif et surtout le lectorat visé.</li>
<li>Champ lexical&nbsp;: 5 min en silence, un mot-clé par post-it.</li>
<li>Regrouper les mots-clés en thématiques, qui deviennent les titres de chapitres du document partagé.</li>
<li>Co-écrire les chapitres en binômes, 4 tours de 10 min, les binômes tournant et relisant le travail des autres.</li>
<li>Cercle de fermeture&nbsp;: quelle suite donner au travail&nbsp;?</li>
</ol>
<h4>Limites signalées</h4>
<ul>
<li>Il faut accepter le compromis, ce qui ne convient pas à tout le monde.</li>
<li>Aucune garantie d’obtenir un texte finalisé en séance&nbsp;: le temps de finalisation est indispensable.</li>
<li>La version numérique dépend de la qualité de la connexion internet.</li>
</ul>
`,

  'tables-de-decouverte': `
<p>La fiche de Lilian Ricaud (travail-en-réseau, CC BY-SA) documente les Tables de découverte telles qu’elles ont été pratiquées aux rencontres participatives Moustic en 2013, où des projets comme Museomix ont été présentés. Elle précise la logistique, le rythme des rotations et l’intérêt du format pour les porteur·ses de projets.</p>
<h4>Logistique</h4>
<ul>
<li>Une table et 5 à 10 chaises par projet, dans une même salle ou dans plusieurs salles proches.</li>
<li>Une liste générale indiquant pour chaque projet le numéro de table, la salle ou le bâtiment, pour que les participant·es se repèrent.</li>
<li>Un panneau d’affichage près de chaque table, portant le nom du projet.</li>
<li>En option, des prises électriques et un vidéoprojecteur pour les supports numériques&nbsp;; mais une présentation peut tout aussi bien s’appuyer sur des documents papier ou un prototype à manipuler.</li>
</ul>
<h4>Déroulé pas à pas</h4>
<ol>
<li>Afficher le programme global et laisser les participant·es choisir leur première table.</li>
<li>Le·la porteur·se présente son projet en quelques minutes, puis ouvre les questions et la discussion&nbsp;: c’est ce temps d’échange qui distingue le format d’une suite de pitchs.</li>
<li>Au bout d’un quart d’heure, la cloche sonne&nbsp;: tout le monde change de table.</li>
<li>Répéter 4 à 6 rotations&nbsp;; au-delà, la fatigue des présentateur·rices l’emporte.</li>
</ol>
<h4>Rôle de l’animateur·rice et conseils</h4>
<ul>
<li>Tenir la cloche et le temps avec rigueur, sans quoi les rotations se désynchronisent entre les tables.</li>
<li>Prévenir les porteur·ses qu’ils enchaînent plusieurs présentations face à un public frais, avec à peine le temps de souffler, et les inviter à varier leur façon de présenter d’une rotation à l’autre pour améliorer leur pitch.</li>
<li>Veiller à l’équilibre des tables&nbsp;: rediriger les participant·es si une table est bondée et une autre vide.</li>
<li>Le format demande très peu de moyens et permet de découvrir de nombreux projets en un temps court, dans une ambiance conviviale propice à l’échange.</li>
</ul>
`,

  'tous-dans-le-meme-bateau': `
<p>La fiche de Lilian Ricaud et Stéphane Langlois (travail-en-réseau, CC BY-SA) présente « Tous dans le même bateau » comme l’adaptation française du jeu <em>Speed Boat</em> des Innovation Games, modifié par Stéphane Langlois pour son projet Gymkhana, puis déclinée pour les grands groupes par Lilian Ricaud. Elle détaille le cadre, de nombreuses options et des variantes d’usage.</p>
<h4>Origine et intérêt</h4>
<p>Dans la version originale, le bateau est un hors-bord et l’on ne demande que des ancres. La variante française le remplace par un voilier, ce qui permet d’ajouter des « vents favorables ». L’écriture sur post-it évite l’avalanche de récriminations&nbsp;: les gros problèmes sortent, les petits disparaissent d’eux-mêmes.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li>Réunir 3 à 15 personnes (un·e facilitateur·rice pour un ou deux groupes), un paperboard, des marqueurs, des post-it de couleurs, des gommettes en option&nbsp;; compter 20 à 40 minutes, jusqu’à 2 h pour une rétrospective.</li>
<li>Dessiner le bateau, ses ancres, un vent arrière, un port d’arrivée qui représente l’objectif, éventuellement une île. Demander à un·e participant·e de dessiner renforce l’appropriation.</li>
<li>Raconter l’histoire&nbsp;: « nous montons dans ce bateau nommé… pour rejoindre le port… ». Temps de réflexion individuelle, une ancre par post-it.</li>
<li>Chacun·e vient coller ses ancres sous le bateau en expliquant brièvement&nbsp;; plus l’ancre est profonde, plus le frein est important.</li>
<li>Même séquence pour les vents favorables derrière la voile&nbsp;; les idées hors cadre vont sur l’île.</li>
<li>Regrouper les post-it similaires sans les fusionner (les formulations différentes précisent le problème), puis prioriser par vote à points.</li>
</ol>
<h4>Variantes d’usage</h4>
<ul>
<li>Rétrospective&nbsp;: le port représente la période écoulée, l’île accueille les éléments ambigus (l’argent est-il frein ou moteur&nbsp;?).</li>
<li>Amorce de projet ou test d’une hypothèse pour identifier risques et opportunités.</li>
<li>Grand groupe de 30&nbsp;: deux bateaux, 2 post-it par personne, 5 min de réflexion, 1 min de présentation chacun·e, 15 à 20 min pour les ancres puis 20 min pour les voiles.</li>
<li>Enquête élargie&nbsp;: distribuer le dessin en A3 avec les consignes pour recueillir les avis d’une communauté plus large, puis compiler et publier les retours.</li>
</ul>
<h4>Conseils et vigilance</h4>
<ul>
<li>Ne jamais répondre aux critiques, même fausses&nbsp;: on collecte, on ne se justifie pas. Remercier et annoncer un retour.</li>
<li>Faire travailler des sous-groupes sur des parties du dessin clive&nbsp;; préférer l’ensemble.</li>
<li>Numéroter les post-it, photographier le résultat et le conserver.</li>
</ul>
`,

  'tri-par-affinites': `
<p>L’article Wikipédia « Diagramme KJ » retrace l’origine de la méthode chez l’anthropologue japonais Jiro Kawakita, tandis que la fiche « Affinity Map » de Gamestorming (Dave Gray, Sunni Brown et James Macanufo) en donne une version jouable en atelier, avec nombre de participant·es, durée et consignes. Ensemble, elles complètent la carte sur l’origine, le déroulé fin et les points de vigilance.</p>
<h4>Origine</h4>
<p>Jiro Kawakita conçoit la méthode dans les années 1960 pour organiser les masses de données qualitatives rapportées de ses enquêtes de terrain, notamment au Népal. Baptisée « méthode KJ » d’après ses initiales, elle est ensuite intégrée aux « sept nouveaux outils de la qualité » diffusés par l’Union japonaise des scientifiques et ingénieurs. Wikipédia souligne qu’elle fait appel à l’intuition plus qu’à la logique&nbsp;: les cartes se regroupent par ressemblance ressentie, avant toute analyse.</p>
<h4>Déroulé pas à pas (Gamestorming)</h4>
<p>De 2 à 20 joueur·ses, pour 30 à 90 minutes, devant un mur ou une grande table.</p>
<ol>
<li>Poser la question de départ et laisser chacun·e écrire ses idées, une par post-it, en grosses lettres lisibles.</li>
<li>Afficher tous les post-it au hasard sur le mur.</li>
<li>Trier en silence&nbsp;: tout le monde déplace les post-it pour rapprocher ceux qui se ressemblent. Un post-it peut changer de groupe plusieurs fois&nbsp;; s’il appartient à deux groupes, on le duplique.</li>
<li>Quand les mouvements s’arrêtent, nommer chaque groupe par un titre écrit sur un post-it d’une autre couleur.</li>
<li>Discuter les groupes, repérer les thèmes dominants et les orphelins, puis prioriser (par exemple avec des gommettes).</li>
</ol>
<h4>Ce qu’ajoute la version Wikipédia</h4>
<ul>
<li>Formuler le problème sous forme de question avant de collecter les faits ou idées.</li>
<li>Après le premier niveau de regroupement, regrouper les groupes eux-mêmes et tracer des liens (causalité, opposition) entre eux pour obtenir un diagramme hiérarchisé.</li>
<li>Viser des groupes de taille raisonnable&nbsp;; un groupe énorme cache souvent plusieurs idées distinctes.</li>
</ul>
<h4>Conseils et vigilance</h4>
<ul>
<li>Le silence lors du tri évite que les personnes les plus bavardes imposent leur classement.</li>
<li>Ne pas préparer de catégories à l’avance&nbsp;: elles doivent émerger des données.</li>
<li>Le titre d’un groupe est une phrase qui résume le contenu, pas un simple mot-clé.</li>
<li>Photographier le résultat et le retranscrire rapidement, les post-it tombent.</li>
</ul>
`,

  'vote-a-cinq-doigts': `
<p>La fiche du Centre des pratiques de la coopération (cpcoop) reprend la pratique de l’équipe de soutien du Réseau de transition Wallonie-Bruxelles, publiée par François Wuidard. Elle précise l’échelle à cinq niveaux utilisée pour évaluer une réunion, une animation ou une formation, et deux façons de recueillir les avis qui accompagnent les votes.</p>
<h4>L’échelle proposée</h4>
<ul>
<li><strong>5 doigts</strong>&nbsp;: excellent, un super moment, j’y ai pris beaucoup de plaisir et j’ai envie de continuer et de participer.</li>
<li><strong>4 doigts</strong>&nbsp;: bon, un moment au-dessus de la moyenne pour ce type de rencontre.</li>
<li><strong>3 doigts</strong>&nbsp;: neutre.</li>
<li><strong>2 doigts</strong>&nbsp;: utile mais pas extraordinaire, cela aurait pu être vraiment mieux.</li>
<li><strong>1 doigt</strong>&nbsp;: inutile, je n’ai rien appris, j’ai perdu mon temps ou ma motivation.</li>
</ul>
<p>Le poing fermé peut servir à celles et ceux qui ne souhaitent pas se prononcer. Cette échelle est proche du ROTI (<em>Return On Time Invested</em>), largement utilisé dans les équipes agiles pour mesurer le « retour sur temps investi » d’une réunion.</p>
<h4>Déroulé pas à pas</h4>
<ol>
<li>Rappeler clairement l’échelle, en l’affichant si possible, et poser une question unique.</li>
<li>Première option&nbsp;: tout le monde vote en même temps à main levée, puis un tour de parole permet à chacun·e de justifier son vote par une critique argumentée.</li>
<li>Seconde option&nbsp;: le vote se fait en parole tournante, chacun·e montrant ses doigts et expliquant son avis à son tour.</li>
<li>Noter la répartition des votes (par exemple en pourcentage par niveau) pour la restituer et suivre l’évolution d’une séance à l’autre.</li>
</ol>
<h4>Conseils et vigilance</h4>
<ul>
<li>La fiche est directe&nbsp;: si une majorité de 1 et de 2 apparaît, réagissez et modifiez le format de vos réunions.</li>
<li>Le vote simultané limite l’effet de conformité&nbsp;; en parole tournante, les premiers votes influencent les suivants, mais les explications sont plus riches.</li>
<li>Les notes basses sont précieuses&nbsp;: demander en priorité à ces personnes ce qui aurait rendu le moment utile.</li>
<li>Le geste reste une mesure grossière du ressenti, à compléter par une discussion si l’enjeu est important.</li>
</ul>
`,

  'vote-a-points': `
<p>La fiche « Vote pondéré, ou rendre compte de la diversité » de Thomas Wolff (Centre des pratiques de la coopération, CC BY-SA) replace le vote à gommettes dans une famille de méthodes de pondération qui servent à prioriser, mais aussi à rendre visible la diversité des positions d’un groupe. Elle en compare trois et en expose honnêtement les limites.</p>
<h4>Méthode par gommettes, dite « agglutination »</h4>
<ol>
<li>Faire émerger des propositions par brainstorming, puis regrouper les propositions similaires.</li>
<li>Remettre à chaque personne un nombre fixe de gommettes&nbsp;; la fiche prend l’exemple de 10 gommettes par personne pour 10 propositions.</li>
<li>Chacun·e colle librement&nbsp;: une gommette par proposition ou les dix sur une seule.</li>
<li>Compter une fois que tout le monde s’est prononcé&nbsp;: les propositions les plus garnies sont jugées prioritaires.</li>
</ol>
<p>Avantages&nbsp;: un vote facile, rapide et agréable. Inconvénient majeur&nbsp;: le résultat ne reflète pas vraiment le positionnement de chaque individu. Sur un groupe de 100 personnes, une proposition primordiale pour 3 d’entre elles peut passer derrière une proposition où les votant·es sont « juste concerné·es ».</p>
<h4>Méthode par pondération chiffrée</h4>
<p>Chaque personne dispose d’un nombre de points (5 pour 5 propositions) qu’elle répartit par écrit&nbsp;: Jean donne 3 points à la proposition 1 et 2 à la proposition 3, Hélène met ses 5 points sur la proposition 3. Le total désigne la priorité, mais surtout les choix de chacun·e restent visibles au lieu d’être noyés dans la masse, ce qui permet de repérer les minorités très attachées à une option.</p>
<h4>Vote à cinq doigts</h4>
<p>La fiche présente aussi le vote à main levée gradué (poing fermé&nbsp;: ne se prononce pas, de 1 doigt « pas du tout d’accord » à 5 doigts « totalement d’accord »), dont les résultats peuvent être restitués en pourcentages&nbsp;: « 10 % ne se prononcent pas, 20 % plutôt pas d’accord, 58 % plutôt d’accord, 12 % totalement d’accord ».</p>
<h4>Conseils et vigilance</h4>
<ul>
<li>Limiter le nombre de gommettes à environ un tiers du nombre de propositions pour forcer les arbitrages.</li>
<li>Faire voter tout le monde en même temps, ou masquer les premiers votes, pour éviter l’effet d’entraînement vers les propositions déjà garnies.</li>
<li>Annoncer à l’avance ce que signifie le résultat&nbsp;: décision ferme ou simple indication pour la discussion.</li>
<li>Regarder la dispersion autant que le total&nbsp;: une proposition qui divise mérite un débat avant d’être tranchée.</li>
</ul>
`,

  'world-cafe': `
<p>Le World Café a été formalisé en Californie au milieu des années 1990 par Juanita Brown et David Isaacs. La fiche Multibao décrit les rôles et un cas réel, la version « expert » (guide de la Fondation Roi Baudouin) détaille préparation et facilitation, l’Action World Café et la recette Art of Hosting en proposent des lectures orientées résultat.</p>
<h4>Les sept principes de conception</h4>
<ol>
<li>Clarifier le contexte&nbsp;: objectif, personnes à inviter, temps disponible, meilleur résultat envisageable.</li>
<li>Créer un espace hospitalier et « sûr »&nbsp;: tables rondes de quatre (trois est trop peu, cinq limite l’interaction), nappes en papier, feutres, fleurs, musique douce, boissons.</li>
<li>Explorer des questions qui comptent.</li>
<li>Encourager la contribution de chacun·e, au besoin avec un objet de parole.</li>
<li>Connecter les perspectives par la rotation entre tables.</li>
<li>Écouter ensemble ce qui émerge&nbsp;: motifs, questions profondes.</li>
<li>Récolter et partager les découvertes collectives.</li>
</ol>
<h4>Rôles</h4>
<p>Le·la facilitateur·rice nomme le Café selon sa finalité, rédige l’invitation comme une exploration ouverte, affiche questions et règlement sur chaque table, circule, encourage à dessiner et signale les rotations. L’<strong>hôte de table</strong>, volontaire, reste en place, rappelle de noter les connexions, accueille les nouveaux venus et résume les idées fortes du tour précédent. Les autres sont des « voyageur·ses » ou « ambassadeur·rices de sens ».</p>
<h4>Questions puissantes</h4>
<p>Une bonne question est simple, ouverte, génère de l’énergie et révèle des hypothèses inconscientes. La version expert met en garde contre « Qu’est-ce qui ne va pas et à qui la faute&nbsp;? » et contre les questions sur la vérité, qui crispent&nbsp;: viser ce qui est utile. Chez Art of Hosting, les trois questions sont co-créées entre le client, qui connaît la finalité, et les animateur·rices, qui savent les formuler. L’exemple Multibao des journées de la restauration collective responsable (Fondation Nicolas Hulot) illustre la progression&nbsp;: bien-être des concitoyens, besoins d’un approvisionnement responsable, solutions dans mon métier.</p>
<h4>Récolte</h4>
<p>Cinq façons de rendre visible&nbsp;: rapporteur·rice graphique, nappes affichées au mur, une idée clé par grande feuille, groupes d’affinités de post-it, journal publié après coup. La plénière demande à chaque table l’essentiel de ses découvertes, puis un silence sur « S’il y avait une seule voix dans la pièce, que dirait-elle&nbsp;? ». Multibao ajoute un vote facultatif et une synthèse envoyée à tous. Compter 4 heures au minimum, de 12 à 1 200 personnes.</p>
<h4>Variantes</h4>
<ul>
<li><strong>Action World Café</strong> (David Delon et Lilian Ricaud)&nbsp;: chaque table porte un thème&nbsp;; une action par post-it, formulée par un verbe, « au niveau de l’eau » (ni « sauver la planète » ni « éteindre la lumière »). Trois tours de 15 min, lecture des post-it existants avant de compléter, puis priorisation (matrice impact/effort, vote à points).</li>
<li><strong>Version Art of Hosting</strong>&nbsp;: tours de 15 à 25 min, puis 5 min où la nouvelle tablée met en commun ce qui s’est dit ailleurs&nbsp;; la question « récolte » est partagée en présence du demandeur.</li>
</ul>
<h4>Limites</h4>
<ul>
<li>Sans introduction au sujet, les moins informé·es se retirent et les expert·es s’ennuient.</li>
<li>Adapté à l’exploration, moins à un plan de mise en œuvre détaillé&nbsp;; en dessous de 12 personnes, préférer un cercle de dialogue.</li>
</ul>
`,
};
