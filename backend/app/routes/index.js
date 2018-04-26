'use strict';

module.exports = (app) => {

  const controller = app.controllers.index

  app.route('/myCards/alimentacao')
    .get(controller.getAlimentacao);

  app.route('/myCards/refeicao')
    .get(controller.getRefeicao);

  app.route('/myCards/auto')
    .get(controller.getAuto);

  app.route('/extractsFinal')
    .get(controller.listExtractsFinal);

};
