export interface ContratosImoveis {
    register: string;
    title: string;
    body: string;
    rent: Boolean,
    sell: Boolean,
    endereco_imovel: Object;
    owner_contrato: string;
    client_contrato: Object;
    date_start: string | null;
    date_end: string | null;
}