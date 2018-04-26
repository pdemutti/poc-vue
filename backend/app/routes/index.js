'use strict';

module.exports = (app) => {

  const controller = app.controllers.index

  app.route('/myCards/alimentacao')
    .get(controller.getAlimentacao);

  app.route('/extractsFinal')
    .get(controller.listExtractsFinal);

};
