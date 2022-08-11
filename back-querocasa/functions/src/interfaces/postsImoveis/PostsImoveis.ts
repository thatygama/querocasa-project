export interface PostsImoveis {
    id: string;
    title: string;
    subtitle: string | null;
    body: string;
    rent: Boolean;
    sell: Boolean;
    comments: string[] | null;
    endereco_imovel: Object | null;
    created_at: string;
    date_start: string | null;
    date_end: string | null;
}