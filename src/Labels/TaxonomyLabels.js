const TaxonomyLabels = {
  name: {
    label: "%1$s",
    plural: true,
    fn: "_x",
    context: "taxonomy general name",
  },
  singular_name: {
    label: "%1$s",
    fn: "_x",
    context: "taxonomy singular name",
  },
  menu_name: {
    label: "%1$s",
    plural: true,
  },
  search_items: {
    label: "Rechercher des %1$s",
    plural: true,
  },
  popular_items: {
    label: "%1$s populaires",
    plural: true,
  },
  all_items: {
    label: {
      f: "Toutes les %1$s",
      m: "Tous les %1$s",
    },
  },
  parent_item: {
    label: {
      f: "%1$s parente",
      m: "%1$s parent",
    },
  },
  parent_item_colon: {
    label: {
      f: "%1$s parente :",
      m: "%1$s parent :",
    },
  },
  edit_item: {
    label: {
      f: "Modifier la %1$s",
      m: "Modifier le %1$s",
    },
    elision: {
      search: {
        f: "la ",
        m: "le ",
      },
      replace: "l’",
    },
  },
  view_item: {
    label: {
      f: "Voir la %1$s",
      m: "Voir le %1$s",
    },
    elision: {
      search: {
        f: "la ",
        m: "le ",
      },
      replace: "l’",
    },
  },
  update_item: {
    label: {
      f: "Mettre à jour la %1$s",
      m: "Mettre à jour le %1$s",
    },
    elision: {
      search: {
        f: "la ",
        m: "le ",
      },
      replace: "l’",
    },
  },
  add_new_item: {
    label: {
      f: "Ajouter une nouvelle %1$s",
      m: "Ajouter un nouveau %1$s",
    },
    elision: {
      search: ["nouveau", "nouvelle"],
      replace: "nouvel",
    },
  },
  new_item_name: {
    label: {
      f: "Nom de la nouvelle %1$s",
      m: "Nom du nouveau %1$s",
    },
    elision: {
      search: {
        f: "nouvelle",
        m: "nouveau",
      },
      replace: "nouvel",
    },
  },
  separate_items_with_commas: {
    label: "Séparer les %1$s avec des virgules",
    plural: true,
  },
  add_or_remove_items: {
    label: "Ajouter ou supprimer des %1$s",
    plural: true,
  },
  choose_from_most_used: {
    label: {
      f: "Choisir parmi les %1$s les plus utilisées",
      m: "Choisir parmi les %1$s les plus utilisés",
    },
    plural: true,
  },
  not_found: {
    label: {
      f: "Aucune %1$s trouvée",
      m: "Aucun %1$s trouvé",
    },
  },
  no_terms: {
    label: {
      f: "Aucune %1$s",
      m: "Aucun %1$s",
    },
  },
  filter_by_item: {
    label: "Filtrer par %1$s",
  },
  items_list_navigation: {
    label: "Navigation de la liste des %1$s",
    plural: true,
  },
  items_list: {
    label: "Liste des %1$s",
    plural: true,
  },
  most_used: {
    label: {
      f: "Plus utilisées",
      m: "Plus utilisés",
    },
    fn: "_x",
    plural: true,
    context: "most used",
  },
  back_to_items: {
    label: "&larr; Aller aux %1$s",
    plural: true,
  },
  // item_link: {
  //   label: "Tag Link",
  //   fn: "_x",
  //   context: "navigation link block title",
  // },
  // item_link_description: {
  //   label: {
  //     f: "Un lien vers la %1$s",
  //     m: "Un lien vers le %1$s",
  //   },
  //   elision: {
  //     search: ["le ", "la "],
  //     replace: "l’",
  //   },
  //   fn: "_x",
  //   context: "navigation link block description",
  // },
};

export default TaxonomyLabels;
