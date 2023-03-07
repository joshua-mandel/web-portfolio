interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

//END HERE TIMESTAMP 3:05:07 IN VIDEO

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}