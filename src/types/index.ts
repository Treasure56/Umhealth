export type Paginated<T = unknown> = {
  items: T[];
  hasPreviousPage: boolean;
  previousPages: number;
  hasNextPage: boolean;
  nextPages: number;
  totalPages: number;
  totalDocuments: number;
  currentPage: number;
};


export type ApiResponse<T = unknown> = {
  status: number;
  message: string;
  data: T;
  fieldErrors: Record<string, string[]>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}& Record<string, any>

export type AppPageError = {
  error: Error & { digest?: string },
  reset: () => void
}
export type ActionResponse<T = unknown> = {
  error?: string,
  success?: string,
  data?: T,
  fieldErrors?: Record<string, string[]>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppPageProps<T = any, K = unknown> = { params?: Promise<T>, searchParams?: Promise<K> };
export type AppLayoutProps = Readonly<{ children: React.ReactNode }>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ANY = any