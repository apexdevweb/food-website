# backend/logic.py

FORMALITE = {
    "bonjour": [
        "Bonjour Je suis Solline, votre assistante virtuelle culinaire !",
        "Vous pouvez me poser des questions sur le menu ou les horaires du restaurant"
    ],
    "merci": [
        "Avec plaisir",
        "Je suis ravie de pouvoir vous aider !"
    ],
    "au revoir": [
        "Au revoir, à bientôt au restaurant !"
    ]
}

RECETTES = {
    "entrees": [
        "Quel genre d'entree désiré-vous ?",
        "entree viande",
        "entree poisson"
    ],
    "plats": [
        "Quel genre de plat souhaitez-vous ?",
        "Viandes ?",
        "Poissons ?"
    ],
    "desserts": [
        "Voici la liste des desserts:",
        "Tiramisu maison ",
        "Mousse au chocolat ",
        "Crème brûlée "
    ],
    "boissons": [
        "Quel genre de boisson souhaitez-vous:",
        "Boissons chaudes ?",
        "Boissons fraîche ?",
    ],
    "vins": [
        "Avez-vous une préférence:",
        "Vin blanc ?",
        "Vin rouge ?",
        "Vin rosé ?"
    ],
    "champagnes": [
        "Voici la liste de nos champagnes:",
        "Dom Pérignon",
        "Paul Roger",
        "Veuve Clicquot"
    ],
}

PLATS = {
    "viandes": [
        "Voici les spécialité du restaurant à base de viande:",
        "Bœuf Bourguignon",
        "Coq au Vin",
        "Cassoulet",
        "Gigot d’agneau rôti",
        "Blanquette de veau"
    ],
    "poissons": [
        "Nos spécialité à base de poissons:",
        "Bouillabaisse",
        "Sole meunière",
        "Brandade de morue",
        "Truite aux amandes",
        "Blanquette de lotte"
    ],
}
BOISSONS = {
    "boisson chaude": [
        "Voici la liste de nos boissons chaudes:",
        "Café",
        "Thé a la menthe",
        "Thé au citron"
    ],
    "boisson fraîche": [
        "Voici la liste de nos boissons fraîches:",
        "Ice-tea",
        "Perrier",
        "Spa gazeuse et non-gazeuse",
        "Coca-cola",
        "Limonade"
    ],
}
ENTREE = {
    "entree viande": [
        "Voici la liste de nos entree à base de viande:",
        "Terrine de campagne",
        "Salade landaise",
        "Carpaccio de bœuf"
    ],
    "entree poisson": [
        "Voici la liste de nos entree à base de poisson:",
        "Tartare de saumon",
        "Rillettes de maquereau",
        "Terrine de poisson (par exemple de sandre ou de saumon)"
    ],
}


def obtenir_recettes(ingredient: str):
    """
    Retourne les réponses correspondantes à la demande utilisateur.
    Recherche simple avec 'in' (équivalent à LIKE '%mot%').
    """
    if not ingredient:
        return ["Veuillez entrer un mot-clé ou une question."]

    texte = ingredient.lower().strip()
    suggestions = []

    # 1Vérifie d'abord les formules de politesse
    for mot, reponses in FORMALITE.items():
        if mot in texte:
            suggestions.extend(reponses)

    # 2️Cherche dans les catégories principales du menu
    for key, recettes in RECETTES.items():
        if key in texte:
            suggestions.extend(recettes)

    # 3️Recherche spécifique dans les plats viande/poisson
    for key, plats in PLATS.items():
        if key in texte:
            suggestions.extend(plats)
    
    # 4Recherche spécifique dans les boissons chaude/fraîche
    for key, boissons in BOISSONS.items():
        if key in texte:
            suggestions.extend(boissons)
   
    # 5Recherche spécifique dans les entree viande/poisson
    for key, entrees in ENTREE.items():
        if key in texte:
            suggestions.extend(entrees)

    # Si aucune correspondance trouvée
    if not suggestions:
        return [f"Désolé, je n’ai trouvé aucune information pour « {ingredient} »"]

    return suggestions

