'use strict';

module.exports = (app) => {

  const controller = {};
  const AlimentacaoModel = app.models.cardAlimentacao;
  const RefeicaoModel = app.models.cardRefeicao;
  const AutoModel = app.models.cardAuto;
  const ExtractsFinalModel = app.models.extractsFinal;


  controller.getAlimentacao = (req, res) => {
    res.status(200).json(AlimentacaoModel);
  };

  controller.getRefeicao = (req, res) => {
    res.status(200).json(RefeicaoModel);
  };

  controller.getAuto = (req, res) => {
    res.status(200).json(AutoModel);
  };

  controller.listExtractsFinal = (req, res) => {
    res.status(200).json(ExtractsFinalModel);
  };

  return controller;
};
