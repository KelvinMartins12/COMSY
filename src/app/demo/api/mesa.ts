export interface Mesa {
    id?: string;
    estado?: string;
    name?: string;
}
export enum MesaEstado {
    EncaminhadoPraCozinha = 0,
    ProntoParaServir = 0,
    Disponivel = 0,
    AguardandoPagamento = 0,
    Limpeza = 0
}
