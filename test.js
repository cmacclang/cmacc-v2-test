const url = require('path');
const assert = require('assert');
const cmacc = require('cmacc-compiler');

describe('test', function () {

  global.fs = require('fs');



  function run(file) {

    const input = url.join('file://', __dirname, 'draft/' + file + '.cmacc')
    const output = url.join(__dirname, 'draft/' + file + '.html')

    return cmacc.compile(input)
      .then(ast => {
        //console.log(ast)
        return ast;
      })
      .then(cmacc.render)
      .then(md => {
        return cmacc.remarkable.render(md)
      })
      .then(html => {
        //fs.writeFileSync(output, html)
        const expect = fs.readFileSync(output).toString();
        assert.equal(html, expect)
        //console.log(html)
        return html;
      })
  }

  it('Draft1', function (done) {
    run('Draft1')
      .then(html =>
        done()
      )
      .catch(done);
  });

  it('Draft2', function (done) {
    run('Draft2')
      .then(html =>
        done()
      )
      .catch(done);
  });

  it('Draft3', function (done) {
    run('Draft3')
      .then(html =>
        done()
      )
      .catch(done);
  });

  it('Draft4', function (done) {
    run('Draft4')
      .then(html =>
        done()
      )
      .catch(done);
  });

  it('Draft5', function (done) {
    run('Draft5')
      .then(html =>
        done()
      )
      .catch(done);
  });

});