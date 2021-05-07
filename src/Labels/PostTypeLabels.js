const PostTypeLabels = {
  name: {
    label: "%1$s",
    plural: true,
    fn: "_x",
    context: "post type general name",
  },
  singular_name: {
    label: "%1$s",
    fn: "_x",
    context: "post type singular name",
  },
  menu_name: {
    label: "%1$s",
    plural: true,
  },
  add_new: {
    label: "Ajouter",
  },
  add_new_item: {
    label: {
      f: "Ajouter une nouvelle %1$s",
      m: "Ajouter un nouveau %1$s",
    },
    elision: {
      search: {
        f: "nouvelle",
        m: "nouveau",
      },
      replace: "nouvel",
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
  new_item: {
    label: {
      f: "Nouvelle %1$s",
      m: "Nouveau %1$s",
    },
    elision: {
      search: {
        f: "nouvelle",
        m: "nouveau",
      },
      replace: "nouvel",
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
  view_items: {
    label: "Voir les %1$s",
    plural: true,
  },
  search_items: {
    label: "Rechercher dans les %1$s",
    plural: true,
  },
  not_found: {
    label: {
      f: "Aucune %1$s trouvée.",
      m: "Aucun %1$s trouvé.",
    },
  },
  not_found_in_trash: {
    label: {
      f: "Aucune %1$s trouvée dans la corbeille",
      m: "Aucun %1$s trouvé dans la corbeille",
    },
  },
  parent_item_colon: {
    label: {
      f: "%1$s parente :",
      m: "%1$s parent :",
    },
  },
  all_items: {
    label: {
      f: "Toutes les %1$s",
      m: "Tous les %1$s",
    },
    plural: true,
  },
  archives: {
    label: "Archive des %1$s",
    plural: true,
  },
  attributes: {
    label: {
      f: "Attributs de la %1$s",
      m: "Attributs du %1$s",
    },
    elision: {
      search: {
        f: "de la ",
        m: "du ",
      },
      replace: "de l’",
    },
  },
  insert_into_item: {
    label: {
      f: "Insérer dans la %1$s",
      m: "Insérer dans le %1$s",
    },
    elision: {
      search: {
        f: "la ",
        m: "le ",
      },
      replace: "l’",
    },
  },
  uploaded_to_this_item: {
    label: {
      f: "Téléversé sur cette %1$s",
      m: "Téléversé sur ce %1$s",
    },
    elision: {
      search: {
        f: "la ",
        m: "ce ",
      },
      replace: "cet ",
    },
  },
  feature_image: {
    label: "Image à la une",
  },
  set_featured_image: {
    label: "Utiliser comme image à la une",
  },
  remove_featured_image: {
    label: "Supprimer l’image à la une",
  },
  use_featured_image: {
    label: "Utiliser comme image à la une",
  },
  filter_items_list: {
    label: "Filtrer la liste des %1$s",
    plural: true,
  },
  filter_by_date: {
    label: "Filtrer par date",
  },
  items_list_navigation: {
    label: "Navigation de la liste des %1$s",
    plural: true,
  },
  items_list: {
    label: "Liste des %1$s",
    plural: true,
  },
  item_published: {
    label: {
      f: "%1$s publiée",
      m: "%1$s publié",
    },
  },
  item_published_privately: {
    label: {
      f: "%1$s mise en ligne en privé.",
      m: "%1$s mis en ligne en privé.",
    },
  },
  item_reverted_to_draft: {
    label: {
      f: "%1$s reconvertie en brouillon.",
      m: "%1$s reconverti en brouillon.",
    },
  },
  item_scheduled: {
    label: {
      f: "%1$s planifiée.",
      m: "%1$s planifié.",
    },
  },
  item_updated: {
    label: {
      f: "%1$s mise à jour.",
      m: "%1$s mis à jour.",
    },
  },
  // item_link: {
  //     label: {
  //         f: 'Lien de la %1$s',
  //         m: 'Lien du %1$s',
  //     },
  //     fn: '_x',
  //     context: 'navigation link block title',
  //     elision: {
  //         search: ['du ', 'la '],
  //         replace: 'de l’',
  //     },
  // },
  // item_link_description: {
  //     label: {
  //         f: 'Un lien vers la %1$s',
  //         m: 'Un lien vers le %1$s',
  //     },
  //     elision: {
  //         search: ['le ', 'la '],
  //         replace: 'l’',
  //     },
  // },
};

export default PostTypeLabels;
