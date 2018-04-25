'use strict';

module.exports = (app) => {

  const controller = app.controllers.index

  app.route('/myCards')
    .get(controller.listMyCards);

  app.route('/extractsFinal')
    .get(controller.listExtractsFinal);

};
