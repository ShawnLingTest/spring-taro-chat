declare namespace API {
  namespace Contact {
   
    type ContactListParams = {}

    type ContactListItem = {
      title: string;
      key: string;
      items: {
        avatar: string;
        name: string;
      }[];
    }

    type ContactListResult = ContactListItem[];
  }
}
