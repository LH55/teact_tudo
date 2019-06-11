import { STATUS_CODES } from 'http';

const Todo = require('./tudo')

Todo.methods(['get','post','put','delete'])
Tudo.updateOptions({new: true, runValidators:true})

module.exports = Todo