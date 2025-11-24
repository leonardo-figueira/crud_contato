import contatoRepository from "../repositories/contato.repository.js";

async function createContatoService(novoContato) {
    const contato = await contatoRepository.createContatoRepository(novoContato);

    if (!contato) {
        throw new Error("Erro ao criar novo contato!");
    }

    return contato;
}

async function findAllContatoService() {
    const contatos = await contatoRepository.findAllContatoRepository();
    return contatos;
}

async function findContatoByIdService(id) {
    const contato = await contatoRepository.findContatoByIdRepository(id);

    if (!contato) {
        throw new Error("Contato não encontrado!");
    }

    return contato
}

async function updateContatoService(id, dadosContato) {
    const contato = await contatoRepository.findContatoByIdRepository(id);

    if (!contato) {
        throw new Error("Contato não encontrado!");
    }

    const mensagemRetorno =  await contatoRepository.updateContatoRepository(id, dadosContato);

    if (!mensagemRetorno) {
        throw new Error("Erro ao editar contato!");
    }

    return mensagemRetorno;    
}

async function deleteContatoService(id) {
    const contato = await contatoRepository.findContatoByIdRepository(id);

    if (!contato) {
        throw new Error("Contato não encontrado!");
    }

    const mensagemRetorno =  await contatoRepository.deleteContatoRepository(id);

    if (!mensagemRetorno) {
        throw new Error("Erro ao deletear contato!");
    }

    return mensagemRetorno;
}

export default {
    createContatoService,
    findAllContatoService,
    findContatoByIdService,
    updateContatoService,
    deleteContatoService
}