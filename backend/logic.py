RECETTES = {
    "tomate": ["Salade de tomates fraîches", "Soupe à la tomate", "Pâtes à la sauce tomate"],
    "poulet": ["Poulet rôti", "Curry de poulet coco", "Salade César au poulet"],
    "thon": ["Sandwich au thon", "Salade niçoise", "Pâtes au thon et citron"],
    "pomme": ["Tarte aux pommes", "Compote maison", "Pommes caramélisées"],
    "chocolat": ["Fondant au chocolat", "Mousse au chocolat", "Gâteau marbré"],
    "riz": ["Riz cantonais", "Risotto aux champignons", "Sushi maison"],
}


def obtenir_recettes(ingredient: str):
    """
    Retourne les recettes correspondant à l'ingrédient fourni.
    Recherche simple avec l'opérateur 'in' (comme LIKE '%mot%' en SQL).
    """
    if not ingredient:
        return ["Veuillez entrer un ingrédient."]

    ingredient = ingredient.lower().strip()
    suggestions = []

    # Parcours de toutes les clés du dictionnaire
    for key, recettes in RECETTES.items():
        if ingredient in key.lower():  # équivalent de LIKE '%mot%'
            suggestions.extend(recettes)

    if not suggestions:
        return [f"Aucune recette trouvée pour '{ingredient}'"]

    return suggestions
