
interface User {
  username: string;
  password: string;
}

// Layout stuff
type TableItemAlignment = "start" | "center" | "end";
interface TableHeaderKey {
  title: string;
  key: string;
  sortable?: boolean;
  align?: TableItemAlignment;
  type?: string; // support constants.translatedTableKeys.type
}
// System
interface VueRoute {
  fullPath: string;
  hash: string;
  matched: string;
  meta: string;
  name: string;
  path: string;
  params: {
    [key: string]: any;
  };
  query: Record<string, (string | null) | (string | null)[]>;
  redirectedFrom: any;
}