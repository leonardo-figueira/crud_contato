import { request, response } from "express";
import contatoService from "../services/contato.service.js";

async function createContatoController(request, response) {
    const novoContato = request.body;

    try {
        const contato = await contatoService.createContatoService(novoContato);
        response.status(201).send(contato);
    } catch (error) {
        response.status(400).send(error.message);
    }
}

async function findAllContatoController(request, response) {
    try {
        const contatos = await contatoService.findAllContatoService();
        response.status(200).send(contatos);
    } catch (error) {
        response.status(404).send(error.message);
    }
}

async function findContatoByIdController(request, response) {
    const { id } = request.params;
    
    try {
        const contato = await contatoService.findContatoByIdService(id);
        response.status(200).send(contato);
    } catch (error) {
        response.status(404).send(error.message);
    }
}

async function updateContatoController(request, response) {
    const { id } = request.params;
    const dadosContato = request.body;

    try {
        const retorno = await contatoService.updateContatoService(id, dadosContato);
        response.status(200).send(retorno);
    } catch (error) {
        response.status(400).send(error.message);
    }
}

async function deleteContatoController(request, response) {
    const { id } = request.params;

    try {
        const retorno = await contatoService.deleteContatoService(id);
        response.status(200).send(retorno);
    } catch (error) {
        response.status(400).send(error.message);
    }
}

export default {
    createContatoController,
    findAllContatoController,
    findContatoByIdController,
    updateContatoController,
    deleteContatoController
}