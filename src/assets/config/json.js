export const json = {
    "locale": "fr",
    "logoPosition": "right",
    "completedHtml": {
     "fr": "<h3>Validé avec succès</h3>"
    },
    "loadingHtml": {
     "fr": "<h3>Chargement...</h3>"
    },
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "checkbox",
        "name": "question2",
        "title": {
         "fr": "Quel est le type de propriété ?"
        },
        "isRequired": true,
        "choices": [
         "Appartement",
         "Maison",
         "Chambre d'hôtes",
         "Hôtel"
        ],
        "maxSelectedChoices": 1,
        "minSelectedChoices": 1
       },
       {
        "type": "checkbox",
        "name": "Categorie",
        "title": "Quel est le type de propriété ?",
        "isRequired": true,
        "choices": [
         "Un logement entier",
         "Une chambre"
        ],
        "maxSelectedChoices": 1,
        "minSelectedChoices": 1
       },
       {
        "type": "multipletext",
        "name": "Quelle est l'adresse de votre logement ?",
        "isRequired": true,
        "items": [
         {
          "name": "Adresse",
          "placeholder": "25 rue de Paris",
          "title": "Adresse"
         },
         {
          "name": "Code Postale",
          "placeholder": "75001",
          "inputType": "number"
         },
         {
          "name": "Ville",
          "placeholder": "Paris"
         }
        ]
       },
       {
        "type": "comment",
        "name": "question1",
        "title": "Racontez ce qui rend votre logement unique."
       }
      ]
     }
    ]
   }