window.TrelloPowerUp.initialize({
    'card-buttons': function(t, options) {
      return [{
        text: 'Selecionar Empresa',
        callback: function(t) {
          return t.popup({
            title: 'Selecione uma Empresa',
            url: './index.html',
            height: 200
          });
        }
      }];
    }
  });
  