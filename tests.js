const xhr = window.xhr;

QUnit.test(
  'get success',
  assert => {
    const done = assert.async();
    xhr.get(
      'https://jsonplaceholder.typicode.com/posts/1',
      (err, data) => {
        const post = JSON.parse(data);
        assert.ok( post.id === 1, 'id correct' );
        assert.ok( err === null, 'err is null' );
        done();
      }
    )
  }
);

QUnit.test(
  'get 404',
  assert => {
    const done = assert.async();
    xhr.get(
      'http://httpstat.us/404',
      (err, data) => {
        assert.ok( err.constructor === Error, 'err created correctly' );
        assert.ok( err.message === 'Bad Status code: 404', 'correct error message' );
        done();
      }
    )
  }
);

QUnit.test(
  'get 401',
  assert => {
    const done = assert.async();
    xhr.get(
      'http://httpstat.us/401',
      (err, data) => {
        assert.ok( err.constructor === Error, 'err created correctly' );
        assert.ok( err.message === 'Bad Status code: 401', 'correct error message' );
        done();
      }
    )
  }
);

QUnit.test(
  'getJson success',
  assert => {
    const done = assert.async();
    xhr.getJson(
      'https://jsonplaceholder.typicode.com/posts/2',
      (err, post) => {
        assert.ok( post.id === 2, 'id correct' );
        assert.ok( err === null, 'err is null' );
        done();
      }
    )
  }
);



QUnit.test(
  'getJson fail',
  assert => {
    const done = assert.async();
    xhr.getJson(
      'http://httpstat.us/200',
      (err, post) => {
        assert.ok( err.constructor === Error, 'err created correctly' );
        assert.ok( err.message === 'JSON failed to parse', 'correct error message' );
        done();
      }
    )
  }
);
