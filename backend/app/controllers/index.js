'use strict';

module.exports = (app) => {

  const controller = {};
  const AlimentacaoModel = app.models.cardAlimentacao;
  const ExtractsFinalModel = app.models.extractsFinal;


  controller.getAlimentacao = (req, res) => {
    res.status(200).json(AlimentacaoModel);
  };

  controller.listExtractsFinal = (req, res) => {
    res.status(200).json(ExtractsFinalModel);
  };

  return controller;
};
