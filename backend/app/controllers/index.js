'use strict';

module.exports = (app) => {

  const controller = {};
  const MyCardsModel = app.models.myCards;
  const ExtractsFinalModel = app.models.extractsFinal;


  controller.listMyCards = (req, res) => {
    res.status(200).json(MyCardsModel);
  };

  controller.listExtractsFinal = (req, res) => {
    res.status(200).json(ExtractsFinalModel);
  };

  return controller;
};
